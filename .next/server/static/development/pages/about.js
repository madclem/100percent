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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* harmony import */ var _home_Intro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/Intro */ "./pages/home/Intro.js");
/* harmony import */ var _home_Speakers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/Speakers */ "./pages/home/Speakers.js");
/* harmony import */ var _home_Parallax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/Parallax */ "./pages/home/Parallax.js");
/* harmony import */ var _home_Experiment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/Experiment */ "./pages/home/Experiment.js");
/* harmony import */ var _home_Keygoals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/Keygoals */ "./pages/home/Keygoals.js");
/* harmony import */ var _about_Timeline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/Timeline */ "./pages/about/Timeline.js");
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
  })(["background-color:#f6f6f6;"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home_Experiment__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerTimeline, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_about_Timeline__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }));
}

/***/ }),

/***/ "./pages/about/Timeline.js":
/*!*********************************!*\
  !*** ./pages/about/Timeline.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timeline; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./pages/about/data.js");
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/pages/about/Timeline.js";



function Timeline() {
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Timeline__Container",
    componentId: "sc-1s2wrk4-0"
  })(["display:flex;height:600px;width:94%;position:relative;margin:0 3%;"]);
  var Column = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Timeline__Column",
    componentId: "sc-1s2wrk4-1"
  })(["height:100%;width:75px;border-right:1px dashed rgba(0,0,0,.1);position:relative;"]);
  var LineMiddle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Timeline__LineMiddle",
    componentId: "sc-1s2wrk4-2"
  })(["width:100%;top:50%;position:absolute;border-bottom:1px solid black;"]);
  var Year = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
    displayName: "Timeline__Year",
    componentId: "sc-1s2wrk4-3"
  })(["font-size:24px;position:absolute;top:50%;margin:0;font-size"]);
  var Card = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Timeline__Card",
    componentId: "sc-1s2wrk4-4"
  })(["pointer-events:none;width:220px;background-color:white;position:absolute;z-index:2;padding:10px;", " ", " h5{margin:0 0 10px 0;}p{margin:0;}"], function (propsS) {
    return propsS.bottom ? 'bottom:' + propsS.bottom + '%;' : '';
  }, function (propsS) {
    return propsS.top ? 'top:' + propsS.top + '%;' : '';
  });
  var VerticalLine = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "Timeline__VerticalLine",
    componentId: "sc-1s2wrk4-5"
  })(["margin:0;position:relative;top:50%;left:-1px;width:1px;background-image:linear-gradient(to bottom,rgba(0,0,0,.4),rgba(0,0,0,.0));height:", "%;", ":hover &{background-image:linear-gradient(to bottom,rgb(1,58,81),26%,rgb(251,140,0));}", ""], function (propsS) {
    return propsS.height || 0;
  }, Column, function (propsS) {
    return propsS.translateY ? "\n        background-image: linear-gradient(to top, rgba(0,0,0,.4), rgba(0, 0,0, .0));\n            transform: translateY(-100%);\n\n            ".concat(Column, ":hover & {\n                background-image: linear-gradient(to top, rgb(1, 58, 81), 26%, rgb(251, 140, 0));\n            }\n        ") : '';
  }); // background-image: linear-gradient(to top, rgb(1, 58, 81), 26%, rgb(0, 229, 158));

  function getColumn() {
    var positions = [{
      bottom: 75
    }, {
      bottom: 55
    }, {
      top: 75
    }, {
      top: 55
    }];
    var years = {};
    return _data__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (d, index) {
      var pos = positions[index % 4];
      var year = years[d.year] ? '' : d.year;
      years[d.year] = true;
      var height = (pos.bottom || pos.top) - 50;
      var translateY = pos.bottom ? true : false;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
        key: d.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
        top: pos.top,
        bottom: pos.bottom,
        className: "z-depth-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, d.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, d.text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Year, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, " ", year, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalLine, {
        height: height,
        translateY: translateY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, getColumn(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LineMiddle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }));
}

/***/ }),

/***/ "./pages/about/data.js":
/*!*****************************!*\
  !*** ./pages/about/data.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 0,
  year: 2010,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 1,
  year: 2010,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 2,
  year: 2011,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 3,
  year: 2012,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 4,
  year: 2012,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 5,
  year: 2012,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 6,
  year: 2012,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 7,
  year: 2012,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 8,
  year: 2012,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 9,
  year: 2012,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 10,
  year: 2012,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}]);

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
  }, "TOP"));
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

/***/ 6:
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