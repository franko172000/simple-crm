(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdminUsers.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AdminUsers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repository/users/AdminRepository */ "./resources/js/repository/users/AdminRepository.js");
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
  data: function data() {
    return {
      employees: [],
      users: [],
      title: 'Admin Users',
      model: {
        first_name: "",
        last_name: "",
        role: "",
        email: "",
        password: "",
        user_id: ""
      },
      showModal: false,
      editMode: false,
      submitProgress: false,
      showremoveBtn: false,
      logoSrc: null
    };
  },
  methods: {
    editUser: function editUser(row) {
      this.model.first_name = row.first_name;
      this.model.last_name = row.last_name;
      this.model.email = row.email;
      this.model.user_id = row.user_id;
      this.showModal = true;
      this.editMode = true;
    },
    closeForm: function closeForm() {
      this.showModal = false, this.editMode = this.editMode ? false : true;
    },
    getUsers: function getUsers() {
      var _this = this;

      _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getUsers().then(function (res) {
        _this.users = res.data.data.users;
      });
    },
    triggerUpload: function triggerUpload() {
      this.$refs.filePic.click();
    },
    onSelectedPhoto: function onSelectedPhoto(e) {
      this.logoSrc = URL.createObjectURL(e.target.files[0]);
      this.showremoveBtn = true;
    },
    removePhoto: function removePhoto() {
      this.showremoveBtn = false;
      this.logoSrc = null;
    },
    addUser: function addUser() {
      var _this2 = this;

      var data = new FormData();
      data.append('profile_logo', this.$refs.filePic.files[0]);

      for (var field in this.model) {
        data.append(field, this.model[field]);
      }

      this.submitProgress = true;
      _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_0__["default"].addUser(data).then(function (res) {
        _this2.getUsers();

        _this2.showModal = false;
        _this2.submitProgress = false;

        _this2.$notify({
          type: 'success',
          title: 'User added successfully'
        });
      })["catch"](function (err) {
        if (err.status === 422) {
          _this2.$notify({
            type: 'danger',
            title: err.data.message
          });
        }

        _this2.submitProgress = false;
      });
    },
    updateUser: function updateUser() {
      var _this3 = this;

      var data = new FormData();
      var file = this.$refs.filePic.files[0];
      this.submitProgress = true;
      _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_0__["default"].updateUser(this.model).then(function (res) {
        _this3.getUsers();

        _this3.showModal = false;
        _this3.submitProgress = false;
        _this3.model.first_name = "";
        _this3.model.last_name = "";
        _this3.model.email = "";
        _this3.model.user_id = "";
        _this3.showModal = false;
        _this3.editMode = false;

        _this3.$notify({
          type: 'success',
          title: 'User updated successfully'
        });
      });
    },
    deleteUser: function deleteUser(row) {
      var __this = this;

      this.$alertify.confirm('Delete user?', function () {
        _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_0__["default"].deleteUser(row.user_id).then(function (res) {
          var index = __this.users.indexOf(row);

          __this.users.splice(index, 1);

          __this.$notify({
            type: 'success',
            title: 'user deleted'
          });
        });
      });
    }
  },
  mounted: function mounted() {
    this.getUsers();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Company.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Company.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repository_users_EmployeeRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repository/users/EmployeeRepository */ "./resources/js/repository/users/EmployeeRepository.js");
/* harmony import */ var _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository/users/CompanyRepository */ "./resources/js/repository/users/CompanyRepository.js");
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
  data: function data() {
    return {
      employees: [],
      companies: [],
      title: 'Companies List',
      model: {
        name: "",
        contact_person: "",
        url: "",
        email: "",
        password: "",
        company: "",
        user_id: ""
      },
      showModal: false,
      editMode: false,
      submitProgress: false,
      showremoveBtn: false,
      logoSrc: null
    };
  },
  methods: {
    editCompany: function editCompany(row) {
      this.model.name = row.name;
      this.model.contact_person = row.contact_person;
      this.model.url = row.url;
      this.model.email = row.email;
      this.model.user_id = row.companyid;
      this.showModal = true;
      this.editMode = true;
    },
    getcompanies: function getcompanies() {
      var _this = this;

      _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_1__["default"].getCompanies().then(function (res) {
        _this.companies = res.data.data.companies;
      });
    },
    triggerUpload: function triggerUpload() {
      this.$refs.filePic.click();
    },
    onSelectedPhoto: function onSelectedPhoto(e) {
      this.logoSrc = URL.createObjectURL(e.target.files[0]);
      this.showremoveBtn = true;
    },
    removePhoto: function removePhoto() {
      this.showremoveBtn = false;
      this.logoSrc = null;
    },
    closeForm: function closeForm() {
      this.showModal = false, this.editMode = this.editMode ? false : true;
    },
    addCompany: function addCompany() {
      var _this2 = this;

      var data = new FormData();
      data.append('logo', this.$refs.filePic.files[0]);

      for (var field in this.model) {
        data.append(field, this.model[field]);
      }

      this.submitProgress = true;
      _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_1__["default"].addCompany(data).then(function (res) {
        _this2.getcompanies();

        _this2.showModal = false;
        _this2.submitProgress = false;

        _this2.$notify({
          type: 'success',
          title: 'Company added successfully'
        });
      })["catch"](function (err) {
        if (err.status === 422) {
          _this2.$notify({
            type: 'danger',
            title: err.data.message
          });
        }

        _this2.submitProgress = false;
      });
    },
    updateCompany: function updateCompany() {
      var _this3 = this;

      var data = new FormData();
      var file = this.$refs.filePic.files[0];

      if (file !== undefined) {
        data.append('profile_image', this.$refs.filePic.files[0]);

        for (var field in this.model) {
          data.append(field, this.model[field]);
        }
      } else {
        data = this.model;
      }

      this.submitProgress = true;
      _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_1__["default"].updateCompany(data).then(function (res) {
        _this3.getcompanies();

        _this3.showModal = false;
        _this3.submitProgress = false;
        _this3.model.name = "";
        _this3.model.contact_person = "";
        _this3.model.url = "";
        _this3.model.email = "";
        _this3.model.user_id = "";
        _this3.showModal = false;
        _this3.editMode = false;

        _this3.$notify({
          type: 'success',
          title: 'Company updated successfully'
        });
      });
    },
    deleteCompany: function deleteCompany(row) {
      var __this = this;

      this.$alertify.confirm('Delete company?', function () {
        _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_1__["default"].deleteCompany(row.companyid).then(function (res) {
          var index = __this.companies.indexOf(row);

          __this.companies.splice(index, 1);

          __this.$notify({
            type: 'success',
            title: 'Company deleted'
          });
        });
      });
    }
  },
  mounted: function mounted() {
    this.getcompanies();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repository_users_UserRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repository/users/UserRepository */ "./resources/js/repository/users/UserRepository.js");
