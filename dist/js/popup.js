/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Button.tsx":
/*!************************!*\
  !*** ./src/Button.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function Button(_a) {
    var props = __rest(_a, []);
    return react_1.default.createElement("button", Object.assign({ style: baseStyles }, props));
}
exports["default"] = Button;
const baseStyles = {
    fontFamily: "Ubuntu, Arial, sans-serif",
    fontWeight: "bold",
    minWidth: "200px",
    backgroundColor: "#FF5148",
    border: "none",
    color: "white",
    padding: "12px 16px",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "3px",
    margin: "5px",
    outline: "none",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.3)",
    "&:hover": {
        backgroundColor: "#007bbb",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
};


/***/ }),

/***/ "./src/ButtonGenerator.tsx":
/*!*********************************!*\
  !*** ./src/ButtonGenerator.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Button_1 = __importDefault(__webpack_require__(/*! ./Button */ "./src/Button.tsx"));
const bs_1 = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
function ButtonGenerator({ generatorFn, name, data, setData, }) {
    const handleGenerate = () => {
        const { withPontuation } = data;
        const generatedData = generatorFn({ withPontuation });
        setData(Object.assign(Object.assign({}, data), { clicked: name, value: generatedData }));
        navigator.clipboard.writeText(generatedData);
    };
    return (react_1.default.createElement(Button_1.default, { onClick: handleGenerate }, data.clicked === name ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", null,
            name,
            " copiado!"),
        react_1.default.createElement(bs_1.BsClipboardCheck, { style: { marginLeft: 10 } }))) : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", null,
            "Gerar ",
            name),
        react_1.default.createElement(bs_1.BsClipboard, { style: { marginLeft: 10 } })))));
}
exports["default"] = ButtonGenerator;


/***/ }),

/***/ "./src/CreditCardGenerator.tsx":
/*!*************************************!*\
  !*** ./src/CreditCardGenerator.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const ButtonGenerator_1 = __importDefault(__webpack_require__(/*! ./ButtonGenerator */ "./src/ButtonGenerator.tsx"));
const cards_1 = __webpack_require__(/*! ./constants/cards */ "./src/constants/cards.tsx");
function CreditCardGenerator() {
    const [selectedFlag, setSelectedFlag] = (0, react_1.useState)(cards_1.cards[0]);
    const [data, setData] = (0, react_1.useState)({
        clicked: "",
        value: "",
        withPontuation: true,
    });
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                padding: "0 8px",
            } }, cards_1.cards.map(card => {
            const { Icon, name } = card;
            return (react_1.default.createElement(Icon, { onClick: () => setSelectedFlag(card), cursor: "pointer", color: selectedFlag.name === name ? "coral" : "white", title: name, size: "40px" }));
        })),
        react_1.default.createElement(ButtonGenerator_1.default, { generatorFn: () => selectedFlag.generatorFn(), name: "Cart\u00E3o", data: data, setData: setData })));
}
exports["default"] = CreditCardGenerator;


/***/ }),

/***/ "./src/Switch.tsx":
/*!************************!*\
  !*** ./src/Switch.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function Switch({ label, value, setValue }) {
    return (react_1.default.createElement("div", { className: "switch-container" },
        react_1.default.createElement("span", null, label),
        react_1.default.createElement("div", { className: "switch" },
            react_1.default.createElement("input", { checked: value, onChange: e => setValue(e.target.checked), type: "checkbox", id: "toggleAll" }),
            react_1.default.createElement("label", { htmlFor: "toggleAll" }))));
}
exports["default"] = Switch;


/***/ }),

/***/ "./src/constants/cards.tsx":
/*!*********************************!*\
  !*** ./src/constants/cards.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cards = void 0;
const fa_1 = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
const ri_1 = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
const generator = __webpack_require__(/*! creditcard-generator */ "./node_modules/creditcard-generator/index.js");
exports.cards = [
    {
        name: "Mastercard",
        Icon: ri_1.RiMastercardFill,
        generatorFn: () => generator.GenCC("Mastercard"),
    },
    {
        name: "Visa",
        Icon: ri_1.RiVisaFill,
        generatorFn: () => generator.GenCC("VISA"),
    },
    {
        name: "American Express",
        Icon: fa_1.FaCcAmex,
        generatorFn: () => generator.GenCC("Amex"),
    },
    {
        name: "Diners Club",
        Icon: fa_1.FaCcDinersClub,
        generatorFn: () => generator.GenCC("Diners"),
    },
];


/***/ }),

/***/ "./src/constants/ddds.ts":
/*!*******************************!*\
  !*** ./src/constants/ddds.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ddds = void 0;
exports.ddds = [
    "68",
    "82",
    "92",
    "97",
    "96",
    "71",
    "73",
    "74",
    "75",
    "77",
    "85",
    "88",
    "61",
    "27",
    "28",
    "62",
    "64",
    "98",
    "99",
    "31",
    "32",
    "33",
    "34",
    "35",
    "37",
    "38",
    "67",
    "65",
    "66",
    "91",
    "93",
    "94",
    "83",
    "81",
    "87",
    "86",
    "89",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "21",
    "22",
    "24",
    "84",
    "69",
    "95",
    "51",
    "53",
    "54",
    "55",
    "47",
    "48",
    "49",
    "79",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "63",
];


/***/ }),

