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

eval("var passwordButton = document.getElementById(\"passwordButton\");\npasswordButton.addEventListener(\"click\", showPassword);\nfunction showPassword() {\n  var passwordBox = document.getElementById(\"password\");\n  var showButtonText = document.getElementById(\"showButtonText\");\n  var showButtonImage = document.getElementById(\"showButtonImage\");\n  if (passwordBox.type === \"password\") {\n    passwordBox.type = \"text\";\n    showButtonText.textContent = \"Hide password\";\n    showButtonImage.src = \"ressources/icons/eye.svg\";\n  } else if (passwordBox.type === \"text\") {\n    passwordBox.type = \"password\";\n    showButtonText.textContent = \"Show password\";\n    showButtonImage.src = \"ressources/icons/eye-off.svg\";\n  }\n}\n\n//# sourceURL=webpack:///./Login.js?");

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