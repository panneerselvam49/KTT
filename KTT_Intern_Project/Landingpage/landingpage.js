// Global variable to store user role from login
let currentUserRole = '';

// Function to set user role (call this after login validation)
function setUserRole(role) {
  // 'role' should be either 'employee' or 'manager'
  currentUserRole = role;
  console.log('User role set to:', currentUserRole);
  
  // Store in session storage to persist between page loads
  sessionStorage.setItem('userRole', role);
}

// Function to get user role (call this when needed)
function getUserRole() {
  // Try to get from session storage first
  const storedRole = sessionStorage.getItem('userRole');
  return storedRole || currentUserRole;
}

function formpopup(cellDate, cellTime) {
  // Get reference to modal
  const modal = document.getElementById('visit-modal');
  
  // Apply blur effect to main content
  document.querySelector('.main-content').classList.add('blur-background');
  
  // Auto-select the appropriate user type based on login info
  const userRole = getUserRole();
  const userTypeSelect = document.getElementById('user-type');
  
  if (userRole) {
    userTypeSelect.value = userRole;
    handleUserTypeChange(); // Update form display based on role
    
    // Disable changing the role if already set
    userTypeSelect.disabled = true;
  }
  
  // Set date and time values based on clicked cell
  if (cellDate && cellTime) {
    document.getElementById('visit-date').value = cellDate;
    
    // Format and set the time
    const visitTimeInput = document.getElementById('visit-time');
    visitTimeInput.value = cellTime;
    
    // Calculate end time based on default duration (1 hour)
    const endTimeSelect = document.getElementById('visit-end-time');
    if (endTimeSelect) {
      const startTime = parseTimeString(cellTime);
      if (startTime) {
        // Default to 1 hour later
        let endHour = startTime.hour + 1;
        let meridiem = startTime.meridiem;
        
        // Handle hour rollover
        if (endHour > 12) {
          endHour = endHour - 12;
          meridiem = meridiem === 'AM' ? 'PM' : 'AM';
        }
        
        endTimeSelect.value = `${endHour} ${meridiem}`;
      }
    }
  }
  
  // Show the modal
  modal.style.display = 'flex';
}

function parseTimeString(timeStr) {
  // Parse time strings like "1 AM", "11 PM", etc.
  const regex = /(\d+)\s*(AM|PM)/i;
  const match = timeStr.match(regex);
  
  if (match) {
    return {
      hour: parseInt(match[1], 10),
      meridiem: match[2].toUpperCase()
    };
  }
  
  return null;
}

function calculateEndTime() {
  const startTimeStr = document.getElementById('visit-time').value;
  const duration = parseInt(document.getElementById('visit-duration').value, 10);
  const endTimeSelect = document.getElementById('visit-end-time');
  
  const startTime = parseTimeString(startTimeStr);
  if (startTime && endTimeSelect) {
    // Calculate hours to add
    const hoursToAdd = Math.floor(duration / 60);
    
    // Calculate new hour and handle AM/PM change
    let endHour = startTime.hour + hoursToAdd;
    let meridiem = startTime.meridiem;
    
    // Handle hour rollover
    if (endHour > 12) {
      if (endHour > 24) {
        // Multiple day rollovers
        const daysToAdd = Math.floor(endHour / 24);
        endHour = endHour % 12;
        if (endHour === 0) endHour = 12;
      } else {
        endHour = endHour - 12;
        meridiem = meridiem === 'AM' ? 'PM' : 'AM';
      }
    }
    
    endTimeSelect.value = `${endHour} ${meridiem}`;
  }
}

function closeModal() {
  const modal = document.getElementById('visit-modal');
  modal.style.display = 'none';
  
  // Remove blur effect
  document.querySelector('.main-content').classList.remove('blur-background');
  
  // Reset form
  document.getElementById('visit-form').reset();
  
  // Re-enable the user type select if it was disabled
  document.getElementById('user-type').disabled = false;
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
  const modal = document.getElementById('visit-modal');
  if (event.target === modal) {
    closeModal();
  }
});

