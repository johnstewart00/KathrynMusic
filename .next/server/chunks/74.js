"use strict";
exports.id = 74;
exports.ids = [74];
exports.modules = {

/***/ 3074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/app/components/HeaderButton.tsx
/* __next_internal_client_entry_do_not_use__ HeaderButton,default auto */ 
const HeaderButton = ({ onClick, children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "px-3 py-3 hover:bg-gray-200 active:bg-gray-400",
        onClick: onClick,
        children: children
    });
};
/* harmony default export */ const components_HeaderButton = ((/* unused pure expression or super */ null && (HeaderButton)));

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
;// CONCATENATED MODULE: ./src/app/components/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Header(props) {
    const router = (0,navigation.useRouter)();
    const onClick = (key = "")=>{
        console.log(`going to the ${key} page`);
        return router.push(`/${key}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-gray-100 w-screen p-4 h-1/8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderButton, {
                onClick: ()=>onClick(),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-black",
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderButton, {
                onClick: ()=>onClick("about"),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-black",
                    children: "About"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderButton, {
                onClick: ()=>onClick("media"),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-black",
                    children: "Media"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderButton, {
                onClick: ()=>onClick("contact"),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-black",
                    children: "Contact"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderButton, {
                onClick: ()=>onClick("resources"),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-black",
                    children: "Resources"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderButton, {
                onClick: ()=>onClick("trivia"),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-black",
                    children: "Trivia Game"
                })
            })
        ]
    });
}


/***/ })

};
;