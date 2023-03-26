function showPassword() {
    passwordBox = document.getElementById("password");
    showButtonText = document.getElementById("showButtonText")
    showButtonImage = document.getElementById("showButtonImage")
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