/**
 * Note: Ce code est utilisé pour Login.html et Register.html
 */
const passwordButton = document.getElementById('passwordButton');
passwordButton.addEventListener('click', showPassword);

let usernameBox = document.getElementById('username');
let emailBox = document.getElementById('email');
let passwordBox = document.getElementById('password');
let showButtonText = document.getElementById('showButtonText');
let showButtonImage = document.getElementById('showButtonImage');

/**
 * Montre ou cache le mot de passe
 */
function showPassword() {
	if (passwordBox.type === 'password') {
		passwordBox.type = 'text';
		showButtonText.textContent = 'Hide password';
		showButtonImage.src = 'ressources/icons/eye.svg';
	} else if (passwordBox.type === 'text') {
		passwordBox.type = 'password';
		showButtonText.textContent = 'Show password';
		showButtonImage.src = 'ressources/icons/eye-off.svg';
	}
}

function getUsername() {
	return usernameBox.value;
}

function getEmail() {
	return emailBox.value;
}

function getPassword() {
	return passwordBox.value;
}