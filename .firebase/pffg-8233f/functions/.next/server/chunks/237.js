exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 66334:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 22166, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98495));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 13379));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 13473));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 32933))

/***/ }),

/***/ 67035:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 94564, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50885, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 80772, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 68262, 23))

/***/ }),

/***/ 21957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (/* binding */ auth),
/* harmony export */   db: () => (/* binding */ db),
/* harmony export */   tO: () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31288);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25224);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25174);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8120);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25345);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52124);
// API









// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzn4Scs1dY52Mu6iBszw6sLCjrU6LSO8c",
    authDomain: "pffg-8233f.firebaseapp.com",
    projectId: "pffg-8233f",
    storageBucket: "pffg-8233f.appspot.com",
    messagingSenderId: "491732775256",
    appId: "1:491732775256:web:48bb939e119ba84c80752d",
    measurementId: "G-XLD19XFSTG"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__/* .initializeApp */ .ZF)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .getAuth */ .v0)(app);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__/* .getFirestore */ .ad)(app);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__/* .getStorage */ .cF)();



/***/ }),

/***/ 13473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Footer: () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(64085);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/layout/footer/FooterLink.tsx
/* __next_internal_client_entry_do_not_use__ FooterLink auto */ 
// CORE

const FooterLink = ({ url, name })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: url,
        style: {
            textDecoration: "none",
            height: "60px",
            display: "inline-grid",
            alignContent: "center",
            width: "100%",
            color: "#005A9C",
            textAlign: "center"
        },
        children: name
    });
};

;// CONCATENATED MODULE: ./src/components/layout/footer/Footer.tsx
/* __next_internal_client_entry_do_not_use__ Footer auto */ 
// CORE

// ASSETS

// COMPONENTS

