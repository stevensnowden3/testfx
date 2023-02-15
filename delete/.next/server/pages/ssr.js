/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/ssr";
exports.ids = ["pages/ssr"];
exports.modules = {

/***/ "./components/Highlight.jsx":
/*!**********************************!*\
  !*** ./components/Highlight.jsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/core */ \"highlight.js/lib/core\");\n/* harmony import */ var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/json */ \"highlight.js/lib/languages/json\");\n/* harmony import */ var highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/styles/monokai-sublime.css */ \"./node_modules/highlight.js/styles/monokai-sublime.css\");\n/* harmony import */ var highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__, highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_2__]);\n([highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__, highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"D:\\\\Projects\\\\materialchecklist\\\\components\\\\Highlight.jsx\";\n\n\n\n\n\n\nconst Highlight = ({\n  children,\n  testId\n}) => {\n  const {\n    0: isLoaded,\n    1: setIsLoaded\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const codeNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  const language = 'json';\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    try {\n      highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__[\"default\"].registerLanguage(language, highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n      setIsLoaded(true);\n    } catch (error) {\n      console.error(error);\n      throw Error(`Cannot register the language ${language}`);\n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    codeNode && codeNode.current && highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__[\"default\"].highlightBlock(codeNode.current);\n  });\n  if (!isLoaded) return null;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"pre\", {\n    className: \"rounded\",\n    \"data-testid\": testId,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"code\", {\n      ref: codeNode,\n      className: language,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Highlight);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hpZ2hsaWdodC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQSxNQUFNTSxTQUFTLEdBQUcsQ0FBQztFQUFFQyxRQUFGO0VBQVlDO0FBQVosQ0FBRCxLQUEwQjtFQUMxQyxNQUFNO0lBQUEsR0FBQ0MsUUFBRDtJQUFBLEdBQVdDO0VBQVgsSUFBMEJSLCtDQUFRLENBQUMsS0FBRCxDQUF4QztFQUNBLE1BQU1TLFFBQVEsR0FBR1IsNkNBQU0sRUFBdkI7RUFDQSxNQUFNUyxRQUFRLEdBQUcsTUFBakI7RUFFQVgsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSTtNQUNGRyw4RUFBQSxDQUFzQlEsUUFBdEIsRUFBZ0NQLHVFQUFoQztNQUNBSyxXQUFXLENBQUMsSUFBRCxDQUFYO0lBQ0QsQ0FIRCxDQUdFLE9BQU9JLEtBQVAsRUFBYztNQUNkQyxPQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtNQUNBLE1BQU1FLEtBQUssQ0FBRSxnQ0FBK0JKLFFBQVMsRUFBMUMsQ0FBWDtJQUNEO0VBQ0YsQ0FSUSxFQVFOLEVBUk0sQ0FBVDtFQVVBWCxnREFBUyxDQUFDLE1BQU07SUFDZFUsUUFBUSxJQUFJQSxRQUFRLENBQUNNLE9BQXJCLElBQWdDYiw0RUFBQSxDQUFvQk8sUUFBUSxDQUFDTSxPQUE3QixDQUFoQztFQUNELENBRlEsQ0FBVDtFQUlBLElBQUksQ0FBQ1IsUUFBTCxFQUFlLE9BQU8sSUFBUDtFQUVmLG9CQUNFO0lBQUssU0FBUyxFQUFDLFNBQWY7SUFBeUIsZUFBYUQsTUFBdEM7SUFBQSx1QkFDRTtNQUFNLEdBQUcsRUFBRUcsUUFBWDtNQUFxQixTQUFTLEVBQUVDLFFBQWhDO01BQUEsVUFDR0w7SUFESDtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURGO0FBT0QsQ0E1QkQ7O0FBOEJBLGlFQUFlRCxTQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlLy4vY29tcG9uZW50cy9IaWdobGlnaHQuanN4P2E3ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvY29yZSc7XG5pbXBvcnQganNvbiBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qc29uJztcblxuaW1wb3J0ICdoaWdobGlnaHQuanMvc3R5bGVzL21vbm9rYWktc3VibGltZS5jc3MnO1xuXG5jb25zdCBIaWdobGlnaHQgPSAoeyBjaGlsZHJlbiwgdGVzdElkIH0pID0+IHtcbiAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNvZGVOb2RlID0gdXNlUmVmKCk7XG4gIGNvbnN0IGxhbmd1YWdlID0gJ2pzb24nO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGhsanMucmVnaXN0ZXJMYW5ndWFnZShsYW5ndWFnZSwganNvbik7XG4gICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB0aHJvdyBFcnJvcihgQ2Fubm90IHJlZ2lzdGVyIHRoZSBsYW5ndWFnZSAke2xhbmd1YWdlfWApO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29kZU5vZGUgJiYgY29kZU5vZGUuY3VycmVudCAmJiBobGpzLmhpZ2hsaWdodEJsb2NrKGNvZGVOb2RlLmN1cnJlbnQpO1xuICB9KTtcblxuICBpZiAoIWlzTG9hZGVkKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxwcmUgY2xhc3NOYW1lPVwicm91bmRlZFwiIGRhdGEtdGVzdGlkPXt0ZXN0SWR9PlxuICAgICAgPGNvZGUgcmVmPXtjb2RlTm9kZX0gY2xhc3NOYW1lPXtsYW5ndWFnZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvY29kZT5cbiAgICA8L3ByZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpZ2hsaWdodDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiaGxqcyIsImpzb24iLCJIaWdobGlnaHQiLCJjaGlsZHJlbiIsInRlc3RJZCIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJjb2RlTm9kZSIsImxhbmd1YWdlIiwicmVnaXN0ZXJMYW5ndWFnZSIsImVycm9yIiwiY29uc29sZSIsIkVycm9yIiwiY3VycmVudCIsImhpZ2hsaWdodEJsb2NrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Highlight.jsx\n");

