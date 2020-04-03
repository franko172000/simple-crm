(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo0"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/CompanyProfile.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile/CompanyProfile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../repository/users/CompanyRepository */ "./resources/js/repository/users/CompanyRepository.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'user-profile',
  data: function data() {
    return {
      model: {
        email: '',
        name: '',
        contact_person: '',
        password: '',
        url: '',
        logo: '',
        user_id: ''
      },
      submitProgress: false,
      showremoveBtn: false,
      uploadImgProgress: false,
      logoSrc: null
    };
  },
  methods: {
    updateUser: function updateUser() {
      var _this = this;

      this.submitProgress = true;
      _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_0__["default"].updateCompany(this.model).then(function (res) {
        _this.getUser();

        _this.showModal = false;
        _this.submitProgress = false;

        _this.$notify({
          type: 'success',
          title: 'Profile updated successfully'
        });
      });
    },
    getUser: function getUser() {
      var _this2 = this;

      _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getProfile().then(function (res) {
        var user = res.data.data.user;
        _this2.model.name = user.name;
        _this2.model.contact_person = user.contact_person;
        _this2.model.email = user.email;
        _this2.model.user_id = user.companyid;
        _this2.model.url = user.url;
        _this2.model.logo = user.company_logo;
      });
    },
    triggerClick: function triggerClick() {
      this.$refs.filePic.click();
    },
    onSelectedPhoto: function onSelectedPhoto(e) {
      var _this3 = this;

      this.logoSrc = URL.createObjectURL(e.target.files[0]);
      var data = new FormData();
      data.append('logo', this.$refs.filePic.files[0]);
      this.uploadImgProgress = true;
      _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_0__["default"].uploadPhoto(data).then(function (res) {
        _this3.$notify({
          type: 'success',
          title: 'Logo updated successfully'
        });

        _this3.uploadImgProgress = false;
      });
    }
  },
  mounted: function mounted() {
    this.getUser();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/CompanyProfile.vue?vue&type=template&id=269cf271&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile/CompanyProfile.vue?vue&type=template&id=269cf271& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "header pb-8 pt-5 pt-lg-8 d-flex align-items-center",
          staticStyle: {
            "background-image": "url(img/theme/profile-cover.jpg)",
            "background-size": "cover",
            "background-position": "center top"
          }
        },
        [_c("span", { staticClass: "mask bg-gradient-success opacity-8" })]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xl-4 order-xl-2 mb-5 mb-xl-0" }, [
            _c("div", { staticClass: "card card-profile shadow" }, [
              _c("div", { staticClass: "row justify-content-center" }, [
                _c("div", { staticClass: "col-lg-3 order-lg-2" }, [
                  _c("div", { staticClass: "card-profile-image" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _vm.logoSrc !== null
                        ? _c("img", {
                            staticClass: "rounded-circle",
                            attrs: { src: _vm.logoSrc }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.logoSrc === null
                        ? _c("img", {
                            staticClass: "rounded-circle",
                            attrs: {
                              src:
                                _vm.model.logo === null
                                  ? "https://dummyimage.com/300.png/09f/fff"
                                  : "profile-pic/company/" + _vm.model.logo
                            }
                          })
                        : _vm._e()
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
                },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-content-between" },
                    [
                      _c(
                        "base-button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.showremoveBtn,
                              expression: "!showremoveBtn"
                            }
                          ],
                          staticClass: "mr-4",
                          attrs: { size: "sm", type: "info" },
                          on: { click: _vm.triggerClick }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.uploadImgProgress ? "Uploading..." : "Change"
                            )
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-8 order-xl-1" },
            [
              _c(
                "card",
                { attrs: { shadow: "", type: "secondary" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "bg-white border-0",
                      attrs: { slot: "header" },
                      slot: "header"
                    },
                    [
                      _c("div", { staticClass: "row align-items-center" }, [
                        _c("div", { staticClass: "col-8" }, [
                          _c("h3", { staticClass: "mb-0" }, [
                            _vm._v("My Profile")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4 text-right" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-sm btn-primary",
                              attrs: { href: "#!" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.updateUser($event)
                                }
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.submitProgress
                                    ? "Updating profile..."
                                    : "Update profile"
                                )
                              )
                            ]
                          )
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                          }
                        }
                      },
                      [
                        _c(
                          "h6",
                          { staticClass: "heading-small text-muted mb-4" },
                          [_vm._v("Company information")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pl-lg-4" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-12" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Name",
                                    placeholder: "Name",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "name", $$v)
                                    },
                                    expression: "model.name"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Contact Person",
                                    placeholder: "Contact Person",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.contact_person,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "contact_person", $$v)
                                    },
                                    expression: "model.contact_person"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Url",
                                    placeholder: "Url",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.url,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "url", $$v)
                                    },
                                    expression: "model.url"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Email",
                                    placeholder: "Email",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.email,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "email", $$v)
                                    },
                                    expression: "model.email"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Password",
                                    placeholder: "",
                                    type: "password",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.password,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "password", $$v)
                                    },
                                    expression: "model.password"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: false,
                              expression: "false"
                            }
                          ],
                          ref: "filePic",
                          attrs: { type: "file", name: "profile_photo" },
                          on: { change: _vm.onSelectedPhoto }
                        })
                      ]
                    )
                  ]
                ],
                2
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/misc/constants.js":
/*!****************************************!*\
  !*** ./resources/js/misc/constants.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
/* harmony default export */ __webpack_exports__["default"] = ({
  MAIN_SITE_URL: baseUrl
});

