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
exports.id = "pages/api/getData";
exports.ids = ["pages/api/getData"];
exports.modules = {

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./models/db.js":
/*!**********************!*\
  !*** ./models/db.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectionPromise = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n  host: 'localhost',\n  user: 'root',\n  password: '',\n  database: 'warehouse'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectionPromise);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxpQkFBaUIsR0FBR0Qsc0VBQUEsQ0FBdUI7RUFDL0NHLElBQUksRUFBRSxXQUR5QztFQUUvQ0MsSUFBSSxFQUFFLE1BRnlDO0VBRy9DQyxRQUFRLEVBQUUsRUFIcUM7RUFJL0NDLFFBQVEsRUFBRTtBQUpxQyxDQUF2QixDQUExQjtBQU9BLGlFQUFlTCxpQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvLi9tb2RlbHMvZGIuanM/NmUzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdGlvblByb21pc2UgPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICBob3N0OiAnbG9jYWxob3N0JyxcclxuICB1c2VyOiAncm9vdCcsXHJcbiAgcGFzc3dvcmQ6ICcnLFxyXG4gIGRhdGFiYXNlOiAnd2FyZWhvdXNlJ1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Rpb25Qcm9taXNlO1xyXG4iXSwibmFtZXMiOlsibXlzcWwiLCJjb25uZWN0aW9uUHJvbWlzZSIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/getData.js":
/*!******************************!*\
  !*** ./pages/api/getData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/db */ \"(api)/./models/db.js\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.withApiAuthRequired)(async (req, res) => {\n  const session = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.getSession)(req, res);\n\n  try {\n    const connection = await _models_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    await connection.connect(); // Select all from the database\n\n    if (req.query.approved === 'yes') {\n      console.log(req.query.approved);\n      const [rows] = await connection.execute('SELECT id,material_name, supplier_name,method_of_inspection,inspection_technique,location,contact_number, total_inspected, total_pass, total_failure, delivery_note,sample_inspected, inspection_date,created_by, status FROM checklisttest WHERE status=0'); // Return the rows as a JSON to the client\n\n      res.status(200).json({\n        success: true,\n        data: rows\n      });\n    } else if (req.query.approved === 'no') {\n      const [rows] = await connection.execute('SELECT id,material_name, supplier_name,method_of_inspection,inspection_technique,location,contact_number, total_inspected, total_pass, total_failure, delivery_note,sample_inspected,status, inspection_date,created_by FROM checklisttest WHERE status=-1'); // Return the rows as a JSON to the client\n\n      res.status(200).json({\n        success: true,\n        data: rows\n      });\n    } else {\n      const [rows] = await connection.execute('SELECT id,material_name, supplier_name,method_of_inspection,inspection_technique,location,contact_number, total_inspected, total_pass, total_failure, delivery_note,sample_inspected, inspection_date,created_by, status FROM checklisttest '); // Return the rows as a JSON to the client\n\n      res.status(200).json({\n        success: true,\n        data: rows\n      });\n    }\n  } catch (error) {\n    res.status(500).json({\n      success: false,\n      error\n    });\n    console.log(error);\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0RGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBLGlFQUFlQyx3RUFBbUIsQ0FBQyxPQUFPRSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7RUFDckQsTUFBTUMsT0FBTyxHQUFHSCwrREFBVSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sQ0FBMUI7O0VBQ0EsSUFBSTtJQUNGLE1BQU1FLFVBQVUsR0FBRyxNQUFNTixrREFBekI7SUFDQSxNQUFNTSxVQUFVLENBQUNDLE9BQVgsRUFBTixDQUZFLENBSUY7O0lBRUEsSUFBSUosR0FBRyxDQUFDSyxLQUFKLENBQVVDLFFBQVYsS0FBdUIsS0FBM0IsRUFBa0M7TUFDaENDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixHQUFHLENBQUNLLEtBQUosQ0FBVUMsUUFBdEI7TUFDQSxNQUFNLENBQUNHLElBQUQsSUFBUyxNQUFNTixVQUFVLENBQUNPLE9BQVgsQ0FDbkIsNFBBRG1CLENBQXJCLENBRmdDLENBTWhDOztNQUNBVCxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtRQUFFQyxPQUFPLEVBQUUsSUFBWDtRQUFpQkMsSUFBSSxFQUFFTDtNQUF2QixDQUFyQjtJQUNELENBUkQsTUFRTyxJQUFJVCxHQUFHLENBQUNLLEtBQUosQ0FBVUMsUUFBVixLQUF1QixJQUEzQixFQUFpQztNQUN0QyxNQUFNLENBQUNHLElBQUQsSUFBUyxNQUFNTixVQUFVLENBQUNPLE9BQVgsQ0FDbkIsNFBBRG1CLENBQXJCLENBRHNDLENBS3RDOztNQUNBVCxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtRQUFFQyxPQUFPLEVBQUUsSUFBWDtRQUFpQkMsSUFBSSxFQUFFTDtNQUF2QixDQUFyQjtJQUNELENBUE0sTUFPQTtNQUNMLE1BQU0sQ0FBQ0EsSUFBRCxJQUFTLE1BQU1OLFVBQVUsQ0FBQ08sT0FBWCxDQUNuQiw4T0FEbUIsQ0FBckIsQ0FESyxDQUtMOztNQUNBVCxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtRQUFFQyxPQUFPLEVBQUUsSUFBWDtRQUFpQkMsSUFBSSxFQUFFTDtNQUF2QixDQUFyQjtJQUNEO0VBQ0YsQ0E3QkQsQ0E2QkUsT0FBT00sS0FBUCxFQUFjO0lBQ2RkLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO01BQUVDLE9BQU8sRUFBRSxLQUFYO01BQWtCRTtJQUFsQixDQUFyQjtJQUNBUixPQUFPLENBQUNDLEdBQVIsQ0FBWU8sS0FBWjtFQUNEO0FBQ0YsQ0FuQ2lDLENBQWxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aDAtbmV4dGpzLXNhbXBsZS8uL3BhZ2VzL2FwaS9nZXREYXRhLmpzPzE0MzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3Rpb25Qcm9taXNlIGZyb20gJy4uLy4uL21vZGVscy9kYic7XHJcbmltcG9ydCB7IHdpdGhBcGlBdXRoUmVxdWlyZWQsIGdldFNlc3Npb24gfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcGlBdXRoUmVxdWlyZWQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGdldFNlc3Npb24ocmVxLCByZXMpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgY29ubmVjdGlvblByb21pc2U7XHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmNvbm5lY3QoKTtcclxuXHJcbiAgICAvLyBTZWxlY3QgYWxsIGZyb20gdGhlIGRhdGFiYXNlXHJcblxyXG4gICAgaWYgKHJlcS5xdWVyeS5hcHByb3ZlZCA9PT0gJ3llcycpIHtcclxuICAgICAgY29uc29sZS5sb2cocmVxLnF1ZXJ5LmFwcHJvdmVkKTtcclxuICAgICAgY29uc3QgW3Jvd3NdID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxyXG4gICAgICAgICdTRUxFQ1QgaWQsbWF0ZXJpYWxfbmFtZSwgc3VwcGxpZXJfbmFtZSxtZXRob2Rfb2ZfaW5zcGVjdGlvbixpbnNwZWN0aW9uX3RlY2huaXF1ZSxsb2NhdGlvbixjb250YWN0X251bWJlciwgdG90YWxfaW5zcGVjdGVkLCB0b3RhbF9wYXNzLCB0b3RhbF9mYWlsdXJlLCBkZWxpdmVyeV9ub3RlLHNhbXBsZV9pbnNwZWN0ZWQsIGluc3BlY3Rpb25fZGF0ZSxjcmVhdGVkX2J5LCBzdGF0dXMgRlJPTSBjaGVja2xpc3R0ZXN0IFdIRVJFIHN0YXR1cz0wJ1xyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gUmV0dXJuIHRoZSByb3dzIGFzIGEgSlNPTiB0byB0aGUgY2xpZW50XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcm93cyB9KTtcclxuICAgIH0gZWxzZSBpZiAocmVxLnF1ZXJ5LmFwcHJvdmVkID09PSAnbm8nKSB7XHJcbiAgICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShcclxuICAgICAgICAnU0VMRUNUIGlkLG1hdGVyaWFsX25hbWUsIHN1cHBsaWVyX25hbWUsbWV0aG9kX29mX2luc3BlY3Rpb24saW5zcGVjdGlvbl90ZWNobmlxdWUsbG9jYXRpb24sY29udGFjdF9udW1iZXIsIHRvdGFsX2luc3BlY3RlZCwgdG90YWxfcGFzcywgdG90YWxfZmFpbHVyZSwgZGVsaXZlcnlfbm90ZSxzYW1wbGVfaW5zcGVjdGVkLHN0YXR1cywgaW5zcGVjdGlvbl9kYXRlLGNyZWF0ZWRfYnkgRlJPTSBjaGVja2xpc3R0ZXN0IFdIRVJFIHN0YXR1cz0tMSdcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIFJldHVybiB0aGUgcm93cyBhcyBhIEpTT04gdG8gdGhlIGNsaWVudFxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJvd3MgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBbcm93c10gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXHJcbiAgICAgICAgJ1NFTEVDVCBpZCxtYXRlcmlhbF9uYW1lLCBzdXBwbGllcl9uYW1lLG1ldGhvZF9vZl9pbnNwZWN0aW9uLGluc3BlY3Rpb25fdGVjaG5pcXVlLGxvY2F0aW9uLGNvbnRhY3RfbnVtYmVyLCB0b3RhbF9pbnNwZWN0ZWQsIHRvdGFsX3Bhc3MsIHRvdGFsX2ZhaWx1cmUsIGRlbGl2ZXJ5X25vdGUsc2FtcGxlX2luc3BlY3RlZCwgaW5zcGVjdGlvbl9kYXRlLGNyZWF0ZWRfYnksIHN0YXR1cyBGUk9NIGNoZWNrbGlzdHRlc3QgJ1xyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gUmV0dXJuIHRoZSByb3dzIGFzIGEgSlNPTiB0byB0aGUgY2xpZW50XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcm93cyB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3IgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbImNvbm5lY3Rpb25Qcm9taXNlIiwid2l0aEFwaUF1dGhSZXF1aXJlZCIsImdldFNlc3Npb24iLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJxdWVyeSIsImFwcHJvdmVkIiwiY29uc29sZSIsImxvZyIsInJvd3MiLCJleGVjdXRlIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getData.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getData.js"));
module.exports = __webpack_exports__;

})();