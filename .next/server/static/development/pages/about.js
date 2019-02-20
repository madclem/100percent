module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Author.js":
/*!******************************!*\
  !*** ./components/Author.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Author; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/components/Author.js";


function Author(props) {
  var Img = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Author__Img",
    componentId: "ex89fx-0"
  })(["min-width:120px;max-width:120px;min-height:120px;max-height:120px;margin:0 20px 0 0;background:url(", ");background-size:cover;"], function (props) {
    return props.src || 'https://lorempixel.com/250/250/city/2';
  });
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Author__Container",
    componentId: "ex89fx-1"
  })(["display:flex;"]);
  var Right = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Author__Right",
    componentId: "ex89fx-2"
  })([" "]);
  var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
    displayName: "Author__Paragraph",
    componentId: "ex89fx-3"
  })(["margin:5px;text-align:justify;"]);
  var Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h6.withConfig({
    displayName: "Author__Title",
    componentId: "ex89fx-4"
  })(["font-weight:bold;margin:0 0 8px 0;"]);
  return (// photo left
    // text right
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Img, {
      src: props.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Right, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, props.text)))
  );
}

/***/ }),

/***/ "./components/Divider.js":
/*!*******************************!*\
  !*** ./components/Divider.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Divider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/components/Divider.js";


function Divider(props) {
  var DividerStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Divider__DividerStyled",
    componentId: "sc-121b307-0"
  })(["width:40%;border-bottom:1px solid rgba(0,0,0,.1);margin:auto;margin-top:", "px;margin-bottom:", "px;"], function (propsStyled) {
    return propsStyled.top || 0;
  }, function (propsStyled) {
    return propsStyled.bottom || 0;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DividerStyled, {
    top: props.top,
    bottom: props.bottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  });
}

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/components/Footer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Container",
  componentId: "hbcwkv-0"
})(["padding:20px 0;"]);
var Socials = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Socials",
  componentId: "hbcwkv-1"
})(["justify-content:center;display:flex;align-items:center;a{color:black;padding:20px;}.linkedin{height:18px;}"]);
var Name = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Footer__Name",
  componentId: "hbcwkv-2"
})(["text-transform:uppercase;font-size:30px;margin-bottom:0;"]);
var Intro = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Footer__Intro",
  componentId: "hbcwkv-3"
})(["margin-top:0;text-transform:uppercase;font-size:20px;font-style:italic;"]);

var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        className: "grey lighten-4",
        id: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Name, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Deborah Gilshan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Intro, {
        className: "grey-text text-darken-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Founder, the 100% club"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Email:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "deborah.gilshan@the100percentclub.co.uk")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Socials, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons text-black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "email")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "linkedin",
        src: "/static/img/linkedin-icon.svg",
        alt: "linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/NavBar */ "./components/NavBar.js");
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/components/Layout.js";



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
});

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/components/NavBar.js";




/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function NavBar(props) {
  var LinkStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
    displayName: "NavBar__LinkStyled",
    componentId: "le3stc-0"
  })(["color:", ";:hover{background-color:transparent;}"], function (propsStyle) {
    return propsStyle.active ? '#ffc107' : 'black';
  });
  var LinkStyledLast = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(LinkStyled).withConfig({
    displayName: "NavBar__LinkStyledLast",
    componentId: "le3stc-1"
  })(["display:flex;align-items:center;"]);
  var Badge = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
    displayName: "NavBar__Badge",
    componentId: "le3stc-2"
  })(["margin-left:8px!important;"]);
  var ContainerNavBar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav.withConfig({
    displayName: "NavBar__ContainerNavBar",
    componentId: "le3stc-3"
  })(["position:absolute;"]);
  var navBar = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  var instance;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var elem = navBar.current;
    instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
    return function cleanup() {
      instance.destroy();
    };
  });
  var router = props.router;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerNavBar, {
    className: "nav-wrapper transparent z-depth-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    className: "brand-logo grey-text text-darken-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "LOGO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    href: "#",
    className: "sidenav-trigger",
    "data-target": "mobile-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons grey-text text-darken-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "menu"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "right hide-on-med-and-down black-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    active: router.pathname === '/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    active: router.pathname === '/about',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/press",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    active: router.pathname === '/press',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Press"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/events",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyledLast, {
    active: router.pathname === '/events',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Events "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Badge, {
    className: "new badge white-text orange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "1"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    ref: navBar,
    className: "sidenav",
    id: "mobile-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/events",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Events"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/press",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Press"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Contact")))));
}));

