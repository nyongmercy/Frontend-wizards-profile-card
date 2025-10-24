const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  timeElement.textContent = Date.now();
}

// Set time once when page loads
updateTime();

// Optionally update every second
setInterval(updateTime, 1000);

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;
  const name = document.getElementById("name");
  const email = document.getElememtById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // Clear errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Validate Fields
  if (name.ariaValueMax.trim() === "") {
    document.getElementId("error-name").textContent = "Full name is required.";
    valid = false;
  }

  if (!email.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    document.getElementById("error-email").textContent = "Enter a valid email address.";
    valid = false;
  }

  if (subject.value.trim() === "") {
    document.getElementById("error-subject").textContent = "Subject is required.";
    valid = false;
  }

  if (message.value.trim().length < 10) {
    document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  // Show success message
  if (valid) {
    document.getElementById("success").style.display = "block";
    this.reset();
  }
});