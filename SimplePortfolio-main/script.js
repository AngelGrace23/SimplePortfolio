function updateHeadingText() {
    const heading = document.getElementById("main-heading");
    if (heading) {
        heading.innerText = "Angel Grace Gallo Estrologo";
        console.log("Heading updated successfully.");
    }
}

function showPersonalInfo() {
    const infoBox = document.getElementById("personal-info");
    if (infoBox) {
        infoBox.innerHTML = `
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> Angel Grace Gallo Estrologo</p>
            <p><strong>Course:</strong> Bachelor of Science in Information Technology</p>
            <p><strong>Location:</strong> Banga South Cotabato</p>
        `;
        infoBox.classList.add("show");
        infoBox.style.display = "block";
        infoBox.style.marginTop = "1rem";
        console.log("Personal info displayed.");
    }
}

function scrollToPersonalInfo() {
    const infoBox = document.getElementById("personal-info");
    if (infoBox) {
        infoBox.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function handlePersonalInfoClick(event) {
    if (event) {
        event.preventDefault();
    }
    showPersonalInfo();
    scrollToPersonalInfo();
}

function setTheme(theme) {
    const body = document.body;
    const toggleButton = document.getElementById("theme-toggle");

    if (!body || !toggleButton) {
        return;
    }

    if (theme === "dark") {
        body.classList.add("dark-theme");
        toggleButton.innerText = "Light Mode";
    } else {
        body.classList.remove("dark-theme");
        toggleButton.innerText = "Dark Mode";
    }

    console.log(`Theme changed to ${theme}.`);
}

function toggleTheme() {
    const isDark = document.body.classList.contains("dark-theme");
    setTheme(isDark ? "light" : "dark");
}

function initializePortfolio() {
    window.alert("Welcome! I am Angel Grace and this is my Simple portfolio!");
    console.log("Portfolio initialized.");
    updateHeadingText();
    setTheme("light");

    const themeButton = document.getElementById("theme-toggle");
    const infoButton = document.getElementById("info-btn");

    if (themeButton) {
        themeButton.addEventListener("click", toggleTheme);
    }

    if (infoButton) {
        infoButton.addEventListener("click", handlePersonalInfoClick);
        infoButton.onclick = handlePersonalInfoClick;
    }
}

window.showPersonalInfo = showPersonalInfo;
document.addEventListener("DOMContentLoaded", initializePortfolio);