const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
        container: true,
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        sx: {
            marginTop: "150px"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                item: true,
                xs: 12,
                sx: {
                    textAlign: "center",
                    position: "relative",
                    marginBottom: "90px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Divider, {
                        sx: {
                            border: "none",
                            background: "linear-gradient(90deg, #005A9C 0%, rgba(255,255,255,1) 45%, rgba(255,255,255,1) 55%, #005A9C 100%)",
                            height: "6px"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/logo.png",
                        alt: "logo",
                        height: 170,
                        width: 120,
                        style: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                item: true,
                container: true,
                xs: 4,
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                        item: true,
                        sm: 3,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(FooterLink, {
                            url: "/",
                            name: "Start"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                        item: true,
                        sm: 3,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(FooterLink, {
                            url: "/about",
                            name: "O nas"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                        item: true,
                        sm: 3,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(FooterLink, {
                            url: "/statue",
                            name: "Regulamin"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                        item: true,
                        sm: 3,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(FooterLink, {
                            url: "/contact",
                            name: "Kontakt"
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 13379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MainNavigation: () => (/* binding */ MainNavigation)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(64085);
;// CONCATENATED MODULE: ./src/assets/img/footgolf.mp4
/* harmony default export */ const footgolf = ("/_next/static/media/footgolf.mp4");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/theme/index.tsx + 1 modules
var theme = __webpack_require__(32933);
;// CONCATENATED MODULE: ./src/components/layout/main-navigation/NavLink.tsx
/* __next_internal_client_entry_do_not_use__ NavLink auto */ 
// CORE

// ASSETS

const NavLink = ({ route, text })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: route,
        style: {
            textDecoration: "none",
            color: theme["default"].palette.common.white,
            height: "60px",
            display: "inline-grid",
            alignContent: "center",
            width: "100%"
        },
        children: text
    });
};

;// CONCATENATED MODULE: ./src/components/layout/main-navigation/MainNavigation.tsx
/* __next_internal_client_entry_do_not_use__ MainNavigation auto */ 
// CORE


// ASSETS


// COMPONENTS

// FIREBASE
const MainNavigation = ()=>{
    const searchParams = (0,navigation.useSearchParams)();
    console.log(searchParams);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
        container: true,
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        sx: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
                    style: {
                        maxHeight: "600px",
                        width: "100%",
                        objectFit: "cover"
                    },
                    src: footgolf,
                    autoPlay: true,
                    loop: true,
                    muted: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                item: true,
                xs: 12,
                sm: 8,
                sx: {
                    zIndex: "1",
                    position: "absolute",
                    textAlign: "center",
                    top: 0,
                    left: 0,
                    right: 0,
                    marginLeft: "auto",
                    marginRight: "auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.ButtonGroup, {
                    variant: "contained",
                    sx: {
                        width: "100%",
                        height: "60px"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                            style: {
                                width: "100%",
                                borderColor: "#FFFFFF"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                route: "/",
                                text: "STRONA GŁ\xd3WNA"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                            style: {
                                width: "100%",
                                borderColor: "#FFFFFF"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                route: "/about",
                                text: "O NAS"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                            style: {
                                width: "100%",
                                borderColor: "#FFFFFF"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                route: "/statue",
                                text: "REGULAMIN"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                            style: {
                                width: "100%",
                                borderColor: "#FFFFFF"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                route: "/contact",
                                text: "KONTAKT"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                item: true,
                sx: {
                    position: "absolute",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    width: "100%",
                    heigth: "100%",
                    top: {
                        xs: "30%",
                        sm: "20%"
                    },
                    textAlign: "center",
                    padding: {
                        xs: "25px 0",
                        sm: "50px 0"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                    item: true,
                    sx: {
                        margin: "auto",
                        height: {
                            xs: "100px",
                            sm: "180px",
                            md: "300px"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/logo.png",
                        fill: true,
                        alt: "logo",
                        style: {
                            objectFit: "contain"
                        }
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 98495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthContextProvider: () => (/* binding */ AuthContextProvider),
/* harmony export */   UserAuth: () => (/* binding */ UserAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25224);
/* harmony import */ var _firebase_config_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21957);
/* __next_internal_client_entry_do_not_use__ AuthContextProvider,UserAuth auto */ 
// CORE

// API


const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const AuthContextProvider = ({ children })=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const createUser = (email, password)=>{
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .createUserWithEmailAndPassword */ .Xb)(_firebase_config_clientApp__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, email, password);
    };
    const signIn = (email, password)=>{
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .signInWithEmailAndPassword */ .e5)(_firebase_config_clientApp__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, email, password);
    };
    const logout = ()=>{
        setUser(null);
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .signOut */ .w7)(_firebase_config_clientApp__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .onAuthStateChanged */ .Aj)(_firebase_config_clientApp__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, (currentUser)=>{
            currentUser && setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: {
            createUser,
            signIn,
            user,
            logout
        },
        children: children
    });
};
const UserAuth = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);
};


/***/ }),

/***/ 32933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src_theme)
});

// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(64085);
;// CONCATENATED MODULE: ./src/theme/MuiLink.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ const MuiLink = {
    defaultProp: {},
    styleOverrides: {
        root: ()=>({
                fontSize: "14px"
            })
    },
    variants: [
        {
            props: {
                variant: "button"
            },
            style: ({ theme })=>({
                    borderRadius: "5px",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                    padding: "10px 15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.main,
                        textDecoration: "none"
                    }
                })
        }
    ]
};
/* harmony default export */ const theme_MuiLink = (MuiLink);

;// CONCATENATED MODULE: ./src/theme/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

const theme = (0,node.createTheme)({
    palette: {
        primary: {
            main: "#4794d4",
            light: "#4396ca",
            dark: "#06063a"
        },
        secondary: {
            main: "#5a9628"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 1024,
            lg: 1200,
            xl: 1440
        }
    },
    spacing: 5,
    components: {
        MuiLink: theme_MuiLink
    }
});
/* harmony default export */ const src_theme = (theme);


/***/ }),

/***/ 59894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(46261);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(20741);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(17814);
;// CONCATENATED MODULE: ./src/theme/index.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Acer\Documents\Archiwum\IT\polish-footgolf-federation\src\theme\index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const theme = (__default__);
;// CONCATENATED MODULE: ./src/components/layout/main-navigation/MainNavigation.tsx

const MainNavigation_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Acer\Documents\Archiwum\IT\polish-footgolf-federation\src\components\layout\main-navigation\MainNavigation.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: MainNavigation_esModule, $$typeof: MainNavigation_$$typeof } = MainNavigation_proxy;
const MainNavigation_default_ = MainNavigation_proxy.default;

const e0 = MainNavigation_proxy["MainNavigation"];

;// CONCATENATED MODULE: ./src/components/layout/footer/Footer.tsx

const Footer_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Acer\Documents\Archiwum\IT\polish-footgolf-federation\src\components\layout\footer\Footer.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Footer_esModule, $$typeof: Footer_$$typeof } = Footer_proxy;
const Footer_default_ = Footer_proxy.default;

const Footer_e0 = Footer_proxy["Footer"];

;// CONCATENATED MODULE: ./src/context/auth-context.tsx

const auth_context_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Acer\Documents\Archiwum\IT\polish-footgolf-federation\src\context\auth-context.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: auth_context_esModule, $$typeof: auth_context_$$typeof } = auth_context_proxy;
const auth_context_default_ = auth_context_proxy.default;

const auth_context_e0 = auth_context_proxy["AuthContextProvider"];

const e1 = auth_context_proxy["UserAuth"];

;// CONCATENATED MODULE: ./src/app/layout.tsx
// CORE





// COMPONENTS


// CONTEXT

const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(styles.ThemeProvider, {
                theme: theme,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(auth_context_e0, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "modal-root"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(e0, {}),
                                children,
                                /*#__PURE__*/ jsx_runtime_.jsx(Footer_e0, {})
                            ]
                        })
                    ]
                })
            })
        })
    });
}


/***/ })

};
;