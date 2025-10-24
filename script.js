// Update Time
const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

updateTime();
setInterval(updateTime, 1000);

// Contact Form Validation
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const success = document.getElementById("success");

    // Reset error messages
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    success.style.display = "none";

    // Validation rules
    if (!name.value.trim()) {
      document.getElementById("error-name").textContent = "Full name is required.";
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      document.getElementById("error-email").textContent = "Enter a valid email address.";
      valid = false;
    }

    if (!subject.value.trim()) {
      document.getElementById("error-subject").textContent = "Subject is required.";
      valid = false;
    }

    if (message.value.trim().length < 10) {
      document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    // If all valid — show success message
    if (valid) {
      success.style.display = "block";
      form.reset();
    }
  });
}
