/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Login.js":
/*!******************!*\
  !*** ./Login.js ***!
  \******************/
/***/ (() => {

eval("/**\r\n * Note: Ce code est utilisé pour Login.html et Register.html\r\n */\nvar passwordButton = document.getElementById('passwordButton');\npasswordButton.addEventListener('click', showPassword);\nvar usernameBox = document.getElementById('username');\nvar emailBox = document.getElementById('email');\nvar passwordBox = document.getElementById('password');\nvar showButtonText = document.getElementById('showButtonText');\nvar showButtonImage = document.getElementById('showButtonImage');\n\n/**\r\n * Montre ou cache le mot de passe\r\n */\nfunction showPassword() {\n  if (passwordBox.type === 'password') {\n    passwordBox.type = 'text';\n    showButtonText.textContent = 'Hide password';\n    showButtonImage.src = 'ressources/icons/eye.svg';\n  } else if (passwordBox.type === 'text') {\n    passwordBox.type = 'password';\n    showButtonText.textContent = 'Show password';\n    showButtonImage.src = 'ressources/icons/eye-off.svg';\n  }\n}\nfunction getUsername() {\n  return usernameBox.value;\n}\nfunction getEmail() {\n  return emailBox.value;\n}\nfunction getPassword() {\n  return passwordBox.value;\n}\n\n//# sourceURL=webpack:///./Login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Login.js"]();
/******/ 	
/******/ })()
;