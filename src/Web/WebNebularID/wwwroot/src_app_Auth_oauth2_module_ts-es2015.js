(self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_Auth_oauth2_module_ts"],{

/***/ 11211:
/*!***************************************************!*\
  !*** ./src/app/Auth/oauth2-callback.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OAuth2CallbackComponent": function() { return /* binding */ OAuth2CallbackComponent; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ 86665);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 42522);






class OAuth2CallbackComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.authService.authenticate('IdServer')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(this.destroy$))
            .subscribe((authResult) => {
            //  if (authResult.isSuccess() && authResult.getRedirect()) {
            //    this.router.navigateByUrl(authResult.getRedirect());
            //  }
            if (authResult.isSuccess()) {
                this.router.navigateByUrl('/');
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
OAuth2CallbackComponent.??fac = function OAuth2CallbackComponent_Factory(t) { return new (t || OAuth2CallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_3__.NbAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
OAuth2CallbackComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: OAuth2CallbackComponent, selectors: [["nb-playground-oauth2-callback"]], decls: 3, vars: 0, template: function OAuth2CallbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Authenticating...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutColumnComponent], encapsulation: 2 });


/***/ }),

/***/ 95594:
/*!******************************************!*\
  !*** ./src/app/Auth/oauth2-component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OauthComponent": function() { return /* binding */ OauthComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../@theme/layouts/one-column/one-column.layout */ 6405);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



class OauthComponent {
}
OauthComponent.??fac = function OauthComponent_Factory(t) { return new (t || OauthComponent)(); };
OauthComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: OauthComponent, selectors: [["ngx-pages"]], decls: 2, vars: 0, template: function OauthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ngx-one-column-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } }, directives: [_theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_0__.OneColumnLayoutComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 29225:
/*!************************************************!*\
  !*** ./src/app/Auth/oauth2-login.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OAuth2LoginComponent": function() { return /* binding */ OAuth2LoginComponent; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ 86665);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 42522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);






function OAuth2LoginComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OAuth2LoginComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Sign me In PLEASE !!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function OAuth2LoginComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OAuth2LoginComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Sign Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class OAuth2LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.authService
            .onTokenChange()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$))
            .subscribe((token) => {
            this.token = null;
            if (token && token.isValid()) {
                this.token = token;
            }
        });
    }
    login() {
        this.authService
            .authenticate('IdServer')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$))
            .subscribe((authResult) => { });
    }
    logout() {
        this.authService
            .logout('IdServer')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$))
            .subscribe((authResult) => { });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
OAuth2LoginComponent.??fac = function OAuth2LoginComponent_Factory(t) { return new (t || OAuth2LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_3__.NbAuthService)); };
OAuth2LoginComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OAuth2LoginComponent, selectors: [["nb-playground-auth"]], decls: 11, vars: 6, consts: [["nbButton", "", "status", "success", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "warning", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "success", 3, "click"], ["nbButton", "", "status", "warning", 3, "click"]], template: function OAuth2LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, OAuth2LoginComponent_button_9_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, OAuth2LoginComponent_button_10_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Current User Authenticated: ", !!ctx.token, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Current User Token: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](8, 4, ctx.token), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.token);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.token);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbLayoutComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbLayoutColumnComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.JsonPipe], encapsulation: 2 });


/***/ }),

/***/ 18513:
/*!***********************************************!*\
  !*** ./src/app/Auth/oauth2-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Oauth2RoutingModule": function() { return /* binding */ Oauth2RoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _oauth2_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oauth2-login.component */ 29225);
/* harmony import */ var _oauth2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oauth2-component */ 95594);
/* harmony import */ var _oauth2_callback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oauth2-callback.component */ 11211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);

//import { OAuth2CallbackComponent } from './oauth2-callback.component';





const routes = [
    {
        path: '',
        component: _oauth2_component__WEBPACK_IMPORTED_MODULE_1__.OauthComponent,
        children: [
            {
                path: 'auth',
                component: _oauth2_login_component__WEBPACK_IMPORTED_MODULE_0__.OAuth2LoginComponent,
            },
            {
                path: 'callback',
                component: _oauth2_callback_component__WEBPACK_IMPORTED_MODULE_2__.OAuth2CallbackComponent,
            },
            {
                path: '',
                redirectTo: 'auth',
            },
        ]
    },
];
class Oauth2RoutingModule {
}
Oauth2RoutingModule.??fac = function Oauth2RoutingModule_Factory(t) { return new (t || Oauth2RoutingModule)(); };
Oauth2RoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: Oauth2RoutingModule });
Oauth2RoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](Oauth2RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 78760:
/*!***************************************!*\
  !*** ./src/app/Auth/oauth2.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OAuth2PlaygroundModule": function() { return /* binding */ OAuth2PlaygroundModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 42522);
/* harmony import */ var _oauth2_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oauth2-login.component */ 29225);
/* harmony import */ var _oauth2_callback_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oauth2-callback.component */ 11211);
/* harmony import */ var _oauth2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oauth2-component */ 95594);
/* harmony import */ var _oauth2_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oauth2-routing.module */ 18513);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@theme/theme.module */ 19466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






//import { OAuth2CallbackComponent } from './oauth2-callback.component';




class OAuth2PlaygroundModule {
}
OAuth2PlaygroundModule.??fac = function OAuth2PlaygroundModule_Factory(t) { return new (t || OAuth2PlaygroundModule)(); };
OAuth2PlaygroundModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: OAuth2PlaygroundModule });
OAuth2PlaygroundModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__.ThemeModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbLayoutModule,
            _oauth2_routing_module__WEBPACK_IMPORTED_MODULE_3__.Oauth2RoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](OAuth2PlaygroundModule, { declarations: [_oauth2_login_component__WEBPACK_IMPORTED_MODULE_0__.OAuth2LoginComponent,
        _oauth2_callback_component__WEBPACK_IMPORTED_MODULE_1__.OAuth2CallbackComponent,
        _oauth2_component__WEBPACK_IMPORTED_MODULE_2__.OauthComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__.ThemeModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbLayoutModule,
        _oauth2_routing_module__WEBPACK_IMPORTED_MODULE_3__.Oauth2RoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_Auth_oauth2_module_ts-es2015.js.map