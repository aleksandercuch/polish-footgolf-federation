"use strict";
exports.id = 242;
exports.ids = [242];
exports.modules = {

/***/ 47242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ AddPost)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71031);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10555);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98495);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97454);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61631);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mui_file_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23506);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(64085);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_SportsSoccer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46929);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8120);
/* harmony import */ var _firebase_config_clientApp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21957);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25174);
/* __next_internal_client_entry_do_not_use__ AddPost auto */ 
// CORE






const DynamicEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(null, {
    loadableGenerated: {
        modules: [
            "C:\\Users\\Acer\\Documents\\Archiwum\\IT\\polish-footgolf-federation\\src\\components\\posts\\AddPost.tsx -> " + "react-draft-wysiwyg"
        ]
    },
    ssr: false
});
// ASSETES





//FIREBASE



const AddPost = ({ id, title, description, file, date })=>{
    const [editorState, setEditorState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(description ? draft_js__WEBPACK_IMPORTED_MODULE_2__.EditorState.createWithContent((0,draft_js__WEBPACK_IMPORTED_MODULE_2__.convertFromRaw)(description)) : draft_js__WEBPACK_IMPORTED_MODULE_2__.EditorState.createEmpty());
    const currentUser = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_3__.UserAuth)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .useForm */ .cI)({
        defaultValues: {
            title: title || "",
            description: description || "",
            file: undefined,
            date: date || new Date()
        }
    });
    const { control, handleSubmit, reset, formState: { isSubmitting, errors } } = form;
    const submitForm = (data)=>{
        if (id) {
            if (data.file) {
                const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__/* .ref */ .iH)(_firebase_config_clientApp__WEBPACK_IMPORTED_MODULE_9__/* .storage */ .tO, `postsImages/${data.file.name}`);
                console.log(1);
                (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__/* .uploadBytes */ .KV)(storageRef, data.file).then(async (snapshot)=>{
                    const downloadURL = data.file ? await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__/* .getDownloadURL */ .Jt)(snapshot.ref) : file;
                    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__/* .updateDoc */ .r7)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__/* .doc */ .JU)(_firebase_config_clientApp__WEBPACK_IMPORTED_MODULE_9__.db, "posts", id), {
                        title: data.title,
                        description: data.description,
                        file: downloadURL,
                        date: data.date
                    }).then(()=>{
                        alert("Edytowałeś post!");
                        router.replace("/");
                        router.refresh();
                        reset();
                    });
                }).catch((error)=>{
                    alert(error);
                });
            } else {
                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__/* .updateDoc */ .r7)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__/* .doc */ .JU)(_firebase_config_clientApp__WEBPACK_IMPORTED_MODULE_9__.db, "posts", id), {
                    title: data.title,
                    description: data.description,
                    file: file,
                    date: data.date
                }).then(()=>{
                    alert("Edytowałeś post!");
                    router.replace("/");
                    router.refresh();
                    reset();
                }).catch((error)=>{
                    alert(error);
                });
            }
        } else {
            const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__/* .ref */ .iH)(_firebase_config_clientApp__WEBPACK_IMPORTED_MODULE_9__/* .storage */ .tO, `postsImages/${data.file.name}`);
            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__/* .uploadBytes */ .KV)(storageRef, data.file).then(async (snapshot)=>{
                const downloadURL = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__/* .getDownloadURL */ .Jt)(snapshot.ref);
                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__/* .addDoc */ .ET)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__/* .collection */ .hJ)(_firebase_config_clientApp__WEBPACK_IMPORTED_MODULE_9__.db, "posts"), {
                    title: data.title,
                    description: data.description,
                    file: downloadURL,
                    date: data.date
                }).then(()=>{
                    alert("Dodałeś post!");
                    router.replace("/");
                    router.refresh();
                    reset();
                });
            }).catch((error)=>{
                alert(error);
            });
        }
    };
    const onEditorStateChange = (editorState)=>{
        setEditorState(editorState);
        const { blocks } = (0,draft_js__WEBPACK_IMPORTED_MODULE_2__.convertToRaw)(editorState.getCurrentContent());
        /*let text = blocks.reduce((acc, item) => {
      acc = acc + item.text;
      return acc;
    }, "");*/ let text = editorState.getCurrentContent().getPlainText("\x01");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
    // !currentUser?.user && redirect("/");
    }, [
        currentUser?.user
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.FormControl, {
        component: "form",
        onSubmit: handleSubmit(submitForm),
        disabled: isSubmitting,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .Controller */ .Qr, {
                name: "title",
                control: control,
                rules: {
                    required: "Podaj tytuł!"
                },
                render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.TextField, {
                        label: "Tytuł posta",
                        variant: "outlined",
                        autoComplete: "username",
                        size: "small",
                        type: "text",
                        error: Boolean(errors[field.name]),
                        helperText: errors[field.name]?.message,
                        fullWidth: true,
                        sx: {
                            mb: 3
                        },
                        ...field
                    })
            }),
            file && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Grid, {
                    container: true,
                    direction: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 5,
                    mb: 5,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Grid, {
                            item: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_SportsSoccer__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Grid, {
                            item: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                variant: "h5",
                                component: "h4",
                                sx: {
                                    textAlign: "center",
                                    padding: "0 10px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Obecny obraz"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Grid, {
                            item: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_SportsSoccer__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Grid, {
                            item: true,
                            xs: 12,
                            container: true,
                            justifyContent: "center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Grid, {
                                item: true,
                                xs: 3,
                                mt: 3,
                                mb: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: file,
                                    alt: "error occurs",
                                    style: {
                                        width: "100%"
                                    }
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .Controller */ .Qr, {
                name: "file",
                control: control,
                render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mui_file_input__WEBPACK_IMPORTED_MODULE_7__/* .MuiFileInput */ .z, {
                        inputProps: {
                            accept: ".png, .jpeg, .jpg"
                        },
                        ...field
                    })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .Controller */ .Qr, {
                name: "description",
                control: control,
                rules: {
                    required: "Podaj tytuł!"
                },
                render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicEditor, {
                        editorState: editorState,
                        toolbarClassName: "toolbarClassName",
                        wrapperClassName: "wrapperClassName",
                        editorClassName: "editorClassName",
                        onEditorStateChange: onEditorStateChange,
                        ...field
                    })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Button, {
                type: "submit",
                variant: "contained",
                size: "small",
                sx: {
                    mb: 5
                },
                disabled: isSubmitting,
                children: id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: "Edytuj post"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: "Dodaj post"
                })
            })
        ]
    });
};


/***/ })

};
;