webpackJsonp([10],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(418);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]
        ]
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = (function () {
    function SignupPage(navCtrl, UserService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.UserService = UserService;
        this.alertCtrl = alertCtrl;
        this.signup = {};
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.UserService.signup(this.signup).then(function (data) {
                _this.navCtrl.pop();
                _this.alert("Sucesso", "Registo concluído com sucesso.");
            }, function (error) {
                if (error.status == 409) {
                    _this.alert("Erro", "Este email já se encontra registado.");
                }
                else {
                    _this.alert("Erro", "Ocorreu um erro.");
                }
            });
        }
    };
    SignupPage.prototype.alert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/home/lribeiro/Sites/aiguaria-takeaway/src/pages/signup/signup.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Registo</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="login-page" padding>\n	<form #signupForm="ngForm" novalidate>\n		<ion-list>\n			<ion-item>\n				<ion-label stacked color="primary">Primeiro Nome</ion-label>\n				<ion-input [(ngModel)]="signup.first_name" name="first_name" type="text" #firstName="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="firstName.valid || submitted == false" color="danger" padding-left>\n				Primeiro nome obrigatório.\n			</p>\n			<ion-item>\n				<ion-label stacked color="primary">Último Nome</ion-label>\n				<ion-input [(ngModel)]="signup.last_name" name="last_name" type="text" #lastName="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="lastName.valid || submitted == false" color="danger" padding-left>\n				Último nome obrigatório.\n			</p>\n			<ion-item>\n				<ion-label stacked color="primary">Data de Nascimento</ion-label>\n				<ion-datetime [(ngModel)]="signup.birthday" name="birthday" #birthday="ngModel" displayFormat="DD/MMM/YYYY" max="2000" required></ion-datetime>\n			</ion-item>\n			<p ion-text [hidden]="birthday.valid || submitted == false" color="danger" padding-left>\n				Data de nascimento obrigatória.\n			</p>\n			<ion-item>\n				<ion-label stacked color="primary">Email</ion-label>\n				<ion-input [(ngModel)]="signup.email" name="email" type="email" email #email="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n				Email obrigatório.\n			</p>\n			<ion-item>\n				<ion-label stacked color="primary">Telemóvel</ion-label>\n				<ion-input [(ngModel)]="signup.mobile" name="mobile" type="tel" maxlength="9" #mobile="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="mobile.valid || submitted == false" color="danger" padding-left>\n				Telemóvel obrigatório.\n			</p>\n		</ion-list>\n\n		<div padding>\n			<button ion-button [disabled]="!signupForm.valid" (click)="onSignup(signupForm)" type="submit" block>Registar</button>\n		</div>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/lribeiro/Sites/aiguaria-takeaway/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* AlertController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map