/***/ }),

/***/ "./components/Timeline/Card.js":
/*!*************************************!*\
  !*** ./components/Timeline/Card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_styles_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/styles/media */ "./utils/styles/media.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Column */ "./components/Timeline/Column.js");
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/components/Timeline/Card.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            top: ", "\n            background-color: rgb(235, 235, 235);\n\n            ", ":hover & {\n                background-color: rgb(251, 140, 0);\n            }\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            opacity: .7;\n            background-color:#f2f2f2;\n            width: 216px;\n            ", "\n            ", "\n            position:absolute;\n            margin: 0;\n            transition: all 100ms ease-in 0s;\n\n            ", ":hover & {\n                background-color:white;\n                opacity: 1;\n                z-index: 3;\n\n            }\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function Card(props) {
  var widthPoint = 10;
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Card__Container",
    componentId: "sc-103by7j-0"
  })(["overlow:hidden;pointer-events:none;background-color:white;z-index:2;padding:10px;margin-bottom:10px;position:relative;", " h5{margin:0 0 10px 0;font-size:1.64rem!important;}p{margin:0;font-size:14.5px!important;}"], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject(), function (propsS) {
    return propsS.bottom ? 'bottom:' + propsS.bottom + '%;' : '';
  }, function (propsS) {
    return propsS.top ? 'top:' + propsS.top + '%;' : '';
  }, _Column__WEBPACK_IMPORTED_MODULE_3__["default"]));
  var Point = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Card__Point",
    componentId: "sc-103by7j-1"
  })(["width:", "px;height:", "px;background-color:rgb(251,140,0);border:1px solid rgb(251,140,0);border-radius:100%;position:absolute;top:calc(100% - ", "px);left:-", "px;", ""], widthPoint, widthPoint, widthPoint / 2, widthPoint / 2, utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject2(), function (propsS) {
    return propsS.bottom ? "calc(100% - ".concat(widthPoint / 2, "px);") : "-".concat(widthPoint / 2, "px;");
  }, _Column__WEBPACK_IMPORTED_MODULE_3__["default"]));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Point, {
    bottom: props.bottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Timeline/Column.js":
/*!***************************************!*\
  !*** ./components/Timeline/Column.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var utils_styles_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/styles/media */ "./utils/styles/media.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        height: 100%;\n        width: 75px;\n\n        :first-child {\n            border-left: 1px dashed rgba(0,0,0,.1);\n        }\n\n        border-right: 1px dashed rgba(0,0,0,.1);\n        position: relative;\n        transition: background-color 100ms ease-in 0s;\n\n        :hover {\n            background-color: #e5e5e5;\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Column",
  componentId: "sc-1t8ch6c-0"
})(["width:100%;", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_0__["default"].tablet(_templateObject())));

/***/ }),

