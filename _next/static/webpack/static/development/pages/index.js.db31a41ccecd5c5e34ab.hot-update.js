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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/lib/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _cacticeWorks_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cacticeWorks.json */ "./pages/cacticeWorks.json");
var _cacticeWorks_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./cacticeWorks.json */ "./pages/cacticeWorks.json", 1);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-lottie */ "./node_modules/react-lottie/dist/index.js");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_about_mdx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/about.mdx */ "./components/about.mdx");
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
    animationData: _cacticeWorks_json__WEBPACK_IMPORTED_MODULE_9__,
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
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Cactice"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "Description",
    content: "Cactice is one of the biggest fans of coding. Coding is his love.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html", {
    lang: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", {
    style: {
      overflowX: 'hidden',
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8__["ParallaxProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onSSR: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Scene__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1816433256" + " " + "overlaps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8__["Parallax"], {
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
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1816433256" + " " + "motto_div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1816433256" + " " + "motto_en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "CODE IS\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      color: 'red'
    },
    className: "jsx-1816433256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "LOVE\u3000")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1816433256" + " " + "motto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "\u30B3\u30FC\u30C9\u306B", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      color: 'red'
    },
    className: "jsx-1816433256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u604B"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1816433256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1816433256" + " " + "Title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_about_mdx__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginRight: -50
    },
    className: "jsx-1816433256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_lottie__WEBPACK_IMPORTED_MODULE_10___default.a, {
    ref: lottieRef,
    options: defaultOptions,
    height: 200,
    width: 400,
    isPaused: isAbove,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1816433256" + " " + "project_view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Projects__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1816433256",
    css: ".project_view.jsx-1816433256{width:100vw;height:100vh;}.Title.jsx-1816433256{font-family:'Roboto Slab',serif;font-weight:700;}.motto_div.jsx-1816433256{-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;-ms-writing-mode:tb-rl;height:auto;white-space:nowrap;}.motto_en.jsx-1816433256{margin:0px;font-size:11vh;font-family:'Kokoro';padding-top:3.5vh;}.motto.jsx-1816433256{-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;margin:0px;font-size:15.8vh;font-family:'Kokoro';line-height:80px;}.overlaps.jsx-1816433256{position:absolute;right:0px;top:0px;z-index:1;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXlhL2dpdC9jYWN0aWNlLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR3NCLEFBRzJCLEFBS3FCLEFBS1IsQUFPZCxBQU9jLEFBUVAsV0FkSCxDQWpCRixNQWdDSCxPQS9CWixDQWlCdUIsRUFlYixJQTVCUSxJQTZCTixVQUNFLENBaEJNLENBYnBCLFVBOEJBLE9BaEJBLGdCQVZ5QixBQWNaLFdBQ00sWUFkTCxLQWVTLE9BZEYsY0FlRixLQWRuQixZQWVBIiwiZmlsZSI6Ii9Vc2Vycy95dXlhL2dpdC9jYWN0aWNlLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTm9TU1IgZnJvbSAncmVhY3Qtbm8tc3NyJztcblxuaW1wb3J0IFNjZW5lIGZyb20gJy4uL2NvbXBvbmVudHMvU2NlbmUnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJztcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCAnYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLnNjc3MnO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdHMnO1xuaW1wb3J0IHsgUGFyYWxsYXhQcm92aWRlciwgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnO1xuaW1wb3J0IENhY3RpY2VXb3JrcyBmcm9tICcuL2NhY3RpY2VXb3Jrcy5qc29uJztcbmltcG9ydCBMb3R0aWUgZnJvbSAncmVhY3QtbG90dGllJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9hYm91dC5tZHgnO1xuXG4vKipcbiAqIEltcGxlbWVudHMgbWFpbiBwYWdlXG4gKi9cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNBYm92ZSwgc2V0SXNBYm92ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgbGV0IGxvdHRpZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBsb29wOiBmYWxzZSxcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgYW5pbVR5cGU6ICdzdmcnLFxuICAgIGFuaW1hdGlvbkRhdGE6IENhY3RpY2VXb3JrcyxcbiAgICByZW5kZXJlclNldHRpbmdzOiB7fSxcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgbGV0IGR1cmF0aW9uID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgbGV0IGZyYW1lID0gc2Nyb2xsUG9zaXRpb24gLyBkdXJhdGlvbjtcbiAgICAgIGlmIChmcmFtZSA+IDAuOSkge1xuICAgICAgICBzZXRJc0Fib3ZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbXSk7XG5cbiAgLy8gV3JhcCBXZWJHTC1yZWxhdGVkIGNvbXBvbmVudHMgd2l0aCBOb1NTUiB0byBkaXNhYmxlIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNhY3RpY2U8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkNhY3RpY2UgaXMgb25lIG9mIHRoZSBiaWdnZXN0IGZhbnMgb2YgY29kaW5nLiBDb2RpbmcgaXMgaGlzIGxvdmUuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGh0bWwgbGFuZz1cImVuXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxib2R5IHN0eWxlPXt7IG92ZXJmbG93WDogJ2hpZGRlbicsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICA8UGFyYWxsYXhQcm92aWRlcj5cbiAgICAgICAgICA8Tm9TU1Igb25TU1I9ezxMb2FkaW5nIC8+fT5cbiAgICAgICAgICAgIDxTY2VuZSAvPlxuICAgICAgICAgIDwvTm9TU1I+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGFwc1wiPlxuICAgICAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4gICAgICAgICAgICAgIG9mZnNldFlNYXg9ezMwfVxuICAgICAgICAgICAgICBvZmZzZXRZTWluPXstMzB9XG4gICAgICAgICAgICAgIHRhZz1cImZpZ3VyZVwiXG4gICAgICAgICAgICAgIHN0eWxlSW5uZXI9e3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nVGVwOiAnMTB2aCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxNXZ3JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3R0b19kaXZcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtb3R0b19lblwiPlxuICAgICAgICAgICAgICAgICAgQ09ERSBJUyZuYnNwO1xuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PkxPVkXjgIA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vdHRvXCI+XG4gICAgICAgICAgICAgICAgICDjgrPjg7zjg4njgatcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT7mgYs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVcIj5BYm91dDwvZGl2PlxuICAgICAgICAgICAgPEFib3V0IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogLTUwIH19PlxuICAgICAgICAgICAgPExvdHRpZVxuICAgICAgICAgICAgICByZWY9e2xvdHRpZVJlZn1cbiAgICAgICAgICAgICAgb3B0aW9ucz17ZGVmYXVsdE9wdGlvbnN9XG4gICAgICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgICAgICB3aWR0aD17NDAwfVxuICAgICAgICAgICAgICBpc1BhdXNlZD17aXNBYm92ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0X3ZpZXdcIj5cbiAgICAgICAgICAgIDxQcm9qZWN0cyAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnByb2plY3RfdmlldyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLlRpdGxlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW90dG9fZGl2IHtcbiAgICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgICAgICAgICAgICAgLW1zLXdyaXRpbmctbW9kZTogdGItcmw7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vdHRvX2VuIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTF2aDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdLb2tvcm8nO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMy41dmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb3R0byB7XG4gICAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE1Ljh2aDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdLb2tvcm8nO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm92ZXJsYXBzIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9QYXJhbGxheFByb3ZpZGVyPlxuICAgICAgPC9ib2R5PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/yuya/git/cactice.github.io/pages/index.js */",
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
//# sourceMappingURL=index.js.db31a41ccecd5c5e34ab.hot-update.js.map