/***/ "./src/constants/generators.ts":
/*!*************************************!*\
  !*** ./src/constants/generators.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generators = void 0;
const generateCNPJ_1 = __webpack_require__(/*! ../utils/generateCNPJ */ "./src/utils/generateCNPJ.ts");
const generateCPF_1 = __webpack_require__(/*! ../utils/generateCPF */ "./src/utils/generateCPF.ts");
const generateEmail_1 = __webpack_require__(/*! ../utils/generateEmail */ "./src/utils/generateEmail.ts");
const generatePhone_1 = __webpack_require__(/*! ../utils/generatePhone */ "./src/utils/generatePhone.ts");
exports.generators = [
    {
        name: "CPF",
        generatorFn: generateCPF_1.generateCPF,
    },
    {
        name: "CNPJ",
        generatorFn: generateCNPJ_1.generateCNPJ,
    },
    {
        name: "Celular",
        generatorFn: generatePhone_1.generatePhone,
    },
    {
        name: "Email",
        generatorFn: generateEmail_1.generateEmail,
    },
];


/***/ }),

/***/ "./src/popup.tsx":
/*!***********************!*\
  !*** ./src/popup.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
const ButtonGenerator_1 = __importDefault(__webpack_require__(/*! ./ButtonGenerator */ "./src/ButtonGenerator.tsx"));
const Switch_1 = __importDefault(__webpack_require__(/*! ./Switch */ "./src/Switch.tsx"));
const generators_1 = __webpack_require__(/*! ./constants/generators */ "./src/constants/generators.ts");
const CreditCardGenerator_1 = __importDefault(__webpack_require__(/*! ./CreditCardGenerator */ "./src/CreditCardGenerator.tsx"));
const Popup = () => {
    const [data, setData] = (0, react_1.useState)({
        clicked: "",
        value: "",
        withPontuation: true,
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Switch_1.default, { label: "Gerar com pontua\u00E7\u00E3o:", value: data.withPontuation, setValue: withPontuation => setData(Object.assign(Object.assign({}, data), { withPontuation })) }),
        react_1.default.createElement("div", { style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
            } },
            generators_1.generators.map(generator => (react_1.default.createElement(ButtonGenerator_1.default, Object.assign({ key: generator.name }, generator, { data: data, setData: setData })))),
            react_1.default.createElement(CreditCardGenerator_1.default, null))));
};
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(Popup, null)), document.getElementById("root"));


/***/ }),

/***/ "./src/utils/generateCNPJ.ts":
/*!***********************************!*\
  !*** ./src/utils/generateCNPJ.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateCNPJ = void 0;
function randomNumberGenerator(multiplier) {
    return Math.round(Math.random() * multiplier);
}
function getRoundedModule(dividend, divisor) {
    return Math.round(dividend - Math.floor(dividend / divisor) * divisor);
}
const generateCNPJ = ({ withPontuation }) => {
    const n = 9;
    const n1 = randomNumberGenerator(n);
    const n2 = randomNumberGenerator(n);
    const n3 = randomNumberGenerator(n);
    const n4 = randomNumberGenerator(n);
    const n5 = randomNumberGenerator(n);
    const n6 = randomNumberGenerator(n);
    const n7 = randomNumberGenerator(n);
    const n8 = randomNumberGenerator(n);
    const n9 = 0;
    const n10 = 0;
    const n11 = 0;
    const n12 = 1;
    let d1 = n12 * 2 +
        n11 * 3 +
        n10 * 4 +
        n9 * 5 +
        n8 * 6 +
        n7 * 7 +
        n6 * 8 +
        n5 * 9 +
        n4 * 2 +
        n3 * 3 +
        n2 * 4 +
        n1 * 5;
    d1 = 11 - getRoundedModule(d1, 11);
    if (d1 >= 10)
        d1 = 0;
    let d2 = d1 * 2 +
        n12 * 3 +
        n11 * 4 +
        n10 * 5 +
        n9 * 6 +
        n8 * 7 +
        n7 * 8 +
        n6 * 9 +
        n5 * 2 +
        n4 * 3 +
        n3 * 4 +
        n2 * 5 +
        n1 * 6;
    d2 = 11 - getRoundedModule(d2, 11);
    if (d2 >= 10)
        d2 = 0;
    if (withPontuation)
        return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${d1}${d2}`;
    return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${d1}${d2}`;
};
exports.generateCNPJ = generateCNPJ;


/***/ }),

