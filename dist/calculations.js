/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./calculations.js":
/*!*************************!*\
  !*** ./calculations.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ \"./components.js\");\n/* harmony import */ var _circuit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circuit.js */ \"./circuit.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n/*\r\n\r\nKirchhoff's laws : \r\nCurrent law -> current going in - current going out = 0\r\nVoltage law -> sum of the difference of potentials inside a loop = 0\r\n\r\nOhm's law :\r\nI = V/R\r\n\r\n\r\nCALCULATING CURRENT : \r\n- To find the current, we must know a circuit's total voltage and total resistance.\r\n- The total voltage V is found by simply looking at he source.\r\nThe total resistance R is calculated by simplifying the circuit (series/parallel)\r\nuntil only one resistor remains.\r\n- We then use Ohm's law to find the current\r\n\r\nCALCULATING DIFFERENCE OF VOLTAGE AT 2 POINTS\r\n- \r\n*/\nvar Calculator = /*#__PURE__*/function () {\n  function Calculator() {\n    _classCallCheck(this, Calculator);\n  }\n  _createClass(Calculator, [{\n    key: \"calculateResistance\",\n    value: function calculateResistance(circuit) {\n      // create an array of all resistors\n      var resistors = [];\n      for (var i = 0; i < circuit.listOfComponents.length; i++) {\n        if (circuit[i] instanceof _components_js__WEBPACK_IMPORTED_MODULE_0__.Resistor) {\n          resistors.push(circuit[i]);\n        }\n      }\n\n      // SIMPLIFY CIRCUIT -> if series / if parallel\n\n      while (resistors.length > 1) {\n        for (var _i = 0; _i < resistors.length; _i++) {\n          // series\n\n          // if connectedTo only has 1 port connected, it means its in series\n          var resistor = resistors[_i]; // resistor object \n\n          if (resistor.connectedTo.size === 1) {\n            var connectedTo = resistor.connectedTo.values().next().value; // the set's first component \n\n            if (resistor.connectedTo === connectedTo) console.log(\"they are indeed in series\");\n\n            // replace these resistors by 1 equivalent resistor inside resistors\n            resistors.splice(_i, 1);\n            resistors.splice(resistors.indexOf(connectedTo), 1);\n\n            //two resistors in series\n            var newResistance = resistor.resistance + connectedTo.resistance;\n            var newResistor = new _components_js__WEBPACK_IMPORTED_MODULE_0__.Resistor(0, 0, newResistance);\n            resistors.push(newResistor);\n          }\n\n          // parallel\n\n          // two resistors are in parallel if both their ports are connected\n          // to the same two nodes\n\n          if (resistor.connectedTo.size === 1) {\n            var connectedTo = resistor.connectedTo.values().next().value; // the set's first component \n\n            if (resistor.connectedTo === connectedTo) console.log(\"they are indeed in series\");\n\n            // replace these resistors by 1 equivalent resistor inside resistors\n            resistors.splice(_i, 1);\n            resistors.splice(resistors.indexOf(connectedTo), 1);\n\n            //two resistors in parallel\n            var newResistance = 1 / resistor.resistance + 1 / connectedTo.resistance ^ -1;\n            var newResistor = new _components_js__WEBPACK_IMPORTED_MODULE_0__.Resistor(0, 0, newResistance);\n            resistors.push(newResistor);\n          }\n        }\n      }\n      return resistors[0].resistance;\n    }\n  }, {\n    key: \"calculateVoltage\",\n    value: function calculateVoltage(circuit) {\n      var voltage = 0;\n      for (var i = 0; i < circuit.listOfComponents.length; i++) {\n        if (circuit[i] instanceof _components_js__WEBPACK_IMPORTED_MODULE_0__.Source) {\n          voltage += circuit[i].voltage;\n        }\n      }\n      return voltage;\n    }\n  }, {\n    key: \"calculateCurrent\",\n    value: function calculateCurrent(voltage, resitance) {\n      return voltage / resitance;\n    }\n  }, {\n    key: \"calculateVoltageDrop\",\n    value: function calculateVoltageDrop(pointA, pointB) {\n      // Ohm's law to calculate difference of potential\n    }\n  }]);\n  return Calculator;\n}();\n\n//# sourceURL=webpack:///./calculations.js?");

/***/ }),

