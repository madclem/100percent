webpackHotUpdate("static/development/pages/event.js",{

/***/ "./components/EventMain.js":
/*!*********************************!*\
  !*** ./components/EventMain.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventMain; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/List */ "./components/List.js");
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/components/EventMain.js";



function EventMain(props) {
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "EventMain__Container",
    componentId: "sc-163bmcv-0"
  })(["max-width:800px;margin:auto;border-left:6px solid #ffca28;padding-left:28px;padding-bottom:20px;margin-top:20px"]);
  var ContainerTop = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "EventMain__ContainerTop",
    componentId: "sc-163bmcv-1"
  })(["display:flex;justify-content:space-between;"]);
  var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({
    displayName: "EventMain__Title",
    componentId: "sc-163bmcv-2"
  })(["font-weight:bold;"]);
  var Date = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
    displayName: "EventMain__Date",
    componentId: "sc-163bmcv-3"
  })([""]);
  var Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
    displayName: "EventMain__Text",
    componentId: "sc-163bmcv-4"
  })(["width:90%;text-align:justify;padding-left:10px;"]);
  var ContainerList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "EventMain__ContainerList",
    componentId: "sc-163bmcv-5"
  })(["padding-left:10px;margin:40px 0;"]);
  var ContainerButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "EventMain__ContainerButton",
    componentId: "sc-163bmcv-6"
  })(["text-align:right"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerTop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, " ", props.title, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Date, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, " ", props.date, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, props.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: props.speakers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), props.cta && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "waves-effect waves-light btn orange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, " Register ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "event"), " "))));
}

/***/ })

})
//# sourceMappingURL=event.js.6008d53c51ff88458a5c.hot-update.js.map