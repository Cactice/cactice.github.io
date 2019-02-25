webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-no-ssr */ "./node_modules/react-no-ssr/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Scene */ "./components/Scene.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/lib/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _cacticeWorks_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cacticeWorks.json */ "./pages/cacticeWorks.json");
var _cacticeWorks_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./cacticeWorks.json */ "./pages/cacticeWorks.json", 1);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lottie */ "./node_modules/react-lottie/dist/index.js");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/yuya/git/cactice.github.io/pages/index.js";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










/**
 * Implements main page
 */

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isAbove = _useState4[0],
      setIsAbove = _useState4[1];

  var lottieRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  var defaultOptions = {
    loop: false,
    autoplay: false,
    animType: 'svg',
    animationData: _cacticeWorks_json__WEBPACK_IMPORTED_MODULE_7__,
    rendererSettings: {}
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var handleScroll = function handleScroll() {
      var scrollPosition = window.scrollY;
      var duration = window.innerHeight;
      var frame = scrollPosition / duration;

      if (frame > 0.9) {
        setIsAbove(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []); // Wrap WebGL-related components with NoSSR to disable server-side rendering

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", {
    style: {
      overflowX: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_6__["ParallaxProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onSSR: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Scene__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3119268846" + " " + 'overlaps',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_6__["Parallax"], {
    className: "custom-class",
    offsetYMax: 30,
    offsetYMin: -30,
    tag: "figure",
    styleInner: {
      paddingTep: '10vh',
      paddingLeft: '15vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3119268846" + " " + 'motto_div',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3119268846" + " " + 'motto_en',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "CODE IS\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      color: 'red'
    },
    className: "jsx-3119268846",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "LOVE\u3000")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3119268846" + " " + 'motto',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "\u30B3\u30FC\u30C9\u306B", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      color: 'red'
    },
    className: "jsx-3119268846",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "\u604B"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginRight: -50
    },
    className: "jsx-3119268846",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_lottie__WEBPACK_IMPORTED_MODULE_8___default.a, {
    ref: lottieRef,
    options: defaultOptions,
    height: 200,
    width: 400,
    isPaused: isAbove,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3119268846" + " " + 'project_view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Projects__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3119268846",
    css: ".project_view.jsx-3119268846{width:100vw;height:100vh;}.motto_div.jsx-3119268846{-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;-ms-writing-mode:tb-rl;height:auto;white-space:nowrap;}.motto_en.jsx-3119268846{margin:0px;font-size:11vh;font-family:\"Kokoro\";padding-top:3.5vh;}.motto.jsx-3119268846{-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;margin:0px;font-size:15.8vh;font-family:\"Kokoro\";line-height:80px;}.overlaps.jsx-3119268846{position:absolute;right:0px;top:0px;z-index:1;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXlhL2dpdC9jYWN0aWNlLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Rm9CLEFBR3dCLEFBS2MsQUFPZCxBQU9jLEFBUVIsV0FkRixDQVpILE1BMkJGLE9BMUJaLENBWXVCLEVBZWIsUUFDRSxVQUNFLENBaEJLLFdBaUJuQixPQWhCQSxnQkFWeUIsQUFjWixXQUNNLFlBZE4sS0FlVSxPQWRGLGNBZUYsS0FkbkIsWUFlQSIsImZpbGUiOiIvVXNlcnMveXV5YS9naXQvY2FjdGljZS5naXRodWIuaW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTm9TU1IgZnJvbSAncmVhY3Qtbm8tc3NyJ1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi4vY29tcG9uZW50cy9TY2VuZSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZydcblxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdHMnXG5pbXBvcnQgeyBQYXJhbGxheFByb3ZpZGVyLCBQYXJhbGxheH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4JztcbmltcG9ydCBDYWN0aWNlV29ya3MgZnJvbSAnLi9jYWN0aWNlV29ya3MuanNvbidcbmltcG9ydCBMb3R0aWUgZnJvbSAncmVhY3QtbG90dGllJztcbmltcG9ydCAgeyB1c2VTdGF0ZSAsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIEltcGxlbWVudHMgbWFpbiBwYWdlXG4gKi9cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtpc0Fib3ZlLCBzZXRJc0Fib3ZlXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgbGV0IGxvdHRpZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSwgXG4gICAgICBhbmltVHlwZTogJ3N2ZycsXG4gICAgICBhbmltYXRpb25EYXRhOiBDYWN0aWNlV29ya3MsXG4gICAgICByZW5kZXJlclNldHRpbmdzOiB7fSxcbiAgICB9XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHsgXG4gICAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGxldCBkdXJhdGlvbiA9IHdpbmRvdy5pbm5lckhlaWdodCBcbiAgICAgIGxldCBmcmFtZSA9IChzY3JvbGxQb3NpdGlvbiAvIGR1cmF0aW9uICk7XG4gICAgICBpZihmcmFtZT4wLjkpe3NldElzQWJvdmUoZmFsc2UpfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgfSwgW10pXG5cbiAgLy8gV3JhcCBXZWJHTC1yZWxhdGVkIGNvbXBvbmVudHMgd2l0aCBOb1NTUiB0byBkaXNhYmxlIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Ym9keSBzdHlsZT17e292ZXJmbG93WDogJ2hpZGRlbid9fT5cbiAgICAgIDxQYXJhbGxheFByb3ZpZGVyPlxuICAgICAgICA8Tm9TU1Igb25TU1I9ezxMb2FkaW5nLz59PlxuICAgICAgICAgIDxTY2VuZS8+XG4gICAgICAgIDwvTm9TU1I+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdmVybGFwcyc+XG4gICAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY2xhc3NcIlxuICAgICAgICAgICAgb2Zmc2V0WU1heD17MzB9XG4gICAgICAgICAgICBvZmZzZXRZTWluPXstMzB9XG4gICAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuICAgICAgICAgICAgc3R5bGVJbm5lcj17e1xuICAgICAgICAgICAgICBwYWRkaW5nVGVwOicxMHZoJyxcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6JzE1dncnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb3R0b19kaXYnPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21vdHRvX2VuJz5cbiAgICAgICAgICAgICAgICBDT0RFIElTJm5ic3A7XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjoncmVkJ319PlxuICAgICAgICAgICAgICAgICAgTE9WReOAgFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21vdHRvJz5cbiAgICAgICAgICAgICAgICDjgrPjg7zjg4njgatcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOidyZWQnfX0+XG4gICAgICAgICAgICAgICAgICDmgYtcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luUmlnaHQ6LTUwfX0+XG4gICAgICAgIDxMb3R0aWUgXG4gICAgICAgICAgcmVmPXtsb3R0aWVSZWZ9XG4gICAgICAgICAgb3B0aW9ucz17ZGVmYXVsdE9wdGlvbnN9XG4gICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgd2lkdGg9ezQwMH1cbiAgICAgICAgICBpc1BhdXNlZD17aXNBYm92ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X3ZpZXcnPlxuICAgICAgICAgIDxQcm9qZWN0cy8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucHJvamVjdF92aWV3IHtcbiAgICAgICAgICAgIHdpZHRoOjEwMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OjEwMHZoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tb3R0b19kaXYge1xuICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgICAgICAgICAgIC1tcy13cml0aW5nLW1vZGU6IHRiLXJsO1xuICAgICAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tb3R0b19lbiB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTF2aDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIktva29yb1wiO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6My41dmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1vdHRvIHtcbiAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTUuOHZoO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiS29rb3JvXCI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub3ZlcmxhcHMge1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8L1BhcmFsbGF4UHJvdmlkZXI+XG4gICAgPC9ib2R5PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/yuya/git/cactice.github.io/pages/index.js */",
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.eca69cac72fe059a99b7.hot-update.js.map