(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Inno_Codez\Capstone\client\src\main.ts */"zUnb");


/***/ }),

/***/ "09xF":
/*!**************************************!*\
  !*** ./src/app/models/user-login.ts ***!
  \**************************************/
/*! exports provided: UserLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return UserLogin; });
class UserLogin {
    constructor() {
        this.username = "";
        this.password = "";
    }
}


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user */ "2hxB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-connection.service */ "JvtM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class RegisterComponent {
    constructor(_HttpConnetionService, _Router) {
        this._HttpConnetionService = _HttpConnetionService;
        this._Router = _Router;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_0__["User"]();
        this.image = "assets/images/ct.png";
    }
    ngOnInit() {
    }
    register() {
        if (this.user.password == this.user.confirmPassword) {
            this._HttpConnetionService.RegisterUser(this.user).subscribe((result) => {
                console.log("Registered user is " + result);
                alert("You have successfully been registered.");
                this._Router.navigate(['/login']);
            }, (error) => {
                console.log("Error is" + error);
                alert("Registration failed, please try again.");
            });
        }
        else {
            alert("Password is not equal to confirm password, please try again.");
        }
    }
}
RegisterComponent.??fac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_http_connection_service__WEBPACK_IMPORTED_MODULE_2__["HttpConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 32, vars: 6, consts: [[1, "container", "text-center"], ["src", "assets/images/ct.png", "alt", "", "width", "72", "height", "57", 1, "mb-4"], [1, "h3", "mb-3", "fw-normal"], [1, "form-floating"], ["type", "text", "id", "firstName", "name", "firstName", "placeholder", "First Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "firstName"], ["type", "text", "id", "txtUsername", "name", "txtUsername", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "txtUsername"], ["type", "email", "id", "email", "name", "email", "placeholder", "name@example.com", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "number", "id", "phoneNumber", "name", "phoneNumber", "placeholder", "0712345678", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "phoneNumber"], ["type", "password", "id", "password", "name", "password", "placeholder", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "id", "confirmPassword", "name", "confirmPassword", "placeholder", "Confirm Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "confirmPassword"], [1, "w-100", "btn", "btn-lg", "btn-secondary", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_6_listener($event) { return ctx.user.fullName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) { return ctx.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) { return ctx.user.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_22_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_26_listener($event) { return ctx.user.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RegisterComponent_Template_a_click_30_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.confirmPassword);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "2hxB":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor() {
        this.fullName = "";
        this.email = "";
        this.username = "";
        this.password = "";
        this.confirmPassword = "";
        this.type = "general-user";
    }
}


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.??fac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 23, vars: 0, consts: [[1, "text-center"], ["routerLink", "/products"], ["src", "assets/images/ecommerce-business-blog-1.jpg", "alt", "alt", "width", "1000", "height", "500", 1, "mb-4"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Mission:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Our mission is to become the most trusted and valued e-commerce business by providing virtual mall experience in the most simplest and affordable form.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Aim:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "We aim to do this by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Offering ultimate convenience and ensuring consumer flexibility while shoopping.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Ensuring that shoppers pick the best products and also offer brands that will ensure the consumers satisfaction.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Ensuring website uptime availability to ensure that services and delivery is always on time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "To be the most prominent and powerful e-commerce website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "8Dg9":
/*!************************************************************!*\
  !*** ./src/app/update-profile/update-profile.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function() { return UpdateProfileComponent; });
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user */ "2hxB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-connection.service */ "JvtM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class UpdateProfileComponent {
    constructor(_HttpConnectionService) {
        this._HttpConnectionService = _HttpConnectionService;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_0__["User"]();
    }
    ngOnInit() {
        this.id = localStorage.getItem("userID");
        alert("User Id is " + this.id);
    }
    updateProfile() {
        this._HttpConnectionService.updateProfile(this.id, this.user).subscribe((result) => {
            alert("Updated User Profile");
        }, (error) => {
        });
    }
}
UpdateProfileComponent.??fac = function UpdateProfileComponent_Factory(t) { return new (t || UpdateProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_http_connection_service__WEBPACK_IMPORTED_MODULE_2__["HttpConnectionService"])); };
UpdateProfileComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: UpdateProfileComponent, selectors: [["app-update-profile"]], decls: 32, vars: 6, consts: [[1, "container", "text-center"], ["src", "assets/images/ct.png", "alt", "", "width", "72", "height", "57", 1, "mb-4"], [1, "h3", "mb-3", "fw-normal"], [1, "form-floating"], ["type", "text", "id", "firstName", "name", "firstName", "placeholder", "First Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "firstName"], ["type", "text", "id", "txtUsername", "name", "txtUsername", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "txtUsername"], ["type", "email", "id", "email", "name", "email", "placeholder", "name@example.com", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "number", "id", "phoneNumber", "name", "phoneNumber", "placeholder", "0712345678", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "phoneNumber"], ["type", "password", "id", "password", "name", "password", "placeholder", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "id", "confirmPassword", "name", "confirmPassword", "placeholder", "Confirm Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "confirmPassword"], [1, "w-100", "btn", "btn-lg", "btn-secondary", 3, "click"]], template: function UpdateProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Update Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_6_listener($event) { return ctx.user.fullName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_10_listener($event) { return ctx.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_14_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_18_listener($event) { return ctx.user.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_22_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_26_listener($event) { return ctx.user.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function UpdateProfileComponent_Template_a_click_30_listener() { return ctx.updateProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.confirmPassword);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/products/dairy"]; };
class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
    chosenCategory(strChosenCategory) {
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 64, vars: 2, consts: [[1, "text-center"], [1, "album", "py-5", "bg-light"], [1, "container"], [1, "row", "row-cols-1", "row-cols-sm-2", "row-cols-md-3", "g-3"], [1, "col"], [1, "card", "shadow-sm"], ["src", "assets/images/dairy.jpg", "width", "100%", "height", "225", 1, "bd-placeholder-img", "card-img-top"], [1, "card-body"], [1, "card-text"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "routerLink"], ["src", "assets/images/processedmeats.jpg", "width", "100%", "height", "225", 1, "bd-placeholder-img", "card-img-top"], ["routerLink", "/products/processed-meats", "type", "button", 1, "btn", "btn-sm", "btn-outline-secondary"], ["src", "assets/images/beverages.jpg", "width", "100%", "height", "225", 1, "bd-placeholder-img", "card-img-top"], ["routerLink", "/products/drinks", "type", "button", 1, "btn", "btn-sm", "btn-outline-secondary"], ["src", "assets/images/f&g.jpg", "width", "100%", "height", "225", 1, "bd-placeholder-img", "card-img-top"], ["routerLink", "/products/fruits-vegetables", "type", "button", 1, "btn", "btn-sm", "btn-outline-secondary"], ["src", "assets/images/cereals.jpg", "width", "100%", "height", "225", 1, "bd-placeholder-img", "card-img-top"], ["routerLink", "/products/vegetables", "type", "button", 1, "btn", "btn-sm", "btn-outline-secondary"], ["src", "assets/images/snacks.jpg", "width", "100%", "height", "225", 1, "bd-placeholder-img", "card-img-top"], ["routerLink", "/products/snacks", "type", "button", 1, "btn", "btn-sm", "btn-outline-secondary"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Dairy products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Processed Meats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Drinks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Fruits and Vegetables ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Cereals ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " Snacks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CtJM":
/*!**********************************************************!*\
  !*** ./src/app/services/authentication-guard.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuardService", function() { return AuthenticationGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthenticationGuardService {
    constructor() {
    }
    canActivate(route, state) {
        if (this.isLoggedIn()) {
            return true;
        }
        return false;
    }
    isLoggedIn() {
        if (localStorage.getItem('isLoggedIn') == "true") {
            return true;
        }
        return false;
    }
    logOut() {
        localStorage.removeItem('isLoggedIn');
    }
}
AuthenticationGuardService.??fac = function AuthenticationGuardService_Factory(t) { return new (t || AuthenticationGuardService)(); };
AuthenticationGuardService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthenticationGuardService, factory: AuthenticationGuardService.??fac, providedIn: 'root' });


/***/ }),

/***/ "E86C":
/*!**********************************************!*\
  !*** ./src/app/models/login-model-return.ts ***!
  \**********************************************/
/*! exports provided: LoginModelReturn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModelReturn", function() { return LoginModelReturn; });
class LoginModelReturn {
    constructor() {
    }
}


/***/ }),

/***/ "FyR4":
/*!****************************************************************!*\
  !*** ./src/app/services/authentication-guard-admin.service.ts ***!
  \****************************************************************/
/*! exports provided: AuthenticationGuardAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuardAdminService", function() { return AuthenticationGuardAdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthenticationGuardAdminService {
    constructor() { }
    canActivate(route, state) {
        if (this.isAdminLoggedIn()) {
            return true;
        }
        return false;
    }
    isAdminLoggedIn() {
        if (localStorage.getItem('isAdminLoggedIn') == "true") {
            return true;
        }
        return false;
    }
    logOut() {
        localStorage.removeItem('isAdminLoggedIn');
    }
}
AuthenticationGuardAdminService.??fac = function AuthenticationGuardAdminService_Factory(t) { return new (t || AuthenticationGuardAdminService)(); };
AuthenticationGuardAdminService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthenticationGuardAdminService, factory: AuthenticationGuardAdminService.??fac, providedIn: 'root' });


/***/ }),

/***/ "GjIp":
/*!**********************************************!*\
  !*** ./src/app/invoice/invoice.component.ts ***!
  \**********************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function InvoiceComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("R. ", product_r1.price, "");
} }
class InvoiceComponent {
    constructor(_CartService) {
        this._CartService = _CartService;
        this.productItems = [];
        this.totalPrice = 0;
        this.valueAddedTax = 0;
        this.totalAmount = 0;
        this.receiverEmailAddress = "";
    }
    ngOnInit() {
        this.productItems = this._CartService.retrieveCartItemsFromLocalStorage();
        this.calculateTotal();
        this.valueAddedTax = 0.15 * this.totalPrice;
        this.totalAmount = this.totalPrice + this.valueAddedTax;
        this.receiverEmailAddress = localStorage.getItem('email');
    }
    calculateTotal() {
        for (let i = 0; i < this.productItems.length; i++) {
            alert(this.productItems[i].price);
            this.totalPrice = this.totalPrice + this.productItems[i].price;
        }
    }
}
InvoiceComponent.??fac = function InvoiceComponent_Factory(t) { return new (t || InvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
InvoiceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: InvoiceComponent, selectors: [["app-invoice"]], decls: 69, vars: 4, consts: [[1, "offset-xl-2", "col-xl-8", "col-lg-12", "col-md-12", "col-sm-12", "col-12", "padding"], [1, "card"], [1, "card-header", "p-4"], ["href", "index.html", "data-abc", "true", 1, "pt-2", "d-inline-block"], [1, "float-right"], [1, "mb-0"], [1, "card-body"], [1, "row", "mb-4"], [1, "col-sm-6"], [1, "mb-3"], [1, "text-dark", "mb-1"], [1, "table-responsive-sm"], [1, "table", "table-striped"], [1, "center"], [1, "right"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-lg-4", "col-sm-5"], [1, "col-lg-4", "col-sm-5", "ml-auto"], [1, "table", "table-clear"], [1, "left"], [1, "text-dark"], [1, "card-footer", "bg-white"], [1, "left", "strong"]], template: function InvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "browse.pay@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "From:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Browse n Pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "6417 Didi Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Daveyton,Gauteng 1520");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Email: browse.pay@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Phone: 011 424 8763");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "To:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, InvoiceComponent_tr_41_Template, 9, 3, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "strong", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "strong", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "VAT (15%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "strong", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "strong", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "browse.pay@gmail.com, 6417 didi Street, Daveyton, 1520");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.productItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("R. ", ctx.totalPrice, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("R ", ctx.valueAddedTax, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("R. ", ctx.totalAmount, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "I4/W":
/*!******************************************************************!*\
  !*** ./src/app/product-more-info/product-more-info.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductMoreInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMoreInfoComponent", function() { return ProductMoreInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-connection.service */ "JvtM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "c14U");




class ProductMoreInfoComponent {
    constructor(_HttpConnectionService, _route, _CartService, _Router) {
        this._HttpConnectionService = _HttpConnectionService;
        this._route = _route;
        this._CartService = _CartService;
        this._Router = _Router;
        this.cartItems = [];
    }
    ngOnInit() {
        this.id = this._route.snapshot.paramMap.get('id');
        // alert("Id is" + this.id);
        this._HttpConnectionService.getProductById(this.id).subscribe((result) => {
            //console.log("result is "+ result.name);
            this.selectedProduct = result;
        }, (error) => {
            console.log("error is " + error);
        });
    }
    buyThisProduct(productItem) {
        this.cartItems = this._CartService.retrieveCartItemsFromLocalStorage();
        this._CartService.addItemToCart(productItem);
        alert(productItem.name + " item added to the cart");
        this._Router.navigate(['/cart']);
    }
}
ProductMoreInfoComponent.??fac = function ProductMoreInfoComponent_Factory(t) { return new (t || ProductMoreInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_http_connection_service__WEBPACK_IMPORTED_MODULE_1__["HttpConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProductMoreInfoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductMoreInfoComponent, selectors: [["app-product-more-info"]], decls: 39, vars: 5, consts: [[1, "row", "align-items-md-stretch"], [1, "col-md-5"], [1, "h-100", "p-3", "text-whiterounded-3"], ["alt", "", "width", "100%", "height", "200", 3, "src"], [1, "col-md-7"], [1, "h-100", "p-2", "rounded-3"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "table"], [1, "card-footer"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "btn-group"], ["routerLink", "/home", 1, "btn", "btn-sm", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"]], template: function ProductMoreInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Product Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Product Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Product Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Product Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Explore More Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductMoreInfoComponent_Template_button_click_37_listener() { return ctx.buyThisProduct(ctx.selectedProduct); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.selectedProduct.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.selectedProduct._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.selectedProduct.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("R", ctx.selectedProduct.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.selectedProduct.quantity, " items are left.");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LW1vcmUtaW5mby5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "IiZn":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CheckoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
CheckoutComponent.??fac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(); };
CheckoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 2, vars: 0, template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "checkout works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "JvtM":
/*!********************************************!*\
  !*** ./src/app/http-connection.service.ts ***!
  \********************************************/
/*! exports provided: HttpConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConnectionService", function() { return HttpConnectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class HttpConnectionService {
    constructor(_HttpClient) {
        this._HttpClient = _HttpClient;
        this.Users = [];
        this.cartItems = [];
    }
    /* RegisterUser(user: User): Observable<User> {
       return this._HttpClient.post<User>('http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/users', user);
     }
     getAllUsers(): Observable<Array<User>> {
       return this._HttpClient.get<Array<User>>('http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/users');
     }
   
      Login(userLogin:UserLogin):Observable<LoginModelReturn>
     {
       return this._HttpClient.post<LoginModelReturn>('http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/users/login',userLogin);
     }
   
     updateProfile(id:any,user: User):Observable<User>
     {
       return this._HttpClient.put<User>(`http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/users/${id}`,user);
     }
   
     addNewContactInfo(contact: Contact): Observable<Contact> {
       return this._HttpClient.post<Contact>('http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/contacts', contact)
     }
     getProducts(): Observable<Product[]> {
       return this._HttpClient.get<Product[]>('http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/products');
     }
     getProductsByCategory(strCategory: string): Observable<Product[]> {
       return this._HttpClient.get<Product[]>('http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/products/' + { strCategory });
     }
     addProduct(productObj: Product): Observable<Product> {
       return this._HttpClient.post<Product>('http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/products', productObj);
     }
   
     getProductById(id:string):Observable<Product>
     {
       return this._HttpClient.get<Product>(`http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com//api/products/${id}`);
     }
     addToDatabase(productItem:Product):Observable<Product[]>
     {
       return this._HttpClient.get<Product[]>('http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/products');
     }
     addToCart(productItem)
     {
       this.cartItems.push(productItem);
       console.log("added new item to cart")
     }
   
     DeleteProduct(id:any):Observable<Product>
     {
       return this._HttpClient.delete<Product>(`http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/products/${id}`);
     }
   
     updateProduct(id:any, productObj:Product):Observable<Product>
     {
       return this._HttpClient.put<Product>(`http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/products/${id}`, productObj);
     } */
    RegisterUser(user) {
        return this._HttpClient.post('http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/users', user);
    }
    getAllUsers() {
        return this._HttpClient.get('http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/users');
    }
    Login(userLogin) {
        return this._HttpClient.post('http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/users/login', userLogin);
    }
    updateProfile(id, user) {
        return this._HttpClient.put(`http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/users/${id}`, user);
    }
    addNewContactInfo(contact) {
        return this._HttpClient.post('http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/contacts', contact);
    }
    getProducts() {
        return this._HttpClient.get('http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/products');
    }
    getProductsByCategory(category) {
        return this._HttpClient.get(`http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/products/${category}`);
    }
    addProduct(productObj) {
        return this._HttpClient.post('http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/products', productObj);
    }
    getProductById(id) {
        return this._HttpClient.get(`http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/products/find/${id}`);
    }
    addToDatabase(productItem) {
        return this._HttpClient.get('http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/products');
    }
    addToCart(productItem) {
        this.cartItems.push(productItem);
        console.log("added new item to cart");
    }
    DeleteProduct(id) {
        return this._HttpClient.delete(`http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/products/${id}`);
    }
    updateProduct(id, productObj) {
        return this._HttpClient.put(`http://ec2-18-222-3-84.us-east-2.compute.amazonaws.com/api/products/${id}`, productObj);
    }
}
HttpConnectionService.??fac = function HttpConnectionService_Factory(t) { return new (t || HttpConnectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpConnectionService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: HttpConnectionService, factory: HttpConnectionService.??fac, providedIn: 'root' });


/***/ }),

