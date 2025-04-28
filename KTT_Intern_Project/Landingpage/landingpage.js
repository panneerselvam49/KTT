$(document).ready(function() {
  $('#mytable').DataTable();
  initializeCalendarDayListeners();
  initializeGridCellListeners();
});
let currentUserRole = '';
let map, marker;
function getUserRole() {
  const storedRole = sessionStorage.getItem('userRole');
  return storedRole || currentUserRole;
}
function initializeCalendarDayListeners() {
  const calendarDays = document.querySelectorAll('.day');
  calendarDays.forEach(day => {
    day.addEventListener('click', function() {
      const dayNumber = this.textContent;
      const monthYear = document.querySelector('.calendar-header h2').textContent;
      const visitDate = `${monthYear} ${dayNumber}`;
      formpopup(visitDate, "9 AM");
    });
  });
}
function formpopup(cellDate, cellTime) {
  const modal = document.getElementById('visit-modal');
  document.querySelector('.main-content').classList.add('blur-background');
  if (cellDate && cellTime) {
    document.getElementById('visit-date').value = cellDate;
    const visitTimeInput = document.getElementById('visit-time');
    visitTimeInput.value = cellTime;
  }
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('visit-modal');
  modal.style.display = 'none';
  document.querySelector('.main-content').classList.remove('blur-background');
  document.getElementById('visit-form').reset();
  const visitCompletedInput = document.getElementById('visits-completed');
  visitCompletedInput.style.display = 'none';
}
window.addEventListener('click', function(event) {
  const modal = document.getElementById('visit-modal');
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const visitStatusSelect = document.getElementById('visit-status');
  const visitCompletedInput = document.getElementById('visits-completed');
  visitStatusSelect.addEventListener('change', function() {
    if (visitStatusSelect.value === 'Completed') {
      visitCompletedInput.style.display = 'block';
    } else {
      visitCompletedInput.style.display = 'none';
    }
  });
  const employeeIdField = document.getElementById('employeeid');
  if (employeeIdField) {
    employeeIdField.addEventListener('input', function() {
      var employeeId = this.value;
      var formemp = document.getElementById('formemp');
      
      if (employeeId === '610') {
        formemp.disabled = false;
      } else {
        formemp.disabled = true;
      }
    });
  }
});
function initializeGridCellListeners() {
  const gridCells = document.querySelectorAll('.grid-cell');
  if (gridCells.length === 0) {
    console.warn("No grid cells found");
    return;
  }
  gridCells.forEach((cell, index) => {
    cell.addEventListener('click', function(e) {
      if (e.target.classList.contains('event') || e.target.closest('.event')) {
        return;
      }
      const columnIndex = (index % 8);
      if (columnIndex === 0) return;
      const dayHeaderCells = document.querySelectorAll('.day-header-cell');
      const dayHeader = dayHeaderCells[columnIndex];
      const dayNumber = dayHeader.querySelector('.day-number').textContent;
      const dateRangeText = document.querySelector('.date-range').textContent;
      const monthMatch = dateRangeText.match(/([A-Za-z]+)\s\d+\s-/);
      const yearMatch = dateRangeText.match(/,\s(\d{4})/);
      const month = monthMatch ? monthMatch[1] : "April";
      const year = yearMatch ? yearMatch[1] : "2025";
      const visitDate = `${month} ${dayNumber}, ${year}`;
      const rowIndex = Math.floor(index / 8);
      const timeLabels = document.querySelectorAll('.time-label');
      const timeLabel = timeLabels[rowIndex].textContent;
      formpopup(visitDate, timeLabel);
    });
  });
}

function openMapModal() {
  const modal = document.getElementById('map-modal');
  modal.style.display = 'flex';
  if (!map) {
    map = L.map('map').setView([20, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    map.on('click', function(e) {
      const lat = e.latlng.lat.toFixed(6);
      const lng = e.latlng.lng.toFixed(6);
      if (marker) {
        marker.setLatLng(e.latlng);
      } else {
        marker = L.marker(e.latlng).addTo(map);
      }
      document.getElementById('latitude').value = lat;
      document.getElementById('longitude').value = lng;
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
        .then(response => response.json())
        .then(data => {
          let address = data.display_name || `Lat: ${lat}, Lng: ${lng}`;
          document.getElementById('visit-location').value = address;
          closeMapModal();
        })
        .catch(error => {
          console.error('Reverse geocoding failed:', error);
          document.getElementById('visit-location').value = `Lat: ${lat}, Lng: ${lng}`;
          closeMapModal();
        });
    });
  }
  setTimeout(() => {
    map.invalidateSize();
  }, 300);
}

