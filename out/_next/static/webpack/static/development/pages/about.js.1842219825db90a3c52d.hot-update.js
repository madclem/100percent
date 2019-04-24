webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/Timeline/Timeline.js":
/*!*****************************************!*\
  !*** ./components/Timeline/Timeline.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timeline; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var utils_styles_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/styles/media */ "./utils/styles/media.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./components/Timeline/data.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ "./components/Timeline/Card.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Column */ "./components/Timeline/Column.js");
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/components/Timeline/Timeline.js";

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            width: ", "px;\n            height: ", "px;\n            background-color: rgb(0, 0, 0);\n            border-radius: 100%;\n            position: absolute;\n            top: calc(50% - ", "px);\n            left: -", "px;        \n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            display: block;\n            margin: 0;\n            position:relative;\n            top: 50%;\n            left: -1px;\n            width: 1px;\n            background-image: linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0, 0,0, .0));\n            height: ", "%;\n\n            ", ":hover & {\n                background-image: linear-gradient(to bottom, rgb(1, 58, 81), 26%, rgb(251, 140, 0));\n                z-index: 3;\n            }\n\n            ", "\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            margin: 0 0 0 5px;\n            transform: translateY(-100%);\n            position: absolute;\n            top: 50%;\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            display: block;\n            width: 100%;\n            top: 50%;\n            position: absolute;\n            border-bottom: 1px solid black;\n        "]);

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
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__Container",
    componentId: "vtn6sg-0"
  })(["display:flex;flex-wrap:wrap;width:94%;position:relative;margin:0 3%;border-left:1px dashed rgba(0,0,0,.1);", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject()));
  var LineMiddle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__LineMiddle",
    componentId: "vtn6sg-1"
  })(["display:none;", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject2()));
  var Year = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
    displayName: "Timeline__Year",
    componentId: "vtn6sg-2"
  })(["font-size:24px;color:rgb(223,229,231);font-weight:bold;display:block;margin:20px 0 0 10px;", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject3()));
  var VerticalLine = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__VerticalLine",
    componentId: "vtn6sg-3"
  })(["display:none;", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject4(), function (propsS) {
    return propsS.height || 0;
  }, _Column__WEBPACK_IMPORTED_MODULE_5__["default"], function (propsS) {
    return propsS.translateY ? "\n            background-image: linear-gradient(to top, rgba(0,0,0,.4), rgba(0, 0,0, .0));\n                transform: translateY(-100%);\n\n                ".concat(_Column__WEBPACK_IMPORTED_MODULE_5__["default"], ":hover & {\n                    background-image: linear-gradient(to top, rgb(1, 58, 81), 26%, rgb(251, 140, 0));\n                }\n            ") : '';
  }));
  var Point = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Timeline__Point",
    componentId: "vtn6sg-4"
  })(["", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject5(), widthPoint, widthPoint, widthPoint / 2, widthPoint / 2)); // background-image: linear-gradient(to top, rgb(1, 58, 81), 26%, rgb(0, 229, 158));

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
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Year, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, " ", year, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
        top: pos.top,
        bottom: pos.bottom,
        className: "z-depth-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, d.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, d.text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalLine, {
        height: height,
        translateY: translateY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Point, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, getColumn(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LineMiddle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=about.js.1842219825db90a3c52d.hot-update.js.map