/***/ "./components/Timeline/Timeline.js":
/*!*****************************************!*\
  !*** ./components/Timeline/Timeline.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timeline; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_styles_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/styles/media */ "./utils/styles/media.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./components/Timeline/data.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ "./components/Timeline/Card.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Column */ "./components/Timeline/Column.js");
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/components/Timeline/Timeline.js";

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            z-index: 3;\n            width: ", "px;\n            height: ", "px;\n            background-color: rgb(220,220,220);\n            transition: background-color 100ms ease-in 0s;\n            ", ":hover & { background-color: rgb(0, 0, 0); }\n            border-radius: 100%;\n            position: absolute;\n            top: calc(50% - ", "px);\n            left: -", "px;        \n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            display: block;\n            margin: 0;\n            position:relative;\n            top: 50%;\n            left: -1px;\n            width: 1px;\n            background-image: linear-gradient(to bottom, rgb(220,220,220), rgb(220, 220,220));\n            height: ", "%;\n            transition: background-image 100ms ease-in 0s;\n\n            ", ":hover & {\n                background-image: linear-gradient(to bottom, rgb(1, 58, 81), 26%, rgb(251, 140, 0));\n                z-index: 3;\n            }\n\n            ", "\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            margin: 0 0 0 5px;\n            transform: translateY(-100%);\n            position: absolute;\n            top: 50%;\n            transition: color 100ms ease-in 0s;\n\n            ", ":hover & {\n                color: black;\n            }\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            display: block;\n            width: 100%;\n            top: 50%;\n            left: 0;\n            position: absolute;\n            border-bottom: 1px solid rgb(220,220,220);\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            height: 100vh;\n            flex-wrap: nowrap;\n            border: none;\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







function Timeline() {
  var widthPoint = 6;
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Timeline__Container",
    componentId: "vtn6sg-0"
  })(["display:flex;flex-wrap:wrap;width:94%;position:relative;margin:0 3%;border-left:1px dashed rgba(0,0,0,.1);", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject()));
  var LineMiddle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Timeline__LineMiddle",
    componentId: "vtn6sg-1"
  })(["display:none;", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject2()));
  var Year = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
    displayName: "Timeline__Year",
    componentId: "vtn6sg-2"
  })(["font-size:24px;color:rgb(223,229,231);font-weight:bold;display:block;margin:20px 0 0 10px;", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject3(), _Column__WEBPACK_IMPORTED_MODULE_5__["default"]));
  var VerticalLine = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Timeline__VerticalLine",
    componentId: "vtn6sg-3"
  })(["display:none;", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject4(), function (propsS) {
    return propsS.height || 0;
  }, _Column__WEBPACK_IMPORTED_MODULE_5__["default"], function (propsS) {
    return propsS.translateY ? "\n                background-image: linear-gradient(to top, rgb(220,220,220), rgb(220,220,220));\n                transform: translateY(-100%);\n\n                ".concat(_Column__WEBPACK_IMPORTED_MODULE_5__["default"], ":hover & {\n                    background-image: linear-gradient(to top, rgb(1, 58, 81), 26%, rgb(251, 140, 0));\n                }\n            ") : '';
  }));
  var Point = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Timeline__Point",
    componentId: "vtn6sg-4"
  })(["", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject5(), widthPoint, widthPoint, _Column__WEBPACK_IMPORTED_MODULE_5__["default"], widthPoint / 2, widthPoint / 2)); // background-image: linear-gradient(to top, rgb(1, 58, 81), 26%, rgb(0, 229, 158));

  function getColumn() {
    var positions = [{
      bottom: 80
    }, {
      bottom: 60
    }, {
      top: 80
    }, {
      top: 60
    }];
    var years = {};
    return _data__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (d, index) {
      var pos = positions[index % 4];
      var year = years[d.year] ? '' : d.year;
      years[d.year] = true;
      var height = (pos.bottom || pos.top) - 50;
      var translateY = pos.bottom ? true : false;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Column__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: d.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Year, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, " ", year, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
        top: pos.top,
        bottom: pos.bottom,
        className: "z-depth-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, d.icon), d.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, d.text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalLine, {
        height: height,
        translateY: translateY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Point, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, getColumn(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LineMiddle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Timeline/data.js":
/*!*************************************!*\
  !*** ./components/Timeline/data.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 0,
  icon: 'adjust',
  year: 2011,
  title: '',
  text: 'Founded by Deborah Gilshan in October 2011.'
}, {
  id: 1,
  icon: 'event',
  year: 2015,
  title: '',
  text: 'Our first 2015 event hosted by Hogan Lovells in January.'
}, {
  id: 2,
  icon: 'event',
  year: 2015,
  title: '',
  text: 'July 2015 - Private audience with the Right Honourable Nicky Morgan'
}, {
  id: 3,
  icon: 'cake',
  year: 2015,
  title: '',
  text: 'The 100% Club celebrated its fourth anniversary with a social gathering in November 2015.'
}, {
  id: 4,
  icon: 'event',
  year: 2016,
  title: '',
  text: 'January - Event with guest speaker Ann Francke, CEO of the Chartered Management Institute'
}, {
  id: 5,
  icon: 'event',
  year: 2016,
  title: '',
  text: 'May - Event hosted by Capital Group with Dame Fiona Woolf, Lord Mayor of the City of London 2013-2014'
}, {
  id: 6,
  icon: 'control_point',
  year: 2016,
  title: '',
  text: 'October - 5th anniversary, evening kindly hosted by Standard Life Investments with over 100 members'
}, {
  id: 7,
  icon: 'event',
  year: 2017,
  title: '',
  text: 'September - Discussion with Helen Dean, CEO of NEST, hosted by Vanguard Asset Management'
}, {
  id: 8,
  icon: 'event',
  year: 2018,
  title: '',
  text: 'April - Discussion with Philippa Foster Back, CBE, Director of the Institute of Business Ethics'
}, {
  id: 9,
  icon: 'cake',
  year: 2018,
  title: '',
  text: 'Celebrating 7 years at the iconic Guild Hall, hosted by the City of London Corporation.'
}]);

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/NavBar */ "./components/NavBar.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout */ "./components/Layout.js");
/* harmony import */ var components_Author__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Author */ "./components/Author.js");
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Footer */ "./components/Footer.js");
/* harmony import */ var components_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Timeline/Timeline */ "./components/Timeline/Timeline.js");
/* harmony import */ var _home_Intro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/Intro */ "./pages/home/Intro.js");
/* harmony import */ var _home_Speakers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/Speakers */ "./pages/home/Speakers.js");
/* harmony import */ var _home_Parallax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/Parallax */ "./pages/home/Parallax.js");
/* harmony import */ var _home_Experiment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/Experiment */ "./pages/home/Experiment.js");
/* harmony import */ var _home_Keygoals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/Keygoals */ "./pages/home/Keygoals.js");
/* harmony import */ var _home_Quote__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/Quote */ "./pages/home/Quote.js");
/* harmony import */ var components_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Divider */ "./components/Divider.js");
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/pages/about.js";














