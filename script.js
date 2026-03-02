// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Scroll Progress Bar
window.onscroll = function () {
    let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".progress-bar").style.width =
        scrolled + "%";
};

// Typing Effect
const textArray = [
    "Frontend Developer",
    "JavaScript Enthusiast",
    "B.Tech Student",
    "Future Full Stack Developer"
];

let typingIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing");

    if (!isDeleting && charIndex <= textArray[typingIndex].length) {
        currentText = textArray[typingIndex].substring(0, charIndex++);
    } else if (isDeleting && charIndex >= 0) {
        currentText = textArray[typingIndex].substring(0, charIndex--);
    }

    typingElement.textContent = currentText;

    if (charIndex === textArray[typingIndex].length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        typingIndex = (typingIndex + 1) % textArray.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});