exports.id = 471;
exports.ids = [471];
exports.modules = {

/***/ 5890:
/***/ ((module) => {

// Exports
module.exports = {
	"spinner-container": "Spinner_spinner-container__p59vR",
	"loader": "Spinner_loader__J3z2u",
	"rotation": "Spinner_rotation__n0EcN",
	"rotationBack": "Spinner_rotationBack__IRBEt"
};


/***/ }),

/***/ 7526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5890);
/* harmony import */ var _Spinner_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Spinner_module_css__WEBPACK_IMPORTED_MODULE_1__);


const Spinner = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Spinner_module_css__WEBPACK_IMPORTED_MODULE_1___default()["spinner-container"]),
        "data-testid": "spinner",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_Spinner_module_css__WEBPACK_IMPORTED_MODULE_1___default().loader)
            }),
            ";"
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);


/***/ }),

/***/ 660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ API_URL)
/* harmony export */ });
const API_URL = "http://localhost:5000";


/***/ }),

/***/ 3470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ calculateTimer)
/* harmony export */ });
// ==== Before making the same function in Rust ====>
// function calculateTimer(timeInSeconds: number): Array<number | string> {
//   let hours: number = Math.floor(timeInSeconds / 3600);
//   let minutes: number = Math.floor((timeInSeconds - hours * 3600) / 60);
//   let seconds: number = timeInSeconds - hours * 3600 - minutes * 60;
//   let hoursFormat = hours < 10 ? `0${hours}` : hours;
//   let minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
//   let secondsFormat = seconds < 10 ? `0${seconds}` : seconds;
//   return [hoursFormat, minutesFormat, secondsFormat];
// }
// export { calculateTimer };
// ==== After making the same function in Rust ====>
function calculateTimer(timeInSeconds) {
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
    let seconds = timeInSeconds - hours * 3600 - minutes * 60;
    let hoursFormat = hours < 10 ? `0${hours}` : hours.toString();
    let minutesFormat = minutes < 10 ? `0${minutes}` : minutes.toString();
    let secondsFormat = seconds < 10 ? `0${seconds}` : seconds.toString();
    return [
        hoursFormat,
        minutesFormat,
        secondsFormat
    ];
}



/***/ })

};
;