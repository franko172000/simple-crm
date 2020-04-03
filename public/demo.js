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
/* harmony import */ var _components_Charts_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Charts/config */ "./resources/js/components/Charts/config.js");
/* harmony import */ var _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Charts/LineChart */ "./resources/js/components/Charts/LineChart.js");
/* harmony import */ var _components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Charts/BarChart */ "./resources/js/components/Charts/BarChart.js");
/* harmony import */ var _Dashboard_SocialTrafficTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dashboard/SocialTrafficTable */ "./resources/js/views/Dashboard/SocialTrafficTable.vue");
/* harmony import */ var _Dashboard_PageVisitsTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dashboard/PageVisitsTable */ "./resources/js/views/Dashboard/PageVisitsTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Charts


 // Tables



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LineChart: _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_1__["default"],
    BarChart: _components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_2__["default"],
    PageVisitsTable: _Dashboard_PageVisitsTable__WEBPACK_IMPORTED_MODULE_4__["default"],
    SocialTrafficTable: _Dashboard_SocialTrafficTable__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      bigLineChart: {
        allData: [[0, 20, 10, 30, 15, 40, 20, 60, 60], [0, 20, 5, 25, 10, 30, 15, 40, 40]],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: []
        },
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_0__["blueChartOptions"]
      },
      redBarChart: {
        chartData: {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Sales',
            data: [25, 20, 30, 22, 17, 29]
          }]
        }
      }
    };
  },
  methods: {
    initBigChart: function initBigChart(index) {
      var chartData = {
        datasets: [{
          label: 'Performance',
          data: this.bigLineChart.allData[index]
        }],
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    }
  },
  mounted: function mounted() {
    this.initBigChart(0);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'page-visits-table',
  data: function data() {
    return {
      tableData: [{
        page: '/argon/',
        visitors: '4,569',
        unique: '340',
        bounceRate: '46,53%',
        bounceRateDirection: 'up'
      }, {
        page: '/argon/index.html',
        visitors: '3,985',
        unique: '319',
        bounceRate: '46,53%',
        bounceRateDirection: 'down'
      }, {
        page: '/argon/charts.html',
        visitors: '3,513',
        unique: '294',
        bounceRate: '36,49%',
        bounceRateDirection: 'down'
      }, {
        page: '/argon/tables.html',
        visitors: '2,050',
        unique: '147',
        bounceRate: '50,87%',
        bounceRateDirection: 'up'
      }, {
        page: '/argon/profile.html',
        visitors: '1,795',
        unique: '190',
        bounceRate: '46,53%',
        bounceRateDirection: 'down'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'social-traffic-table',
  data: function data() {
    return {
      tableData: [{
        name: 'Facebook',
        visitors: '1,480',
        progress: 60,
        progressType: 'gradient-danger'
      }, {
        name: 'LinkedIn',
        visitors: '5,480',
        progress: 70,
        progressType: 'gradient-success'
      }, {
        name: 'Google',
        visitors: '4,807',
        progress: 80,
        progressType: 'gradient-primary'
      }, {
        name: 'Instagram',
        visitors: '3,678',
        progress: 75,
        progressType: 'gradient-info'
      }, {
        name: 'Twitter',
        visitors: '2,645',
        progress: 30,
        progressType: 'gradient-warning'
      }]
    };
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
    editEmployee: function editEmployee(row) {
      this.model.first_name = row.first_name;
      this.model.last_name = row.last_name;
      this.model.email = row.email;
      this.model.user_id = row.user_id;
      this.model.company_id = row.companyid;
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

      if (file !== undefined) {
        data.append('profile_image', this.$refs.filePic.files[0]);

        for (var field in this.model) {
          data.append(field, this.model[field]);
        }
      } else {
        data = this.model;
      }

      this.submitProgress = true;
      _repository_users_EmployeeRepository__WEBPACK_IMPORTED_MODULE_0__["default"].updateEmployee(data).then(function (res) {
        _this4.getEmployee();

        _this4.showModal = false;
        _this4.submitProgress = false;

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
              name: userData.name
            });
            _services_TokenService__WEBPACK_IMPORTED_MODULE_1___default.a.setAccessToken(res.data.data.token);
            Object(_plugins_ToastF__WEBPACK_IMPORTED_MODULE_2__["default"])({
              message: "Login successful",
              type: 'success',
              animation: 'slide'
            });

            _this.$router.push('./');
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'register',
  data: function data() {
    return {
      model: {
        name: '',
        email: '',
        password: ''
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/UserProfile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile/UserProfile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../repository/users/AdminRepository */ "./resources/js/repository/users/AdminRepository.js");
/* harmony import */ var _services_TokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/TokenService */ "./resources/js/services/TokenService.js");
/* harmony import */ var _services_TokenService__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_services_TokenService__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        first_name: '',
        last_name: '',
        password: '',
        role: '',
        profile_photo: ''
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
      _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_0__["default"].updateUser(this.model).then(function (res) {
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

      _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getProfile().then(function (res) {
        var user = res.data.data.user;
        _this2.model.first_name = user.first_name;
        _this2.model.last_name = user.last_name;
        _this2.model.email = user.email;
        _this2.model.user_id = user.user_id;
        _this2.model.role = user.role;
        _this2.model.profile_photo = user.profile_photo;
      });
    },
    triggerClick: function triggerClick() {
      this.$refs.filePic.click();
    },
    onSelectedPhoto: function onSelectedPhoto(e) {
      var _this3 = this;

      this.logoSrc = URL.createObjectURL(e.target.files[0]);
      var data = new FormData();
      data.append('profile_photo', this.$refs.filePic.files[0]);
      this.uploadImgProgress = true;
      _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_0__["default"].uploadPhoto(data).then(function (res) {
        _this3.$notify({
          type: 'success',
          title: 'Photo updated successfully'
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

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

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
                        _vm.showModal = false
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
                        _vm.showModal = false
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
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total Users",
                      type: "gradient-red",
                      "sub-title": "350,897",
                      icon: "ni ni-active-40"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 3.48%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Companies",
                      type: "gradient-orange",
                      "sub-title": "2,356",
                      icon: "ni ni-chart-pie-35"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 12.18%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Employees",
                      type: "gradient-green",
                      "sub-title": "924",
                      icon: "ni ni-money-coins"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-danger mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-down" }),
                        _vm._v(" 5.72%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Admin Users",
                      type: "gradient-info",
                      "sub-title": "49,65%",
                      icon: "ni ni-chart-bar-32"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 54.8%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "table-responsive" },
      [
        _c(
          "base-table",
          {
            attrs: { "thead-classes": "thead-light", data: _vm.tableData },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v("\n          " + _vm._s(row.page) + "\n        ")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n          " + _vm._s(row.visitors) + "\n        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v("\n          " + _vm._s(row.unique) + "\n        ")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("i", {
                        staticClass: "fas fa-arrow-up text-success mr-3",
                        class:
                          row.bounceRateDirection === "up"
                            ? "text-success"
                            : "text-danger"
                      }),
                      _vm._v(
                        "\n          " + _vm._s(row.bounceRate) + "\n        "
                      )
                    ])
                  ]
                }
              }
            ])
          },
          [
            _c("template", { slot: "columns" }, [
              _c("th", [_vm._v("Page name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Visitors")]),
              _vm._v(" "),
              _c("th", [_vm._v("Unique users")]),
              _vm._v(" "),
              _c("th", [_vm._v("Bounce rate")])
            ])
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("div", { staticClass: "row align-items-center" }, [
        _c("div", { staticClass: "col" }, [
          _c("h3", { staticClass: "mb-0" }, [_vm._v("Page visits")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col text-right" }, [
          _c(
            "a",
            { staticClass: "btn btn-sm btn-primary", attrs: { href: "#!" } },
            [_vm._v("See all")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header border-0" }, [
      _c("div", { staticClass: "row align-items-center" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col text-right" },
          [
            _c("base-button", { attrs: { size: "sm", type: "primary" } }, [
              _vm._v("See all")
            ])
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
            attrs: { "thead-classes": "thead-light", data: _vm.tableData },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v("\n          " + _vm._s(row.name) + "\n        ")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n          " + _vm._s(row.visitors) + "\n        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "div",
                        { staticClass: "d-flex align-items-center" },
                        [
                          _c("span", { staticClass: "mr-2" }, [
                            _vm._v(_vm._s(row.progress) + "%")
                          ]),
                          _vm._v(" "),
                          _c("base-progress", {
                            staticClass: "pt-0",
                            attrs: {
                              type: row.progressType,
                              "show-percentage": false,
                              value: row.progress
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]
                }
              }
            ])
          },
          [
            _c("template", { slot: "columns" }, [
              _c("th", [_vm._v("Referral")]),
              _vm._v(" "),
              _c("th", [_vm._v("Visitors")]),
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h3", { staticClass: "mb-0" }, [_vm._v("Social traffic")])
    ])
  }
]
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
                        _vm.showModal = false
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c& ***!
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
  return _c("div", { staticClass: "row justify-content-center" }, [
    _c("div", { staticClass: "col-lg-5 col-md-7" }, [
      _c("div", { staticClass: "card bg-secondary shadow border-0" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body px-lg-5 py-lg-5" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "form",
            { attrs: { role: "form" } },
            [
              _c("base-input", {
                staticClass: "input-group-alternative mb-3",
                attrs: {
                  placeholder: "Name",
                  "addon-left-icon": "ni ni-hat-3"
                },
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
                attrs: {
                  placeholder: "Email",
                  "addon-left-icon": "ni ni-email-83"
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
              _c("base-input", {
                staticClass: "input-group-alternative",
                attrs: {
                  placeholder: "Password",
                  type: "password",
                  "addon-left-icon": "ni ni-lock-circle-open"
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
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "row my-4" }, [
                _c(
                  "div",
                  { staticClass: "col-12" },
                  [
                    _c(
                      "base-checkbox",
                      { staticClass: "custom-control-alternative" },
                      [
                        _c("span", { staticClass: "text-muted" }, [
                          _vm._v("I agree with the "),
                          _c("a", { attrs: { href: "#!" } }, [
                            _vm._v("Privacy Policy")
                          ])
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center" },
                [
                  _c(
                    "base-button",
                    { staticClass: "my-4", attrs: { type: "primary" } },
                    [_vm._v("Create account")]
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-3" }, [
        _vm._m(3),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-6 text-right" },
          [
            _c(
              "router-link",
              { staticClass: "text-light", attrs: { to: "/login" } },
              [_c("small", [_vm._v("Login into your account")])]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-transparent pb-5" }, [
      _c("div", { staticClass: "text-muted text-center mt-2 mb-3" }, [
        _c("small", [_vm._v("Sign up with")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "btn-wrapper text-center" }, [
        _c(
          "a",
          { staticClass: "btn btn-neutral btn-icon", attrs: { href: "#" } },
          [
            _c("span", { staticClass: "btn-inner--icon" }, [
              _c("img", { attrs: { src: "img/icons/common/github.svg" } })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "btn-inner--text" }, [_vm._v("Github")])
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "btn btn-neutral btn-icon", attrs: { href: "#" } },
          [
            _c("span", { staticClass: "btn-inner--icon" }, [
              _c("img", { attrs: { src: "img/icons/common/google.svg" } })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "btn-inner--text" }, [_vm._v("Google")])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center text-muted mb-4" }, [
      _c("small", [_vm._v("Or sign up with credentials")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-muted font-italic" }, [
      _c("small", [
        _vm._v("password strength: "),
        _c("span", { staticClass: "text-success font-weight-700" }, [
          _vm._v("strong")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("a", { staticClass: "text-light", attrs: { href: "#" } }, [
        _c("small", [_vm._v("Forgot password?")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/UserProfile.vue?vue&type=template&id=802792ae&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile/UserProfile.vue?vue&type=template&id=802792ae& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
                      this.logoSrc !== null
                        ? _c("img", {
                            staticClass: "rounded-circle",
                            attrs: { src: this.logoSrc }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      this.logoSrc === null
                        ? _c("img", {
                            staticClass: "rounded-circle",
                            attrs: { src: _vm.model.profile_photo }
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
                          [_vm._v("User information")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pl-lg-4" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "First name",
                                    placeholder: "First name",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.first_name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "first_name", $$v)
                                    },
                                    expression: "model.first_name"
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
                                    label: "Last name",
                                    placeholder: "Last name",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.last_name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "last_name", $$v)
                                    },
                                    expression: "model.last_name"
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

/***/ "./resources/js/components/Charts/BarChart.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Charts/BarChart.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _components_Charts_globalOptionsMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Charts/globalOptionsMixin */ "./resources/js/components/Charts/globalOptionsMixin.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'bar-chart',
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  mixins: [vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp, _components_Charts_globalOptionsMixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    extraOptions: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      ctx: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$watch('chartData', function (newVal, oldVal) {
      if (!oldVal) {
        _this.renderChart(_this.chartData, _this.extraOptions);
      }
    }, {
      immediate: true
    });
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/LineChart.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Charts/LineChart.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _components_Charts_globalOptionsMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Charts/globalOptionsMixin */ "./resources/js/components/Charts/globalOptionsMixin.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'line-chart',
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  mixins: [vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp, _components_Charts_globalOptionsMixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    extraOptions: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      ctx: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$watch('chartData', function (newVal, oldVal) {
      if (!oldVal) {
        _this.renderChart(_this.chartData, _this.extraOptions);
      }
    }, {
      immediate: true
    });
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/config.js":
/*!**************************************************!*\
  !*** ./resources/js/components/Charts/config.js ***!
  \**************************************************/
/*! exports provided: Charts, initGlobalOptions, basicOptions, blueChartOptions, lineChartOptionsBlue, barChartOptionsGradient, pieChartOptions, purpleChartOptions, orangeChartOptions, greenChartOptions, barChartOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Charts", function() { return Charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGlobalOptions", function() { return initGlobalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicOptions", function() { return basicOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueChartOptions", function() { return blueChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartOptionsBlue", function() { return lineChartOptionsBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartOptionsGradient", function() { return barChartOptionsGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartOptions", function() { return pieChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purpleChartOptions", function() { return purpleChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orangeChartOptions", function() { return orangeChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greenChartOptions", function() { return greenChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartOptions", function() { return barChartOptions; });
/* harmony import */ var _components_Charts_optionHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Charts/optionHelpers */ "./resources/js/components/Charts/optionHelpers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Charts = {
  mode: 'light',
  //(themeMode) ? themeMode : 'light';
  fonts: {
    base: 'Open Sans'
  },
  colors: {
    gray: {
      100: '#f6f9fc',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#8898aa',
      700: '#525f7f',
      800: '#32325d',
      900: '#212529'
    },
    theme: {
      'default': '#172b4d',
      'primary': '#5e72e4',
      'secondary': '#f4f5f7',
      'info': '#11cdef',
      'success': '#2dce89',
      'danger': '#f5365c',
      'warning': '#fb6340'
    },
    black: '#12263F',
    white: '#FFFFFF',
    transparent: 'transparent'
  }
};

function chartOptions(Chart) {
  var colors = Charts.colors,
      mode = Charts.mode,
      fonts = Charts.fonts; // Options

  var options = {
    defaults: {
      global: {
        responsive: true,
        maintainAspectRatio: false,
        defaultColor: mode == 'dark' ? colors.gray[700] : colors.gray[600],
        defaultFontColor: mode == 'dark' ? colors.gray[700] : colors.gray[600],
        defaultFontFamily: fonts.base,
        defaultFontSize: 13,
        layout: {
          padding: 0
        },
        legend: {
          display: false,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 16
          }
        },
        elements: {
          point: {
            radius: 0,
            backgroundColor: colors.theme['primary']
          },
          line: {
            tension: .4,
            borderWidth: 4,
            borderColor: colors.theme['primary'],
            backgroundColor: colors.transparent,
            borderCapStyle: 'rounded'
          },
          rectangle: {
            backgroundColor: colors.theme['warning']
          },
          arc: {
            backgroundColor: colors.theme['primary'],
            borderColor: mode == 'dark' ? colors.gray[800] : colors.white,
            borderWidth: 4
          }
        },
        tooltips: {
          enabled: true,
          mode: 'index',
          intersect: false
        }
      },
      doughnut: {
        cutoutPercentage: 83,
        legendCallback: function legendCallback(chart) {
          var data = chart.data;
          var content = '';
          data.labels.forEach(function (label, index) {
            var bgColor = data.datasets[0].backgroundColor[index];
            content += '<span class="chart-legend-item">';
            content += '<i class="chart-legend-indicator" style="background-color: ' + bgColor + '"></i>';
            content += label;
            content += '</span>';
          });
          return content;
        }
      }
    }
  }; // yAxes

  Chart.scaleService.updateScaleDefaults('linear', {
    gridLines: {
      borderDash: [2],
      borderDashOffset: [2],
      color: mode == 'dark' ? colors.gray[900] : colors.gray[300],
      drawBorder: false,
      drawTicks: false,
      lineWidth: 0,
      zeroLineWidth: 0,
      zeroLineColor: mode == 'dark' ? colors.gray[900] : colors.gray[300],
      zeroLineBorderDash: [2],
      zeroLineBorderDashOffset: [2]
    },
    ticks: {
      beginAtZero: true,
      padding: 10,
      callback: function callback(value) {
        if (!(value % 10)) {
          return value;
        }
      }
    }
  }); // xAxes

  Chart.scaleService.updateScaleDefaults('category', {
    gridLines: {
      drawBorder: false,
      drawOnChartArea: false,
      drawTicks: false
    },
    ticks: {
      padding: 20
    },
    maxBarThickness: 10
  });
  return options;
}

function initGlobalOptions(Chart) {
  Object(_components_Charts_optionHelpers__WEBPACK_IMPORTED_MODULE_0__["parseOptions"])(Chart, chartOptions(Chart));
}
var basicOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  responsive: true
};
var blueChartOptions = {
  scales: {
    yAxes: [{
      gridLines: {
        color: Charts.colors.gray[700],
        zeroLineColor: Charts.colors.gray[700]
      },
      ticks: {
        callback: function callback(value) {
          if (!(value % 10)) {
            return '$' + value + 'k';
          }
        }
      }
    }]
  }
};
var lineChartOptionsBlue = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }]
  }
});
var barChartOptionsGradient = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  responsive: true,
  scales: {
    yAxes: [{
      gridLines: {
        drawBorder: false,
        color: 'rgba(253,93,147,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }],
    xAxes: [{
      gridLines: {
        drawBorder: false,
        color: 'rgba(253,93,147,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }]
  }
});
var pieChartOptions = _objectSpread({}, basicOptions, {
  cutoutPercentage: 70,
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  scales: {
    yAxes: [{
      display: 0,
      ticks: {
        display: false
      },
      gridLines: {
        drawBorder: false,
        zeroLineColor: 'transparent',
        color: 'rgba(255,255,255,0.05)'
      }
    }],
    xAxes: [{
      display: 0,
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(255,255,255,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        display: false
      }
    }]
  }
});
var purpleChartOptions = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: '#9a9a9a'
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(225,78,202,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9a9a9a'
      }
    }]
  }
});
var orangeChartOptions = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 110,
        padding: 20,
        fontColor: '#ff8a76'
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(220,53,69,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#ff8a76'
      }
    }]
  }
});
var greenChartOptions = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 125,
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(0,242,195,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }]
  }
});
var barChartOptions = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  scales: {
    yAxes: [{
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 120,
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }],
    xAxes: [{
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }]
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/globalOptionsMixin.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Charts/globalOptionsMixin.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Charts_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Charts/config */ "./resources/js/components/Charts/config.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    Object(_components_Charts_config__WEBPACK_IMPORTED_MODULE_1__["initGlobalOptions"])(chart_js__WEBPACK_IMPORTED_MODULE_0___default.a);
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/optionHelpers.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Charts/optionHelpers.js ***!
  \*********************************************************/
/*! exports provided: parseOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseOptions", function() { return parseOptions; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Parse global options
function parseOptions(parent, options) {
  for (var item in options) {
    if (_typeof(options[item]) !== 'object') {
      parent[item] = options[item];
    } else {
      parseOptions(parent[item], options[item]);
    }
  }
}

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

/***/ "./resources/js/services/TokenService.js":
/*!***********************************************!*\
  !*** ./resources/js/services/TokenService.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var TOKEN_KEY = "token";
var USERNAME = "username";
var USER_PHOTO = "user_photo";
var USER_PHOTO_URL = "user_photo";
var USER_EMAIL = "user_email";
var TokenService = {
  getAccessToken: function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
  },
  setAccessToken: function setAccessToken(data) {
    localStorage.setItem(TOKEN_KEY, data);
  },
  setUserData: function setUserData(data) {
    localStorage.setItem(USERNAME, data.name); // localStorage.setItem(USER_PHOTO,data.photo)
    // localStorage.setItem(USER_PHOTO_URL,data.photo_url)
    // localStorage.setItem(USER_EMAIL,data.email)
  },
  getUserData: function getUserData() {
    return {
      name: localStorage.getItem(USERNAME) // photo : localStorage.getItem(USER_PHOTO),
      // photo_url : localStorage.getItem(USER_PHOTO_URL),
      // email : localStorage.getItem(USER_EMAIL)

    };
  },
  removeAccessToken: function removeAccessToken() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USERNAME); // localStorage.removeItem(USER_PHOTO);
    // localStorage.removeItem(USER_PHOTO_URL);
    // localStorage.removeItem(USER_EMAIL);
  },
  getCsrfToken: function getCsrfToken() {
    var metas = document.getElementsByTagName('meta');

    for (var i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === 'csrf-token') {
        return metas[i].getAttribute('content');
      }
    }
  }
};
module.exports = TokenService;

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

/***/ "./resources/js/views/Dashboard/PageVisitsTable.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/Dashboard/PageVisitsTable.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageVisitsTable.vue?vue&type=template&id=425e7b26& */ "./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26&");
/* harmony import */ var _PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageVisitsTable.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard/PageVisitsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageVisitsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageVisitsTable.vue?vue&type=template&id=425e7b26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Dashboard/SocialTrafficTable.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/Dashboard/SocialTrafficTable.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialTrafficTable.vue?vue&type=template&id=66e6ad10& */ "./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10&");
/* harmony import */ var _SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialTrafficTable.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard/SocialTrafficTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialTrafficTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialTrafficTable.vue?vue&type=template&id=66e6ad10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/views/Register.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Register.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=3563ad7c& */ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=template&id=3563ad7c& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=3563ad7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/profile/UserProfile.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/profile/UserProfile.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_vue_vue_type_template_id_802792ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=802792ae& */ "./resources/js/views/profile/UserProfile.vue?vue&type=template&id=802792ae&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./resources/js/views/profile/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_802792ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfile_vue_vue_type_template_id_802792ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/profile/UserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/profile/UserProfile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/profile/UserProfile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/profile/UserProfile.vue?vue&type=template&id=802792ae&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/profile/UserProfile.vue?vue&type=template&id=802792ae& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_802792ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=template&id=802792ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile/UserProfile.vue?vue&type=template&id=802792ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_802792ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_802792ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);