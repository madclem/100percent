webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/Timeline/Card.js":
/*!*************************************!*\
  !*** ./components/Timeline/Card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var utils_styles_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/styles/media */ "./utils/styles/media.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Column */ "./components/Timeline/Column.js");
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/components/Timeline/Card.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            opacity: .7;\n            background-color:#f2f2f2;\n            width: 220px;\n            ", "\n            ", "\n            position:absolute;\n            margin: 0;\n\n            ", ":hover & {\n                background-color:white;\n                opacity: 1;\n\n            }\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function Card(props) {
  var widthCorner = 10;
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Card__Container",
    componentId: "sc-103by7j-0"
  })(["overlow:hidden;pointer-events:none;background-color:white;z-index:2;margin-bottom:10px;", " h5{margin:0 0 10px 0;}p{margin:0;}"], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject(), function (propsS) {
    return propsS.bottom ? 'bottom:' + propsS.bottom + '%;' : '';
  }, function (propsS) {
    return propsS.top ? 'top:' + propsS.top + '%;' : '';
  }, _Column__WEBPACK_IMPORTED_MODULE_3__["default"]));
  var Inner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Card__Inner",
    componentId: "sc-103by7j-1"
  })(["padding:10px;"]);
  var Corner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].i.withConfig({
    displayName: "Card__Corner",
    componentId: "sc-103by7j-2"
  })(["width:", "px;height:", "px;border-radius:50%;background-color:#fff;", " ", ""], widthCorner, widthCorner, function (propsS) {
    return propsS.top || propsS.bottom ? "margin-top: -".concat(widthCorner / 2, "px;") : "";
  }, function (propsS) {
    return propsS.bottom ? "margin-bottom: -".concat(widthCorner / 2, "px;") : "";
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "top left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "top right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "bottom right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "bottom left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=about.js.aa8a41081edd1a9f76dd.hot-update.js.map