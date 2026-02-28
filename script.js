window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scroll", window.scrollY > 50);
});

const textArray = ["Frontend Developer", "Web Designer", "Freelancer", "UI/UX Designer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const typingElement = document.querySelector(".typing");
    currentText = textArray[index];

    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex--);
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % textArray.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// Existing menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", function(e) {
    e.stopPropagation(); // click ko bubble hone se rok do
    nav.classList.toggle("active");
});

// Close menu if click outside
document.addEventListener("click", function(e) {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove("active");
    }
});

// Close menu on scroll
window.addEventListener("scroll", function() {
    nav.classList.remove("active");
});