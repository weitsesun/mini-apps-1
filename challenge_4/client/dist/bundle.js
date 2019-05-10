/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/App.jsx":
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CreateBoard_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateBoard.jsx */ \"./client/src/components/CreateBoard.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],\n      curPlayer: 1\n    };\n    _this.updateBoard = _this.updateBoard.bind(_assertThisInitialized(_this));\n    return _this;\n  } //boradsize row: 6, column: 7\n\n\n  _createClass(App, [{\n    key: \"updateBoard\",\n    value: function updateBoard(e) {\n      e.preventDefault();\n      var r = e.target.dataset.r;\n      var c = e.target.dataset.c;\n      var copy = this.state.board.slice();\n      copy[r][c] = this.state.curPlayer;\n      var nextPlayer = this.state.curPlayer === 1 ? 2 : 1;\n      copy = this.sortBoard(copy);\n      this.setState({\n        board: copy,\n        curPlayer: nextPlayer\n      });\n    }\n  }, {\n    key: \"sortBoard\",\n    value: function sortBoard(copy) {\n      //check each column\n      for (var c = 0; c < copy[0].length; c++) {\n        var curCol = [0, 0, 0, 0, 0, 0];\n        var count = 0;\n\n        for (var r = copy.length - 1; r >= 0; r--) {\n          if (copy[r][c] > 0) {\n            curCol[count] = copy[r][c];\n            count += 1;\n          }\n        } //put curCol to copy[i][c]\n\n\n        for (var i = 0; i < curCol.length; i++) {\n          var rev = curCol.length - i - 1;\n          copy[i][c] = curCol[rev];\n        }\n      }\n\n      return copy;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(_CreateBoard_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.state.board,\n        updateBoard: this.updateBoard\n      }));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4P2U1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyZWF0ZUJvYXJkIGZyb20gJy4vQ3JlYXRlQm9hcmQuanN4JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJvYXJkOlxuICAgICAgW1swLDAsMCwwLDAsMCwwXSxcbiAgICAgIFswLDAsMCwwLDAsMCwwXSxcbiAgICAgIFswLDAsMCwwLDAsMCwwXSxcbiAgICAgIFswLDAsMCwwLDAsMCwwXSxcbiAgICAgIFswLDAsMCwwLDAsMCwwXSxcbiAgICAgIFswLDAsMCwwLDAsMCwwXV0sXG5cbiAgICAgIGN1clBsYXllcjogMVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUJvYXJkID0gdGhpcy51cGRhdGVCb2FyZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy9ib3JhZHNpemUgcm93OiA2LCBjb2x1bW46IDdcbiAgXG4gIHVwZGF0ZUJvYXJkKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHIgPSBlLnRhcmdldC5kYXRhc2V0LnI7XG4gICAgdmFyIGMgPSBlLnRhcmdldC5kYXRhc2V0LmM7XG4gICAgdmFyIGNvcHkgPSB0aGlzLnN0YXRlLmJvYXJkLnNsaWNlKCk7XG4gICAgY29weVtyXVtjXSA9IHRoaXMuc3RhdGUuY3VyUGxheWVyO1xuICAgIHZhciBuZXh0UGxheWVyID0gdGhpcy5zdGF0ZS5jdXJQbGF5ZXIgPT09IDEgPyAyIDogMTtcblxuICAgIGNvcHkgPSB0aGlzLnNvcnRCb2FyZChjb3B5KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYm9hcmQ6IGNvcHksXG4gICAgICBjdXJQbGF5ZXI6IG5leHRQbGF5ZXJcbiAgICB9KVxuICB9XG5cbiAgc29ydEJvYXJkKGNvcHkpIHtcbiAgICAvL2NoZWNrIGVhY2ggY29sdW1uXG4gICAgZm9yICh2YXIgYyA9IDA7IGMgPCBjb3B5WzBdLmxlbmd0aDsgYysrKSB7XG4gICAgICB2YXIgY3VyQ29sID0gWzAsMCwwLDAsMCwwXTtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICBmb3IgKHZhciByID0gY29weS5sZW5ndGggLSAxOyByID49IDA7IHItLSkge1xuICAgICAgICBpZihjb3B5W3JdW2NdID4gMCkge1xuICAgICAgICAgIGN1ckNvbFtjb3VudF0gPSBjb3B5W3JdW2NdO1xuICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vcHV0IGN1ckNvbCB0byBjb3B5W2ldW2NdXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICBjdXJDb2wubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgIHZhciByZXYgPSBjdXJDb2wubGVuZ3RoIC0gaSAtIDE7XG4gICAgICAgIGNvcHlbaV1bY10gPSBjdXJDb2xbcmV2XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29weTtcbiAgfVxuICBcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDcmVhdGVCb2FyZCBib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH0gdXBkYXRlQm9hcmQ9e3RoaXMudXBkYXRlQm9hcmR9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFUQTtBQVdBO0FBYkE7QUFjQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUdBOzs7O0FBL0RBO0FBQ0E7QUFpRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/App.jsx\n");

