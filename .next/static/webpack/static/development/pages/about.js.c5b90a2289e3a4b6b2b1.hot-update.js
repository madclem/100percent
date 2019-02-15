webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/home/Speakers.js":
/*!********************************!*\
  !*** ./pages/home/Speakers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Speakers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/pages/home/Speakers.js";


function Speakers() {
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Speakers__Container",
    componentId: "a9umdm-0"
  })([""]);
  var Caroussel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
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
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/home/Speakers")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=about.js.c5b90a2289e3a4b6b2b1.hot-update.js.map