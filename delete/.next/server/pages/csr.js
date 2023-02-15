"use strict";
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
exports.id = "pages/csr";
exports.ids = ["pages/csr"];
exports.modules = {

/***/ "./pages/csr.jsx":
/*!***********************!*\
  !*** ./pages/csr.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/nextjs-auth0/client */ \"@auth0/nextjs-auth0/client\");\n/* harmony import */ var _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"D:\\\\Projects\\\\materialchecklist\\\\pages\\\\csr.jsx\";\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_1__.withPageAuthRequired)(function SSRPage() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"mb-5\",\n      \"data-testid\": \"csr\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n        \"data-testid\": \"csr-title\",\n        children: \"Client-side Rendered Page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        \"data-testid\": \"csr-text\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n          children: [\"You can protect a client-side rendered page by wrapping it with \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"code\", {\n            children: \"withPageAuthRequired\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 77\n          }, this), \". Only logged in users will be able to access it. If the user is logged out, they will be redirected to the login page instead.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n          children: [\"Use the \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"code\", {\n            children: \"useUser\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 21\n          }, this), \" hook to access the user profile from protected client-side rendered pages. The\", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"code\", {\n            children: \"useUser\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 13\n          }, this), \" hook relies on the \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"code\", {\n            children: \"UserProvider\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 53\n          }, this), \" Context Provider, so you need to wrap your custom \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n            href: \"https://nextjs.org/docs/advanced-features/custom-app\",\n            children: \"App Component\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 20\n          }, this), \" with it.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n          className: \"text-success\",\n          children: [\"You can also fetch the user profile by calling the \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"code\", {\n            children: \"/api/auth/me\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 64\n          }, this), \" API route.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jc3IuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsaUVBQWVDLGdGQUFvQixDQUFDLFNBQVNDLE9BQVQsR0FBbUI7RUFDckQsb0JBQ0U7SUFBQSx1QkFDRTtNQUFLLFNBQVMsRUFBQyxNQUFmO01BQXNCLGVBQVksS0FBbEM7TUFBQSx3QkFDRTtRQUFJLGVBQVksV0FBaEI7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFERixlQUVFO1FBQUssZUFBWSxVQUFqQjtRQUFBLHdCQUNFO1VBQUEsNEZBQ2tFO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBRGxFO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQURGLGVBTUU7VUFBQSxvQ0FDVTtZQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQURWLHFGQUM4RyxHQUQ5RyxlQUVFO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBRkYsdUNBRTBDO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBRjFDLHNFQUdTO1lBQUcsSUFBSSxFQUFDLHNEQUFSO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBSFQ7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBTkYsZUFXRTtVQUFHLFNBQVMsRUFBQyxjQUFiO1VBQUEsK0VBQ3FEO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBRHJEO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQVhGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGLGlCQURGO0FBdUJELENBeEJrQyxDQUFuQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvLi9wYWdlcy9jc3IuanN4P2M5YWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhQYWdlQXV0aFJlcXVpcmVkIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMC9jbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFnZUF1dGhSZXF1aXJlZChmdW5jdGlvbiBTU1JQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIiBkYXRhLXRlc3RpZD1cImNzclwiPlxuICAgICAgICA8aDEgZGF0YS10ZXN0aWQ9XCJjc3ItdGl0bGVcIj5DbGllbnQtc2lkZSBSZW5kZXJlZCBQYWdlPC9oMT5cbiAgICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cImNzci10ZXh0XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBZb3UgY2FuIHByb3RlY3QgYSBjbGllbnQtc2lkZSByZW5kZXJlZCBwYWdlIGJ5IHdyYXBwaW5nIGl0IHdpdGggPGNvZGU+d2l0aFBhZ2VBdXRoUmVxdWlyZWQ8L2NvZGU+LiBPbmx5XG4gICAgICAgICAgICBsb2dnZWQgaW4gdXNlcnMgd2lsbCBiZSBhYmxlIHRvIGFjY2VzcyBpdC4gSWYgdGhlIHVzZXIgaXMgbG9nZ2VkIG91dCwgdGhleSB3aWxsIGJlIHJlZGlyZWN0ZWQgdG8gdGhlIGxvZ2luXG4gICAgICAgICAgICBwYWdlIGluc3RlYWQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVXNlIHRoZSA8Y29kZT51c2VVc2VyPC9jb2RlPiBob29rIHRvIGFjY2VzcyB0aGUgdXNlciBwcm9maWxlIGZyb20gcHJvdGVjdGVkIGNsaWVudC1zaWRlIHJlbmRlcmVkIHBhZ2VzLiBUaGV7JyAnfVxuICAgICAgICAgICAgPGNvZGU+dXNlVXNlcjwvY29kZT4gaG9vayByZWxpZXMgb24gdGhlIDxjb2RlPlVzZXJQcm92aWRlcjwvY29kZT4gQ29udGV4dCBQcm92aWRlciwgc28geW91IG5lZWQgdG8gd3JhcCB5b3VyXG4gICAgICAgICAgICBjdXN0b20gPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FkdmFuY2VkLWZlYXR1cmVzL2N1c3RvbS1hcHBcIj5BcHAgQ29tcG9uZW50PC9hPiB3aXRoIGl0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc3VjY2Vzcyc+XG4gICAgICAgICAgICBZb3UgY2FuIGFsc28gZmV0Y2ggdGhlIHVzZXIgcHJvZmlsZSBieSBjYWxsaW5nIHRoZSA8Y29kZT4vYXBpL2F1dGgvbWU8L2NvZGU+IEFQSSByb3V0ZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIndpdGhQYWdlQXV0aFJlcXVpcmVkIiwiU1NSUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/csr.jsx\n");

/***/ }),

/***/ "@auth0/nextjs-auth0/client":
/*!*********************************************!*\
  !*** external "@auth0/nextjs-auth0/client" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/csr.jsx"));
module.exports = __webpack_exports__;

})();