/***/ "./circuit.js":
/*!********************!*\
  !*** ./circuit.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Circuit\": () => (/* binding */ Circuit)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ \"./components.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar Circuit = /*#__PURE__*/function () {\n  function Circuit() {\n    _classCallCheck(this, Circuit);\n    this.components = [];\n  }\n  _createClass(Circuit, [{\n    key: \"add\",\n    value: function add(component) {\n      this.components.push(component);\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete(component) {\n      if (this.components.indexOf(component) !== -1) {\n        this.components.splice(index, 1);\n      }\n    }\n  }, {\n    key: \"connect\",\n    value: function connect(componentA, componentB) {\n      componentA.connectedTo.add(componentB);\n      componentB.connectedTo.add(componentA);\n    }\n  }, {\n    key: \"disconnect\",\n    value: function disconnect(componentA, componentB) {\n      if (componentA.connectedTo.has(componentB)) componentA.connectedTo[\"delete\"](componentB);else console.log(\"port 1 isnt connected to port 2\");\n      if (componentB.connectedTo.has(componentA)) componentB.connectedTo[\"delete\"](componentA);else console.log(\"port 2 isnt connected to port 1\");\n    }\n  }, {\n    key: \"deleteCircuit\",\n    value: function deleteCircuit() {\n      this.components = [];\n    }\n\n    // ========== CALCULATIONS ===========\n  }, {\n    key: \"identifyNode\",\n    value: function identifyNode() {}\n  }]);\n  return Circuit;\n}();\n\n//# sourceURL=webpack:///./circuit.js?");

/***/ }),

/***/ "./components.js":
/*!***********************!*\
  !*** ./components.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Capacitor\": () => (/* binding */ Capacitor),\n/* harmony export */   \"Component\": () => (/* binding */ Component),\n/* harmony export */   \"Resistor\": () => (/* binding */ Resistor),\n/* harmony export */   \"Source\": () => (/* binding */ Source)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar sourceSize = 10;\nvar resistorSize = 20;\nvar capacitorSize = 30;\nvar Component = /*#__PURE__*/_createClass(function Component(id, type, positionX, positionY, size) {\n  _classCallCheck(this, Component);\n  this.id = id;\n  this.type = type;\n  this.positionX = positionX;\n  this.positionY = positionY;\n  this.size = size;\n\n  // each component will have 2 ports that can each connect  \n  // to an infinit amount of ports\n\n  /*\r\n  this.ports = [\r\n    new Port(new Set()),\r\n    new Port(new Set()),\r\n  ]\r\n  */\n\n  //this.port = new Port(new Set());\n  this.connectedTo = new Set();\n});\nvar Source = /*#__PURE__*/function (_Component) {\n  _inherits(Source, _Component);\n  var _super = _createSuper(Source);\n  function Source(positionX, positionY, voltage) {\n    var _this;\n    _classCallCheck(this, Source);\n    _this = _super.call(this, \"Source\", positionX, positionY, sourceSize);\n    _this.voltage = voltage;\n    return _this;\n  }\n  return _createClass(Source);\n}(Component);\nvar Resistor = /*#__PURE__*/function (_Component2) {\n  _inherits(Resistor, _Component2);\n  var _super2 = _createSuper(Resistor);\n  function Resistor(positionX, positionY, resistance) {\n    var _this2;\n    _classCallCheck(this, Resistor);\n    _this2 = _super2.call(this, \"Resistor\", positionX, positionY, resistorSize);\n    _this2.resistance = resistance;\n    return _this2;\n  }\n  return _createClass(Resistor);\n}(Component);\nvar Capacitor = /*#__PURE__*/function (_Component3) {\n  _inherits(Capacitor, _Component3);\n  var _super3 = _createSuper(Capacitor);\n  function Capacitor(positionX, positionY, capacitance) {\n    var _this3;\n    _classCallCheck(this, Capacitor);\n    _this3 = _super3.call(this, \"Capacitor\", positionX, positionY, capacitorSize);\n    _this3.capacitance = capacitance;\n    return _this3;\n  }\n  return _createClass(Capacitor);\n}(Component);\n\n/*\r\nexport class Port {\r\n    constructor(connectedTo) {\r\n      this.connectedTo = connectedTo; // set of other ports\r\n    }\r\n*/\n\n/*\r\nconnectTo(port) {\r\n    this.connectedTo = port; // port 1 is connected to port 2\r\n    port.connectedTo = this.port // port 2 is connected to port 1\r\n}\r\n  disconnect() {\r\n    if(isConnected) {\r\n        this.connectedTo.connectedTo = null; // port connected to port 2 (so port 1) will disconnect\r\n        this.connectedTo = null; // port connected to port 1 (so port 2) will disconnect\r\n    }\r\n}\r\n  isConnected(){\r\n    return this.connectedTo !== null; // if connectedTo isnt null, return true\r\n}\r\n  getConnections(){\r\n    return this.connectedTo;\r\n}\r\n  toString() {\r\n  return `un dwadawd`;\r\n}\r\n  */\n\n//# sourceURL=webpack:///./components.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./calculations.js");
/******/ 	
/******/ })()
;