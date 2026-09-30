// ============================
// MOBILE MENU
// ============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// ============================
// NAVBAR EFFECT ON SCROLL
// ============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(15, 45, 24, 0.98)";
    } else {
        navbar.style.background = "rgba(20, 53, 30, 0.95)";
    }

});


// ============================
// SIMPLE SCROLL REVEAL
// ============================

const revealElements = document.querySelectorAll(
    ".facility-card, .gallery img, .package-card, .about-container"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
    observer.observe(element);
});


// ============================
// ADD REVEAL STYLES
// ============================

const revealStyle = document.createElement("style");

revealStyle.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.7s ease, transform 0.7s ease;
    }

    .reveal.show {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(revealStyle);