function About() {
  var Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
    displayName: "about__Title",
    componentId: "wlrdrz-0"
  })(["margin-top:80px;"]);
  var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
    displayName: "about__Paragraph",
    componentId: "wlrdrz-1"
  })(["width:80%;margin:auto;margin-bottom:20px;&.last{margin-bottom:80px;}"]);
  var AuthorContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "about__AuthorContainer",
    componentId: "wlrdrz-2"
  })(["margin:40px 0 80px 0;padding-top:20px;"]);
  var ContainerTimeline = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "about__ContainerTimeline",
    componentId: "wlrdrz-3"
  })(["max-width:100%;background-color:#f6f6f6;"]);
  var TitleMilestones = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
    displayName: "about__TitleMilestones",
    componentId: "wlrdrz-4"
  })(["font-weight:bold;font-size:16px!important;text-transform:uppercase;margin:30px 0;text-decoration:underline;"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home_Experiment__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    className: "center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, " What do we do "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, {
    className: "center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut felis vel arcu iaculis laoreet. Quisque molestie suscipit lacinia. Pellentesque venenatis efficitur fringilla. Aliquam erat volutpat. Nunc posuere nunc erat, ac varius purus consequat at. Nam luctus leo felis, non lacinia augue suscipit non. Fusce lectus risus, laoreet non posuere at, ullamcorper ut purus. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    className: "center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, " Why do we do it "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, {
    className: "last center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, " Vestibulum ut felis vel arcu iaculis laoreet. Quisque molestie suscipit lacinia. Pellentesque venenatis efficitur fringilla. Aliquam erat volutpat. Nunc posuere nunc erat, ac varius purus consequat at. Nam luctus leo felis, non lacinia augue suscipit non. Fusce lectus risus, laoreet non posuere at, ullamcorper ut purus. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Divider__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleMilestones, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, " Milestones ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerTimeline, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthorContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Author__WEBPACK_IMPORTED_MODULE_4__["default"], {
    image: "/static/img/deborah.png",
    title: "Founder: Deborah Gilshan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut felis vel arcu iaculis laoreet. Aliquam erat volutpat. Nunc posuere nunc erat, ac varius purus consequat at.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./pages/home/Experiment.js":
/*!**********************************!*\
  !*** ./pages/home/Experiment.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Experiment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/pages/home/Experiment.js";


function Experiment() {
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Experiment__Container",
    componentId: "cuhebc-0"
  })(["min-height:65vh;border-bottom:1px solid rgba(0,0,0,0.1);"]);
  var Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
    displayName: "Experiment__Title",
    componentId: "cuhebc-1"
  })(["margin:auto;font-weight:800;font-size:120px;color:#ff8f00;"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "valign-wrapper orange lighten-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    className: "grey-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "IMAGE"));
}

/***/ }),

/***/ "./pages/home/Intro.js":
/*!*****************************!*\
  !*** ./pages/home/Intro.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Intro; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/pages/home/Intro.js";


function Intro() {
  var IntroStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
    displayName: "Intro__IntroStyled",
    componentId: "o9o1er-0"
  })(["text-align:center;width:80%;margin:50px auto;"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IntroStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Morbi mattis nec magna at mollis. Nullam pellentesque odio metus, nec vestibulum sem vulputate in. Praesent interdum, mauris a convallis vestibulum, arcu urna placerat nulla, in viverra dui quam sed elit. Ut consequat sollicitudin erat, sed dapibus felis sodales vel. Morbi elementum tortor et eros facilisis, non ullamcorper orci semper. Fusce ante leo, fringilla sed fermentum id, tempor eu quam. Maecenas mattis molestie nisl, in varius massa rhoncus vel. Phasellus at suscipit felis."));
}

/***/ }),

