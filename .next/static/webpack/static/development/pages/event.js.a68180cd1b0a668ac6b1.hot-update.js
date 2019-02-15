webpackHotUpdate("static/development/pages/event.js",{

/***/ "./pages/event.js":
/*!************************!*\
  !*** ./pages/event.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Events; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Layout */ "./components/Layout.js");
/* harmony import */ var components_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Divider */ "./components/Divider.js");
/* harmony import */ var components_EventMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/EventMain */ "./components/EventMain.js");
var _jsxFileName = "/Users/clementchenebault/Documents/dev/100percentclub/pages/event.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function Events() {
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "event__Container",
    componentId: "de5qyu-0"
  })(["margin-bottom:80px"]);
  var Separator = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "event__Separator",
    componentId: "de5qyu-1"
  })(["padding-top:80px;"]);
  var speakersEvent = [{
    id: 0,
    name: 'Speaker 1',
    link: '#'
  }, {
    id: 1,
    name: 'Speaker 2',
    link: '#'
  }, {
    id: 2,
    name: 'Speaker 3',
    link: '#'
  }];
  var eventData = {
    title: 'Title of this event',
    description: 'When clicking into an event (from the events page), here are all the informations about this event! For now the informations are hardcoded but in the future, they will be replaced by the real events details!',
    date: '22.01.2019',
    speakers: speakersEvent
  };
  var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
    displayName: "event__Img",
    componentId: "de5qyu-2"
  })(["width:100%;height:auto;display:block;cursor:pointer;margin:4px 0;"]);
  var Column = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "event__Column",
    componentId: "de5qyu-3"
  })(["padding:0 2px!important;"]);
  var posts = ['https://lorempixel.com/640/480/business/1', 'https://lorempixel.com/640/480/business/2', 'https://lorempixel.com/640/480/business/3', 'https://lorempixel.com/640/480/business/4', 'https://lorempixel.com/640/480/business/5', 'https://lorempixel.com/640/480/business/6', 'https://lorempixel.com/640/480/people/1', 'https://lorempixel.com/640/480/people/2', 'https://lorempixel.com/640/480/people/3', 'https://lorempixel.com/640/480/people/4', 'https://lorempixel.com/640/480/people/5', 'https://lorempixel.com/640/480/people/6', 'https://lorempixel.com/640/480/nature/1', 'https://lorempixel.com/640/480/nature/2', 'https://lorempixel.com/640/480/nature/3', 'https://lorempixel.com/640/480/nature/4', 'https://lorempixel.com/640/480/nature/5', 'https://lorempixel.com/640/480/nature/6'];

  function splitElements(posts) {
    var splitted = [];

    var _loop = function _loop(i) {
      var col = [];
      posts.map(function (post, index) {
        if (index % 6 === i) {
          col.push(post);
        }

        return '';
      });
      splitted.push(col);
    };

    for (var i = 0; i < 6; i++) {
      _loop(i);
    }

    return splitted;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {});
    return function cleanUp() {
      instances.forEach(function (element) {
        element.destroy();
      });
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Separator, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_EventMain__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, eventData, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Divider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    top: 60,
    bottom: 60,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, splitElements(posts).map(function (col, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
      className: "col s6 m4 l2",
      key: 'col' + index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, col.map(function (post, index2) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Img, {
        key: index2,
        alt: "post logo",
        src: post,
        className: "materialboxed post_image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      });
    }));
  }))));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/event")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=event.js.a68180cd1b0a668ac6b1.hot-update.js.map