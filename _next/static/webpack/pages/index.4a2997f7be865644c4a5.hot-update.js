webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_hakeemorewole_projects_1aa_multisend_harmony_oneclick_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_hakeemorewole_projects_1aa_multisend_harmony_oneclick_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hakeemorewole_projects_1aa_multisend_harmony_oneclick_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_hakeemorewole_projects_1aa_multisend_harmony_oneclick_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _compiled_OneClick_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../compiled/OneClick.json */ \"./compiled/OneClick.json\");\nvar _compiled_OneClick_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../compiled/OneClick.json */ \"./compiled/OneClick.json\", 1);\n\n\n\n\nvar _jsxFileName = \"/Users/hakeemorewole/projects/1aa/multisend/harmony/oneclick/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar GSN = __webpack_require__(/*! @opengsn/gsn */ \"./node_modules/@opengsn/gsn/dist/index.js\"); // const paymasterAddress = '0xfeF1fFc4aa52f50AbFf04316253e8e127c08b39F' // deployed paymaster address\n// const oneClickContractAddress = \"0x716FFcB70043A48FBc049D51044d298D465612B9\"\n// const nodeURL = \"https://api.s0.b.hmny.io\"\n\n\nvar paymasterAddress = '0x944Eef4A4D35502363CBEBc904f145B9C58909e2'; // deployed paymaster address\n\nvar oneClickContractAddress = \"0x04CCe397176F2Dd4075a12Fe158f0135868aaFFb\";\nvar nodeURL = \"https://api.s0.t.hmny.io\";\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      gsnProvider = _useState[0],\n      setGsnProvider = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      oneClickContract = _useState2[0],\n      setOneClickContract = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      account = _useState3[0],\n      setAccount = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      clicks = _useState4[0],\n      setClicks = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      reload = _useState5[0],\n      setReload = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      loadingEv = _useState6[0],\n      setLoadingEv = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    Object(_Users_hakeemorewole_projects_1aa_multisend_harmony_oneclick_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_hakeemorewole_projects_1aa_multisend_harmony_oneclick_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var accounts, __gsnProvider, _gsnProvider;\n\n      return _Users_hakeemorewole_projects_1aa_multisend_harmony_oneclick_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!window.ethereum) {\n                _context.next = 10;\n                break;\n              }\n\n              _context.next = 3;\n              return window.ethereum.request({\n                method: 'eth_requestAccounts'\n              });\n\n            case 3:\n              accounts = _context.sent;\n              _context.next = 6;\n              return GSN.RelayProvider.newProvider({\n                provider: window.ethereum,\n                config: {\n                  paymasterAddress: paymasterAddress // preferredRelays: ['https://hmny.prjct.dev']\n\n                }\n              }).init();\n\n            case 6:\n              __gsnProvider = _context.sent;\n              _gsnProvider = new ethers__WEBPACK_IMPORTED_MODULE_4__[\"ethers\"].providers.Web3Provider(__gsnProvider);\n              setGsnProvider(_gsnProvider);\n              setAccount(accounts[0]);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (window.ethereum) {\n      window.ethereum.on('accountsChanged', function (accounts) {\n        if (accounts.length === 0) {//\n        } else {\n          if (accounts[0] !== account) {\n            setAccount(accounts[0]);\n          }\n        }\n      });\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var provider = new ethers__WEBPACK_IMPORTED_MODULE_4__[\"ethers\"].providers.JsonRpcProvider(nodeURL);\n\n    Object(_Users_hakeemorewole_projects_1aa_multisend_harmony_oneclick_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_hakeemorewole_projects_1aa_multisend_harmony_oneclick_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n      var OneClickContract, filter, latestBlock, _clicks, _clicks2;\n\n      return _Users_hakeemorewole_projects_1aa_multisend_harmony_oneclick_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              setLoadingEv(true);\n              OneClickContract = new ethers__WEBPACK_IMPORTED_MODULE_4__[\"Contract\"](oneClickContractAddress, _compiled_OneClick_json__WEBPACK_IMPORTED_MODULE_5__.abi);\n              setOneClickContract(OneClickContract);\n              filter = OneClickContract.filters.Click(null);\n              _context2.next = 7;\n              return provider.getBlockNumber();\n\n            case 7:\n              latestBlock = _context2.sent;\n              _context2.next = 10;\n              return OneClickContract.connect(provider).queryFilter(filter, latestBlock - 200000);\n\n            case 10:\n              _clicks = _context2.sent;\n              _clicks2 = _clicks.map(function (click) {\n                return {\n                  clicker: click.args[0].toString(),\n                  clickIndex: click.args[1].toString(),\n                  blockNumber: click.blockNumber,\n                  txHash: click.transactionHash\n                };\n              });\n              setClicks(_clicks2.reverse());\n              _context2.next = 17;\n              break;\n\n            case 15:\n              _context2.prev = 15;\n              _context2.t0 = _context2[\"catch\"](0);\n\n            case 17:\n              _context2.prev = 17;\n              setLoadingEv(false);\n              return _context2.finish(17);\n\n            case 20:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 15, 17, 20]]);\n    }))();\n  }, [reload]);\n\n  var handleClick = /*#__PURE__*/function () {\n    var _ref3 = Object(_Users_hakeemorewole_projects_1aa_multisend_harmony_oneclick_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_hakeemorewole_projects_1aa_multisend_harmony_oneclick_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {\n      var _reload, gsnSigner, tx;\n\n      return _Users_hakeemorewole_projects_1aa_multisend_harmony_oneclick_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              if (!gsnProvider) {\n                _context3.next = 18;\n                break;\n              }\n\n              _reload = reload;\n              _context3.prev = 2;\n              _context3.next = 5;\n              return gsnProvider.getSigner(account);\n\n            case 5:\n              gsnSigner = _context3.sent;\n              _context3.next = 8;\n              return oneClickContract.connect(gsnSigner).click();\n\n            case 8:\n              tx = _context3.sent;\n              console.log(tx.hash);\n              _context3.next = 15;\n              break;\n\n            case 12:\n              _context3.prev = 12;\n              _context3.t0 = _context3[\"catch\"](2);\n\n              if (_context3.t0.data) {\n                alert(_context3.t0.data.message);\n              } else {\n                alert(_context3.t0.message);\n              } // _reload--\n\n\n            case 15:\n              _context3.prev = 15;\n              setReload(_reload + 1);\n              return _context3.finish(15);\n\n            case 18:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[2, 12, 15, 18]]);\n    }));\n\n    return function handleClick() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"w-full h-screen md:flex flex-wrap items-center justify-center\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"bg-blue-300 w-full md:w-500 h-full md:h-650 py-8 px-6 rounded-lg\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full text-gray-200\",\n        children: [\"Your address: \", formatAddress(account)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full text-center mt-16\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \" w-64 bg-blue-600 text-gray-200 h-16 rounded-md outline-none focus:outline-none border-none\",\n          onClick: handleClick,\n          children: \"Add Click\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full mt-16 h-350 overflow-y-scroll \".concat(loadingEv && \"flex justify-center items-center\"),\n        children: loadingEv && clicks.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-full text-5xl text-center text-white\",\n          children: \"Loading ...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 31\n        }, this) : clicks.map(function (click) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \" py-2 leading-4\".concat(click.clicker.toLowerCase() === account.toLowerCase() && 'text-gray-700'),\n            children: [\"Clicker:\", formatAddress(click.clicker), \", Click Index: \", click.clickIndex, \", Click block number: \", click.blockNumber]\n          }, click.txHash, true, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 40\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Home, \"vl8g72cZx+j8+OthKVZKD94aSGc=\");\n\n_c = Home;\n\nvar formatAddress = function formatAddress(address) {\n  return \"\".concat(address.slice(0, 6), \"...\").concat(address.slice(address.length - 6, address.length));\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiR1NOIiwicmVxdWlyZSIsInBheW1hc3RlckFkZHJlc3MiLCJvbmVDbGlja0NvbnRyYWN0QWRkcmVzcyIsIm5vZGVVUkwiLCJIb21lIiwidXNlU3RhdGUiLCJnc25Qcm92aWRlciIsInNldEdzblByb3ZpZGVyIiwib25lQ2xpY2tDb250cmFjdCIsInNldE9uZUNsaWNrQ29udHJhY3QiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsImNsaWNrcyIsInNldENsaWNrcyIsInJlbG9hZCIsInNldFJlbG9hZCIsImxvYWRpbmdFdiIsInNldExvYWRpbmdFdiIsInVzZUVmZmVjdCIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImFjY291bnRzIiwiUmVsYXlQcm92aWRlciIsIm5ld1Byb3ZpZGVyIiwicHJvdmlkZXIiLCJjb25maWciLCJpbml0IiwiX19nc25Qcm92aWRlciIsIl9nc25Qcm92aWRlciIsImV0aGVycyIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsIm9uIiwibGVuZ3RoIiwiSnNvblJwY1Byb3ZpZGVyIiwiT25lQ2xpY2tDb250cmFjdCIsIkNvbnRyYWN0Iiwib25lQ2xpY2tDb21waWxlZCIsImFiaSIsImZpbHRlciIsImZpbHRlcnMiLCJDbGljayIsImdldEJsb2NrTnVtYmVyIiwibGF0ZXN0QmxvY2siLCJjb25uZWN0IiwicXVlcnlGaWx0ZXIiLCJfY2xpY2tzIiwibWFwIiwiY2xpY2siLCJjbGlja2VyIiwiYXJncyIsInRvU3RyaW5nIiwiY2xpY2tJbmRleCIsImJsb2NrTnVtYmVyIiwidHhIYXNoIiwidHJhbnNhY3Rpb25IYXNoIiwicmV2ZXJzZSIsImhhbmRsZUNsaWNrIiwiX3JlbG9hZCIsImdldFNpZ25lciIsImdzblNpZ25lciIsInR4IiwiY29uc29sZSIsImxvZyIsImhhc2giLCJkYXRhIiwiYWxlcnQiLCJtZXNzYWdlIiwi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QUFBQSxjQUZKLGVBS0k7QUFBSyxpQkFBUyxpREFBMEMzQyxTQUFTLElBQUksa0NBQXZELENBQWQ7QUFBQSxrQkFFUUEsU0FBUyxJQUFJSixNQUFNLENBQUN1QixNQUFQLEtBQWtCLENBQS9CLGdCQUNNO0FBQUssbUJBQVMsRUFBQyx3Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFETixHQUVPdkIsTUFBRCxDQUFTcUMsR0FBVCxDQUFhLFVBQUFDLEtBQUssRUFBSTtBQUNwQiw4QkFBTztBQUFLLHFCQUFTLDJCQUFvQkEsS0FBSyxDQUFDQyxPQUFOLENBQWNvQixXQUFkLE9BQThCN0QsT0FBTyxDQUFDNkQsV0FBUixFQUE5QixJQUFxRCxlQUF6RSxDQUFkO0FBQUEsbUNBQXNJRCxhQUFhLENBQUNwQixLQUFLLENBQUNDLE9BQVAsQ0FBbkoscUJBQW1MRCxLQUFLLENBQUNJLFVBQXpMLDRCQUEyTkosS0FBSyxDQUFDSyxXQUFqTztBQUFBLGFBQStHTCxLQUFLLENBQUNNLE1BQXJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDSCxTQUZDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9CSDs7R0FyR3VCcEQsSTs7S0FBQUEsSTs7QUF1R3hCLElBQU1rRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNFLE9BQUQ7QUFBQSxtQkFBd0JBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLENBQWQsRUFBZ0IsQ0FBaEIsQ0FBeEIsZ0JBQWdERCxPQUFPLENBQUNDLEtBQVIsQ0FBY0QsT0FBTyxDQUFDckMsTUFBUixHQUFlLENBQTdCLEVBQStCcUMsT0FBTyxDQUFDckMsTUFBdkMsQ0FBaEQ7QUFBQSxDQUF0QiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQ29udHJhY3QsIGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCBvbmVDbGlja0NvbXBpbGVkIGZyb20gJy4uL2NvbXBpbGVkL09uZUNsaWNrLmpzb24nXG5jb25zdCBHU04gPSByZXF1aXJlKCdAb3Blbmdzbi9nc24nKVxuXG4vLyBjb25zdCBwYXltYXN0ZXJBZGRyZXNzID0gJzB4ZmVGMWZGYzRhYTUyZjUwQWJGZjA0MzE2MjUzZThlMTI3YzA4YjM5RicgLy8gZGVwbG95ZWQgcGF5bWFzdGVyIGFkZHJlc3Ncbi8vIGNvbnN0IG9uZUNsaWNrQ29udHJhY3RBZGRyZXNzID0gXCIweDcxNkZGY0I3MDA0M0E0OEZCYzA0OUQ1MTA0NGQyOThENDY1NjEyQjlcIlxuLy8gY29uc3Qgbm9kZVVSTCA9IFwiaHR0cHM6Ly9hcGkuczAuYi5obW55LmlvXCJcblxuY29uc3QgcGF5bWFzdGVyQWRkcmVzcyA9ICcweDk0NEVlZjRBNEQzNTUwMjM2M0NCRUJjOTA0ZjE0NUI5QzU4OTA5ZTInIC8vIGRlcGxveWVkIHBheW1hc3RlciBhZGRyZXNzXG5jb25zdCBvbmVDbGlja0NvbnRyYWN0QWRkcmVzcyA9IFwiMHgwNENDZTM5NzE3NkYyRGQ0MDc1YTEyRmUxNThmMDEzNTg2OGFhRkZiXCJcbmNvbnN0IG5vZGVVUkwgPSBcImh0dHBzOi8vYXBpLnMwLnQuaG1ueS5pb1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2dzblByb3ZpZGVyLCBzZXRHc25Qcm92aWRlcl0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFtvbmVDbGlja0NvbnRyYWN0LCBzZXRPbmVDbGlja0NvbnRyYWN0XSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbY2xpY2tzLCBzZXRDbGlja3NdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3JlbG9hZCwgc2V0UmVsb2FkXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2xvYWRpbmdFdiwgc2V0TG9hZGluZ0V2XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZih3aW5kb3cuZXRoZXJldW0pe1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJ30pXG4gICAgICAgICAgICAgICAgY29uc3QgX19nc25Qcm92aWRlciA9IGF3YWl0IEdTTi5SZWxheVByb3ZpZGVyLm5ld1Byb3ZpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI6IHdpbmRvdy5ldGhlcmV1bSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltYXN0ZXJBZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJlZmVycmVkUmVsYXlzOiBbJ2h0dHBzOi8vaG1ueS5wcmpjdC5kZXYnXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLmluaXQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBfZ3NuUHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoX19nc25Qcm92aWRlcilcbiAgICAgICAgICAgICAgICBzZXRHc25Qcm92aWRlcihfZ3NuUHJvdmlkZXIpXG4gICAgICAgICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYod2luZG93LmV0aGVyZXVtKXtcbiAgICAgICAgICAgIHdpbmRvdy5ldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgKGFjY291bnRzKT0+e1xuICAgICAgICAgICAgICAgIGlmKGFjY291bnRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZihhY2NvdW50c1swXSAhPT0gYWNjb3VudCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKG5vZGVVUkwpO1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nRXYodHJ1ZSlcbiAgICAgICAgICAgICAgICBjb25zdCBPbmVDbGlja0NvbnRyYWN0ID0gbmV3IENvbnRyYWN0KG9uZUNsaWNrQ29udHJhY3RBZGRyZXNzLCBvbmVDbGlja0NvbXBpbGVkLmFiaSlcbiAgICAgICAgICAgICAgICBzZXRPbmVDbGlja0NvbnRyYWN0KE9uZUNsaWNrQ29udHJhY3QpXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gT25lQ2xpY2tDb250cmFjdC5maWx0ZXJzLkNsaWNrKG51bGwpXG4gICAgICAgICAgICAgICAgY29uc3QgbGF0ZXN0QmxvY2sgPSBhd2FpdCBwcm92aWRlci5nZXRCbG9ja051bWJlcigpXG4gICAgICAgICAgICAgICAgY29uc3QgX2NsaWNrcyA9IGF3YWl0IE9uZUNsaWNrQ29udHJhY3QuY29ubmVjdChwcm92aWRlcikucXVlcnlGaWx0ZXIoZmlsdGVyLCBsYXRlc3RCbG9jayAtIDIwMF8wMDApXG4gICAgICAgICAgICAgICAgY29uc3QgY2xpY2tzID0gX2NsaWNrcy5tYXAoY2xpY2sgPT4gKHtjbGlja2VyOiBjbGljay5hcmdzWzBdLnRvU3RyaW5nKCksIGNsaWNrSW5kZXg6IGNsaWNrLmFyZ3NbMV0udG9TdHJpbmcoKSwgYmxvY2tOdW1iZXI6IGNsaWNrLmJsb2NrTnVtYmVyLCB0eEhhc2g6IGNsaWNrLnRyYW5zYWN0aW9uSGFzaH0pKVxuICAgICAgICAgICAgICAgIHNldENsaWNrcyhjbGlja3MucmV2ZXJzZSgpKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgIH1maW5hbGx5e1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdFdihmYWxzZSlcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfSkoKVxuICAgIH0sW3JlbG9hZF0pXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYoZ3NuUHJvdmlkZXIpe1xuICAgICAgICAgICAgbGV0IF9yZWxvYWQgPSByZWxvYWRcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3NuU2lnbmVyID0gYXdhaXQgZ3NuUHJvdmlkZXIuZ2V0U2lnbmVyKGFjY291bnQpXG4gICAgICAgICAgICAgICAgY29uc3QgdHggPSBhd2FpdCBvbmVDbGlja0NvbnRyYWN0LmNvbm5lY3QoZ3NuU2lnbmVyKS5jbGljaygpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codHguaGFzaClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYoZXJyb3IuZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLmRhdGEubWVzc2FnZSlcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gX3JlbG9hZC0tXG4gICAgICAgICAgICB9ZmluYWxseXtcbiAgICAgICAgICAgICAgICBzZXRSZWxvYWQoX3JlbG9hZCsxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIG1kOmZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTMwMCB3LWZ1bGwgbWQ6dy01MDAgaC1mdWxsIG1kOmgtNjUwIHB5LTggcHgtNiByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1ncmF5LTIwMFwiPllvdXIgYWRkcmVzczoge2Zvcm1hdEFkZHJlc3MoYWNjb3VudCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgbXQtMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgdy02NCBiZy1ibHVlLTYwMCB0ZXh0LWdyYXktMjAwIGgtMTYgcm91bmRlZC1tZCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlci1ub25lXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PkFkZCBDbGljazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIG10LTE2IGgtMzUwIG92ZXJmbG93LXktc2Nyb2xsICR7bG9hZGluZ0V2ICYmIFwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0V2ICYmIGNsaWNrcy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtNXhsIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5Mb2FkaW5nIC4uLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNsaWNrcykubWFwKGNsaWNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgIHB5LTIgbGVhZGluZy00JHtjbGljay5jbGlja2VyLnRvTG93ZXJDYXNlKCk9PT1hY2NvdW50LnRvTG93ZXJDYXNlKCkmJid0ZXh0LWdyYXktNzAwJ31gfSBrZXk9e2NsaWNrLnR4SGFzaH0+Q2xpY2tlcjp7Zm9ybWF0QWRkcmVzcyhjbGljay5jbGlja2VyKX0sIENsaWNrIEluZGV4OiB7Y2xpY2suY2xpY2tJbmRleH0sIENsaWNrIGJsb2NrIG51bWJlcjoge2NsaWNrLmJsb2NrTnVtYmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgZm9ybWF0QWRkcmVzcyA9IChhZGRyZXNzOiBzdHJpbmcpID0+IGAke2FkZHJlc3Muc2xpY2UoMCw2KX0uLi4ke2FkZHJlc3Muc2xpY2UoYWRkcmVzcy5sZW5ndGgtNixhZGRyZXNzLmxlbmd0aCl9YFxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})