webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about/Card.js":
/*!*****************************!*\
  !*** ./pages/about/Card.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var utils_styles_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/styles/media */ "./utils/styles/media.js");
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/pages/about/Card.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            opacity: .7;\n            background-color:#f2f2f2;\n            width: 220px;\n            ", "\n            ", "\n            position:absolute;\n            margin: 0;\n\n            ", ":hover & {\n                background-color:white;\n                opacity: 1;\n\n            }\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function Card() {
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Card__Container",
    componentId: "z22ufx-0"
  })(["pointer-events:none;background-color:white;z-index:2;padding:10px;margin-bottom:10px;", " h5{margin:0 0 10px 0;}p{margin:0;}"], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject(), function (propsS) {
    return propsS.bottom ? 'bottom:' + propsS.bottom + '%;' : '';
  }, function (propsS) {
    return propsS.top ? 'top:' + propsS.top + '%;' : '';
  }, Column));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), props.children);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about/Card")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=about.js.ee4d5c89c224d973a2de.hot-update.js.map