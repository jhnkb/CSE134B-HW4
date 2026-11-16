
const themeButton = document.querySelector("#theme-toggle");

// Read the saved theme (default is light)
let currentTheme = "light";

try {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        currentTheme = "dark";
    }
} catch (error) {
    console.log("Unable to read theme preference.");
}

// Apply the saved theme
document.documentElement.dataset.theme = currentTheme;

// Update the button label
function updateThemeButton() {
    if (currentTheme === "dark") {
        themeButton.textContent = "☀ Light mode";
    } else {
        themeButton.textContent = "☾ Dark mode";
    }
}

if (themeButton) {
    updateThemeButton();
    themeButton.hidden = false;

    themeButton.addEventListener("click", function () {
        let newTheme;

        if (currentTheme === "dark") {
            newTheme = "light";
        } else {
            newTheme = "dark";
        }

        // Change the theme
        function applyTheme() {
            currentTheme = newTheme;
            document.documentElement.dataset.theme = currentTheme;
            updateThemeButton();
        }

        // Check whether the user prefers reduced motion
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        // Use the View Transition API when supported
        if (document.startViewTransition && !reducedMotion) {
            document.startViewTransition(applyTheme);
        } else {
            applyTheme();
        }

        // Save the selected theme
        try {
            localStorage.setItem("theme", newTheme);
        } catch (error) {
            console.log("Unable to save theme preference.");
        }
    });
}
