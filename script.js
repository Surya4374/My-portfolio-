// Navbar scroll effect
window.addEventListener("scroll", function(){
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function(){
    nav.classList.toggle("active");
});

// Close mobile menu on link click or outside click
document.addEventListener("click", function(e){
    if(!nav.contains(e.target) && !menuToggle.contains(e.target)){
        nav.classList.remove("active");
    }
});

// Typing effect
const textArray = ["Frontend Developer", "Web Designer", "Freelancer", "UI/UX Designer"];
let index = 0, charIndex = 0, currentText = "", isDeleting = false;

function typeEffect(){
    const typingElement = document.querySelector(".typing");
    currentText = textArray[index];
    if(!isDeleting){
        typingElement.textContent = currentText.substring(0, charIndex++);
        if(charIndex > currentText.length){
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex--);
        if(charIndex === 0){
            isDeleting = false;
            index = (index + 1) % textArray.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// Scroll animations
const faders = document.querySelectorAll('.animate-fade');
const sliders = document.querySelectorAll('.animate-slide');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translate(0)";
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
sliders.forEach(slider => appearOnScroll.observe(slider));
