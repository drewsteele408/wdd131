

const themeSelector = document.querySelector("select");
function changeTheme() {
    const selectedTheme = themeSelector.value;
    const bodyElement = document.body;
    const logoImage = document.querySelector("img");

    if (selectedTheme === "dark") {
        bodyElement.classList.add("dark");

        logoImage.src = "images/byui-logo_white.png"
    } else {
        bodyElement.classList.remove("dark");
        logoImage.src = "images/byui-logo.webp";
    }
}

themeSelector.addEventListener("change", changeTheme);