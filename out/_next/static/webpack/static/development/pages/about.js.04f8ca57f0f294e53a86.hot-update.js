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
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "Card__Container",
    componentId: "sc-103by7j-0"
  })(["pointer-events:none;background-color:white;z-index:2;padding:10px;margin-bottom:10px;", " h5{margin:0 0 10px 0;}p{margin:0;}"], utils_styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet(_templateObject(), function (propsS) {
    return propsS.bottom ? 'bottom:' + propsS.bottom + '%;' : '';
  }, function (propsS) {
    return propsS.top ? 'top:' + propsS.top + '%;' : '';
  }, _Column__WEBPACK_IMPORTED_MODULE_3__["default"]));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), props.children);
}

/***/ }),

/***/ "./components/Timeline/Column.js":
/*!***************************************!*\
  !*** ./components/Timeline/Column.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var utils_styles_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/styles/media */ "./utils/styles/media.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        height: 100%;\n        width: 75px;\n        border-right: 1px dashed rgba(0,0,0,.1);\n        position: relative;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Column",
  componentId: "sc-1t8ch6c-0"
})(["width:100%;", ""], utils_styles_media__WEBPACK_IMPORTED_MODULE_0__["default"].tablet(_templateObject())));

/***/ }),

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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            display: block;\n            margin: 0;\n            position:relative;\n            top: 50%;\n            left: -1px;\n            width: 1px;\n            background-image: linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0, 0,0, .0));\n            height: ", "%;\n\n            ", ":hover & {\n                background-image: linear-gradient(to bottom, rgb(1, 58, 81), 26%, rgb(251, 140, 0));\n            }\n\n            ", "\n        "]);

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Column__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: d.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Year, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, " ", year, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      }, d.text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalLine, {
        height: height,
        translateY: translateY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, getColumn(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LineMiddle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Timeline/data.js":
/*!*************************************!*\
  !*** ./components/Timeline/data.js ***!
  \*************************************/
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
  year: 2011,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 4,
  year: 2013,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 5,
  year: 2014,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 6,
  year: 2014,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 7,
  year: 2014,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 8,
  year: 2015,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 9,
  year: 2015,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}, {
  id: 10,
  year: 2016,
  title: 'title 1',
  text: 'This is a text here blablablabla flou flou flou riri ri ri ri'
}]);

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/NavBar */ "./components/NavBar.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout */ "./components/Layout.js");
/* harmony import */ var components_Author__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Author */ "./components/Author.js");
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Footer */ "./components/Footer.js");
/* harmony import */ var components_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Timeline/Timeline */ "./components/Timeline/Timeline.js");
/* harmony import */ var _home_Intro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/Intro */ "./pages/home/Intro.js");
/* harmony import */ var _home_Speakers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/Speakers */ "./pages/home/Speakers.js");
/* harmony import */ var _home_Parallax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/Parallax */ "./pages/home/Parallax.js");
/* harmony import */ var _home_Experiment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/Experiment */ "./pages/home/Experiment.js");
/* harmony import */ var _home_Keygoals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/Keygoals */ "./pages/home/Keygoals.js");
/* harmony import */ var _home_Quote__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/Quote */ "./pages/home/Quote.js");
/* harmony import */ var components_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Divider */ "./components/Divider.js");
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/pages/about.js";














function About() {
  var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
    displayName: "about__Title",
    componentId: "wlrdrz-0"
  })(["margin-top:80px;"]);
  var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
    displayName: "about__Paragraph",
    componentId: "wlrdrz-1"
  })(["width:80%;margin:auto;margin-bottom:20px;&.last{margin-bottom:80px;}"]);
  var AuthorContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "about__AuthorContainer",
    componentId: "wlrdrz-2"
  })(["margin:40px 0 80px 0;padding-top:20px;"]);
  var ContainerTimeline = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "about__ContainerTimeline",
    componentId: "wlrdrz-3"
  })(["background-color:#f6f6f6;"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home_Experiment__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    className: "center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, " What do we do "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, {
    className: "center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut felis vel arcu iaculis laoreet. Quisque molestie suscipit lacinia. Pellentesque venenatis efficitur fringilla. Aliquam erat volutpat. Nunc posuere nunc erat, ac varius purus consequat at. Nam luctus leo felis, non lacinia augue suscipit non. Fusce lectus risus, laoreet non posuere at, ullamcorper ut purus. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    className: "center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, " Why do we do it "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, {
    className: "last center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, " Vestibulum ut felis vel arcu iaculis laoreet. Quisque molestie suscipit lacinia. Pellentesque venenatis efficitur fringilla. Aliquam erat volutpat. Nunc posuere nunc erat, ac varius purus consequat at. Nam luctus leo felis, non lacinia augue suscipit non. Fusce lectus risus, laoreet non posuere at, ullamcorper ut purus. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Divider__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthorContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Author__WEBPACK_IMPORTED_MODULE_4__["default"], {
    image: "/static/img/deborah.png",
    title: "Founder: Deborah Gilshan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut felis vel arcu iaculis laoreet. Aliquam erat volutpat. Nunc posuere nunc erat, ac varius purus consequat at.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerTimeline, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/about/Card.js":
false,

/***/ "./pages/about/Column.js":
false,

/***/ "./pages/about/Timeline.js":
false,

/***/ "./pages/about/data.js":
false

})
//# sourceMappingURL=about.js.04f8ca57f0f294e53a86.hot-update.js.map