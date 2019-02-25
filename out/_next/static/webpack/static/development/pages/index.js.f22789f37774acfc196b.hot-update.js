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
/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/lib/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _cacticeWorks_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cacticeWorks.json */ "./pages/cacticeWorks.json");
var _cacticeWorks_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./cacticeWorks.json */ "./pages/cacticeWorks.json", 1);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lottie */ "./node_modules/react-lottie/dist/index.js");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_9__);
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
    animationData: _cacticeWorks_json__WEBPACK_IMPORTED_MODULE_8__,
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
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", {
    style: {
      overflowX: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_7__["ParallaxProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onSSR: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Scene__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3119268846" + " " + 'overlaps',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_7__["Parallax"], {
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
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3119268846" + " " + 'motto_div',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3119268846" + " " + 'motto_en',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "CODE IS\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      color: 'red'
    },
    className: "jsx-3119268846",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "LOVE\u3000")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3119268846" + " " + 'motto',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\u30B3\u30FC\u30C9\u306B", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      color: 'red'
    },
    className: "jsx-3119268846",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "\u604B"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginRight: -50
    },
    className: "jsx-3119268846",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_lottie__WEBPACK_IMPORTED_MODULE_9___default.a, {
    ref: lottieRef,
    options: defaultOptions,
    height: 200,
    width: 400,
    isPaused: isAbove,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3119268846" + " " + 'project_view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Projects__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3119268846",
    css: ".project_view.jsx-3119268846{width:100vw;height:100vh;}.motto_div.jsx-3119268846{-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;-ms-writing-mode:tb-rl;height:auto;white-space:nowrap;}.motto_en.jsx-3119268846{margin:0px;font-size:11vh;font-family:\"Kokoro\";padding-top:3.5vh;}.motto.jsx-3119268846{-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;margin:0px;font-size:15.8vh;font-family:\"Kokoro\";line-height:80px;}.overlaps.jsx-3119268846{position:absolute;right:0px;top:0px;z-index:1;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXlhL2dpdC9jYWN0aWNlLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Rm9CLEFBR3dCLEFBS2MsQUFPZCxBQU9jLEFBUVIsV0FkRixDQVpILE1BMkJGLE9BMUJaLENBWXVCLEVBZWIsUUFDRSxVQUNFLENBaEJLLFdBaUJuQixPQWhCQSxnQkFWeUIsQUFjWixXQUNNLFlBZE4sS0FlVSxPQWRGLGNBZUYsS0FkbkIsWUFlQSIsImZpbGUiOiIvVXNlcnMveXV5YS9naXQvY2FjdGljZS5naXRodWIuaW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTm9TU1IgZnJvbSAncmVhY3Qtbm8tc3NyJ1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi4vY29tcG9uZW50cy9TY2VuZSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZydcblxuaW1wb3J0ICdib290c3RyYXAvc2Nzcy9ib290c3RyYXAuc2NzcydcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RzJ1xuaW1wb3J0IHsgUGFyYWxsYXhQcm92aWRlciwgUGFyYWxsYXh9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgQ2FjdGljZVdvcmtzIGZyb20gJy4vY2FjdGljZVdvcmtzLmpzb24nXG5pbXBvcnQgTG90dGllIGZyb20gJ3JlYWN0LWxvdHRpZSc7XG5pbXBvcnQgIHsgdXNlU3RhdGUgLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBJbXBsZW1lbnRzIG1haW4gcGFnZVxuICovXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbaXNBYm92ZSwgc2V0SXNBYm92ZV0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGxldCBsb3R0aWVSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgbG9vcDogZmFsc2UsXG4gICAgICBhdXRvcGxheTogZmFsc2UsIFxuICAgICAgYW5pbVR5cGU6ICdzdmcnLFxuICAgICAgYW5pbWF0aW9uRGF0YTogQ2FjdGljZVdvcmtzLFxuICAgICAgcmVuZGVyZXJTZXR0aW5nczoge30sXG4gICAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7IFxuICAgICAgbGV0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBsZXQgZHVyYXRpb24gPSB3aW5kb3cuaW5uZXJIZWlnaHQgXG4gICAgICBsZXQgZnJhbWUgPSAoc2Nyb2xsUG9zaXRpb24gLyBkdXJhdGlvbiApO1xuICAgICAgaWYoZnJhbWU+MC45KXtzZXRJc0Fib3ZlKGZhbHNlKX1cbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gIH0sIFtdKVxuXG4gIC8vIFdyYXAgV2ViR0wtcmVsYXRlZCBjb21wb25lbnRzIHdpdGggTm9TU1IgdG8gZGlzYWJsZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJvZHkgc3R5bGU9e3tvdmVyZmxvd1g6ICdoaWRkZW4nfX0+XG4gICAgICA8UGFyYWxsYXhQcm92aWRlcj5cbiAgICAgICAgPE5vU1NSIG9uU1NSPXs8TG9hZGluZy8+fT5cbiAgICAgICAgICA8U2NlbmUvPlxuICAgICAgICA8L05vU1NSPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ZlcmxhcHMnPlxuICAgICAgICAgIDxQYXJhbGxheFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNsYXNzXCJcbiAgICAgICAgICAgIG9mZnNldFlNYXg9ezMwfVxuICAgICAgICAgICAgb2Zmc2V0WU1pbj17LTMwfVxuICAgICAgICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICAgICAgICAgIHN0eWxlSW5uZXI9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ1RlcDonMTB2aCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OicxNXZ3J1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW90dG9fZGl2Jz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtb3R0b19lbic+XG4gICAgICAgICAgICAgICAgQ09ERSBJUyZuYnNwO1xuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6J3JlZCd9fT5cbiAgICAgICAgICAgICAgICAgIExPVkXjgIBcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtb3R0byc+XG4gICAgICAgICAgICAgICAg44Kz44O844OJ44GrXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjoncmVkJ319PlxuICAgICAgICAgICAgICAgICAg5oGLXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblJpZ2h0Oi01MH19PlxuICAgICAgICA8TG90dGllIFxuICAgICAgICAgIHJlZj17bG90dGllUmVmfVxuICAgICAgICAgIG9wdGlvbnM9e2RlZmF1bHRPcHRpb25zfVxuICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgIHdpZHRoPXs0MDB9XG4gICAgICAgICAgaXNQYXVzZWQ9e2lzQWJvdmV9XG4gICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF92aWV3Jz5cbiAgICAgICAgICA8UHJvamVjdHMvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnByb2plY3RfdmlldyB7XG4gICAgICAgICAgICB3aWR0aDoxMDB2dztcbiAgICAgICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW90dG9fZGl2IHtcbiAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gICAgICAgICAgICAtbXMtd3JpdGluZy1tb2RlOiB0Yi1ybDtcbiAgICAgICAgICAgIGhlaWdodDphdXRvO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW90dG9fZW4ge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDExdmg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJLb2tvcm9cIjtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjMuNXZoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tb3R0byB7XG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1Ljh2aDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIktva29yb1wiO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm92ZXJsYXBzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPC9QYXJhbGxheFByb3ZpZGVyPlxuICAgIDwvYm9keT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/yuya/git/cactice.github.io/pages/index.js */",
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
//# sourceMappingURL=index.js.f22789f37774acfc196b.hot-update.js.map