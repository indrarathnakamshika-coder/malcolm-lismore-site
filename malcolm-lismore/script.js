// Smooth scroll for internal navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Form validation for contact form
function validateForm() {
  const name = document.forms["contactForm"]["name"].value;
  const email = document.forms["contactForm"]["email"].value;
  const msg = document.forms["contactForm"]["message"].value;

  if (!name || !email || !msg) {
    alert("Please fill all fields.");
    return false;
  }
  return true;
}
