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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calculator\": () => (/* binding */ Calculator)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ \"./components.js\");\n/* harmony import */ var _circuit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circuit.js */ \"./circuit.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n/*\r\n\r\nKirchhoff's laws : \r\nCurrent law -> current going in - current going out = 0\r\nVoltage law -> sum of the difference of potentials inside a loop = 0\r\n\r\nOhm's law :\r\nI = V/R\r\n\r\n\r\nCALCULATING CURRENT : \r\n- To find the current, we must know a circuit's total voltage and total resistance.\r\n- The total voltage V is found by simply looking at he source.\r\nThe total resistance R is calculated by simplifying the circuit (series/parallel)\r\nuntil only one resistor remains.\r\n- We then use Ohm's law to find the current\r\n\r\nCALCULATING DIFFERENCE OF VOLTAGE AT 2 POINTS\r\n- \r\n*/\n\nvar Calculator = /*#__PURE__*/function () {\n  function Calculator() {\n    _classCallCheck(this, Calculator);\n  }\n  _createClass(Calculator, [{\n    key: \"identifyNodes\",\n    value: function identifyNodes(circuit) {\n      var nodes = new Set();\n\n      // iterate throught every component\n      var _iterator = _createForOfIteratorHelper(circuit.components),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var component = _step.value;\n          // iterate throught every component's ports (2)\n          for (var i = 0; i > component.ports.length; i++) {\n            // node whenever a port is connected to 2 or more \n            if (component.ports[i] > 1) {\n              var node = new Set();\n              // add itself to the node\n              node.add(component);\n              // add everything that's connected to component to the node\n              var _iterator2 = _createForOfIteratorHelper(component.port[i]),\n                _step2;\n              try {\n                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n                  var connection = _step2.value;\n                  node.add(connection);\n                }\n\n                // if the node doesn't already exist, add it\n              } catch (err) {\n                _iterator2.e(err);\n              } finally {\n                _iterator2.f();\n              }\n              var _iterator3 = _createForOfIteratorHelper(nodes),\n                _step3;\n              try {\n                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n                  var otherNode = _step3.value;\n                  if (!setsAreEqual(otherNode, node)) {\n                    nodes.add(node);\n                  }\n                }\n              } catch (err) {\n                _iterator3.e(err);\n              } finally {\n                _iterator3.f();\n              }\n            }\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n      return nodes;\n    }\n  }, {\n    key: \"setsAreEqual\",\n    value: function setsAreEqual(setA, setB) {\n      if (setA.size !== setB.size) {\n        console.log(\"not same size\");\n        return false;\n      }\n\n      // if they contain the same items but ordered differently, they are still equal (returns true)\n      var _iterator4 = _createForOfIteratorHelper(setA),\n        _step4;\n      try {\n        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n          var item = _step4.value;\n          if (setB.has(item)) {\n            console.log(!setA.has(item));\n            return true;\n          }\n        }\n      } catch (err) {\n        _iterator4.e(err);\n      } finally {\n        _iterator4.f();\n      }\n    }\n  }, {\n    key: \"calculateResistance\",\n    value: function calculateResistance(circuit) {\n      // create an array of all resistors\n      var resistors = [];\n      for (var i = 0; i < circuit.components.length; i++) {\n        if (circuit.components[i] instanceof _components_js__WEBPACK_IMPORTED_MODULE_0__.Resistor) {\n          if (circuit.components[i].ports[0].size !== 0 || circuit.components[i].ports[1].size !== 0) {\n            resistors.push(circuit.components[i]);\n          }\n        }\n      }\n      console.log(resistors);\n\n      // SIMPLIFY CIRCUIT -> if series / if parallel\n\n      while (resistors.length > 1) {\n        var _iterator5 = _createForOfIteratorHelper(resistors),\n          _step5;\n        try {\n          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n            var resistor = _step5.value;\n            var _iterator6 = _createForOfIteratorHelper(resistors),\n              _step6;\n            try {\n              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {\n                var otherResistor = _step6.value;\n                // so it doesn't compare with itself\n                if (resistor !== otherResistor) {\n                  if (this.isInSeries(resistor, otherResistor)) {\n                    console.log(resistor + \" and \" + otherResistor + \" in SERIES\");\n                    this.replaceResistor(resistors, resistor, otherResistor, true);\n                  }\n                }\n              }\n            } catch (err) {\n              _iterator6.e(err);\n            } finally {\n              _iterator6.f();\n            }\n          }\n        } catch (err) {\n          _iterator5.e(err);\n        } finally {\n          _iterator5.f();\n        }\n      }\n      /*\r\n      while(resistors.length > 1) {\r\n            for (let resistor of resistors){\r\n              for (let otherResistor of resistors){\r\n                    // so it doesn't compare with itself\r\n                  if(resistor !== otherResistor){\r\n                      if (this.isInSeries(resistor, otherResistor))\r\n                          this.replaceResistor(resistors, resistor, otherResistor, true);\r\n                        if(this.isInParallel(resistor, otherResistor, this.identifyNodes(circuit)))\r\n                          this.replaceResistor(resistors, resistor, otherResistor, false);\r\n                  }\r\n              }\r\n          }\r\n      }\r\n      */\n      return resistors[0].resistance;\n    }\n\n    // two components are in series if they are only connected to eachother\n  }, {\n    key: \"isInSeries\",\n    value: function isInSeries(componentA, componentB) {\n      console.log(\"isInSeries Called\");\n      // both ports of component A\n      var _iterator7 = _createForOfIteratorHelper(componentA.ports),\n        _step7;\n      try {\n        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {\n          var portA = _step7.value;\n          // both ports of component B\n          var _iterator8 = _createForOfIteratorHelper(componentB.ports),\n            _step8;\n          try {\n            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {\n              var portB = _step8.value;\n              console.log(\"portA size : \" + portA.size + \"  \" + \"portB size : \" + portB.size);\n              if (portA.size == 1 && portB.size == 1 && portA.has(portB) && portB.has(portA)) {\n                return true;\n                /*\r\n                if(this.setsAreEqual(portA, portB)){\r\n                    console.log(\"sets are euqal\")\r\n                }\r\n                */\n              }\n              /*\r\n                  this.setsAreEqual(portA, portB)\r\n              */\n            }\n          } catch (err) {\n            _iterator8.e(err);\n          } finally {\n            _iterator8.f();\n          }\n        }\n      } catch (err) {\n        _iterator7.e(err);\n      } finally {\n        _iterator7.f();\n      }\n      return false;\n    }\n\n    // two components are in parallel if they are connected to the same node\n  }, {\n    key: \"isInParallel\",\n    value: function isInParallel(componentA, componentB, nodes) {\n      var _iterator9 = _createForOfIteratorHelper(nodes),\n        _step9;\n      try {\n        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {\n          var node = _step9.value;\n          var _iterator10 = _createForOfIteratorHelper(nodes),\n            _step10;\n          try {\n            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {\n              var otherNode = _step10.value;\n              // so it doesn't compare with itself\n              if (node !== otherNode) {\n                if (node.has(componentA) && node.has(componentB) && otherNode.has(componentA) && otherNode.has(componentB)) {\n                  return true;\n                }\n              }\n            }\n          } catch (err) {\n            _iterator10.e(err);\n          } finally {\n            _iterator10.f();\n          }\n        }\n      } catch (err) {\n        _iterator9.e(err);\n      } finally {\n        _iterator9.f();\n      }\n      return false;\n    }\n\n    // in the array of resistors, replaces resistor and otherResistor with another\n    // equivalent resistor\n  }, {\n    key: \"replaceResistor\",\n    value: function replaceResistor(resistors, resistor, otherResistor, series) {\n      // replace these resistors by 1 equivalent resistor inside resistors\n      resistors.splice(resistors.indexOf(resistor), 1);\n      resistors.splice(resistors.indexOf(otherResistor), 1);\n      if (series) var newResistance = resistor.resistance + otherResistor.resistance;else\n        // parallel\n        var newResistance = 1 / resistor.resistance + 1 / otherResistor.resistance ^ -1;\n      var newResistor = new _components_js__WEBPACK_IMPORTED_MODULE_0__.Resistor(0, 0, newResistance);\n\n      // newResistor's port1 will have resistor's port1 + (concat) otherResistor's port1\n      for (var i = 0; i > newResistor.ports; i++) {\n        newResistor.ports[i] = resistor.ports[i].concat(otherResistor.ports[i]);\n      }\n      resistors.push(newResistor);\n      return resistors;\n    }\n  }, {\n    key: \"calculateVoltage\",\n    value: function calculateVoltage(circuit) {\n      var voltage = 0;\n      for (var i = 0; i < circuit.components.length; i++) {\n        if (circuit.components[i] instanceof _components_js__WEBPACK_IMPORTED_MODULE_0__.Source) {\n          voltage += parseInt(circuit.components[i].voltage);\n        }\n      }\n      return voltage;\n    }\n  }, {\n    key: \"calculateCurrent\",\n    value: function calculateCurrent(voltage, resistance) {\n      if (resistance == 0) resistance = 1;\n      return voltage / resistance;\n    }\n  }]);\n  return Calculator;\n}();\n/*\r\n  // nodes is an array containing node(s) which are arrays of components\r\nlet nodes = [];\r\n  // iterate throught every component of the circuit\r\nfor (let component of circuit) {\r\n      // iterate throught every component's connections (connectedTo Set)\r\n    for (let connectedTo of component.connectedTo) {\r\n          let nodeFound = false;\r\n          // iterate throught every node\r\n        for (let node of nodes) {\r\n          // \r\n        if (node.includes(connectedTo)) {\r\n            nodeFound = true;\r\n            if (!node.includes(component)) {\r\n            node.push(component);\r\n            }\r\n            break;\r\n        }\r\n        }\r\n        if (!nodeFound) {\r\n        nodes.push([component, connectedComponent]);\r\n        }\r\n    }\r\n}\r\nreturn nodes;\r\n  */\n\n//# sourceURL=webpack:///./calculations.js?");

