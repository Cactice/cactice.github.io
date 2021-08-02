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
    className: "jsx-4194680226" + " " + "overlaps",
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
    className: "jsx-4194680226" + " " + "motto_div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4194680226" + " " + "motto_en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "CODE IS\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      color: 'red'
    },
    className: "jsx-4194680226",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "LOVE\u3000")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4194680226" + " " + "motto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "\u30B3\u30FC\u30C9\u306B", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      color: 'red'
    },
    className: "jsx-4194680226",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u604B"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4194680226",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4194680226" + " " + "Title",
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
    className: "jsx-4194680226",
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
    className: "jsx-4194680226" + " " + "project_view",
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
    styleId: "4194680226",
    css: ".project_view.jsx-4194680226{width:100vw;height:100vh;}.Title.jsx-4194680226{font-family:'Roboto Slab',serif;font-weight:700;font-size:64px;}.motto_div.jsx-4194680226{-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;-ms-writing-mode:tb-rl;height:auto;margin-top:5vh;white-space:nowrap;}.motto_en.jsx-4194680226{margin:0px;font-size:11vh;font-family:'Kokoro';padding-top:3.5vh;}.motto.jsx-4194680226{-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;margin:0px;font-size:15.8vh;font-family:'Kokoro';line-height:80px;}.overlaps.jsx-4194680226{position:absolute;right:0px;top:0px;z-index:1;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXlhL2dpdC9jYWN0aWNlLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR3NCLEFBRzJCLEFBS3FCLEFBTVIsQUFRZCxBQU9jLEFBUVAsV0FkSCxDQW5CRixNQWtDSCxPQWpDWixDQW1CdUIsRUFlYixJQTlCUSxJQStCTixVQUNFLENBaEJNLENBZkgsVUFnQ2pCLEtBL0JBLEVBZUEsZ0JBWHlCLEFBZVosV0FDTSxZQWZMLEtBZ0JTLE9BZk4sY0FnQkUsQ0FmRSxnQkFnQnJCLEdBZkEiLCJmaWxlIjoiL1VzZXJzL3l1eWEvZ2l0L2NhY3RpY2UuZ2l0aHViLmlvL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOb1NTUiBmcm9tICdyZWFjdC1uby1zc3InO1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi4vY29tcG9uZW50cy9TY2VuZSc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnO1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0ICdib290c3RyYXAvc2Nzcy9ib290c3RyYXAuc2Nzcyc7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0cyc7XG5pbXBvcnQgeyBQYXJhbGxheFByb3ZpZGVyLCBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgQ2FjdGljZVdvcmtzIGZyb20gJy4vY2FjdGljZVdvcmtzLmpzb24nO1xuaW1wb3J0IExvdHRpZSBmcm9tICdyZWFjdC1sb3R0aWUnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL2Fib3V0Lm1keCc7XG5cbi8qKlxuICogSW1wbGVtZW50cyBtYWluIHBhZ2VcbiAqL1xuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0Fib3ZlLCBzZXRJc0Fib3ZlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBsZXQgbG90dGllUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGxvb3A6IGZhbHNlLFxuICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICBhbmltVHlwZTogJ3N2ZycsXG4gICAgYW5pbWF0aW9uRGF0YTogQ2FjdGljZVdvcmtzLFxuICAgIHJlbmRlcmVyU2V0dGluZ3M6IHt9LFxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgbGV0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBsZXQgZHVyYXRpb24gPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBsZXQgZnJhbWUgPSBzY3JvbGxQb3NpdGlvbiAvIGR1cmF0aW9uO1xuICAgICAgaWYgKGZyYW1lID4gMC45KSB7XG4gICAgICAgIHNldElzQWJvdmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gIH0sIFtdKTtcblxuICAvLyBXcmFwIFdlYkdMLXJlbGF0ZWQgY29tcG9uZW50cyB3aXRoIE5vU1NSIHRvIGRpc2FibGUgc2VydmVyLXNpZGUgcmVuZGVyaW5nXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q2FjdGljZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQ2FjdGljZSBpcyBvbmUgb2YgdGhlIGJpZ2dlc3QgZmFucyBvZiBjb2RpbmcuIENvZGluZyBpcyBoaXMgbG92ZS5cIlxuICAgICAgICAvPlxuICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGJvZHkgc3R5bGU9e3sgb3ZlcmZsb3dYOiAnaGlkZGVuJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgIDxQYXJhbGxheFByb3ZpZGVyPlxuICAgICAgICAgIDxOb1NTUiBvblNTUj17PExvYWRpbmcgLz59PlxuICAgICAgICAgICAgPFNjZW5lIC8+XG4gICAgICAgICAgPC9Ob1NTUj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXBzXCI+XG4gICAgICAgICAgICA8UGFyYWxsYXhcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNsYXNzXCJcbiAgICAgICAgICAgICAgb2Zmc2V0WU1heD17MzB9XG4gICAgICAgICAgICAgIG9mZnNldFlNaW49ey0zMH1cbiAgICAgICAgICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICAgICAgICAgICAgc3R5bGVJbm5lcj17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmdUZXA6ICcxMHZoJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzE1dncnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdHRvX2RpdlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vdHRvX2VuXCI+XG4gICAgICAgICAgICAgICAgICBDT0RFIElTJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+TE9WReOAgDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW90dG9cIj5cbiAgICAgICAgICAgICAgICAgIOOCs+ODvOODieOBq1xuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PuaBizwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZVwiPkFib3V0PC9kaXY+XG4gICAgICAgICAgICA8QWJvdXQgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAtNTAgfX0+XG4gICAgICAgICAgICA8TG90dGllXG4gICAgICAgICAgICAgIHJlZj17bG90dGllUmVmfVxuICAgICAgICAgICAgICBvcHRpb25zPXtkZWZhdWx0T3B0aW9uc31cbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICAgIHdpZHRoPXs0MDB9XG4gICAgICAgICAgICAgIGlzUGF1c2VkPXtpc0Fib3ZlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3Rfdmlld1wiPlxuICAgICAgICAgICAgPFByb2plY3RzIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucHJvamVjdF92aWV3IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuVGl0bGUge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vdHRvX2RpdiB7XG4gICAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gICAgICAgICAgICAgIC1tcy13cml0aW5nLW1vZGU6IHRiLXJsO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vdHRvX2VuIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTF2aDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdLb2tvcm8nO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMy41dmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb3R0byB7XG4gICAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE1Ljh2aDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdLb2tvcm8nO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm92ZXJsYXBzIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9QYXJhbGxheFByb3ZpZGVyPlxuICAgICAgPC9ib2R5PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/yuya/git/cactice.github.io/pages/index.js */",
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
//# sourceMappingURL=index.js.54dc7e1e582284c6e6e2.hot-update.js.map