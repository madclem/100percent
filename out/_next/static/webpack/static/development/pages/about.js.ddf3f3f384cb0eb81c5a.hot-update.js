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
/* harmony import */ var utils_styles_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/styles/media */ "./utils/styles/media.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./pages/about/data.js");
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/pages/about/Timeline.js";

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n            display: block;\n            margin: 0;\n            position:relative;\n            top: 50%;\n            left: -1px;\n            width: 1px;\n            background-image: linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0, 0,0, .0));\n            height: ", "%;\n\n            ", ":hover & {\n                background-image: linear-gradient(to bottom, rgb(1, 58, 81), 26%, rgb(251, 140, 0));\n            }\n\n            ", "\n        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            opacity: .7;\n            background-color:#f2f2f2;\n            width: 220px;\n            ", "\n            ", "\n            position:absolute;\n            margin: 0;\n\n            ", ":hover & {\n                background-color:white;\n                opacity: 1;\n\n            }\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            margin: 0;\n            position: absolute;\n            top: 50%;\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            display: block;\n            width: 100%;\n            top: 50%;\n            position: absolute;\n            border-bottom: 1px solid black;\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            height: 100%;\n            width: 75px;\n            border-right: 1px dashed rgba(0,0,0,.1);\n            position: relative;\n        "]);

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
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__Container",
    componentId: "sc-1s2wrk4-0"
  })(["display:flex;flex-wrap:wrap;width:94%;position:relative;margin:0 3%;border-left:1px dashed rgba(0,0,0,.1);", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject()));
  var Column = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__Column",
    componentId: "sc-1s2wrk4-1"
  })(["width:100%;", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject2()));
  var LineMiddle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__LineMiddle",
    componentId: "sc-1s2wrk4-2"
  })(["display:none;", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject3()));
  var Year = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
    displayName: "Timeline__Year",
    componentId: "sc-1s2wrk4-3"
  })(["font-size:24px;color:rgb(223,229,231);font-weight:bold;display:block;margin:20px 0 0 10px;", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject4()));
  var Card = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__Card",
    componentId: "sc-1s2wrk4-4"
  })(["pointer-events:none;background-color:white;z-index:2;padding:10px;margin-bottom:10px;", " h5{margin:0 0 10px 0;}p{margin:0;}"], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject5(), function (propsS) {
    return propsS.bottom ? 'bottom:' + propsS.bottom + '%;' : '';
  }, function (propsS) {
    return propsS.top ? 'top:' + propsS.top + '%;' : '';
  }, Column));
  var VerticalLine = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__VerticalLine",
    componentId: "sc-1s2wrk4-5"
  })(["display:none;", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject6(), function (propsS) {
    return propsS.height || 0;
  }, Column, function (propsS) {
    return propsS.translateY ? "\n            background-image: linear-gradient(to top, rgba(0,0,0,.4), rgba(0, 0,0, .0));\n                transform: translateY(-100%);\n\n                ".concat(Column, ":hover & {\n                    background-image: linear-gradient(to top, rgb(1, 58, 81), 26%, rgb(251, 140, 0));\n                }\n            ") : '';
  })); // background-image: linear-gradient(to top, rgb(1, 58, 81), 26%, rgb(0, 229, 158));

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
        key: d.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Year, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, " ", year, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
        top: pos.top,
        bottom: pos.bottom,
        className: "z-depth-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, d.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, d.text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalLine, {
        height: height,
        translateY: translateY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, getColumn(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LineMiddle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
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
//# sourceMappingURL=about.js.ddf3f3f384cb0eb81c5a.hot-update.js.map