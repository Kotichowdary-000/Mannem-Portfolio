// Handle mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Close nav on link click (mobile)
    navLinks.addEventListener("click", (e) => {
        if (e.target.classList.contains("nav-link")) {
            navLinks.classList.remove("show");
        }
    });
}

// Smooth scroll (extra safety for older browsers)
// document.querySelectorAll('a[href^="#"]').forEach((link) => {
//     link.addEventListener("click", function (e) {
//         const targetId = this.getAttribute("href").slice(1);
//         const targetElement = document.getElementById(targetId);

//         if (targetElement) {
//             e.preventDefault();
//             targetElement.scrollIntoView({ behavior: "smooth" });
//         }
//     });
// });

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Simple contact form validation + success message (front-end only)
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

if (contactForm && formSuccess) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (!name || !email || !message) {
            formSuccess.textContent = "Please fill out all required fields.";
            formSuccess.style.color = "#f97373";
            return;
        }

        // Very basic email pattern check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formSuccess.textContent = "Please enter a valid email address.";
            formSuccess.style.color = "#f97373";
            return;
        }

        // Simulate successful form submission
        formSuccess.textContent = "Thank you! Your message has been recorded.";
        formSuccess.style.color = "#22c55e";

        contactForm.reset();
    });
}