/***/ }),

/***/ "./resources/js/repository/users/CompanyRepository.js":
/*!************************************************************!*\
  !*** ./resources/js/repository/users/CompanyRepository.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ApiService */ "./resources/js/services/ApiService.js");

var resources = '/company/';
/* harmony default export */ __webpack_exports__["default"] = ({
  getCompanies: function getCompanies() {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].get(resources + 'get-all');
  },
  addCompany: function addCompany(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].post(resources + 'create', data);
  },
  updateCompany: function updateCompany(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].put(resources + 'update', data);
  },
  deleteCompany: function deleteCompany(id) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](resources + 'delete/' + id);
  },
  getProfile: function getProfile(id) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].get(resources + 'get-profile');
  },
  uploadPhoto: function uploadPhoto(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].post(resources + 'upload-logo', data);
  },
  getPublicCompanies: function getPublicCompanies() {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].get('public/get-companies');
  }
});

/***/ }),

/***/ "./resources/js/services/ApiService.js":
/*!*********************************************!*\
  !*** ./resources/js/services/ApiService.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TokenService */ "./resources/js/services/TokenService.js");
/* harmony import */ var _TokenService__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TokenService__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../misc/constants */ "./resources/js/misc/constants.js");



var api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _misc_constants__WEBPACK_IMPORTED_MODULE_2__["default"].MAIN_SITE_URL + "api/v1/",
  headers: {
    'Authorization': 'Bearer ' + _TokenService__WEBPACK_IMPORTED_MODULE_1___default.a.getAccessToken(),
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': _TokenService__WEBPACK_IMPORTED_MODULE_1___default.a.getCsrfToken()
  }
});
api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    window.location.href = './login';
  }

  return Promise.reject(error.response);
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./resources/js/views/profile/CompanyProfile.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/profile/CompanyProfile.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyProfile_vue_vue_type_template_id_269cf271___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyProfile.vue?vue&type=template&id=269cf271& */ "./resources/js/views/profile/CompanyProfile.vue?vue&type=template&id=269cf271&");
/* harmony import */ var _CompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyProfile.vue?vue&type=script&lang=js& */ "./resources/js/views/profile/CompanyProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyProfile_vue_vue_type_template_id_269cf271___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyProfile_vue_vue_type_template_id_269cf271___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/profile/CompanyProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/profile/CompanyProfile.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/profile/CompanyProfile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/CompanyProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/profile/CompanyProfile.vue?vue&type=template&id=269cf271&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/profile/CompanyProfile.vue?vue&type=template&id=269cf271& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_template_id_269cf271___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyProfile.vue?vue&type=template&id=269cf271& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/CompanyProfile.vue?vue&type=template&id=269cf271&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_template_id_269cf271___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_template_id_269cf271___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);