"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/app/page",{

/***/ "(app-client)/./src/components/Sections/Credentials/UploadCredentails.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/Sections/Credentials/UploadCredentails.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/Utils */ \"(app-client)/./src/utils/Utils.ts\");\n/* harmony import */ var _web3Connection_Web3ConnectionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/web3Connection/Web3ConnectionContext */ \"(app-client)/./src/web3Connection/Web3ConnectionContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction UploadCredentails() {\n    _s();\n    const { address } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_web3Connection_Web3ConnectionContext__WEBPACK_IMPORTED_MODULE_2__.Web3ConnectionContext);\n    async function uploadCredentails(e) {\n        e.preventDefault();\n        if (!address) return;\n        const _encryptionKey = await (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_1__.getEncryptionPublicKey)(address);\n        const getEncryptedMsg = await getEncryptedMessage(e.target.pass.value, _encryptionKey);\n        console.log(getEncryptedMsg);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: uploadCredentails,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"pass\",\n                    name: \"pass\"\n                }, void 0, false, {\n                    fileName: \"/home/stoic/Desktop/datavault-project/datavault-frontend/src/components/Sections/Credentials/UploadCredentails.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"store crdentials\"\n                }, void 0, false, {\n                    fileName: \"/home/stoic/Desktop/datavault-project/datavault-frontend/src/components/Sections/Credentials/UploadCredentails.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/stoic/Desktop/datavault-project/datavault-frontend/src/components/Sections/Credentials/UploadCredentails.tsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/stoic/Desktop/datavault-project/datavault-frontend/src/components/Sections/Credentials/UploadCredentails.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(UploadCredentails, \"LTn/PKy8sRF6X8pcQmWEbtq5UVs=\");\n_c = UploadCredentails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadCredentails);\nvar _c;\n$RefreshReg$(_c, \"UploadCredentails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQ3JlZGVudGlhbHMvVXBsb2FkQ3JlZGVudGFpbHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXVEO0FBQ3VCO0FBQ3JDO0FBR3pDLFNBQVNJOztJQUVMLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdGLGlEQUFVQSxDQUFDRix3RkFBcUJBO0lBRXBELGVBQWVLLGtCQUFrQkMsQ0FBcUM7UUFDbEVBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSSxDQUFDSCxTQUFTO1FBQ2QsTUFBTUksaUJBQWlCLE1BQU1ULG9FQUFzQkEsQ0FBQ0s7UUFFcEQsTUFBTUssa0JBQWtCLE1BQU1DLG9CQUFvQkosRUFBRUssTUFBTSxDQUFDQyxJQUFJLENBQUNDLEtBQUssRUFBQ0w7UUFFdEVNLFFBQVFDLEdBQUcsQ0FBQ047SUFFaEI7SUFDQSxxQkFDSSw4REFBQ087a0JBQ0csNEVBQUNDO1lBQUtDLFVBQVViOzs4QkFDWiw4REFBQ2M7b0JBQU1DLE1BQUs7b0JBQU9DLElBQUc7b0JBQU9DLE1BQUs7Ozs7Ozs4QkFDbEMsOERBQUNDO29CQUFPSCxNQUFLOzhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQU10QztHQXhCU2pCO0tBQUFBO0FBMEJULCtEQUFlQSxpQkFBaUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQ3JlZGVudGlhbHMvVXBsb2FkQ3JlZGVudGFpbHMudHN4Pzc0ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IGdldEVuY3J5cHRpb25QdWJsaWNLZXkgfSBmcm9tICdAL3V0aWxzL1V0aWxzJztcclxuaW1wb3J0IHsgV2ViM0Nvbm5lY3Rpb25Db250ZXh0IH0gZnJvbSAnQC93ZWIzQ29ubmVjdGlvbi9XZWIzQ29ubmVjdGlvbkNvbnRleHQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuZnVuY3Rpb24gVXBsb2FkQ3JlZGVudGFpbHMoKSB7XHJcblxyXG4gICAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VDb250ZXh0KFdlYjNDb25uZWN0aW9uQ29udGV4dCk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gdXBsb2FkQ3JlZGVudGFpbHMoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pil7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICghYWRkcmVzcykgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IF9lbmNyeXB0aW9uS2V5ID0gYXdhaXQgZ2V0RW5jcnlwdGlvblB1YmxpY0tleShhZGRyZXNzKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGdldEVuY3J5cHRlZE1zZyA9IGF3YWl0IGdldEVuY3J5cHRlZE1lc3NhZ2UoZS50YXJnZXQucGFzcy52YWx1ZSxfZW5jcnlwdGlvbktleSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGdldEVuY3J5cHRlZE1zZyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt1cGxvYWRDcmVkZW50YWlsc30+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBhc3NcIiBuYW1lPVwicGFzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgY3JkZW50aWFsc1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkQ3JlZGVudGFpbHMiXSwibmFtZXMiOlsiZ2V0RW5jcnlwdGlvblB1YmxpY0tleSIsIldlYjNDb25uZWN0aW9uQ29udGV4dCIsIlJlYWN0IiwidXNlQ29udGV4dCIsIlVwbG9hZENyZWRlbnRhaWxzIiwiYWRkcmVzcyIsInVwbG9hZENyZWRlbnRhaWxzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiX2VuY3J5cHRpb25LZXkiLCJnZXRFbmNyeXB0ZWRNc2ciLCJnZXRFbmNyeXB0ZWRNZXNzYWdlIiwidGFyZ2V0IiwicGFzcyIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Sections/Credentials/UploadCredentails.tsx\n"));

/***/ })

});