/***/ }),

/***/ "./circuit.js":
/*!********************!*\
  !*** ./circuit.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Circuit\": () => (/* binding */ Circuit)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ \"./components.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar Circuit = /*#__PURE__*/function () {\n  function Circuit() {\n    _classCallCheck(this, Circuit);\n    this.components = [];\n  }\n  _createClass(Circuit, [{\n    key: \"add\",\n    value: function add(component) {\n      this.components.push(component);\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete(component) {\n      if (this.components.indexOf(component) !== -1) {\n        this.components.splice(index, 1);\n      }\n    }\n  }, {\n    key: \"connect\",\n    value: function connect(portA, portB) {\n      portA.add(portB);\n      portB.add(portA);\n    }\n\n    // CHANGE\n  }, {\n    key: \"disconnect\",\n    value: function disconnect(portA, portB) {\n      if (portA.has(portB)) portA[\"delete\"](portB);else console.log(\"port 1 isnt connected to port 2\");\n      if (portB.has(portA)) portB[\"delete\"](portA);else console.log(\"port 2 isnt connected to port 1\");\n    }\n  }, {\n    key: \"deleteCircuit\",\n    value: function deleteCircuit() {\n      this.components = [];\n    }\n  }]);\n  return Circuit;\n}();\n\n//# sourceURL=webpack:///./circuit.js?");

