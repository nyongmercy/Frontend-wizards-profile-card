const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  timeElement.textContent = Date.now();
}

// Set time once when page loads
updateTime();

// Optionally update every second
setInterval(updateTime, 1000);