/***/ "./src/utils/generateCPF.ts":
/*!**********************************!*\
  !*** ./src/utils/generateCPF.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateCPF = exports.cpfMask = exports.allDigitsAreEqual = exports.hasCPFLength = exports.generateNineDigits = exports.calcSecondChecker = exports.calcFirstChecker = void 0;
const calcFirstChecker = (firstNineDigits) => {
    let sum = 0;
    for (let i = 0; i < 9; ++i) {
        sum += Number(firstNineDigits.charAt(i)) * (10 - i);
    }
    const lastSumChecker = sum % 11;
    return lastSumChecker < 2 ? 0 : 11 - lastSumChecker;
};
exports.calcFirstChecker = calcFirstChecker;
const calcSecondChecker = (cpfWithChecker1) => {
    let sum = 0;
    for (let i = 0; i < 10; ++i) {
        sum += Number(cpfWithChecker1.charAt(i)) * (11 - i);
    }
    const lastSumChecker2 = sum % 11;
    return lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2;
};
exports.calcSecondChecker = calcSecondChecker;
const generateNineDigits = () => {
    let digits = "";
    for (let i = 0; i < 9; ++i) {
        digits += String(Math.floor(Math.random() * 10));
    }
    return digits;
};
exports.generateNineDigits = generateNineDigits;
const hasCPFLength = (cpf) => {
    return cpf.length > 11 || cpf.length < 11 ? false : true;
};
exports.hasCPFLength = hasCPFLength;
const allDigitsAreEqual = (digits) => {
    for (let i = 0; i < 10; i++) {
        if (digits === new Array(digits.length + 1).join(String(i))) {
            return true;
        }
    }
    return false;
};
exports.allDigitsAreEqual = allDigitsAreEqual;
const cpfMask = (value) => {
    return value
        .split("")
        .map((char, index) => {
        if (index === 2 || index === 5) {
            return `${char}.`;
        }
        if (index === 9) {
            return `-${char}`;
        }
        return char;
    })
        .join("");
};
exports.cpfMask = cpfMask;
const generateCPF = ({ withPontuation }) => {
    let firstNineDigits = "";
    do {
        firstNineDigits = (0, exports.generateNineDigits)();
    } while ((0, exports.allDigitsAreEqual)(firstNineDigits));
    const firstChecker = (0, exports.calcFirstChecker)(firstNineDigits);
    const secondChecker = (0, exports.calcSecondChecker)(firstNineDigits + firstChecker);
    const generatedCPF = `${firstNineDigits}${firstChecker}${secondChecker}`;
    if (withPontuation) {
        return (0, exports.cpfMask)(generatedCPF);
    }
    return generatedCPF;
};
exports.generateCPF = generateCPF;


/***/ }),

/***/ "./src/utils/generateEmail.ts":
/*!************************************!*\
  !*** ./src/utils/generateEmail.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateEmail = void 0;
const faker_1 = __importDefault(__webpack_require__(/*! @faker-js/faker */ "./node_modules/@faker-js/faker/dist/cjs/index.js"));
const generateEmail = () => {
    return faker_1.default.internet.email().toLowerCase();
};
exports.generateEmail = generateEmail;


/***/ }),

