
const passwordButton = document.getElementById("passwordButton")
passwordButton.addEventListener("click", showPassword)

function showPassword() {
    let passwordBox = document.getElementById("password");
    let showButtonText = document.getElementById("showButtonText")
    let showButtonImage = document.getElementById("showButtonImage")
    if (passwordBox.type === "password") {
        passwordBox.type = "text";
        showButtonText.textContent = "Hide password"
        showButtonImage.src = "ressources/icons/eye.svg"
    } else if (passwordBox.type === "text") {
        passwordBox.type = "password";
        showButtonText.textContent = "Show password"
        showButtonImage.src = "ressources/icons/eye-off.svg"
    }
}