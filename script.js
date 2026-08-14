 document.addEventListener("DOMContentLoaded", function () {

    // DARK / LIGHT MODE
    let modeButton = document.createElement("button");

    modeButton.className = "mode-button";
    modeButton.textContent = "🌙 Dark Mode";

    document.querySelector("header").appendChild(modeButton);

    // Check saved mode
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        modeButton.textContent = "☀️ Light Mode";
    }

    modeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            modeButton.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            modeButton.textContent = "🌙 Dark Mode";
        }

    });


    // WELCOME MESSAGE
    let welcomeButton = document.querySelector(".home button");

    if (welcomeButton) {
        welcomeButton.addEventListener("click", function () {
            alert("Welcome to Micheal Abeto's Portfolio!");
        });
    }


    // FOOTER YEAR
    let year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // PROJECT IMAGE ZOOM
    let images = document.querySelectorAll(".project-photo");

    images.forEach(function (image) {

        image.addEventListener("click", function () {
            image.classList.toggle("zoom");
        });

    });


    // SCROLL ANIMATION
    let sections = document.querySelectorAll("section");

    let observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.2
    });

    sections.forEach(function (section) {
        section.classList.add("hidden");
        observer.observe(section);
    });

});