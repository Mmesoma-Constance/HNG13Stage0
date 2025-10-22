// Contact Form Validation
const form = document.getElementById("contactForm");
if (form) {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const subjectField = document.getElementById("subject");
  const messageField = document.getElementById("message");
  const successMsg = document.getElementById("successMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
    successMsg.hidden = true;

    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // ✅ fixed regex

    if (nameField.value.trim() === "") {
      document.getElementById("error-name").textContent =
        "Full name is required.";
      valid = false;
    }

    if (!emailRegex.test(emailField.value.trim())) {
      document.getElementById("error-email").textContent =
        "Please enter a valid email.";
      valid = false;
    }

    if (subjectField.value.trim() === "") {
      document.getElementById("error-subject").textContent =
        "Subject is required.";
      valid = false;
    }

    if (messageField.value.trim().length < 10) {
      document.getElementById("error-message").textContent =
        "Message must be at least 10 characters.";
      valid = false;
    }

    if (valid) {
      successMsg.hidden = false;
      form.reset();

      setTimeout(() => {
        successMsg.hidden = true;
      }, 4000);
    }
  });
}
