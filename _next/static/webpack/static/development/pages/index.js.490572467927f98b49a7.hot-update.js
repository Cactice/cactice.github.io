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
    className: "jsx-956427680" + " " + "overlaps",
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
    className: "jsx-956427680" + " " + "motto_div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-956427680" + " " + "motto_en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "CODE IS\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      color: 'red'
    },
    className: "jsx-956427680",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "LOVE\u3000")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-956427680" + " " + "motto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "\u30B3\u30FC\u30C9\u306B", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      color: 'red'
    },
    className: "jsx-956427680",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u604B"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-956427680",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-956427680" + " " + "Title",
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
    className: "jsx-956427680",
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
    className: "jsx-956427680" + " " + "project_view",
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
    styleId: "956427680",
    css: ".project_view.jsx-956427680{width:100vw;height:100vh;}.Title.jsx-956427680{font-family:'Roboto Slab',serif;font-weight:700;font-size:64px;}.motto_div.jsx-956427680{-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;-ms-writing-mode:tb-rl;height:auto;margin-top:10vh;white-space:nowrap;}.motto_en.jsx-956427680{margin:0px;font-size:11vh;font-family:'Kokoro';padding-top:3.5vh;}.motto.jsx-956427680{-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;margin:0px;font-size:15.8vh;font-family:'Kokoro';line-height:80px;}.overlaps.jsx-956427680{position:absolute;right:0px;top:0px;z-index:1;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXlhL2dpdC9jYWN0aWNlLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR3NCLEFBRzJCLEFBS3FCLEFBTVIsQUFRZCxBQU9jLEFBUVAsV0FkSCxDQW5CRixNQWtDSCxPQWpDWixDQW1CdUIsRUFlYixJQTlCUSxJQStCTixVQUNFLENBaEJNLENBZkgsVUFnQ2pCLEtBL0JBLEVBZUEsZ0JBWHlCLEFBZVosV0FDTSxZQWZMLEtBZ0JTLE9BZkwsY0FnQkMsRUFmRSxlQWdCckIsSUFmQSIsImZpbGUiOiIvVXNlcnMveXV5YS9naXQvY2FjdGljZS5naXRodWIuaW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5vU1NSIGZyb20gJ3JlYWN0LW5vLXNzcic7XG5cbmltcG9ydCBTY2VuZSBmcm9tICcuLi9jb21wb25lbnRzL1NjZW5lJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZyc7XG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC5zY3NzJztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RzJztcbmltcG9ydCB7IFBhcmFsbGF4UHJvdmlkZXIsIFBhcmFsbGF4IH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4JztcbmltcG9ydCBDYWN0aWNlV29ya3MgZnJvbSAnLi9jYWN0aWNlV29ya3MuanNvbic7XG5pbXBvcnQgTG90dGllIGZyb20gJ3JlYWN0LWxvdHRpZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYWJvdXQubWR4JztcblxuLyoqXG4gKiBJbXBsZW1lbnRzIG1haW4gcGFnZVxuICovXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzQWJvdmUsIHNldElzQWJvdmVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGxldCBsb3R0aWVSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbG9vcDogZmFsc2UsXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgIGFuaW1UeXBlOiAnc3ZnJyxcbiAgICBhbmltYXRpb25EYXRhOiBDYWN0aWNlV29ya3MsXG4gICAgcmVuZGVyZXJTZXR0aW5nczoge30sXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGxldCBkdXJhdGlvbiA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGxldCBmcmFtZSA9IHNjcm9sbFBvc2l0aW9uIC8gZHVyYXRpb247XG4gICAgICBpZiAoZnJhbWUgPiAwLjkpIHtcbiAgICAgICAgc2V0SXNBYm92ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgfSwgW10pO1xuXG4gIC8vIFdyYXAgV2ViR0wtcmVsYXRlZCBjb21wb25lbnRzIHdpdGggTm9TU1IgdG8gZGlzYWJsZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DYWN0aWNlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJDYWN0aWNlIGlzIG9uZSBvZiB0aGUgYmlnZ2VzdCBmYW5zIG9mIGNvZGluZy4gQ29kaW5nIGlzIGhpcyBsb3ZlLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Ym9keSBzdHlsZT17eyBvdmVyZmxvd1g6ICdoaWRkZW4nLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgPFBhcmFsbGF4UHJvdmlkZXI+XG4gICAgICAgICAgPE5vU1NSIG9uU1NSPXs8TG9hZGluZyAvPn0+XG4gICAgICAgICAgICA8U2NlbmUgLz5cbiAgICAgICAgICA8L05vU1NSPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxhcHNcIj5cbiAgICAgICAgICAgIDxQYXJhbGxheFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY2xhc3NcIlxuICAgICAgICAgICAgICBvZmZzZXRZTWF4PXszMH1cbiAgICAgICAgICAgICAgb2Zmc2V0WU1pbj17LTMwfVxuICAgICAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuICAgICAgICAgICAgICBzdHlsZUlubmVyPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZ1RlcDogJzEwdmgnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMTV2dycsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW90dG9fZGl2XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW90dG9fZW5cIj5cbiAgICAgICAgICAgICAgICAgIENPREUgSVMmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5MT1ZF44CAPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtb3R0b1wiPlxuICAgICAgICAgICAgICAgICAg44Kz44O844OJ44GrXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+5oGLPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpdGxlXCI+QWJvdXQ8L2Rpdj5cbiAgICAgICAgICAgIDxBYm91dCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IC01MCB9fT5cbiAgICAgICAgICAgIDxMb3R0aWVcbiAgICAgICAgICAgICAgcmVmPXtsb3R0aWVSZWZ9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e2RlZmF1bHRPcHRpb25zfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cbiAgICAgICAgICAgICAgaXNQYXVzZWQ9e2lzQWJvdmV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdF92aWV3XCI+XG4gICAgICAgICAgICA8UHJvamVjdHMgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5wcm9qZWN0X3ZpZXcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5UaXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW90dG9fZGl2IHtcbiAgICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgICAgICAgICAgICAgLW1zLXdyaXRpbmctbW9kZTogdGItcmw7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vdHRvX2VuIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTF2aDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdLb2tvcm8nO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMy41dmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb3R0byB7XG4gICAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE1Ljh2aDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdLb2tvcm8nO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm92ZXJsYXBzIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9QYXJhbGxheFByb3ZpZGVyPlxuICAgICAgPC9ib2R5PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/yuya/git/cactice.github.io/pages/index.js */",
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
//# sourceMappingURL=index.js.490572467927f98b49a7.hot-update.js.map