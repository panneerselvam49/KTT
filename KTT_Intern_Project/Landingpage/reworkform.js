async function loginUser() {
  const email = document.getElementById('name').value;
  const password = document.getElementById('psw').value;
  
  try {
    const response = await fetch('http://localhost:3000/reworkedform', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    
    if (!response.ok) {
      throw new Error('Server error: ' + response.statusText);
    }
    
    const result = await response.json();
    
    if (result.success) {
      window.location.href = './landing.html';  // Navigate on successful login
    } else {
      alert('Login failed: ' + result.message);
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Error occurred during login: ' + error.message);
  }
}