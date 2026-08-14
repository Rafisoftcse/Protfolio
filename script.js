/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menu-btn");

const navMenu = document.querySelector(".nav-menu");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");


    if (document.body.classList.contains("light-mode")) {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML =
            '<i class="fas fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML =
            '<i class="fas fa-moon"></i>';

    }

});


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop = document.getElementById("back-to-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================================
   FOOTER YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contact-form");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Thank you for your message! Please contact me directly through email."
    );

    contactForm.reset();

});