/***/ }),

/***/ "./components.js":
/*!***********************!*\
  !*** ./components.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Capacitor\": () => (/* binding */ Capacitor),\n/* harmony export */   \"Component\": () => (/* binding */ Component),\n/* harmony export */   \"Led\": () => (/* binding */ Led),\n/* harmony export */   \"Port\": () => (/* binding */ Port),\n/* harmony export */   \"Resistor\": () => (/* binding */ Resistor),\n/* harmony export */   \"Source\": () => (/* binding */ Source)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar sourceSize = 10;\nvar resistorSize = 20;\nvar capacitorSize = 30;\nvar ledSize = 40;\nvar Component = /*#__PURE__*/_createClass(function Component(id, type, positionX, positionY, size) {\n  _classCallCheck(this, Component);\n  this.id = id;\n  this.type = type;\n  this.positionX = positionX;\n  this.positionY = positionY;\n  this.size = size;\n\n  // each component will have 2 ports that can each connect  \n  // to an infinit amount of ports\n\n  /*\r\n  this.ports = [\r\n    new Port(new Set()),\r\n    new Port(new Set()),\r\n  ]\r\n  */\n\n  //this.port = new Port(new Set());\n  this.ports = [new Port(), new Port()];\n});\nvar Source = /*#__PURE__*/function (_Component) {\n  _inherits(Source, _Component);\n  var _super = _createSuper(Source);\n  function Source(positionX, positionY, voltage) {\n    var _this;\n    _classCallCheck(this, Source);\n    _this = _super.call(this, \"Source\", positionX, positionY, sourceSize);\n    _this.voltage = voltage;\n    return _this;\n  }\n  return _createClass(Source);\n}(Component);\nvar Resistor = /*#__PURE__*/function (_Component2) {\n  _inherits(Resistor, _Component2);\n  var _super2 = _createSuper(Resistor);\n  function Resistor(positionX, positionY, resistance) {\n    var _this2;\n    _classCallCheck(this, Resistor);\n    _this2 = _super2.call(this, \"Resistor\", positionX, positionY, resistorSize);\n    _this2.resistance = resistance;\n    return _this2;\n  }\n  return _createClass(Resistor);\n}(Component);\nvar Capacitor = /*#__PURE__*/function (_Component3) {\n  _inherits(Capacitor, _Component3);\n  var _super3 = _createSuper(Capacitor);\n  function Capacitor(positionX, positionY, capacitance) {\n    var _this3;\n    _classCallCheck(this, Capacitor);\n    _this3 = _super3.call(this, \"Capacitor\", positionX, positionY, capacitorSize);\n    _this3.capacitance = capacitance;\n    return _this3;\n  }\n  return _createClass(Capacitor);\n}(Component);\nvar Led = /*#__PURE__*/function (_Component4) {\n  _inherits(Led, _Component4);\n  var _super4 = _createSuper(Led);\n  function Led(positionX, positionY) {\n    _classCallCheck(this, Led);\n    return _super4.call(this, \"Led\", positionX, positionY, ledSize);\n  }\n  return _createClass(Led);\n}(Component);\nvar Port = /*#__PURE__*/function (_Set) {\n  _inherits(Port, _Set);\n  var _super5 = _createSuper(Port);\n  function Port() {\n    _classCallCheck(this, Port);\n    return _super5.apply(this, arguments);\n  }\n  return _createClass(Port);\n}( /*#__PURE__*/_wrapNativeSuper(Set));\n\n/*\r\nexport class Port {\r\n    constructor(connectedTo) {\r\n      this.connectedTo = connectedTo; // set of other ports\r\n    }\r\n*/\n\n/*\r\nconnectTo(port) {\r\n    this.connectedTo = port; // port 1 is connected to port 2\r\n    port.connectedTo = this.port // port 2 is connected to port 1\r\n}\r\n  disconnect() {\r\n    if(isConnected) {\r\n        this.connectedTo.connectedTo = null; // port connected to port 2 (so port 1) will disconnect\r\n        this.connectedTo = null; // port connected to port 1 (so port 2) will disconnect\r\n    }\r\n}\r\n  isConnected(){\r\n    return this.connectedTo !== null; // if connectedTo isnt null, return true\r\n}\r\n  getConnections(){\r\n    return this.connectedTo;\r\n}\r\n  toString() {\r\n  return `un dwadawd`;\r\n}\r\n  */\n\n//# sourceURL=webpack:///./components.js?");

