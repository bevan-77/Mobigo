// Form Validation
document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
        form.addEventListener("submit", (event) => {
            const inputs = form.querySelectorAll("input[required]");
            let isValid = true;

            inputs.forEach((input) => {
                if (!input.value.trim()) {
                    input.classList.add("is-invalid");
                    isValid = false;
                } else {
                    input.classList.remove("is-invalid");
                }
            });

            if (!isValid) {
                event.preventDefault();
                alert("Please fill in all required fields.");
            }
        });
    });
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Interactive Feedback for Buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.add("active");
        setTimeout(() => button.classList.remove("active"), 150);
    });
});

console.log("Mobigo script.js loaded successfully!");



