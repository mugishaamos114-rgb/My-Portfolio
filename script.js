const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
// =========================
// ACTIVE NAVIGATION LINKS
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active-link");
        }

    });

});
// =========================
// SCROLL REVEAL
// =========================

const hiddenSections = document.querySelectorAll("section");

window.addEventListener("scroll", revealSections);

function revealSections(){

    hiddenSections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const triggerPoint = window.innerHeight / 1.2;

        if(sectionTop < triggerPoint){
            section.classList.add("show");
        }

    });

}

revealSections();