/***/ "./src/utils/generatePhone.ts":
/*!************************************!*\
  !*** ./src/utils/generatePhone.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generatePhone = void 0;
const ddds_1 = __webpack_require__(/*! ../constants/ddds */ "./src/constants/ddds.ts");
const validSecondDigits = [9, 8, 7, 6, 5];
const randomNumber = () => Math.floor(Math.random() * 10);
const getRandomDDD = () => {
    return ddds_1.ddds[Math.floor(Math.random() * ddds_1.ddds.length)];
};
const secondDigit = () => validSecondDigits[Math.floor(Math.random() * validSecondDigits.length)];
const generatePhone = ({ withPontuation }) => {
    if (withPontuation)
        return `(${getRandomDDD()}) 9${secondDigit()}${randomNumber()}${randomNumber()}${randomNumber()}-${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`;
    return `${getRandomDDD()}${randomNumber()}9${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`;
};
exports.generatePhone = generatePhone;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgerador_de_dados_fake"] = self["webpackChunkgerador_de_dados_fake"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/popup.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VyYWRvci1kZS1kYWRvcy1mYWtlLy4vc3JjL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vZ2VyYWRvci1kZS1kYWRvcy1mYWtlLy4vc3JjL0J1dHRvbkdlbmVyYXRvci50c3giLCJ3ZWJwYWNrOi8vZ2VyYWRvci1kZS1kYWRvcy1mYWtlLy4vc3JjL0NyZWRpdENhcmRHZW5lcmF0b3IudHN4Iiwid2VicGFjazovL2dlcmFkb3ItZGUtZGFkb3MtZmFrZS8uL3NyYy9Td2l0Y2gudHN4Iiwid2VicGFjazovL2dlcmFkb3ItZGUtZGFkb3MtZmFrZS8uL3NyYy9jb25zdGFudHMvY2FyZHMudHN4Iiwid2VicGFjazovL2dlcmFkb3ItZGUtZGFkb3MtZmFrZS8uL3NyYy9jb25zdGFudHMvZGRkcy50cyIsIndlYnBhY2s6Ly9nZXJhZG9yLWRlLWRhZG9zLWZha2UvLi9zcmMvY29uc3RhbnRzL2dlbmVyYXRvcnMudHMiLCJ3ZWJwYWNrOi8vZ2VyYWRvci1kZS1kYWRvcy1mYWtlLy4vc3JjL3BvcHVwLnRzeCIsIndlYnBhY2s6Ly9nZXJhZG9yLWRlLWRhZG9zLWZha2UvLi9zcmMvdXRpbHMvZ2VuZXJhdGVDTlBKLnRzIiwid2VicGFjazovL2dlcmFkb3ItZGUtZGFkb3MtZmFrZS8uL3NyYy91dGlscy9nZW5lcmF0ZUNQRi50cyIsIndlYnBhY2s6Ly9nZXJhZG9yLWRlLWRhZG9zLWZha2UvLi9zcmMvdXRpbHMvZ2VuZXJhdGVFbWFpbC50cyIsIndlYnBhY2s6Ly9nZXJhZG9yLWRlLWRhZG9zLWZha2UvLi9zcmMvdXRpbHMvZ2VuZXJhdGVQaG9uZS50cyIsIndlYnBhY2s6Ly9nZXJhZG9yLWRlLWRhZG9zLWZha2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2VyYWRvci1kZS1kYWRvcy1mYWtlL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vZ2VyYWRvci1kZS1kYWRvcy1mYWtlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nZXJhZG9yLWRlLWRhZG9zLWZha2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nZXJhZG9yLWRlLWRhZG9zLWZha2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nZXJhZG9yLWRlLWRhZG9zLWZha2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZ2VyYWRvci1kZS1kYWRvcy1mYWtlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ2VyYWRvci1kZS1kYWRvcy1mYWtlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9nZXJhZG9yLWRlLWRhZG9zLWZha2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuZnVuY3Rpb24gQnV0dG9uKF9hKSB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyBzdHlsZTogYmFzZVN0eWxlcyB9LCBwcm9wcykpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gQnV0dG9uO1xuY29uc3QgYmFzZVN0eWxlcyA9IHtcbiAgICBmb250RmFtaWx5OiBcIlVidW50dSwgQXJpYWwsIHNhbnMtc2VyaWZcIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBtaW5XaWR0aDogXCIyMDBweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkY1MTQ4XCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIHBhZGRpbmc6IFwiMTJweCAxNnB4XCIsXG4gICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgIG1hcmdpbjogXCI1cHhcIixcbiAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICBib3hTaGFkb3c6IFwiMCAzcHggNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMylcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwN2JiYlwiLFxuICAgIH0sXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCBCdXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9CdXR0b25cIikpO1xuY29uc3QgYnNfMSA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9ic1wiKTtcbmZ1bmN0aW9uIEJ1dHRvbkdlbmVyYXRvcih7IGdlbmVyYXRvckZuLCBuYW1lLCBkYXRhLCBzZXREYXRhLCB9KSB7XG4gICAgY29uc3QgaGFuZGxlR2VuZXJhdGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgd2l0aFBvbnR1YXRpb24gfSA9IGRhdGE7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRlZERhdGEgPSBnZW5lcmF0b3JGbih7IHdpdGhQb250dWF0aW9uIH0pO1xuICAgICAgICBzZXREYXRhKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgY2xpY2tlZDogbmFtZSwgdmFsdWU6IGdlbmVyYXRlZERhdGEgfSkpO1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChnZW5lcmF0ZWREYXRhKTtcbiAgICB9O1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uXzEuZGVmYXVsdCwgeyBvbkNsaWNrOiBoYW5kbGVHZW5lcmF0ZSB9LCBkYXRhLmNsaWNrZWQgPT09IG5hbWUgPyAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBcIiBjb3BpYWRvIVwiKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoYnNfMS5Cc0NsaXBib2FyZENoZWNrLCB7IHN0eWxlOiB7IG1hcmdpbkxlZnQ6IDEwIH0gfSkpKSA6IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLFxuICAgICAgICAgICAgXCJHZXJhciBcIixcbiAgICAgICAgICAgIG5hbWUpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChic18xLkJzQ2xpcGJvYXJkLCB7IHN0eWxlOiB7IG1hcmdpbkxlZnQ6IDEwIH0gfSkpKSkpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gQnV0dG9uR2VuZXJhdG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IEJ1dHRvbkdlbmVyYXRvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0J1dHRvbkdlbmVyYXRvclwiKSk7XG5jb25zdCBjYXJkc18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzL2NhcmRzXCIpO1xuZnVuY3Rpb24gQ3JlZGl0Q2FyZEdlbmVyYXRvcigpIHtcbiAgICBjb25zdCBbc2VsZWN0ZWRGbGFnLCBzZXRTZWxlY3RlZEZsYWddID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKGNhcmRzXzEuY2FyZHNbMF0pO1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSh7XG4gICAgICAgIGNsaWNrZWQ6IFwiXCIsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICB3aXRoUG9udHVhdGlvbjogdHJ1ZSxcbiAgICB9KTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDhweFwiLFxuICAgICAgICAgICAgfSB9LCBjYXJkc18xLmNhcmRzLm1hcChjYXJkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgSWNvbiwgbmFtZSB9ID0gY2FyZDtcbiAgICAgICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBvbkNsaWNrOiAoKSA9PiBzZXRTZWxlY3RlZEZsYWcoY2FyZCksIGN1cnNvcjogXCJwb2ludGVyXCIsIGNvbG9yOiBzZWxlY3RlZEZsYWcubmFtZSA9PT0gbmFtZSA/IFwiY29yYWxcIiA6IFwid2hpdGVcIiwgdGl0bGU6IG5hbWUsIHNpemU6IFwiNDBweFwiIH0pKTtcbiAgICAgICAgfSkpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCdXR0b25HZW5lcmF0b3JfMS5kZWZhdWx0LCB7IGdlbmVyYXRvckZuOiAoKSA9PiBzZWxlY3RlZEZsYWcuZ2VuZXJhdG9yRm4oKSwgbmFtZTogXCJDYXJ0XFx1MDBFM29cIiwgZGF0YTogZGF0YSwgc2V0RGF0YTogc2V0RGF0YSB9KSkpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ3JlZGl0Q2FyZEdlbmVyYXRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuZnVuY3Rpb24gU3dpdGNoKHsgbGFiZWwsIHZhbHVlLCBzZXRWYWx1ZSB9KSB7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzd2l0Y2gtY29udGFpbmVyXCIgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGxhYmVsKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic3dpdGNoXCIgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyBjaGVja2VkOiB2YWx1ZSwgb25DaGFuZ2U6IGUgPT4gc2V0VmFsdWUoZS50YXJnZXQuY2hlY2tlZCksIHR5cGU6IFwiY2hlY2tib3hcIiwgaWQ6IFwidG9nZ2xlQWxsXCIgfSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgaHRtbEZvcjogXCJ0b2dnbGVBbGxcIiB9KSkpKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFN3aXRjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jYXJkcyA9IHZvaWQgMDtcbmNvbnN0IGZhXzEgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7XG5jb25zdCByaV8xID0gcmVxdWlyZShcInJlYWN0LWljb25zL3JpXCIpO1xuY29uc3QgZ2VuZXJhdG9yID0gcmVxdWlyZShcImNyZWRpdGNhcmQtZ2VuZXJhdG9yXCIpO1xuZXhwb3J0cy5jYXJkcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTWFzdGVyY2FyZFwiLFxuICAgICAgICBJY29uOiByaV8xLlJpTWFzdGVyY2FyZEZpbGwsXG4gICAgICAgIGdlbmVyYXRvckZuOiAoKSA9PiBnZW5lcmF0b3IuR2VuQ0MoXCJNYXN0ZXJjYXJkXCIpLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlZpc2FcIixcbiAgICAgICAgSWNvbjogcmlfMS5SaVZpc2FGaWxsLFxuICAgICAgICBnZW5lcmF0b3JGbjogKCkgPT4gZ2VuZXJhdG9yLkdlbkNDKFwiVklTQVwiKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJBbWVyaWNhbiBFeHByZXNzXCIsXG4gICAgICAgIEljb246IGZhXzEuRmFDY0FtZXgsXG4gICAgICAgIGdlbmVyYXRvckZuOiAoKSA9PiBnZW5lcmF0b3IuR2VuQ0MoXCJBbWV4XCIpLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkRpbmVycyBDbHViXCIsXG4gICAgICAgIEljb246IGZhXzEuRmFDY0RpbmVyc0NsdWIsXG4gICAgICAgIGdlbmVyYXRvckZuOiAoKSA9PiBnZW5lcmF0b3IuR2VuQ0MoXCJEaW5lcnNcIiksXG4gICAgfSxcbl07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGRkcyA9IHZvaWQgMDtcbmV4cG9ydHMuZGRkcyA9IFtcbiAgICBcIjY4XCIsXG4gICAgXCI4MlwiLFxuICAgIFwiOTJcIixcbiAgICBcIjk3XCIsXG4gICAgXCI5NlwiLFxuICAgIFwiNzFcIixcbiAgICBcIjczXCIsXG4gICAgXCI3NFwiLFxuICAgIFwiNzVcIixcbiAgICBcIjc3XCIsXG4gICAgXCI4NVwiLFxuICAgIFwiODhcIixcbiAgICBcIjYxXCIsXG4gICAgXCIyN1wiLFxuICAgIFwiMjhcIixcbiAgICBcIjYyXCIsXG4gICAgXCI2NFwiLFxuICAgIFwiOThcIixcbiAgICBcIjk5XCIsXG4gICAgXCIzMVwiLFxuICAgIFwiMzJcIixcbiAgICBcIjMzXCIsXG4gICAgXCIzNFwiLFxuICAgIFwiMzVcIixcbiAgICBcIjM3XCIsXG4gICAgXCIzOFwiLFxuICAgIFwiNjdcIixcbiAgICBcIjY1XCIsXG4gICAgXCI2NlwiLFxuICAgIFwiOTFcIixcbiAgICBcIjkzXCIsXG4gICAgXCI5NFwiLFxuICAgIFwiODNcIixcbiAgICBcIjgxXCIsXG4gICAgXCI4N1wiLFxuICAgIFwiODZcIixcbiAgICBcIjg5XCIsXG4gICAgXCI0MVwiLFxuICAgIFwiNDJcIixcbiAgICBcIjQzXCIsXG4gICAgXCI0NFwiLFxuICAgIFwiNDVcIixcbiAgICBcIjQ2XCIsXG4gICAgXCIyMVwiLFxuICAgIFwiMjJcIixcbiAgICBcIjI0XCIsXG4gICAgXCI4NFwiLFxuICAgIFwiNjlcIixcbiAgICBcIjk1XCIsXG4gICAgXCI1MVwiLFxuICAgIFwiNTNcIixcbiAgICBcIjU0XCIsXG4gICAgXCI1NVwiLFxuICAgIFwiNDdcIixcbiAgICBcIjQ4XCIsXG4gICAgXCI0OVwiLFxuICAgIFwiNzlcIixcbiAgICBcIjExXCIsXG4gICAgXCIxMlwiLFxuICAgIFwiMTNcIixcbiAgICBcIjE0XCIsXG4gICAgXCIxNVwiLFxuICAgIFwiMTZcIixcbiAgICBcIjE3XCIsXG4gICAgXCIxOFwiLFxuICAgIFwiMTlcIixcbiAgICBcIjYzXCIsXG5dO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdlbmVyYXRvcnMgPSB2b2lkIDA7XG5jb25zdCBnZW5lcmF0ZUNOUEpfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9nZW5lcmF0ZUNOUEpcIik7XG5jb25zdCBnZW5lcmF0ZUNQRl8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2dlbmVyYXRlQ1BGXCIpO1xuY29uc3QgZ2VuZXJhdGVFbWFpbF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2dlbmVyYXRlRW1haWxcIik7XG5jb25zdCBnZW5lcmF0ZVBob25lXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvZ2VuZXJhdGVQaG9uZVwiKTtcbmV4cG9ydHMuZ2VuZXJhdG9ycyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQ1BGXCIsXG4gICAgICAgIGdlbmVyYXRvckZuOiBnZW5lcmF0ZUNQRl8xLmdlbmVyYXRlQ1BGLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkNOUEpcIixcbiAgICAgICAgZ2VuZXJhdG9yRm46IGdlbmVyYXRlQ05QSl8xLmdlbmVyYXRlQ05QSixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJDZWx1bGFyXCIsXG4gICAgICAgIGdlbmVyYXRvckZuOiBnZW5lcmF0ZVBob25lXzEuZ2VuZXJhdGVQaG9uZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJFbWFpbFwiLFxuICAgICAgICBnZW5lcmF0b3JGbjogZ2VuZXJhdGVFbWFpbF8xLmdlbmVyYXRlRW1haWwsXG4gICAgfSxcbl07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgcmVhY3RfZG9tXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5jb25zdCBCdXR0b25HZW5lcmF0b3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9CdXR0b25HZW5lcmF0b3JcIikpO1xuY29uc3QgU3dpdGNoXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU3dpdGNoXCIpKTtcbmNvbnN0IGdlbmVyYXRvcnNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy9nZW5lcmF0b3JzXCIpO1xuY29uc3QgQ3JlZGl0Q2FyZEdlbmVyYXRvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NyZWRpdENhcmRHZW5lcmF0b3JcIikpO1xuY29uc3QgUG9wdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKHtcbiAgICAgICAgY2xpY2tlZDogXCJcIixcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgIHdpdGhQb250dWF0aW9uOiB0cnVlLFxuICAgIH0pO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTd2l0Y2hfMS5kZWZhdWx0LCB7IGxhYmVsOiBcIkdlcmFyIGNvbSBwb250dWFcXHUwMEU3XFx1MDBFM286XCIsIHZhbHVlOiBkYXRhLndpdGhQb250dWF0aW9uLCBzZXRWYWx1ZTogd2l0aFBvbnR1YXRpb24gPT4gc2V0RGF0YShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IHdpdGhQb250dWF0aW9uIH0pKSB9KSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgZ2VuZXJhdG9yc18xLmdlbmVyYXRvcnMubWFwKGdlbmVyYXRvciA9PiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uR2VuZXJhdG9yXzEuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7IGtleTogZ2VuZXJhdG9yLm5hbWUgfSwgZ2VuZXJhdG9yLCB7IGRhdGE6IGRhdGEsIHNldERhdGE6IHNldERhdGEgfSkpKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDcmVkaXRDYXJkR2VuZXJhdG9yXzEuZGVmYXVsdCwgbnVsbCkpKSk7XG59O1xucmVhY3RfZG9tXzEuZGVmYXVsdC5yZW5kZXIocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LlN0cmljdE1vZGUsIG51bGwsXG4gICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUG9wdXAsIG51bGwpKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZW5lcmF0ZUNOUEogPSB2b2lkIDA7XG5mdW5jdGlvbiByYW5kb21OdW1iZXJHZW5lcmF0b3IobXVsdGlwbGllcikge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBtdWx0aXBsaWVyKTtcbn1cbmZ1bmN0aW9uIGdldFJvdW5kZWRNb2R1bGUoZGl2aWRlbmQsIGRpdmlzb3IpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChkaXZpZGVuZCAtIE1hdGguZmxvb3IoZGl2aWRlbmQgLyBkaXZpc29yKSAqIGRpdmlzb3IpO1xufVxuY29uc3QgZ2VuZXJhdGVDTlBKID0gKHsgd2l0aFBvbnR1YXRpb24gfSkgPT4ge1xuICAgIGNvbnN0IG4gPSA5O1xuICAgIGNvbnN0IG4xID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKG4pO1xuICAgIGNvbnN0IG4yID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKG4pO1xuICAgIGNvbnN0IG4zID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKG4pO1xuICAgIGNvbnN0IG40ID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKG4pO1xuICAgIGNvbnN0IG41ID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKG4pO1xuICAgIGNvbnN0IG42ID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKG4pO1xuICAgIGNvbnN0IG43ID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKG4pO1xuICAgIGNvbnN0IG44ID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKG4pO1xuICAgIGNvbnN0IG45ID0gMDtcbiAgICBjb25zdCBuMTAgPSAwO1xuICAgIGNvbnN0IG4xMSA9IDA7XG4gICAgY29uc3QgbjEyID0gMTtcbiAgICBsZXQgZDEgPSBuMTIgKiAyICtcbiAgICAgICAgbjExICogMyArXG4gICAgICAgIG4xMCAqIDQgK1xuICAgICAgICBuOSAqIDUgK1xuICAgICAgICBuOCAqIDYgK1xuICAgICAgICBuNyAqIDcgK1xuICAgICAgICBuNiAqIDggK1xuICAgICAgICBuNSAqIDkgK1xuICAgICAgICBuNCAqIDIgK1xuICAgICAgICBuMyAqIDMgK1xuICAgICAgICBuMiAqIDQgK1xuICAgICAgICBuMSAqIDU7XG4gICAgZDEgPSAxMSAtIGdldFJvdW5kZWRNb2R1bGUoZDEsIDExKTtcbiAgICBpZiAoZDEgPj0gMTApXG4gICAgICAgIGQxID0gMDtcbiAgICBsZXQgZDIgPSBkMSAqIDIgK1xuICAgICAgICBuMTIgKiAzICtcbiAgICAgICAgbjExICogNCArXG4gICAgICAgIG4xMCAqIDUgK1xuICAgICAgICBuOSAqIDYgK1xuICAgICAgICBuOCAqIDcgK1xuICAgICAgICBuNyAqIDggK1xuICAgICAgICBuNiAqIDkgK1xuICAgICAgICBuNSAqIDIgK1xuICAgICAgICBuNCAqIDMgK1xuICAgICAgICBuMyAqIDQgK1xuICAgICAgICBuMiAqIDUgK1xuICAgICAgICBuMSAqIDY7XG4gICAgZDIgPSAxMSAtIGdldFJvdW5kZWRNb2R1bGUoZDIsIDExKTtcbiAgICBpZiAoZDIgPj0gMTApXG4gICAgICAgIGQyID0gMDtcbiAgICBpZiAod2l0aFBvbnR1YXRpb24pXG4gICAgICAgIHJldHVybiBgJHtuMX0ke24yfS4ke24zfSR7bjR9JHtuNX0uJHtuNn0ke243fSR7bjh9LyR7bjl9JHtuMTB9JHtuMTF9JHtuMTJ9LSR7ZDF9JHtkMn1gO1xuICAgIHJldHVybiBgJHtuMX0ke24yfSR7bjN9JHtuNH0ke241fSR7bjZ9JHtuN30ke244fSR7bjl9JHtuMTB9JHtuMTF9JHtuMTJ9JHtkMX0ke2QyfWA7XG59O1xuZXhwb3J0cy5nZW5lcmF0ZUNOUEogPSBnZW5lcmF0ZUNOUEo7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2VuZXJhdGVDUEYgPSBleHBvcnRzLmNwZk1hc2sgPSBleHBvcnRzLmFsbERpZ2l0c0FyZUVxdWFsID0gZXhwb3J0cy5oYXNDUEZMZW5ndGggPSBleHBvcnRzLmdlbmVyYXRlTmluZURpZ2l0cyA9IGV4cG9ydHMuY2FsY1NlY29uZENoZWNrZXIgPSBleHBvcnRzLmNhbGNGaXJzdENoZWNrZXIgPSB2b2lkIDA7XG5jb25zdCBjYWxjRmlyc3RDaGVja2VyID0gKGZpcnN0TmluZURpZ2l0cykgPT4ge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgKytpKSB7XG4gICAgICAgIHN1bSArPSBOdW1iZXIoZmlyc3ROaW5lRGlnaXRzLmNoYXJBdChpKSkgKiAoMTAgLSBpKTtcbiAgICB9XG4gICAgY29uc3QgbGFzdFN1bUNoZWNrZXIgPSBzdW0gJSAxMTtcbiAgICByZXR1cm4gbGFzdFN1bUNoZWNrZXIgPCAyID8gMCA6IDExIC0gbGFzdFN1bUNoZWNrZXI7XG59O1xuZXhwb3J0cy5jYWxjRmlyc3RDaGVja2VyID0gY2FsY0ZpcnN0Q2hlY2tlcjtcbmNvbnN0IGNhbGNTZWNvbmRDaGVja2VyID0gKGNwZldpdGhDaGVja2VyMSkgPT4ge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xuICAgICAgICBzdW0gKz0gTnVtYmVyKGNwZldpdGhDaGVja2VyMS5jaGFyQXQoaSkpICogKDExIC0gaSk7XG4gICAgfVxuICAgIGNvbnN0IGxhc3RTdW1DaGVja2VyMiA9IHN1bSAlIDExO1xuICAgIHJldHVybiBsYXN0U3VtQ2hlY2tlcjIgPCAyID8gMCA6IDExIC0gbGFzdFN1bUNoZWNrZXIyO1xufTtcbmV4cG9ydHMuY2FsY1NlY29uZENoZWNrZXIgPSBjYWxjU2Vjb25kQ2hlY2tlcjtcbmNvbnN0IGdlbmVyYXRlTmluZURpZ2l0cyA9ICgpID0+IHtcbiAgICBsZXQgZGlnaXRzID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7ICsraSkge1xuICAgICAgICBkaWdpdHMgKz0gU3RyaW5nKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgfVxuICAgIHJldHVybiBkaWdpdHM7XG59O1xuZXhwb3J0cy5nZW5lcmF0ZU5pbmVEaWdpdHMgPSBnZW5lcmF0ZU5pbmVEaWdpdHM7XG5jb25zdCBoYXNDUEZMZW5ndGggPSAoY3BmKSA9PiB7XG4gICAgcmV0dXJuIGNwZi5sZW5ndGggPiAxMSB8fCBjcGYubGVuZ3RoIDwgMTEgPyBmYWxzZSA6IHRydWU7XG59O1xuZXhwb3J0cy5oYXNDUEZMZW5ndGggPSBoYXNDUEZMZW5ndGg7XG5jb25zdCBhbGxEaWdpdHNBcmVFcXVhbCA9IChkaWdpdHMpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgaWYgKGRpZ2l0cyA9PT0gbmV3IEFycmF5KGRpZ2l0cy5sZW5ndGggKyAxKS5qb2luKFN0cmluZyhpKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnRzLmFsbERpZ2l0c0FyZUVxdWFsID0gYWxsRGlnaXRzQXJlRXF1YWw7XG5jb25zdCBjcGZNYXNrID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlXG4gICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAubWFwKChjaGFyLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPT09IDIgfHwgaW5kZXggPT09IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtjaGFyfS5gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA9PT0gOSkge1xuICAgICAgICAgICAgcmV0dXJuIGAtJHtjaGFyfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYXI7XG4gICAgfSlcbiAgICAgICAgLmpvaW4oXCJcIik7XG59O1xuZXhwb3J0cy5jcGZNYXNrID0gY3BmTWFzaztcbmNvbnN0IGdlbmVyYXRlQ1BGID0gKHsgd2l0aFBvbnR1YXRpb24gfSkgPT4ge1xuICAgIGxldCBmaXJzdE5pbmVEaWdpdHMgPSBcIlwiO1xuICAgIGRvIHtcbiAgICAgICAgZmlyc3ROaW5lRGlnaXRzID0gKDAsIGV4cG9ydHMuZ2VuZXJhdGVOaW5lRGlnaXRzKSgpO1xuICAgIH0gd2hpbGUgKCgwLCBleHBvcnRzLmFsbERpZ2l0c0FyZUVxdWFsKShmaXJzdE5pbmVEaWdpdHMpKTtcbiAgICBjb25zdCBmaXJzdENoZWNrZXIgPSAoMCwgZXhwb3J0cy5jYWxjRmlyc3RDaGVja2VyKShmaXJzdE5pbmVEaWdpdHMpO1xuICAgIGNvbnN0IHNlY29uZENoZWNrZXIgPSAoMCwgZXhwb3J0cy5jYWxjU2Vjb25kQ2hlY2tlcikoZmlyc3ROaW5lRGlnaXRzICsgZmlyc3RDaGVja2VyKTtcbiAgICBjb25zdCBnZW5lcmF0ZWRDUEYgPSBgJHtmaXJzdE5pbmVEaWdpdHN9JHtmaXJzdENoZWNrZXJ9JHtzZWNvbmRDaGVja2VyfWA7XG4gICAgaWYgKHdpdGhQb250dWF0aW9uKSB7XG4gICAgICAgIHJldHVybiAoMCwgZXhwb3J0cy5jcGZNYXNrKShnZW5lcmF0ZWRDUEYpO1xuICAgIH1cbiAgICByZXR1cm4gZ2VuZXJhdGVkQ1BGO1xufTtcbmV4cG9ydHMuZ2VuZXJhdGVDUEYgPSBnZW5lcmF0ZUNQRjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZW5lcmF0ZUVtYWlsID0gdm9pZCAwO1xuY29uc3QgZmFrZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQGZha2VyLWpzL2Zha2VyXCIpKTtcbmNvbnN0IGdlbmVyYXRlRW1haWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGZha2VyXzEuZGVmYXVsdC5pbnRlcm5ldC5lbWFpbCgpLnRvTG93ZXJDYXNlKCk7XG59O1xuZXhwb3J0cy5nZW5lcmF0ZUVtYWlsID0gZ2VuZXJhdGVFbWFpbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZW5lcmF0ZVBob25lID0gdm9pZCAwO1xuY29uc3QgZGRkc18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9kZGRzXCIpO1xuY29uc3QgdmFsaWRTZWNvbmREaWdpdHMgPSBbOSwgOCwgNywgNiwgNV07XG5jb25zdCByYW5kb21OdW1iZXIgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5jb25zdCBnZXRSYW5kb21EREQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRkZHNfMS5kZGRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRkZHNfMS5kZGRzLmxlbmd0aCldO1xufTtcbmNvbnN0IHNlY29uZERpZ2l0ID0gKCkgPT4gdmFsaWRTZWNvbmREaWdpdHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRTZWNvbmREaWdpdHMubGVuZ3RoKV07XG5jb25zdCBnZW5lcmF0ZVBob25lID0gKHsgd2l0aFBvbnR1YXRpb24gfSkgPT4ge1xuICAgIGlmICh3aXRoUG9udHVhdGlvbilcbiAgICAgICAgcmV0dXJuIGAoJHtnZXRSYW5kb21EREQoKX0pIDkke3NlY29uZERpZ2l0KCl9JHtyYW5kb21OdW1iZXIoKX0ke3JhbmRvbU51bWJlcigpfSR7cmFuZG9tTnVtYmVyKCl9LSR7cmFuZG9tTnVtYmVyKCl9JHtyYW5kb21OdW1iZXIoKX0ke3JhbmRvbU51bWJlcigpfSR7cmFuZG9tTnVtYmVyKCl9YDtcbiAgICByZXR1cm4gYCR7Z2V0UmFuZG9tREREKCl9JHtyYW5kb21OdW1iZXIoKX05JHtyYW5kb21OdW1iZXIoKX0ke3JhbmRvbU51bWJlcigpfSR7cmFuZG9tTnVtYmVyKCl9JHtyYW5kb21OdW1iZXIoKX0ke3JhbmRvbU51bWJlcigpfSR7cmFuZG9tTnVtYmVyKCl9JHtyYW5kb21OdW1iZXIoKX1gO1xufTtcbmV4cG9ydHMuZ2VuZXJhdGVQaG9uZSA9IGdlbmVyYXRlUGhvbmU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwb3B1cFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtnZXJhZG9yX2RlX2RhZG9zX2Zha2VcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZ2VyYWRvcl9kZV9kYWRvc19mYWtlXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcG9wdXAudHN4XCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=