/* harmony import */ var _repository_users_EmployeeRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository/users/EmployeeRepository */ "./resources/js/repository/users/EmployeeRepository.js");
/* harmony import */ var _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository/users/AdminRepository */ "./resources/js/repository/users/AdminRepository.js");
/* harmony import */ var _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../repository/users/CompanyRepository */ "./resources/js/repository/users/CompanyRepository.js");
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
  data: function data() {
    return {
      employee: 0,
      companies: 0,
      users: 0,
      admin_users: 0
    };
  },
  methods: {},
  mounted: function mounted() {
    var _this = this;

    _repository_users_EmployeeRepository__WEBPACK_IMPORTED_MODULE_1__["default"].getEmployee().then(function (res) {
      _this.employee = res.data.data.employees.length;
    });
    _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getUsers().then(function (res) {
      _this.admin_users = res.data.data.users.length;
    });
    _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_3__["default"].getCompanies().then(function (res) {
      _this.companies = res.data.data.companies.length;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Employee.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Employee.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repository_users_EmployeeRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repository/users/EmployeeRepository */ "./resources/js/repository/users/EmployeeRepository.js");
/* harmony import */ var _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository/users/CompanyRepository */ "./resources/js/repository/users/CompanyRepository.js");
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
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      employees: [],
      companies: [],
      title: 'Employee List',
      model: {
        first_name: "",
        last_name: "",
        company_id: "",
        email: "",
        password: "",
        company: "",
        user_id: ""
      },
      showModal: false,
      editMode: false,
      submitProgress: false
    };
  },
  methods: {
    getEmployee: function getEmployee() {
      var _this = this;

      _repository_users_EmployeeRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getEmployee().then(function (res) {
        _this.employees = res.data.data.employees;
      });
    },
    closeForm: function closeForm() {
      this.showModal = false, this.editMode = this.editMode ? false : true;
    },
    editEmployee: function editEmployee(row) {
      this.model.first_name = row.first_name;
      this.model.last_name = row.last_name;
      this.model.email = row.email;
      this.model.user_id = row.user_id;
      this.model.company_id = row.company_id;
      this.showModal = true;
      this.editMode = true;
    },
    getcompanies: function getcompanies() {
      var _this2 = this;

      _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_1__["default"].getCompanies().then(function (res) {
        _this2.companies = res.data.data.companies;
      });
    },
    addEmployee: function addEmployee() {
      var _this3 = this;

      console.log(this.model);
      var data = new FormData();
      data.append('profile_image', this.$refs.filePic.files[0]);

      for (var field in this.model) {
        data.append(field, this.model[field]);
      }

      this.submitProgress = true;
      _repository_users_EmployeeRepository__WEBPACK_IMPORTED_MODULE_0__["default"].addEmployee(data).then(function (res) {
        _this3.getEmployee();

        _this3.showModal = false;
        _this3.submitProgress = false;

        _this3.$notify({
          type: 'success',
          title: 'Employee added successfully'
        });
      })["catch"](function (err) {
        if (err.status === 422) {
          _this3.$notify({
            type: 'danger',
            title: err.data.message
          });
        }

        _this3.submitProgress = false;
      });
    },
    updateEmployee: function updateEmployee() {
      var _this4 = this;

      var data = new FormData();
      var file = this.$refs.filePic.files[0];
      this.submitProgress = true;
      _repository_users_EmployeeRepository__WEBPACK_IMPORTED_MODULE_0__["default"].updateEmployee(this.model).then(function (res) {
        _this4.getEmployee();

        _this4.showModal = false;
        _this4.submitProgress = false;
        _this4.model.first_name = "";
        _this4.model.last_name = "";
        _this4.model.email = "";
        _this4.model.user_id = "";
        _this4.model.company_id = "";
        _this4.showModal = false;
        _this4.editMode = false;

        _this4.$notify({
          type: 'success',
          title: 'Employee updated successfully'
        });
      });
    },
    deleteEmployee: function deleteEmployee(row) {
      var __this = this;

      this.$alertify.confirm('Delete employee?', function () {
        _repository_users_EmployeeRepository__WEBPACK_IMPORTED_MODULE_0__["default"].deleteEmployee(row.user_id).then(function (res) {
          var index = __this.employees.indexOf(row);

          __this.employees.splice(index, 1);

          __this.$notify({
            type: 'success',
            title: 'Employee deleted'
          });
        });
      });
    }
  },
  mounted: function mounted() {
    this.getEmployee();
    this.getcompanies();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repository/users/CompanyRepository */ "./resources/js/repository/users/CompanyRepository.js");
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
  data: function data() {
    return {
      companies: [],
      title: 'Company List'
    };
  },
  methods: {
    getcompanies: function getcompanies() {
      var _this = this;

      _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getPublicCompanies().then(function (res) {
        _this.companies = res.data.data.companies;
      });
    }
  },
  mounted: function mounted() {
    this.getcompanies();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repository_users_UserRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repository/users/UserRepository */ "./resources/js/repository/users/UserRepository.js");