/***/ }),

/***/ "./test_main.js":
/*!**********************!*\
  !*** ./test_main.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ \"./components.js\");\n/* harmony import */ var _circuit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circuit.js */ \"./circuit.js\");\n/* harmony import */ var _calculations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculations.js */ \"./calculations.js\");\n\n\n\nvar circuit = new _circuit_js__WEBPACK_IMPORTED_MODULE_1__.Circuit();\ncircuit.add(new _components_js__WEBPACK_IMPORTED_MODULE_0__.Resistor(20, 20, 50));\ncircuit.add(new _components_js__WEBPACK_IMPORTED_MODULE_0__.Resistor(20, 20, 200));\ncircuit.add(new _components_js__WEBPACK_IMPORTED_MODULE_0__.Resistor(20, 20, 400));\ncircuit.connect(circuit.components[0].ports[1], circuit.components[1].ports[0]);\ncircuit.connect(circuit.components[1].ports[1], circuit.components[2].ports[0]);\nvar calculate = document.getElementById(\"calculate_button\");\ncalculate.addEventListener(\"click\", function (event) {\n  var calculator = new _calculations_js__WEBPACK_IMPORTED_MODULE_2__.Calculator();\n  console.log(\"total voltage : \" + calculator.calculateVoltage(circuit));\n  console.log(\"total resistance : \" + calculator.calculateResistance(circuit));\n});\nvar source = document.getElementById(\"source_button\");\nsource.addEventListener(\"click\", function (event) {\n  var voltage = event.target.getAttribute(\"voltage\");\n  circuit.add(new _components_js__WEBPACK_IMPORTED_MODULE_0__.Source(20, 20, voltage));\n  console.log(circuit, \"added source\");\n});\nvar resistor = document.getElementById(\"resistor_button\");\nresistor.addEventListener(\"click\", function (event) {\n  var resistance = event.target.getAttribute(\"resistance\");\n  circuit.add(new _components_js__WEBPACK_IMPORTED_MODULE_0__.Resistor(20, 20, resistance));\n  console.log(circuit, \"added resistor\");\n});\nvar capacitor = document.getElementById(\"capacitor_button\");\ncapacitor.addEventListener(\"click\", function (event) {\n  var capacitance = event.target.getAttribute(\"capacitance\");\n  circuit.add(new _components_js__WEBPACK_IMPORTED_MODULE_0__.Capacitor(20, 20, capacitance));\n  console.log(circuit, \"added capacitor\");\n});\nvar deleteAll = document.getElementById(\"delete_all_button\");\ndeleteAll.addEventListener(\"click\", function (event) {\n  circuit.deleteCircuit();\n  console.log(circuit, \"entire circuit deleted\");\n});\nvar connect = document.getElementById(\"connect_button\");\nconnect.addEventListener(\"click\", function (event) {\n  circuit.connect(circuit.components[0].ports[0], circuit.components[1].ports[1]);\n  for (var i = 0; i < 2; i++) {\n    console.log(circuit.components[i].ports);\n  }\n});\nvar disconnect = document.getElementById(\"disconnect_button\");\ndisconnect.addEventListener(\"click\", function (event) {\n  console.log(circuit.components);\n  circuit.disconnect(circuit.components[0].ports[0], circuit.components[1].ports[1]);\n  for (var i = 0; i < 2; i++) {\n    for (var j = 0; j < 2; j++) {\n      console.log(circuit.components[i].ports[j]);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./test_main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./test_main.js");
/******/ 	
/******/ })()
;