/***/ "./pages/home/Keygoal.js":
/*!*******************************!*\
  !*** ./pages/home/Keygoal.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Keyword; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/pages/home/Keygoal.js";


function Keyword(props) {
  var ContainerKeyword = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Keygoal__ContainerKeyword",
    componentId: "sc-13hdpni-0"
  })(["text-align:center;margin:30px 0;"]);
  var Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.i.withConfig({
    displayName: "Keygoal__Icon",
    componentId: "sc-13hdpni-1"
  })(["padding:30px;border-radius:100%;"]);
  var H2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4.withConfig({
    displayName: "Keygoal__H2",
    componentId: "sc-13hdpni-2"
  })([""]);
  var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
    displayName: "Keygoal__Paragraph",
    componentId: "sc-13hdpni-3"
  })(["width:80%;margin:auto;"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerKeyword, {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    className: "material-icons large grey lighten-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "desktop_mac"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H2, {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, props.description));
}

/***/ }),

/***/ "./pages/home/Keygoals.js":
/*!********************************!*\
  !*** ./pages/home/Keygoals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Keywords; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Keygoal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Keygoal */ "./pages/home/Keygoal.js");
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/pages/home/Keygoals.js";



function Keywords() {
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Keygoals__Container",
    componentId: "xl127j-0"
  })(["margin:50px auto;"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Keygoal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "col s8 offset-s2 m4",
    title: "GOAL 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Keygoal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "col s8 offset-s2 m4",
    title: "GOAL 2",
    description: "Donec interdum, massa ac mattis ultrices.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Keygoal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "col s8 offset-s2 m4",
    title: "GOAL 3",
    description: "ipsum lectus vestibulum metus, et varius tortor ligula vel felis.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })));
}

/***/ }),

