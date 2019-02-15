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
  })(["background-color:grey;display:flex;height:600px;width:100%;position:relative;justify-content:center;"]);
  var Column = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__Column",
    componentId: "sc-1s2wrk4-1"
  })(["height:100%;width:75px;background-color:red;border-right:1px solid black;position:relative;"]);
  var LineMiddle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__LineMiddle",
    componentId: "sc-1s2wrk4-2"
  })(["width:100%;top:50%;position:absolute;border-bottom:1px solid black;"]);
  var Year = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
    displayName: "Timeline__Year",
    componentId: "sc-1s2wrk4-3"
  })(["font-size:24px;position:absolute;top:50%;margin:0;font-size"]);
  var Card = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__Card",
    componentId: "sc-1s2wrk4-4"
  })(["width:225px;background-color:white;position:absolute;z-index:2;padding:0 10px;", " ", ""], function (propsS) {
    return propsS.bottom ? 'bottom:' + propsS.bottom + '%;' : '';
  }, function (propsS) {
    return propsS.top ? 'top:' + propsS.top + '%;' : '';
  });

  function getColumn() {
    var positions = [// { y: 25 / 2},
    // { y: 25 + 25/2},
    // { y: 75 + 25/2},
    // { y: 50 + 25/2},
    {
      top: 2
    }, {
      top: 25
    }, {
      bottom: 2
    }, {
      bottom: 25
    }];
    var years = {};
    return data.map(function (d, index) {
      var year = years[d.year] ? '' : d.year;
      years[d.year] = true;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
        key: d.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
        top: positions[index % 4].top,
        bottom: positions[index % 4].bottom,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, d.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, d.text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Year, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, " ", year, " "));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, getColumn(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LineMiddle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
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
//# sourceMappingURL=about.js.122a412e6a2d5ad59a50.hot-update.js.map