// Function to handle user type selection
function handleUserTypeChange() {
  const userType = document.getElementById('user-type').value;
  const empDropdown = document.getElementById('employee-dropdown');
  const employeeIdField = document.getElementById('employee-id-field');
  
  if (userType === 'manager') {
    empDropdown.style.display = 'block';
    employeeIdField.style.display = 'none';
  } else {
    empDropdown.style.display = 'none';
    employeeIdField.style.display = 'block';
  }
}

function saveVisit() {
  // Form validation
  const form = document.getElementById('visit-form');
  if (!form.checkValidity()) {
    // Trigger native browser validation
    form.reportValidity();
    return;
  }
  
  // Get form values
  const formData = new FormData(form);
  const visitData = Object.fromEntries(formData);
  
  // Here you would typically send this data to your server
  console.log('Visit data to save:', visitData);
  
  // For demonstration, show a success message
  showNotification('Visit has been scheduled successfully!', 'success');
  
  // Close the modal
  closeModal();
  
  // Optional: Add the new visit to the UI
  addVisitToCalendar(visitData);
}

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  
  // Add to document
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

// Optional: Function to add the new visit to the calendar UI
function addVisitToCalendar(visitData) {
  // Implementation depends on your calendar structure
  // This is a placeholder for that functionality
  console.log('Adding visit to calendar:', visitData);
  
  // Example implementation would find the right grid cell and add an event
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Check if user role exists in session storage
  const storedRole = sessionStorage.getItem('userRole');
  if (storedRole) {
    currentUserRole = storedRole;
  }
  
  // Add listeners to grid cells for popup
  initializeGridCellListeners();
  
  // Add listener for duration changes
  const durationSelect = document.getElementById('visit-duration');
  if (durationSelect) {
    durationSelect.addEventListener('change', calculateEndTime);
  }
});

function initializeGridCellListeners() {
  const gridCells = document.querySelectorAll('.grid-cell');
  
  gridCells.forEach((cell, index) => {
    cell.addEventListener('click', function(e) {
      // Prevent triggering if clicking on an existing event
      if (e.target.classList.contains('event') || 
          e.target.closest('.event')) {
        return;
      }
      
      // Get the day from column header
      const columnIndex = index % 8; // 8 columns including time labels
      if (columnIndex === 0) return; // Skip time label column
      
      const dayHeaderCells = document.querySelectorAll('.day-header-cell');
      const dayHeader = dayHeaderCells[columnIndex];
      const dayNumber = dayHeader.querySelector('.day-number').textContent;
      const monthYear = document.querySelector('.date-range').textContent.split(' - ')[0].split(' ')[0] + ' ' + document.querySelector('.date-range').textContent.split(' - ')[1].split(', ')[1];
      const visitDate = monthYear + ' ' + dayNumber;
      
      // Get time from row
      const rowIndex = Math.floor(index / 8);
      const timeLabels = document.querySelectorAll('.time-label');
      const timeLabel = timeLabels[rowIndex].textContent;
      
      formpopup(visitDate, timeLabel);
    });
  });
}

// Mock login function for demonstration
function mockLogin(username, password, role) {
  // In a real app, you would validate credentials on the server
  // This is just for demonstration
  setUserRole(role);
  return true;
}

function initializeGridCellListeners() {
    const gridCells = document.querySelectorAll('.grid-cell');
    
    gridCells.forEach((cell, index) => {
      cell.addEventListener('click', function(e) {
        // Prevent triggering if clicking on an existing event
        if (e.target.classList.contains('event') || 
            e.target.closest('.event')) {
          return;
        }
        
        // Get the day from column header
        const columnIndex = (index % 8); // 8 columns including time labels
        if (columnIndex === 0) return; // Skip time label column
        
        const dayHeaderCells = document.querySelectorAll('.day-header-cell');
        const dayHeader = dayHeaderCells[columnIndex];
        const dayNumber = dayHeader.querySelector('.day-number').textContent;
        const monthYear = document.querySelector('.date-range').textContent.split(' - ')[0].split(' ')[0] + ' ' + document.querySelector('.date-range').textContent.split(' - ')[1].split(', ')[1];
        const visitDate = monthYear + ' ' + dayNumber;
        
        // Get time from row
        const rowIndex = Math.floor(index / 8);
        const timeLabels = document.querySelectorAll('.time-label');
        const timeLabel = timeLabels[rowIndex].textContent;
        
        formpopup(visitDate, timeLabel);
      });
    });
  }