/***/ "./pages/home/Parallax.js":
/*!********************************!*\
  !*** ./pages/home/Parallax.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Parallax; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/pages/home/Parallax.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Parallax__Container",
  componentId: "sc-1dmdkfm-0"
})(["position:relative;color:white;"]);
var PowerWord1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Parallax__PowerWord1",
  componentId: "sc-1dmdkfm-1"
})(["position:absolute;top:40px;left:0;font-weight:bold;"]);
var PowerWord2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Parallax__PowerWord2",
  componentId: "sc-1dmdkfm-2"
})(["position:absolute;top:140px;left:50%;margin-left:-150px;text-align:center;font-weight:bold;"]);
var PowerWord3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Parallax__PowerWord3",
  componentId: "sc-1dmdkfm-3"
})(["position:absolute;top:240px;right:0;font-weight:bold;"]);

var Parallax =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Parallax, _React$Component);

  function Parallax(props) {
    var _this;

    _classCallCheck(this, Parallax);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Parallax).call(this, props));
    _this.parallax = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(Parallax, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // console.log(this.navBar);
      var elem = this.parallax.current;
      var instance = M.Parallax.init(elem, {});
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "parallax-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "parallax",
        ref: this.parallax,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "https://lorempixel.com/g/1200/800/people/4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PowerWord1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, " GATHER "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PowerWord2, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, " EMPOWER "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PowerWord3, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, " COLLABORATE ")));
    }
  }]);

  return Parallax;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./pages/home/Quote.js":
/*!*****************************!*\
  !*** ./pages/home/Quote.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Quote; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/pages/home/Quote.js";


function Quote() {
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Quote__Container",
    componentId: "ufjwkh-0"
  })(["display:flex;align-items:flex-end;justify-content:space-around;"]);
  var Quote = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
    displayName: "Quote",
    componentId: "ufjwkh-1"
  })(["font-style:italic;text-align:center;width:80%;margin:30px auto;"]);
  var Author = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
    displayName: "Quote__Author",
    componentId: "ufjwkh-2"
  })(["display:block;font-style:normal;margin-top:20px;"]);
  var QuotationMark = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
    displayName: "Quote__QuotationMark",
    componentId: "ufjwkh-3"
  })(["font-family:Georgia,serif;font-size:64px;font-style:italic;"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QuotationMark, {
    className: "grey-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Quote, {
    className: "grey-text text-darken-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Morbi mattis nec magna at mollis. Nullam pellentesque odio metus, nec vestibulum sem vulputate in. Praesent interdum, mauris a convallis vestibulum, arcu urna placerat nulla, in viverra dui quam sed elit.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Author, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Michelle")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QuotationMark, {
    className: "grey-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\""));
}

/***/ }),

/***/ "./pages/home/Speakers.js":
/*!********************************!*\
  !*** ./pages/home/Speakers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Speakers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/pages/home/Speakers.js";


function Speakers() {
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Speakers__Container",
    componentId: "a9umdm-0"
  })([""]);
  var Caroussel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Speakers__Caroussel",
    componentId: "a9umdm-1"
  })(["height:345px;margin-bottom:60px;"]);

  var onCycleTo = function onCycleTo(data) {
    console.log(data);
  };

  var instances;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var elems = document.querySelectorAll('.carousel');
    instances = M.Carousel.init(elems, {});
    return function cleanUp() {
      instances.forEach(function (element) {
        element.destroy();
      });
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "The speakers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Introduction to present why the speakers come, and to present a few of them"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Caroussel, {
    className: "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item",
    href: "#one!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://lorempixel.com/250/250/business/1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), "Speaker's name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://lorempixel.com/250/250/business/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), "Speaker 2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://lorempixel.com/250/250/business/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), "Speaker 3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://lorempixel.com/250/250/business/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), "Speaker 4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://lorempixel.com/250/250/business/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), "Speaker 5")));
}

/***/ }),

/***/ "./utils/styles/media.js":
/*!*******************************!*\
  !*** ./utils/styles/media.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var sizes = {
  desktopExtraLarge: 1000000,
  desktopLarge: 1440,
  desktop: 1196,
  responsive850: 850,
  tablet: 768,
  mobileLarge: 480,
  mobile: 375
};
/* harmony default export */ __webpack_exports__["default"] = (Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (min-width:", "em){", "}"], sizes[label] / 16, styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
  };

  return acc || {};
}, {}));
;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/about.js */"./pages/about.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map