/***/ "RPWk":
/*!***********************************!*\
  !*** ./src/app/models/contact.ts ***!
  \***********************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
class Contact {
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/authentication-guard.service */ "CtJM");
/* harmony import */ var _services_authentication_guard_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication-guard-admin.service */ "FyR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AppComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "View products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Admin Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Update profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_li_15_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r9.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class AppComponent {
    constructor(_authentication, _authenticationAdmin, _Router) {
        this._authentication = _authentication;
        this._authenticationAdmin = _authenticationAdmin;
        this._Router = _Router;
        this.title = 'Mabena-LI-CapStoneProject-FrontEnd';
    }
    adminLoginStatus() {
        if (this._authenticationAdmin.isAdminLoggedIn()) {
            return true;
        }
        return false;
    }
    loginStatus() {
        if (this._authentication.isLoggedIn()) {
            return true;
        }
        return false;
    }
    logout() {
        this._authentication.logOut();
        this._authenticationAdmin.logOut();
        localStorage.clear();
        alert("You are logged out successfully");
        this._Router.navigate(['/login']);
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_authentication_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationGuardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_authentication_guard_admin_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuardAdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 56, vars: 9, consts: [[1, "py-2", "bg-light", "border-bottom"], [1, "container", "d-flex", "flex-wrap"], [1, "nav", "me-auto"], ["class", "nav-item", 4, "ngIf"], [1, "nav"], [1, "nav-item"], ["routerLink", "register", 1, "btn", "nav-link", "link-dark", "px-2"], [1, "py-3", "mb-4", "border-bottom"], [1, "container", "d-flex", "flex-wr", "ap", "justify-content-center"], ["href", "/", 1, "d-flex", "align-items-center", "mb-3", "mb-lg-0", "me-lg-auto", "text-dark", "text-decoration-none"], ["width", "40", "height", "32", 1, "bi", "me-2"], [0, "xlink", "href", "#bootstrap"], [1, "fs-4"], [1, "p-5", "mb-4", "bg-light", "rounded-3"], [1, "container-fluid", "py-5"], [1, "bd-footer", "py-5", "mt-5", "bg-light"], [1, "container", "py-5"], [1, "row"], [1, "col-lg-3", "mb-6"], ["href", "/", "aria-label", "Bootstrap", 1, "d-inline-flex", "align-items-center", "mb-2", "link-dark", "text-decoration-none"], [1, "fs-5"], [1, "list-unstyled", "small", "text-muted"], [1, "mb-2"], [1, "col-6", "col-lg-3", "offset-lg-1", "mb-6"], [1, "list-unstyled"], ["routerLink", "/"], ["routerLink", "about"], ["routerLink", "contact"], ["routerLink", "home", "aria-current", "page", 1, "btn", "nav-link", "link-dark", "px-2", "active"], ["routerLink", "about", 1, "btn", "nav-link", "link-dark", "px-2"], ["routerLink", "home", 1, "btn", "nav-link", "link-dark", "px-2"], ["routerLink", "cart", 1, "btn", "nav-link", "link-dark", "px-2"], ["routerLink", "contact", 1, "btn", "nav-link", "link-dark", "px-2"], ["routerLink", "admin-page", 1, "btn", "nav-link", "link-dark", "px-2"], ["routerLink", "login", 1, "btn", "nav-link", "link-dark", "px-2"], ["routerLink", "update-profile", 1, "btn", "nav-link", "link-dark", "px-2"], [1, "btn", "nav-link", "link-dark", "px-2", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, AppComponent_li_3_Template, 3, 0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, AppComponent_li_4_Template, 3, 0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, AppComponent_li_5_Template, 3, 0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AppComponent_li_6_Template, 3, 0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, AppComponent_li_7_Template, 3, 0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, AppComponent_li_8_Template, 3, 0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, AppComponent_li_10_Template, 3, 0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, AppComponent_li_14_Template, 3, 0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, AppComponent_li_15_Template, 3, 0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "header", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "use", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Browse n Pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "footer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Browse n Pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "This Student Online application was designed and developed by InnoCodez Full Stack developer using various software development technologies and frameworks for the Deviare/Simplilearn capstone project.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "This project is still under alpha development phase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Currently v1.0.0.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.adminLoginStatus());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.adminLoginStatus());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.adminLoginStatus());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.adminLoginStatus() && ctx.loginStatus());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.adminLoginStatus());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.adminLoginStatus());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.adminLoginStatus() || !ctx.loginStatus());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginStatus());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.adminLoginStatus() || ctx.loginStatus());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _product_categories_product_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-categories/product-categories.component */ "g1F2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-profile/update-profile.component */ "8Dg9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products/products.component */ "ziXE");
/* harmony import */ var _product_more_info_product_more_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-more-info/product-more-info.component */ "I4/W");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _check_out_cart_check_out_cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./check-out-cart/check-out-cart.component */ "dDzP");
/* harmony import */ var _admin_component_admin_component_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-component/admin-component.component */ "wCky");
/* harmony import */ var _admin_add_product_admin_add_product_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-add-product/admin-add-product.component */ "liUK");
/* harmony import */ var _admin_update_product_admin_update_product_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin-update-product/admin-update-product.component */ "coZc");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./invoice/invoice.component */ "GjIp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");
























