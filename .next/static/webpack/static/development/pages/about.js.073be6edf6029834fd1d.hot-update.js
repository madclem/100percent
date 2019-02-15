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
  })(["height:100%;width:75px;background-color:red;border-right:1px dashed rgba(0,0,0,.2);position:relative;"]);
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
  })(["pointer-events:none;width:225px;background-color:white;position:absolute;z-index:2;padding:10px;", " ", " h5{margin:0 0 10px 0;}p{margin:0;}"], function (propsS) {
    return propsS.bottom ? 'bottom:' + propsS.bottom + '%;' : '';
  }, function (propsS) {
    return propsS.top ? 'top:' + propsS.top + '%;' : '';
  });
  var CardLine = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__CardLine",
    componentId: "sc-1s2wrk4-5"
  })([""]);
  var VerticalLine = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__VerticalLine",
    componentId: "sc-1s2wrk4-6"
  })(["margin:0;position:relative;top:50%;left:-1px;width:2px;height:5px;background-image:linear-gradient(to bottom,rgb(0,0,0),26%,rgb(0,0,0));height:", "%;", ":hover &{width:4px;background-image:linear-gradient(to bottom,rgb(1,58,81),26%,rgb(0,229,158));}", ""], function (propsS) {
    return propsS.height || 0;
  }, Column, function (propsS) {
    return propsS.translateY ? "\n            background-image: linear-gradient(to top, rgb(0,0,0), 26%, rgb(0, 0, 0));\n            transform: translateY(-100%);\n\n            ".concat(Column, ":hover & {\n                background-image: linear-gradient(to top, rgb(1, 58, 81), 26%, rgb(0, 229, 158));\n            }\n        ") : '';
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
    return data.map(function (d, index) {
      var pos = positions[index % 4];
      var year = years[d.year] ? '' : d.year;
      years[d.year] = true;
      var height = (pos.bottom || pos.top) - 50;
      var translateY = pos.bottom ? true : false;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
        key: d.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
        top: pos.top,
        bottom: pos.bottom,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, d.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, d.text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Year, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, " ", year, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalLine, {
        height: height,
        translateY: translateY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, getColumn(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LineMiddle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
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
//# sourceMappingURL=about.js.073be6edf6029834fd1d.hot-update.js.map