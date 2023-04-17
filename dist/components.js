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

/***/ "./components.js":
/*!***********************!*\
  !*** ./components.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Capacitor\": () => (/* binding */ Capacitor),\n/* harmony export */   \"Circuit\": () => (/* binding */ Circuit),\n/* harmony export */   \"Component\": () => (/* binding */ Component),\n/* harmony export */   \"Port\": () => (/* binding */ Port),\n/* harmony export */   \"Resistor\": () => (/* binding */ Resistor),\n/* harmony export */   \"Source\": () => (/* binding */ Source)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar sourceSize = 10;\nvar resistorSize = 20;\nvar capacitorSize = 30;\nvar Component = /*#__PURE__*/_createClass(function Component(id, type, positionX, positionY, size) {\n  _classCallCheck(this, Component);\n  this.id = id;\n  this.type = type;\n  this.positionX = positionX;\n  this.positionY = positionY;\n  this.size = size;\n  /*\r\n  this.ports = []\r\n    this.ports.push(new Port(positionX-50, positionY-50, null))\r\n  this.ports.push(new Port(positionX-50, positionY-50, null))\r\n  */\n});\n\nvar Source = /*#__PURE__*/function (_Component) {\n  _inherits(Source, _Component);\n  var _super = _createSuper(Source);\n  function Source(positionX, positionY, voltage) {\n    var _this;\n    _classCallCheck(this, Source);\n    _this = _super.call(this, \"Source\", positionX, positionY, sourceSize);\n    _this.voltage = voltage;\n    return _this;\n  }\n  return _createClass(Source);\n}(Component);\nvar Resistor = /*#__PURE__*/function (_Component2) {\n  _inherits(Resistor, _Component2);\n  var _super2 = _createSuper(Resistor);\n  function Resistor(positionX, positionY, resistance) {\n    var _this2;\n    _classCallCheck(this, Resistor);\n    _this2 = _super2.call(this, \"Resistor\", positionX, positionY, resistorSize);\n    _this2.resistance = resistance;\n    return _this2;\n  }\n  return _createClass(Resistor);\n}(Component);\nvar Capacitor = /*#__PURE__*/function (_Component3) {\n  _inherits(Capacitor, _Component3);\n  var _super3 = _createSuper(Capacitor);\n  function Capacitor(positionX, positionY, capacitance) {\n    var _this3;\n    _classCallCheck(this, Capacitor);\n    _this3 = _super3.call(this, \"Capacitor\", positionX, positionY, capacitorSize);\n    _this3.capacitance = capacitance;\n    return _this3;\n  }\n  return _createClass(Capacitor);\n}(Component);\nvar Port = /*#__PURE__*/function () {\n  function Port(positionX, positionY, connectedTo) {\n    _classCallCheck(this, Port);\n    this.positionX = positionX;\n    this.positionY = positionY;\n    this.connectedTo = connectedTo; // instance of another port\n  }\n  _createClass(Port, [{\n    key: \"connectTo\",\n    value: function connectTo(port) {\n      this.connectedTo = port; // port 1 is connected to port 2\n      port.connectedTo = this.port; // port 2 is connected to port 1\n    }\n  }, {\n    key: \"disconnect\",\n    value: function disconnect() {\n      if (isConnected) {\n        this.connectedTo.connectedTo = null; // port connected to port 2 (so port 1) will disconnect\n        this.connectedTo = null; // port connected to port 1 (so port 2) will disconnect\n      }\n    }\n  }, {\n    key: \"isConnected\",\n    value: function isConnected() {\n      return this.connectedTo !== null; // if connectedTo isnt null, return true\n    }\n  }]);\n  return Port;\n}();\n\n//===================== THIS WILL BE IN ANOTHER FILE =================\n\nvar Circuit = /*#__PURE__*/function () {\n  function Circuit() {\n    _classCallCheck(this, Circuit);\n    this.listOfComponents = [];\n  }\n  _createClass(Circuit, [{\n    key: \"add\",\n    value: function add(component) {\n      this.listOfComponents.push(component);\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete(component) {\n      if (this.listOfComponents.indexOf(component) !== -1) {\n        this.listOfComponents.splice(index, 1);\n      }\n    }\n  }, {\n    key: \"connect\",\n    value: function connect(port1, port2) {\n      port1.connectedTo.push(port2);\n      port2.connectedTo.push(port1);\n    }\n  }, {\n    key: \"disconnect\",\n    value: function disconnect(port1, port2) {\n      index1 = port1.connectedTo.indexOf(port1);\n      index2 = port2.connectedTo.indexOf(port2);\n      if (index1 !== -1 && index2 !== -1) {\n        port1.connectedTo.splice(port1, 1);\n        port2.connectedTo.splice(port2, 1);\n      }\n    }\n  }, {\n    key: \"deleteCircuit\",\n    value: function deleteCircuit() {\n      this.listOfComponents = [];\n    }\n  }]);\n  return Circuit;\n}();\n\n//===================== THIS WILL BE IN ANOTHER FILE =================\n\n/*\r\nvar circuit = [];\r\n\r\nfunction addSource(){\r\n    var resistor = document.getElementById(\"source\");\r\n\r\n    resistor.addEventListener(\"click\", function(event) {\r\n        var voltage = event.target.getAttribute(\"voltage\");\r\n        circuit.push(new Source(20, 20, voltage))\r\n        console.log(circuit);\r\n        console.log(voltage);\r\n    });\r\n}\r\n\r\nfunction addResistor(){\r\n    var resistor = document.getElementById(\"resistor\");\r\n\r\n    resistor.addEventListener(\"click\", function(event) {\r\n        var resistance = event.target.getAttribute(\"resistance\");\r\n        circuit.push(new Resistor(10, 10, resistance))\r\n        console.log(circuit);\r\n        console.log(resistance);\r\n    });\r\n}\r\n\r\nfunction deleteComponent(component){\r\n    circuit.splice(circuit.indexOf(component), 1);\r\n}\r\n\r\nfunction deleteCircuit(){\r\n    circuit = [];\r\n    console.log(circuit);\r\n}\r\n*/\n\n//===================== CALCULATIONS =================\n\n/*\r\n\r\nKirchhoff's laws : \r\nCurrent law -> current going in - current going out = 0\r\nVoltage law -> sum of the difference of potentials inside a loop = 0\r\n\r\nOhm's law :\r\nI = difference of potential/R\r\n\r\n*/\n\n//# sourceURL=webpack:///./components.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./components.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;