/***/ }),

/***/ "./pages/ssr.jsx":
/*!***********************!*\
  !*** ./pages/ssr.jsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SSRPage),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Highlight */ \"./components/Highlight.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Highlight__WEBPACK_IMPORTED_MODULE_2__]);\n_components_Highlight__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"D:\\\\Projects\\\\materialchecklist\\\\pages\\\\ssr.jsx\";\n\n\n\n\n\nfunction SSRPage({\n  user\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"mb-5\",\n      \"data-testid\": \"ssr\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n        \"data-testid\": \"ssr-title\",\n        children: \"Server-side Rendered Page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        \"data-testid\": \"ssr-text\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n          children: [\"You can protect a server-side rendered page by wrapping the \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"code\", {\n            children: \"getServerSideProps\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 73\n          }, this), \" function with\", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"code\", {\n            children: \"withPageAuthRequired\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 13\n          }, this), \". Only logged in users will be able to access it. If the user is logged out, they will be redirected to the login page instead.\", ' ']\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n          children: [\"Protected server-side rendered pages automatically receive a \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"code\", {\n            children: \"user\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 74\n          }, this), \" prop containing the user profile.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"result-block-container\",\n      \"data-testid\": \"ssr-json\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"result-block\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h6\", {\n          className: \"muted\",\n          children: \"User prop\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Highlight__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          children: JSON.stringify(user, null, 2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n          children: user.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nconst getServerSideProps = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.withPageAuthRequired)();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zc3IuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7OztBQUVlLFNBQVNJLE9BQVQsQ0FBaUI7RUFBRUM7QUFBRixDQUFqQixFQUEyQjtFQUV4QyxvQkFDRTtJQUFBLHdCQUNFO01BQUssU0FBUyxFQUFDLE1BQWY7TUFBc0IsZUFBWSxLQUFsQztNQUFBLHdCQUNFO1FBQUksZUFBWSxXQUFoQjtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBRUU7UUFBSyxlQUFZLFVBQWpCO1FBQUEsd0JBQ0U7VUFBQSx3RkFDOEQ7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsUUFEOUQsb0JBQzRHLEdBRDVHLGVBRUU7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsUUFGRixxSUFHMEQsR0FIMUQ7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBREYsZUFNRTtVQUFBLHlGQUMrRDtZQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQUQvRDtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFORjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFGRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQWVFO01BQUssU0FBUyxFQUFDLHdCQUFmO01BQXdDLGVBQVksVUFBcEQ7TUFBQSx1QkFDRTtRQUFLLFNBQVMsRUFBQyxjQUFmO1FBQUEsd0JBQ0U7VUFBSSxTQUFTLEVBQUMsT0FBZDtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQURGLGVBRUUsOERBQUMsNkRBQUQ7VUFBQSxVQUFZQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQjtRQUFaO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFGRixlQUdFO1VBQUEsVUFBS0EsSUFBSSxDQUFDRztRQUFWO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFIRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBZkY7RUFBQSxnQkFERjtBQTRCRDtBQUVNLE1BQU1DLGtCQUFrQixHQUFHUCx5RUFBb0IsRUFBL0MsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvLi9wYWdlcy9zc3IuanN4PzUzZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFBhZ2VBdXRoUmVxdWlyZWQgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcblxuXG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJy4uL2NvbXBvbmVudHMvSGlnaGxpZ2h0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU1NSUGFnZSh7IHVzZXIgfSkge1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCIgZGF0YS10ZXN0aWQ9XCJzc3JcIj5cbiAgICAgICAgPGgxIGRhdGEtdGVzdGlkPVwic3NyLXRpdGxlXCI+U2VydmVyLXNpZGUgUmVuZGVyZWQgUGFnZTwvaDE+XG4gICAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJzc3ItdGV4dFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgWW91IGNhbiBwcm90ZWN0IGEgc2VydmVyLXNpZGUgcmVuZGVyZWQgcGFnZSBieSB3cmFwcGluZyB0aGUgPGNvZGU+Z2V0U2VydmVyU2lkZVByb3BzPC9jb2RlPiBmdW5jdGlvbiB3aXRoeycgJ31cbiAgICAgICAgICAgIDxjb2RlPndpdGhQYWdlQXV0aFJlcXVpcmVkPC9jb2RlPi4gT25seSBsb2dnZWQgaW4gdXNlcnMgd2lsbCBiZSBhYmxlIHRvIGFjY2VzcyBpdC4gSWYgdGhlIHVzZXIgaXMgbG9nZ2VkXG4gICAgICAgICAgICBvdXQsIHRoZXkgd2lsbCBiZSByZWRpcmVjdGVkIHRvIHRoZSBsb2dpbiBwYWdlIGluc3RlYWQueycgJ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBQcm90ZWN0ZWQgc2VydmVyLXNpZGUgcmVuZGVyZWQgcGFnZXMgYXV0b21hdGljYWxseSByZWNlaXZlIGEgPGNvZGU+dXNlcjwvY29kZT4gcHJvcCBjb250YWluaW5nIHRoZSB1c2VyXG4gICAgICAgICAgICBwcm9maWxlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LWJsb2NrLWNvbnRhaW5lclwiIGRhdGEtdGVzdGlkPVwic3NyLWpzb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtYmxvY2tcIj5cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXV0ZWRcIj5Vc2VyIHByb3A8L2g2PlxuICAgICAgICAgIDxIaWdobGlnaHQ+e0pTT04uc3RyaW5naWZ5KHVzZXIsIG51bGwsIDIpfTwvSGlnaGxpZ2h0PlxuICAgICAgICAgIDxoMT57dXNlci5uYW1lfTwvaDE+XG4gICAgICAgICBcbiAgICAgICAgICB7LyogPHA+WW91ciByb2xlczoge3Rva2VufTwvcD4gKi99XG4gICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17Z2V0VG9rZW59PkdldCBUb2tlbjwvYnV0dG9uPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhQYWdlQXV0aFJlcXVpcmVkKCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ3aXRoUGFnZUF1dGhSZXF1aXJlZCIsIkhpZ2hsaWdodCIsIlNTUlBhZ2UiLCJ1c2VyIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ssr.jsx\n");

/***/ }),

/***/ "./node_modules/highlight.js/styles/monokai-sublime.css":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/styles/monokai-sublime.css ***!
  \**************************************************************/
/***/ (() => {



/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "highlight.js/lib/core":
/*!****************************************!*\
  !*** external "highlight.js/lib/core" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("highlight.js/lib/core");;

/***/ }),

/***/ "highlight.js/lib/languages/json":
/*!**************************************************!*\
  !*** external "highlight.js/lib/languages/json" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("highlight.js/lib/languages/json");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/ssr.jsx"));
module.exports = __webpack_exports__;

})();