class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        _product_categories_product_categories_component__WEBPACK_IMPORTED_MODULE_7__["ProductCategoriesComponent"],
        _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_9__["UpdateProfileComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"],
        _product_more_info_product_more_info_component__WEBPACK_IMPORTED_MODULE_15__["ProductMoreInfoComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__["CartComponent"],
        _check_out_cart_check_out_cart_component__WEBPACK_IMPORTED_MODULE_17__["CheckOutCartComponent"],
        _admin_component_admin_component_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponentComponent"],
        _admin_add_product_admin_add_product_component__WEBPACK_IMPORTED_MODULE_19__["AdminAddProductComponent"],
        _admin_update_product_admin_update_product_component__WEBPACK_IMPORTED_MODULE_20__["AdminUpdateProductComponent"],
        _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_21__["CheckoutComponent"],
        _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_22__["InvoiceComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]] }); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _models_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/contact */ "RPWk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-connection.service */ "JvtM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class ContactComponent {
    constructor(_HttpConnectionService) {
        this._HttpConnectionService = _HttpConnectionService;
        this.contact = new _models_contact__WEBPACK_IMPORTED_MODULE_0__["Contact"]();
    }
    ngOnInit() {
    }
    contactUs() {
        this._HttpConnectionService.addNewContactInfo(this.contact).subscribe(result => {
            console.log("A new contact has been successfully added");
        }, (error) => {
            console.log("The error is " + error);
        });
    }
}
ContactComponent.??fac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_http_connection_service__WEBPACK_IMPORTED_MODULE_2__["HttpConnectionService"])); };
ContactComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 28, vars: 5, consts: [[1, "container", "text-center", "mb-3"], ["src", "assets/images/ct.png", "alt", "", "width", "72", "height", "57", 1, "mb-4"], [1, "h3", "mb-3", "fw-normal"], [1, "form-floating"], ["type", "text", "id", "firstName", "name", "firstName", "placeholder", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "name"], ["type", "text", "id", "lastName", "name", "lastName", "placeholder", "Last name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "surname"], ["type", "email", "id", "email", "name", "email", "placeholder", "name@example.com", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "number", "id", "phoneNumber", "name", "phoneNumber", "placeholder", "0123456789", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "phoneNumber"], ["type", "text", "id", "message", "name", "message", "placeholder", "Message", "rows", "10", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "message"], ["type", "button", 1, "w-100", "btn", "btn-lg", "btn-secondary", 3, "click"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_6_listener($event) { return ctx.contact.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_10_listener($event) { return ctx.contact.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Surname");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_14_listener($event) { return ctx.contact.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_18_listener($event) { return ctx.contact.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_22_listener($event) { return ctx.contact.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ContactComponent_Template_a_click_26_listener() { return ctx.contactUs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.contact.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.contact.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.contact.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.contact.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.contact.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CartService {
    constructor() {
        this.productItems = [];
    }
    addItemToCart(productToBeAdded) {
        this.productItems.push(productToBeAdded);
        console.log(this.productItems);
        this.saveCartToLocalStorage();
    }
    saveCartToLocalStorage() {
        localStorage.setItem('savedItems', JSON.stringify(this.productItems));
    }
    retrieveCartItemsFromLocalStorage() {
        var _a;
        this.productItems = (_a = JSON.parse(localStorage.getItem('savedItems'))) !== null && _a !== void 0 ? _a : [];
        return this.productItems;
    }
    deleteCartItems() {
        localStorage.removeItem('savedItems');
        alert("Cart is emptied");
    }
}
CartService.??fac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: CartService, factory: CartService.??fac, providedIn: 'root' });


/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CartComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartComponent_tr_14_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const product_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.removeFromCart(product_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", product_r1._id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", product_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" R", product_r1.price, " ");
} }
class CartComponent {
    constructor(_CartService, _Router) {
        this._CartService = _CartService;
        this._Router = _Router;
        this.productItems = [];
    }
    ngOnInit() {
        this.productItems = this._CartService.retrieveCartItemsFromLocalStorage();
        alert("cart items" + this.productItems);
        console.log(this.productItems);
    }
    EmptyCart() {
        this._CartService.deleteCartItems();
        this._Router.navigate(['/products']);
    }
    removeFromCart(id) {
        alert("attempting to delete item");
        for (var i = 0; i < this.productItems.length; i++) {
            let item = this.productItems[i];
            if (item.id == id) {
                this.productItems.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('savedItems', JSON.stringify(this.productItems));
    }
    checkOutCart() {
        return this.productItems;
    }
}
CartComponent.??fac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CartComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 23, vars: 1, consts: [[1, "table"], [4, "ngFor", "ngForOf"], ["routerLink", "/checkout", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["href", "/cart", "type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["routerLink", "/home", 1, "btn", "btn-sm", "btn-outline-secondary"], [1, "btn", "btn-danger", 3, "click"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Products in the Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, CartComponent_tr_14_Template, 10, 3, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartComponent_Template_a_click_15_listener() { return ctx.checkOutCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Check out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "|\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartComponent_Template_a_click_18_listener() { return ctx.EmptyCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Empty Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "|\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Continue shopping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.productItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "coZc":
/*!************************************************************************!*\
  !*** ./src/app/admin-update-product/admin-update-product.component.ts ***!
  \************************************************************************/
/*! exports provided: AdminUpdateProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUpdateProductComponent", function() { return AdminUpdateProductComponent; });
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/product */ "yHTb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _http_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-connection.service */ "JvtM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class AdminUpdateProductComponent {
    constructor(_Router, _route, _HttpConnection) {
        this._Router = _Router;
        this._route = _route;
        this._HttpConnection = _HttpConnection;
        this.product = new _models_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
    }
    ngOnInit() {
        this.id = this._route.snapshot.paramMap.get('id');
        alert(this.id);
    }
    updateProduct() {
        this._HttpConnection.updateProduct(this.id, this.product).subscribe((result) => {
            alert("Product Updated Successfully");
        }, (error) => {
            alert("Error is " + error);
            console.log("Error is " + error.description);
        });
    }
}
AdminUpdateProductComponent.??fac = function AdminUpdateProductComponent_Factory(t) { return new (t || AdminUpdateProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_http_connection_service__WEBPACK_IMPORTED_MODULE_3__["HttpConnectionService"])); };
AdminUpdateProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AdminUpdateProductComponent, selectors: [["app-admin-update-product"]], decls: 32, vars: 6, consts: [[1, "container", "text-center"], ["src", "assets/images/ct.png", "alt", "", "width", "72", "height", "57", 1, "mb-4"], [1, "h3", "mb-3", "fw-normal"], [1, "form-floating"], ["type", "text", "id", "name", "name", "name", "placeholder", "Product Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "name"], ["type", "number", "id", "price", "name", "price", "placeholder", "Product Price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "price"], ["type", "text", "id", "imageUrl", "name", "imageUrl", "placeholder", "Product Image URL", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "imageUrl"], ["type", "text", "id", "description", "name", "description", "placeholder", "Product Description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "description"], ["type", "number", "id", "quantity", "name", "quantity", "placeholder", "Product Quantity", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "quantity"], ["type", "text", "id", "category", "name", "category", "placeholder", "Product Category", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "category"], ["href", "#", "type", "submit", 1, "w-100", "btn", "btn-lg", "btn-secondary", 3, "click"]], template: function AdminUpdateProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Update Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdminUpdateProductComponent_Template_input_ngModelChange_6_listener($event) { return ctx.product.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdminUpdateProductComponent_Template_input_ngModelChange_10_listener($event) { return ctx.product.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Product Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdminUpdateProductComponent_Template_input_ngModelChange_14_listener($event) { return ctx.product.imageUrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Product Image URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdminUpdateProductComponent_Template_input_ngModelChange_18_listener($event) { return ctx.product.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Product Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdminUpdateProductComponent_Template_input_ngModelChange_22_listener($event) { return ctx.product.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Product Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdminUpdateProductComponent_Template_input_ngModelChange_26_listener($event) { return ctx.product.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Product Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdminUpdateProductComponent_Template_a_click_30_listener() { return ctx.updateProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Add New Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.category);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi11cGRhdGUtcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "dDzP":
/*!************************************************************!*\
  !*** ./src/app/check-out-cart/check-out-cart.component.ts ***!
  \************************************************************/
/*! exports provided: CheckOutCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutCartComponent", function() { return CheckOutCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication-guard.service */ "CtJM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function CheckOutCartComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("R ", product_r1.price, "");
} }
class CheckOutCartComponent {
    constructor(_authenticationGuard, _router, _CartService) {
        this._authenticationGuard = _authenticationGuard;
        this._router = _router;
        this._CartService = _CartService;
        this.strikeCheckout = null;
        this.productItems = [];
        this.totalPrice = 0;
    }
    ngOnInit() {
        this.productItems = this._CartService.retrieveCartItemsFromLocalStorage();
        /*   if(!this._authenticationGuard.isLoggedIn())
          {
            this._router.navigate(['/login']);
      
          } */
        this.stripePaymentGateway();
        this.calculateTotal();
    }
    makePayment() {
        const strikeCheckout = window.StripeCheckout.configure({
            key: 'pk_test_51JQ8PrSAnZsMJ5UED3cwwbXjocsWC1uE61CemwGUS5P0kqkSEiIRfHiNk2cJYdl3AfeWnADf2Aus8WHFhLzVyTSB00egnxrRmj',
            locale: 'auto',
            token: function (stripeToken) {
                console.log(stripeToken);
                alert('Stripe token generated!');
            }
        });
        strikeCheckout.open({
            name: 'MakePayment',
            description: 'Payment widgets',
            amount: this.totalPrice
        });
        this._router.navigate(['/invoice']);
    }
    stripePaymentGateway() {
        if (!window.document.getElementById('stripe-script')) {
            const scr = window.document.createElement("script");
            scr.id = "stripe-script";
            scr.type = "text/javascript";
            scr.src = "https://checkout.stripe.com/checkout.js";
            scr.onload = () => {
                this.strikeCheckout = window.StripeCheckout.configure({
                    key: 'pk_test_12239293949ksdfksdjkfj1232q3jkjssdfjk',
                    locale: 'auto',
                    token: function (token) {
                        console.log(token);
                        alert('Payment via stripe successfull!');
                    }
                });
            };
            window.document.body.appendChild(scr);
        }
    }
    calculateTotal() {
        for (let i = 0; i < this.productItems.length; i++) {
            alert(this.productItems[i].price);
            this.totalPrice = this.totalPrice + this.productItems[i].price;
        }
    }
}
CheckOutCartComponent.??fac = function CheckOutCartComponent_Factory(t) { return new (t || CheckOutCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_authentication_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationGuardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
CheckOutCartComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CheckOutCartComponent, selectors: [["app-check-out-cart"]], decls: 94, vars: 2, consts: [[1, "py-5", "text-center"], ["src", "assets/images/ct.png", "alt", "", "width", "180", "height", "180", 1, "d-block", "mx-auto", "mb-4"], [1, "row", "g-5"], [1, "col-md-5", "col-lg-4", "order-md-last"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "list-group", "mb-3"], ["class", "list-group-item d-flex justify-content-between lh-sm", 4, "ngFor", "ngForOf"], [1, "list-group-item", "d-flex", "justify-content-between"], [1, "col-md-7", "col-lg-8"], [1, "mb-3"], ["novalidate", "", 1, "needs-validation"], [1, "col-12"], ["for", "firstName", 1, "form-label"], ["type", "text", "id", "firstName", "placeholder", "Name", "value", "", "required", "", 1, "form-control"], ["for", "Surname", 1, "form-label"], ["type", "text", "id", "Surname", "placeholder", "Surname", "value", "", "required", "", 1, "form-control"], ["for", "username", 1, "form-label"], ["type", "text", "id", "Username", "placeholder", "Username", "value", "", "required", "", 1, "form-control"], ["for", "emailAddress", 1, "form-label"], [1, "text-muted"], ["type", "email", "id", "emailAddress", "placeholder", "yourname@example.com", 1, "form-control"], ["for", "addressLine1", 1, "form-label"], ["type", "text", "id", "addressLine1", "placeholder", "1 Long St", "required", "", 1, "form-control"], ["for", "addressLine2", 1, "form-label"], ["type", "text", "id", "addressLine2", "placeholder", "Apartment or suite", 1, "form-control"], ["for", "country", 1, "form-label"], ["id", "country", "required", "", 1, "form-select"], ["value", ""], [1, "invalid-feedback"], ["for", "province", 1, "form-label"], ["id", "province", "required", "", 1, "form-select"], ["for", "Postal", 1, "form-label"], ["type", "text", "id", "Postal", "placeholder", "", "required", "", 1, "form-control"], [1, "col-12d", "btn", "btn-primary", "btn-lg", 3, "click"], [1, "my-5", "pt-5", "text-muted", "text-center", "text-small"], [1, "mb-1"], [1, "list-group-item", "d-flex", "justify-content-between", "lh-sm"], [1, "my-0"]], template: function CheckOutCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Checkout Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Your cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, CheckOutCartComponent_li_11_Template, 8, 3, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Total (Rand)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Payment Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Surname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "(Optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Address 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "(Optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "South Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " Please select a valid country. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Province");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Gauteng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Western Cape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Kwa-Zulu Natal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Eastern Cape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "North West");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Mpumalanga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Limpopo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Free State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Northern Cape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Postal Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CheckOutCartComponent_Template_button_click_89_listener() { return ctx.makePayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "footer", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "\u00A92021 Browse and Pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.productItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" R. ", ctx.totalPrice, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_z"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1vdXQtY2FydC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "g1F2":
/*!********************************************************************!*\
  !*** ./src/app/product-categories/product-categories.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoriesComponent", function() { return ProductCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProductCategoriesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductCategoriesComponent.??fac = function ProductCategoriesComponent_Factory(t) { return new (t || ProductCategoriesComponent)(); };
ProductCategoriesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductCategoriesComponent, selectors: [["app-product-categories"]], decls: 0, vars: 0, template: function ProductCategoriesComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "liUK":
/*!******************************************************************!*\
  !*** ./src/app/admin-add-product/admin-add-product.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminAddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAddProductComponent", function() { return AdminAddProductComponent; });
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/product */ "yHTb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-connection.service */ "JvtM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class AdminAddProductComponent {
    constructor(_HttpConnectionService, _Router) {
        this._HttpConnectionService = _HttpConnectionService;
        this._Router = _Router;
        this.product = new _models_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
    }
    ngOnInit() {
    }
    addProduct() {
        this._HttpConnectionService.addProduct(this.product).subscribe((result) => {
            alert("Product Added");
            console.log(result);
            this._Router.navigate(['/products']);
        }, (error) => {
        });
    }
    handleChange(event) {
        //alert((event.target as HTMLInputElement).value);
        this.product.category = event.target.value;
        return event.target.value;
    }
}
AdminAddProductComponent.??fac = function AdminAddProductComponent_Factory(t) { return new (t || AdminAddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_http_connection_service__WEBPACK_IMPORTED_MODULE_2__["HttpConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AdminAddProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AdminAddProductComponent, selectors: [["app-admin-add-product"]], decls: 44, vars: 7, consts: [[1, "container", "text-center"], ["src", "assets/images/ct.png", "alt", "", "width", "72", "height", "57", 1, "mb-4"], [1, "h3", "mb-3", "fw-normal"], [1, "form-floating"], ["type", "text", "id", "name", "name", "name", "placeholder", "Product Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "name"], ["type", "number", "id", "price", "name", "price", "placeholder", "Product Price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "price"], ["type", "text", "id", "imageUrl", "name", "imageUrl", "placeholder", "Product Image URL", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "imageUrl"], ["type", "text", "id", "description", "name", "description", "placeholder", "Product Description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "description"], ["type", "number", "id", "quantity", "name", "quantity", "placeholder", "Product Quantity", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "quantity"], [1, "mb-3"], ["name", "category", "id", "category", 1, "form-select", 3, "ngModel", "ngModelChange"], ["selected", "", 3, "ngValue"], ["value", "dairy"], ["value", "processed-meats"], ["value", "drinks"], ["value", "fruits-vegetables"], ["value", "vegetables"], ["value", "snacks"], ["href", "#", "type", "submit", 1, "w-100", "btn", "btn-lg", "btn-secondary", 3, "click"]], template: function AdminAddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Add New Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdminAddProductComponent_Template_input_ngModelChange_6_listener($event) { return ctx.product.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdminAddProductComponent_Template_input_ngModelChange_10_listener($event) { return ctx.product.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Product Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdminAddProductComponent_Template_input_ngModelChange_14_listener($event) { return ctx.product.imageUrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Product Image URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdminAddProductComponent_Template_input_ngModelChange_18_listener($event) { return ctx.product.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Product Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdminAddProductComponent_Template_input_ngModelChange_22_listener($event) { return ctx.product.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Product Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdminAddProductComponent_Template_select_ngModelChange_26_listener($event) { return ctx.product.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Choose Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Dairy Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Processed Meats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Drinks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "Fruits and Vegetables");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Cereals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Snacks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdminAddProductComponent_Template_a_click_42_listener() { return ctx.addProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Add New Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngValue", undefined);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_z"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1hZGQtcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _admin_add_product_admin_add_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-add-product/admin-add-product.component */ "liUK");
/* harmony import */ var _admin_component_admin_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-component/admin-component.component */ "wCky");
/* harmony import */ var _admin_update_product_admin_update_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-update-product/admin-update-product.component */ "coZc");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _check_out_cart_check_out_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check-out-cart/check-out-cart.component */ "dDzP");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./invoice/invoice.component */ "GjIp");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _product_categories_product_categories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-categories/product-categories.component */ "g1F2");
/* harmony import */ var _product_more_info_product_more_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-more-info/product-more-info.component */ "I4/W");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products/products.component */ "ziXE");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./update-profile/update-profile.component */ "8Dg9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");


















const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'product-categories', component: _product_categories_product_categories_component__WEBPACK_IMPORTED_MODULE_11__["ProductCategoriesComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"] },
    { path: 'update-profile', component: _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_15__["UpdateProfileComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"] },
    { path: 'products/:category', component: _products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"] },
    { path: 'product-info/:id', component: _product_more_info_product_more_info_component__WEBPACK_IMPORTED_MODULE_12__["ProductMoreInfoComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"] },
    { path: 'checkout', component: _check_out_cart_check_out_cart_component__WEBPACK_IMPORTED_MODULE_6__["CheckOutCartComponent"] },
    { path: 'add-product', component: _admin_add_product_admin_add_product_component__WEBPACK_IMPORTED_MODULE_2__["AdminAddProductComponent"] },
    { path: 'admin-page', component: _admin_component_admin_component_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponentComponent"] },
    { path: 'update-product', component: _admin_update_product_admin_update_product_component__WEBPACK_IMPORTED_MODULE_4__["AdminUpdateProductComponent"] },
    { path: 'invoice', component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_9__["InvoiceComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _models_login_model_return__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/login-model-return */ "E86C");
/* harmony import */ var _models_user_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user-login */ "09xF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-connection.service */ "JvtM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class LoginComponent {
    constructor(_HttpConnectionService, _Router) {
        this._HttpConnectionService = _HttpConnectionService;
        this._Router = _Router;
        this.usersList = [];
        this.userLogin = new _models_user_login__WEBPACK_IMPORTED_MODULE_1__["UserLogin"]();
        this.loginModel = new _models_login_model_return__WEBPACK_IMPORTED_MODULE_0__["LoginModelReturn"]();
    }
    ngOnInit() {
    }
    Login() {
        this._HttpConnectionService.Login(this.userLogin).subscribe((result) => {
            this.loginModel = result;
            console.log(this.userLogin.username);
            console.log(this.userLogin.password);
            console.log(this.loginModel.isLoggedIn);
            console.log(this.loginModel.type);
            if ((this.loginModel.isLoggedIn) == true) {
                alert("Successfull login");
                if ((this.userLogin.username == "admin")) {
                    localStorage.setItem('isAdminLoggedIn', "true");
                    this._Router.navigate(['/admin-page']);
                }
                else {
                    localStorage.setItem('isLoggedIn', "true");
                    localStorage.setItem('email', this.userLogin.username);
                    localStorage.setItem('userID', this.userLogin._id);
                    this._Router.navigate(['/home']);
                }
            }
            else {
                alert("Login failed, please try again");
            }
        }, (error) => {
        });
    }
}
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_http_connection_service__WEBPACK_IMPORTED_MODULE_3__["HttpConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 16, vars: 2, consts: [[1, "container", "text-center"], ["src", "assets/images/ct.png", "alt", "", "width", "72", "height", "57", 1, "mb-4"], [1, "h3", "mb-3", "fw-normal"], [1, "form-floating"], ["type", "email", "id", "email", "name", "email", "placeholder", "name@example.com", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "password", "id", "password", "name", "password", "placeholder", "password", "ssss", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], [1, "w-100", "btn", "btn-lg", "btn-secondary", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) { return ctx.userLogin.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.userLogin.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function LoginComponent_Template_a_click_14_listener() { return ctx.Login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.userLogin.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.userLogin.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "wCky":
/*!**************************************************************!*\
  !*** ./src/app/admin-component/admin-component.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponentComponent", function() { return AdminComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-connection.service */ "JvtM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a1) { return ["/update-product", a1]; };
function AdminComponentComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Update Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AdminComponentComponent_tr_27_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const product_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.DeleteProduct(product_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Delete Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r1.brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, product_r1._id));
} }
class AdminComponentComponent {
    constructor(_HttpClientService, _Router, activeRoute) {
        this._HttpClientService = _HttpClientService;
        this._Router = _Router;
        this.activeRoute = activeRoute;
        this.productList = [];
    }
    ngOnInit() {
        this._HttpClientService.getProducts().subscribe((result) => {
            this.productList = result;
            console.log(this.productList);
        }, (error) => {
            console.log("error is " + error);
        });
    }
    DeleteProduct(id) {
        this._HttpClientService.DeleteProduct(id).subscribe((result) => {
            alert("Deleted successfully");
            console.log(result);
            this._Router.navigate(['/admin-page']);
        }, (error) => {
            console.log("Deleted Successfully");
        });
    }
    reloadCurrentPage() {
        let currentUrl = this._Router.url;
        this._Router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this._Router.navigate([currentUrl]);
        });
    }
}
AdminComponentComponent.??fac = function AdminComponentComponent_Factory(t) { return new (t || AdminComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_http_connection_service__WEBPACK_IMPORTED_MODULE_1__["HttpConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AdminComponentComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AdminComponentComponent, selectors: [["app-admin-component"]], decls: 28, vars: 1, consts: [["routerLink", "/add-product", 1, "btn", "btn-secondary"], [1, "table", "table-hover", "table-striped"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"]], template: function AdminComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Add New Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, AdminComponentComponent_tr_27_Template, 21, 10, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.productList);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.??fac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 91, vars: 0, consts: [[1, "py-2", "bg-light", "border-bottom"], [1, "container", "d-flex", "flex-wrap"], [1, "nav", "me-auto"], [1, "nav-item"], ["routerLink", "home", "aria-current", "page", 1, "btn", "nav-link", "link-dark", "px-2", "active"], ["routerLink", "about", 1, "btn", "nav-link", "link-dark", "px-2"], ["routerLink", "books", 1, "btn", "nav-link", "link-dark", "px-2"], ["routerLink", "contact", 1, "btn", "nav-link", "link-dark", "px-2"], ["routerLink", "add-book", 1, "btn", "nav-link", "link-dark", "px-2"], [1, "nav"], ["routerLink", "sign-in", 1, "btn", "nav-link", "link-dark", "px-2"], ["routerLink", "register", 1, "btn", "nav-link", "link-dark", "px-2"], ["routerLink", "update-profile", 1, "btn", "nav-link", "link-dark", "px-2"], ["href", "#", 1, "btn", "nav-link", "link-dark", "px-2"], [1, "py-3", "mb-4", "border-bottom"], [1, "container", "d-flex", "flex-wr", "ap", "justify-content-center"], ["href", "/", 1, "d-flex", "align-items-center", "mb-3", "mb-lg-0", "me-lg-auto", "text-dark", "text-decoration-none"], ["width", "40", "height", "32", 1, "bi", "me-2"], [0, "xlink", "href", "#bootstrap"], [1, "fs-4"], [1, "p-5", "mb-4", "bg-light", "rounded-3"], [1, "container-fluid", "py-5"], [1, "bd-footer", "py-5", "mt-5", "bg-light"], [1, "container", "py-5"], [1, "row"], [1, "col-lg-3", "mb-6"], ["href", "/", "aria-label", "Bootstrap", 1, "d-inline-flex", "align-items-center", "mb-2", "link-dark", "text-decoration-none"], [1, "fs-5"], [1, "list-unstyled", "small", "text-muted"], [1, "mb-2"], [1, "col-6", "col-lg-3", "offset-lg-1", "mb-6"], [1, "list-unstyled"], ["routerLink", "/"], ["routerLink", "about"], ["routerLink", "contact"], [1, "col-6", "col-lg-3", "mb-6"], ["href", "https://stackoverflow.com/"], ["href", "https://www.dni.gov/index.php/features/2763-principles-of-artificial-intelligence-ethics-for-the-intelligence-community/"], ["href", "https://community.ibm.com/community/user/datascience/home"], ["href", "http://www.scielo.org.za/scielo.php?script=sci_arttext&pid=S1560-683X2019000100034"], ["href", "https://www.cybersecurityintelligence.com/national-cybersecurity-hub-south-africa-4637.html"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "View Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Manage Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Update profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "header", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "use", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Student Online Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "footer", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Student Online Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "ul", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "This Student Online application was designed and developed by InnoCodez Full Stack developer using various software development technologies and frameworks for the Deviare/Simplilearn phase 4 project.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "This project is still under alpha development phase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Currently v1.0.0.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Communities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Software Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Artificial Intelligence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Data Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Cloud Computing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Cyber Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "yHTb":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "ziXE":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-connection.service */ "JvtM");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a1) { return ["/product-info", a1]; };
function ProductsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Product Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductsComponent_div_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const productItem_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.buyThisProduct(productItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const productItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", productItem_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](productItem_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("R", productItem_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, productItem_r1._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", productItem_r1.quantity, " items are left.");
} }
class ProductsComponent {
    constructor(_HttpConnectionService, _CartService, _Router, _ActivatedRoute) {
        this._HttpConnectionService = _HttpConnectionService;
        this._CartService = _CartService;
        this._Router = _Router;
        this._ActivatedRoute = _ActivatedRoute;
        this.listProducts = [];
        this.cartItems = [];
    }
    ngOnInit() {
        this.categorySelected = this._ActivatedRoute.snapshot.paramMap.get('category');
        alert("category is" + this.categorySelected);
        //getProductsByCategory(this.categorySelected)
        this._HttpConnectionService.getProductsByCategory(this.categorySelected).subscribe((result) => {
            this.listProducts = result;
            console.log("list is" + this.listProducts);
        }, (error) => {
            alert("Error encountered is " + error.description);
        });
    }
    buyThisProduct(productItem) {
        this.cartItems = this._CartService.retrieveCartItemsFromLocalStorage();
        this._CartService.addItemToCart(productItem);
        alert(productItem.name + " item added to the cart");
        this._Router.navigate(['/cart']);
    }
}
ProductsComponent.??fac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_http_connection_service__WEBPACK_IMPORTED_MODULE_1__["HttpConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ProductsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 2, vars: 1, consts: [[1, "row", "row-cols-1", "row-cols-sm-2", "row-cols-md-3", "g-3"], [4, "ngFor", "ngForOf"], [1, "col"], [1, "card", "shadow-sm"], ["alt", "", "width", "100%", "height", "200", 3, "src"], [1, "card-body"], [1, "table"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "btn-group"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "routerLink"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "text-muted"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductsComponent_div_1_Template, 25, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.listProducts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map