/* harmony import */ var _services_TokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/TokenService */ "./resources/js/services/TokenService.js");
/* harmony import */ var _services_TokenService__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_services_TokenService__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins_ToastF__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins/ToastF */ "./resources/js/plugins/ToastF.js");
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
  name: 'login',
  data: function data() {
    return {
      model: {
        email: '',
        password: ''
      },
      buttonText: "Sign in"
    };
  },
  methods: {
    loginUser: function loginUser() {
      var _this = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          _this.buttonText = "Loggin in...";
          _repository_users_UserRepository__WEBPACK_IMPORTED_MODULE_0__["default"].login(_this.model).then(function (res) {
            _this.buttonText = "Sign in";
            var userData = res.data.data.user;
            _services_TokenService__WEBPACK_IMPORTED_MODULE_1___default.a.setUserData({
              name: userData.name,
              acct_type: userData.acct_type
            });
            _services_TokenService__WEBPACK_IMPORTED_MODULE_1___default.a.setAccessToken(res.data.data.token);
            Object(_plugins_ToastF__WEBPACK_IMPORTED_MODULE_2__["default"])({
              message: "Login successful",
              type: 'success',
              animation: 'slide'
            });

            if (userData.acct_type === "admin") {
              window.location.href = "./";
            } else {
              window.location.href = "./profile"; //this.$router.push('./profile')
            }
          })["catch"](function (err) {
            if (err.status === 404) {
              Object(_plugins_ToastF__WEBPACK_IMPORTED_MODULE_2__["default"])({
                message: "Account not found",
                type: 'danger',
                animation: 'slide'
              });
            }

            if (err.status === 401) {
              Object(_plugins_ToastF__WEBPACK_IMPORTED_MODULE_2__["default"])({
                message: "Invalid login",
                type: 'danger',
                animation: 'slide'
              });
            }

            _this.buttonText = "Sign in";
          });
        }
      });
    },
    customValidator: function customValidator() {
      return {
        custom: {
          email: {
            required: "Please enter email"
          },
          password: {
            required: "Please enter password"
          }
        }
      };
    }
  },
  mounted: function mounted() {
    //initilaize the validator
    this.$validator.localize('en', this.customValidator());
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.bg-light[data-v-63cd6604] {\r\n    background-color: #e9ecef !important;\n}\n.display-3[data-v-63cd6604]{\r\n    color: white;\n}\n.jumbotron[data-v-63cd6604] {\r\n    color: white;\r\n\tbackground-color: #be70dc;\r\n\tborder-radius: 0.4375rem;\n}\n.navbar-brand-img[data-v-63cd6604] {\r\n    width: 60px;\r\n    height: 50px;\n}\n.btn-primary[data-v-63cd6604]:hover {\r\n\tcolor: #fff;\r\n\tbackground-color: #be70dc;\r\n\tborder-color: #be70dc;\n}\n.btn-primary[data-v-63cd6604] {\r\n\tcolor: #fff;\r\n\tbackground-color: #be70dc;\r\n\tborder-color: #be70dc;\r\n\tbox-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.navbar-dark .navbar-nav .nav-link[data-v-63cd6604] {\r\n\tcolor: rgb(14, 13, 13);\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Login.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.is_invalid{\n    font-size: 11px;\n    color: red;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Login.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdminUsers.vue?vue&type=template&id=7a092450&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AdminUsers.vue?vue&type=template&id=7a092450& ***!
  \********************************************************************************************************************************************************************************************************/
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
      _c("base-header", {
        staticClass: "pb-6 pb-8 pt-5 pt-md-8",
        attrs: { type: "gradient-success" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("div", { staticClass: "card shadow" }, [
              _c("div", { staticClass: "card-header border-0" }, [
                _c("div", { staticClass: "row align-items-center" }, [
                  _c("div", { staticClass: "col" }, [
                    _c("h3", { staticClass: "mb-0" }, [
                      _vm._v(
                        "\n                          " +
                          _vm._s(_vm.title) +
                          "\n                        "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col text-right" },
                    [
                      _c(
                        "base-button",
                        {
                          attrs: { type: "primary", size: "sm" },
                          on: {
                            click: function($event) {
                              _vm.showModal = true
                            }
                          }
                        },
                        [_vm._v("Add Users")]
                      )
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "table-responsive" },
                [
                  _c(
                    "base-table",
                    {
                      staticClass: "table align-items-center table-flush",
                      attrs: {
                        "thead-classes": "thead-light",
                        "tbody-classes": "list",
                        data: _vm.users
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(ref) {
                            var row = ref.row
                            return [
                              _c("th", { attrs: { scope: "row" } }, [
                                _c(
                                  "div",
                                  { staticClass: "media align-items-center" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "avatar rounded-circle mr-3",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            alt: "Image placeholder",
                                            src: row.profile_photo
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "media-body" }, [
                                      _c(
                                        "span",
                                        { staticClass: "name mb-0 text-sm" },
                                        [_vm._v(_vm._s(row.first_name))]
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "budget" }, [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(row.last_name) +
                                    "\n                              "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "badge",
                                    { staticClass: "badge-dot mr-4" },
                                    [
                                      _c("span", { staticClass: "status" }, [
                                        _vm._v(_vm._s(row.role))
                                      ])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "badge",
                                    { staticClass: "badge-dot mr-4" },
                                    [
                                      _c("span", { staticClass: "status" }, [
                                        _vm._v(_vm._s(row.email))
                                      ])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "text-right" },
                                [
                                  _c(
                                    "base-button",
                                    {
                                      attrs: { type: "primary", size: "sm" },
                                      on: {
                                        click: function($event) {
                                          return _vm.editUser(row)
                                        }
                                      }
                                    },
                                    [_vm._v("Edit")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "base-button",
                                    {
                                      attrs: { type: "danger", size: "sm" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteUser(row)
                                        }
                                      }
                                    },
                                    [_vm._v("Delete")]
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    },
                    [
                      _c("template", { slot: "columns" }, [
                        _c("th", [_vm._v("First name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Last name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Role")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Email")]),
                        _vm._v(" "),
                        _c("th")
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("modal", { attrs: { show: _vm.showModal } }, [
        _c("h2", { staticClass: "text-center" }, [
          _vm._v(_vm._s(_vm.editMode ? "Edit User" : "Add User"))
        ]),
        _vm._v(" "),
        _c(
          "form",
          { attrs: { role: "form" } },
          [
            _c("base-input", {
              staticClass: "input-group-alternative mb-3",
              attrs: { placeholder: "First name" },
              model: {
                value: _vm.model.first_name,
                callback: function($$v) {
                  _vm.$set(_vm.model, "first_name", $$v)
                },
                expression: "model.first_name"
              }
            }),
            _vm._v(" "),
            _c("base-input", {
              staticClass: "input-group-alternative mb-3",
              attrs: { placeholder: "Last name" },
              model: {
                value: _vm.model.last_name,
                callback: function($$v) {
                  _vm.$set(_vm.model, "last_name", $$v)
                },
                expression: "model.last_name"
              }
            }),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.model.role,
                    expression: "model.role"
                  }
                ],
                staticClass: "form-control mt-2",
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.model,
                      "role",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("Select role")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "admin" } }, [_vm._v("Admin")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "sub-admin" } }, [
                  _vm._v("Sub Admin")
                ])
              ]
            ),
            _vm._v(" "),
            _c("base-input", {
              staticClass: "input-group-alternative mb-3",
              attrs: { placeholder: "Email" },
              model: {
                value: _vm.model.email,
                callback: function($$v) {
                  _vm.$set(_vm.model, "email", $$v)
                },
                expression: "model.email"
              }
            }),
            _vm._v(" "),
            _c("base-input", {
              staticClass: "input-group-alternative",
              attrs: { placeholder: "Password", type: "password" },
              model: {
                value: _vm.model.password,
                callback: function($$v) {
                  _vm.$set(_vm.model, "password", $$v)
                },
                expression: "model.password"
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.editMode,
                    expression: "!editMode"
                  }
                ],
                staticClass: "text-muted mt-2"
              },
              [
                _c("div", { staticClass: "media align-items-center" }, [
                  _c(
                    "a",
                    {
                      staticClass: "avatar rounded-circle mr-3",
                      attrs: { href: "#" }
                    },
                    [_c("img", { attrs: { alt: "logo", src: _vm.logoSrc } })]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "media-body" },
                    [
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
                      }),
                      _vm._v(" "),
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
                          staticClass: "my-4 btn-sm",
                          attrs: { type: "info" },
                          on: { click: _vm.triggerUpload }
                        },
                        [_vm._v("Select Logo")]
                      ),
                      _vm._v(" "),
                      _c(
                        "base-button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showremoveBtn,
                              expression: "showremoveBtn"
                            }
                          ],
                          staticClass: "my-4 btn-sm",
                          attrs: { type: "danger" },
                          on: { click: _vm.removePhoto }
                        },
                        [_vm._v("Remove Logo")]
                      )
                    ],
                    1
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-center" },
              [
                _c(
                  "base-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.editMode,
                        expression: "editMode"
                      }
                    ],
                    staticClass: "my-4",
                    attrs: { type: "primary" },
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
                        _vm.submitProgress ? "Updating users..." : "Update User"
                      )
                    )
                  ]
                ),
                _c("br"),
                _vm._v(" "),
                _c(
                  "base-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.editMode,
                        expression: "!editMode"
                      }
                    ],
                    staticClass: "my-4",
                    attrs: { type: "primary" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.addUser($event)
                      }
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.submitProgress ? "Adding users..." : "Create User"
                      )
                    )
                  ]
                ),
                _c("br"),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.closeForm($event)
                      }
                    }
                  },
                  [_vm._v("Close form")]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Company.vue?vue&type=template&id=06576ba4&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Company.vue?vue&type=template&id=06576ba4& ***!
  \*****************************************************************************************************************************************************************************************************/
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
      _c("base-header", {
        staticClass: "pb-6 pb-8 pt-5 pt-md-8",
        attrs: { type: "gradient-success" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("div", { staticClass: "card shadow" }, [
              _c("div", { staticClass: "card-header border-0" }, [
                _c("div", { staticClass: "row align-items-center" }, [
                  _c("div", { staticClass: "col" }, [
                    _c("h3", { staticClass: "mb-0" }, [
                      _vm._v(
                        "\n                          " +
                          _vm._s(_vm.title) +
                          "\n                        "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col text-right" },
                    [
                      _c(
                        "base-button",
                        {
                          attrs: { type: "primary", size: "sm" },
                          on: {
                            click: function($event) {
                              _vm.showModal = true
                            }
                          }
                        },
                        [_vm._v("Add Company")]
                      )
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "table-responsive" },
                [
                  _c(
                    "base-table",
                    {
                      staticClass: "table align-items-center table-flush",
                      attrs: {
                        "thead-classes": "thead-light",
                        "tbody-classes": "list",
                        data: _vm.companies
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(ref) {
                            var row = ref.row
                            return [
                              _c("th", { attrs: { scope: "row" } }, [
                                _c(
                                  "div",
                                  { staticClass: "media align-items-center" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "avatar rounded-circle mr-3",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            alt: "Image placeholder",
                                            src: row.company_logo
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "media-body" }, [
                                      _c(
                                        "span",
                                        { staticClass: "name mb-0 text-sm" },
                                        [_vm._v(_vm._s(row.name))]
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "budget" }, [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(row.contact_person) +
                                    "\n                              "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "badge",
                                    { staticClass: "badge-dot mr-4" },
                                    [
                                      _c("span", { staticClass: "status" }, [
                                        _vm._v(_vm._s(row.url))
                                      ])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "badge",
                                    { staticClass: "badge-dot mr-4" },
                                    [
                                      _c("span", { staticClass: "status" }, [
                                        _vm._v(_vm._s(row.employee_count))
                                      ])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "badge",
                                    { staticClass: "badge-dot mr-4" },
                                    [
                                      _c("span", { staticClass: "status" }, [
                                        _vm._v(_vm._s(row.email))
                                      ])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "text-right" },
                                [
                                  _c(
                                    "base-button",
                                    {
                                      attrs: { type: "primary", size: "sm" },
                                      on: {
                                        click: function($event) {
                                          return _vm.editCompany(row)
                                        }
                                      }
                                    },
                                    [_vm._v("Edit")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "base-button",
                                    {
                                      attrs: { type: "danger", size: "sm" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteCompany(row)
                                        }
                                      }
                                    },
                                    [_vm._v("Delete")]
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    },
                    [
                      _c("template", { slot: "columns" }, [
                        _c("th", [_vm._v("comapny name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Contact Person")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Url")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Employees")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Email")]),
                        _vm._v(" "),
                        _c("th")
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("modal", { attrs: { show: _vm.showModal } }, [
        _c("h2", { staticClass: "text-center" }, [
          _vm._v(_vm._s(_vm.editMode ? "Edit Company" : "Add Company"))
        ]),
        _vm._v(" "),
        _c(
          "form",
          { attrs: { role: "form" } },
          [
            _c("base-input", {
              staticClass: "input-group-alternative mb-3",
              attrs: { placeholder: "Company name" },
              model: {
                value: _vm.model.name,
                callback: function($$v) {
                  _vm.$set(_vm.model, "name", $$v)
                },
                expression: "model.name"
              }
            }),
            _vm._v(" "),
            _c("base-input", {
              staticClass: "input-group-alternative mb-3",
              attrs: { placeholder: "Contact person" },
              model: {
                value: _vm.model.contact_person,
                callback: function($$v) {
                  _vm.$set(_vm.model, "contact_person", $$v)
                },
                expression: "model.contact_person"
              }
            }),
            _vm._v(" "),
            _c("base-input", {
              staticClass: "input-group-alternative mb-3",
              attrs: { placeholder: "Website URL" },
              model: {
                value: _vm.model.url,
                callback: function($$v) {
                  _vm.$set(_vm.model, "url", $$v)
                },
                expression: "model.url"
              }
            }),
            _vm._v(" "),
            _c("base-input", {
              staticClass: "input-group-alternative mb-3",
              attrs: { placeholder: "Email" },
              model: {
                value: _vm.model.email,
                callback: function($$v) {
                  _vm.$set(_vm.model, "email", $$v)
                },
                expression: "model.email"
              }
            }),
            _vm._v(" "),
            _c("base-input", {
              staticClass: "input-group-alternative",
              attrs: { placeholder: "Password", type: "password" },
              model: {
                value: _vm.model.password,
                callback: function($$v) {
                  _vm.$set(_vm.model, "password", $$v)
                },
                expression: "model.password"
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.editMode,
                    expression: "!editMode"
                  }
                ],
                staticClass: "text-muted mt-2"
              },
              [
                _c("div", { staticClass: "media align-items-center" }, [
                  _c(
                    "a",
                    {
                      staticClass: "avatar rounded-circle mr-3",
                      attrs: { href: "#" }
                    },
                    [_c("img", { attrs: { alt: "logo", src: _vm.logoSrc } })]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "media-body" },
                    [
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
                        attrs: { type: "file", name: "company_photo" },
                        on: { change: _vm.onSelectedPhoto }
                      }),
                      _vm._v(" "),
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
                          staticClass: "my-4 btn-sm",
                          attrs: { type: "info" },
                          on: { click: _vm.triggerUpload }
                        },
                        [_vm._v("Select Logo")]
                      ),
                      _vm._v(" "),
                      _c(
                        "base-button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showremoveBtn,
                              expression: "showremoveBtn"
                            }
                          ],
                          staticClass: "my-4 btn-sm",
                          attrs: { type: "danger" },
                          on: { click: _vm.removePhoto }
                        },
                        [_vm._v("Remove Logo")]
                      )
                    ],
                    1
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-center" },
              [
                _c(
                  "base-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.editMode,
                        expression: "editMode"
                      }
                    ],
                    staticClass: "my-4",
                    attrs: { type: "primary" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.updateCompany($event)
                      }
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.submitProgress
                          ? "Updating company..."
                          : "Update Company"
                      )
                    )
                  ]
                ),
                _c("br"),
                _vm._v(" "),
                _c(
                  "base-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.editMode,
                        expression: "!editMode"
                      }
                    ],
                    staticClass: "my-4",
                    attrs: { type: "primary" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.addCompany($event)
                      }
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.submitProgress
                          ? "Adding company..."
                          : "Create Company"
                      )
                    )
                  ]
                ),
                _c("br"),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.closeForm($event)
                      }
                    }
                  },
                  [_vm._v("Close form")]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*******************************************************************************************************************************************************************************************************/
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
          staticClass: "pb-6 pb-8 pt-5 pt-md-8",
          attrs: { type: "gradient-success" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c("stats-card", {
                  staticClass: "mb-4 mb-xl-0",
                  attrs: {
                    title: "Companies",
                    type: "gradient-orange",
                    "sub-title": "" + _vm.companies,
                    icon: "ni ni-chart-pie-35"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c("stats-card", {
                  staticClass: "mb-4 mb-xl-0",
                  attrs: {
                    title: "Employees",
                    type: "gradient-green",
                    "sub-title": "" + _vm.employee,
                    icon: "ni ni-money-coins"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c("stats-card", {
                  staticClass: "mb-4 mb-xl-0",
                  attrs: {
                    title: "Admin Users",
                    type: "gradient-info",
                    "sub-title": "" + _vm.admin_users,
                    icon: "ni ni-circle-08"
                  }
                })
              ],
              1
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Employee.vue?vue&type=template&id=37d83866&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Employee.vue?vue&type=template&id=37d83866& ***!
  \******************************************************************************************************************************************************************************************************/
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
      _c("base-header", {
        staticClass: "pb-6 pb-8 pt-5 pt-md-8",
        attrs: { type: "gradient-success" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("div", { staticClass: "card shadow" }, [
              _c("div", { staticClass: "card-header border-0" }, [
                _c("div", { staticClass: "row align-items-center" }, [
                  _c("div", { staticClass: "col" }, [
                    _c("h3", { staticClass: "mb-0" }, [
                      _vm._v(
                        "\n                          " +
                          _vm._s(_vm.title) +
                          "\n                        "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col text-right" },
                    [
                      _c(
                        "base-button",
                        {
                          attrs: { type: "primary", size: "sm" },
                          on: {
                            click: function($event) {
                              _vm.showModal = true
                            }
                          }
                        },
                        [_vm._v("Add Employee")]
                      )
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "table-responsive" },
                [
                  _c(
                    "base-table",
                    {
                      staticClass: "table align-items-center table-flush",
                      attrs: {
                        "thead-classes": "thead-light",
                        "tbody-classes": "list",
                        data: _vm.employees
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(ref) {
                            var row = ref.row
                            return [
                              _c("th", { attrs: { scope: "row" } }, [
                                _c(
                                  "div",
                                  { staticClass: "media align-items-center" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "avatar rounded-circle mr-3",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            alt: "Image placeholder",
                                            src: row.profile_photo
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "media-body" }, [
                                      _c(
                                        "span",
                                        { staticClass: "name mb-0 text-sm" },
                                        [_vm._v(_vm._s(row.first_name))]
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "budget" }, [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(row.last_name) +
                                    "\n                              "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "badge",
                                    {
                                      staticClass: "badge-dot mr-4",
                                      attrs: { type: row.statusType }
                                    },
                                    [
                                      _c("i", {
                                        class: "bg-" + row.statusType
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "status" }, [
                                        _vm._v(_vm._s(row.company_name))
                                      ])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "text-right" },
                                [
                                  _c(
                                    "base-button",
                                    {
                                      attrs: { type: "primary", size: "sm" },
                                      on: {
                                        click: function($event) {
                                          return _vm.editEmployee(row)
                                        }
                                      }
                                    },
                                    [_vm._v("Edit")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "base-button",
                                    {
                                      attrs: { type: "danger", size: "sm" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteEmployee(row)
                                        }
                                      }
                                    },
                                    [_vm._v("Delete")]
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    },
                    [
                      _c("template", { slot: "columns" }, [
                        _c("th", [_vm._v("First name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Last name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Company")]),
                        _vm._v(" "),
                        _c("th")
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("modal", { attrs: { show: _vm.showModal } }, [
        _c("h2", { staticClass: "text-center" }, [
          _vm._v(_vm._s(_vm.editMode ? "Edit Employee" : "Add Employee"))
        ]),
        _vm._v(" "),
        _c(
          "form",
          { attrs: { role: "form" } },
          [
            _c("base-input", {
              staticClass: "input-group-alternative mb-3",
              attrs: { placeholder: "First name" },
              model: {
                value: _vm.model.first_name,
                callback: function($$v) {
                  _vm.$set(_vm.model, "first_name", $$v)
                },
                expression: "model.first_name"
              }
            }),
            _vm._v(" "),
            _c("base-input", {
              staticClass: "input-group-alternative mb-3",
              attrs: { placeholder: "Last name" },
              model: {
                value: _vm.model.last_name,
                callback: function($$v) {
                  _vm.$set(_vm.model, "last_name", $$v)
                },
                expression: "model.last_name"
              }
            }),
            _vm._v(" "),
            _c("base-input", {
              staticClass: "input-group-alternative mb-3",
              attrs: { placeholder: "Email" },
              model: {
                value: _vm.model.email,
                callback: function($$v) {
                  _vm.$set(_vm.model, "email", $$v)
                },
                expression: "model.email"
              }
            }),
            _vm._v(" "),
            _c("base-input", {
              staticClass: "input-group-alternative",
              attrs: { placeholder: "Password", type: "password" },
              model: {
                value: _vm.model.password,
                callback: function($$v) {
                  _vm.$set(_vm.model, "password", $$v)
                },
                expression: "model.password"
              }
            }),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.model.company_id,
                    expression: "model.company_id"
                  }
                ],
                staticClass: "form-control",
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.model,
                      "company_id",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [
                  _vm._v("Select company")
                ]),
                _vm._v(" "),
                _vm._l(_vm.companies, function(company, index) {
                  return _c(
                    "option",
                    { key: index, domProps: { value: company.companyid } },
                    [_vm._v(_vm._s(company.name))]
                  )
                })
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.editMode,
                    expression: "!editMode"
                  }
                ],
                staticClass: "text-muted mt-2"
              },
              [
                _c("p", [_vm._v("Photo")]),
                _vm._v(" "),
                _c("input", {
                  ref: "filePic",
                  attrs: { type: "file", name: "employee_photo" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-center" },
              [
                _c(
                  "base-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.editMode,
                        expression: "editMode"
                      }
                    ],
                    staticClass: "my-4",
                    attrs: { type: "primary" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.updateEmployee($event)
                      }
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.submitProgress
                          ? "Updating employee..."
                          : "Update Employee"
                      )
                    )
                  ]
                ),
                _c("br"),
                _vm._v(" "),
                _c(
                  "base-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.editMode,
                        expression: "!editMode"
                      }
                    ],
                    staticClass: "my-4",
                    attrs: { type: "primary" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.addEmployee($event)
                      }
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.submitProgress
                          ? "Adding employee..."
                          : "Create Employee"
                      )
                    )
                  ]
                ),
                _c("br"),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.closeForm($event)
                      }
                    }
                  },
                  [_vm._v("Close form")]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "nav",
      { staticClass: "navbar navbar-expand-lg navbar-dark bg-light fixed-top" },
      [
        _c("div", { staticClass: "container" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse",
              attrs: { id: "navbarResponsive" }
            },
            [
              _c("ul", { staticClass: "navbar-nav ml-auto" }, [
                _c(
                  "li",
                  { staticClass: "nav-item active" },
                  [
                    _c(
                      "router-link",
                      { staticClass: "nav-link", attrs: { to: "/login" } },
                      [
                        _vm._v("Login\r\n              "),
                        _c("span", { staticClass: "sr-only" }, [
                          _vm._v("(current)")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ])
            ]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _vm._m(2),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row text-center" },
        _vm._l(_vm.companies, function(company, index) {
          return _c(
            "div",
            { key: index, staticClass: "col-lg-3 col-md-6 mb-4" },
            [
              _c("div", { staticClass: "card h-100" }, [
                _c("img", {
                  staticClass: "card-img-top",
                  staticStyle: { width: "80%", margin: "auto" },
                  attrs: { src: company.company_logo }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("h4", { staticClass: "card-title" }, [
                    _vm._v(_vm._s(company.name))
                  ])
                ]),
                _vm._v(" "),
                _vm._m(3, true)
              ])
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c("a", { staticClass: "btn btn-sm btn-primary", attrs: { href: "#" } }, [
        _vm._v("Prev")
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "btn btn-sm btn-primary", attrs: { href: "#" } }, [
        _vm._v("Next")
      ])
    ]),
    _vm._v(" "),
    _vm._m(4)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "navbar-brand", attrs: { href: "#" } }, [
      _c("img", {
        staticClass: "navbar-brand-img",
        attrs: { src: "img/crmLogo.png", alt: "..." }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarResponsive",
          "aria-controls": "navbarResponsive",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "header",
      { staticClass: "jumbotron ", staticStyle: { "margin-top": "7em" } },
      [
        _c(
          "h1",
          { staticClass: "display-3", staticStyle: { color: "#ffffff" } },
          [_vm._v("Welcome to CRM ")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c("a", { staticClass: "btn btn-primary", attrs: { href: "#" } }, [
        _vm._v("View More")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "py-5 bg-dark" }, [
      _c("div", { staticClass: "container" }, [
        _c("p", { staticClass: "m-0 text-center text-white" }, [
          _vm._v("Copyright © CRM")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login.vue?vue&type=template&id=12f5395a&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Login.vue?vue&type=template&id=12f5395a& ***!
  \***************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row justify-content-center" }, [
    _c("div", { staticClass: "col-lg-5 col-md-7" }, [
      _c("div", { staticClass: "card bg-secondary shadow border-0" }, [
        _c("div", { staticClass: "card-body px-lg-5 py-lg-5" }, [
          _c(
            "form",
            { attrs: { role: "form" } },
            [
              _c("base-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required|email",
                    expression: "'required|email'"
                  }
                ],
                staticClass: "input-group-alternative mb-3",
                class: { "is-invalid": _vm.errors.has("email") },
                attrs: {
                  placeholder: "Email",
                  "addon-left-icon": "ni ni-email-83",
                  name: "email"
                },
                model: {
                  value: _vm.model.email,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "email", $$v)
                  },
                  expression: "model.email"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("email"),
                      expression: "errors.has('email')"
                    }
                  ],
                  staticClass: "is_invalid"
                },
                [_vm._v(_vm._s(_vm.errors.first("email")))]
              ),
              _vm._v(" "),
              _c("base-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "input-group-alternative",
                class: { "is-invalid": _vm.errors.has("password") },
                attrs: {
                  placeholder: "Password",
                  type: "password",
                  "addon-left-icon": "ni ni-lock-circle-open",
                  name: "password"
                },
                model: {
                  value: _vm.model.password,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "password", $$v)
                  },
                  expression: "model.password"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("password"),
                      expression: "errors.has('password')"
                    }
                  ],
                  staticClass: "is_invalid"
                },
                [_vm._v(_vm._s(_vm.errors.first("password")))]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center" },
                [
                  _c(
                    "base-button",
                    {
                      staticClass: "my-4",
                      attrs: { type: "primary" },
                      on: { click: _vm.loginUser }
                    },
                    [_vm._v(_vm._s(_vm.buttonText))]
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
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

/***/ "./resources/js/plugins/ToastF.js":
/*!****************************************!*\
  !*** ./resources/js/plugins/ToastF.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var ToastF = function ToastF(arg) {
  if (!arg) {
    return;
  }

  var options = {};

  if (arg.constructor === Object) {
    //console.log(arg);
    options = arg; //console.log(options);
  }

  if (arg.constructor === String) {
    options.message = arg;
  }

  if (!options.message || options.message === '') {
    throw new Error("ToastF requires a message");
    return;
  }

  var init = function init() {
    initOptions();
    createAlertElement();
    setClass();
    setPosition();
    setAnimation();
    removeAlert();
  };

  var createAlertElement = function createAlertElement() {
    var toastContainer = document.querySelector('.alert-toastf'); //remove alert element if already exist

    if (toastContainer !== null) {
      document.querySelector('body').removeChild(toastContainer);
    }

    document.querySelector('body').appendChild(container());
  };

  var toastBody = function toastBody() {
    var t_body = document.createElement('div');
    t_body.classList.add('alert-body');
    var t_title = document.createElement('div');

    if (options.title) {
      t_title.classList.add('alert-title');
      t_title.innerHTML = options.title;
      t_body.appendChild(document.createTextNode(options.title));
    }

    t_body.appendChild(document.createTextNode(options.message)); //console.log(t_body);

    return t_body;
  };

  var icon = function icon() {
    var t_icon_container = document.createElement('div');
    t_icon_container.classList.add('alert-icon');
    var t_icon = document.createElement('i');
    t_icon.classList.add(options.icon);
    t_icon_container.appendChild(t_icon);
    return t_icon_container;
  };

  var container = function container() {
    var toastContainer = document.createElement('div');
    toastContainer.classList.add('alert-toastf', 'alert-position');
    toastContainer.setAttribute("id", "toastF");

    if (options.icon) {
      toastContainer.appendChild(icon());
    }

    toastContainer.appendChild(toastBody());
    return toastContainer;
  };

  var setClass = function setClass() {
    var alert = getAlertContainer();
    var alertClasses = ['alert-info', 'alert-warning', 'top-left', 'alert-danger', 'alert-success']; //clear classes

    removeClasses(alertClasses, alert);
    var typesList = {
      info: 'alert-info',
      warning: 'alert-warning',
      danger: 'alert-danger',
      success: 'alert-success',
      "default": 'alert-light'
    };

    for (var types in typesList) {
      if (types === options.type) {
        alert.classList.add(typesList[types]);
        return;
      }
    }
  };

  var setPosition = function setPosition() {
    var alert = getAlertContainer();
    var pos = ['top-center', 'top-right', 'top-left', 'bottom-center', 'bottom-right', 'bottom-left'];
    removeClasses(pos, alert);

    for (var i = 0; i < pos.length; i++) {
      if (pos[i] === options.position) {
        alert.classList.add(pos[i]);
        return;
      }
    }
  };

  var setAnimation = function setAnimation() {
    var alert = getAlertContainer();
    var animation = ['fadein', 'slid-in-right', 'slid-in-left'];
    removeClasses(animation, alert);

    switch (options.animation) {
      case 'slide':
        if (options.position === 'top-right' || options.position === 'bottom-right') alert.classList.add('slide-in-right');
        if (options.position === 'top-left' || options.position === 'bottom-left') alert.classList.add('slide-in-left');
        break;

      case 'fade':
        alert.classList.add('fadein');
        break;
    }
  };

  var getAlertContainer = function getAlertContainer() {
    return document.querySelector('.alert-toastf');
  };

  var removeClasses = function removeClasses(classes, element) {
    //remove classes
    for (var i = 0; i < classes.length; i++) {
      element.classList.remove(classes[i]);
    }
  };

  var initOptions = function initOptions() {
    options.type = options.type || 'default';
    options.position = options.position || 'top-right';
    options.animation = options.animation || 'fade';
    options.message = options.message || '';
  };

  var removeAlert = function removeAlert() {
    var animation = ['fadein', 'slid-in-right', 'slid-in-left', 'slide-out-right', 'slide-out-left'];
    removeClasses(animation, getAlertContainer());
    setTimeout(function () {
      var className = "";

      switch (options.position) {
        case 'top-right':
        case 'bottom-right':
          className = "slide-out-right";
          break;

        case 'top-left':
        case 'bottom-left':
          className = "slide-out-left";
          break;
      }

      getAlertContainer().classList.add(className);
    }, 3000);
  };

  init();
};

/* harmony default export */ __webpack_exports__["default"] = (ToastF);

/***/ }),

/***/ "./resources/js/repository/users/AdminRepository.js":
/*!**********************************************************!*\
  !*** ./resources/js/repository/users/AdminRepository.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ApiService */ "./resources/js/services/ApiService.js");

var resources = '/admin/';
/* harmony default export */ __webpack_exports__["default"] = ({
  getUsers: function getUsers() {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].get(resources + 'get-all-users');
  },
  getProfile: function getProfile(id) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].get(resources + 'get-profile');
  },
  addUser: function addUser(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].post(resources + 'create-user', data);
  },
  updateUser: function updateUser(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].put(resources + 'update', data);
  },
  deleteUser: function deleteUser(id) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](resources + 'delete/' + id);
  },
  uploadPhoto: function uploadPhoto(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].post(resources + 'upload-photo', data);
  }
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

/***/ "./resources/js/repository/users/EmployeeRepository.js":
/*!*************************************************************!*\
  !*** ./resources/js/repository/users/EmployeeRepository.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ApiService */ "./resources/js/services/ApiService.js");

var resources = '/employee/';
/* harmony default export */ __webpack_exports__["default"] = ({
  getEmployee: function getEmployee() {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].get(resources + 'get-all');
  },
  addEmployee: function addEmployee(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].post(resources + 'create', data);
  },
  updateEmployee: function updateEmployee(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].put(resources + 'update', data);
  },
  deleteEmployee: function deleteEmployee(id) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](resources + 'delete/' + id);
  },
  getProfile: function getProfile(id) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].get(resources + 'get-profile');
  },
  uploadPhoto: function uploadPhoto(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].post(resources + 'upload-logo', data);
  }
});

/***/ }),

/***/ "./resources/js/repository/users/UserRepository.js":
/*!*********************************************************!*\
  !*** ./resources/js/repository/users/UserRepository.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ApiService */ "./resources/js/services/ApiService.js");

var resources = '/user/';
/* harmony default export */ __webpack_exports__["default"] = ({
  login: function login(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].post(resources + 'login', data);
  },
  getTotalUsers: function getTotalUsers() {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].get(resources + 'get-total');
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
  // if(error.response.status === 401){
  //     window.location.href = './login'
  // }
  return Promise.reject(error.response);
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./resources/js/views/AdminUsers.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/AdminUsers.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminUsers_vue_vue_type_template_id_7a092450___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminUsers.vue?vue&type=template&id=7a092450& */ "./resources/js/views/AdminUsers.vue?vue&type=template&id=7a092450&");
/* harmony import */ var _AdminUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminUsers.vue?vue&type=script&lang=js& */ "./resources/js/views/AdminUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminUsers_vue_vue_type_template_id_7a092450___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminUsers_vue_vue_type_template_id_7a092450___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AdminUsers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/AdminUsers.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/AdminUsers.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdminUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/AdminUsers.vue?vue&type=template&id=7a092450&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/AdminUsers.vue?vue&type=template&id=7a092450& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_template_id_7a092450___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminUsers.vue?vue&type=template&id=7a092450& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdminUsers.vue?vue&type=template&id=7a092450&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_template_id_7a092450___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_template_id_7a092450___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Company.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Company.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Company.vue?vue&type=template&id=06576ba4& */ "./resources/js/views/Company.vue?vue&type=template&id=06576ba4&");
/* harmony import */ var _Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Company.vue?vue&type=script&lang=js& */ "./resources/js/views/Company.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Company.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Company.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Company.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Company.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Company.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Company.vue?vue&type=template&id=06576ba4&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Company.vue?vue&type=template&id=06576ba4& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Company.vue?vue&type=template&id=06576ba4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Company.vue?vue&type=template&id=06576ba4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Employee.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Employee.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Employee_vue_vue_type_template_id_37d83866___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Employee.vue?vue&type=template&id=37d83866& */ "./resources/js/views/Employee.vue?vue&type=template&id=37d83866&");
/* harmony import */ var _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee.vue?vue&type=script&lang=js& */ "./resources/js/views/Employee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Employee_vue_vue_type_template_id_37d83866___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Employee_vue_vue_type_template_id_37d83866___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Employee.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Employee.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Employee.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Employee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Employee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Employee.vue?vue&type=template&id=37d83866&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Employee.vue?vue&type=template&id=37d83866& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_37d83866___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Employee.vue?vue&type=template&id=37d83866& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Employee.vue?vue&type=template&id=37d83866&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_37d83866___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_37d83866___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604&scoped=true& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& */ "./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "63cd6604",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Login.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Login.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=12f5395a& */ "./resources/js/views/Login.vue?vue&type=template&id=12f5395a&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/views/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Login.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Login.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Login.vue?vue&type=template&id=12f5395a&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Login.vue?vue&type=template&id=12f5395a& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=12f5395a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login.vue?vue&type=template&id=12f5395a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);