/***/ }),

/***/ "./client/src/components/CreateBoard.jsx":
/*!***********************************************!*\
  !*** ./client/src/components/CreateBoard.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar CreateBoard =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(CreateBoard, _React$Component);\n\n  function CreateBoard(props) {\n    _classCallCheck(this, CreateBoard);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(CreateBoard).call(this, props));\n  }\n\n  _createClass(CreateBoard, [{\n    key: \"generateBoard\",\n    value: function generateBoard() {\n      var curBoard = this.props.board;\n      var _final = [];\n      var bg = {\n        backgroundColor: \"red\"\n      }; //generate new board\n\n      for (var r = 0; r < curBoard.length; r++) {\n        var col = [];\n\n        for (var c = 0; c < curBoard[r].length; c++) {\n          switch (curBoard[r][c]) {\n            case 1:\n              col.push(React.createElement(\"button\", {\n                \"class\": \"row\",\n                \"data-r\": r,\n                \"data-c\": c,\n                style: {\n                  backgroundColor: \"red\"\n                },\n                onClick: this.props.updateBoard\n              }));\n              break;\n\n            case 2:\n              col.push(React.createElement(\"button\", {\n                \"class\": \"row\",\n                \"data-r\": r,\n                \"data-c\": c,\n                style: {\n                  backgroundColor: \"yellow\"\n                },\n                onClick: this.props.updateBoard\n              }));\n              break;\n\n            default:\n              col.push(React.createElement(\"button\", {\n                \"class\": \"row\",\n                \"data-r\": r,\n                \"data-c\": c,\n                style: {\n                  backgroundColor: \"white\"\n                },\n                onClick: this.props.updateBoard\n              }));\n          }\n        }\n\n        col.push(React.createElement(\"br\", null));\n\n        _final.push(col);\n      }\n\n      return _final;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        className: \"board\"\n      }, this.generateBoard().map(function (elem) {\n        return elem;\n      }));\n    }\n  }]);\n\n  return CreateBoard;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateBoard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQ3JlYXRlQm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0NyZWF0ZUJvYXJkLmpzeD9mYjhjIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENyZWF0ZUJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuXG4gIGdlbmVyYXRlQm9hcmQoKSB7XG4gICAgdmFyIGN1ckJvYXJkID0gdGhpcy5wcm9wcy5ib2FyZDtcbiAgICB2YXIgZmluYWwgPSBbXTtcblxuICAgIHZhciBiZyA9IHtiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCJ9O1xuICAgIC8vZ2VuZXJhdGUgbmV3IGJvYXJkXG4gICAgZm9yKHZhciByID0gMDsgciA8IGN1ckJvYXJkLmxlbmd0aDsgcisrKSB7XG4gICAgICB2YXIgY29sID0gW107XG4gICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGN1ckJvYXJkW3JdLmxlbmd0aDsgYysrKSB7XG4gICAgICAgIHN3aXRjaChjdXJCb2FyZFtyXVtjXSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNvbC5wdXNoKDxidXR0b24gY2xhc3M9XCJyb3dcIiBkYXRhLXI9e3J9IGRhdGEtYz17Y30gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCJ9fSBvbkNsaWNrPXt0aGlzLnByb3BzLnVwZGF0ZUJvYXJkfT48L2J1dHRvbj4pXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjb2wucHVzaCg8YnV0dG9uIGNsYXNzPVwicm93XCIgZGF0YS1yPXtyfSBkYXRhLWM9e2N9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wifX0gb25DbGljaz17dGhpcy5wcm9wcy51cGRhdGVCb2FyZH0+PC9idXR0b24+KVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbC5wdXNoKDxidXR0b24gY2xhc3M9XCJyb3dcIiBkYXRhLXI9e3J9IGRhdGEtYz17Y30gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIn19IG9uQ2xpY2s9e3RoaXMucHJvcHMudXBkYXRlQm9hcmR9PjwvYnV0dG9uPilcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29sLnB1c2goPGJyLz4pO1xuICAgICAgZmluYWwucHVzaChjb2wpO1xuICAgIH1cblxuICAgIHJldHVybiBmaW5hbDtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XG4gICAgICAgIHt0aGlzLmdlbmVyYXRlQm9hcmQoKS5tYXAoKGVsZW0pID0+IChlbGVtKSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQm9hcmQ7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTs7OztBQXhDQTtBQUNBO0FBMENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/CreateBoard.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App.jsx */ \"./client/src/components/App.jsx\");\n\nReactDOM.render(React.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById(\"app\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLmpzeCc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });