webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about/Timeline.js":
/*!*********************************!*\
  !*** ./pages/about/Timeline.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timeline; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/pages/about/Timeline.js";


function Timeline() {
  // data
  var data = [{
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
  }];
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__Container",
    componentId: "sc-1s2wrk4-0"
  })(["display:flex;height:400px;width:100%;position:relative;"]);
  var Column = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__Column",
    componentId: "sc-1s2wrk4-1"
  })(["height:100%;flex:1 1 0;background-color:red;border-right:1px solid black;"]);
  var LineMiddle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__LineMiddle",
    componentId: "sc-1s2wrk4-2"
  })(["width:100%;top:50%;position:absolute;border-bottom:1px solid black;"]);
  var Year = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({
    displayName: "Timeline__Year",
    componentId: "sc-1s2wrk4-3"
  })(["position:absolute;top:0;"]);

  function getColumn() {
    var years = {};
    return data.map(function (d) {
      var year = years[d.year] ? '' : d.year;
      years[d.year] = true;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
        key: d.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Year, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, " ", year, " "));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, getColumn(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LineMiddle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about/Timeline")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=about.js.2a8585745c50c711c9b8.hot-update.js.map