(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AuditLogs/details-auditlogs/details-auditlogs.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/AuditLogs/details-auditlogs/details-auditlogs.component.ts ***!
  \****************************************************************************/
/*! exports provided: DetailsAuditlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsAuditlogsComponent", function() { return DetailsAuditlogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/entrust.service */ "./src/app/entrust.service.ts");
/* harmony import */ var _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-label */ "./node_modules/@progress/kendo-angular-label/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function DetailsAuditlogsComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter certificate friendlyName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailsAuditlogsComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r2.field);
} }
function DetailsAuditlogsComponent_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r2.field);
} }
function DetailsAuditlogsComponent_div_15_div_4_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", opt_r11, " ");
} }
function DetailsAuditlogsComponent_div_15_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DetailsAuditlogsComponent_div_15_div_4_option_4_Template, 2, 1, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r2.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", i_r2.optionsplit);
} }
function DetailsAuditlogsComponent_div_15_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailsAuditlogsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailsAuditlogsComponent_div_15_div_2_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DetailsAuditlogsComponent_div_15_div_3_Template, 4, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DetailsAuditlogsComponent_div_15_div_4_Template, 5, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailsAuditlogsComponent_div_15_div_5_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", i_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get(i_r2.field).invalid && (ctx_r1.form.get(i_r2.field).dirty || ctx_r1.form.get(i_r2.field).touched));
} }
class DetailsAuditlogsComponent {
    constructor(entrustservice) {
        this.entrustservice = entrustservice;
        this.auditLogs = [];
        this.adInfoFormdata = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.customForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            crtFriendlyname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            adEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.datearray = [];
        this.textarray = [];
        this.dropdownarray = [];
        this.dataaarays = [];
        this.userData = {
            username: '',
            email: '',
            country: '',
            gender: ''
        };
        this.submitted = false;
        this.personProps = [];
    }
    ngOnInit() {
        this.entrustservice.getcustomFields().subscribe((response) => {
            this.auditLogs = [response];
            const auidLogs = {};
            this.auditLogs = Object.values(response);
            //  console.log(  this.auditLogs);
            const formDataObjs = {};
            this.auditLogs = this.auditLogs.filter(obj => obj.enabled === true);
            function filter(response, query) {
                return Object.values(Object.keys(response)
                    .filter(key => new RegExp('^' + query, 'g').test(key))
                    .map((key) => response[key]));
            }
            this.datearray = filter(response, 'date');
            // this.datearray = this.datearray.filter(obj => obj.enabled === true);
            this.textarray = filter(response, 'text');
            //   this.textarray = this.textarray.filter(obj => obj.enabled === true);
            this.dropdownarray = filter(response, 'dropdown');
            //  this.dropdownarray = this.dropdownarray.filter(obj => obj.enabled === true);
            console.log(filter(response, 'date'));
            console.log(filter(response, 'text'));
            console.log(filter(response, 'dropdown'));
            console.log(this.datearray);
            //check one line map below code
            for (let i = 0; i < this.datearray.length; i++) {
                this.datearray[i]["field"] = "date" + [i + 1];
            }
            this.datearray = this.datearray.filter(obj => obj.enabled === true);
            //dropdown
            for (let i = 0; i < this.dropdownarray.length; i++) {
                debugger;
                this.dropdownarray[i]["field"] = "dropdown" + [i + 1];
                this.dropdownarray[i]["type"] = "dropdown";
                //to make , separated option value to an array for dynamiclly
                this.dropdownarray[i]["optionsplit"] = this.dropdownarray[i].options.split(',');
            }
            this.dropdownarray = this.dropdownarray.filter(obj => obj.enabled === true);
            //text
            for (let i = 0; i < this.textarray.length; i++) {
                this.textarray[i]["field"] = "text" + [i + 1];
                this.textarray[i]["type"] = "text";
            }
            this.textarray = this.textarray.filter(obj => obj.enabled === true);
            console.log(this.textarray);
            const formDataObj = {};
            this.textarray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            this.dropdownarray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            console.log(this.personProps);
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](formDataObj);
        });
    }
    mapValidator(validators) {
        debugger;
        if (validators != 'NOT_MANDATORY') {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required;
        }
    }
}
DetailsAuditlogsComponent.ɵfac = function DetailsAuditlogsComponent_Factory(t) { return new (t || DetailsAuditlogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__["EntrustService"])); };
DetailsAuditlogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsAuditlogsComponent, selectors: [["app-details-auditlogs"]], outputs: { adInfoFormdata: "adInfoFormdata" }, decls: 16, vars: 4, consts: [[3, "formGroup"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], ["for", "", 1, "block"], ["id", "", "name", "name", "type", "text", "formControlName", "crtFriendlyname", 1, "form-control"], ["class", "help-block", "style", "color: #ff0000", 4, "ngIf"], ["id", "", "name", "name", "type", "text", "formControlName", "adEmail", "placeholder", "Enter additional emails, seperated by commas (optional)", 1, "form-control"], ["class", "col-sm-6", 4, "ngFor", "ngForOf"], [1, "help-block", 2, "color", "#ff0000"], [3, "ngSwitch"], ["class", "form-group", 4, "ngSwitchCase"], ["class", "  form-group", 4, "ngSwitchCase"], ["type", "text", 1, "form-control", 3, "formControlName"], ["type", "number", 1, "form-control", 3, "formControlName"], [1, "form-control", 3, "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function DetailsAuditlogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Certificate Friendly Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailsAuditlogsComponent_span_7_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Additional Emails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DetailsAuditlogsComponent_div_15_Template, 6, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.customForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.customForm.get("crtFriendlyname").errors == null ? null : ctx.customForm.get("crtFriendlyname").errors.required) && ctx.customForm.get("crtFriendlyname").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.personProps);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_3__["LabelDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1ZGl0TG9ncy9kZXRhaWxzLWF1ZGl0bG9ncy9kZXRhaWxzLWF1ZGl0bG9ncy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsAuditlogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details-auditlogs',
                templateUrl: './details-auditlogs.component.html',
                styleUrls: ['./details-auditlogs.component.css']
            }]
    }], function () { return [{ type: src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__["EntrustService"] }]; }, { adInfoFormdata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
function getdata() {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "./src/app/Certificate/Detailscertificate.ts":
/*!***************************************************!*\
  !*** ./src/app/Certificate/Detailscertificate.ts ***!
  \***************************************************/
/*! exports provided: DetailsCertificateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCertificateComponent", function() { return DetailsCertificateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_entrust_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/entrust.service */ "./src/app/entrust.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-label */ "./node_modules/@progress/kendo-angular-label/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/__ivy_ngcc__/dist/fesm2015/index.js");












function DetailsCertificateComponent_fieldset_15_tr_106_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DetailsCertificateComponent_fieldset_15_tr_106_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r9 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onCheckboxChange($event, i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dm_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", dm_r8.rowColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dm_r8.domainName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", dm_r8.domainSimble);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dm_r8.y, "");
} }
function DetailsCertificateComponent_fieldset_15_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New DN:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " cn=[domain value], o=[Org Value], l=[local value], st=[state value], c=[country value] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsCertificateComponent_fieldset_15_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.addPrimaryDomains(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Primary Domain ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsCertificateComponent_fieldset_15_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.removeDomains(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Remove Domain(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Resubmit domain for verification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsCertificateComponent_fieldset_15_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.addDomains(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Certificate Type : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Certificate Expiry : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Organization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "kendo-dropdownlist", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Organization Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "kendo-dropdownlist", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Signing Algorithm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "kendo-dropdownlist", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Extended Key Usage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "kendo-dropdownlist", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Encryption Algorithm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "kendo-dropdownlist", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Send to CT log ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " This certificate will be sent to CT logs. The contents of this certificate, including host names, will be publicly visible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Domains");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ul", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Domains in Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Domain Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "table", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Units");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Statu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, DetailsCertificateComponent_fieldset_15_tr_106_Template, 11, 4, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "kendo-grid", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DetailsCertificateComponent_fieldset_15_Template_kendo_grid_selectionChange_108_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.selectionChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "kendo-grid-checkbox-column", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "kendo-grid-column", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "kendo-grid-column", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "kendo-grid-column", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "kendo-grid-column", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "kendo-grid-column", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "kendo-grid-column", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "kendo-grid-column", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Total SAN Units for New Certificate : 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Total SAN Units for Previous Certificate : 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Net SAN Units from Inventory: 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Select Key Vault to Generate the CSR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "select", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Org Key Vault One");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Revocation Options* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " The existing certificate (Tracking ID: 1234) will be revoked due to reissue. Please choose one of the following options :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Revoke immediately. The existing certificate is not in production. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Revoke in 30 days. I need time to replace the existing certificate in production. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Revocation of the existing certificate cannot be cancelled or undone. If you need more than 30 days to replace the existing certificate, do not reissue the certificate - create a new certificate instead. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reissue ", ctx_r0.certType, " Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.certificateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.certType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.certificateForm.value.expDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultItem", "Select Organigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultItem", "Select item...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.listItemsSign);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultItem", "Select item...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultItem", "Select item...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.extradomain);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.gridView)("height", 500)("selectable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
} }
function DetailsCertificateComponent_fieldset_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New DN:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " cn=[domain value], o=[Org Value], l=[local value], st=[state value], c=[country value] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Provide additional information about this certificate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Certificate Friendly Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "PO Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Additional Emails");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Select a Value...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reissue ", ctx_r1.certType, " Certificate");
} }
function DetailsCertificateComponent_fieldset_19_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New DN:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " cn=[domain value], o=[Org Value], l=[local value], st=[state value], c=[country value]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Provide additional information about this certificate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Term 1 Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsCertificateComponent_fieldset_19_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.gotoStep1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Edit Product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Organization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Organization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Organization Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsCertificateComponent_fieldset_19_Template_a_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.gotoStep2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Edit Organization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " domain.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " secure.domain.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " secure.website.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsCertificateComponent_fieldset_19_Template_a_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.gotoStep2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Edit Domain ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Certificate Attributes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Signing Alorithm : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "SHA1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Extended Key Usage : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Server and Client Authentication ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Encryption Algorithm : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " RSA Encryption ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Send to CT logs : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsCertificateComponent_fieldset_19_Template_a_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.gotoStep2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Edit Certificate Attributes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Basic Website Security bundle enabled for : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " domain.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsCertificateComponent_fieldset_19_Template_a_click_87_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.gotoStep1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Edit Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Additional Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Field Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Field Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsCertificateComponent_fieldset_19_Template_a_click_100_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.gotoStep3(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Edit Additional Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reissue ", ctx_r2.certType, " Certificate");
} }
function DetailsCertificateComponent_a_23_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsCertificateComponent_a_23_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailsCertificateComponent_a_25_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsCertificateComponent_a_25_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailsCertificateComponent_a_27_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsCertificateComponent_a_27_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailsCertificateComponent_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsCertificateComponent_a_29_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
//import { DatePipe } from '@angular/common';
class DetailsCertificateComponent {
    //checked: any;
    constructor(router, entrustservice, route, http) {
        this.router = router;
        this.entrustservice = entrustservice;
        this.route = route;
        this.http = http;
        this.baseUrl = "";
        this.stepType = 'full';
        this.position = 'left';
        this.steps = [
            { label: 'Select Certificate', isValid: true },
            { label: 'Certificate Details', isValid: true },
            { label: 'Options', isValid: true, },
        ];
        this.listItemsSign = ['SHA-2'];
        this.keyUsage = ['Server & Client Authentication', 'Client Authentication', 'Server Authentication'];
        this.org = ['Server & Client Authentication', 'Client Authentication', 'Server Authentication'];
        //public selectedValue = 2;
        this.sumbitted = false;
        this.domains = [];
        this.selectedValue = '';
        this.oulistItems = [];
        this.organizations = [];
        this.inventories = [];
        this.organizationUnits = [];
        this.showred = true;
        this.array3 = [];
        //oulistItems:any=[];
        this.selected = 0;
        this.items = [{
                city: 'Standard OV SSL',
                value: 'STANDARD_SSL'
            }, {
                city: 'Advantage OV SSL',
                value: 'ADVANTAGE_SSL'
            }, {
                city: 'Multi-Domain OV SSL',
                value: 'UC_SSL'
            }, {
                city: 'Multi Domain EV SSL',
                value: 'EV_SSL'
            }, {
                city: 'Wildcard OV SSL',
                value: 'WILDCARD_SSL'
            }];
        // @ViewChild(DetailsInventoryComponent) childref:DetailsInventoryComponent;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            addDomain: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.certificateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            subjectAltName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            expDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            certType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            eku: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ou: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            keyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            signIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            orgnization: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.current = 0;
        this.selectedname = "Standard";
        this.selectedTitle = "Standard OV SSL";
        this.id = this.route.snapshot.paramMap.get("id");
    }
    ngOnInit() {
        this.getbyid();
        this.getdomains();
    }
    getbyid() {
        this.http.get(this.baseUrl + '/certificates/' + this.id).subscribe((response) => {
            this.reissue = response;
            //console.log(this.reissue)
            var crtName = this.items.filter(i => i.value === this.reissue.certType);
            this.certType = crtName[0].city;
            //console.log(this.certType);
            //  this.gridView= response.subjectAltName;
            this.certificateForm.patchValue({
                key: this.reissue.eku,
                ou: "Entrust",
                expDate: this.formatDate(new Date()),
                signIn: this.reissue.signingAlg,
                keyType: this.reissue.keyType,
                orgnization: this.reissue.org,
            });
        });
    }
    formatDate(date) {
        const d = new Date(this.reissue.expiresAfter);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
    addDomains() {
        const arr1 = [];
        this.extradomain = this.form.value.addDomain.split(',');
        const times = '';
        this.extradomain = this.extradomain.map((id, i) => ({ domainName: id, y: times[i], value: i }));
        //console.log(this.extradomain);
        if (this.extradomain) {
            const a = this.domains;
            const b = this.extradomain;
            var c = [];
            const arr2 = [];
            b.forEach(e => {
                var c = e.domainName.substr(e.domainName.indexOf('.')).replace(/^\./, "");
                arr2.push(c);
                ////console.log(arr2);
            });
            var uniqueResultOne = a.filter(function (obj) {
                return arr2.some(function (obj2) {
                    return obj.domainName == obj2;
                });
            });
            //console.log(uniqueResultOne)
            for (let i = 0; i < uniqueResultOne.length; i++) {
                uniqueResultOne[i].domainStatus = "false";
                uniqueResultOne[i].domainName = this.extradomain[i].domainName;
                uniqueResultOne[i].domainSimble = 'fa fa-check btn-success   p-5';
                uniqueResultOne[i].rowColor = 'bg_success';
            }
            var uniqueResultTwo = b.filter(function (obj) {
                return !uniqueResultOne.some(function (obj2) {
                    return obj.domainName == obj2.domainName;
                });
            });
            //console.log(uniqueResultTwo);
            for (let i = 0; i < uniqueResultTwo.length; i++) {
                // uniqueResultTwo[i].domainName = this.extradomain[i].domainName;
                uniqueResultTwo[i].domainStatus = "true";
                uniqueResultTwo[i].domainSimble = 'fa fa-minus-circle btn-warning  p-5';
                uniqueResultTwo[i].rowColor = 'bg_danger';
            }
            var result = uniqueResultOne.concat(uniqueResultTwo);
            this.extradomain = result;
            //console.log(this.extradomain)
        }
    }
    addPrimaryDomains() {
        //  delete obj[key];
        // delete this.extradomain[y];
        const i = this.domain;
        if (this.checked) {
            this.extradomain[i].y = 'primary';
        }
        else {
            this.extradomain[i].status = '';
        }
    }
    removeDomains() {
        const i = this.domain;
        this.extradomain.splice(i, 1);
    }
    onCheckboxChange(event, index) {
        this.checked = event.target.checked;
        //console.log(index);
        this.domain = index;
        if (index != 0) {
            //  this.extradomain[0].y='';
        }
        if (this.checked) { //this.extradomain[0].status='primary';
        }
        else {
            this.extradomain[index].status = '';
        }
        // If you need to know which checkboxes are checked
        //console.log(this.extradomain[index])
        // If you don't
        const result = event.target.checked;
        //console.log(result);
        // Do something with value
    }
    getinventory() {
        this.entrustservice.getInventry().subscribe((response) => {
            //console.log(response);
            this.inventories = response.inventories;
            const checkUsername = obj => obj.remainingCount === 0;
            var remaingcount = this.inventories.some(checkUsername);
            if (remaingcount) {
                this.inventorybutton;
            }
            //console.log(this.inventories.some(checkUsername))
        });
    }
    onTabSelect(e) {
        this.selectedname = this.items[e.index].value;
        this.selectedTitle = e.title;
        let result = this.inventories.filter(obj => obj.productType === this.selectedname);
        var remaingcount = result[0].remainingCount;
    }
    getorg() {
        this.entrustservice.getOrganization().subscribe((response) => {
            this.listItems = response.organizations;
            // //console.log(this.organizations);
        });
    }
    getfields() {
        this.entrustservice.getcustomFields().subscribe((response) => {
            this.fields = response;
            //console.log( 'CUSTOM FIELDS'+ this.fields);
        });
    }
    getorgUnit() {
        this.entrustservice.getOrganizationUnit().subscribe((response) => {
            this.oulistItems = response.organizationalUnits;
            ////console.log(this.organizationUnits);
        });
    }
    getdomains() {
        this.entrustservice.getdomain().subscribe((response) => {
            this.domains = response.domains;
            //  this.domains.forEach((key) => {
            //   key["subdomain"] = '';
            // })
            this.gridView = this.domains;
        });
    }
    prev() {
        if (this.current > 0) {
            this.current -= 1;
        }
    }
    listClick(event, newValue) {
        this.selectedItem = newValue;
    }
    next() {
        if (this.current < this.steps.length - 1) {
            this.current += 1;
        }
    }
    selectionChange(e) {
        if (e.selectedRows.length > 0) {
            // this.selectedItem = e.selectedRows[0].dataItem;
            this.selectedItem = e.selectedRows;
            for (let i = 0; i < e.selectedRows.length; i++) {
                //this.array3.push(this.selectedItem[i].dataItem);
                this.array3.push(this.selectedItem[i].dataItem.subdomain + '.' + this.selectedItem[i].dataItem.domainName);
            }
        }
        if (e.deselectedRows.length > 0) {
            // let index= e.deselectedRows[0].index;
            //  //console.log(this.array3)
            // this.array3.filter(x=>x.index)
            for (let i = 0; i < e.deselectedRows.length; i++) {
                this.array3.splice(e.deselectedRows[i].index, 1);
                // const index: number = this.array3.indexOf(e.deselectedRows[i].dataItem);
                // if (index !== -1) {
                //   this.array3.splice(e.deselectedRows[i].index, 1);
                // }
            }
        }
        ////console.log(this.array3)
    }
    // count(selectedname:string){
    //   this.selectedname = selectedname
    // }
    gotoStep1() {
        this.current = 0;
    }
    gotoStep2() {
        this.current = 1;
    }
    gotoStep3() {
        this.current = 2;
    }
    submit() {
        alert('hi');
        var csrObj = {
            "csr": '',
            "subjectAltName": ["piltd.com"],
            "tracking": {
                "customFields": {
                    "text1": "testcertificate"
                },
                "requesterPhone": "555-555-5555",
                "requesterName": "ashish shrivastava",
                "requesterEmail": "ashish-shrivastava@priyanet.com"
            },
            "signingAlg": "SHA-2",
            "eku": "SERVER_AND_CLIENT_AUTH",
            "ctLog": "true",
            "cn": "piltd.com",
            "certType": this.selectedname,
            "org": this.certificateForm.value.orgnization,
            "certExpiryDate": this.certificateForm.value.expDate,
            "validateOnly": false
        };
        this.loading = true;
        this.http.post('https://pdevtestapiservice.azure-api.net/openApi/certificate', csrObj)
            .subscribe(res => {
            this.loading = false;
            this.router.navigate(['/success']);
            // alert('Certificate created Successfully');
        }, err => {
            this.loading = false;
            this.Errors = err.error.errors[0].message;
            document.getElementById("openModalButton").click();
            return false;
            // alert(err.error.errors[0].message)
        });
    }
}
DetailsCertificateComponent.ɵfac = function DetailsCertificateComponent_Factory(t) { return new (t || DetailsCertificateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entrust_service__WEBPACK_IMPORTED_MODULE_3__["EntrustService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
DetailsCertificateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsCertificateComponent, selectors: [["app-certificateDetails"]], decls: 30, vars: 12, consts: [[1, "pcoded-content"], [1, "row"], [1, "col-lg-12", "col-md-12"], [1, "card"], [1, "card-block"], [1, "col-md-12"], ["id", "wizardc"], ["id", "design-wizard", "action", "ssl-tls.html?name=&name=&name=&name=#", "role", "application", 1, "wizard-form", "wizard", "clearfix"], [3, "steps", "stepType", "currentStep", "currentStepChange"], [1, "steps", "clearfix"], [1, "content", "clearfix"], ["id", "design-wizard-h-0", "tabindex", "-1", 1, "title", "current"], ["id", "design-wizard-h-1", "tabindex", "-1", 1, "title"], ["id", "design-wizard-p-0", "role", "tabpanel", "aria-labelledby", "design-wizard-h-0", "class", "body current", "aria-hidden", "false", "style", "left: 0px;", 4, "ngIf"], ["id", "design-wizard-h-2", "tabindex", "-1", 1, "title"], ["id", "design-wizard-p-2", "role", "tabpanel", "aria-labelledby", "design-wizard-h-2", "class", "body", 4, "ngIf"], ["id", "design-wizard-h-3", "tabindex", "-1", 1, "title"], ["id", "design-wizard-p-3", "role", "tabpanel", "aria-labelledby", "design-wizard-h-3", "class", "body", 4, "ngIf"], [1, "actions", "clearfix"], ["role", "menu", "aria-label", "Pagination", 1, "text-right"], ["aria-disabled", "true", 1, "disabled"], ["class", "k-button prev", "role", "menuitem", 3, "click", 4, "ngIf"], ["aria-disabled", "false"], ["class", "k-button k-primary", "role", "menuitem", 3, "click", 4, "ngIf"], ["id", "design-wizard-p-0", "role", "tabpanel", "aria-labelledby", "design-wizard-h-0", "aria-hidden", "false", 1, "body", "current", 2, "left", "0px"], [1, "col-sm-12"], [1, "ent-info-banner"], [1, "gotham-medium"], [3, "formGroup"], [1, "col-sm-12", "text-right"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "btn-fixed", "m-b-5", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-default", "btn-fixed", "m-b-5", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-default", "btn-fixed", "m-b-5"], [1, "row", "m-t-20"], [1, "col-sm-6"], [1, "col-sm-5"], ["type", "text", "placeholder", "Enter additional domains, separated by commas", "formControlName", "addDomain", "required", "", 1, "form-control", "p-5"], [1, "col-sm-1", "text-right", "p-l-0"], [1, "btn", "btn-primary", 3, "click"], [1, "crtformcontrol"], [1, "form-group"], ["for", "", 1, "block"], [2, "color", "#ff0000"], ["formControlName", "orgnization", 3, "defaultItem"], ["formControlName", "ou", 3, "defaultItem"], ["formControlName", "signIn", "required", "", 3, "data"], ["formControlName", "key", 3, "defaultItem"], [2, "color", "#635252"], ["formControlName", "keyType", 3, "defaultItem"], ["type", "checkbox", "checked", ""], [1, "ent-info-small"], [1, "form-group", 2, "margin", "0px"], ["role", "tablist", 1, "nav", "nav-tabs", "tabs"], [1, "nav-item"], ["data-toggle", "tab", "href", "#Certificate", "role", "tab", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#Management", "role", "tab", 1, "nav-link"], [1, "tab-content", "tabs", "card-block", "table-bordered", "p-0"], ["id", "Certificate", "role", "tabpanel", 1, "tab-pane", "active"], [1, "dt-responsive", "table-responsive"], ["id", "order-table", 1, "table", "table-striped", "table-bordered", "nowrap"], [1, "text-center"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["id", "Management", "role", "tabpanel", 1, "tab-pane"], [3, "data", "height", "selectable", "selectionChange"], ["title", "", 3, "width"], ["title", "Domain", "field", "domainName", 3, "width"], ["field", "verificationStatus", "title", "Verification Status", 3, "width"], ["field", "verificationMethod", "title", "Verification Method", 3, "width"], ["field", "ovEligible", "title", "OV Eligible", 3, "width"], ["field", "evEligible", "title", "EV Eligible", 3, "width"], ["field", "evExpiry", "title", "EV Expiry", 3, "width"], ["field", "ovExpiry", "title", "OV Expiry", 3, "width"], [1, "form-group", "m-t-20", "m-b-6"], ["href", "#", 2, "text-decoration", "dashed !important"], [1, "form-group", "m-b-6"], [1, "form-group", "m-t-20"], [1, "form-control"], [1, "col-sm-12", "m-t-20"], [1, "ent-warning-banner"], [2, "padding-left", "30px", "margin", "8px 0px"], ["type", "radio", 2, "display", "inline-block"], ["type", "radio", "checked", "", 2, "display", "inline-block"], [3, "ngClass"], ["align", "center"], ["type", "checkbox", "value", "", 3, "change"], ["id", "design-wizard-p-2", "role", "tabpanel", "aria-labelledby", "design-wizard-h-2", 1, "body"], [1, "col-sm-12", "m-b-20"], ["id", "", "name", "name", "type", "text", "placeholder", "(this field is optional)", 1, "form-control"], [1, "form-control", "required"], ["id", "", "name", "name", "type", "text", "placeholder", "Enter additional emails, seperated by commas (this field is optional)", 1, "form-control"], ["id", "design-wizard-p-3", "role", "tabpanel", "aria-labelledby", "design-wizard-h-3", 1, "body"], ["for", "", 1, "block", "txt-bold"], ["href", "javascript:void(0);", 3, "click"], [1, "row", "m-t-10"], [1, "block"], ["role", "menuitem", 1, "k-button", "prev", 3, "click"], ["role", "menuitem", 1, "k-button", "k-primary", 3, "click"]], template: function DetailsCertificateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "kendo-stepper", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentStepChange", function DetailsCertificateComponent_Template_kendo_stepper_currentStepChange_10_listener($event) { return ctx.current = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DetailsCertificateComponent_fieldset_15_Template, 148, 22, "fieldset", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DetailsCertificateComponent_fieldset_17_Template, 38, 1, "fieldset", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DetailsCertificateComponent_fieldset_19_Template, 103, 1, "fieldset", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DetailsCertificateComponent_a_23_Template, 2, 0, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DetailsCertificateComponent_a_25_Template, 2, 0, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DetailsCertificateComponent_a_27_Template, 2, 0, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DetailsCertificateComponent_a_29_Template, 2, 0, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 1100, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("steps", ctx.steps)("stepType", ctx.stepType)("currentStep", ctx.current);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current !== 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current !== 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current !== 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current === 2);
    } }, directives: [_progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_5__["StepperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_7__["LabelDirective"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_8__["DropDownListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["CheckboxColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["ColumnComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["#internal-wizard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  display: block;\n  padding: 10px 15px;\n  background: #003798;\n}\n.list-group-item.active[_ngcontent-%COMP%] {\n  background-color: #8b278c;\n  border-color: #8b278c;\n}\n.list-group-item[_ngcontent-%COMP%] {\n    position: relative;\n    display: block;\n    padding: 15px;\n    \n    background-color: #fbe1fb;\n    \n    font-size: 13px;\n    font-weight: 600;\n}\n.p-5[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\na.btn.btn-primary[_ngcontent-%COMP%] {\n\n  background-color: #448aff;\n  border-color: #448aff;\n  color: #fff;\n  cursor: pointer;\n}\n.grid-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.k-i-loading[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    font-size: 64px;\n    background-color: rgba(255,255,255,.3);\n    color: #ff6757;\n  }\n.kendo-datepicker[_ngcontent-%COMP%]{\n    display: flex;\n   justify-content: center;\n   width: 450px;\n }\nspan.k-link.ng-tns-c47-0[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n\n.alert-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #000;\n  background-color: #eff2fc;\n  border: 1px solid #00359b;\n  padding: 10px 20px;\n  }\n.form-group-bg[_ngcontent-%COMP%] {\n  background: #eff2fc;\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid #00359b;\n  }\n.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    background: none;\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  background-color: #f3f3f5;\n  border: 1px solid #e1e1e1;\n  color: #456BD1;\n  border-radius: 0px ;\n  }\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n\n  color: #456BD1;\n\n  }\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #33509C;\n  }\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  border-color: #f3f3f5 !important;\n  background-color: #f3f3f5;\n  color: #456BD1;\n  font-weight: bold;\n  border-radius: 0px ;\n  }\n\n.btn-default[_ngcontent-%COMP%] {\n    background-color: #fff;\n    border: 1px solid #456BD1;\n    color: #456BD1;\n    cursor: pointer;\n    text-align: center;\n    font-weight: bold;\n    font-size: 14px !important;\n    line-height: 1.8 !important;\n    margin-left:5px;\n}\n.ent-info-banner[_ngcontent-%COMP%] {\n  background-color: #EFF2FB;\n  border: 1px solid #003594;\n  border-radius: 0px;\n  box-sizing: border-box;\n  color: #000;\n  font-size: 14px;\n  margin-bottom: 20px;\n  margin-top: 0px;\n  padding: 15px 15px 15px 50px;\n  position: relative;\n  width: 100%;\n  }\n.ent-info-banner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 24px;\n  color: #3d3a3c;\n  }\n.ent-info-banner[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Font Awesome 5 Pro';\n  content: \"\\f05a\";\n  font-weight: 900;\n  color: #003594;\n  font-size: 2em;\n  position: absolute;\n  top: 33%;\n  left: 10px;\n  transform: translate(0, -50%);\n  }\n.ent-info-reissue[_ngcontent-%COMP%] {\n  background-color: #EFF2FB;\n  border: 1px solid #003594;\n  border-radius: 0px;\n  box-sizing: border-box;\n  color: #000;\n  font-size: 14px;\n  margin-bottom: 20px;\n  margin-top: 0px;\n  padding: 15px 15px 15px 50px;\n  position: relative;\n  width: 100%;\n  }\n.ent-info-reissue[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 24px;\n  color: #3d3a3c;\n  }\n.ent-info-reissue[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Font Awesome 5 Pro';\n  content: \"\\f05a\";\n  font-weight: 900;\n  color: #003594;\n  font-size: 2em;\n  position: absolute;\n  top: 26%;\n  left: 10px;\n  transform: translate(0, -50%);\n  }\n.ent-info-small[_ngcontent-%COMP%] {\n  background-color: #EFF2FB;\n  border: 1px solid #003594;\n  border-radius: 0px;\n  box-sizing: border-box;\n  color: #000;\n  font-size: 14px;\n  margin-bottom: 20px;\n  margin-top: 0px;\n  padding: 15px 15px 15px 50px;\n  position: relative;\n  width: 100%;\n  }\n.ent-info-small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::before {\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Font Awesome 5 Pro';\n  content: \"\\f05a\";\n  font-weight: 900;\n  color: #003594;\n  font-size: 24px;\n  position: absolute;\n  top: 35%;\n  left: 15px;\n  transform: translate(0, -50%);\n  }\n.ent-warning-banner[_ngcontent-%COMP%] {\n  background-color: #FFFBE6;\n  border: 1px solid #F2A900;\n  border-radius: 0px;\n  box-sizing: border-box;\n  color: #000;\n  font-size: 14px;\n  margin-bottom: 20px;\n  margin-top: 0px;\n  padding: 15px 15px 15px 50px;\n  position: relative;\n  width: 100%;\n  }\n.ent-warning-banner[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Font Awesome 5 Pro';\n  content: \"\\f071\";\n  font-weight: 900;\n  color: #F2A900;\n  font-size: 2em;\n  position: absolute;\n  top: 20%;\n  left: 10px;\n  transform: translate(0, -50%);\n  }\n.btn-default[_ngcontent-%COMP%]:hover {\n    background-color: #dae2f6;\n    border: 1px solid #456BD1;\n    color: #456BD1;\n    cursor: pointer;\n    text-align: center;\n    font-weight: bold;\n    font-size: 14px !important;\n    line-height: 1.8 !important;\n    margin-left: 5px;\n}\n.btn-default[_ngcontent-%COMP%]:focus {\nbackground-color: #fff;\nborder: 1px solid #456BD1;\ncolor: #456BD1;\ncursor: pointer;\ntext-align: center;\nfont-weight: bold;\nfont-size: 14px !important;\nline-height: 1.8 !important;\nmargin-left: 5px;\n}\n.btn-default[_ngcontent-%COMP%]:active {\n    background-color: #b8c7ee;\n    border: 1px solid #456BD1;\n    color: #456BD1;\n    cursor: pointer;\n    text-align: center;\n    font-weight: bold;\n    font-size: 14px !important;\n    line-height: 1.8 !important;\n    margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ2VydGlmaWNhdGUvRGV0YWlsc0NlcnRpZmljYXRlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBOztFQUVFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGFBQWE7R0FDZCx1QkFBdUI7R0FDdkIsWUFBWTtDQUNkO0FBQ0E7RUFDQyxlQUFlO0FBQ2pCO0FBQ0E7OztHQUdHO0FBQ0g7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCO0FBQ0E7RUFDQSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekI7QUFDQTtJQUNFLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CO0FBQ0E7O0VBRUEsY0FBYzs7RUFFZDtBQUNBO0VBQ0EsY0FBYztFQUNkO0FBQ0E7RUFDQSxnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CO0FBRUEsZUFBZTtBQUNmO0lBQ0Usc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25CO0FBQ0U7RUFDQSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYO0FBQ0E7RUFDQSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZDtBQUVBO0VBQ0EscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUVWLDZCQUE2QjtFQUM3QjtBQUNBO0VBQ0EseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWDtBQUVBO0VBQ0EscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2Q7QUFFQTtFQUNBLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFFViw2QkFBNkI7RUFDN0I7QUFFQTtFQUNBLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7QUFHQTtFQUNBLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFFViw2QkFBNkI7RUFDN0I7QUFDQTtFQUNBLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7QUFFQTtFQUNBLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFFViw2QkFBNkI7RUFDN0I7QUFDQTtJQUNFLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCLGNBQWM7QUFDZCxlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQiwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLGdCQUFnQjtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9DZXJ0aWZpY2F0ZS9EZXRhaWxzQ2VydGlmaWNhdGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiNpbnRlcm5hbC13aXphcmQgbGkgYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDM3OTg7XG59XG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjI3OGM7XG4gIGJvcmRlci1jb2xvcjogIzhiMjc4Yztcbn1cblxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAtMXB4OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmUxZmI7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTsgKi9cbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wLTUge1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbn1cbmEuYnRuLmJ0bi1wcmltYXJ5IHtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ4YWZmO1xuICBib3JkZXItY29sb3I6ICM0NDhhZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ3JpZC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuICAuay1pLWxvYWRpbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjMpO1xuICAgIGNvbG9yOiAjZmY2NzU3O1xuICB9XG4gIC5rZW5kby1kYXRlcGlja2Vye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIHdpZHRoOiA0NTBweDtcbiB9XG4gc3Bhbi5rLWxpbmsubmctdG5zLWM0Ny0wIHtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuLyogLmstdGFic3RyaXAtaXRlbXMge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xufSAqL1xuLmFsZXJ0LWluZm8ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMmZjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTliO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIH1cbiAgLmZvcm0tZ3JvdXAtYmcge1xuICBiYWNrZ3JvdW5kOiAjZWZmMmZjO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTliO1xuICB9XG4gIC50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHRkIGkge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ubmF2LXRhYnMgLm5hdi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmNTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbiAgY29sb3I6ICM0NTZCRDE7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA7XG4gIH1cbiAgLm5hdi10YWJzIC5uYXYtaXRlbSBhe1xuXG4gIGNvbG9yOiAjNDU2QkQxO1xuXG4gIH1cbiAgLm5hdi10YWJzIC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMzM1MDlDO1xuICB9XG4gIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjNmM2Y1ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjU7XG4gIGNvbG9yOiAjNDU2QkQxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDtcbiAgfVxuXG4gIC8qIDAzLTE1LTIwMjEgKi9cbiAgLmJ0bi1kZWZhdWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NTZCRDE7XG4gICAgY29sb3I6ICM0NTZCRDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS44ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xufVxuICAuZW50LWluZm8tYmFubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjJGQjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMzU5NDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmVudC1pbmZvLWJhbm5lciBoNCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzNkM2EzYztcbiAgfVxuXG4gIC5lbnQtaW5mby1iYW5uZXI6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IFBybyc7XG4gIGNvbnRlbnQ6IFwiXFxmMDVhXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjMDAzNTk0O1xuICBmb250LXNpemU6IDJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMzJTtcbiAgbGVmdDogMTBweDtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuZW50LWluZm8tcmVpc3N1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkYyRkI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDM1OTQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmVudC1pbmZvLXJlaXNzdWUgaDQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzZDNhM2M7XG4gIH1cblxuICAuZW50LWluZm8tcmVpc3N1ZTo6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgUHJvJztcbiAgY29udGVudDogXCJcXGYwNWFcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICMwMDM1OTQ7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjYlO1xuICBsZWZ0OiAxMHB4O1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG5cbiAgLmVudC1pbmZvLXNtYWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjJGQjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMzU5NDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIH1cblxuXG4gIC5lbnQtaW5mby1zbWFsbCA6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IFBybyc7XG4gIGNvbnRlbnQ6IFwiXFxmMDVhXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjMDAzNTk0O1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNSU7XG4gIGxlZnQ6IDE1cHg7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmVudC13YXJuaW5nLWJhbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZCRTY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGMkE5MDA7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmVudC13YXJuaW5nLWJhbm5lcjo6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgUHJvJztcbiAgY29udGVudDogXCJcXGYwNzFcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICNGMkE5MDA7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiAxMHB4O1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5idG4tZGVmYXVsdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZTJmNjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDU2QkQxO1xuICAgIGNvbG9yOiAjNDU2QkQxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuOCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uYnRuLWRlZmF1bHQ6Zm9jdXMge1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbmJvcmRlcjogMXB4IHNvbGlkICM0NTZCRDE7XG5jb2xvcjogIzQ1NkJEMTtcbmN1cnNvcjogcG9pbnRlcjtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmZvbnQtd2VpZ2h0OiBib2xkO1xuZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG5saW5lLWhlaWdodDogMS44ICFpbXBvcnRhbnQ7XG5tYXJnaW4tbGVmdDogNXB4O1xufVxuLmJ0bi1kZWZhdWx0OmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I4YzdlZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDU2QkQxO1xuICAgIGNvbG9yOiAjNDU2QkQxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuOCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsCertificateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-certificateDetails',
                templateUrl: './DetailsCertificate.html',
                styleUrls: ['./DetailsCertificate.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_entrust_service__WEBPACK_IMPORTED_MODULE_3__["EntrustService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Certificate/active-certificates/active-certificates.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Certificate/active-certificates/active-certificates.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ActiveCertificatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveCertificatesComponent", function() { return ActiveCertificatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var src_app_pages_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_entrust_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/entrust.service */ "./src/app/entrust.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/__ivy_ngcc__/dist/fesm2015/index.js");


//import { Certifcate } from '../certificate';










function ActiveCertificatesComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ActiveCertificatesComponent_ng_template_4_Template_input_input_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onFilter($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActiveCertificatesComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActiveCertificatesComponent_ng_template_6_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const dataItem_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.model.option = dataItem_r9.trackingId; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", dataItem_r9.trackingId === ctx_r1.model.option);
} }
function ActiveCertificatesComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r12 = ctx.dataItem;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dataItem_r12.trackingId);
} }
function ActiveCertificatesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const dataItem_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, dataItem_r13.issueDateTime, "MMM d, y"), " ");
} }
function ActiveCertificatesComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const dataItem_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, dataItem_r14.expiresAfter, "MMM d, y"), " ");
} }
function ActiveCertificatesComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 31);
} }
function ActiveCertificatesComponent_kendo_dialog_32_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-dialog", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ActiveCertificatesComponent_kendo_dialog_32_Template_kendo_dialog_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.close("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "kendo-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActiveCertificatesComponent_kendo_dialog_32_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.close("yes"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.errormessage);
} }
const _c0 = function () { return { filter: true }; };
class ActiveCertificatesComponent {
    constructor(router, http, httpclient) {
        this.router = router;
        this.http = http;
        this.httpclient = httpclient;
        this.mySelection = [];
        this.butDisabled = true;
        this.items = [{
                text: 'Standard OV SSL',
                name: 'STANDARD_SSL'
            }, {
                text: 'Advantage OV SSL',
                name: 'ADVANTAGE_SSL'
            }, {
                text: 'Multi-Domain OV SSL',
                name: 'UC_SSL'
            }, {
                text: 'Multi-Domain EV SSL',
                name: 'EV_SSL'
            }, {
                value: 4,
                text: 'Wildcard OV SSL',
                name: 'WILDCARD_SSL'
            }];
        this.model = { option: '' };
        this.loading = true;
        this.opened = false;
    }
    ngOnInit() {
        this.start = performance.now();
        console.log("start time", this.start);
        this.retrieveData();
    }
    onClick(event) {
        event.preventDefault();
        this.model.option;
        this.id = this.model.option;
        const id = this.model.option;
        localStorage.setItem("checkOutData", id);
        //console.log(localStorage.getItem('checkOutData'));
    }
    retrieveData() {
        debugger;
        if (this.http.hasData()) {
            // this will get the data which was previously stored in the memory
            // and there will be no HTTP request
            const data = this.http.getData();
            this.certiifcateList(data);
            // do something with data now ...
        }
        else {
            this.get();
        }
    }
    get() {
        this.http.getByStatus().subscribe((response) => {
            const obj = JSON.parse(response);
            console.log(obj);
            if (obj.status == 401) {
                this.errorHandler(obj);
            }
            if (obj.status == 501) {
                this.errormessage = obj.message;
                this.loading = false;
                this.opened = true;
                return false;
            }
            //console.log(response.status);
            // const obj =JSON.parse(response);
            //console.log(obj)
            //  this.gridData = obj.certificates;
            this.http.setData(obj);
            this.certiifcateList(obj);
        }, (error) => {
            this.errorHandler(error);
            //  this.errormessage = error;
            this.loading = false;
            //throw error;   //You can also throw the error to a global error handler
        });
    }
    certiifcateList(obj) {
        this.gridData = obj.certificates;
        this.gridView = this.gridData;
        this.model.option = obj.certificates[0].trackingId;
        localStorage.setItem("checkOutData", this.model.option);
        this.avcertificate = obj.certificates[0].trackingId;
        this.loading = true;
        for (let i = 0; i < this.gridView.length; i++) {
            let objArray = this.gridView[i].subjectAltName;
            let index = this.items.findIndex(x => x.name === this.gridView[i].certType);
            let crt = this.items[index].text;
            let san = Array.prototype.map.call(objArray, s => s.value).toString();
            // let san = sans.join(",");
            let Cn = this.gridView[i].dn;
            let Dn = Cn.split("=");
            const Cn1 = Dn[1].split(",");
            const Cn2 = Cn1[0];
            // const k1 = kp[3];
            // let obj = Object.assign(this.gridView[i], { 'cn': Cn2 }, { 'o':o1 }, { 'l':k1 }, { 'st': "" }, { 'c': "" })
            let obj = Object.assign(this.gridView[i], { 'cn': Cn2 }, { 'San': san }, { 'crtType': crt });
        }
        console.log('took ' + (performance.now() - this.start) + 'ms');
        this.loading = false;
        //console.log(this.avcertificate);
    }
    onFilter(inputValue) {
        this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_1__["process"])(this.gridData, {
            filter: {
                logic: "or",
                filters: [
                    {
                        field: 'crtType',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'cn',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'status',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'tracking.requesterName',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'San',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'issueDateTime',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'expiresAfter',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'serialNumber',
                        operator: 'contains',
                        value: inputValue
                    },
                ],
            }
        }).data;
        this.dataBinding.skip = 0;
    }
    close(status) {
        // ////console.log(`Dialog result: ${status}`);
        this.opened = false;
    }
    errorHandler(error) {
        this.loading = false;
        // Get server-side error
        switch (error.status) {
            case 500:
                this.errormessage = "Azure Internal Server is not respondening";
                this.opened = true;
                break;
            case 501:
                this.errormessage = "The API client certificate has expired. Please replace update your Entrust Certificate Services configuration and add an active TLS/SSL certificate.";
                this.opened = true;
                break;
            case 404:
                this.errormessage = "Please check the Entrust Certificate Services account to ensure that the API Username is valid";
                this.opened = true;
                return false;
            case 401:
                //this.errormessage="Authentication Failed" ;
                // this.errormessage="The API client certificate has expired. Please replace update your Entrust Certificate Services configuration and add an active TLS/SSL certificate." ;
                this.errormessage = "Please check that the Entrust Certificate Services account is still valid";
                this.opened = true;
                return false;
            case (!error.ok):
                this.errormessage = "Something went wrong while connecting to server";
                this.opened = true;
                return false;
        }
    }
}
ActiveCertificatesComponent.ɵfac = function ActiveCertificatesComponent_Factory(t) { return new (t || ActiveCertificatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entrust_service__WEBPACK_IMPORTED_MODULE_5__["EntrustService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
ActiveCertificatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActiveCertificatesComponent, selectors: [["app-active-certificates"]], viewQuery: function ActiveCertificatesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_2__["DataBindingDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_app_pages_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dataBinding = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myid = _t.first);
    } }, decls: 33, vars: 13, consts: [[1, "row"], [1, "col-lg-12", "col-md-12"], [1, "grid-wrapper"], ["kendoGridSelectBy", "trackingId", 3, "kendoGridBinding", "selectedKeys", "pageSize", "pageable", "sortable", "groupable", "reorderable", "resizable", "height", "columnMenu", "change"], ["kendoGridToolbarTemplate", ""], ["width", "60"], ["kendoGridCellTemplate", ""], ["title", "Tracking ID", "width", "150"], ["field", "crtType", "title", "Certificate Type", "width", "250"], ["field", "cn", "title", "Common Name", "width", "250"], ["field", "status", "title", "Pickup Status", "width", "150"], ["field", "serialNumber", "title", "Serial number (Hex)", "width", "250"], ["field", "tracking.trackingInfo", "title", "Cert Friendly Name", "width", "250"], ["field", "San", "title", "SAN List", "width", "300"], ["field", "issueDateTime", "title", "Issue Date", "width", "250"], ["field", "expiresAfter", "title", "Expiry Date", "width", "250"], ["class", "k-i-loading", 4, "ngIf"], [1, "col-md-12", "m-t-20"], ["id", "default-Modal", "tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body", "text-center"], [2, "font-size", "70px", "color", "#76bf69"], ["id", "icon", 1, "ion-ios-checkmark-outline"], [1, "m-b-30", "f-20", "m-t-20"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success", "waves-effect"], ["title", "Error", 3, "minWidth", "width", "close", 4, "ngIf"], [2, "margin-right", "5px"], ["placeholder", "Search in all columns...", "kendoTextBox", "", 3, "input"], ["type", "radio", "kendoRadioButton", "", 3, "checked", "click"], [2, "color", "blue"], [1, "k-i-loading"], ["title", "Error", 3, "minWidth", "width", "close"], [1, "d-flex", "flex-row", "mt-1"], [1, "align-top", "mr-3"], [1, "fas", "fa-exclamation-triangle", "fa-3x", "text-warning"], [1, "align-top", "normal-label"], [1, "col-sm-12", "m-t-10", "m-b-10", 2, "text-align", "center"], ["primary", "true", 1, "k-button", "k-primary", "conf_button", 2, "padding", "5px 16px", 3, "click"]], template: function ActiveCertificatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "kendo-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActiveCertificatesComponent_Template_kendo_grid_change_3_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ActiveCertificatesComponent_ng_template_4_Template, 4, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "kendo-grid-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ActiveCertificatesComponent_ng_template_6_Template, 1, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "kendo-grid-command-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ActiveCertificatesComponent_ng_template_8_Template, 2, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "kendo-grid-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "kendo-grid-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "kendo-grid-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "kendo-grid-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "kendo-grid-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "kendo-grid-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "kendo-grid-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ActiveCertificatesComponent_ng_template_16_Template, 2, 4, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "kendo-grid-column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ActiveCertificatesComponent_ng_template_18_Template, 2, 4, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ActiveCertificatesComponent_div_19_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Your Product Name certificate has been generated. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ActiveCertificatesComponent_kendo_dialog_32_Template, 11, 3, "kendo-dialog", 26);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("kendoGridBinding", ctx.gridView)("selectedKeys", ctx.mySelection)("pageSize", 10)("pageable", true)("sortable", true)("groupable", false)("reorderable", true)("resizable", true)("height", 450)("columnMenu", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opened);
    } }, directives: [_progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_2__["SelectionDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_2__["DataBindingDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_2__["ToolbarTemplateDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_2__["ColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_2__["CellTemplateDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_2__["CommandColumnComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_8__["TextBoxDirective"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_8__["RadioButtonDirective"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogActionsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".pcoded[_ngcontent-%COMP%]   .pcoded-content[_ngcontent-%COMP%]{\n  position: relative;\n\nmax-width: 100% !important;\nwidth:100% !important;\n\n}\n.pcoded[_ngcontent-%COMP%]   .pcoded-content[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]{\n\n    max-width: 100% !important;\n\n}\nbutton#dropdown-2[_ngcontent-%COMP%] {\n  background-color: #448aff;\n  border-color: #448aff;\n  position: relative;\n  font-size: 13px;\n  text-transform: inherit;\n  line-height: 16px;\n}\ntextarea#w3review[_ngcontent-%COMP%] {\n  resize: none;\n  overflow: hidden;\n}\n.revokeComments[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n\n  border: 5px solid green;\n  padding: 50px;\n  margin: 15px;\n}\n.k-grid[_ngcontent-%COMP%] {\n\n  margin-top: 0px;\n}\n.grid-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.k-i-loading[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n\n  border-color: currentColor;\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n  background-color: transparent;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\n  border:1px solid #000 !important;\n}\n\n.header-navbar[_ngcontent-%COMP%]   .navbar-wrapper[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size:18px; color:#fff;\n  }\n.header-navbar[_ngcontent-%COMP%]   .navbar-wrapper[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px; margin-right:3px;\n  }\n.icon[_ngcontent-%COMP%] {\n    font-weight: bold;\n    }\n.icon[_ngcontent-%COMP%]::before {\n    display: inline-block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    font-family: 'Font Awesome 5 Pro';\n    content: \"\\f82d\";\n    font-weight: 900;\n    color: #fff;\n    font-size: 15px;\n    position: absolute;\n    top: 50%;\n    left: -15px;\n    transform: translate(0, -50%);\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ2VydGlmaWNhdGUvYWN0aXZlLWNlcnRpZmljYXRlcy9hY3RpdmUtY2VydGlmaWNhdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCLG9CQUFvQjtBQUNwQiwwQkFBMEI7QUFDMUIscUJBQXFCO0FBQ3JCLG9CQUFvQjtBQUNwQjtBQUNBOztJQUVJLDBCQUEwQjs7QUFFOUI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwyQkFBMkI7O0VBRTNCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBRUE7O0VBRUUsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7O0VBRWYsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQSxpQ0FBaUM7QUFDakM7RUFDRSxjQUFjLEVBQUUsVUFBVTtFQUMxQjtBQUNBO0VBQ0EsZUFBZSxFQUFFLGdCQUFnQjtFQUNqQztBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCO0FBQ0E7SUFDQSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBRVgsNkJBQTZCO0lBQzdCO0FBRUosaUNBQWlDIiwiZmlsZSI6InNyYy9hcHAvQ2VydGlmaWNhdGUvYWN0aXZlLWNlcnRpZmljYXRlcy9hY3RpdmUtY2VydGlmaWNhdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wY29kZWQgLnBjb2RlZC1jb250ZW50e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vKiBkaXNwbGF5OiBibG9jazsgKi9cbm1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xud2lkdGg6MTAwJSAhaW1wb3J0YW50O1xuLyogbWFyZ2luOiAwIGF1dG87ICovXG59XG4ucGNvZGVkIC5wY29kZWQtY29udGVudCAgLnRlc3R7XG5cbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblxufVxuYnV0dG9uI2Ryb3Bkb3duLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ4YWZmO1xuICBib3JkZXItY29sb3I6ICM0NDhhZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG50ZXh0YXJlYSN3M3JldmlldyB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5yZXZva2VDb21tZW50cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcblxuICBib3JkZXI6IDVweCBzb2xpZCBncmVlbjtcbiAgcGFkZGluZzogNTBweDtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4uay1ncmlkIHtcblxuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4uZ3JpZC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcblxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi50YWJsZSB0ciB0aHtcbiAgYm9yZGVyOjFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XG59XG4vKiBhZGQgdGhpcyBzdHllcyBjb21tb24gc3R5bGVzICovXG4uaGVhZGVyLW5hdmJhciAubmF2YmFyLXdyYXBwZXIgLm5hdmJhci1jb250YWluZXIgLm5hdi1yaWdodCBpIHtcbiAgZm9udC1zaXplOjE4cHg7IGNvbG9yOiNmZmY7XG4gIH1cbiAgLmhlYWRlci1uYXZiYXIgLm5hdmJhci13cmFwcGVyIC5uYXZiYXItY29udGFpbmVyIC5uYXYtcmlnaHQgLnVzZXItcHJvZmlsZSBpIHtcbiAgZm9udC1zaXplOiAxNXB4OyBtYXJnaW4tcmlnaHQ6M3B4O1xuICB9XG4gIC5pY29uIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmljb246OmJlZm9yZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IFBybyc7XG4gICAgY29udGVudDogXCJcXGY4MmRcIjtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogLTE1cHg7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIH1cblxuLyogYWRkIHRoaXMgc3R5ZXMgY29tbW9uIHN0eWxlcyAqL1xuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActiveCertificatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-active-certificates',
                templateUrl: './active-certificates.component.html',
                styleUrls: ['./active-certificates.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_entrust_service__WEBPACK_IMPORTED_MODULE_5__["EntrustService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, { dataBinding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_2__["DataBindingDirective"]]
        }], myid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_pages_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/Certificate/managed-certificate/managed-certificate.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Certificate/managed-certificate/managed-certificate.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ManagedCertificateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagedCertificateComponent", function() { return ManagedCertificateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/entrust.service */ "./src/app/entrust.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/__ivy_ngcc__/dist/fesm2015/index.js");










function ManagedCertificateComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Because you selected Key Compromised as the reason for revocation,Certificate Services checked for other certificates in this account that used the same key.None were found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagedCertificateComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
} }
function ManagedCertificateComponent_kendo_dialog_71_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-dialog", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ManagedCertificateComponent_kendo_dialog_71_Template_kendo_dialog_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.closed("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Revocation request complete. Review the table below to see which certificate was revoked. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "kendo-grid", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "kendo-grid-column", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "kendo-grid-column", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "kendo-grid-column", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "kendo-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagedCertificateComponent_kendo_dialog_71_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.closed("yes"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minWidth", 350)("width", 850);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r2.gridView)("height", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 250);
} }
function ManagedCertificateComponent_kendo_dialog_72_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-dialog", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ManagedCertificateComponent_kendo_dialog_72_Template_kendo_dialog_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.close("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "kendo-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagedCertificateComponent_kendo_dialog_72_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.close("yes"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errormessage);
} }
class ManagedCertificateComponent {
    //loading: boolean= true;
    constructor(router, esc, httpclient, route) {
        this.router = router;
        this.esc = esc;
        this.httpclient = httpclient;
        this.route = route;
        //baseUrl =environment.apiserver;
        this.RevocationReasons = ['Superseded', 'Cessation Of Operation', 'Affiliation Changed', 'Key Compromised'];
        this.Revocationfinal = [{ text: 'Superseded', value: 'superseded' }, { text: 'Cessation Of Operation', value: 'cessationOfOperation'
            }, { text: 'Affiliation Changed', value: 'affiliationChanged' }, { text: 'Key Compromised', value: 'keyCompromise'
            }];
        this.gridData = [];
        this.gridView = [];
        this.mySelection = [];
        this.loading = true;
        this.opened = false;
        this.errorOpen = false;
        this.isDisabled = true;
        this.model = {
            gender: null
        };
        // this.id = this.route.snapshot.paramMap.get("id");
        this.id = localStorage.getItem('checkOutData');
    }
    close(status) {
        this.opened = false;
        this.errorOpen = false;
    }
    open() {
        this.opened = true;
    }
    ngOnInit() {
        this.getbyid();
    }
    getbyid() {
        this.esc.getBytrackingid(this.id).subscribe((data) => {
            //QA
            const response = JSON.parse(data);
            this.revokevalue = response;
            this.loading = false;
            this.gridView.push(response);
            //QA
            // this.revokevalue=data;
            //this.gridView.push(data);
        });
    }
    closed() {
        this.opened = false;
        this.router.navigate(['/']);
    }
    selectionChangeskey() {
        this.isDisabled = false;
    }
    submit() {
        this.loading = true;
        var reason = this.Revocationfinal.filter(r => r.text === this.selectedValue);
        var csrObj = {
            crlReason: reason[0].value,
            revocationComment: this.revokeCmnt
        };
        //console.log(csrObj)
        //this.loading = true;
        this.esc.crtrevoke(csrObj, this.id).subscribe(res => {
            this.loading = false;
            if (res == '') {
                this.opened = true;
                return false;
            }
            const obj = JSON.parse(res);
            //console.log(obj);
            if (obj.trackingId) {
                this.opened = true;
                return false;
            }
            switch (obj.status) {
                case 400:
                    this.errormessage = obj.errors[0].message;
                    this.errorOpen = true;
                    return false;
                case 200:
                    this.opened = true;
                    return false;
                case 500:
                    this.loading = false;
                    this.errormessage = "Azure Internal Sever Error";
                    this.errorOpen = true;
                    return false;
                case (obj.trackingId):
                    this.loading = false;
                    this.opened = true;
                    return false;
                case 401:
                    this.loading = false;
                    this.errormessage = obj.errors[0].message;
                    this.errorOpen = true;
                    return false;
                case (obj.trackingId):
                    this.loading = false;
                    this.opened = true;
                    return false;
            }
        }, err => {
            this.loading = false;
            switch (err.status) {
                case 0:
                    //  alert("Entrust Internal server error")
                    this.errormessage = "Azure Internal server error";
                    this.errorOpen = true;
                    return false;
                case 500:
                    //  alert("Entrust Internal server error")
                    this.errormessage = "Azure Internal Server error";
                    this.errorOpen = true;
                    return false;
            }
        });
    }
}
ManagedCertificateComponent.ɵfac = function ManagedCertificateComponent_Factory(t) { return new (t || ManagedCertificateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__["EntrustService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ManagedCertificateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagedCertificateComponent, selectors: [["app-managed-certificate"]], decls: 73, vars: 18, consts: [[1, "pcoded-content"], [1, "row"], [1, "col-lg-12", "col-md-12"], [1, "card"], [1, "row", "form-group"], [1, "col-sm-3"], [1, "col-sm-6"], [2, "color", "#a6093d"], ["name", "selectedValue", 3, "defaultItem", "data", "valuePrimitive", "ngModel", "selectionChange", "ngModelChange"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "revokeComments", 4, "ngIf"], ["class", "k-i-loading", 4, "ngIf"], [1, "actions", "clearfix", "m-t-20"], ["role", "menu", "aria-label", "Pagination", 1, "text-center"], ["aria-disabled", "true", 1, "disabled", 2, "display", "inline", "margin-right", "5px"], ["routerLink", "/", "role", "menuitem", 1, "k-button", "prv_button"], [2, "display", "inline"], ["role", "menuitem", 1, "k-button", "k-primary", "conf_button", 3, "click"], ["title", "Revoke", 3, "minWidth", "width", "close", 4, "ngIf"], ["title", "Error", 3, "minWidth", "width", "close", 4, "ngIf"], [1, "revokeComments"], [2, "font-size", "70px", "color", "#176b08", "text-align", "center"], ["id", "icon", 1, "ion-ios-checkmark-outline"], [1, "k-i-loading"], ["title", "Revoke", 3, "minWidth", "width", "close"], [2, "margin", "30px", "text-align", "center"], [3, "data", "height"], ["title", "Serial Number (Hex)", "field", "serialNumber", 3, "width"], ["title", "Tracking ID ", "field", "trackingId", 3, "width"], ["title", "Subject DN", "field", "dn", 3, "width"], [1, "col-sm-12", "m-t-10", "m-b-10", 2, "text-align", "center"], ["primary", "true", 1, "k-button", "k-primary", "conf_button", 3, "click"], ["title", "Error", 3, "minWidth", "width", "close"], [1, "d-flex", "flex-row", "mt-1"], [1, "align-top", "mr-3"], [1, "fas", "fa-exclamation-triangle", "fa-3x", "text-warning"], [1, "align-top", "normal-label"], ["primary", "true", 1, "k-button", "k-primary", "conf_button", 2, "padding", "5px 16px", 3, "click"]], template: function ManagedCertificateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tracking ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Certificate Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Subject DN:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Expiry Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Serial Number (Hex):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Requester:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Requester Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Reason for Revocation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "kendo-dropdownlist", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ManagedCertificateComponent_Template_kendo_dropdownlist_selectionChange_54_listener() { return ctx.selectionChangeskey(); })("ngModelChange", function ManagedCertificateComponent_Template_kendo_dropdownlist_ngModelChange_54_listener($event) { return ctx.selectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Revocation Comments:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagedCertificateComponent_Template_input_ngModelChange_60_listener($event) { return ctx.revokeCmnt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ManagedCertificateComponent_div_61_Template, 4, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ManagedCertificateComponent_div_62_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagedCertificateComponent_Template_a_click_69_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ManagedCertificateComponent_kendo_dialog_71_Template, 11, 7, "kendo-dialog", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ManagedCertificateComponent_kendo_dialog_72_Template, 11, 3, "kendo-dialog", 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.revokevalue == null ? null : ctx.revokevalue.trackingId, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.revokevalue == null ? null : ctx.revokevalue.certType, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.revokevalue == null ? null : ctx.revokevalue.dn, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.revokevalue == null ? null : ctx.revokevalue.expiresAfter, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.revokevalue == null ? null : ctx.revokevalue.serialNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.revokevalue == null ? null : ctx.revokevalue.tracking.requesterName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.revokevalue == null ? null : ctx.revokevalue.tracking.requesterEmail, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultItem", "Please Provide a Reason")("data", ctx.RevocationReasons)("valuePrimitive", true)("ngModel", ctx.selectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.revokeCmnt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedValue === "Key Compromised");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorOpen);
    } }, directives: [_progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_4__["DropDownListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__["GridComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__["ColumnComponent"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogActionsComponent"]], styles: [".card[_ngcontent-%COMP%]{\r\n  border:none;\r\n}\r\n  \r\n  .btn-default[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    border: 1px solid #456BD1;\r\n    color: #456BD1 !important;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 14px !important;\r\n    line-height: 1.8 !important;\r\n    margin-left:5px;\r\n}\r\n  .ent-info-banner[_ngcontent-%COMP%] {\r\n  background-color: #EFF2FB;\r\n  border: 1px solid #003594;\r\n  border-radius: 0px;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n  padding: 15px 15px 15px 50px;\r\n  position: relative;\r\n  width: 100%;\r\n  }\r\n  .ent-info-banner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: 24px;\r\n  color: #3d3a3c;\r\n  }\r\n  .ent-info-banner[_ngcontent-%COMP%]::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Font Awesome 5 Pro';\r\n  content: \"\\f05a\";\r\n  font-weight: 900;\r\n  color: #003594;\r\n  font-size: 2em;\r\n  position: absolute;\r\n  top: 33%;\r\n  left: 10px;\r\n  transform: translate(0, -50%);\r\n  }\r\n  .ent-info-reissue[_ngcontent-%COMP%] {\r\n  background-color: #EFF2FB;\r\n  border: 1px solid #003594;\r\n  border-radius: 0px;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n  padding: 15px 15px 15px 50px;\r\n  position: relative;\r\n  width: 100%;\r\n  }\r\n  .ent-info-reissue[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: 24px;\r\n  color: #3d3a3c;\r\n  }\r\n  .ent-info-reissue[_ngcontent-%COMP%]::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Font Awesome 5 Pro';\r\n  content: \"\\f05a\";\r\n  font-weight: 900;\r\n  color: #003594;\r\n  font-size: 2em;\r\n  position: absolute;\r\n  top: 26%;\r\n  left: 10px;\r\n  transform: translate(0, -50%);\r\n  }\r\n  .ent-info-small[_ngcontent-%COMP%] {\r\n  background-color: #EFF2FB;\r\n  border: 1px solid #003594;\r\n  border-radius: 0px;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n  padding: 15px 15px 15px 50px;\r\n  position: relative;\r\n  width: 100%;\r\n  }\r\n  .ent-info-small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Font Awesome 5 Pro';\r\n  content: \"\\f05a\";\r\n  font-weight: 900;\r\n  color: #003594;\r\n  font-size: 24px;\r\n  position: absolute;\r\n  top: 35%;\r\n  left: 15px;\r\n  transform: translate(0, -50%);\r\n  }\r\n  .ent-warning-banner[_ngcontent-%COMP%] {\r\n  background-color: #FFFBE6;\r\n  border: 1px solid #F2A900;\r\n  border-radius: 0px;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n  padding: 15px 15px 15px 50px;\r\n  position: relative;\r\n  width: 100%;\r\n  }\r\n  .ent-warning-banner[_ngcontent-%COMP%]::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Font Awesome 5 Pro';\r\n  content: \"\\f071\";\r\n  font-weight: 900;\r\n  color: #F2A900;\r\n  font-size: 2em;\r\n  position: absolute;\r\n  top: 20%;\r\n  left: 10px;\r\n  transform: translate(0, -50%);\r\n  }\r\n  .btn-default[_ngcontent-%COMP%]:hover {\r\n    background-color: #dae2f6;\r\n    border: 1px solid #456BD1;\r\n    color: #456BD1;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 14px !important;\r\n    line-height: 1.8 !important;\r\n    margin-left: 5px;\r\n}\r\n  .btn-default[_ngcontent-%COMP%]:focus {\r\nbackground-color: #fff;\r\nborder: 1px solid #456BD1;\r\ncolor: #456BD1;\r\ncursor: pointer;\r\ntext-align: center;\r\nfont-weight: bold;\r\nfont-size: 14px !important;\r\nline-height: 1.8 !important;\r\nmargin-left: 5px;\r\n}\r\n  .btn-default[_ngcontent-%COMP%]:active {\r\n    background-color: #b8c7ee;\r\n    border: 1px solid #456BD1;\r\n    color: #456BD1;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 14px !important;\r\n    line-height: 1.8 !important;\r\n    margin-left: 5px;\r\n}\r\n  .prv_button[_ngcontent-%COMP%]{\r\n  width: 130px;\r\n  background-color: #fff;\r\n  border-color: #456BD1;\r\n  color: #456BD1 !important;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 14px !important;\r\n  line-height: 1.8 !important\r\n}\r\n  .conf_button[_ngcontent-%COMP%]{\r\n\r\n  background-color: #456BD1;\r\n  border-color: #456BD1;\r\n  color: #fff !important;\r\n  cursor: pointer;\r\n  transition: all ease-in 0.3s;\r\n  width: 130px;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 14px !important;\r\n  line-height: 1.8 !important;\r\n}\r\n  .k-i-loading[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  font-size: 64px;\r\n\r\nborder-color: currentColor;\r\nborder-top-color: transparent;\r\nborder-bottom-color: transparent;\r\nbackground-color: transparent;\r\n}\r\n  .k-dialog-titlebar[_ngcontent-%COMP%]{\r\n  border-color: inherit;\r\n    color: #f5f3f3;\r\n    background-color: #8b278c;\r\n\r\n}\r\n  button.k-button.k-primary.conf_button[_ngcontent-%COMP%] {\r\n  padding: 8px 12px;\r\n}\r\n  .k-actions.k-actions-stretched[_ngcontent-%COMP%]{\r\n  border-top: none !important;\r\n}\r\n  a.disabled[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n  cursor: not-allowed; \r\n  background-color: #b8c7ee;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ2VydGlmaWNhdGUvbWFuYWdlZC1jZXJ0aWZpY2F0ZS9tYW5hZ2VkLWNlcnRpZmljYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7RUFDRSxlQUFlO0VBQ2Y7SUFDRSxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7RUFDRTtFQUNBLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7RUFDQTtFQUNBLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkO0VBRUE7RUFDQSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBRVYsNkJBQTZCO0VBQzdCO0VBQ0E7RUFDQSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYO0VBRUE7RUFDQSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZDtFQUVBO0VBQ0EscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUVWLDZCQUE2QjtFQUM3QjtFQUVBO0VBQ0EseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWDtFQUdBO0VBQ0EscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUVWLDZCQUE2QjtFQUM3QjtFQUNBO0VBQ0EseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWDtFQUVBO0VBQ0EscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUVWLDZCQUE2QjtFQUM3QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEI7RUFDQTtBQUNBLHNCQUFzQjtBQUN0Qix5QkFBeUI7QUFDekIsY0FBYztBQUNkLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLDBCQUEwQjtBQUMxQiwyQkFBMkI7QUFDM0IsZ0JBQWdCO0FBQ2hCO0VBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQjtFQUNBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQjtBQUNGO0VBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsZUFBZTtFQUVmLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCO0VBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7O0FBRWpCLDBCQUEwQjtBQUMxQiw2QkFBNkI7QUFDN0IsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QjtFQUNBO0VBQ0UscUJBQXFCO0lBQ25CLGNBQWM7SUFDZCx5QkFBeUI7O0FBRTdCO0VBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7RUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtFQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9DZXJ0aWZpY2F0ZS9tYW5hZ2VkLWNlcnRpZmljYXRlL21hbmFnZWQtY2VydGlmaWNhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gIGJvcmRlcjpub25lO1xyXG59XHJcbiAgLyogMDMtMTUtMjAyMSAqL1xyXG4gIC5idG4tZGVmYXVsdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ1NkJEMTtcclxuICAgIGNvbG9yOiAjNDU2QkQxICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuOCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG59XHJcbiAgLmVudC1pbmZvLWJhbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjJGQjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTk0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmVudC1pbmZvLWJhbm5lciBoNCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzNkM2EzYztcclxuICB9XHJcblxyXG4gIC5lbnQtaW5mby1iYW5uZXI6OmJlZm9yZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IFBybyc7XHJcbiAgY29udGVudDogXCJcXGYwNWFcIjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiAjMDAzNTk0O1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMzJTtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB9XHJcbiAgLmVudC1pbmZvLXJlaXNzdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkYyRkI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMzU5NDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZW50LWluZm8tcmVpc3N1ZSBoNCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzNkM2EzYztcclxuICB9XHJcblxyXG4gIC5lbnQtaW5mby1yZWlzc3VlOjpiZWZvcmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBQcm8nO1xyXG4gIGNvbnRlbnQ6IFwiXFxmMDVhXCI7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogIzAwMzU5NDtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyNiU7XHJcbiAgbGVmdDogMTBweDtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgfVxyXG5cclxuICAuZW50LWluZm8tc21hbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkYyRkI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMzU5NDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmVudC1pbmZvLXNtYWxsIDo6YmVmb3JlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgUHJvJztcclxuICBjb250ZW50OiBcIlxcZjA1YVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6ICMwMDM1OTQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDM1JTtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB9XHJcbiAgLmVudC13YXJuaW5nLWJhbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkJFNjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRjJBOTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5lbnQtd2FybmluZy1iYW5uZXI6OmJlZm9yZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IFBybyc7XHJcbiAgY29udGVudDogXCJcXGYwNzFcIjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiAjRjJBOTAwO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwJTtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB9XHJcbiAgLmJ0bi1kZWZhdWx0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWUyZjY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDU2QkQxO1xyXG4gICAgY29sb3I6ICM0NTZCRDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuOCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uYnRuLWRlZmF1bHQ6Zm9jdXMge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjNDU2QkQxO1xyXG5jb2xvcjogIzQ1NkJEMTtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5mb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxubGluZS1oZWlnaHQ6IDEuOCAhaW1wb3J0YW50O1xyXG5tYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5idG4tZGVmYXVsdDphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I4YzdlZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NTZCRDE7XHJcbiAgICBjb2xvcjogIzQ1NkJEMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS44ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5wcnZfYnV0dG9ue1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzQ1NkJEMTtcclxuICBjb2xvcjogIzQ1NkJEMSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuOCAhaW1wb3J0YW50XHJcbn1cclxuLmNvbmZfYnV0dG9ue1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2QkQxO1xyXG4gIGJvcmRlci1jb2xvcjogIzQ1NkJEMTtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlLWluIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMC4zcztcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmstaS1sb2FkaW5nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogNjRweDtcclxuXHJcbmJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xyXG5ib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5rLWRpYWxvZy10aXRsZWJhcntcclxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogI2Y1ZjNmMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjI3OGM7XHJcblxyXG59XHJcbmJ1dHRvbi5rLWJ1dHRvbi5rLXByaW1hcnkuY29uZl9idXR0b24ge1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG59XHJcbi5rLWFjdGlvbnMuay1hY3Rpb25zLXN0cmV0Y2hlZHtcclxuICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuYS5kaXNhYmxlZCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YzdlZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagedCertificateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-managed-certificate',
                templateUrl: './managed-certificate.component.html',
                styleUrls: ['./managed-certificate.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__["EntrustService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Certificate/reissue-certificate/reissue-certificate.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Certificate/reissue-certificate/reissue-certificate.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ReissueCertificateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReissueCertificateComponent", function() { return ReissueCertificateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_entrust_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/entrust.service */ "./src/app/entrust.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-label */ "./node_modules/@progress/kendo-angular-label/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/__ivy_ngcc__/dist/fesm2015/index.js");
















function ReissueCertificateComponent_fieldset_14_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Orgnization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReissueCertificateComponent_fieldset_14_span_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Extended key Usage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReissueCertificateComponent_fieldset_14_div_61_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Encryption Algorithm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "kendo-dropdownlist", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ReissueCertificateComponent_fieldset_14_div_61_Template_kendo_dropdownlist_selectionChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.selectionChangeseca($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r11.listItemsecaEx)("textField", "text")("valueField", "name")("valuePrimitive", true);
} }
function ReissueCertificateComponent_fieldset_14_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Encryption Algorithm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "kendo-dropdownlist", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ReissueCertificateComponent_fieldset_14_div_62_Template_kendo_dropdownlist_selectionChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.selectionChangeseca($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r12.listItemseca)("textField", "text")("valueField", "name")("valuePrimitive", true);
} }
function ReissueCertificateComponent_fieldset_14_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This certificate will be sent to CT logs. The contents of this certificate, including host names, will be publicly visible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReissueCertificateComponent_fieldset_14_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Deselecting this checkbox overrides the default CT logs setting for your account. Browsers may not trust this certificate. If you are not sure, contact your administrator. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReissueCertificateComponent_fieldset_14_ng_template_94_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 93);
} }
function ReissueCertificateComponent_fieldset_14_ng_template_94_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 94);
} }
function ReissueCertificateComponent_fieldset_14_ng_template_94_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReissueCertificateComponent_fieldset_14_ng_template_94_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const dataItem_r22 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.opendialog(dataItem_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReissueCertificateComponent_fieldset_14_ng_template_94_i_1_Template, 1, 0, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReissueCertificateComponent_fieldset_14_ng_template_94_i_2_Template, 1, 0, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dataItem_r22.domainSimble == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dataItem_r22.domainSimble == 1);
} }
function ReissueCertificateComponent_fieldset_14_ng_template_96_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReissueCertificateComponent_fieldset_14_ng_template_96_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const dataItem_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.toggle(dataItem_r28, "Include"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", dataItem_r28.Include);
} }
function ReissueCertificateComponent_fieldset_14_ng_template_98_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Primary Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReissueCertificateComponent_fieldset_14_ng_template_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReissueCertificateComponent_fieldset_14_ng_template_98_span_0_Template, 2, 0, "span", 96);
} if (rf & 2) {
    const dataItem_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dataItem_r31.domaintitle);
} }
const _c0 = function () { return { standalone: true }; };
const _c1 = function () { return { name: "[no OU]", value: null }; };
const _c2 = function () { return { checkboxOnly: true, mode: "multiple" }; };
const _c3 = function () { return { "text-align": "center" }; };
function ReissueCertificateComponent_fieldset_14_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReissueCertificateComponent_fieldset_14_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.addPrimaryDomains(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Primary Domain ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReissueCertificateComponent_fieldset_14_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.removeDomains(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Remove Domain(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReissueCertificateComponent_fieldset_14_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.addDomain = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReissueCertificateComponent_fieldset_14_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.addDomains(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Certificate Type : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Certificate Expiry : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Organization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "kendo-dropdownlist", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ReissueCertificateComponent_fieldset_14_Template_kendo_dropdownlist_selectionChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.selectionChangesOrg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ReissueCertificateComponent_fieldset_14_span_42_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Organization Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "kendo-dropdownlist", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ReissueCertificateComponent_fieldset_14_Template_kendo_dropdownlist_selectionChange_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.selectionChangesOU($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Signing Algorithm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "kendo-dropdownlist", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Extended Key Usage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "kendo-dropdownlist", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ReissueCertificateComponent_fieldset_14_Template_kendo_dropdownlist_selectionChange_58_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.selectionChangeskey($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ReissueCertificateComponent_fieldset_14_span_60_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ReissueCertificateComponent_fieldset_14_div_61_Template, 6, 4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ReissueCertificateComponent_fieldset_14_div_62_Template, 6, 4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReissueCertificateComponent_fieldset_14_Template_input_ngModelChange_65_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.isChecked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Send to CT log ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ReissueCertificateComponent_fieldset_14_div_71_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ReissueCertificateComponent_fieldset_14_div_72_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Domains");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Domains in Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Domain Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "kendo-grid", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ReissueCertificateComponent_fieldset_14_Template_kendo_grid_selectionChange_89_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.dmIncrtselectionChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "kendo-grid-checkbox-column", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "kendo-grid-column", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "kendo-grid-column", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "kendo-grid-column", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, ReissueCertificateComponent_fieldset_14_ng_template_94_Template, 3, 2, "ng-template", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "kendo-grid-column", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, ReissueCertificateComponent_fieldset_14_ng_template_96_Template, 1, 1, "ng-template", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "kendo-grid-column", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, ReissueCertificateComponent_fieldset_14_ng_template_98_Template, 1, 1, "ng-template", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "kendo-grid", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ReissueCertificateComponent_fieldset_14_Template_kendo_grid_selectionChange_100_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.dmselectionChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "kendo-grid-checkbox-column", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "kendo-grid-column", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "kendo-grid-column", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "kendo-grid-column", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "kendo-grid-column", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "kendo-grid-column", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "kendo-grid-column", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "kendo-grid-column", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " revoked in 30 days.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Revocation of the existing certificate cannot be cancelled or undone. If you need more than 30 days to replace the existing certificate, do not reissue the certificate \u2013 create a new certificate instead. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reissue ", ctx_r0.certType, " Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.addDomain)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](55, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.certificateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.certType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 53, ctx_r0.expDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.listItemsOrg)("textField", "name")("valueField", "name")("valuePrimitive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.certificateForm.get("orgnization").errors == null ? null : ctx_r0.certificateForm.get("orgnization").errors.required) && ctx_r0.certificateForm.get("orgnization").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.dataoulistItems)("textField", "name")("valueField", "name")("defaultItem", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](56, _c1))("valuePrimitive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultItem", "SHA-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.listItemskey)("textField", "text")("valueField", "name")("valuePrimitive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.certificateForm.get("eku").errors == null ? null : ctx_r0.certificateForm.get("eku").errors.required) && ctx_r0.certificateForm.get("eku").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showEcc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showEcc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.griddata)("rowClass", ctx_r0.rowCallback)("height", 500)("selectable", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 70)("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](58, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 70)("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](59, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.gridView)("height", 500)("selectable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total SAN Units for New Certificate : ", ctx_r0.totalNewCrtSAN, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total SAN Units for Previous Certificate :", ctx_r0.totalOldCrtSAN, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Net SAN Units from Inventory: ", ctx_r0.totalNewCrtSAN - ctx_r0.totalOldCrtSAN, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The existing certificate (Tracking ID: ", ctx_r0.reissue == null ? null : ctx_r0.reissue.trackingId, ") will be ");
} }
function ReissueCertificateComponent_fieldset_16_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter certificate friendlyName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReissueCertificateComponent_fieldset_16_div_27_div_2_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReissueCertificateComponent_fieldset_16_div_27_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReissueCertificateComponent_fieldset_16_div_27_div_2_b_3_Template, 2, 0, "b", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r47.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r47.mandatory != "NOT_MANDATORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r47.field);
} }
function ReissueCertificateComponent_fieldset_16_div_27_div_3_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReissueCertificateComponent_fieldset_16_div_27_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReissueCertificateComponent_fieldset_16_div_27_div_3_b_3_Template, 2, 0, "b", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r47.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r47.mandatory != "NOT_MANDATORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r47.field);
} }
function ReissueCertificateComponent_fieldset_16_div_27_div_4_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReissueCertificateComponent_fieldset_16_div_27_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReissueCertificateComponent_fieldset_16_div_27_div_4_b_3_Template, 2, 0, "b", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r47.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r47.mandatory != "NOT_MANDATORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r47.field);
} }
function ReissueCertificateComponent_fieldset_16_div_27_div_5_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReissueCertificateComponent_fieldset_16_div_27_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReissueCertificateComponent_fieldset_16_div_27_div_5_b_3_Template, 2, 0, "b", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r47.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r47.mandatory != "NOT_MANDATORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r47.field);
} }
function ReissueCertificateComponent_fieldset_16_div_27_div_6_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReissueCertificateComponent_fieldset_16_div_27_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReissueCertificateComponent_fieldset_16_div_27_div_6_b_3_Template, 2, 0, "b", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "kendo-dropdownlist", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r47.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r47.mandatory != "NOT_MANDATORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r47.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", i_r47.optionsplit);
} }
function ReissueCertificateComponent_fieldset_16_div_27_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReissueCertificateComponent_fieldset_16_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReissueCertificateComponent_fieldset_16_div_27_div_2_Template, 5, 3, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReissueCertificateComponent_fieldset_16_div_27_div_3_Template, 5, 3, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReissueCertificateComponent_fieldset_16_div_27_div_4_Template, 5, 3, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReissueCertificateComponent_fieldset_16_div_27_div_5_Template, 5, 3, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReissueCertificateComponent_fieldset_16_div_27_div_6_Template, 5, 4, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ReissueCertificateComponent_fieldset_16_div_27_div_7_Template, 2, 0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r47 = ctx.$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", i_r47.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.form.get(i_r47.field).invalid && (ctx_r46.form.get(i_r47.field).dirty || ctx_r46.form.get(i_r47.field).touched));
} }
function ReissueCertificateComponent_fieldset_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Provide additional information about this certificate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Certificate Friendly Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ReissueCertificateComponent_fieldset_16_span_19_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Additional Emails");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ReissueCertificateComponent_fieldset_16_div_27_Template, 8, 7, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reissue ", ctx_r1.certType, " Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.customForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.customForm.get("crtFriendlyname").errors == null ? null : ctx_r1.customForm.get("crtFriendlyname").errors.required) && ctx_r1.customForm.get("crtFriendlyname").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.personProps);
} }
function ReissueCertificateComponent_fieldset_18_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dm_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dm_r67, "");
} }
function ReissueCertificateComponent_fieldset_18_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Field Name :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r68.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r68.value);
} }
function ReissueCertificateComponent_fieldset_18_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Provide additional information about this certificate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Product Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "a", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Organization:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Organization Unit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReissueCertificateComponent_fieldset_18_Template_a_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.gotoStep1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Edit Organization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Domains:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ReissueCertificateComponent_fieldset_18_div_41_Template, 4, 1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReissueCertificateComponent_fieldset_18_Template_a_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.gotoStep1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Edit Domains ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Certificate Attributes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Signing Alorithm :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "SHA-2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Extended Key Usage : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Encryption Algorithm : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Send to CT logs : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReissueCertificateComponent_fieldset_18_Template_a_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.gotoStep1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Edit Certificate Attributes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Additional Information: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ReissueCertificateComponent_fieldset_18_div_76_Template, 8, 2, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReissueCertificateComponent_fieldset_18_Template_a_click_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.gotoStep2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Edit Additional Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reissue ", ctx_r2.certType, " Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.certType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.reviewOptions == null ? null : ctx_r2.reviewOptions.org);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.reviewOptions == null ? null : ctx_r2.reviewOptions.ou);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.reviewOptions == null ? null : ctx_r2.reviewOptions.subjectAltName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.reviewOptions.ekutext, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.reviewOptions.ecatext, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.isChecked, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 9, ctx_r2.customdata));
} }
function ReissueCertificateComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 119);
} }
function ReissueCertificateComponent_a_23_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReissueCertificateComponent_a_23_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReissueCertificateComponent_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReissueCertificateComponent_a_27_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReissueCertificateComponent_a_27_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r6.ibutton);
} }
function ReissueCertificateComponent_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReissueCertificateComponent_a_29_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReissueCertificateComponent_kendo_dialog_30_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-dialog", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ReissueCertificateComponent_kendo_dialog_30_Template_kendo_dialog_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.close("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "kendo-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReissueCertificateComponent_kendo_dialog_30_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.close("yes"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.errormessage);
} }
class ReissueCertificateComponent {
    constructor(datePipe, router, esc, route, http) {
        this.datePipe = datePipe;
        this.router = router;
        this.esc = esc;
        this.route = route;
        this.http = http;
        //baseUrl =environment.apiserver;
        this.stepType = 'full';
        this.position = 'left';
        this.steps = [
            { label: 'Certificate Details', isValid: true, },
            { label: 'Additional Information', isValid: true },
            { label: 'Summary', isValid: true, },
        ];
        // public listItemsignIn: Array<{ text: string; value: number }>  = [ { text: "SHA-2", value: 0}];
        this.listItemsignIn = [{ text: "SHA-2" }];
        this.listItemskey = [
            { text: "Server and Client Authentication", value: 0, name: "SERVER_AND_CLIENT_AUTH" },
            { text: "Client Authentication", value: 1, name: "CLIENT_AUTH" },
            { text: "Server Authentication", value: 2, name: "SERVER_AUTH" },
        ];
        this.listItemsecaEx = [
            { text: "RSA Encryption", value: 0, name: "RSA" },
        ];
        this.listItemseca = [
            { text: "RSA Encryption", value: 0, name: "RSA" },
            { text: "ECC  Encryption", value: 1, name: "EC" },
        ];
        this.sumbitted = false;
        this.domains = [];
        this.selectedValue = '';
        this.oulistItems = [];
        this.organizations = [];
        this.inventories = [];
        this.organizationUnits = [];
        this.showred = true;
        this.array3 = [];
        this.ibutton = false;
        //oulistItems:any=[];
        this.selected = 0;
        this.items = [{
                title: 'Standard OV SSL',
                name: 'STANDARD_SSL',
                value: 0
            }, {
                title: 'Advantage OV SSL',
                name: 'ADVANTAGE_SSL',
                value: 1
            }, {
                title: 'Multi-Domain OV SSL',
                name: 'UC_SSL', value: 2
            }, {
                title: 'Multi-Domain EV SSL',
                name: 'EV_SSL', value: 3
            }, {
                title: 'Wildcard OV SSL',
                name: 'WILDCARD_SSL', value: 4
            }];
        // @ViewChild(DetailsInventoryComponent) childref:DetailsInventoryComponent;
        this.customForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            crtFriendlyname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            adEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.certificateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            eku: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ou: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            eca: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            signIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            orgnization: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.opened = false;
        this.current = 0;
        this.loading = true;
        this.showEcc = false;
        this.listItemOrg = [];
        this.listItemOU = [];
        this.datearray = [];
        this.textarray = [];
        this.dropdownarray = [];
        this.DataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.personProps = [];
        this.remaingSAN = 0;
        this.totalNewCrtSAN = 0;
        this.totalOldCrtSAN = 0;
        //checked: any;
        this.aggregates = [
            { field: "units", aggregate: "sum" },
        ];
        this.azureCSRdata = false;
        this.uid = localStorage.getItem("tempid");
        this.optionsOu = [];
        this.isChecked = true;
        this.revokevalue = "ltr";
        // this.id = this.route.snapshot.paramMap.get("id");
        this.id = localStorage.getItem('checkOutData');
    }
    ngOnInit() {
        this.getOrgdata();
        this.getinventory();
    }
    getinventory() {
        this.esc.getInventry().subscribe((response) => {
            // const objs =response;
            const objs = JSON.parse(response);
            const obj = objs.inventories;
            // this.inventories= obj.filter(i=> this.items.some(o=>i.productType===o.value));
            this.sanInventoriesOne = obj.filter(i => i.productType === 'EV_SAN');
            this.sanInventoriesTwo = obj.filter(i => i.productType === 'UC_SAN');
        });
    }
    getOrgdata() {
        debugger;
        if (this.esc.hasorgData()) {
            const data = this.esc.getorgData();
            console.log('without api');
            this.getorg(data);
        }
        else {
            // this.stepsLoading =! this.stepsLoading
            this.esc.getOrganization().subscribe((response) => {
                //const obj =response;
                const obj = JSON.parse(response);
                this.esc.setorgData(obj);
                this.getorg(obj);
            });
        }
    }
    getorg(obj) {
        // this.stepsLoading =! this.stepsLoading
        this.listItemsOrg = obj.organizations.filter(o1 => o1.verificationStatus === 'APPROVED');
        this.listItemsOrg = Array.from(this.listItemsOrg.reduce((m, t) => m.set(t.name, t), new Map()).values());
        //this.datalistItemsOrg=this.listItemsOrg;
        //console.log(this.listItemsOrg);
        this.getbyid();
    }
    getbyid() {
        this.esc.getBytrackingid(this.id).subscribe((data) => {
            const response = JSON.parse(data);
            this.reissue = response;
            console.log(response);
            this.expDate = response.expiresAfter;
            this.loading = false;
            var crtName = this.items.filter(i => i.name === this.reissue.certType);
            this.certType = crtName[0].title;
            console.log(this.certType);
            if (this.certType == "Standard OV SSL") {
                //standard type doesn't support ecc
                this.showEcc = !this.showEcc;
            }
            this.tabindex = crtName[0].value;
            this.array3 = response.subjectAltName;
            var istrue;
            this.array3.forEach(e => {
                istrue = e.value.includes('www');
            });
            // if(!istrue &&  this.reissue.certType !="WILDCARD_SSL"){
            //   const basedm="www."+this.array3[0].value;
            //     this.array3.splice(1,0,{"value":basedm,"domainSimble":0,"units":0,"Include":true});
            // }
            //this.griddata = this.array3;
            const ecc = this.listItemseca.filter(obj => obj.name === this.reissue.keyType);
            this.certificateForm.controls['orgnization'].setValue(response.org);
            this.certificateForm.controls['eku'].setValue(response.eku);
            this.certificateForm.controls['signIn'].setValue(response.signingAlg);
            this.certificateForm.controls['eca'].setValue(response.keyType);
            if (response.ou != undefined) {
                this.certificateForm.controls['ou'].setValue(response.ou[0]);
            }
            this.optionsOu = response.ou;
            this.optionsOrg = response.org;
            this.selectionChangeseca(ecc[0]);
            this.listItemOrg.push(this.reissue.org);
            const orgidvalue = this.listItemsOrg.filter(o1 => o1.name === response.org);
            this.orgId = orgidvalue[0].clientId;
            //  this.selectionChangesOrg(response.org)
            this.getorgUnit();
        });
    }
    getdomains() {
        this.esc.getdomain().subscribe((data) => {
            const response = JSON.parse(data);
            this.domains = response.domains;
            this.gridView = this.domains;
            this.griddata = this.array3;
            // const basedm="www."+this.array3[0].value;
            //this.array3.splice(1,0,{"value":basedm,"domainSimble":0,"units":0,"Include":true});
            for (let i = 0; i < this.griddata.length; i++) {
                const data = this.griddata[i];
                data.domainSimble = 0;
                // data['color']=0;
                data['units'] = 0;
                data['Include'] = true;
            }
            this.griddata[0]["domaintitle"] = "Primary Domain";
            this.domainUnitsCount();
            const count = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_3__["aggregateBy"])(this.array3, this.aggregates);
            //console.log(count);
            this.totalOldCrtSAN = count.units.sum;
            //console.log(this.subjectAltName)
            //console.log(this.gridView)
            this.getfields();
        });
    }
    selectionChangesOU(value) {
        // let ouValue=[]
        // ouValue=value.name
        this.optionsOu = [];
        this.optionsOu.push(value.name);
        //console.log( this.reviewOptions)
    }
    getorgUnit() {
        // this.step2Loading = true;
        this.esc.getOrganizationUnit().subscribe((response) => {
            // const obj =response;
            const obj = JSON.parse(response);
            this.oulistItems = obj.organizationalUnits.filter(i => i.verificationStatus === "APPROVED");
            //console.log(this.oulistItems);
            this.oulistItems = this.oulistItems.map((org, i) => ({ name: org.name, value: i, clientId: org.clientId }));
            this.dataoulistItems = this.oulistItems;
            //console.log(this.oulistItems);
            this.getdomains();
        });
    }
    formatDate(date) {
        const d = new Date(this.reissue.expiresAfter);
        return d;
    }
    //step2
    //doaminmangement grid selection
    //doaminmangement grid selection
    addDomains() {
        let data = this.addDomain.split(',');
        this.domains.forEach(obj2 => {
            for (let i = 0; i < data.length; i++) {
                let filterdata = this.array3.filter(val => val.value.includes(data[i]));
                if (filterdata.length == 0) {
                    let exists = data[i].includes(obj2.domainName);
                    if (exists) {
                        this.array3.push({ "value": data[i], "domainSimble": 0, "units": 0, "Include": true });
                        // this.array3[0]["domaintitle"] = "Primary Domain";
                        this.array3[0]["domaintitle"] = true;
                        //console.log(this.array3)
                    }
                }
            }
        });
        //console.log(this.array3)
        this.griddata = this.array3;
        if (this.array3.length > 0) {
            this.domainUnitsCount();
        }
    }
    domainUnitsCount() {
        switch (this.tabindex) {
            case 0:
                this.standType();
                break;
            case 1:
                this.AdvantageType();
                break;
            case 2:
                this.ovType();
                break;
            case 3:
                this.Evtype();
                break;
            case 4:
                this.wildCardtType();
                break;
            default:
                break;
        }
    }
    ovType() {
        // if (this.array3.length == 1) {
        //   const basedm = "www." + this.array3[0].value;
        //   this.array3.push({ "value": basedm, "domainSimble": 0, "units": 0, "Include": true });
        // }
        let count = this.sanInventoriesTwo[0].remainingCount;
        if (count != 0) {
            for (let i = 5; i < this.array3.length; i++) {
                const data = this.array3[i];
                data.domainSimble = 0;
                data.units = 1;
            }
        }
        else {
            for (let i = 5; i < this.array3.length; i++) {
                const data = this.array3[i];
                data.domainSimble = 1;
                data.units = 0;
                data.Include = false;
            }
        }
    }
    standType() {
        for (let i = 2; i < this.array3.length; i++) {
            const data = this.array3[i];
            data.domainSimble = 1;
            data['color'] = 0;
            data['Include'] = false;
        }
    }
    AdvantageType() {
        for (let i = 3; i < this.array3.length; i++) {
            const data = this.array3[i];
            data.domainSimble = 1;
            data['color'] = 0;
            data['Include'] = false;
        }
    }
    wildCardtType() {
        debugger;
        let iswildcard = false;
        this.array3.forEach(e => {
            iswildcard = e.value.startsWith('*');
        });
        // if (! iswildcard) {
        //   var basedm = "*." + this.array3[0].value;
        //   this.array3[1].value = basedm;
        // }
        // if(this.array3.length==1){
        //   const basedm="*."+this.array3[0].value;
        //   this.array3.push({"value":basedm,"domainSimble":0,"units":0,"Include":false});
        // }
        // for (let i = 2; i < this.array3.length; i++) {
        //   const data = this.array3[i];
        //   data.domainSimble = 0;
        //   data['units'] = 1;
        //   data['Include'] = true;
        //   if (data?.value.startsWith('*')) {
        //     data['units'] = 10;
        //   }
        //   this.remaingSAN = (i - 1);
        //   this.totalNewCrtSAN = (i - 1);
        //   let count = this.sanInventoriesOne[0].remainingCount;
        //   this.remaingSAN = count === this.remaingSAN ? this.remaingSAN : this.remaingSAN++
        //   if (this.remaingSAN > count) {
        //     data['color'] = 0;
        //     data.domainSimble = 1;
        //     data['units'] = 0;
        //     data['Include'] = false;
        //     this.remaingSAN = count;
        //     this.totalNewCrtSAN = count;
        //   }
        // }
        console.log(this.array3);
    }
    Evtype() {
        for (let i = 3; i < this.array3.length; i++) {
            const data = this.array3[i];
            data.domainSimble = 0;
            data['units'] = 1;
            data['Include'] = true;
            this.remaingSAN = (i - 2);
            this.totalNewCrtSAN = (i - 2);
            let count = this.sanInventoriesOne[0].remainingCount;
            count = 0;
            //this.remaingSAN=count===this.remaingSAN?this.remaingSAN:this.remaingSAN++
            if (this.remaingSAN > count) {
                data['color'] = 0;
                data.domainSimble = 1;
                data['units'] = 0;
                data['Include'] = false;
                this.remaingSAN = count;
                this.totalNewCrtSAN = count;
            }
        }
    }
    addPrimaryDomains() {
        this.selectedItem[0].dataItem["domaintitle"] = true;
        this.array3.forEach(element => {
            if (element.domaintitle) {
                element.domaintitle = false;
            }
        });
        this.selectedItem[0].dataItem["domaintitle"] = true;
        //console.log(this.griddata)
    }
    removeDomains() {
        for (let i = this.griddata.length - 1; i >= 0; i--) {
            let element = this.griddata[i];
            if (this.griddata[i].rmvDomain) {
                this.griddata.splice(i, 1);
            }
        }
    }
    selectionChangesOrg(value) {
        this.griddata = [];
        this.array3 = [];
        this.optionsOrg = value.name;
        this.certificateForm.controls['ou'].setValue(null);
        this.dataoulistItems = this.oulistItems.filter(obj => obj.clientId === value.clientId);
        this.orgId = value.clientId;
    }
    selectionChangeskey(value) {
        // this.optionsOrg = value.name;
    }
    //step3  additional info
    //later use app selector
    getfields() {
        this.esc.getcustomFields().subscribe((data) => {
            // const response= data;
            const response = JSON.parse(data);
            this.auditLogs = [response];
            const auidLogs = {};
            this.auditLogs = Object.values(response);
            //console.log(  this.auditLogs);
            const formDataObjs = {};
            this.auditLogs = this.auditLogs.filter(obj => obj.enabled === true);
            function filter(response, query) {
                return Object.values(Object.keys(response)
                    .filter(key => new RegExp('^' + query, 'g').test(key))
                    .map((key) => response[key]));
            }
            this.datearray = filter(response, 'date');
            // this.datearray = this.datearray.filter(obj => obj.enabled === true);
            this.textarray = filter(response, 'text');
            //   this.textarray = this.textarray.filter(obj => obj.enabled === true);
            this.dropdownarray = filter(response, 'dropdown');
            //  this.dropdownarray = this.dropdownarray.filter(obj => obj.enabled === true);
            // //console.log(filter(response, 'date'));
            // //console.log(filter(response, 'text'));
            // //console.log(filter(response, 'dropdown'));
            this.emailarray = filter(response, 'email');
            //  this.emailarray = this.emailarray.filter(obj => obj.enabled === true);
            this.numberarray = filter(response, 'number');
            //  this.numberarray = this.numberarray.filter(obj => obj.enabled === true);
            //console.log(this.emailarray);
            //console.log(this.numberarray);
            //check one line map below code
            for (let i = 0; i < this.datearray.length; i++) {
                this.datearray[i]["field"] = "date" + [i + 1];
            }
            this.datearray = this.datearray.filter(obj => obj.enabled === true);
            //console.log(this.datearray)
            //dropdown
            for (let i = 0; i < this.dropdownarray.length; i++) {
                this.dropdownarray[i]["field"] = "dropdown" + [i + 1];
                this.dropdownarray[i]["type"] = "dropdown";
                //to make , separated option value to an array for dynamiclly
                this.dropdownarray[i]["optionsplit"] = this.dropdownarray[i].options.split(',');
            }
            this.dropdownarray = this.dropdownarray.filter(obj => obj.enabled === true);
            //text
            for (let i = 0; i < this.textarray.length; i++) {
                this.textarray[i]["field"] = "text" + [i + 1];
                this.textarray[i]["type"] = "text";
            }
            this.textarray = this.textarray.filter(obj => obj.enabled === true);
            //date
            for (let i = 0; i < this.datearray.length; i++) {
                this.datearray[i]["field"] = "date" + [i + 1];
                this.datearray[i]["type"] = "date";
            }
            this.datearray = this.datearray.filter(obj => obj.enabled === true);
            //console.log(this.datearray);
            //date
            //number
            for (let i = 0; i < this.numberarray.length; i++) {
                this.numberarray[i]["field"] = "number" + [i + 1];
                this.numberarray[i]["type"] = "number";
            }
            this.numberarray = this.numberarray.filter(obj => obj.enabled === true);
            //console.log(this.numberarray);
            //number
            //email
            for (let i = 0; i < this.emailarray.length; i++) {
                this.emailarray[i]["field"] = "email" + [i + 1];
                this.emailarray[i]["type"] = "email";
            }
            this.emailarray = this.emailarray.filter(obj => obj.enabled === true);
            //console.log(this.emailarray);
            //email
            const formDataObj = {};
            this.textarray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            this.dropdownarray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            this.datearray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            this.numberarray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            this.emailarray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            //console.log(this.personProps)
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](formDataObj);
            // this.DataForm = this.generateFormControls(this.form);
            this.test();
        });
    }
    generateFormControls(form) {
        let tempGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        form.forEach(i => {
            tempGroup.addControl(i.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''));
        });
        return tempGroup;
    }
    test() {
        var x = {};
        x = this.reissue.tracking.customFields;
        //console.log(x)
        var y = Object.keys(this.form.value);
        //console.log(this.reissue.tracking.customFields.text1)
        //let x=Object.entries(this.reissue.tracking.customFields);
        //let y=Object.entries( JSON.parse(JSON.stringify( this.form.value)));
        var testform = JSON.parse(JSON.stringify(this.form.value));
        y.forEach(i => {
            // tempGroup.addControl(i.name, new FormControl(''))
            this.reissue.tracking.customFields[i];
            this.form.controls[i];
            this.form.get(i).setValue(this.reissue.tracking.customFields[i]);
            // this.form.value;
        });
        // Object.keys(this.form.value).forEach(name => {
        //   Object.keys(this.reissue.tracking.customFields).forEach(x => {
        //console.log(name);
        //console.log( Object.keys(this.reissue.tracking.customFields));
        //     if(name===x)
        //     {
        //       this.form.patchValue(
        //         {
        //                         name:this.reissue.tracking.customFields[x]
        //         })
        //       //console.log(  this.form);
        //     }
        //   });
        // });
    }
    mapValidator(validators) {
        if (validators != 'NOT_MANDATORY') {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required;
        }
    }
    selectionChangeseca(v) {
        this.optionseca = v.value;
        if (v.value == 1) {
            this.csrazureprop = {
                crv: "P-256",
                keyType: v.name,
                keysize: 256,
                kid: this.uid
            };
        }
        else {
            this.csrazureprop = {
                crv: "",
                keyType: v.name,
                keysize: 2048,
                kid: this.uid
            };
        }
    }
    toggle(dataItem, field) {
        debugger;
        dataItem[field] = !dataItem[field];
    }
    dmselectionChange(e) {
        if (e.selectedRows.length > 0) {
            // this.domainsChecked = true;
            // this.selectedItem = e.selectedRows;
            //here value means clientid
            if (this.orgId !== e.selectedRows[0].dataItem.clientId) {
                this.opened = true;
                this.errormessage = "The domian is not in an approved domain  for " + this.optionsOrg;
                return;
            }
            this.addDomain = e.selectedRows[0].dataItem.domainName;
        }
    }
    //   public selectionChange(e) {
    //     if(e.selectedRows.length>0){
    //     this.selectedItem = e.selectedRows;
    //       for(let i=0; i < e.selectedRows.length; i++){
    //        this.array3.push(this.selectedItem[i].dataItem.domainName);
    //     }
    //     }
    //     if(e.deselectedRows.length>0){
    //       for(let i=0; i < e.deselectedRows.length; i++){
    //         this.array3.splice(e.deselectedRows[i].index, 1)
    //       }
    //     }
    // //console.log(this.array3)
    //   }
    prev() {
        if (this.current > 0) {
            this.current -= 1;
        }
    }
    listClick(event, newValue) {
        this.selectedItem = newValue;
    }
    next() {
        if (this.current < this.steps.length - 1) {
            this.current += 1;
        }
        if (this.current == 1) {
            if (this.certificateForm.invalid) {
                this.current = 0;
                this.certificateForm.markAllAsTouched();
                return false;
            }
            const filterData = this.griddata.filter(e => e.Include == true);
            var isprimary = false;
            for (let i = 0; i < filterData.length; i++) {
                const e = filterData[i];
                if ('domaintitle' in filterData[i]) {
                    isprimary = true;
                }
            }
            if (!isprimary) {
                this.current = 0;
                this.opendialog(1);
                return false;
            }
            //no need of this final data filtering based on included true.if want to show Error popup then enable it.//
            //  const isvalid= this.griddata.some(d=>  d.domainSimble == 1)
            //  if(isvalid){this.current = 0
            //   const domain=''
            //   this.opendialog(domain)
            // }
        }
        if (this.current == 2) {
            if (this.customForm.invalid || this.form.invalid) {
                this.current = 1;
                this.customForm.get('crtFriendlyname').markAsTouched();
                this.form.markAllAsTouched();
                return false;
            }
            //this.reviewSAN = this.array3.map(function (el) { return el.dmName; });
            //console.log(  this.customdata)
            this.reviewObj();
            if (this.azureCSRdata == false) {
                this.createOnazure();
            }
        }
    }
    reviewObj() {
        //no need below steps already validating in button click.but remove later
        this.reviewSAN = this.griddata.filter(e => e.Include == true);
        this.reviewSAN = this.reviewSAN.map(function (el) { return el.value; });
        this.customdata = JSON.parse(JSON.stringify(this.form.value));
        const finaldata = this.certificateForm.value;
        const ecadata = this.listItemseca.filter(o => o.name === finaldata.eca);
        const ekudata = this.listItemskey.filter(o => o.name === finaldata.eku);
        // const oudata=[];
        // oudata.map(finaldata.ou[0])
        if (this.optionsOu == undefined) {
            this.optionsOu = [];
        }
        else {
            this.optionsOu;
        }
        this.reviewOptions = {
            "subjectAltName": this.reviewSAN,
            "signingAlg": finaldata.signIn,
            "eku": finaldata.eku,
            "ekutext": ekudata[0].text,
            "ctLog": this.isChecked,
            "eca": finaldata.eca,
            "ecatext": ecadata[0].text,
            "certType": this.certType,
            "org": finaldata.orgnization,
            "ou": this.optionsOu,
            "certExpiryDate": this.datePipe.transform(this.expDate, 'yyyy-MM-dd'),
            "tracking": {
                "customFields": this.customdata,
                "requesterName": this.customForm.value.crtFriendlyname,
            }
        };
        //console.log(this.reviewOptions);
    }
    // count(selectedname:string){
    //   this.selectedname = selectedname
    // }
    gotoStep1() {
        this.current = 0;
    }
    gotoStep2() {
        this.current = 1;
    }
    //ctlogcheckbox
    checkValue(event) {
        console.log(event);
    }
    submit() {
        var csrObj = {
            "csr": this.azurecsr,
            "signingAlg": this.reviewOptions.signingAlg,
            "eku": this.reviewOptions.eku,
            "ctLog": this.isChecked,
            "org": this.certificateForm.value.orgnization,
            "ou": this.reviewOptions.ou,
            "subjectAltName": this.reviewOptions.subjectAltName,
            "tracking": {
                "requesterName": this.customForm.value.crtFriendlyname,
                "customFields": this.customdata,
            }
        };
        //console.log(csrObj);
        localStorage.setItem("productype", this.certType);
        this.loading = true;
        this.esc.crtrissue(csrObj, this.reissue.trackingId).subscribe(res => {
            const obj = JSON.parse(res);
            //console.log(obj);
            if (obj.trackingId) {
                var mergeChaincrt = obj === null || obj === void 0 ? void 0 : obj.endEntityCert;
                mergeChaincrt = mergeChaincrt.replace("-----BEGIN CERTIFICATE-----", '');
                mergeChaincrt = mergeChaincrt.replace("-----END CERTIFICATE-----", '');
                //console.log(mergeChaincrt)
                this.mergeOnAzure(mergeChaincrt);
                this.loading = false;
                this.router.navigate(['/success']);
            }
            switch (obj.status) {
                case 400:
                    this.loading = false;
                    //   alert("Something  Wrong, "+ obj.errors[0].message );
                    this.errormessage = obj.errors[0].message;
                    this.opened = true;
                    return false;
                    break;
                case 200:
                    this.loading = false;
                    this.router.navigate(['/success']);
                    break;
                case 500:
                    this.loading = false;
                    //alert("Azure Internal Sever Error");
                    this.errormessage = "Azure Internal Sever Error";
                    this.opened = true;
                    return false;
                    break;
                case (obj.trackingId):
                    this.loading = false;
                    this.router.navigate(['/success']);
            }
        }, err => {
            this.loading = false;
            switch (err.status) {
                case 0:
                    //  alert("Entrust Internal server error")
                    this.errormessage = "Azure Internal server error";
                    this.opened = true;
                    return false;
                    break;
                case 500:
                    //  alert("Entrust Internal server error")
                    this.errormessage = "Azure Internal server error";
                    this.opened = true;
                    return false;
                    break;
            }
        });
    }
    close(status) {
        //console.log(`Dialog result: ${status}`);
        this.opened = false;
    }
    rowCallback(context) {
        const isEven = context.dataItem.color == 0;
        const isOdd = context.dataItem.color == 1;
        return {
            even: isEven,
            odd: isOdd
        };
    }
    dmIncrtselectionChange(e) {
        if (e.selectedRows.length > 0) {
            this.selectedItem = e.selectedRows;
            this.selectedItem[0].dataItem["rmvDomain"] = true;
            //console.log(this.selectedItem)
        }
        if (e.deselectedRows.length > 0) {
            this.selectedItem[0].dataItem["rmvDomain"] = false;
        }
    }
    createOnazure() {
        debugger;
        //azurecsr
        this.loading = true;
        let cn;
        cn = this.griddata.filter(o1 => o1.domaintitle == "Primary Domain");
        if (cn.length == 0) {
            cn = this.griddata.filter(o1 => o1.domaintitle == true);
        }
        //this.csrazureprop['subject'] = cn[0].value;
        var payload = {
            "policy": {
                "key_props": {
                    "exportable": true,
                    "kty": this.csrazureprop.keyType,
                    "key_size": this.csrazureprop.keysize,
                    "reuse_key": false
                },
                "x509_props": {
                    "subject": "CN=" + cn[0].value
                },
                "issuerName": "Unknown"
            }
        };
        if (this.csrazureprop.crv != "") {
            payload.policy.key_props["crv"] = this.csrazureprop.crv;
        }
        this.esc.azurecrt(this.customForm.value.crtFriendlyname, payload).subscribe(res => {
            let data = JSON.parse(res.toString());
            //console.log(data);
            if (data === null || data === void 0 ? void 0 : data.error) {
                this.catchazureError(data === null || data === void 0 ? void 0 : data.error.message);
                this.loading = false;
                return false;
            }
            else {
                this.azurecsr = data.csr;
                this.azureCSRdata = true;
                //console.log(this.azurecsr)
                this.loading = false;
                return false;
            }
        });
    }
    mergeOnAzure(csrobjazure) {
        //console.log
        var mergecsrobjazure = {
            "x5c": [csrobjazure]
        };
        this.esc.azureMergeCrt(this.customForm.value.crtFriendlyname, mergecsrobjazure)
            .subscribe(res => {
            let crtdata = JSON.parse(res);
            //console.log(crtdata);
            if (crtdata.error) {
                this.catchazureError(crtdata.error.message);
            }
        }, err => {
            this.catchazureError(err);
        });
    }
    catchazureError(err) {
        this.loading = false;
        this.errormessage = err;
        this.opened = true;
        return false;
    }
    opendialog(datadomain) {
        if (datadomain.domainSimble == 0) {
            return false;
        }
        this.opened = true;
        if (datadomain == 1) {
            this.errormessage = "Please Select Primary Domain";
            return;
        }
        this.errormessage = "Something Wrong, The SAN component" + "  " + datadomain + " " + "validation failed. Adding the SAN component" + "  " + datadomain + "  " + " would exceed maximum domains for this certificate type. The SAN cannot be added.";
    }
}
ReissueCertificateComponent.ɵfac = function ReissueCertificateComponent_Factory(t) { return new (t || ReissueCertificateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entrust_service__WEBPACK_IMPORTED_MODULE_5__["EntrustService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
ReissueCertificateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReissueCertificateComponent, selectors: [["app-reissue-certificate"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])], decls: 31, vars: 14, consts: [[1, "pcoded-content"], [1, "row"], [1, "col-lg-12", "col-md-12"], [1, "card"], [1, "col-md-12"], ["id", "wizardc"], ["id", "design-wizard", "action", "ssl-tls.html?name=&name=&name=&name=#", "role", "application", 1, "wizard-form", "wizard", "clearfix"], [3, "steps", "stepType", "currentStep", "currentStepChange"], [1, "steps", "clearfix"], [1, "content", "clearfix"], ["id", "design-wizard-h-0", "tabindex", "-1", 1, "title", "current"], ["id", "design-wizard-h-1", "tabindex", "-1", 1, "title"], ["id", "design-wizard-p-0", "role", "tabpanel", "aria-labelledby", "design-wizard-h-0", "class", "body current", "aria-hidden", "false", "style", "left: 0px;", 4, "ngIf"], ["id", "design-wizard-h-2", "tabindex", "-1", 1, "title"], ["id", "design-wizard-p-2", "role", "tabpanel", "aria-labelledby", "design-wizard-h-2", "class", "body", 4, "ngIf"], ["id", "design-wizard-h-3", "tabindex", "-1", 1, "title"], ["id", "design-wizard-p-3", "role", "tabpanel", "aria-labelledby", "design-wizard-h-3", "class", "body", 4, "ngIf"], ["class", "k-i-loading", 4, "ngIf"], [1, "actions", "clearfix"], ["role", "menu", "aria-label", "Pagination", 1, "text-right"], ["aria-disabled", "true", 1, "disabled"], ["class", "k-button prev", "role", "menuitem", 3, "click", 4, "ngIf"], ["class", "k-button prev", "routerLink", "/", "role", "menuitem", 4, "ngIf"], ["aria-disabled", "false"], ["class", "k-button k-primary", "role", "menuitem", 3, "disabled", "click", 4, "ngIf"], ["class", "k-button k-primary", "role", "menuitem", 3, "click", 4, "ngIf"], ["title", "Error", 3, "minWidth", "width", "close", 4, "ngIf"], ["id", "design-wizard-p-0", "role", "tabpanel", "aria-labelledby", "design-wizard-h-0", "aria-hidden", "false", 1, "body", "current", 2, "left", "0px"], [1, "col-sm-12"], [1, "ent-info-banner"], [1, "col-sm-12", "text-right"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "btn-fixed", "m-b-5", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-default", "btn-fixed", "m-b-5", 3, "click"], [1, "row", "m-t-20"], [1, "col-sm-6"], [1, "col-sm-5"], ["type", "text", "placeholder", "Enter additional domains, separated by commas", "required", "", 1, "form-control", "p-5", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "col-sm-1", "text-right", "p-l-0"], [1, "btn", "btn-primary", 3, "click"], [1, "crtformcontrol"], [3, "formGroup"], [1, "form-group"], ["for", "", 1, "block"], [2, "color", "#a6093d"], ["formControlName", "orgnization", 3, "data", "textField", "valueField", "valuePrimitive", "selectionChange"], ["class", "help-block", "style", "color: #a6093d", 4, "ngIf"], ["formControlName", "ou", 3, "data", "textField", "valueField", "defaultItem", "valuePrimitive", "selectionChange"], ["formControlName", "signIn", 3, "defaultItem"], ["formControlName", "eku", 3, "data", "textField", "valueField", "valuePrimitive", "selectionChange"], ["class", "form-group", 4, "ngIf"], ["type", "checkbox", "kendoCheckBox", "", 3, "ngModel", "ngModelChange"], [1, "form-group", "Certi-Main"], ["for", "", 1, "alert-info"], [1, "Certi-Main-left"], [1, "fa", "fa-info-circle"], ["class", "Certi-Main-Right ", 4, "ngIf"], ["class", "Certi-Main-Right", 4, "ngIf"], [1, "form-group", 2, "margin", "0px"], ["role", "tablist", 1, "nav", "nav-tabs", "tabs", 2, "width", "auto !important", "background", "none !important", "padding", "0px !important"], [1, "nav-item", 2, "line-height", "20px !important"], ["data-toggle", "tab", "href", "#Certificate", "role", "tab", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#Management", "role", "tab", 1, "nav-link"], [1, "tab-content", "tabs", "card-block", "table-bordered", "p-0"], ["id", "Certificate", "role", "tabpanel", 1, "tab-pane", "active"], [1, "dt-responsive", "table-responsive"], [3, "data", "rowClass", "height", "selectable", "selectionChange"], ["title", "", 3, "width"], ["field", "value", "title", "Domain", 3, "width"], ["field", "units", "title", "Units", 3, "width", "headerStyle"], ["field", "domainSimble", "title", "Status ", 3, "width", "headerStyle"], ["kendoGridCellTemplate", ""], ["field", "Include", "title", "Action", "width", "70"], ["id", "Management", "role", "tabpanel", 1, "tab-pane"], [3, "data", "height", "selectable", "selectionChange"], ["title", "Domain", "field", "domainName", 3, "width"], ["field", "verificationStatus", "title", "Verification Status", 3, "width"], ["field", "verificationMethod", "title", "Verification Method", 3, "width"], ["field", "ovEligible", "title", "OV Eligible", 3, "width"], ["field", "evEligible", "title", "EV Eligible", 3, "width"], ["field", "evExpiry", "title", "EV Expiry", 3, "width"], ["field", "ovExpiry", "title", "OV Expiry", 3, "width"], [1, "form-group", "m-t-20", "m-b-6"], [1, "form-group", "m-b-6"], [1, "form-group", "m-t-20"], [1, "col-sm-12", "m-t-20"], [1, "ent-warning-banner"], [1, "gotham-medium"], [1, "help-block", 2, "color", "#a6093d"], ["formControlName", "eca", 3, "data", "textField", "valueField", "valuePrimitive", "selectionChange"], [1, "Certi-Main-Right"], [3, "click"], ["class", "fas fa-check text-success", 4, "ngIf"], ["class", "fas fa-exclamation-triangle text-warning", 4, "ngIf"], [1, "fas", "fa-check", "text-success"], [1, "fas", "fa-exclamation-triangle", "text-warning"], ["type", "checkbox", 3, "checked", "click"], [4, "ngIf"], ["id", "design-wizard-p-2", "role", "tabpanel", "aria-labelledby", "design-wizard-h-2", 1, "body"], [1, "col-sm-12", "m-b-20"], ["id", "", "name", "name", "type", "text", "formControlName", "crtFriendlyname", "placeholder", "Azure Certificate Name", 1, "form-control"], ["id", "", "name", "name", "type", "text", "formControlName", "adEmail", "placeholder", "Enter additional emails, seperated by commas (optional)", 1, "form-control"], ["class", "col-sm-6", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], ["class", "form-group", 4, "ngSwitchCase"], ["class", "  form-group", 4, "ngSwitchCase"], ["class", "help-block", "style", "color:#a6093d", 4, "ngIf"], ["style", "color:#a6093d;", 4, "ngIf"], ["type", "text", "kendoTextBox", "", 1, "form-control", 3, "formControlName"], ["type", "number", "kendoTextBox", "", 1, "form-control", 3, "formControlName"], ["type", "email", "kendoTextBox", "", 1, "form-control", 3, "formControlName"], ["type", "date", 1, "form-control", 3, "formControlName"], [3, "data", "formControlName"], ["id", "design-wizard-p-3", "role", "tabpanel", "aria-labelledby", "design-wizard-h-3", 1, "body"], ["for", "", 1, "block", "txt-bold"], ["href", "javascript:void(0);"], [1, "row", "m-t-10"], ["href", "javascript:void(0);", 3, "click"], [4, "ngFor", "ngForOf"], [1, "block"], [1, "k-i-loading"], ["role", "menuitem", 1, "k-button", "prev", 3, "click"], ["routerLink", "/", "role", "menuitem", 1, "k-button", "prev"], ["role", "menuitem", 1, "k-button", "k-primary", 3, "click"], ["title", "Error", 3, "minWidth", "width", "close"], [1, "d-flex", "flex-row", "mt-1"], [1, "align-top", "mr-3"], [1, "fas", "fa-exclamation-triangle", "fa-3x", "text-warning"], [1, "align-top", "normal-label"], [1, "col-sm-12", "m-t-10", "m-b-10", 2, "text-align", "center"], ["primary", "true", 1, "k-button", "k-primary", "conf_button", 2, "padding", "5px 16px", 3, "click"]], template: function ReissueCertificateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "kendo-stepper", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentStepChange", function ReissueCertificateComponent_Template_kendo_stepper_currentStepChange_9_listener($event) { return ctx.current = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReissueCertificateComponent_fieldset_14_Template, 125, 60, "fieldset", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ReissueCertificateComponent_fieldset_16_Template, 28, 5, "fieldset", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ReissueCertificateComponent_fieldset_18_Template, 82, 11, "fieldset", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ReissueCertificateComponent_div_19_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReissueCertificateComponent_a_23_Template, 2, 0, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ReissueCertificateComponent_a_25_Template, 2, 0, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ReissueCertificateComponent_a_27_Template, 2, 2, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ReissueCertificateComponent_a_29_Template, 2, 0, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ReissueCertificateComponent_kendo_dialog_30_Template, 11, 3, "kendo-dialog", 26);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 1100, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("steps", ctx.steps)("stepType", ctx.stepType)("currentStep", ctx.current);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current !== 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current !== 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opened);
    } }, directives: [_progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_7__["StepperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_8__["LabelDirective"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_9__["DropDownListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_10__["CheckBoxDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__["GridComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__["CheckboxColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__["ColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__["CellTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_10__["TextBoxDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_12__["DialogActionsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: [".card[_ngcontent-%COMP%]{\r\n  border:none !important;\r\n}\r\n#internal-wizard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  display: block;\r\n  padding: 10px 15px;\r\n  background: #003798;\r\n}\r\n.list-group-item.active[_ngcontent-%COMP%] {\r\n  background-color: #8b278c;\r\n  border-color: #8b278c;\r\n}\r\n.list-group-item[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: block;\r\n    padding: 15px;\r\n    \r\n    background-color: #fbe1fb;\r\n    \r\n    font-size: 13px;\r\n    font-weight: 600;\r\n}\r\n.p-5[_ngcontent-%COMP%] {\r\n  padding: 5px !important;\r\n}\r\na.btn.btn-primary[_ngcontent-%COMP%] {\r\n\r\n  background-color: #448aff;\r\n  border-color: #448aff;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n.grid-wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.kendo-datepicker[_ngcontent-%COMP%]{\r\n    display: flex;\r\n   justify-content: center;\r\n   width: 450px;\r\n }\r\nspan.k-link.ng-tns-c47-0[_ngcontent-%COMP%] {\r\n  font-size: 19px;\r\n}\r\n\r\n.alert-info[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  color: #000;\r\n  background-color: #eff2fc;\r\n  border: 1px solid #00359b;\r\n  padding: 10px 20px;\r\n  }\r\n.form-group-bg[_ngcontent-%COMP%] {\r\n  background: #eff2fc;\r\n  padding: 15px;\r\n  margin-bottom: 20px;\r\n  border: 1px solid #00359b;\r\n  }\r\n.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    background: none;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n  background-color: #f3f3f5;\r\n  border: 1px solid #e1e1e1;\r\n  color: #456BD1;\r\n  border-radius: 0px ;\r\n  }\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\r\n  color: #456BD1;\r\n\r\n  }\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\r\n  color: #33509C;\r\n  }\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n  border-color: #f3f3f5 !important;\r\n  background-color: #f3f3f5;\r\n  color: #456BD1;\r\n  font-weight: bold;\r\n  border-radius: 0px ;\r\n  }\r\n\r\n.btn-default[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    border: 1px solid #456BD1;\r\n    color: #456BD1;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 14px !important;\r\n    line-height: 1.8 !important;\r\n    margin-left:5px;\r\n    text-transform: inherit;\r\n}\r\n.ent-info-banner[_ngcontent-%COMP%] {\r\n  background-color: #EFF2FB;\r\n  border: 1px solid #003594;\r\n  border-radius: 0px;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n  padding: 10px 15px 5px 50px;\r\n  position: relative;\r\n  width: 100%;\r\n  }\r\n.ent-info-banner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: 24px;\r\n  color: #3d3a3c;\r\n  }\r\n.ent-info-banner[_ngcontent-%COMP%]::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Font Awesome 5 Pro';\r\n  content: \"\\f05a\";\r\n  font-weight: 900;\r\n  color: #003594;\r\n  font-size: 2em;\r\n  position: absolute;\r\n  top: 47%;\r\n  left: 10px;\r\n  transform: translate(0, -50%);\r\n  }\r\n.ent-info-reissue[_ngcontent-%COMP%] {\r\n  background-color: #EFF2FB;\r\n  border: 1px solid #003594;\r\n  border-radius: 0px;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n  padding: 15px 15px 15px 50px;\r\n  position: relative;\r\n  width: 100%;\r\n  }\r\n.ent-info-reissue[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: 24px;\r\n  color: #3d3a3c;\r\n  }\r\n.ent-info-reissue[_ngcontent-%COMP%]::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Font Awesome 5 Pro';\r\n  content: \"\\f05a\";\r\n  font-weight: 900;\r\n  color: #003594;\r\n  font-size: 2em;\r\n  position: absolute;\r\n  top: 26%;\r\n  left: 10px;\r\n  transform: translate(0, -50%);\r\n  }\r\n.ent-info-small[_ngcontent-%COMP%] {\r\n  background-color: #EFF2FB;\r\n  border: 1px solid #003594;\r\n  border-radius: 0px;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n  padding: 15px 15px 15px 50px;\r\n  position: relative;\r\n  width: 100%;\r\n  }\r\n.ent-info-small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Font Awesome 5 Pro';\r\n  content: \"\\f05a\";\r\n  font-weight: 900;\r\n  color: #003594;\r\n  font-size: 24px;\r\n  position: absolute;\r\n  top: 35%;\r\n  left: 15px;\r\n  transform: translate(0, -50%);\r\n  }\r\n.ent-warning-banner[_ngcontent-%COMP%] {\r\n  background-color: #FFFBE6;\r\n  border: 1px solid #F2A900;\r\n  border-radius: 0px;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n  padding: 15px 15px 15px 50px;\r\n  position: relative;\r\n  width: 100%;\r\n  }\r\n.ent-warning-banner[_ngcontent-%COMP%]::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Font Awesome 5 Pro';\r\n  content: \"\\f071\";\r\n  font-weight: 900;\r\n  color: #F2A900;\r\n  font-size: 2em;\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 10px;\r\n  transform: translate(0, -50%);\r\n  }\r\n.btn-default[_ngcontent-%COMP%]:hover {\r\n    background-color: #dae2f6;\r\n    border: 1px solid #456BD1;\r\n    color: #456BD1;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 14px !important;\r\n    line-height: 1.8 !important;\r\n    margin-left: 5px;\r\n}\r\n.btn-default[_ngcontent-%COMP%]:focus {\r\nbackground-color: #fff;\r\nborder: 1px solid #456BD1;\r\ncolor: #456BD1;\r\ncursor: pointer;\r\ntext-align: center;\r\nfont-weight: bold;\r\nfont-size: 14px !important;\r\nline-height: 1.8 !important;\r\nmargin-left: 5px;\r\n}\r\n.btn-default[_ngcontent-%COMP%]:active {\r\n    background-color: #b8c7ee;\r\n    border: 1px solid #456BD1;\r\n    color: #456BD1;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 14px !important;\r\n    line-height: 1.8 !important;\r\n    margin-left: 5px;\r\n}\r\n.k-i-loading[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  font-size: 64px;\r\n\r\nborder-color: currentColor;\r\nborder-top-color: transparent;\r\nborder-bottom-color: transparent;\r\nbackground-color: transparent;\r\n}\r\n\r\n.k-grid[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] { background-color: #fff3cd; }\r\n.k-grid[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%] { background-color: #fedada; }\r\n.m-b-6[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ2VydGlmaWNhdGUvcmVpc3N1ZS1jZXJ0aWZpY2F0ZS9yZWlzc3VlLWNlcnRpZmljYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix3Q0FBd0M7SUFDeEMsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUU7SUFDRSxhQUFhO0dBQ2QsdUJBQXVCO0dBQ3ZCLFlBQVk7Q0FDZDtBQUNBO0VBQ0MsZUFBZTtBQUNqQjtBQUNBOzs7R0FHRztBQUNIO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQjtBQUNBO0VBQ0EsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCO0FBQ0E7SUFDRSxnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQjtBQUNBOztFQUVBLGNBQWM7O0VBRWQ7QUFDQTtFQUNBLGNBQWM7RUFDZDtBQUNBO0VBQ0EsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQjtBQUVBLGVBQWU7QUFDZjtJQUNFLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjtBQUNFO0VBQ0EseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWDtBQUNBO0VBQ0EscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2Q7QUFFQTtFQUNBLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFFViw2QkFBNkI7RUFDN0I7QUFDQTtFQUNBLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7QUFFQTtFQUNBLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkO0FBRUE7RUFDQSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBRVYsNkJBQTZCO0VBQzdCO0FBRUE7RUFDQSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYO0FBR0E7RUFDQSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBRVYsNkJBQTZCO0VBQzdCO0FBQ0E7RUFDQSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYO0FBRUE7RUFDQSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBRVYsNkJBQTZCO0VBQzdCO0FBQ0E7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLHlCQUF5QjtBQUN6QixjQUFjO0FBQ2QsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQixnQkFBZ0I7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCO0FBS0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7O0FBRWpCLDBCQUEwQjtBQUMxQiw2QkFBNkI7QUFDN0IsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QjtBQUNBOzs7Ozs7R0FNRztBQUVILGtCQUFrQix5QkFBeUIsRUFBRTtBQUM3QyxpQkFBaUIseUJBQXlCLEVBQUU7QUFJNUM7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9DZXJ0aWZpY2F0ZS9yZWlzc3VlLWNlcnRpZmljYXRlL3JlaXNzdWUtY2VydGlmaWNhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZHtcclxuICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiNpbnRlcm5hbC13aXphcmQgbGkgYSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDM3OTg7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjI3OGM7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOGIyNzhjO1xyXG59XHJcblxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAtMXB4OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZTFmYjtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7ICovXHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wLTUge1xyXG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbmEuYnRuLmJ0bi1wcmltYXJ5IHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0OGFmZjtcclxuICBib3JkZXItY29sb3I6ICM0NDhhZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ncmlkLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuICAua2VuZG8tZGF0ZXBpY2tlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICB3aWR0aDogNDUwcHg7XHJcbiB9XHJcbiBzcGFuLmstbGluay5uZy10bnMtYzQ3LTAge1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG4vKiAuay10YWJzdHJpcC1pdGVtcyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59ICovXHJcbi5hbGVydC1pbmZvIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjJmYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTliO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB9XHJcbiAgLmZvcm0tZ3JvdXAtYmcge1xyXG4gIGJhY2tncm91bmQ6ICNlZmYyZmM7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDM1OWI7XHJcbiAgfVxyXG4gIC50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHRkIGkge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4ubmF2LXRhYnMgLm5hdi1pdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2Y1O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgY29sb3I6ICM0NTZCRDE7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDtcclxuICB9XHJcbiAgLm5hdi10YWJzIC5uYXYtaXRlbSBhe1xyXG5cclxuICBjb2xvcjogIzQ1NkJEMTtcclxuXHJcbiAgfVxyXG4gIC5uYXYtdGFicyAubmF2LWxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiAjMzM1MDlDO1xyXG4gIH1cclxuICAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjNmM2Y1ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmNTtcclxuICBjb2xvcjogIzQ1NkJEMTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggO1xyXG4gIH1cclxuXHJcbiAgLyogMDMtMTUtMjAyMSAqL1xyXG4gIC5idG4tZGVmYXVsdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ1NkJEMTtcclxuICAgIGNvbG9yOiAjNDU2QkQxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG59XHJcbiAgLmVudC1pbmZvLWJhbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjJGQjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTk0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHggNXB4IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZW50LWluZm8tYmFubmVyIGg0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjM2QzYTNjO1xyXG4gIH1cclxuXHJcbiAgLmVudC1pbmZvLWJhbm5lcjo6YmVmb3JlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgUHJvJztcclxuICBjb250ZW50OiBcIlxcZjA1YVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6ICMwMDM1OTQ7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDclO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gIH1cclxuICAuZW50LWluZm8tcmVpc3N1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjJGQjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTk0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5lbnQtaW5mby1yZWlzc3VlIGg0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjM2QzYTNjO1xyXG4gIH1cclxuXHJcbiAgLmVudC1pbmZvLXJlaXNzdWU6OmJlZm9yZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IFBybyc7XHJcbiAgY29udGVudDogXCJcXGYwNWFcIjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiAjMDAzNTk0O1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDI2JTtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB9XHJcblxyXG4gIC5lbnQtaW5mby1zbWFsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjJGQjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTk0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5cclxuICAuZW50LWluZm8tc21hbGwgOjpiZWZvcmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBQcm8nO1xyXG4gIGNvbnRlbnQ6IFwiXFxmMDVhXCI7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogIzAwMzU5NDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzUlO1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gIH1cclxuICAuZW50LXdhcm5pbmctYmFubmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkU2O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGMkE5MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmVudC13YXJuaW5nLWJhbm5lcjo6YmVmb3JlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgUHJvJztcclxuICBjb250ZW50OiBcIlxcZjA3MVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6ICNGMkE5MDA7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDAlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gIH1cclxuICAuYnRuLWRlZmF1bHQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZTJmNjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NTZCRDE7XHJcbiAgICBjb2xvcjogIzQ1NkJEMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS44ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5idG4tZGVmYXVsdDpmb2N1cyB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbmJvcmRlcjogMXB4IHNvbGlkICM0NTZCRDE7XHJcbmNvbG9yOiAjNDU2QkQxO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG5saW5lLWhlaWdodDogMS44ICFpbXBvcnRhbnQ7XHJcbm1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLmJ0bi1kZWZhdWx0OmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhjN2VlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ1NkJEMTtcclxuICAgIGNvbG9yOiAjNDU2QkQxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5rLWktbG9hZGluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDY0cHg7XHJcblxyXG5ib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbmJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4vKiBpbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb10ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItY29sb3I6ICM0NTZCRDE7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NkJEMTtcclxufSAqL1xyXG5cclxuLmstZ3JpZCB0ci5ldmVuIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNjZDsgfVxyXG4uay1ncmlkIHRyLm9kZCB7IGJhY2tncm91bmQtY29sb3I6ICNmZWRhZGE7IH1cclxuXHJcblxyXG5cclxuLm0tYi02e1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReissueCertificateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reissue-certificate',
                templateUrl: './reissue-certificate.component.html',
                styleUrls: ['./reissue-certificate.component.css'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_entrust_service__WEBPACK_IMPORTED_MODULE_5__["EntrustService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Certificate/renew-productname/renew-productname.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Certificate/renew-productname/renew-productname.component.ts ***!
  \******************************************************************************/
/*! exports provided: RenewProductnameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewProductnameComponent", function() { return RenewProductnameComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
/* harmony import */ var src_app_organization_organization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/organization/organization */ "./src/app/organization/organization.ts");
/* harmony import */ var _progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-date-math */ "./node_modules/@progress/kendo-date-math/dist/es2015/main.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_entrust_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/entrust.service */ "./src/app/entrust.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-label */ "./node_modules/@progress/kendo-angular-label/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/__ivy_ngcc__/dist/fesm2015/index.js");



















function RenewProductnameComponent_fieldset_14_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RenewProductnameComponent_fieldset_14_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Orgnization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RenewProductnameComponent_fieldset_14_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Extended Key Usage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { text: "Select Encryption Algorithm", value: null }; };
function RenewProductnameComponent_fieldset_14_div_63_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Encryption Algorithm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "kendo-dropdownlist", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function RenewProductnameComponent_fieldset_14_div_63_Template_kendo_dropdownlist_selectionChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.selectionChangeseca($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r15.listItemsecaEx)("textField", "text")("valueField", "name")("valuePrimitive", true)("defaultItem", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
} }
function RenewProductnameComponent_fieldset_14_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Encryption Algorithm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "kendo-dropdownlist", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function RenewProductnameComponent_fieldset_14_div_64_Template_kendo_dropdownlist_selectionChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.selectionChangeseca($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r16.listItemseca)("textField", "text")("valueField", "name")("valuePrimitive", true)("defaultItem", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
} }
function RenewProductnameComponent_fieldset_14_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "This certificate will be sent to CT logs. The contents of this certificate, including host names, will be publicly visible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RenewProductnameComponent_fieldset_14_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Deselecting this checkbox overrides the default CT logs setting for your account. Browsers may not trust this certificate. If you are not sure, contact your administrator. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RenewProductnameComponent_fieldset_14_ng_template_96_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 92);
} }
function RenewProductnameComponent_fieldset_14_ng_template_96_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 93);
} }
function RenewProductnameComponent_fieldset_14_ng_template_96_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RenewProductnameComponent_fieldset_14_ng_template_96_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const dataItem_r26 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r30.opendialog(dataItem_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RenewProductnameComponent_fieldset_14_ng_template_96_i_1_Template, 1, 0, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RenewProductnameComponent_fieldset_14_ng_template_96_i_2_Template, 1, 0, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", dataItem_r26.domainSimble == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", dataItem_r26.domainSimble == 1);
} }
function RenewProductnameComponent_fieldset_14_ng_template_98_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RenewProductnameComponent_fieldset_14_ng_template_98_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const dataItem_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r33.toggle(dataItem_r32, "Include"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", dataItem_r32.Include);
} }
function RenewProductnameComponent_fieldset_14_ng_template_100_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Primary Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RenewProductnameComponent_fieldset_14_ng_template_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RenewProductnameComponent_fieldset_14_ng_template_100_span_0_Template, 2, 0, "span", 95);
} if (rf & 2) {
    const dataItem_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", dataItem_r35.domaintitle);
} }
const _c1 = function () { return { standalone: true }; };
const _c2 = function () { return { name: "[no OU]", value: null }; };
const _c3 = function () { return { text: "Select Key", value: null }; };
const _c4 = function () { return { checkboxOnly: true, mode: "multiple" }; };
const _c5 = function () { return { "text-align": "center" }; };
function RenewProductnameComponent_fieldset_14_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fieldset", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RenewProductnameComponent_fieldset_14_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.addPrimaryDomains(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Primary Domain ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RenewProductnameComponent_fieldset_14_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.removeDomains(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Remove Domain(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RenewProductnameComponent_fieldset_14_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.addDomain = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RenewProductnameComponent_fieldset_14_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.addDomains(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "form", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Certificate Type : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Certificate Expiry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "kendo-datepicker", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, RenewProductnameComponent_fieldset_14_span_36_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Organization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "kendo-dropdownlist", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function RenewProductnameComponent_fieldset_14_Template_kendo_dropdownlist_selectionChange_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r43.selectionChangesOrg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, RenewProductnameComponent_fieldset_14_span_44_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Organization Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "kendo-dropdownlist", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function RenewProductnameComponent_fieldset_14_Template_kendo_dropdownlist_selectionChange_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r44.selectionChangesOU($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Signing Algorithm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "kendo-dropdownlist", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Extended Key Usage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "kendo-dropdownlist", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function RenewProductnameComponent_fieldset_14_Template_kendo_dropdownlist_selectionChange_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.selectionChangeskey($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, RenewProductnameComponent_fieldset_14_span_62_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, RenewProductnameComponent_fieldset_14_div_63_Template, 6, 6, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, RenewProductnameComponent_fieldset_14_div_64_Template, 6, 6, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RenewProductnameComponent_fieldset_14_Template_input_ngModelChange_67_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r46.isChecked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Send to CT log ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, RenewProductnameComponent_fieldset_14_div_73_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, RenewProductnameComponent_fieldset_14_div_74_Template, 2, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Domains");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Domains in Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Domain Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "kendo-grid", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function RenewProductnameComponent_fieldset_14_Template_kendo_grid_selectionChange_91_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r47.dmIncrtselectionChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "kendo-grid-checkbox-column", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "kendo-grid-column", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "kendo-grid-column", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "kendo-grid-column", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, RenewProductnameComponent_fieldset_14_ng_template_96_Template, 3, 2, "ng-template", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "kendo-grid-column", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, RenewProductnameComponent_fieldset_14_ng_template_98_Template, 1, 1, "ng-template", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "kendo-grid-column", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, RenewProductnameComponent_fieldset_14_ng_template_100_Template, 1, 1, "ng-template", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "kendo-grid", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function RenewProductnameComponent_fieldset_14_Template_kendo_grid_selectionChange_102_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.dmselectionChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "kendo-grid-checkbox-column", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "kendo-grid-column", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "kendo-grid-column", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "kendo-grid-column", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "kendo-grid-column", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "kendo-grid-column", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "kendo-grid-column", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "kendo-grid-column", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Renew ", ctx_r0.certType, " Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.addDomain)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](55, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.certificateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.certType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx_r0.min)("max", ctx_r0.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.certificateForm.get("expDate").errors == null ? null : ctx_r0.certificateForm.get("expDate").errors.required) && ctx_r0.certificateForm.get("expDate").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r0.listItemsOrg)("textField", "name")("valueField", "name")("valuePrimitive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.certificateForm.get("orgnization").errors == null ? null : ctx_r0.certificateForm.get("orgnization").errors.required) && ctx_r0.certificateForm.get("orgnization").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r0.dataoulistItems)("textField", "name")("valueField", "name")("defaultItem", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](56, _c2))("valuePrimitive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r0.SHA - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r0.listItemskey)("textField", "text")("valueField", "name")("defaultItem", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](57, _c3))("valuePrimitive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.certificateForm.get("eku").errors == null ? null : ctx_r0.certificateForm.get("eku").errors.required) && ctx_r0.certificateForm.get("eku").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showEcc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.showEcc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r0.griddata)("rowClass", ctx_r0.rowCallback)("height", 500)("selectable", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](58, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 70)("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](59, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 70)("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](60, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r0.gridView)("height", 500)("selectable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Total SAN Units for New Certificate : ", ctx_r0.totalNewCrtSAN, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Total SAN Units for Previous Certificate :", ctx_r0.totalOldCrtSAN, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Net SAN Units from Inventory: ", ctx_r0.totalNewCrtSAN - ctx_r0.totalOldCrtSAN, " ");
} }
function RenewProductnameComponent_fieldset_16_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter certificate friendlyName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RenewProductnameComponent_fieldset_16_div_27_div_2_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RenewProductnameComponent_fieldset_16_div_27_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RenewProductnameComponent_fieldset_16_div_27_div_2_b_3_Template, 2, 0, "b", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", i_r51.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r51.mandatory != "NOT_MANDATORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", i_r51.field);
} }
function RenewProductnameComponent_fieldset_16_div_27_div_3_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RenewProductnameComponent_fieldset_16_div_27_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RenewProductnameComponent_fieldset_16_div_27_div_3_b_3_Template, 2, 0, "b", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", i_r51.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r51.mandatory != "NOT_MANDATORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", i_r51.field);
} }
function RenewProductnameComponent_fieldset_16_div_27_div_4_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RenewProductnameComponent_fieldset_16_div_27_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RenewProductnameComponent_fieldset_16_div_27_div_4_b_3_Template, 2, 0, "b", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", i_r51.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r51.mandatory != "NOT_MANDATORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", i_r51.field);
} }
function RenewProductnameComponent_fieldset_16_div_27_div_5_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RenewProductnameComponent_fieldset_16_div_27_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RenewProductnameComponent_fieldset_16_div_27_div_5_b_3_Template, 2, 0, "b", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", i_r51.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r51.mandatory != "NOT_MANDATORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", i_r51.field);
} }
function RenewProductnameComponent_fieldset_16_div_27_div_6_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RenewProductnameComponent_fieldset_16_div_27_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RenewProductnameComponent_fieldset_16_div_27_div_6_b_3_Template, 2, 0, "b", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "kendo-dropdownlist", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", i_r51.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r51.mandatory != "NOT_MANDATORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", i_r51.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", i_r51.optionsplit);
} }
function RenewProductnameComponent_fieldset_16_div_27_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RenewProductnameComponent_fieldset_16_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RenewProductnameComponent_fieldset_16_div_27_div_2_Template, 5, 3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RenewProductnameComponent_fieldset_16_div_27_div_3_Template, 5, 3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RenewProductnameComponent_fieldset_16_div_27_div_4_Template, 5, 3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RenewProductnameComponent_fieldset_16_div_27_div_5_Template, 5, 3, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RenewProductnameComponent_fieldset_16_div_27_div_6_Template, 5, 4, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RenewProductnameComponent_fieldset_16_div_27_div_7_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r51 = ctx.$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", i_r51.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r50.form.get(i_r51.field).invalid && (ctx_r50.form.get(i_r51.field).dirty || ctx_r50.form.get(i_r51.field).touched));
} }
function RenewProductnameComponent_fieldset_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fieldset", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Provide additional information about this certificate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Certificate Friendly Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RenewProductnameComponent_fieldset_16_span_19_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Additional Emails");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "form", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RenewProductnameComponent_fieldset_16_div_27_Template, 8, 7, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Renew ", ctx_r1.certType, " Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.customForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.customForm.get("crtFriendlyname").errors == null ? null : ctx_r1.customForm.get("crtFriendlyname").errors.required) && ctx_r1.customForm.get("crtFriendlyname").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.personProps);
} }
function RenewProductnameComponent_fieldset_18_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dm_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", dm_r71, "");
} }
function RenewProductnameComponent_fieldset_18_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Field Name :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r72.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r72.value);
} }
function RenewProductnameComponent_fieldset_18_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fieldset", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Provide additional information about this certificate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Product Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Organization: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Organization Unit: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RenewProductnameComponent_fieldset_18_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r73.gotoStep1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Edit Organization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Domains:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, RenewProductnameComponent_fieldset_18_div_38_Template, 4, 1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RenewProductnameComponent_fieldset_18_Template_a_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r75.gotoStep1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Edit Domains ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Certificate Attributes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Signing Alorithm : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "SHA-2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Extended Key Usage : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Encryption Algorithm : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Send to CT logs : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RenewProductnameComponent_fieldset_18_Template_a_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r76.gotoStep1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Edit Certificate Attributes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " Additional Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, RenewProductnameComponent_fieldset_18_div_73_Template, 8, 2, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](74, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "a", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RenewProductnameComponent_fieldset_18_Template_a_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r77.gotoStep2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " Edit Additional Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Renew ", ctx_r2.certType, " Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.certType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.renew.org);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.renew.ou);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.reviewOptions == null ? null : ctx_r2.reviewOptions.subjectAltName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.reviewOptions.ekutext, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.reviewOptions.ecatext, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.isChecked, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](74, 9, ctx_r2.customdata));
} }
function RenewProductnameComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 117);
} }
function RenewProductnameComponent_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RenewProductnameComponent_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r78.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RenewProductnameComponent_a_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RenewProductnameComponent_a_28_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RenewProductnameComponent_a_28_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r80.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RenewProductnameComponent_a_30_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RenewProductnameComponent_a_30_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r82.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RenewProductnameComponent_kendo_dialog_31_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "kendo-dialog", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function RenewProductnameComponent_kendo_dialog_31_Template_kendo_dialog_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r84.close("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "kendo-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RenewProductnameComponent_kendo_dialog_31_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r85); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r86.close("yes"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.errormessage);
} }
function RenewProductnameComponent_kendo_dialog_32_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "kendo-dialog", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function RenewProductnameComponent_kendo_dialog_32_Template_kendo_dialog_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r87.close("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "kendo-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RenewProductnameComponent_kendo_dialog_32_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r88); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r89.close("yes"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.errormessage);
} }
function RenewProductnameComponent_kendo_dialog_33_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "kendo-dialog", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function RenewProductnameComponent_kendo_dialog_33_Template_kendo_dialog_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r90.close("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "kendo-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RenewProductnameComponent_kendo_dialog_33_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r91); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r92.closed("yes"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.errormessage);
} }
class RenewProductnameComponent {
    constructor(datePipe, router, esc, route, http) {
        this.datePipe = datePipe;
        this.router = router;
        this.esc = esc;
        this.route = route;
        this.http = http;
        //baseUrl =environment.apiserver;
        this.stepType = 'full';
        this.position = 'left';
        this.steps = [
            { label: 'Certificate Details', isValid: true },
            { label: 'Additional Information', isValid: true },
            { label: 'Summary', isValid: true, },
        ];
        this.listItemsignIn = [{ text: "SHA-2" }];
        this.listItemskey = [
            { text: "Server and Client Authentication", value: 0, name: "SERVER_AND_CLIENT_AUTH" },
            { text: "Client Authentication", value: 1, name: "CLIENT_AUTH" },
            { text: "Server Authentication", value: 2, name: "SERVER_AUTH" },
        ];
        this.listItemsecaEx = [
            { text: "RSA Encryption", value: 0, name: "RSA" },
        ];
        this.listItemseca = [
            { text: "RSA Encryption", value: 0, name: "RSA" },
            { text: "ECC  Encryption", value: 1, name: "EC" },
        ];
        this.sumbitted = false;
        this.domains = [];
        this.selectedValue = '';
        this.oulistItems = [];
        this.organizations = [];
        this.inventories = [];
        this.organizationUnits = [];
        this.showred = true;
        this.array3 = [];
        this.uid = localStorage.getItem("tempid");
        //oulistItems:any=[];
        this.selected = 0;
        this.items = new src_app_organization_organization__WEBPACK_IMPORTED_MODULE_4__["produtypeList"]().items;
        // @ViewChild(DetailsInventoryComponent) childref:DetailsInventoryComponent;
        this.forms = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            addDomain: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.customForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            crtFriendlyname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            adEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.monthAgo = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        this.certificateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            eku: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ou: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            expDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.monthAgo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            eca: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            signIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            orgnization: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.min = Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_5__["addDays"])(Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_5__["getDate"])(new Date()), 10);
        this.max = Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_5__["addYears"])(Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_5__["getDate"])(new Date()), 1);
        this.current = 0;
        this.selectedname = "Standard";
        this.loading = true;
        this.showEcc = false;
        this.listItemOrg = [];
        this.listItemOU = [];
        this.datearray = [];
        this.textarray = [];
        this.dropdownarray = [];
        this.dataaarays = [];
        this.DataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.personProps = [];
        this.remaingSAN = 0;
        this.totalNewCrtSAN = 0;
        this.totalOldCrtSAN = 0;
        this.aggregates = [{ field: "units", aggregate: "sum" },];
        this.azureCSRdata = false;
        this.optionsOu = [];
        this.isChecked = true;
        // this.id = this.route.snapshot.paramMap.get("id");
        this.id = localStorage.getItem('checkOutData');
    }
    ngOnInit() {
        this.getorg();
        this.getinventory();
    }
    getbyid() {
        this.esc.getBytrackingid(this.id).subscribe((data) => {
            const response = JSON.parse(data);
            let startDate = response.issueDateTime;
            let endDate = response.expiresAfter;
            let date1 = new Date();
            let date2 = new Date(startDate);
            let date3 = new Date(endDate);
            let timeInMilisec = date1.getTime() - date2.getTime();
            let exptime = date3.getTime() - date1.getTime();
            let issuedays = Math.ceil(timeInMilisec / (1000 * 60 * 60 * 24));
            let expdays = Math.ceil(exptime / (1000 * 60 * 60 * 24));
            if (issuedays > 30 || expdays < 60) {
                //console.log('difference between issuedate',days)
                this.renew = response;
                this.expDate = response.expiresAfter;
                this.loading = false;
                var crtName = this.items.filter(i => i.name === this.renew.certType);
                this.certType = crtName[0].title;
                this.tabindex = crtName[0].value;
                //console.log(this.tabindex)
                if (this.certType == "Standard OV SSL") {
                    //standard type doesn't support ecc
                    this.showEcc = !this.showEcc;
                }
                this.array3 = response.subjectAltName;
                var istrue;
                // this.array3.forEach(e => {
                //   istrue = e.value.includes('www')
                //console.log(istrue)
                // });
                // if (!istrue && this.renew.certType != "WILDCARD_SSL") {
                //   const basedm = "www." + this.array3[0].value;
                //   this.array3.splice(1, 0, { "value": basedm, "domainSimble": 0, "units": 0, "Include": true });
                // }
                const ecc = this.listItemseca.filter(obj => obj.name === response.keyType);
                this.certificateForm.controls['orgnization'].setValue(response.org);
                this.certificateForm.controls['eku'].setValue(response.eku);
                this.certificateForm.controls['signIn'].setValue(response.signingAlg);
                this.certificateForm.controls['eca'].setValue(response.keyType);
                if (response.ou != undefined) {
                    this.certificateForm.controls['ou'].setValue(response.ou[0]);
                }
                // this.griddata = this.array3;
                this.optionsOu = response.ou;
                this.optionsOrg = response.org;
                this.selectionChangeseca(ecc[0]);
                // this.listItemOrg.push(response.org);
                const orgidvalue = this.listItemsOrg.filter(o1 => o1.name === response.org);
                this.orgId = orgidvalue[0].clientId;
                this.getorgUnit();
            }
            else {
                this.loading = false;
                this.opendiaglogrenew();
                return false;
            }
        });
    }
    getinventory() {
        this.esc.getInventry().subscribe((response) => {
            // const objs =response;
            const objs = JSON.parse(response);
            const obj = objs.inventories;
            // this.inventories= obj.filter(i=> this.items.some(o=>i.productType===o.value));
            this.sanInventoriesOne = obj.filter(i => i.productType === 'EV_SAN');
            this.sanInventoriesTwo = obj.filter(i => i.productType === 'UC_SAN');
        });
    }
    getorg() {
        // this.stepsLoading =! this.stepsLoading
        this.esc.getOrganization().subscribe((response) => {
            //const obj =response;
            const obj = JSON.parse(response);
            this.listItemsOrg = obj.organizations.filter(o1 => o1.verificationStatus === 'APPROVED');
            this.listItemsOrg = Array.from(this.listItemsOrg.reduce((m, t) => m.set(t.name, t), new Map()).values());
            //console.log(this.listItemsOrg);
            this.getbyid();
        });
    }
    getdomains() {
        this.esc.getdomain().subscribe((data) => {
            const response = JSON.parse(data);
            this.domains = response.domains;
            this.gridView = this.domains;
            this.griddata = this.array3;
            //  const basedm="www."+this.array3[0].value;
            // this.array3.splice(1,0,{"value":basedm,"domainSimble":0,"units":0,"Include":true});
            for (let i = 0; i < this.griddata.length; i++) {
                const data = this.griddata[i];
                data.domainSimble = 0;
                // data['color']=0;
                data['units'] = 0;
                data['Include'] = true;
            }
            this.griddata[0]["domaintitle"] = "Primary Domain";
            this.domainUnitsCount();
            const count = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_3__["aggregateBy"])(this.array3, this.aggregates);
            //console.log(count);
            this.totalOldCrtSAN = count.units.sum;
            //console.log(this.subjectAltName)
            //console.log(this.gridView)
            this.getfields();
        });
    }
    selectionChangesOrg(value) {
        this.griddata = [];
        this.array3 = [];
        this.optionsOrg = value.name;
        this.certificateForm.controls['ou'].setValue(null);
        this.dataoulistItems = this.oulistItems.filter(obj => obj.clientId === value.clientId);
        this.orgId = value.clientId;
    }
    selectionChangesOU(value) {
        this.optionsOu = [];
        this.optionsOu.push(value.name);
    }
    getorgUnit() {
        //  this.step2Loading = true;
        this.esc.getOrganizationUnit().subscribe((response) => {
            // const obj =response;
            const obj = JSON.parse(response);
            this.oulistItems = obj.organizationalUnits.filter(i => i.verificationStatus === "APPROVED");
            //console.log(this.oulistItems);
            this.oulistItems = this.oulistItems.map((org, i) => ({ name: org.name, value: i, clientId: org.clientId }));
            this.dataoulistItems = this.oulistItems;
            //console.log(this.oulistItems);
            this.getdomains();
        });
    }
    formatDate(date) {
        const d = new Date(this.renew.expiresAfter);
        return d;
    }
    //step2
    //doaminmangement grid selection
    addDomains() {
        let data = this.addDomain.split(',');
        this.domains.forEach(obj2 => {
            for (let i = 0; i < data.length; i++) {
                let filterdata = this.array3.filter(val => val.value.includes(data[i]));
                if (filterdata.length == 0) {
                    let exists = data[i].includes(obj2.domainName);
                    if (exists) {
                        this.array3.push({ "value": data[i], "domainSimble": 0, "units": 0, "Include": true });
                        //  this.array3[0]["domaintitle"]="Primary Domain";
                        this.array3[0]["domaintitle"] = true;
                        //console.log(this.array3)
                    }
                }
            }
        });
        //console.log(this.array3)
        this.griddata = this.array3;
        if (this.array3.length > 0) {
            this.domainUnitsCount();
        }
    }
    domainUnitsCount() {
        switch (this.tabindex) {
            case 0:
                this.standType();
                break;
            case 1:
                this.AdvantageType();
                break;
            case 2:
                // if (this.array3.length == 1) {
                //   const basedm = "www." + this.array3[0].value;
                //   this.array3.push({ "value": basedm, "domainSimble": 0, "units": 0, "Include": true });
                // }
                for (let i = 5; i < this.array3.length; i++) {
                    const data = this.array3[i];
                    data.domainSimble = 0;
                    data.units = 1;
                }
                break;
            case 3:
                this.Evtype();
                break;
            case 4:
                this.wildCardtType();
                break;
            default:
                break;
        }
    }
    standType() {
        for (let i = 2; i < this.array3.length; i++) {
            const data = this.array3[i];
            data.domainSimble = 1;
            data['color'] = 0;
            data['Include'] = false;
        }
    }
    AdvantageType() {
        for (let i = 3; i < this.array3.length; i++) {
            const data = this.array3[i];
            data.domainSimble = 1;
            data['color'] = 0;
            data['Include'] = false;
        }
    }
    wildCardtType() {
        let iswildcard = false;
        // this.array3.forEach(e => {
        //   iswildcard = e.value.startsWith('*')
        //   console.log('test' + iswildcard)
        // });
        // if (!iswildcard) {
        //   var basedm = "*." + this.array3[0].value;
        //   this.array3[1].value = basedm;
        // }
        // if(this.array3.length==1){
        //   const basedm="*."+this.array3[0].value;
        //   this.array3.push({"value":basedm,"domainSimble":0,"units":0,"Include":false});
        // }
        // for (let i = 2; i < this.array3.length; i++) {
        //   const data = this.array3[i];
        //   data.domainSimble = 0;
        //   data['units'] = 1;
        //   data['Include'] = true;
        //   if (data?.value.startsWith('*')) {
        //     data['units'] = 10;
        //   }
        //   this.remaingSAN = (i - 1);
        //   this.totalNewCrtSAN = (i - 1);
        //   let count = this.sanInventoriesOne[0].remainingCount;
        //   this.remaingSAN = count === this.remaingSAN ? this.remaingSAN : this.remaingSAN++
        //   if (this.remaingSAN > count) {
        //     data['color'] = 0;
        //     data.domainSimble = 1;
        //     data['units'] = 0;
        //     data['Include'] = false;
        //     this.remaingSAN = count;
        //     this.totalNewCrtSAN = count;
        //   }
        // }
    }
    Evtype() {
        for (let i = 3; i < this.array3.length; i++) {
            const data = this.array3[i];
            data.domainSimble = 0;
            data['units'] = 1;
            data['Include'] = true;
            this.remaingSAN = (i - 2);
            this.totalNewCrtSAN = (i - 2);
            let count = this.sanInventoriesOne[0].remainingCount;
            //this.remaingSAN=count===this.remaingSAN?this.remaingSAN:this.remaingSAN++
            if (this.remaingSAN > count) {
                data['color'] = 0;
                data.domainSimble = 1;
                data['units'] = 0;
                data['Include'] = false;
                this.remaingSAN = count;
                this.totalNewCrtSAN = count;
            }
        }
    }
    addPrimaryDomains() {
        this.selectedItem[0].dataItem["domaintitle"] = true;
        this.array3.forEach(element => {
            if (element.domaintitle) {
                element.domaintitle = false;
            }
        });
        this.selectedItem[0].dataItem["domaintitle"] = true;
        //console.log(this.griddata)
    }
    removeDomains() {
        for (let i = this.griddata.length - 1; i >= 0; i--) {
            let element = this.griddata[i];
            if (this.griddata[i].rmvDomain) {
                this.griddata.splice(i, 1);
            }
        }
    }
    dmselectionChange(e) {
        if (e.selectedRows.length > 0) {
            // this.domainsChecked=true;
            //this.selectedItem = e.selectedRows;
            if (this.orgId !== e.selectedRows[0].dataItem.clientId) {
                this.opened = true;
                this.errormessage = "The domian is not in an approved domain  for " + this.optionsOrg;
                return;
            }
            this.addDomain = e.selectedRows[0].dataItem.domainName;
            //   for(let i=0; i < e.selectedRows.length; i++){
            //    this.array3.push(this.selectedItem[i].dataItem.domainName);
            // }
        }
    }
    onCheckboxChange(event, index) {
        this.domain = index;
    }
    //step3  additional info
    //later use app selector
    getfields() {
        this.esc.getcustomFields().subscribe((data) => {
            // const response= data;
            const response = JSON.parse(data);
            this.auditLogs = [response];
            const auidLogs = {};
            this.auditLogs = Object.values(response);
            //console.log(  this.auditLogs);
            const formDataObjs = {};
            this.auditLogs = this.auditLogs.filter(obj => obj.enabled === true);
            function filter(response, query) {
                return Object.values(Object.keys(response)
                    .filter(key => new RegExp('^' + query, 'g').test(key))
                    .map((key) => response[key]));
            }
            this.datearray = filter(response, 'date');
            // this.datearray = this.datearray.filter(obj => obj.enabled === true);
            this.textarray = filter(response, 'text');
            //   this.textarray = this.textarray.filter(obj => obj.enabled === true);
            this.dropdownarray = filter(response, 'dropdown');
            //  this.dropdownarray = this.dropdownarray.filter(obj => obj.enabled === true);
            //console.log(filter(response, 'date'));
            //console.log(filter(response, 'text'));
            //console.log(filter(response, 'dropdown'));
            this.emailarray = filter(response, 'email');
            //  this.emailarray = this.emailarray.filter(obj => obj.enabled === true);
            this.numberarray = filter(response, 'number');
            //  this.numberarray = this.numberarray.filter(obj => obj.enabled === true);
            //console.log(this.emailarray);
            //console.log(this.numberarray);
            //check one line map below code
            for (let i = 0; i < this.datearray.length; i++) {
                this.datearray[i]["field"] = "date" + [i + 1];
            }
            this.datearray = this.datearray.filter(obj => obj.enabled === true);
            //console.log(this.datearray)
            //dropdown
            for (let i = 0; i < this.dropdownarray.length; i++) {
                this.dropdownarray[i]["field"] = "dropdown" + [i + 1];
                this.dropdownarray[i]["type"] = "dropdown";
                //to make , separated option value to an array for dynamiclly
                this.dropdownarray[i]["optionsplit"] = this.dropdownarray[i].options.split(',');
            }
            this.dropdownarray = this.dropdownarray.filter(obj => obj.enabled === true);
            //text
            for (let i = 0; i < this.textarray.length; i++) {
                this.textarray[i]["field"] = "text" + [i + 1];
                this.textarray[i]["type"] = "text";
            }
            this.textarray = this.textarray.filter(obj => obj.enabled === true);
            //date
            for (let i = 0; i < this.datearray.length; i++) {
                this.datearray[i]["field"] = "date" + [i + 1];
                this.datearray[i]["type"] = "date";
            }
            this.datearray = this.datearray.filter(obj => obj.enabled === true);
            //console.log(this.datearray);
            //date
            //number
            for (let i = 0; i < this.numberarray.length; i++) {
                this.numberarray[i]["field"] = "number" + [i + 1];
                this.numberarray[i]["type"] = "number";
            }
            this.numberarray = this.numberarray.filter(obj => obj.enabled === true);
            //console.log(this.numberarray);
            //number
            //email
            for (let i = 0; i < this.emailarray.length; i++) {
                this.emailarray[i]["field"] = "email" + [i + 1];
                this.emailarray[i]["type"] = "email";
            }
            this.emailarray = this.emailarray.filter(obj => obj.enabled === true);
            //console.log(this.emailarray);
            //email
            const formDataObj = {};
            this.textarray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            this.dropdownarray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            this.datearray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            this.numberarray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            this.emailarray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            //console.log(this.personProps)
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](formDataObj);
            // this.DataForm = this.generateFormControls(this.form);
            this.test();
        });
    }
    generateFormControls(form) {
        let tempGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        form.forEach(i => {
            tempGroup.addControl(i.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
        });
        return tempGroup;
    }
    test() {
        var x = {};
        x = this.renew.tracking.customFields;
        //console.log(x)
        var y = Object.keys(this.form.value);
        //console.log(this.renew.tracking.customFields.text1)
        //let x=Object.entries(this.renew.tracking.customFields);
        //let y=Object.entries( JSON.parse(JSON.stringify( this.form.value)));
        var testform = JSON.parse(JSON.stringify(this.form.value));
        y.forEach(i => {
            // tempGroup.addControl(i.name, new FormControl(''))
            this.renew.tracking.customFields[i];
            this.form.controls[i];
            this.form.get(i).setValue(this.renew.tracking.customFields[i]);
            // this.form.value;
        });
        // Object.keys(this.form.value).forEach(name => {
        //   Object.keys(this.renew.tracking.customFields).forEach(x => {
        //console.log(name);
        //console.log( Object.keys(this.renew.tracking.customFields));
        //     if(name===x)
        //     {
        //       this.form.patchValue(
        //         {
        //                         name:this.renew.tracking.customFields[x]
        //         })
        //console.log(  this.form);
        //     }
        //   });
        // });
    }
    mapValidator(validators) {
        if (validators != 'NOT_MANDATORY') {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required;
        }
    }
    selectionChangeseca(v) {
        this.optionseca = v.value;
        if (v.value == 1) {
            this.csrazureprop = {
                crv: "P-256",
                keyType: v.name,
                keysize: 256,
                kid: this.uid
            };
        }
        else {
            this.csrazureprop = {
                crv: "",
                keyType: v.name,
                keysize: 2048,
                kid: this.uid
            };
        }
    }
    toggle(dataItem, field) {
        dataItem[field] = !dataItem[field];
    }
    selectionChange(e) {
        if (e.selectedRows.length > 0) {
            this.selectedItem = e.selectedRows;
            for (let i = 0; i < e.selectedRows.length; i++) {
                this.array3.push(this.selectedItem[i].dataItem.domainName);
            }
        }
        if (e.deselectedRows.length > 0) {
            for (let i = 0; i < e.deselectedRows.length; i++) {
                this.array3.splice(e.deselectedRows[i].index, 1);
            }
        }
        //console.log(this.array3)
    }
    prev() {
        if (this.current > 0) {
            this.current -= 1;
        }
    }
    listClick(event, newValue) {
        this.selectedItem = newValue;
    }
    next() {
        if (this.current < this.steps.length - 1) {
            this.current += 1;
        }
        if (this.current == 1) {
            if (this.certificateForm.invalid) {
                this.current = 0;
                this.certificateForm.get('expDate').clearValidators();
                this.certificateForm.get('expDate').updateValueAndValidity();
                this.certificateForm.markAllAsTouched();
                return false;
            }
            const filterData = this.griddata.filter(e => e.Include == true);
            var isprimary = false;
            for (let i = 0; i < filterData.length; i++) {
                const e = filterData[i];
                if ('domaintitle' in filterData[i]) {
                    isprimary = true;
                }
            }
            if (!isprimary) {
                this.current = 0;
                this.opendialog(1);
                return false;
            }
            // const isvalid = this.griddata.some(d => d.domainSimble == 1)
            // if (isvalid) {
            //   this.current = 0
            //   const domain = ''
            //   this.opendialog(domain)
            // }
        }
        if (this.current == 2) {
            if (this.customForm.invalid || this.form.invalid) {
                this.current = 1;
                this.customForm.get('crtFriendlyname').markAsTouched();
                this.form.markAllAsTouched();
                return false;
            }
            this.customdata = JSON.parse(JSON.stringify(this.form.value));
            this.reviewObj();
            if (this.azureCSRdata == false) {
                this.createOnazure();
            }
            //console.log(this.reviewOptions);
        }
    }
    reviewObj() {
        this.reviewSAN = this.griddata.filter(e => e.Include == true);
        this.reviewSAN = this.reviewSAN.map(function (el) { return el.value; });
        this.customdata = JSON.parse(JSON.stringify(this.form.value));
        const finaldata = this.certificateForm.value;
        const ecadata = this.listItemseca.filter(o => o.name === finaldata.eca);
        const ekudata = this.listItemskey.filter(o => o.name === finaldata.eku);
        if (this.optionsOu == undefined) {
            this.optionsOu = [];
        }
        else {
            this.optionsOu;
        }
        this.reviewOptions = {
            "subjectAltName": this.reviewSAN,
            "signingAlg": finaldata.signIn,
            "eku": finaldata.eku,
            "ekutext": ekudata[0].text,
            "ctLog": this.isChecked,
            "eca": finaldata.eca,
            "ecatext": ecadata[0].text,
            "certType": this.certType,
            "org": finaldata.orgnization,
            "ou": this.optionsOu,
            "certExpiryDate": this.datePipe.transform(this.expDate, 'yyyy-MM-dd'),
            "tracking": {
                "customFields": this.customdata,
                "requesterName": this.customForm.value.crtFriendlyname,
            }
        };
    }
    // count(selectedname:string){
    //   this.selectedname = selectedname
    // }
    gotoStep1() {
        this.current = 0;
    }
    gotoStep2() {
        this.current = 1;
    }
    submit() {
        debugger;
        var csrObj = {
            "csr": this.azurecsr,
            "certExpiryDate": this.reviewOptions.certExpiryDate,
            "signingAlg": this.certificateForm.value.signIn,
            "eku": this.reviewOptions.eku,
            "ctLog": this.isChecked,
            "org": this.certificateForm.value.orgnization,
            "ou": this.reviewOptions.ou,
            "subjectAltName": this.reviewOptions.subjectAltName,
            "tracking": {
                "requesterName": this.customForm.value.crtFriendlyname,
                "customFields": this.customdata,
            }
        };
        //console.log(csrObj);
        localStorage.setItem("productype", this.certType);
        this.loading = true;
        this.esc.crtrenew(csrObj, this.renew.trackingId).subscribe(res => {
            const obj = JSON.parse(res);
            //console.log(obj);
            if (obj.trackingId) {
                this.loading = false;
                var mergeChaincrt = obj === null || obj === void 0 ? void 0 : obj.endEntityCert;
                mergeChaincrt = mergeChaincrt.replace("-----BEGIN CERTIFICATE-----", '');
                mergeChaincrt = mergeChaincrt.replace("-----END CERTIFICATE-----", '');
                //console.log(mergeChaincrt)
                this.mergeOnAzure(mergeChaincrt);
                this.loading = false;
                this.router.navigate(['/success']);
            }
            switch (obj.status) {
                case 400:
                    this.loading = false;
                    this.errormessage = obj.errors[0].message;
                    this.opened = true;
                    return false;
                case 200:
                    this.loading = false;
                    this.router.navigate(['/success']);
                case 500:
                    this.loading = false;
                    this.errormessage = "Azure Internal Sever Error";
                    this.opened = true;
                    return false;
                case (obj.trackingId):
                    this.loading = false;
                    this.router.navigate(['/success']);
            }
        }, err => {
            this.loading = false;
            switch (err.status) {
                case 0:
                    this.errormessage = "Azure Internal server error";
                    this.opened = true;
                    return false;
                case 500:
                    this.errormessage = "Azure Internal server error";
                    this.opened = true;
                    return false;
            }
        });
    }
    close(status) {
        //console.log(`Dialog result: ${status}`);
        this.opened = false;
        this.open = false;
    }
    closed() {
        this.router.navigate(['/']);
    }
    rowCallback(context) {
        const isEven = context.dataItem.color == 0;
        const isOdd = context.dataItem.color == 1;
        return {
            even: isEven,
            odd: isOdd
        };
    }
    dmIncrtselectionChange(e) {
        if (e.selectedRows.length > 0) {
            this.selectedItem = e.selectedRows;
            this.selectedItem[0].dataItem["rmvDomain"] = true;
            //console.log(this.selectedItem)
        }
        if (e.deselectedRows.length > 0) {
            this.selectedItem[0].dataItem["rmvDomain"] = false;
        }
    }
    createOnazure() {
        //azurecsr
        this.loading = true;
        let cn;
        cn = this.griddata.filter(o1 => o1.domaintitle == "Primary Domain");
        if (cn.length == 0) {
            cn = this.griddata.filter(o1 => o1.domaintitle == true);
        }
        //  this.csrazureprop['subject']=cn[0].value;
        var payload = {
            "policy": {
                "key_props": {
                    "exportable": true,
                    "kty": this.csrazureprop.keyType,
                    "key_size": this.csrazureprop.keysize,
                    "reuse_key": false
                },
                "x509_props": {
                    "subject": "CN=" + cn[0].value
                },
                "issuerName": "Unknown"
            }
        };
        if (this.csrazureprop.crv != "") {
            payload.policy.key_props["crv"] = this.csrazureprop.crv;
        }
        this.esc.azurecrt(this.customForm.value.crtFriendlyname, payload).subscribe(res => {
            let data = JSON.parse(res.toString());
            //console.log(data);
            if (data === null || data === void 0 ? void 0 : data.error) {
                this.catchazureError(data === null || data === void 0 ? void 0 : data.error.message);
                this.loading = false;
                return false;
            }
            else {
                this.azurecsr = data.csr;
                this.azureCSRdata = true;
                //console.log(this.azurecsr)
                this.loading = false;
                return false;
            }
        });
    }
    mergeOnAzure(csrobjazure) {
        var mergecsrobjazure = {
            "x5c": [csrobjazure]
        };
        this.esc.azureMergeCrt(this.customForm.value.crtFriendlyname, mergecsrobjazure)
            .subscribe(res => {
            let crtdata = JSON.parse(res);
            //console.log(crtdata);
            if (crtdata.error) {
                this.catchazureError(crtdata.error.message);
            }
        }, err => {
            this.catchazureError(err);
        });
    }
    catchazureError(err) {
        this.loading = false;
        this.errormessage = err;
        this.opened = true;
        return false;
    }
    opendiaglogrenew() {
        this.open = true;
        this.errormessage = "The requested action Renew is not supported for the certificate with tracking ID " + " " + this.id + " ";
    }
    opendialog(domain) {
        if (domain.domainSimble == 0) {
            return false;
        }
        this.opened = true;
        if (domain == 1) {
            this.errormessage = "Please Select Primary Domain";
            return;
        }
        this.errormessage = "Something Wrong, The SAN component" + "  " + domain + " " + "validation failed. Adding the SAN component" + "  " + domain + "  " + " would exceed maximum domains for this certificate type. The SAN cannot be added.";
    }
}
RenewProductnameComponent.ɵfac = function RenewProductnameComponent_Factory(t) { return new (t || RenewProductnameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_entrust_service__WEBPACK_IMPORTED_MODULE_7__["EntrustService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"])); };
RenewProductnameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RenewProductnameComponent, selectors: [["app-renew-productname"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]])], decls: 34, vars: 16, consts: [[1, "pcoded-content"], [1, "row"], [1, "col-lg-12", "col-md-12"], [1, "card"], [1, "col-md-12"], ["id", "wizardc"], ["id", "design-wizard", "action", "ssl-tls.html?name=&name=&name=&name=#", "role", "application", 1, "wizard-form", "wizard", "clearfix"], [3, "steps", "stepType", "currentStep", "currentStepChange"], [1, "steps", "clearfix"], [1, "content", "clearfix"], ["id", "design-wizard-h-0", "tabindex", "-1", 1, "title", "current"], ["id", "design-wizard-h-1", "tabindex", "-1", 1, "title"], ["id", "design-wizard-p-0", "role", "tabpanel", "aria-labelledby", "design-wizard-h-0", "class", "body current", "aria-hidden", "false", "style", "left: 0px;", 4, "ngIf"], ["id", "design-wizard-h-2", "tabindex", "-1", 1, "title"], ["id", "design-wizard-p-2", "role", "tabpanel", "aria-labelledby", "design-wizard-h-2", "class", "body", 4, "ngIf"], ["id", "design-wizard-h-3", "tabindex", "-1", 1, "title"], ["id", "design-wizard-p-3", "role", "tabpanel", "aria-labelledby", "design-wizard-h-3", "class", "body", 4, "ngIf"], ["class", "k-i-loading", 4, "ngIf"], [1, "actions", "clearfix"], ["role", "menu", "aria-label", "Pagination", 1, "text-right"], ["aria-disabled", "true", 1, "disabled"], ["class", "k-button prev", "role", "menuitem", 3, "click", 4, "ngIf"], ["class", "k-button prev", "routerLink", "/", "role", "menuitem", 4, "ngIf"], ["aria-disabled", "false"], ["class", "k-button k-primary", "role", "menuitem", 3, "click", 4, "ngIf"], ["title", "Error", 3, "minWidth", "width", "close", 4, "ngIf"], ["id", "design-wizard-p-0", "role", "tabpanel", "aria-labelledby", "design-wizard-h-0", "aria-hidden", "false", 1, "body", "current", 2, "left", "0px"], [1, "col-sm-12"], [1, "ent-info-banner"], [1, "col-sm-12", "text-right"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "btn-fixed", "m-b-5", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-default", "btn-fixed", "m-b-5", 3, "click"], [1, "row", "m-t-20"], [1, "col-sm-6"], [1, "col-sm-5"], ["type", "text", "placeholder", "Enter additional domains, separated by commas", "required", "", 1, "form-control", "p-5", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "col-sm-1", "text-right", "p-l-0"], [1, "btn", "btn-primary", 3, "click"], [1, "crtformcontrol"], [3, "formGroup"], [1, "form-group"], ["for", "", 1, "block"], [2, "color", "#a6093d"], ["format", "MMMM d yyyy", "formControlName", "expDate", 1, "kendo-datepicker", 3, "min", "max"], ["shortDate", ""], ["class", "help-block", "style", "color:#a6093d", 4, "ngIf"], ["formControlName", "orgnization", 3, "data", "textField", "valueField", "valuePrimitive", "selectionChange"], ["class", "help-block", "style", "color: #a6093d", 4, "ngIf"], ["formControlName", "ou", 3, "data", "textField", "valueField", "defaultItem", "valuePrimitive", "selectionChange"], ["formControlName", "signIn", 3, "data"], ["formControlName", "eku", 3, "data", "textField", "valueField", "defaultItem", "valuePrimitive", "selectionChange"], ["class", "form-group", 4, "ngIf"], ["type", "checkbox", "kendoCheckBox", "", 3, "ngModel", "ngModelChange"], [1, "form-group", "Certi-Main"], ["for", "", 1, "alert-info"], [1, "Certi-Main-left"], [1, "fa", "fa-info-circle"], ["class", "Certi-Main-Right ", 4, "ngIf"], ["class", "Certi-Main-Right", 4, "ngIf"], [1, "form-group", 2, "margin", "0px"], ["role", "tablist", 1, "nav", "nav-tabs", "tabs", 2, "width", "auto !important", "background", "none !important", "padding", "0px !important"], [1, "nav-item", 2, "line-height", "20px !important"], ["data-toggle", "tab", "href", "#Certificate", "role", "tab", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#Management", "role", "tab", 1, "nav-link"], [1, "tab-content", "tabs", "card-block", "table-bordered", "p-0"], ["id", "Certificate", "role", "tabpanel", 1, "tab-pane", "active"], [1, "dt-responsive", "table-responsive"], [3, "data", "rowClass", "height", "selectable", "selectionChange"], ["title", "", 3, "width"], ["field", "value", "title", "Domain", 3, "width"], ["field", "units", "title", "Units", 3, "width", "headerStyle"], ["field", "domainSimble", "title", "Status ", 3, "width", "headerStyle"], ["kendoGridCellTemplate", ""], ["field", "Include", "title", "Action", "width", "70"], ["id", "Management", "role", "tabpanel", 1, "tab-pane"], [3, "data", "height", "selectable", "selectionChange"], ["title", "Domain", "field", "domainName", 3, "width"], ["field", "verificationStatus", "title", "Verification Status", 3, "width"], ["field", "verificationMethod", "title", "Verification Method", 3, "width"], ["field", "ovEligible", "title", "OV Eligible", 3, "width"], ["field", "evEligible", "title", "EV Eligible", 3, "width"], ["field", "evExpiry", "title", "EV Expiry", 3, "width"], ["field", "ovExpiry", "title", "OV Expiry", 3, "width"], [1, "form-group", "m-t-20", "m-b-6"], [1, "form-group", "m-b-6"], [1, "form-group", "m-t-20"], [1, "help-block", 2, "color", "#a6093d"], ["formControlName", "eca", 3, "data", "textField", "valueField", "valuePrimitive", "defaultItem", "selectionChange"], [1, "Certi-Main-Right"], [3, "click"], ["class", "fas fa-check text-success", 4, "ngIf"], ["class", "fas fa-exclamation-triangle text-warning", 4, "ngIf"], [1, "fas", "fa-check", "text-success"], [1, "fas", "fa-exclamation-triangle", "text-warning"], ["type", "checkbox", 3, "checked", "click"], [4, "ngIf"], ["id", "design-wizard-p-2", "role", "tabpanel", "aria-labelledby", "design-wizard-h-2", 1, "body"], [1, "col-sm-12", "m-b-20"], ["id", "", "name", "name", "type", "text", "formControlName", "crtFriendlyname", "placeholder", "Azure Certificate Name", 1, "form-control"], ["id", "", "name", "name", "type", "text", "formControlName", "adEmail", "placeholder", "Enter additional emails, seperated by commas (optional)", 1, "form-control"], ["class", "col-sm-6", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], ["class", "form-group", 4, "ngSwitchCase"], ["class", "  form-group", 4, "ngSwitchCase"], ["style", "color:#a6093d;", 4, "ngIf"], ["type", "text", "kendoTextBox", "", 1, "form-control", 3, "formControlName"], ["type", "number", "kendoTextBox", "", 1, "form-control", 3, "formControlName"], ["type", "email", "kendoTextBox", "", 1, "form-control", 3, "formControlName"], ["type", "date", 1, "form-control", 3, "formControlName"], [3, "data", "formControlName"], ["id", "design-wizard-p-3", "role", "tabpanel", "aria-labelledby", "design-wizard-h-3", 1, "body"], ["for", "", 1, "block", "txt-bold"], ["href", "javascript:void(0);"], [1, "row", "m-t-10"], ["href", "javascript:void(0);", 3, "click"], [4, "ngFor", "ngForOf"], [1, "block"], [1, "k-i-loading"], ["role", "menuitem", 1, "k-button", "prev", 3, "click"], ["routerLink", "/", "role", "menuitem", 1, "k-button", "prev"], ["role", "menuitem", 1, "k-button", "k-primary", 3, "click"], ["title", "Error", 3, "minWidth", "width", "close"], [1, "d-flex", "flex-row", "mt-1"], [1, "align-top", "mr-3"], [1, "fas", "fa-exclamation-triangle", "fa-3x", "text-warning"], [1, "align-top", "normal-label"], [1, "col-sm-12", "m-t-10", "m-b-10", 2, "text-align", "center"], ["primary", "true", 1, "k-button", "k-primary", "conf_button", 2, "padding", "5px 16px", 3, "click"]], template: function RenewProductnameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "kendo-stepper", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("currentStepChange", function RenewProductnameComponent_Template_kendo_stepper_currentStepChange_9_listener($event) { return ctx.current = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RenewProductnameComponent_fieldset_14_Template, 118, 61, "fieldset", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, RenewProductnameComponent_fieldset_16_Template, 28, 5, "fieldset", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RenewProductnameComponent_fieldset_18_Template, 79, 11, "fieldset", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, RenewProductnameComponent_div_20_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RenewProductnameComponent_a_24_Template, 2, 0, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, RenewProductnameComponent_a_26_Template, 2, 0, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, RenewProductnameComponent_a_28_Template, 2, 0, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RenewProductnameComponent_a_30_Template, 2, 0, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RenewProductnameComponent_kendo_dialog_31_Template, 11, 3, "kendo-dialog", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, RenewProductnameComponent_kendo_dialog_32_Template, 11, 3, "kendo-dialog", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, RenewProductnameComponent_kendo_dialog_33_Template, 11, 3, "kendo-dialog", 25);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 1100, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("steps", ctx.steps)("stepType", ctx.stepType)("currentStep", ctx.current);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.current === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.current === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.current === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.current !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.current !== 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.current !== 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.current === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.open);
    } }, directives: [_progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_9__["StepperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_10__["LabelDirective"], _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_11__["DatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__["DropDownListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__["CheckBoxDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__["GridComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__["CheckboxColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__["ColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__["CellTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitchCase"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__["TextBoxDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogComponent"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogActionsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["KeyValuePipe"]], styles: [".card[_ngcontent-%COMP%]{\r\n  border:none !important;\r\n}\r\n#internal-wizard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  display: block;\r\n  padding: 10px 15px;\r\n  background: #003798;\r\n}\r\n.list-group-item.active[_ngcontent-%COMP%] {\r\n  background-color: #8b278c;\r\n  border-color: #8b278c;\r\n}\r\n.list-group-item[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: block;\r\n    padding: 15px;\r\n    \r\n    background-color: #fbe1fb;\r\n    \r\n    font-size: 13px;\r\n    font-weight: 600;\r\n}\r\n.p-5[_ngcontent-%COMP%] {\r\n  padding: 5px !important;\r\n}\r\na.btn.btn-primary[_ngcontent-%COMP%] {\r\n\r\n  background-color: #448aff;\r\n  border-color: #448aff;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n.grid-wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.kendo-datepicker[_ngcontent-%COMP%]{\r\n    display: flex;\r\n   justify-content: center;\r\n   width: 450px;\r\n }\r\nspan.k-link.ng-tns-c47-0[_ngcontent-%COMP%] {\r\n  font-size: 19px;\r\n}\r\n\r\n.alert-info[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  color: #000;\r\n  background-color: #eff2fc;\r\n  border: 1px solid #00359b;\r\n  padding: 10px 20px;\r\n  }\r\n.form-group-bg[_ngcontent-%COMP%] {\r\n  background: #eff2fc;\r\n  padding: 15px;\r\n  margin-bottom: 20px;\r\n  border: 1px solid #00359b;\r\n  }\r\n.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    background: none;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n  background-color: #f3f3f5;\r\n  border: 1px solid #e1e1e1;\r\n  color: #456BD1;\r\n  border-radius: 0px ;\r\n  }\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\r\n  color: #456BD1;\r\n\r\n  }\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\r\n  color: #33509C;\r\n  }\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n  border-color: #f3f3f5 !important;\r\n  background-color: #f3f3f5;\r\n  color: #456BD1;\r\n  font-weight: bold;\r\n  border-radius: 0px ;\r\n  }\r\n\r\n.btn-default[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    border: 1px solid #456BD1;\r\n    color: #456BD1;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 14px !important;\r\n    line-height: 1.8 !important;\r\n    margin-left:5px;\r\n    text-transform: inherit;\r\n}\r\n.ent-info-banner[_ngcontent-%COMP%] {\r\n  background-color: #EFF2FB;\r\n  border: 1px solid #003594;\r\n  border-radius: 0px;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n  padding: 10px 15px 5px 50px;\r\n  position: relative;\r\n  width: 100%;\r\n  }\r\n.ent-info-banner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: 24px;\r\n  color: #3d3a3c;\r\n  }\r\n.ent-info-banner[_ngcontent-%COMP%]::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Font Awesome 5 Pro';\r\n  content: \"\\f05a\";\r\n  font-weight: 900;\r\n  color: #003594;\r\n  font-size: 2em;\r\n  position: absolute;\r\n  top: 47%;\r\n  left: 10px;\r\n  transform: translate(0, -50%);\r\n  }\r\n.ent-info-reissue[_ngcontent-%COMP%] {\r\n  background-color: #EFF2FB;\r\n  border: 1px solid #003594;\r\n  border-radius: 0px;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n  padding: 15px 15px 15px 50px;\r\n  position: relative;\r\n  width: 100%;\r\n  }\r\n.ent-info-reissue[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: 24px;\r\n  color: #3d3a3c;\r\n  }\r\n.ent-info-reissue[_ngcontent-%COMP%]::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Font Awesome 5 Pro';\r\n  content: \"\\f05a\";\r\n  font-weight: 900;\r\n  color: #003594;\r\n  font-size: 2em;\r\n  position: absolute;\r\n  top: 26%;\r\n  left: 10px;\r\n  transform: translate(0, -50%);\r\n  }\r\n.ent-info-small[_ngcontent-%COMP%] {\r\n  background-color: #EFF2FB;\r\n  border: 1px solid #003594;\r\n  border-radius: 0px;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n  padding: 15px 15px 15px 50px;\r\n  position: relative;\r\n  width: 100%;\r\n  }\r\n.ent-info-small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Font Awesome 5 Pro';\r\n  content: \"\\f05a\";\r\n  font-weight: 900;\r\n  color: #003594;\r\n  font-size: 24px;\r\n  position: absolute;\r\n  top: 35%;\r\n  left: 15px;\r\n  transform: translate(0, -50%);\r\n  }\r\n.ent-warning-banner[_ngcontent-%COMP%] {\r\n  background-color: #FFFBE6;\r\n  border: 1px solid #F2A900;\r\n  border-radius: 0px;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n  padding: 15px 15px 15px 50px;\r\n  position: relative;\r\n  width: 100%;\r\n  }\r\n.ent-warning-banner[_ngcontent-%COMP%]::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Font Awesome 5 Pro';\r\n  content: \"\\f071\";\r\n  font-weight: 900;\r\n  color: #F2A900;\r\n  font-size: 2em;\r\n  position: absolute;\r\n  top: 20%;\r\n  left: 10px;\r\n  transform: translate(0, -50%);\r\n  }\r\n.btn-default[_ngcontent-%COMP%]:hover {\r\n    background-color: #dae2f6;\r\n    border: 1px solid #456BD1;\r\n    color: #456BD1;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 14px !important;\r\n    line-height: 1.8 !important;\r\n    margin-left: 5px;\r\n}\r\n.btn-default[_ngcontent-%COMP%]:focus {\r\nbackground-color: #fff;\r\nborder: 1px solid #456BD1;\r\ncolor: #456BD1;\r\ncursor: pointer;\r\ntext-align: center;\r\nfont-weight: bold;\r\nfont-size: 14px !important;\r\nline-height: 1.8 !important;\r\nmargin-left: 5px;\r\n}\r\n.btn-default[_ngcontent-%COMP%]:active {\r\n    background-color: #b8c7ee;\r\n    border: 1px solid #456BD1;\r\n    color: #456BD1;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 14px !important;\r\n    line-height: 1.8 !important;\r\n    margin-left: 5px;\r\n    \r\n}\r\n.k-i-loading[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  font-size: 64px;\r\n\r\nborder-color: currentColor;\r\nborder-top-color: transparent;\r\nborder-bottom-color: transparent;\r\nbackground-color: transparent;\r\n}\r\n.k-grid[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] { background-color: #fff3cd; }\r\n.k-grid[_ngcontent-%COMP%]   tr.odd[_ngcontent-%COMP%] { background-color: #fedada; }\r\n.m-b-6[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ2VydGlmaWNhdGUvcmVuZXctcHJvZHVjdG5hbWUvcmVuZXctcHJvZHVjdG5hbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0NBQ0M7RUFDQyxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHdDQUF3QztJQUN4QyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTs7RUFFRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFRTtJQUNFLGFBQWE7R0FDZCx1QkFBdUI7R0FDdkIsWUFBWTtDQUNkO0FBQ0E7RUFDQyxlQUFlO0FBQ2pCO0FBQ0E7OztHQUdHO0FBQ0g7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCO0FBQ0E7RUFDQSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekI7QUFDQTtJQUNFLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CO0FBQ0E7O0VBRUEsY0FBYzs7RUFFZDtBQUNBO0VBQ0EsY0FBYztFQUNkO0FBQ0E7RUFDQSxnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CO0FBRUEsZUFBZTtBQUNmO0lBQ0Usc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCO0FBQ0U7RUFDQSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYO0FBQ0E7RUFDQSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZDtBQUVBO0VBQ0EscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUVWLDZCQUE2QjtFQUM3QjtBQUNBO0VBQ0EseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWDtBQUVBO0VBQ0EscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2Q7QUFFQTtFQUNBLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFFViw2QkFBNkI7RUFDN0I7QUFFQTtFQUNBLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7QUFHQTtFQUNBLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFFViw2QkFBNkI7RUFDN0I7QUFDQTtFQUNBLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7QUFFQTtFQUNBLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFFViw2QkFBNkI7RUFDN0I7QUFDQTtJQUNFLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCLGNBQWM7QUFDZCxlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQiwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLGdCQUFnQjtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixnQkFBZ0I7O0FBRXBCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7O0FBRWpCLDBCQUEwQjtBQUMxQiw2QkFBNkI7QUFDN0IsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QjtBQUNBLGtCQUFrQix5QkFBeUIsRUFBRTtBQUM3QyxpQkFBaUIseUJBQXlCLEVBQUU7QUFFNUM7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9DZXJ0aWZpY2F0ZS9yZW5ldy1wcm9kdWN0bmFtZS9yZW5ldy1wcm9kdWN0bmFtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAuY2FyZHtcclxuICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiNpbnRlcm5hbC13aXphcmQgbGkgYSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDM3OTg7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjI3OGM7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOGIyNzhjO1xyXG59XHJcblxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAtMXB4OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZTFmYjtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7ICovXHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wLTUge1xyXG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbmEuYnRuLmJ0bi1wcmltYXJ5IHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0OGFmZjtcclxuICBib3JkZXItY29sb3I6ICM0NDhhZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ncmlkLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuICAua2VuZG8tZGF0ZXBpY2tlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICB3aWR0aDogNDUwcHg7XHJcbiB9XHJcbiBzcGFuLmstbGluay5uZy10bnMtYzQ3LTAge1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG4vKiAuay10YWJzdHJpcC1pdGVtcyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59ICovXHJcbi5hbGVydC1pbmZvIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjJmYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTliO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB9XHJcbiAgLmZvcm0tZ3JvdXAtYmcge1xyXG4gIGJhY2tncm91bmQ6ICNlZmYyZmM7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDM1OWI7XHJcbiAgfVxyXG4gIC50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHRkIGkge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4ubmF2LXRhYnMgLm5hdi1pdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2Y1O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgY29sb3I6ICM0NTZCRDE7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDtcclxuICB9XHJcbiAgLm5hdi10YWJzIC5uYXYtaXRlbSBhe1xyXG5cclxuICBjb2xvcjogIzQ1NkJEMTtcclxuXHJcbiAgfVxyXG4gIC5uYXYtdGFicyAubmF2LWxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiAjMzM1MDlDO1xyXG4gIH1cclxuICAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjNmM2Y1ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmNTtcclxuICBjb2xvcjogIzQ1NkJEMTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggO1xyXG4gIH1cclxuXHJcbiAgLyogMDMtMTUtMjAyMSAqL1xyXG4gIC5idG4tZGVmYXVsdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ1NkJEMTtcclxuICAgIGNvbG9yOiAjNDU2QkQxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG59XHJcbiAgLmVudC1pbmZvLWJhbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjJGQjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTk0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHggNXB4IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZW50LWluZm8tYmFubmVyIGg0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjM2QzYTNjO1xyXG4gIH1cclxuXHJcbiAgLmVudC1pbmZvLWJhbm5lcjo6YmVmb3JlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgUHJvJztcclxuICBjb250ZW50OiBcIlxcZjA1YVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6ICMwMDM1OTQ7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDclO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gIH1cclxuICAuZW50LWluZm8tcmVpc3N1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjJGQjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTk0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5lbnQtaW5mby1yZWlzc3VlIGg0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjM2QzYTNjO1xyXG4gIH1cclxuXHJcbiAgLmVudC1pbmZvLXJlaXNzdWU6OmJlZm9yZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IFBybyc7XHJcbiAgY29udGVudDogXCJcXGYwNWFcIjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiAjMDAzNTk0O1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDI2JTtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB9XHJcblxyXG4gIC5lbnQtaW5mby1zbWFsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjJGQjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTk0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5cclxuICAuZW50LWluZm8tc21hbGwgOjpiZWZvcmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBQcm8nO1xyXG4gIGNvbnRlbnQ6IFwiXFxmMDVhXCI7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogIzAwMzU5NDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzUlO1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gIH1cclxuICAuZW50LXdhcm5pbmctYmFubmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkU2O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGMkE5MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmVudC13YXJuaW5nLWJhbm5lcjo6YmVmb3JlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgUHJvJztcclxuICBjb250ZW50OiBcIlxcZjA3MVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6ICNGMkE5MDA7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjAlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gIH1cclxuICAuYnRuLWRlZmF1bHQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZTJmNjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NTZCRDE7XHJcbiAgICBjb2xvcjogIzQ1NkJEMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS44ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5idG4tZGVmYXVsdDpmb2N1cyB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbmJvcmRlcjogMXB4IHNvbGlkICM0NTZCRDE7XHJcbmNvbG9yOiAjNDU2QkQxO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG5saW5lLWhlaWdodDogMS44ICFpbXBvcnRhbnQ7XHJcbm1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLmJ0bi1kZWZhdWx0OmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhjN2VlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ1NkJEMTtcclxuICAgIGNvbG9yOiAjNDU2QkQxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBcclxufVxyXG5cclxuLmstaS1sb2FkaW5nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogNjRweDtcclxuXHJcbmJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xyXG5ib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5rLWdyaWQgdHIuZXZlbiB7IGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2Q7IH1cclxuLmstZ3JpZCB0ci5vZGQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVkYWRhOyB9XHJcblxyXG4ubS1iLTZ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RenewProductnameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-renew-productname',
                templateUrl: './renew-productname.component.html',
                styleUrls: ['./renew-productname.component.css'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]],
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_entrust_service__WEBPACK_IMPORTED_MODULE_7__["EntrustService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Cleints/details/details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Cleints/details/details.component.ts ***!
  \******************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _entrust_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entrust.service */ "./src/app/entrust.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function DetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DetailsComponent_div_0_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeGroup($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", group_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r2, " ");
} }
function DetailsComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.group);
} }
class DetailsComponent {
    constructor(entrustservice) {
        this.entrustservice = entrustservice;
        // clients: Clients[]=[];
        this.gridData = [];
        this.groups = ['a', 'b', 'c'];
        this.usersList = [
            { 'name': 'john', 'group': 'a' },
            { 'name': 'mike', 'group': 'a' },
            { 'name': 'doe', 'group': 'b' },
            { 'name': 'tim', 'group': 'c' }
        ];
        this.groupValue = [];
        this.newArray = [];
    }
    ngOnInit() {
        // this.entrustservice.getAll().subscribe((response : any)=>
        // {
        //   console.log(response);
        //   this.gridData=response.clients;
        // })
        this.newArray = this.usersList.slice();
    }
    changeGroup(event) {
        const group = event.target.value;
        const index = this.groupValue.indexOf(group);
        if (index > -1) {
            this.groupValue.splice(index, 1);
        }
        else {
            this.groupValue.push(group);
        }
        this.transform(this.usersList, 'group', this.groupValue);
        if (this.groupValue.length == 0) {
            this.transform(this.usersList, '', this.groupValue);
        }
    }
    transform(items, field, value) {
        console.log(value);
        if (!items) {
            return [];
        }
        if (!field || !value || value.length <= 0) {
            return items;
        }
        this.newArray = items.filter(singleItem => {
            return (singleItem != null && singleItem[field] != null && singleItem[field] != undefined && value.indexOf(singleItem[field]) >= 0);
        });
        return this.newArray;
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_entrust_service__WEBPACK_IMPORTED_MODULE_1__["EntrustService"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 10, vars: 2, consts: [[4, "ngFor", "ngForOf"], ["id", "bttns", 1, "btn", "btn-filter"], ["type", "checkbox", "name", "customersGroupFilter", "autoComplete", "off", 3, "value", "change"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailsComponent_div_0_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailsComponent_tr_9_Template, 5, 2, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NsZWludHMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details',
                templateUrl: './details.component.html',
                styleUrls: ['./details.component.css']
            }]
    }], function () { return [{ type: _entrust_service__WEBPACK_IMPORTED_MODULE_1__["EntrustService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Create/ssl-tls/ssl-tls.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Create/ssl-tls/ssl-tls.component.ts ***!
  \*****************************************************/
/*! exports provided: SslTlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SslTlsComponent", function() { return SslTlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_Inventry_details_inventory_details_inventory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Inventry/details-inventory/details-inventory.component */ "./src/app/Inventry/details-inventory/details-inventory.component.ts");
/* harmony import */ var _progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-date-math */ "./node_modules/@progress/kendo-date-math/dist/es2015/main.js");
/* harmony import */ var src_app_custom_pipe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/custom-pipe.pipe */ "./src/app/custom-pipe.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_entrust_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/entrust.service */ "./src/app/entrust.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-label */ "./node_modules/@progress/kendo-angular-label/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/__ivy_ngcc__/dist/fesm2015/index.js");



















const _c0 = ["content"];
function SslTlsComponent_fieldset_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 38);
} }
function SslTlsComponent_fieldset_12_ng_template_5_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " There is no product inventory to place a request for a Standard OV SSL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_12_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Standard OV SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Standard OV SSL certificate establishes your trusted identity and eliminates browser notifications that warn visitors entering your site.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 Organization Validation (OV) SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0 Secures both www.example.com and example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "For greater trust and a green address bar, choose Multi-Domain EV SSL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SslTlsComponent_fieldset_12_ng_template_5_div_16_Template, 5, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Remaining Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r11.inventories[2] == null ? null : ctx_r11.inventories[2].remainingCount) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.inventories[2] == null ? null : ctx_r11.inventories[2].remainingCount, "");
} }
function SslTlsComponent_fieldset_12_ng_template_7_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " There is no product inventory to place a request for a Advantage OV SSL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_12_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Advantage OV SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Advantage OV SSL certificate establishes your trusted identity and eliminates browser notifications that warn visitors entering your site.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 Organization Validation (OV) SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0 Secures both www.example.com and example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Includes one additional SAN, otherexample.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "For greater trust and a green address bar, choose Multi-Domain EV SSL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SslTlsComponent_fieldset_12_ng_template_7_div_18_Template, 5, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Remaining Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r12.inventories[0] == null ? null : ctx_r12.inventories[0].remainingCount) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.inventories[0] == null ? null : ctx_r12.inventories[0].remainingCount);
} }
function SslTlsComponent_fieldset_12_ng_template_9_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " There is no product inventory to place a request for a Multi-Domain OV SSL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_12_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Multi-Domain OV SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The Unified Communications SSL certificate establishes your trusted identity and eliminates browser notifications that warn visitors entering your site. This certificate allows you to consolidate multiple certificates by leveraging Subject Alternative Names (SANs).");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 Extended Validation (EV) SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0 Secures both www.example.com and example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Includes 3 additional SANs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Up to 250 SANs using additional SAN inventory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "For greater trust and a green address bar, choose Multi-Domain EV SSL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SslTlsComponent_fieldset_12_ng_template_9_div_20_Template, 5, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Remaining Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r13.inventories[3] == null ? null : ctx_r13.inventories[3].remainingCount) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.inventories[3] == null ? null : ctx_r13.inventories[3].remainingCount);
} }
function SslTlsComponent_fieldset_12_ng_template_11_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " There is no product inventory to place a request for a Multi-Domain OV SSL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_12_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Multi-Domain EV SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Multi-Domain EV SSL certificate provides the highest level of identity assurance. EV SSL certificates display a green bar in the browser, which visitors look for as the ultimate sign of trust and security in eCommerce. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 Extended Validation (EV) SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0 Secures both www.example.com and example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Includes one additional SAN, otherexample.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Up to 250 SANs using additional SAN inventory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "For greater trust and a green address bar, choose Multi-Domain EV SSL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SslTlsComponent_fieldset_12_ng_template_11_div_20_Template, 5, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Remaining Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r14.inventories[1] == null ? null : ctx_r14.inventories[1].remainingCount) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.inventories[1] == null ? null : ctx_r14.inventories[1].remainingCount);
} }
function SslTlsComponent_fieldset_12_ng_template_13_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " There is no product inventory to place a request for a Multi-Domain OV SSL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_12_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wildcard OV SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Wildcard OV SSL certificates dynamically support an unlimited number of subdomains by specifying *.example.com in the certificate. Provides flexibility and ease of use in environments that see frequent change.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 Organization Validation (OV) SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0 Unlimited subdomains");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Supports multiple wildcard SANs using additional SAN inventory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "For greater trust and a green address bar, choose Wildcard EV SSL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SslTlsComponent_fieldset_12_ng_template_13_div_18_Template, 5, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Remaining Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r15.inventories[4] == null ? null : ctx_r15.inventories[4].remainingCount) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.inventories[4] == null ? null : ctx_r15.inventories[4].remainingCount);
} }
function SslTlsComponent_fieldset_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SslTlsComponent_fieldset_12_div_1_Template, 1, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "kendo-tabstrip", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabSelect", function SslTlsComponent_fieldset_12_Template_kendo_tabstrip_tabSelect_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onTabSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "kendo-tabstrip-tab", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SslTlsComponent_fieldset_12_ng_template_5_Template, 23, 2, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "kendo-tabstrip-tab", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SslTlsComponent_fieldset_12_ng_template_7_Template, 25, 2, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "kendo-tabstrip-tab", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SslTlsComponent_fieldset_12_ng_template_9_Template, 27, 2, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "kendo-tabstrip-tab", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SslTlsComponent_fieldset_12_ng_template_11_Template, 27, 2, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "kendo-tabstrip-tab", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SslTlsComponent_fieldset_12_ng_template_13_Template, 25, 2, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.step1Loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabPosition", "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Standard OV SSL")("selected", ctx_r0.tabindex == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Advantage OV SSL")("selected", ctx_r0.tabindex == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Multi-Domain OV SSL")("selected", ctx_r0.tabindex == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Multi-Domain EV SSL")("selected", ctx_r0.tabindex == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Wildcard OV SSL")("selected", ctx_r0.tabindex == 4);
} }
function SslTlsComponent_fieldset_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 112);
} }
function SslTlsComponent_fieldset_13_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Orgnization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_13_span_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Extended Key Usage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { text: "Select Encryption Algorithm", value: null }; };
function SslTlsComponent_fieldset_13_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Encryption Algorithm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "kendo-dropdownlist", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function SslTlsComponent_fieldset_13_div_62_Template_kendo_dropdownlist_selectionChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.selectionChangeseca($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r27.listItemsecaEx)("textField", "text")("valueField", "value")("valuePrimitive", true)("defaultItem", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
} }
function SslTlsComponent_fieldset_13_div_63_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Encryption Algorithm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "kendo-dropdownlist", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function SslTlsComponent_fieldset_13_div_63_Template_kendo_dropdownlist_selectionChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.selectionChangeseca($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r28.listItemseca)("textField", "text")("valueField", "value")("valuePrimitive", true)("defaultItem", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
} }
function SslTlsComponent_fieldset_13_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This certificate will be sent to CT logs. The contents of this certificate, including host names, will be publicly visible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_13_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Deselecting this checkbox overrides the default CT logs setting for your account. Browsers may not trust this certificate. If you are not sure, contact your administrator. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_13_ng_template_95_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 119);
} }
function SslTlsComponent_fieldset_13_ng_template_95_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 120);
} }
function SslTlsComponent_fieldset_13_ng_template_95_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SslTlsComponent_fieldset_13_ng_template_95_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const dataItem_r38 = ctx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.opendialog(dataItem_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SslTlsComponent_fieldset_13_ng_template_95_i_1_Template, 1, 0, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SslTlsComponent_fieldset_13_ng_template_95_i_2_Template, 1, 0, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dataItem_r38.domainSimble == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dataItem_r38.domainSimble == 1);
} }
function SslTlsComponent_fieldset_13_ng_template_97_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SslTlsComponent_fieldset_13_ng_template_97_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const dataItem_r44 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.toggle(dataItem_r44, "Include"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", dataItem_r44.Include);
} }
function SslTlsComponent_fieldset_13_ng_template_99_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Primary Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_13_ng_template_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SslTlsComponent_fieldset_13_ng_template_99_span_0_Template, 2, 0, "span", 122);
} if (rf & 2) {
    const dataItem_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dataItem_r47.domaintitle);
} }
const _c2 = function () { return { clientName: "Select client", clientId: null }; };
const _c3 = function () { return { name: "Select orgnization", value: null }; };
const _c4 = function () { return { name: "[no OU]", value: null }; };
const _c5 = function () { return { text: "Select Key", value: null }; };
const _c6 = function () { return { checkboxOnly: true, mode: "multiple" }; };
const _c7 = function () { return { "text-align": "center" }; };
const _c8 = function () { return { checkboxOnly: true, mode: "single" }; };
function SslTlsComponent_fieldset_13_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SslTlsComponent_fieldset_13_div_1_Template, 1, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SslTlsComponent_fieldset_13_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.addPrimaryDomains(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Primary Domain ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SslTlsComponent_fieldset_13_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.removeDomains(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Remove Domain(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SslTlsComponent_fieldset_13_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.addDomain = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SslTlsComponent_fieldset_13_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.addDomains(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Certificate Expiry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "kendo-datepicker", 71, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Clients");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "kendo-dropdownlist", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SslTlsComponent_fieldset_13_Template_kendo_dropdownlist_valueChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.valueChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Organization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "kendo-dropdownlist", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function SslTlsComponent_fieldset_13_Template_kendo_dropdownlist_selectionChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.selectionChangesOrg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SslTlsComponent_fieldset_13_span_43_Template, 2, 0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Organization Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "kendo-dropdownlist", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function SslTlsComponent_fieldset_13_Template_kendo_dropdownlist_selectionChange_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.selectionChangesOU($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Signing Algorithm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "kendo-dropdownlist", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Extended Key Usage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "kendo-dropdownlist", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function SslTlsComponent_fieldset_13_Template_kendo_dropdownlist_selectionChange_59_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.selectionChangeskey($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, SslTlsComponent_fieldset_13_span_61_Template, 2, 0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, SslTlsComponent_fieldset_13_div_62_Template, 6, 6, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, SslTlsComponent_fieldset_13_div_63_Template, 6, 6, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SslTlsComponent_fieldset_13_Template_input_ngModelChange_66_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.isctChecked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Send to CT log ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, SslTlsComponent_fieldset_13_div_72_Template, 2, 0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, SslTlsComponent_fieldset_13_div_73_Template, 2, 0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Domains");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Domains in Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Domain Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "kendo-grid", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function SslTlsComponent_fieldset_13_Template_kendo_grid_selectionChange_90_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.dmIncrtselectionChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "kendo-grid-checkbox-column", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "kendo-grid-column", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "kendo-grid-column", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "kendo-grid-column", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, SslTlsComponent_fieldset_13_ng_template_95_Template, 3, 2, "ng-template", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "kendo-grid-column", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, SslTlsComponent_fieldset_13_ng_template_97_Template, 1, 1, "ng-template", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "kendo-grid-column", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, SslTlsComponent_fieldset_13_ng_template_99_Template, 1, 1, "ng-template", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "kendo-grid", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function SslTlsComponent_fieldset_13_Template_kendo_grid_selectionChange_101_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.dmselectionChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "kendo-grid-checkbox-column", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "kendo-grid-column", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "kendo-grid-column", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "kendo-grid-column", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "kendo-grid-column", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "kendo-grid-column", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "kendo-grid-column", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "kendo-grid-column", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.step2Loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Create ", ctx_r1.selectedTitle, " Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.addDomain);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.certificateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r1.min)("max", ctx_r1.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.clientsList)("valuePrimitive", true)("textField", "clientName")("valueField", "clientId")("defaultItem", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.datalistItemsOrg)("textField", "name")("valueField", "clientId")("defaultItem", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](58, _c3))("valuePrimitive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.certificateForm.get("orgnization").errors == null ? null : ctx_r1.certificateForm.get("orgnization").errors.required) && ctx_r1.certificateForm.get("orgnization").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.dataoulistItems)("textField", "name")("valueField", "value")("defaultItem", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](59, _c4))("valuePrimitive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.listItemsignIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.listItemskey)("textField", "text")("valueField", "value")("defaultItem", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](60, _c5))("valuePrimitive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.certificateForm.get("key").errors == null ? null : ctx_r1.certificateForm.get("key").errors.required) && ctx_r1.certificateForm.get("key").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showEcc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.showEcc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.isctChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isctChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isctChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.griddata)("rowClass", ctx_r1.rowCallback)("height", 500)("selectable", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](61, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 70)("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](62, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 70)("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](63, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.gridView)("height", 500)("selectable", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](64, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total SAN Units from Inventory : ", ctx_r1.remaingSAN, "");
} }
function SslTlsComponent_fieldset_14_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Certificate names can only contain alphanumeric characters and dashes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_14_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter certificate friendlyName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_14_div_28_div_2_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_14_div_28_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SslTlsComponent_fieldset_14_div_28_div_2_b_3_Template, 2, 0, "b", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r65.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r65.mandatory != "NOT_MANDATORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r65.field);
} }
function SslTlsComponent_fieldset_14_div_28_div_3_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_14_div_28_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SslTlsComponent_fieldset_14_div_28_div_3_b_3_Template, 2, 0, "b", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r65.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r65.mandatory != "NOT_MANDATORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r65.field);
} }
function SslTlsComponent_fieldset_14_div_28_div_4_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_14_div_28_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SslTlsComponent_fieldset_14_div_28_div_4_b_3_Template, 2, 0, "b", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r65.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r65.mandatory != "NOT_MANDATORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r65.field);
} }
function SslTlsComponent_fieldset_14_div_28_div_5_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_14_div_28_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SslTlsComponent_fieldset_14_div_28_div_5_b_3_Template, 2, 0, "b", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r65.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r65.mandatory != "NOT_MANDATORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r65.field);
} }
function SslTlsComponent_fieldset_14_div_28_div_6_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_14_div_28_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SslTlsComponent_fieldset_14_div_28_div_6_b_3_Template, 2, 0, "b", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "kendo-dropdownlist", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r65.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r65.mandatory != "NOT_MANDATORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r65.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", i_r65.optionsplit);
} }
function SslTlsComponent_fieldset_14_div_28_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter a value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_fieldset_14_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SslTlsComponent_fieldset_14_div_28_div_2_Template, 5, 3, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SslTlsComponent_fieldset_14_div_28_div_3_Template, 5, 3, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SslTlsComponent_fieldset_14_div_28_div_4_Template, 5, 3, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SslTlsComponent_fieldset_14_div_28_div_5_Template, 5, 3, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SslTlsComponent_fieldset_14_div_28_div_6_Template, 5, 4, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SslTlsComponent_fieldset_14_div_28_div_7_Template, 2, 0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r65 = ctx.$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", i_r65.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r64.form.get(i_r65.field).invalid && (ctx_r64.form.get(i_r65.field).dirty || ctx_r64.form.get(i_r65.field).touched));
} }
function SslTlsComponent_fieldset_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Provide additional information about this certificate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Certificate Friendly Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SslTlsComponent_fieldset_14_span_19_Template, 2, 0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SslTlsComponent_fieldset_14_span_20_Template, 2, 0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Additional Emails");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SslTlsComponent_fieldset_14_div_28_Template, 8, 7, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Create ", ctx_r2.selectedTitle, " Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.customForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.customForm.get("crtFriendlyname").errors == null ? null : ctx_r2.customForm.get("crtFriendlyname").errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.customForm.get("crtFriendlyname").errors == null ? null : ctx_r2.customForm.get("crtFriendlyname").errors.required) && ctx_r2.customForm.get("crtFriendlyname").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.personProps);
} }
function SslTlsComponent_fieldset_15_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dm_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dm_r85, "");
} }
function SslTlsComponent_fieldset_15_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Field Name :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r86.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r86.value);
} }
function SslTlsComponent_fieldset_15_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Provide additional information about this certificate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Product Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SslTlsComponent_fieldset_15_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.gotoStep1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Edit Product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Organization: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Organization Unit : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SslTlsComponent_fieldset_15_Template_a_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.gotoStep2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Edit Organization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Domains :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, SslTlsComponent_fieldset_15_div_41_Template, 4, 1, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SslTlsComponent_fieldset_15_Template_a_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.gotoStep2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Edit Domains ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Certificate Attributes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Signing Alorithm : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Extended Key Usage : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Encryption Algorithm : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Send to CT logs : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SslTlsComponent_fieldset_15_Template_a_click_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.gotoStep2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Edit Certificate Attributes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SslTlsComponent_fieldset_15_Template_a_click_75_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.gotoStep1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Edit Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Additional Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, SslTlsComponent_fieldset_15_div_84_Template, 8, 2, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](85, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SslTlsComponent_fieldset_15_Template_a_click_87_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r93.gotoStep3(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Edit Additional Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Create ", ctx_r3.selectedTitle, " Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.optionsOrg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.optionsOu, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.reviewOptions == null ? null : ctx_r3.reviewOptions.subjectAltName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.certificateForm.value.signIn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.reviewOptions == null ? null : ctx_r3.reviewOptions.eku, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.reviewOptions == null ? null : ctx_r3.reviewOptions.keyType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.isctChecked, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](85, 10, ctx_r3.customdata));
} }
function SslTlsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 38);
} }
function SslTlsComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SslTlsComponent_a_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_a_22_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SslTlsComponent_a_22_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r6.ibutton);
} }
function SslTlsComponent_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SslTlsComponent_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SslTlsComponent_kendo_dialog_39_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-dialog", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function SslTlsComponent_kendo_dialog_39_Template_kendo_dialog_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.close("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "kendo-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SslTlsComponent_kendo_dialog_39_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.close("yes"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.errormessage);
} }
class SslTlsComponent {
    constructor(datePipe, router, esc, activatedRoute, http) {
        this.datePipe = datePipe;
        this.router = router;
        this.esc = esc;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.stepType = 'full';
        this.position = 'left';
        this.steps = [
            { label: 'Select Certificate', isValid: true },
            { label: 'Certificate Details', isValid: true },
            { label: 'Additional Information', isValid: true, },
            { label: 'Summary', isValid: true }
        ];
        this.listItemsignIn = ["SHA-2"];
        this.listItemskey = [
            { text: "Server and Client Authentication", value: 0, name: "SERVER_AND_CLIENT_AUTH" },
            { text: "Client Authentication", value: 1, name: "CLIENT_AUTH" },
            { text: "Server Authentication", value: 2, name: "SERVER_AUTH" },
        ];
        this.listItemsecaEx = [
            { text: "RSA Encryption", value: 0, name: "RSA" }
        ];
        this.listItemseca = [
            { text: "RSA Encryption", value: 0, name: "RSA" },
            { text: "ECC  Encryption", value: 1, name: "EC" },
        ];
        this.sumbitted = false;
        this.domains = [];
        this.selectedValue = '';
        this.organizations = [];
        this.inventories = [];
        this.organizationUnits = [];
        this.showred = true;
        this.array3 = [];
        this.selected = 0;
        this.items = [{
                text: 'Standard OV SSL',
                value: 'STANDARD_SSL'
            }, {
                text: 'Advanced OV SSL',
                value: 'ADVANTAGE_SSL'
            }, {
                text: 'Multi-Domain OV SSL',
                value: 'UC_SSL'
            }, {
                text: 'Multi-Domain EV SSL',
                value: 'EV_SSL'
            }, {
                text: 'Wildcard OV SSL',
                value: 'WILDCARD_SSL'
            }];
        this.opened = false;
        this.min = Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["addDays"])(Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["getDate"])(new Date()), 10);
        this.max = Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["addYears"])(Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["getDate"])(new Date()), 1);
        this.current = 0;
        this.selectedname = "STANDARD_SSL";
        this.tabindex = 0;
        this.selectedTitle = "Standard OV SSL";
        this.showEcc = false;
        this.optionsOu = [];
        //auditlogsdata
        this.auditLogs = [];
        this.customForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            // crtFriendlyname: new FormControl('',Validators.compose([ Validators.required,Validators.pattern('^[a-z0-9_-]{8,15}$')])),
            crtFriendlyname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            adEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.datearray = [];
        this.textarray = [];
        this.dropdownarray = [];
        this.dataaarays = [];
        this.submitted = false;
        this.personProps = [];
        this.azurecsr = null;
        this.uid = localStorage.getItem("tempid");
        this.monthAgo = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        this.certificateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            expDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.monthAgo),
            ou: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            client: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            signIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('SHA-2'),
            orgnization: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            eca: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.step1Loading = true;
        this.step2Loading = true;
        this.step3Loading = true;
        this.azureCSRdata = false;
        this.remaingSAN = 0;
        this.isctChecked = true;
        this.isdomainSelected = false;
    }
    ngOnInit() {
        this.getinventory();
    }
    //step1
    //#Step1  select tabs display inventories if 0 disable it
    onTabSelect(e) {
        this.selectedname = this.items[e.index].value;
        this.selectedTitle = e.title;
        this.tabindex = e.index;
        let result = this.inventories.filter(obj => obj.productType === this.selectedname);
        var remaingcount = result[0].remainingCount;
        this.ibutton = false;
        if (!remaingcount) {
            this.ibutton = true;
        }
        if (this.isdomainSelected) {
            alert('test');
            this.certificateTypeUnits();
        }
        this.showEcc = (this.selectedTitle == "Standard OV SSL") ? false : true;
    }
    getinventory() {
        this.esc.getInventry().subscribe((response) => {
            // const objs =response;
            const objs = JSON.parse(response);
            // console.log(objs)
            const obj = objs.inventories;
            this.inventories = obj.filter(i => this.items.some(o => i.productType === o.value));
            this.sanInventoriesOne = obj.filter(i => i.productType === 'EV_SAN');
            this.sanInventoriesTwo = obj.filter(i => i.productType === 'UC_SAN');
            //console.log(this.inventories)
            this.step1Loading = false;
            this.ibutton = this.inventories[2].remainingCount === 0 ? true : false;
            //console.log(this.ibutton)
            // const checkInventories = this.inventories.filter(i=>i.remainingCount === 0);
            //var remaingcount=this.inventories.some(checkInventories);
            this.getOrgdata();
        });
    }
    //#step2
    //doaminmangement grid selection
    dmselectionChange(e) {
        if (e.selectedRows.length > 0) {
            // this.domainsChecked=true;
            //this.selectedItem = e.selectedRows;
            if (this.certificateForm.value.orgnization !== e.selectedRows[0].dataItem.clientId) {
                this.opened = true;
                this.errormessage = "The domian is not in an approved domain  for " + this.optionsOrg;
                return;
            }
            this.addDomain = e.selectedRows[0].dataItem.domainName;
        }
    }
    dmIncrtselectionChange(e) {
        if (e.selectedRows.length > 0) {
            this.selectedItem = e.selectedRows;
            this.selectedItem[0].dataItem["rmvDomain"] = true;
            //console.log(this.selectedItem)
        }
        if (e.deselectedRows.length > 0) {
            this.selectedItem[0].dataItem["rmvDomain"] = false;
        }
    }
    //doaminmangement grid selection
    addDomains() {
        debugger;
        let data = this.addDomain.split(',');
        this.domains.forEach(obj2 => {
            for (let i = 0; i < data.length; i++) {
                debugger;
                let filterdata = this.array3.filter(val => val.dmName.includes(data[i]));
                if (filterdata.length == 0) {
                    let exists = data[i].includes(obj2.domainName);
                    if (exists) {
                        debugger;
                        this.array3.push({ "dmName": data[i], "domainSimble": 0, "units": 0, "Include": true });
                        //this.array3[0]["domaintitle"]="Primary Domain";
                        this.array3[0]["domaintitle"] = true;
                        //console.log(this.array3)
                    }
                }
            }
        });
        //console.log(this.array3)
        this.griddata = this.array3;
        this.isdomainSelected = true;
        this.certificateTypeUnits();
    }
    certificateTypeUnits() {
        debugger;
        if (this.array3.length > 0) {
            switch (this.tabindex) {
                case 0:
                    this.standType();
                    break;
                case 1:
                    this.AdvantageType();
                    break;
                case 2:
                    this.ov();
                    break;
                case 3:
                    this.Evtype();
                    break;
                case 4:
                    this.wildCardtType();
                    break;
            }
        }
    }
    ov() {
        // if (this.array3.length == 1) {
        //   const basedm = "www." + this.array3[0].dmName;
        //   this.array3.push({ "dmName": basedm, "domainSimble": 0, "units": 0, "Include": true });
        // }
        // alert(this.sanInventoriesOne[0].remainingCount)
        if (this.isdomainSelected) {
            this.array3.forEach(e => {
                e.domainSimble = 0,
                    e.Include = true,
                    e.units = 0;
            });
        }
        let count = this.array3.filter(x => x.dmName.startsWith('www.')).length;
        if (this.array3.length == 1) {
            debugger;
            if (count > 0) {
                const basedm = this.array3[0].dmName.split('www.').join("");
                this.array3.push({ "dmName": basedm, "domainSimble": 0, "units": 0, "Include": true });
            }
            else {
                const basedm = "www." + this.array3[0].dmName;
                this.array3.push({ "dmName": basedm, "domainSimble": 0, "units": 0, "Include": true });
            }
        }
        if (this.isdomainSelected) {
            this.array3.forEach(e => {
                e.domainSimble = 0,
                    e.Include = true,
                    e.units = 0;
            });
        }
        for (let i = 2; i < this.array3.length; i++) {
            const data = this.array3[i];
            if (count == 2) {
                data.domainSimble = 0;
                data['units'] = 0;
                data['Include'] = true;
            }
            else {
                data.domainSimble = 0;
                data['units'] = 1;
                data['Include'] = false;
            }
            if (data.dmName.startsWith('www')) {
                data['units'] = 10;
            }
        }
        //total sancount based on units
        // this.remaingSAN = this.array3.reduce((total, obj) => obj.units + total, 0)
        if (this.sanInventoriesTwo[0].remainingCount != 0) {
            for (let i = 5; i < this.array3.length; i++) {
                const data = this.array3[i];
                data.domainSimble = 0;
                data.units = 1;
                //  this.remaingSAN = (i - 3);
                // let count = this.sanInventoriesOne[0].remainingCount;
                // this.remaingSAN = count === this.remaingSAN ? this.remaingSAN : this.remaingSAN++
                // if (this.remaingSAN > count) {
                //   data['color'] = 0;
                //   data.domainSimble = 1;
                //   data['units'] = 0;
                //   data['Include'] = false;
                //   this.remaingSAN = count;
                // }
            }
        }
        else {
            for (let i = 5; i < this.array3.length; i++) {
                const data = this.array3[i];
                data.domainSimble = 1;
                data.units = 0;
                data.Include = false;
            }
        }
        //total table units column logic
        this.remaingSAN = this.array3.reduce((total, obj) => obj.units + total, 0);
    }
    standType() {
        debugger;
        if (this.isdomainSelected) {
            this.array3.forEach(e => {
                e.domainSimble = 0,
                    e.Include = true,
                    e.units = 0;
            });
        }
        let count = this.array3.filter(x => x.dmName.startsWith('www.')).length;
        if (this.array3.length == 1) {
            debugger;
            if (count > 0) {
                const basedm = this.array3[0].dmName.split('www.').join("");
                this.array3.push({ "dmName": basedm, "domainSimble": 0, "units": 0, "Include": true });
            }
            else {
                const basedm = "www." + this.array3[0].dmName;
                this.array3.push({ "dmName": basedm, "domainSimble": 0, "units": 0, "Include": true });
            }
        }
        if (this.isdomainSelected) {
            this.array3.forEach(e => {
                e.domainSimble = 0,
                    e.Include = true,
                    e.units = 0;
            });
        }
        for (let i = 2; i < this.array3.length; i++) {
            const data = this.array3[i];
            if (count == 2) {
                data.domainSimble = 0;
                data['units'] = 0;
                data['Include'] = true;
            }
            else {
                data.domainSimble = 0;
                data['units'] = 1;
                data['Include'] = false;
            }
            if (data.dmName.startsWith('www')) {
                data['units'] = 10;
            }
        }
        //total sancount based on units
        // this.remaingSAN = this.array3.reduce((total, obj) => obj.units + total, 0)
    }
    AdvantageType() {
        if (this.isdomainSelected) {
            this.array3.forEach(e => {
                e.domainSimble = 0,
                    e.Include = true,
                    e.units = 0;
            });
        }
        let count = this.array3.filter(x => x.dmName.startsWith('www.')).length;
        if (this.array3.length == 1) {
            debugger;
            if (count > 0) {
                const basedm = this.array3[0].dmName.split('www.').join("");
                this.array3.push({ "dmName": basedm, "domainSimble": 0, "units": 0, "Include": true });
            }
            else {
                const basedm = "www." + this.array3[0].dmName;
                this.array3.push({ "dmName": basedm, "domainSimble": 0, "units": 0, "Include": true });
            }
        }
        if (this.isdomainSelected) {
            this.array3.forEach(e => {
                e.domainSimble = 0,
                    e.Include = true,
                    e.units = 0;
            });
        }
        for (let i = 2; i < this.array3.length; i++) {
            const data = this.array3[i];
            if (count == 2) {
                data.domainSimble = 0;
                data['units'] = 0;
                data['Include'] = true;
            }
            else {
                data.domainSimble = 0;
                data['units'] = 1;
                data['Include'] = false;
            }
            if (data.dmName.startsWith('www')) {
                data['units'] = 10;
            }
        }
        //total sancount based on units
        // this.remaingSAN = this.array3.reduce((total, obj) => obj.units + total, 0)
    }
    wildCardtType() {
        if (this.isdomainSelected) {
            this.array3.forEach(e => {
                e.domainSimble = 0,
                    e.Include = true,
                    e.units = 0;
            });
        }
        let count = this.array3.filter(x => x.dmName.startsWith('*')).length;
        if (this.array3.length == 1) {
            debugger;
            if (count > 0) {
                const basedm = this.array3[0].dmName.split('*.').join("");
                this.array3.push({ "dmName": basedm, "domainSimble": 0, "units": 0, "Include": true });
            }
            else {
                const basedm = "*." + this.array3[0].dmName;
                this.array3.push({ "dmName": basedm, "domainSimble": 0, "units": 0, "Include": true });
            }
        }
        if (this.isdomainSelected) {
            this.array3.forEach(e => {
                e.domainSimble = 0,
                    e.Include = true,
                    e.units = 0;
            });
        }
        for (let i = 2; i < this.array3.length; i++) {
            const data = this.array3[i];
            if (count == 2) {
                data.domainSimble = 0;
                data['units'] = 0;
                data['Include'] = true;
            }
            else {
                data.domainSimble = 0;
                data['units'] = 1;
                data['Include'] = false;
            }
            if (data.dmName.startsWith('*')) {
                data['units'] = 10;
            }
            //old code 
            // for (let i = 2; i < this.array3.length; i++) {
            //   const data = this.array3[i];
            //   data.domainSimble = 0;
            //   data['units'] = 1;
            //   data['Include'] = true;
            //   this.remaingSAN = (i - 1);
            //   let count = this.sanInventoriesOne[0].remainingCount;
            //   this.remaingSAN = count === this.remaingSAN ? this.remaingSAN : this.remaingSAN++
            //   if (this.remaingSAN > count) {
            //     data['color'] = 0;
            //     data.domainSimble = 1;
            //     data['units'] = 0;
            //     data['Include'] = false;
            //     this.remaingSAN = count;
            //   }
        }
        //total sancount based on units
        this.remaingSAN = this.array3.reduce((total, obj) => obj.units + total, 0);
    }
    Evtype() {
        if (this.isdomainSelected) {
            this.array3.forEach(e => {
                e.domainSimble = 0,
                    e.Include = true,
                    e.units = 0;
            });
        }
        let count = this.array3.filter(x => x.dmName.startsWith('www.')).length;
        if (this.array3.length == 1) {
            debugger;
            if (count > 0) {
                const basedm = this.array3[0].dmName.split('www.').join("");
                this.array3.push({ "dmName": basedm, "domainSimble": 0, "units": 0, "Include": true });
            }
            else {
                const basedm = "www." + this.array3[0].dmName;
                this.array3.push({ "dmName": basedm, "domainSimble": 0, "units": 0, "Include": true });
            }
        }
        if (this.isdomainSelected) {
            this.array3.forEach(e => {
                e.domainSimble = 0,
                    e.Include = true,
                    e.units = 0;
            });
        }
        for (let i = 2; i < this.array3.length; i++) {
            const data = this.array3[i];
            if (count == 2) {
                data.domainSimble = 0;
                data['units'] = 0;
                data['Include'] = true;
            }
            else {
                data.domainSimble = 0;
                data['units'] = 1;
                data['Include'] = false;
            }
            if (data.dmName.startsWith('www')) {
                data['units'] = 10;
            }
        }
        //total sancount based on units
        //this.remaingSAN = this.array3.reduce((total, obj) => obj.units + total, 0)
        if (this.sanInventoriesOne[0].remainingCount != 0) {
            for (let i = 3; i < this.array3.length; i++) {
                const data = this.array3[i];
                data.domainSimble = 0;
                data['units'] = 1;
                data['Include'] = true;
            }
            // this.remaingSAN = (i - 3);
            // let count = this.sanInventoriesOne[0].remainingCount;
            // this.remaingSAN = count === this.remaingSAN ? this.remaingSAN : this.remaingSAN++
            // if (this.remaingSAN > count) {
            //   data['color'] = 0;
            //   data.domainSimble = 1;
            //   data['units'] = 0;
            //   data['Include'] = false;
            //   this.remaingSAN = count;
            // }
        }
        else {
            for (let i = 3; i < this.array3.length; i++) {
                const data = this.array3[i];
                data.domainSimble = 1;
                data['units'] = 0;
                data['Include'] = false;
            }
        }
        this.remaingSAN = this.array3.reduce((total, obj) => obj.units + total, 0);
    }
    addPrimaryDomains() {
        this.selectedItem[0].dataItem["domaintitle"] = true;
        this.array3.forEach(element => {
            if (element.domaintitle) {
                element.domaintitle = false;
            }
        });
        this.selectedItem[0].dataItem["domaintitle"] = true;
        //console.log(this.griddata)
    }
    removeDomains() {
        for (let i = this.griddata.length - 1; i >= 0; i--) {
            let element = this.griddata[i];
            if (this.griddata[i].rmvDomain) {
                this.griddata.splice(i, 1);
            }
        }
    }
    toggle(dataItem, field) {
        dataItem[field] = !dataItem[field];
    }
    selectionChange(e) {
        //console.log("Data item: ", JSON.stringify(e.selectedRows[0]));
        //console.log("Data item: ", (e.selectedRows[0]));
        this.domainVerify = e.selectedRows[0];
    }
    //hold for now
    resubmitDomain() {
        var domainName = this.domainVerify.dataItem.domainName;
        var id = this.domainVerify.dataItem.clientId;
        var domainObj = {
            "verificationMethod": "DNS",
        };
        this.esc.reverifyDomain(domainObj, domainName, id).subscribe(res => {
            const obj = JSON.parse(res);
            //console.log(obj);
            if (obj.trackingId) {
                this.loading = false;
                this.router.navigate(['/success']);
            }
            switch (obj.status) {
                case 400:
                    this.loading = false;
                    alert("Something  Wrong, " + obj.errors[0].message);
                    return false;
                    break;
                case 200:
                    this.loading = false;
                    this.router.navigate(['/success']);
                    break;
                case 500:
                    this.loading = false;
                    alert("Azure Internal Sever Error");
                    return false;
                    break;
                case (obj.trackingId):
                    this.loading = false;
                    this.router.navigate(['/success']);
            }
        });
    }
    //hold for now
    onChange(event, index) {
        this.domain = index;
        this.isChecked = !this.isChecked;
        this.isCheckedName = index;
    }
    //#endregion
    getOrgdata() {
        debugger;
        if (this.esc.hasorgData()) {
            const data = this.esc.getorgData();
            //    console.log('without api')
            this.getorg(data);
        }
        else {
            // this.stepsLoading =! this.stepsLoading
            this.esc.getOrganization().subscribe((response) => {
                //const obj =response;
                const obj = JSON.parse(response);
                this.esc.setorgData(obj);
                this.getorg(obj);
            });
        }
    }
    getorg(obj) {
        this.listItemsOrg = obj.organizations.filter(o1 => o1.verificationStatus === 'APPROVED');
        this.datalistItemsOrg = this.listItemsOrg;
        //  this.listItemsOrg = response.organizations;
        //console.log(this.listItemsOrg);
        this.getorgUnit();
    }
    getorgUnit() {
        this.step2Loading = true;
        this.esc.getOrganizationUnit().subscribe((response) => {
            // const obj =response;
            const obj = JSON.parse(response);
            this.oulistItems = obj.organizationalUnits.filter(i => i.verificationStatus === "APPROVED");
            //console.log(this.oulistItems);
            this.oulistItems = this.oulistItems.map((org, i) => ({ name: org.name, value: i, clientId: org.clientId }));
            this.dataoulistItems = this.oulistItems;
            //console.log(this.oulistItems);
            this.getclients();
        });
    }
    getclients() {
        this.esc.getClients().subscribe((response) => {
            //const obj =response;
            const obj = JSON.parse(response);
            this.clientsList = obj.clients;
            this.clientsList = this.clientsList.filter(i => i.verificationStatus === "APPROVED");
            //  this.clientsList = response.clients.map((org, i) => ({text:org.clientName, value:i}));
            //this.stepsLoading =! this.stepsLoading
            this.getdomains();
            //this.loading=true;
            //if client id is difference need to map value object imp for dropdownlist
            //this.clientsList = response.clients.map((x,i)=>({value:i}));
        });
    }
    //validation: only status not cancelled means those are valid domains
    getdomains() {
        this.esc.getdomain().subscribe((response) => {
            //const obj =response;
            const obj = JSON.parse(response);
            // this.domains = obj.domains.filter(o1 =>  o1.verificationStatus != 'CANCELLED');
            this.domains = obj === null || obj === void 0 ? void 0 : obj.domains;
            this.gridView = this.domains;
            this.step2Loading = false;
            this.getfields();
        });
    }
    //step3  additional info
    //later use app selector
    getfields() {
        // this.step3Loading = true;
        this.esc.getcustomFields().subscribe((data) => {
            // const response= data;
            console.log('working fields');
            const response = JSON.parse(data);
            this.auditLogs = [response];
            const auidLogs = {};
            this.auditLogs = Object.values(response);
            //console.log(  this.auditLogs);
            const formDataObjs = {};
            this.auditLogs = this.auditLogs.filter(obj => obj.enabled === true);
            function filter(response, query) {
                return Object.values(Object.keys(response)
                    .filter(key => new RegExp('^' + query, 'g').test(key))
                    .map((key) => response[key]));
            }
            this.datearray = filter(response, 'date');
            // this.datearray = this.datearray.filter(obj => obj.enabled === true);
            this.textarray = filter(response, 'text');
            //   this.textarray = this.textarray.filter(obj => obj.enabled === true);
            this.dropdownarray = filter(response, 'dropdown');
            //  this.dropdownarray = this.dropdownarray.filter(obj => obj.enabled === true);
            //console.log(filter(response, 'date'));
            //console.log(filter(response, 'text'));
            //console.log(filter(response, 'dropdown'));
            this.emailarray = filter(response, 'email');
            //  this.emailarray = this.emailarray.filter(obj => obj.enabled === true);
            this.numberarray = filter(response, 'number');
            //  this.numberarray = this.numberarray.filter(obj => obj.enabled === true);
            //console.log(this.emailarray);
            //console.log(this.numberarray);
            //check one line map below code
            for (let i = 0; i < this.datearray.length; i++) {
                this.datearray[i]["field"] = "date" + [i + 1];
            }
            this.datearray = this.datearray.filter(obj => obj.enabled === true);
            //console.log(this.datearray)
            //dropdown
            for (let i = 0; i < this.dropdownarray.length; i++) {
                this.dropdownarray[i]["field"] = "dropdown" + [i + 1];
                this.dropdownarray[i]["type"] = "dropdown";
                //to make , separated option value to an array for dynamiclly
                this.dropdownarray[i]["optionsplit"] = this.dropdownarray[i].options.split(',');
            }
            this.dropdownarray = this.dropdownarray.filter(obj => obj.enabled === true);
            //text
            for (let i = 0; i < this.textarray.length; i++) {
                this.textarray[i]["field"] = "text" + [i + 1];
                this.textarray[i]["type"] = "text";
            }
            this.textarray = this.textarray.filter(obj => obj.enabled === true);
            //date
            for (let i = 0; i < this.datearray.length; i++) {
                this.datearray[i]["field"] = "date" + [i + 1];
                this.datearray[i]["type"] = "date";
            }
            this.datearray = this.datearray.filter(obj => obj.enabled === true);
            //console.log(this.datearray);
            //date
            //number
            for (let i = 0; i < this.numberarray.length; i++) {
                this.numberarray[i]["field"] = "number" + [i + 1];
                this.numberarray[i]["type"] = "number";
            }
            this.numberarray = this.numberarray.filter(obj => obj.enabled === true);
            //console.log(this.numberarray);
            //number
            //email
            for (let i = 0; i < this.emailarray.length; i++) {
                this.emailarray[i]["field"] = "email" + [i + 1];
                this.emailarray[i]["type"] = "email";
            }
            this.emailarray = this.emailarray.filter(obj => obj.enabled === true);
            //console.log(this.emailarray);
            //email
            const formDataObj = {};
            this.textarray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            this.dropdownarray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            this.datearray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            this.numberarray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            this.emailarray.forEach(prop => {
                formDataObj[prop.field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.mapValidator(prop.mandatory));
                this.personProps.push(prop);
            });
            //console.log(this.personProps)
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](formDataObj);
        });
    }
    mapValidator(validators) {
        if (validators != 'NOT_MANDATORY') {
            this.step3Loading = false;
            return _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required;
        }
    }
    //works only when client dropdown value selected
    valueChange(value) {
        this.certificateForm.controls['ou'].setValue(null);
        this.certificateForm.controls['orgnization'].setValue(null);
        this.datalistItemsOrg = this.listItemsOrg.filter(obj => obj.clientId === value);
        this.dataoulistItems = this.oulistItems.filter(obj => obj.clientId === value);
    }
    //dropdown selection
    selectionChangesOrg(value) {
        this.array3 = [];
        this.griddata = [];
        this.optionsOrg = value.name;
        // this.orgId= value.clientId;
        this.certificateForm.controls['ou'].setValue(null);
        this.dataoulistItems = this.oulistItems.filter(obj => obj.clientId === value.clientId);
    }
    selectionChangeskey(v) {
        this.optionskey = v.value;
        //console.log(this.optionskey);
    }
    selectionChangeseca(v) {
        this.optionseca = v.value;
        if (v.value == 1) {
            this.csrazureprop = {
                crv: "P-256",
                keyType: v.name,
                keysize: 256,
                kid: this.uid
            };
        }
        else {
            this.csrazureprop = {
                crv: "",
                keyType: v.name,
                keysize: 2048,
                kid: this.uid
            };
        }
        //console.log( this.csrazureprop)
    }
    selectionChangesOU(value) {
        this.optionsOu = value.name;
        //console.log( this.reviewOptions)
    }
    prev() {
        if (this.current > 0) {
            this.current -= 1;
        }
    }
    listClick(event, newValue) {
        this.selectedItem = newValue;
    }
    next() {
        this.handleClick();
    }
    handleClick() {
        //if standard ssl remove ECC value in step2.handle it in later.
        if (this.current == 0) {
            this.showEcc = (this.selectedTitle == "Standard OV SSL") ? true : false;
        }
        if (this.current < this.steps.length - 1) {
            this.current += 1;
        }
        if (this.current == 2) {
            this.certificateForm.get('expDate').clearValidators();
            this.certificateForm.get('expDate').updateValueAndValidity();
            if (this.certificateForm.invalid) {
                this.current = 1;
                this.certificateForm.markAllAsTouched();
                return false;
            }
            const filterData = this.griddata.filter(e => e.Include == true);
            var isprimary = false;
            for (let i = 0; i < filterData.length; i++) {
                const e = filterData[i];
                if ('domaintitle' in filterData[i]) {
                    isprimary = true;
                }
            }
            if (!isprimary) {
                this.current = 1;
                this.opendialog(1);
                return false;
            }
            //  const isvalid= this.griddata.some(d=>  d.Include == false)
            //   const isvalid= this.griddata.some(d=>  d.domainSimble == 1)
            //   if(isvalid){this.current = 1
            //    const domain=''
            //    this.opendialog(domain)
            //  }
        }
        if (this.current == 3) {
            if (this.customForm.invalid || this.form.invalid) {
                this.current = 2;
                this.customForm.get('crtFriendlyname').markAsTouched();
                this.form.markAllAsTouched();
                // this.customForm.markAsTouched();
                return false;
            }
            if (this.azureCSRdata == false) {
                this.createOnazure();
            }
            this.reviewObj();
        }
    }
    reviewObj() {
        var _a, _b, _c;
        if (this.form.value) {
            this.customdata = JSON.parse(JSON.stringify(this.form.value));
        }
        //console.log(  this.customdata)
        //later change dmName to value.
        this.reviewSAN = this.griddata.filter(e => e.Include == true);
        this.reviewSAN = this.reviewSAN.map(function (el) { return el.dmName; });
        //  this.reviewSAN = this.array3.map(function (el) { return el.dmName; });
        // this.reviewSAN = finalSan.map(function (el) { return el.dmName; });
        const ouList = [];
        this.optionsOu.length == 0 ? ouList : ouList.push(this.optionsOu);
        this.reviewOptions = {
            "subjectAltName": this.reviewSAN,
            "signingAlg": 'SHA-2',
            "eku": (_a = this.listItemskey[this.optionskey]) === null || _a === void 0 ? void 0 : _a.text,
            "ctLog": this.isctChecked,
            "certType": this.selectedname,
            "org": this.optionsOrg,
            "ou": ouList,
            //ou should be array
            "keyType": (_b = this.listItemseca[this.optionseca]) === null || _b === void 0 ? void 0 : _b.text,
            "keyname": (_c = this.listItemseca[this.optionseca]) === null || _c === void 0 ? void 0 : _c.name,
            "certExpiryDate": this.datePipe.transform(this.certificateForm.value.expDate, 'yyyy-MM-dd'),
            "tracking": {
                "customFields": this.customdata,
            },
        };
    }
    submit() {
        var _a;
        this.loading = true;
        var csrObj = {
            "csr": this.azurecsr,
            "subjectAltName": this.reviewOptions.subjectAltName,
            "signingAlg": "SHA-2",
            "eku": (_a = this.listItemskey[this.optionskey]) === null || _a === void 0 ? void 0 : _a.name,
            "ctLog": this.isctChecked,
            "ou": this.reviewOptions.ou,
            "org": this.optionsOrg,
            "certExpiryDate": this.reviewOptions.certExpiryDate,
            "certType": this.reviewOptions.certType,
            "tracking": {
                "customFields": this.customdata,
                "requesterName": this.customForm.value.crtFriendlyname,
            }
        };
        localStorage.setItem("productype", this.selectedTitle);
        this.esc.usercrt(csrObj).subscribe((res) => {
            const obj = JSON.parse(res);
            //console.log(obj)
            if (obj.trackingId) {
                var mergeChaincrt = obj === null || obj === void 0 ? void 0 : obj.endEntityCert;
                mergeChaincrt = mergeChaincrt.replace("-----BEGIN CERTIFICATE-----", '');
                mergeChaincrt = mergeChaincrt.replace("-----END CERTIFICATE-----", '');
                //console.log(mergeChaincrt)
                this.mergeOnAzure(mergeChaincrt);
                this.loading = false;
                this.router.navigate(['/success']);
            }
            switch (obj.status) {
                case 400:
                    this.loading = false;
                    this.errormessage = "Something  Wrong, " + obj.errors[0].message;
                    this.opened = true;
                    return false;
                case 401:
                    this.loading = false;
                    this.errormessage = obj.errors[0].message;
                    this.opened = true;
                    return false;
                case 200:
                    this.loading = false;
                    this.router.navigate(['/success']);
                case 500:
                    this.loading = false;
                    this.errormessage = "Azure Internal Sever Error ";
                    this.opened = true;
                    return false;
                case (obj.trackingId):
                    this.loading = false;
                    this.router.navigate(['/success']);
            }
        }, err => {
            this.catcherror(err);
        });
        // this.sumbitted = true;
        // if (!this.form.valid) {
        //   this.form.markAllAsTouched();
        // this.stepper.validateSteps();
        // }
        //console.log('Submitted data', this.form.value);
    }
    close(status) {
        //console.log(`Dialog result: ${status}`);
        this.opened = false;
    }
    catcherror(err) {
        this.loading = false;
        switch (err.status) {
            case 0:
                this.errormessage = "Azure Internal server error";
                this.opened = true;
                return false;
            case 500:
                this.errormessage = "Azure Internal server error";
                this.opened = true;
                return false;
            case 400:
                this.errormessage = "Certificate has Invalid value";
                this.opened = true;
                return false;
        }
    }
    catchazureError(err) {
        this.loading = false;
        this.errormessage = err;
        this.opened = true;
        return false;
    }
    // count(selectedname:string){
    //   this.selectedname = selectedname
    // }
    gotoStep1() {
        this.current = 0;
    }
    gotoStep2() {
        this.current = 1;
    }
    gotoStep3() {
        this.current = 2;
    }
    mergeOnAzure(csrobjazure) {
        var mergecsrobjazure = {
            "x5c": [csrobjazure]
        };
        this.esc.azureMergeCrt(this.customForm.value.crtFriendlyname, mergecsrobjazure)
            .subscribe(res => {
            //console.log(res);
            //this.router.navigate(['/success']);
            let crtdata = JSON.parse(res.Content);
            //console.log(crtdata);
            if (crtdata.error) {
                this.catchazureError(crtdata.error.message);
            }
        }, err => {
            this.catchazureError(err);
        });
    }
    //endEntityCert is servercertificate
    rowCallback(context) {
        const isEven = context.index % 2 == 0;
        return {
            even: isEven,
            odd: !isEven
        };
    }
    opendialog(domain) {
        debugger;
        if (domain.domainSimble == 0) {
            return false;
        }
        this.opened = true;
        if (domain == 1) {
            this.errormessage = "Please Select Primary Domain";
            return;
        }
        this.errormessage = "Something Wrong, The SAN component" + "  " + domain.dmName + " " + "validation failed. Adding the SAN component" + "  " + domain.dmName + "  " + " would exceed maximum domains for this certificate type. The SAN cannot be added.";
    }
    createOnazure() {
        //azurecsr
        this.loading = true;
        const cn = this.array3.filter(o1 => o1.domaintitle === true);
        var payload = {
            "policy": {
                "key_props": {
                    "exportable": true,
                    "kty": this.csrazureprop.keyType,
                    "key_size": this.csrazureprop.keysize,
                    "reuse_key": false
                },
                "x509_props": {
                    "subject": "CN=" + cn[0].dmName
                },
                "issuerName": "Unknown"
            }
        };
        if (this.csrazureprop.crv != "") {
            payload.policy.key_props["crv"] = this.csrazureprop.crv;
        }
        this.esc.azurecrt(this.customForm.value.crtFriendlyname, payload).subscribe(res => {
            let data = JSON.parse(res.toString());
            //console.log(data);
            if (data === null || data === void 0 ? void 0 : data.error) {
                this.catchazureError(data === null || data === void 0 ? void 0 : data.error.message);
                this.loading = false;
                return false;
            }
            else {
                this.azurecsr = data.csr;
                this.azureCSRdata = true;
                //console.log(this.azurecsr)
                this.loading = false;
                return false;
            }
        });
    }
}
SslTlsComponent.ɵfac = function SslTlsComponent_Factory(t) { return new (t || SslTlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entrust_service__WEBPACK_IMPORTED_MODULE_7__["EntrustService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"])); };
SslTlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SslTlsComponent, selectors: [["app-ssl-tls"]], viewQuery: function SslTlsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_app_Inventry_details_inventory_details_inventory_component__WEBPACK_IMPORTED_MODULE_2__["DetailsInventoryComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.childref = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_custom_pipe_pipe__WEBPACK_IMPORTED_MODULE_4__["CustomPipePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])], decls: 40, vars: 16, consts: [[1, "pcoded-content"], [1, "row"], [1, "col-lg-12", "col-md-12"], [1, "card"], [1, "col-md-12"], ["id", "wizardc"], ["id", "design-wizard", "action", "ssl-tls.html?name=&name=&name=&name=#", "role", "application", 1, "wizard-form", "wizard", "clearfix"], [3, "steps", "stepType", "currentStep", "currentStepChange"], [1, "steps", "clearfix"], [1, "content", "clearfix"], ["id", "design-wizard-p-0", "role", "tabpanel", "aria-labelledby", "design-wizard-h-0", "class", "body current", "aria-hidden", "false", "style", "left: 0px;     border: 1px solid #003594;", 4, "ngIf"], ["id", "design-wizard-p-1", "role", "tabpanel", "aria-labelledby", "design-wizard-h-1", "class", "body", 4, "ngIf"], ["id", "design-wizard-p-2", "role", "tabpanel", "aria-labelledby", "design-wizard-h-2", "class", "body", 4, "ngIf"], ["id", "design-wizard-p-3", "role", "tabpanel", "aria-labelledby", "design-wizard-h-3", "class", "body", 4, "ngIf"], ["class", "k-i-loading", 4, "ngIf"], [1, "actions", "clearfix", "float-right"], ["role", "menu", "aria-label", "Pagination"], ["aria-disabled", "true", 1, "disabled"], ["class", "k-button prev", "role", "menuitem", 3, "click", 4, "ngIf"], ["aria-disabled", "false"], ["class", "k-button k-primary", "role", "menuitem", 3, "disabled", "click", 4, "ngIf"], ["class", "k-button k-primary", "role", "menuitem", 3, "click", 4, "ngIf"], ["type", "button", "id", "openModalButton", "data-toggle", "modal", "data-target", "#default-Modal1", 1, "btn", "btn-danger", "waves-effect", 3, "hidden"], ["id", "default-Modal1", "tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["content", ""], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body", "text-center"], [2, "font-size", "70px", "color", "red"], ["id", "icon", 1, "ion-ios-close-outline"], [1, "m-b-30", "f-20", "m-t-20"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", "waves-effect"], ["title", "Error", 3, "minWidth", "width", "close", 4, "ngIf"], ["id", "design-wizard-p-0", "role", "tabpanel", "aria-labelledby", "design-wizard-h-0", "aria-hidden", "false", 1, "body", "current", 2, "left", "0px", "border", "1px solid #003594"], [1, "example-wrapper"], [3, "tabPosition", "tabSelect"], [3, "title", "selected"], ["kendoTabContent", ""], [1, "k-i-loading"], [2, "padding-left", "30px"], [1, "fa", "fa-circle", 2, "font-size", "6px", "color", "#212529"], ["class", "row", 4, "ngIf"], [1, "row", "m-t-80"], [1, "col-sm-4", "text-center"], [2, "color", "#8b278c", "font-weight", "100", "font-size", "40px"], [2, "font-weight", "100", "font-size", "20px"], [1, "col-sm-12"], [1, "ent-warning-banner"], [1, "gotham-medium"], [2, "padding-bottom", "20px"], [2, "padding-left", "50px"], [1, "fa", "fa-circle", 2, "font-size", "7px", "color", "#000"], [1, "col-sm-3", "text-center"], [2, "color", "#8b278c"], ["id", "design-wizard-p-1", "role", "tabpanel", "aria-labelledby", "design-wizard-h-1", 1, "body"], ["class", "k-i-loading", "style", "margin-right: 67px; margin-top: -440px;", 4, "ngIf"], [1, "ent-info-banner"], [1, "col-sm-12", "text-right"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "btn-fixed", "m-b-5", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-default", "btn-fixed", "m-b-5", 3, "click"], [1, "row", "m-t-20"], [1, "col-sm-6"], [1, "col-sm-5"], ["type", "text", "placeholder", "Enter additional domains, separated by commas", "required", "", 1, "form-control", "p-5", 3, "ngModel", "ngModelChange"], [1, "col-sm-1", "text-right"], [1, "btn", "btn-primary", 2, "padding", "5px 14px !important", 3, "click"], [1, "crtformcontrol"], [3, "formGroup"], [1, "form-group"], ["for", "", 1, "block"], [2, "color", "#a6093d"], ["format", "MMMM d yyyy", "formControlName", "expDate", 1, "kendo-datepicker", 3, "min", "max"], ["shortDate", ""], ["formControlName", "client", 3, "data", "valuePrimitive", "textField", "valueField", "defaultItem", "valueChange"], ["formControlName", "orgnization", 3, "data", "textField", "valueField", "defaultItem", "valuePrimitive", "selectionChange"], ["class", "help-block", "style", "color:#a6093d", 4, "ngIf"], ["formControlName", "ou", 3, "data", "textField", "valueField", "defaultItem", "valuePrimitive", "selectionChange"], ["formControlName", "signIn", 3, "data"], ["formControlName", "key", 3, "data", "textField", "valueField", "defaultItem", "valuePrimitive", "selectionChange"], ["class", "form-group", 4, "ngIf"], ["type", "checkbox", "kendoCheckBox", "", 3, "ngModel", "ngModelChange"], [1, "form-group", "Certi-Main"], ["for", "", 1, "alert-info"], [1, "Certi-Main-left"], [1, "fa", "fa-info-circle"], ["class", "Certi-Main-Right ", 4, "ngIf"], ["class", "Certi-Main-Right", 4, "ngIf"], [1, "form-group", 2, "margin", "0px"], ["role", "tablist", 1, "nav", "nav-tabs", "tabs", 2, "width", "auto !important", "background", "none !important", "padding", "0px !important"], [1, "nav-item", "lineheight", 2, "line-height", "20px !important"], ["data-toggle", "tab", "href", "#Certificate", "role", "tab", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#Management", "role", "tab", 1, "nav-link"], [1, "tab-content", "tabs", "card-block", "table-bordered", "p-0"], ["id", "Certificate", "role", "tabpanel", 1, "tab-pane", "active"], [3, "data", "rowClass", "height", "selectable", "selectionChange"], ["title", "", 3, "width"], ["field", "dmName", "title", "Domain", 3, "width"], ["field", "units", "title", "Units", 3, "width", "headerStyle"], ["field", "domainSimble", "title", "Status ", 3, "width", "headerStyle"], ["kendoGridCellTemplate", ""], ["field", "Include", "title", "Action", "width", "70"], ["id", "Management", "role", "tabpanel", 1, "tab-pane"], [3, "data", "height", "selectable", "selectionChange"], ["title", "Domain", "field", "domainName", 3, "width"], ["field", "verificationStatus", "title", "Verification Status", 3, "width"], ["field", "verificationMethod", "title", "Verification Method", 3, "width"], ["field", "ovEligible", "title", "OV Eligible", 3, "width"], ["field", "evEligible", "title", "EV Eligible", 3, "width"], ["field", "evExpiry", "title", "EV Expiry", 3, "width"], ["field", "ovExpiry", "title", "OV Expiry", 3, "width"], [1, "form-group", "m-t-20"], [2, "text-decoration", "dashed !important", "font-weight", "bold"], [1, "k-i-loading", 2, "margin-right", "67px", "margin-top", "-440px"], [1, "help-block", 2, "color", "#a6093d"], ["formControlName", "eca", 3, "data", "textField", "valueField", "valuePrimitive", "defaultItem", "selectionChange"], [1, "Certi-Main-Right"], [3, "click"], ["class", "fas fa-check text-success", 4, "ngIf"], ["class", "fas fa-exclamation-triangle text-warning", 4, "ngIf"], [1, "fas", "fa-check", "text-success"], [1, "fas", "fa-exclamation-triangle", "text-warning"], ["type", "checkbox", 3, "checked", "click"], [4, "ngIf"], ["id", "design-wizard-p-2", "role", "tabpanel", "aria-labelledby", "design-wizard-h-2", 1, "body"], [1, "col-sm-12", "m-b-20"], ["id", "", "name", "name", "type", "text", "formControlName", "crtFriendlyname", "placeholder", "Azure Certificate Name", 1, "form-control"], ["id", "", "name", "name", "type", "text", "formControlName", "adEmail", "placeholder", "Enter additional emails, seperated by commas (optional)", 1, "form-control"], ["class", "col-sm-6", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], ["class", "form-group", 4, "ngSwitchCase"], ["class", "  form-group", 4, "ngSwitchCase"], ["style", "color:#a6093d;", 4, "ngIf"], ["type", "text", "kendoTextBox", "", 1, "form-control", 3, "formControlName"], ["type", "number", "kendoTextBox", "", 1, "form-control", 3, "formControlName"], ["type", "email", "kendoTextBox", "", 1, "form-control", 3, "formControlName"], ["type", "date", 1, "form-control", 3, "formControlName"], [3, "data", "formControlName"], ["id", "design-wizard-p-3", "role", "tabpanel", "aria-labelledby", "design-wizard-h-3", 1, "body"], ["for", "", 1, "block", "txt-bold"], ["href", "javascript:void(0);", 3, "click"], [1, "row", "m-t-10"], [4, "ngFor", "ngForOf"], [1, "block"], ["role", "menuitem", 1, "k-button", "prev", 3, "click"], ["role", "menuitem", 1, "k-button", "k-primary", 3, "click"], ["title", "Error", 3, "minWidth", "width", "close"], [1, "d-flex", "flex-row", "mt-1"], [1, "align-top", "mr-3"], [1, "fas", "fa-exclamation-triangle", "fa-3x", "text-warning"], [1, "align-top", "normal-label"], [1, "col-sm-12", "m-t-10", "m-b-10", 2, "text-align", "center"], ["primary", "true", 1, "k-button", "k-primary", "conf_button", 2, "padding", "5px 16px", 3, "click"]], template: function SslTlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "kendo-stepper", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentStepChange", function SslTlsComponent_Template_kendo_stepper_currentStepChange_9_listener($event) { return ctx.current = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SslTlsComponent_fieldset_12_Template, 14, 12, "fieldset", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SslTlsComponent_fieldset_13_Template, 114, 65, "fieldset", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SslTlsComponent_fieldset_14_Template, 29, 6, "fieldset", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SslTlsComponent_fieldset_15_Template, 90, 12, "fieldset", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SslTlsComponent_div_16_Template, 1, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SslTlsComponent_a_20_Template, 2, 0, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SslTlsComponent_a_22_Template, 2, 2, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SslTlsComponent_a_24_Template, 2, 0, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SslTlsComponent_kendo_dialog_39_Template, 11, 3, "kendo-dialog", 32);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 1100, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("steps", ctx.steps)("stepType", ctx.stepType)("currentStep", ctx.current);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current !== 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opened);
    } }, directives: [_progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_9__["StepperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_9__["TabStripComponent"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_9__["TabStripTabComponent"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_9__["TabContentDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_10__["LabelDirective"], _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_11__["DatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__["DropDownListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__["CheckBoxDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__["GridComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__["CheckboxColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__["ColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__["CellTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__["TextBoxDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogComponent"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogActionsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["KeyValuePipe"]], styles: ["\r\n.card{\r\n  border:none;\r\n}\r\n#internal-wizard li a {\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  display: block;\r\n  padding: 10px 15px;\r\n  background: #003798;\r\n}\r\n.list-group-item.active {\r\n  background-color: #8b278c;\r\n  border-color: #8b278c;\r\n}\r\n.list-group-item {\r\n    position: relative;\r\n    display: block;\r\n    padding: 15px;\r\n    /* margin-bottom: -1px; */\r\n    background-color: #fbe1fb;\r\n    /* border: 1px solid rgba(0,0,0,.125); */\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n}\r\n.p-5 {\r\n  padding: 5px !important;\r\n}\r\na.btn.btn-primary {\r\n\r\n  background-color: #448aff;\r\n  border-color: #448aff;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n.grid-wrapper {\r\n  position: relative;\r\n}\r\n.k-i-loading {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    font-size: 64px;\r\n\r\n  border-color: currentColor;\r\n  border-top-color: transparent;\r\n  border-bottom-color: transparent;\r\n  background-color: transparent;\r\n  z-index: 1000;\r\n    top: -50px;\r\n  }\r\n.kendo-datepicker{\r\n    display: flex;\r\n   justify-content: center;\r\n   width: 612px;\r\n }\r\nspan.k-link.ng-tns-c47-0 {\r\n  font-size: 19px;\r\n}\r\n/* .k-tabstrip-items {\r\n  border-color: #fff;\r\n  color: #fff;\r\n} */\r\n.alert-info {\r\n  font-size: 13px;\r\n  color: #000;\r\n  background-color: #eff2fc;\r\n  border: 1px solid #00359b;\r\n  padding: 10px 20px;\r\n  }\r\n.form-group-bg {\r\n  background: #eff2fc;\r\n  padding: 15px;\r\n  margin-bottom: 20px;\r\n  border: 1px solid #00359b;\r\n  }\r\n.table-responsive table td i {\r\n    background: none;\r\n}\r\n.nav-tabs .nav-item {\r\n  background-color: #f3f3f5;\r\n  border: 1px solid #e1e1e1;\r\n  color: #456BD1;\r\n  border-radius: 0px ;\r\n  }\r\n.nav-tabs .nav-item a{\r\n  color: #456BD1;\r\n  }\r\n.nav-tabs .nav-link:hover {\r\n  color: #33509C;\r\n  }\r\n.nav-tabs .nav-link.active {\r\n  border-color: #f3f3f5 !important;\r\n  background-color: #f3f3f5;\r\n  color: #456BD1;\r\n  font-weight: bold;\r\n  border-radius: 0px ;\r\n  }\r\n/* 03-15-2021 */\r\n.btn-default {\r\n    background-color: #fff;\r\n    border: 1px solid #456BD1;\r\n    color: #456BD1;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 14px !important;\r\n    line-height: 1.8 !important;\r\n    margin-left:5px;\r\n    text-transform:inherit;\r\n}\r\n.ent-info-banner {\r\n  background-color: #EFF2FB;\r\n  border: 1px solid #003594;\r\n  border-radius: 0px;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n  padding: 10px 15px 5px 50px;\r\n  position: relative;\r\n  width: 100%;\r\n  }\r\n.ent-info-banner h4 {\r\n  display: inline-block;\r\n  font-size: 24px;\r\n  color: #3d3a3c;\r\n  }\r\n.ent-info-banner::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Font Awesome 5 Pro';\r\n  content: \"\\f05a\";\r\n  font-weight: 900;\r\n  color: #003594;\r\n  font-size: 2em;\r\n  position: absolute;\r\n  top: 47%;\r\n  left: 10px;\r\n  transform: translate(0, -50%);\r\n  }\r\n.ent-info-reissue {\r\n  background-color: #EFF2FB;\r\n  border: 1px solid #003594;\r\n  border-radius: 0px;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n  padding: 15px 15px 15px 50px;\r\n  position: relative;\r\n  width: 100%;\r\n  }\r\n.ent-info-reissue h4 {\r\n  display: inline-block;\r\n  font-size: 24px;\r\n  color: #3d3a3c;\r\n  }\r\n.ent-info-reissue::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Font Awesome 5 Pro';\r\n  content: \"\\f05a\";\r\n  font-weight: 900;\r\n  color: #003594;\r\n  font-size: 2em;\r\n  position: absolute;\r\n  top: 26%;\r\n  left: 10px;\r\n  transform: translate(0, -50%);\r\n  }\r\n.ent-info-small {\r\n  background-color: #EFF2FB;\r\n  border: 1px solid #003594;\r\n  border-radius: 0px;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n  padding: 15px 15px 15px 50px;\r\n  position: relative;\r\n  width: 100%;\r\n  }\r\n.ent-info-small ::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Font Awesome 5 Pro';\r\n  content: \"\\f05a\";\r\n  font-weight: 900;\r\n  color: #003594;\r\n  font-size: 24px;\r\n  position: absolute;\r\n  top: 35%;\r\n  left: 15px;\r\n  transform: translate(0, -50%);\r\n  }\r\n.ent-warning-banner {\r\n  background-color: #FFFBE6;\r\n  border: 1px solid #F2A900;\r\n  border-radius: 0px;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  margin-top: 0px;\r\n  padding: 15px 15px 15px 50px;\r\n  position: relative;\r\n  width: 100%;\r\n  }\r\n.ent-warning-banner::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: 'Font Awesome 5 Pro';\r\n  content: \"\\f071\";\r\n  font-weight: 900;\r\n  color: #F2A900;\r\n  font-size: 2em;\r\n  position: absolute;\r\n  top: 45%;\r\n  left: 10px;\r\n  transform: translate(0, -50%);\r\n  }\r\n.btn-default:hover {\r\n    background-color: #dae2f6;\r\n    border: 1px solid #456BD1;\r\n    color: #456BD1;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 14px !important;\r\n    line-height: 1.8 !important;\r\n    margin-left: 5px;\r\n}\r\n.btn-default:focus {\r\nbackground-color: #fff;\r\nborder: 1px solid #456BD1;\r\ncolor: #456BD1;\r\ncursor: pointer;\r\ntext-align: center;\r\nfont-weight: bold;\r\nfont-size: 14px !important;\r\nline-height: 1.8 !important;\r\nmargin-left: 5px;\r\n}\r\n.btn-default:active {\r\n    background-color: #b8c7ee;\r\n    border: 1px solid #456BD1;\r\n    color: #456BD1;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 14px !important;\r\n    line-height: 1.8 !important;\r\n    margin-left: 5px;\r\n}\r\n.color{\r\n  background-color: red;\r\n}\r\na.disabled {\r\n  pointer-events: none;\r\n  cursor: not-allowed;\r\n}\r\n/* option:hover {\r\n      background-color: purple;\r\n    } */\r\n.k-grid th {\r\n\r\n      font-weight: 900;\r\n  }\r\n.k-dialog-buttongroup .k-button {\r\n    width: auto !important;\r\n    max-width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ3JlYXRlL3NzbC10bHMvc3NsLXRscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBOztFQUVFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxlQUFlOztFQUVqQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsYUFBYTtJQUNYLFVBQVU7RUFDWjtBQUNBO0lBQ0UsYUFBYTtHQUNkLHVCQUF1QjtHQUN2QixZQUFZO0NBQ2Q7QUFDQTtFQUNDLGVBQWU7QUFDakI7QUFDQTs7O0dBR0c7QUFDSDtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEI7QUFDQTtFQUNBLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QjtBQUNBO0lBQ0UsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkI7QUFDQTtFQUNBLGNBQWM7RUFDZDtBQUNBO0VBQ0EsY0FBYztFQUNkO0FBQ0E7RUFDQSxnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CO0FBRUEsZUFBZTtBQUNmO0lBQ0Usc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0U7RUFDQSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYO0FBQ0E7RUFDQSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZDtBQUVBO0VBQ0EscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUVWLDZCQUE2QjtFQUM3QjtBQUNBO0VBQ0EseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWDtBQUVBO0VBQ0EscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2Q7QUFFQTtFQUNBLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFFViw2QkFBNkI7RUFDN0I7QUFFQTtFQUNBLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7QUFHQTtFQUNBLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFFViw2QkFBNkI7RUFDN0I7QUFDQTtFQUNBLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7QUFFQTtFQUNBLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFFViw2QkFBNkI7RUFDN0I7QUFDQTtJQUNFLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCLGNBQWM7QUFDZCxlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQiwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLGdCQUFnQjtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjtBQUNBOztPQUVPO0FBR0g7O01BRUUsZ0JBQWdCO0VBQ3BCO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL0NyZWF0ZS9zc2wtdGxzL3NzbC10bHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZHtcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG4jaW50ZXJuYWwtd2l6YXJkIGxpIGEge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAzNzk4O1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIyNzhjO1xyXG4gIGJvcmRlci1jb2xvcjogIzhiMjc4YztcclxufVxyXG5cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogLTFweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmUxZmI7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpOyAqL1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ucC01IHtcclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5hLmJ0bi5idG4tcHJpbWFyeSB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDhhZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDQ4YWZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZ3JpZC13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuICAuay1pLWxvYWRpbmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG5cclxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gICAgdG9wOiAtNTBweDtcclxuICB9XHJcbiAgLmtlbmRvLWRhdGVwaWNrZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgd2lkdGg6IDYxMnB4O1xyXG4gfVxyXG4gc3Bhbi5rLWxpbmsubmctdG5zLWM0Ny0wIHtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuLyogLmstdGFic3RyaXAtaXRlbXMge1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogI2ZmZjtcclxufSAqL1xyXG4uYWxlcnQtaW5mbyB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYyZmM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMzU5YjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgfVxyXG4gIC5mb3JtLWdyb3VwLWJnIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZmMmZjO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTliO1xyXG4gIH1cclxuICAudGFibGUtcmVzcG9uc2l2ZSB0YWJsZSB0ZCBpIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLm5hdi10YWJzIC5uYXYtaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmNTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gIGNvbG9yOiAjNDU2QkQxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCA7XHJcbiAgfVxyXG4gIC5uYXYtdGFicyAubmF2LWl0ZW0gYXtcclxuICBjb2xvcjogIzQ1NkJEMTtcclxuICB9XHJcbiAgLm5hdi10YWJzIC5uYXYtbGluazpob3ZlciB7XHJcbiAgY29sb3I6ICMzMzUwOUM7XHJcbiAgfVxyXG4gIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcclxuICBib3JkZXItY29sb3I6ICNmM2YzZjUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2Y1O1xyXG4gIGNvbG9yOiAjNDU2QkQxO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCA7XHJcbiAgfVxyXG5cclxuICAvKiAwMy0xNS0yMDIxICovXHJcbiAgLmJ0bi1kZWZhdWx0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDU2QkQxO1xyXG4gICAgY29sb3I6ICM0NTZCRDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuOCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06aW5oZXJpdDtcclxufVxyXG4gIC5lbnQtaW5mby1iYW5uZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkYyRkI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMzU5NDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4IDVweCA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmVudC1pbmZvLWJhbm5lciBoNCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzNkM2EzYztcclxuICB9XHJcblxyXG4gIC5lbnQtaW5mby1iYW5uZXI6OmJlZm9yZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IFBybyc7XHJcbiAgY29udGVudDogXCJcXGYwNWFcIjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiAjMDAzNTk0O1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQ3JTtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB9XHJcbiAgLmVudC1pbmZvLXJlaXNzdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkYyRkI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMzU5NDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZW50LWluZm8tcmVpc3N1ZSBoNCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzNkM2EzYztcclxuICB9XHJcblxyXG4gIC5lbnQtaW5mby1yZWlzc3VlOjpiZWZvcmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBQcm8nO1xyXG4gIGNvbnRlbnQ6IFwiXFxmMDVhXCI7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogIzAwMzU5NDtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyNiU7XHJcbiAgbGVmdDogMTBweDtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgfVxyXG5cclxuICAuZW50LWluZm8tc21hbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkYyRkI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMzU5NDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmVudC1pbmZvLXNtYWxsIDo6YmVmb3JlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgUHJvJztcclxuICBjb250ZW50OiBcIlxcZjA1YVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6ICMwMDM1OTQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDM1JTtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB9XHJcbiAgLmVudC13YXJuaW5nLWJhbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkJFNjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRjJBOTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5lbnQtd2FybmluZy1iYW5uZXI6OmJlZm9yZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IFBybyc7XHJcbiAgY29udGVudDogXCJcXGYwNzFcIjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiAjRjJBOTAwO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQ1JTtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB9XHJcbiAgLmJ0bi1kZWZhdWx0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWUyZjY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDU2QkQxO1xyXG4gICAgY29sb3I6ICM0NTZCRDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuOCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uYnRuLWRlZmF1bHQ6Zm9jdXMge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjNDU2QkQxO1xyXG5jb2xvcjogIzQ1NkJEMTtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5mb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxubGluZS1oZWlnaHQ6IDEuOCAhaW1wb3J0YW50O1xyXG5tYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5idG4tZGVmYXVsdDphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I4YzdlZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NTZCRDE7XHJcbiAgICBjb2xvcjogIzQ1NkJEMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS44ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5jb2xvcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbmEuZGlzYWJsZWQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuLyogb3B0aW9uOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG4gICAgfSAqL1xyXG5cclxuXHJcbiAgICAuay1ncmlkIHRoIHtcclxuXHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG4gIC5rLWRpYWxvZy1idXR0b25ncm91cCAuay1idXR0b24ge1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SslTlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ssl-tls',
                templateUrl: './ssl-tls.component.html',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styleUrls: ['./ssl-tls.component.css'],
                providers: [src_app_custom_pipe_pipe__WEBPACK_IMPORTED_MODULE_4__["CustomPipePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_entrust_service__WEBPACK_IMPORTED_MODULE_7__["EntrustService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content']
        }], childref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_Inventry_details_inventory_details_inventory_component__WEBPACK_IMPORTED_MODULE_2__["DetailsInventoryComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/Domain/details-domain/details-domain.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Domain/details-domain/details-domain.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetailsDomainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsDomainComponent", function() { return DetailsDomainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
/* harmony import */ var src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/entrust.service */ "./src/app/entrust.service.ts");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-label */ "./node_modules/@progress/kendo-angular-label/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/__ivy_ngcc__/dist/fesm2015/index.js");










function DetailsDomainComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Standard OV SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Standard OV SSL certificate establishes your trusted identity and eliminates browser notifications that warn visitors entering your site.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 Organization Validation (OV) SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0 Secures both www.example.com and example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "For greater trust and a green address bar, choose Multi-Domain EV SSL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Remaining Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.inventories[2] == null ? null : ctx_r0.inventories[2].remainingCount, "");
} }
function DetailsDomainComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Advantage OV SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Advantage OV SSL certificate establishes your trusted identity and eliminates browser notifications that warn visitors entering your site.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 Organization Validation (OV) SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0 Secures both www.example.com and example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Includes one additional SAN, otherexample.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "For greater trust and a green address bar, choose Multi-Domain EV SSL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Remaining Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.inventories[0] == null ? null : ctx_r1.inventories[0].remainingCount);
} }
function DetailsDomainComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Multi-Domain OV SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The Unified Communications SSL certificate establishes your trusted identity and eliminates browser notifications that warn visitors entering your site. This certificate allows you to consolidate multiple certificates by leveraging Subject Alternative Names (SANs).");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 Extended Validation (EV) SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0 Secures both www.example.com and example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Includes 3 additional SANs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Up to 250 SANs using additional SAN inventory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "For greater trust and a green address bar, choose Multi-Domain EV SSL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Remaining Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.inventories[3] == null ? null : ctx_r2.inventories[3].remainingCount);
} }
function DetailsDomainComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Multi-Domain EV SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Multi-Domain EV SSL certificate provides the highest level of identity assurance. EV SSL certificates display a green bar in the browser, which visitors look for as the ultimate sign of trust and security in eCommerce. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 Extended Validation (EV) SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0 Secures both www.example.com and example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Includes one additional SAN, otherexample.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Up to 250 SANs using additional SAN inventory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "For greater trust and a green address bar, choose Multi-Domain EV SSL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Remaining Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.inventories[1] == null ? null : ctx_r3.inventories[1].remainingCount);
} }
function DetailsDomainComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wildcard OV SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Wildcard OV SSL certificates dynamically support an unlimited number of subdomains by specifying *.example.com in the certificate. Provides flexibility and ease of use in environments that see frequent change.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 Organization Validation (OV) SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0 Unlimited subdomains");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Supports multiple wildcard SANs using additional SAN inventory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "For greater trust and a green address bar, choose Multi-Domain EV SSL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Remaining Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.inventories[4] == null ? null : ctx_r4.inventories[4].remainingCount);
} }
function DetailsDomainComponent_ng_template_46_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 67);
} }
function DetailsDomainComponent_ng_template_46_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 68);
} }
function DetailsDomainComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsDomainComponent_ng_template_46_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const dataItem_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.open(dataItem_r9.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailsDomainComponent_ng_template_46_i_1_Template, 1, 0, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailsDomainComponent_ng_template_46_i_2_Template, 1, 0, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dataItem_r9.domainSimble == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dataItem_r9.domainSimble == 1);
} }
function DetailsDomainComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsDomainComponent_ng_template_48_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const dataItem_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.toggle(dataItem_r15, "Include"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", dataItem_r15.Include);
} }
function DetailsDomainComponent_ng_template_50_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Primary Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailsDomainComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailsDomainComponent_ng_template_50_span_0_Template, 2, 0, "span", 70);
} if (rf & 2) {
    const dataItem_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dataItem_r18.domaintitle);
} }
function DetailsDomainComponent_kendo_dialog_104_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-dialog", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function DetailsDomainComponent_kendo_dialog_104_Template_kendo_dialog_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.close("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "kendo-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsDomainComponent_kendo_dialog_104_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.close("yes"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minWidth", 350)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.errormessage);
} }
const _c0 = function () { return { checkboxOnly: true, mode: "multiple" }; };
const _c1 = function () { return { "text-align": "center" }; };
const _c2 = function () { return { checkboxOnly: true, mode: "single" }; };
class DetailsDomainComponent {
    constructor(esc) {
        this.esc = esc;
        this.dialogOpened = false;
        this.isOptional = false;
        this.array3 = [];
        this.newDomains = [];
        this.items = [{
                text: 'Standard OV SSL',
                value: 'STANDARD_SSL',
                index: 0
            }, {
                text: 'Advanced OV SSL',
                value: 'ADVANTAGE_SSL',
                index: 1
            }, {
                text: 'Multi-Domain OV SSL',
                value: 'UC_SSL',
                index: 2
            }, {
                text: 'Multi-Domain EV SSL',
                value: 'EV_SSL',
                index: 3
            }, {
                text: 'Wildcard OV SSL',
                value: 'WILDCARD_SSL', index: 4
            }];
        this.tabindex = 1;
        this.remaingSAN = 0;
        this.totalNewCrtSAN = 0;
        this.totalOldCrtSAN = 0;
        this.invalidDomains = [];
        this.aggregates = [
            { field: "units", aggregate: "sum" },
        ];
    }
    ngOnInit() {
        this.getinvent();
        this.getdomains();
    }
    open(domain) {
        debugger;
        this.opened = true;
        this.opened = true;
        this.errormessage = "Something Wrong, The SAN component" + "  " + domain + " " + "validation failed. Adding the SAN component" + "  " + domain + "  " + " would exceed maximum domains for this certificate type. The SAN cannot be added.";
    }
    getinvent() {
        debugger;
        const obj = invent;
        this.inventories = obj.filter(i => this.items.some(o => i.productType === o.value));
        this.sanInventoriesOne = obj.filter(i => i.productType === 'EV_SAN');
        this.sanInventoriesTwo = obj.filter(i => i.productType === 'UC_SAN');
    }
    getdomains() {
        debugger;
        //this.esc.getdomain().subscribe((response : any)=>
        //{
        //  const obj =JSON.parse(response);
        const obj = dm;
        this.domains = obj[0].domains.filter(o1 => o1.verificationStatus != 'CANCELLED');
        this.gridView = this.domains;
        this.tabindex = 3;
        this.subjectAltName = subjectAltName;
        this.array3 = subjectAltName;
        this.griddata = this.array3;
        const basedm = "www." + this.array3[0].value;
        this.array3.splice(1, 0, { "value": basedm, "domainSimble": 0, "units": 0, "Include": true });
        for (let i = 0; i < this.griddata.length; i++) {
            const data = this.griddata[i];
            data.domainSimble = 0;
            // data['color']=0;
            data['units'] = 0;
            data['Include'] = true;
        }
        this.domainUnitsCount();
        const count = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_1__["aggregateBy"])(this.array3, this.aggregates);
        console.log(count);
        this.totalOldCrtSAN = count.units.sum;
        console.log(this.subjectAltName);
        // })
    }
    onTabSelect(e) {
        debugger;
        this.selectedname = this.items[e.index].value;
        this.selectedTitle = e.title;
        this.tabindex = e.index;
        let result = this.inventories.filter(obj => obj.productType === this.selectedname);
        var remaingcount = result[0].remainingCount;
    }
    selectionChange(e) {
        debugger;
        //console.log("Data item: ", JSON.stringify(e.selectedRows[0]));
        ///console.log("Data item: ", (e.selectedRows[0]));
        this.domainVerify = e.selectedRows[0];
    }
    dmselectionChange(e) {
        debugger;
        if (e.selectedRows.length > 0) {
            this.domainsChecked = true;
            this.selectedItem = e.selectedRows;
            this.addDomain = e.selectedRows[0].dataItem.domainName;
            //   for(let i=0; i < e.selectedRows.length; i++){
            //    this.array3.push(this.selectedItem[i].dataItem.domainName);
            // }
        }
        if (e.deselectedRows.length > 0) {
            // for(let i=0; i < e.deselectedRows.length; i++){
            //   this.array3.splice(e.deselectedRows[i].index, 1)
            //}
        }
    }
    dmIncrtselectionChange(e) {
        debugger;
        if (e.selectedRows.length > 0) {
            this.selectedItem = e.selectedRows;
            this.selectedItem[0].dataItem["rmvDomain"] = true;
            console.log(this.selectedItem);
        }
        if (e.deselectedRows.length > 0) {
            this.selectedItem[0].dataItem["rmvDomain"] = false;
            // for(let i=0; i < e.deselectedRows.length; i++){
            //   this.array2.splice(e.deselectedRows[i].index, 1)
            // }
        }
    }
    addDomains() {
        debugger;
        let data = this.addDomain.split(',');
        this.domains.forEach(obj2 => {
            for (let i = 0; i < data.length; i++) {
                let filterdata = this.array3.filter(val => val.value.includes(data[i]));
                if (filterdata.length == 0) {
                    let exists = data[i].includes(obj2.domainName);
                    if (exists) {
                        this.array3.push({ "value": data[i], "domainSimble": 0, "units": 0, "Include": true });
                        this.array3[0]["domaintitle"] = "Primary Domain";
                        this.array3[0]["domaintitle"] = true;
                        console.log(this.array3);
                    }
                    else {
                        this.invalidDomains.push(data[i]);
                        console.log(this.invalidDomains);
                    }
                }
            }
        });
        this.invalidDomains.filter((v, i) => this.invalidDomains.indexOf(v) === i);
        console.log(this.invalidDomains);
        console.log(this.array3);
        this.griddata = this.array3;
        this.selectedTitle = "Wildcard OV SSL";
        if (this.array3.length > 0) {
            this.domainUnitsCount();
        }
    }
    domainUnitsCount() {
        debugger;
        switch (this.tabindex) {
            case 0:
                this.standType();
                break;
            case 1:
                this.AdvantageType();
                break;
            case 2:
                if (this.array3.length == 1) {
                    const basedm = "www." + this.array3[0].value;
                    this.array3.push({ "value": basedm, "domainSimble": 0, "units": 0, "Include": true });
                }
                for (let i = 5; i < this.array3.length; i++) {
                    const data = this.array3[i];
                    data.domainSimble = 0;
                    data.units = 1;
                }
                break;
            case 3:
                this.Evtype();
                break;
            case 4:
                this.wildCardtType();
                break;
            default:
                break;
        }
    }
    standType() {
        const freedomain = this.array3.filter(x => x.value.startsWith('www'));
        console.log('test', freedomain);
        if (this.array3.length == 1) {
            if (freedomain.length > 0) {
                alert(this.array3[0].split('.'));
                const basedm = this.array3[0].value;
                this.array3.push({ "value": basedm, "domainSimble": 0, "units": 0, "Include": true });
            }
            else {
                const basedm = "www." + this.array3[0].value;
                this.array3.push({ "value": basedm, "domainSimble": 0, "units": 0, "Include": true });
            }
        }
        for (let i = 2; i < this.array3.length; i++) {
            const data = this.array3[i];
            data.domainSimble = 1;
            data['color'] = 0;
            data['Include'] = false;
        }
    }
    AdvantageType() {
        if (this.array3.length == 1) {
            const basedm = "www." + this.array3[0].value;
            this.array3.push({ "value": basedm, "domainSimble": 0, "units": 0, "Include": false });
        }
        for (let i = 3; i < this.array3.length; i++) {
            const data = this.array3[i];
            data.domainSimble = 1;
            data['color'] = 0;
            data['Include'] = false;
        }
    }
    wildCardtType() {
        debugger;
        let count = this.array3.filter(x => x.value.startsWith('*')).length;
        const basedm = "*." + this.array3[0].value;
        // this.array3[1].value=basedm;
        if (this.array3.length == 1) {
            const basedm = "*." + this.array3[0].value;
            this.array3.push({ "value": basedm, "domainSimble": 0, "units": 0, "Include": true });
        }
        for (let i = 2; i < this.array3.length; i++) {
            const data = this.array3[i];
            if (count == 2) {
                data.domainSimble = 0;
                data['units'] = 0;
                data['Include'] = true;
            }
            else {
                data.domainSimble = 0;
                data['units'] = 1;
                data['Include'] = true;
            }
            if (data === null || data === void 0 ? void 0 : data.value.startsWith('*')) {
                data['units'] = 10;
            }
            // this.remaingSAN=(i-1);
            // this.totalNewCrtSAN=(i-1);
            // let count=this.sanInventoriesOne[0].remainingCount;
            // this.remaingSAN=count===this.remaingSAN?this.remaingSAN:this.remaingSAN++
            // if(this.remaingSAN>count){
            //   data['color']=0;
            //   data.domainSimble=1;
            // data['units']=0;
            // data['Include']=false;
            // this.remaingSAN=count;
            // this.totalNewCrtSAN=count;
            //  }
        }
    }
    Evtype() {
        if (this.array3.length == 1) {
            const basedm = "www." + this.array3[0].value;
            this.array3.push({ "value": basedm, "domainSimble": 0, "units": 0, "Include": false });
        }
        for (let i = 3; i < this.array3.length; i++) {
            const data = this.array3[i];
            data.domainSimble = 0;
            data['units'] = 1;
            data['Include'] = true;
            this.remaingSAN = (i - 2);
            this.totalNewCrtSAN = (i - 2);
            let count = this.sanInventoriesOne[0].remainingCount;
            this.remaingSAN = count === this.remaingSAN ? this.remaingSAN : this.remaingSAN++;
            this.totalNewCrtSAN = count === this.totalNewCrtSAN ? this.totalNewCrtSAN : this.totalNewCrtSAN++;
            if (this.remaingSAN > count) {
                data['color'] = 0;
                data.domainSimble = 1;
                data['units'] = 0;
                data['Include'] = false;
                this.remaingSAN = count;
                this.totalNewCrtSAN = count;
            }
        }
    }
    toggle(dataItem, field) {
        debugger;
        dataItem[field] = !dataItem[field];
        const filterData = this.griddata.filter(e => e.Include == true);
        for (let i = 0; i < filterData.length; i++) {
            const e = filterData[i];
            if ('domaintitle' in filterData[i]) {
                this.pmdomainStatus = true;
            }
        }
    }
    addPrimaryDomains() {
        this.selectedItem[0].dataItem["domaintitle"] = true;
        this.array3.forEach(element => {
            if (element.domaintitle) {
                element.domaintitle = false;
            }
        });
        this.selectedItem[0].dataItem["domaintitle"] = true;
        console.log(this.griddata);
    }
    removeDomains() {
        debugger;
        for (let i = this.griddata.length - 1; i >= 0; i--) {
            let element = this.griddata[i];
            if (this.griddata[i].rmvDomain) {
                this.griddata.splice(i, 1);
            }
        }
        console.log(this.griddata);
        //  this.finalDomains.splice(i, 1);
    }
    finaldomain() {
        debugger;
        //const filterData=  this.griddata.filter(e=>e.domaintitle==true);
        const filterData = this.griddata.filter(e => e.Include == true);
        for (let i = 0; i < filterData.length; i++) {
            const e = filterData[i];
            if ('domaintitle' in filterData[i]) {
                console.log('true');
            }
            console.log('domaintitle' in filterData[i]);
        }
    }
    rowCallback(context) {
        const isEven = context.dataItem.color == 0;
        const isOdd = context.dataItem.color == 1;
        return {
            even: isEven,
            odd: isOdd
        };
    }
}
DetailsDomainComponent.ɵfac = function DetailsDomainComponent_Factory(t) { return new (t || DetailsDomainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__["EntrustService"])); };
DetailsDomainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsDomainComponent, selectors: [["app-details-domain"]], decls: 105, vars: 46, consts: [[1, "example-wrapper"], [3, "tabPosition", "tabSelect"], [3, "title", "selected"], ["kendoTabContent", ""], [1, "row"], [1, "col-sm-12", "text-right"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "btn-fixed", "m-b-5", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-default", "btn-fixed", "m-b-5", 3, "click"], [1, "row", "m-t-20"], [1, "col-sm-6"], [1, "col-sm-5"], ["type", "text", "placeholder", "Enter additional domains, separated by commas", "required", "", 1, "form-control", "p-5", 3, "ngModel", "ngModelChange"], [1, "col-sm-1", "text-right"], [1, "btn", "btn-primary", 2, "padding", "5px 14px !important", 3, "click"], [1, "form-group", 2, "margin", "0px"], ["for", "", 1, "block"], ["role", "tablist", 1, "nav", "nav-tabs", "tabs", 2, "width", "auto !important", "background", "none !important", "padding", "0px !important"], [1, "nav-item", "lineheight", 2, "line-height", "20px !important"], ["data-toggle", "tab", "href", "#Certificate", "role", "tab", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#Management", "role", "tab", 1, "nav-link"], [1, "tab-content", "tabs", "card-block", "table-bordered", "p-0"], ["id", "Certificate", "role", "tabpanel", 1, "tab-pane", "active"], [1, "form-group"], [3, "data", "rowClass", "height", "selectable", "selectionChange"], ["title", "", 3, "width"], ["field", "value", "title", "Domain", 3, "width"], ["field", "units", "title", "Units", 3, "width", "headerStyle"], ["field", "domainSimble", "title", "Status ", 3, "width", "headerStyle"], ["kendoGridCellTemplate", ""], ["field", "Include", "title", "Action", "width", "70"], [3, "click"], ["id", "Management", "role", "tabpanel", 1, "tab-pane"], [3, "data", "height", "selectable", "selectionChange"], ["title", "Domain", "field", "domainName", 3, "width"], ["field", "verificationStatus", "title", "Verification Status", 3, "width"], ["field", "verificationMethod", "title", "Verification Method", 3, "width"], ["field", "ovEligible", "title", "OV Eligible", 3, "width"], ["field", "evEligible", "title", "EV Eligible", 3, "width"], ["field", "evExpiry", "title", "EV Expiry", 3, "width"], ["field", "ovExpiry", "title", "OV Expiry", 3, "width"], [1, "form-group", "m-t-20"], ["href", "#", 2, "text-decoration", "dashed !important"], [1, "form-group", "m-t-20", "m-b-6"], [1, "form-group", "m-b-6"], ["tabindex", "-1", 1, "k-grid-footer", 2, "padding-right", "17px"], [1, "k-grid-footer-wrap"], [2, "width", "50%"], [2, "width", "15%"], [2, "width", "20%"], [1, "k-footer-template"], [1, "ng-scope"], ["action-visibility", "", 1, "text-right"], [1, "ng-scope", 2, "border", "0px"], ["title", "Error", 3, "minWidth", "width", "close", 4, "ngIf"], [2, "padding-left", "30px"], [1, "fa", "fa-circle", 2, "font-size", "6px", "color", "#212529"], [1, "row", "m-t-80"], [1, "col-sm-4", "text-center"], [2, "color", "#8b278c", "font-weight", "100", "font-size", "40px"], [2, "font-weight", "100", "font-size", "20px"], [2, "padding-bottom", "20px"], [2, "padding-left", "50px"], [1, "fa", "fa-circle", 2, "font-size", "7px", "color", "#000"], [1, "col-sm-3", "text-center"], [2, "color", "#8b278c"], ["class", "fas fa-check text-success", 4, "ngIf"], ["class", "fas fa-exclamation-triangle text-warning", 4, "ngIf"], [1, "fas", "fa-check", "text-success"], [1, "fas", "fa-exclamation-triangle", "text-warning"], ["type", "checkbox", 3, "checked", "click"], [4, "ngIf"], ["title", "Error", 3, "minWidth", "width", "close"], [1, "d-flex", "flex-row", "mt-1"], [1, "align-top", "mr-3"], [1, "fas", "fa-exclamation-triangle", "fa-3x", "text-warning"], [1, "align-top", "normal-label"], [1, "col-sm-12", "m-t-10", "m-b-10", 2, "text-align", "center"], ["primary", "true", 1, "k-button", "k-primary", "conf_button", 2, "padding", "5px 16px", 3, "click"]], template: function DetailsDomainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "kendo-tabstrip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabSelect", function DetailsDomainComponent_Template_kendo_tabstrip_tabSelect_1_listener($event) { return ctx.onTabSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "kendo-tabstrip-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DetailsDomainComponent_ng_template_3_Template, 22, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "kendo-tabstrip-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailsDomainComponent_ng_template_5_Template, 24, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "kendo-tabstrip-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailsDomainComponent_ng_template_7_Template, 26, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "kendo-tabstrip-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailsDomainComponent_ng_template_9_Template, 26, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "kendo-tabstrip-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetailsDomainComponent_ng_template_11_Template, 24, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsDomainComponent_Template_a_click_14_listener() { return ctx.addPrimaryDomains(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Primary Domain ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsDomainComponent_Template_a_click_16_listener() { return ctx.removeDomains(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Remove Domain(s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetailsDomainComponent_Template_input_ngModelChange_21_listener($event) { return ctx.addDomain = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsDomainComponent_Template_a_click_23_listener() { return ctx.addDomains(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Domains in Certificate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Domain Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "kendo-grid", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DetailsDomainComponent_Template_kendo_grid_selectionChange_41_listener($event) { return ctx.dmIncrtselectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "kendo-grid-checkbox-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "kendo-grid-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "kendo-grid-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "kendo-grid-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, DetailsDomainComponent_ng_template_46_Template, 3, 2, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "kendo-grid-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DetailsDomainComponent_ng_template_48_Template, 1, 1, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "kendo-grid-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DetailsDomainComponent_ng_template_50_Template, 1, 1, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsDomainComponent_Template_button_click_51_listener() { return ctx.finaldomain(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "kendo-grid", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DetailsDomainComponent_Template_kendo_grid_selectionChange_54_listener($event) { return ctx.dmselectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "kendo-grid-checkbox-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "kendo-grid-column", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "kendo-grid-column", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "kendo-grid-column", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "kendo-grid-column", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "kendo-grid-column", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "kendo-grid-column", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "kendo-grid-column", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "colgroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "col", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "col", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "col", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "col", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Total SAN Units for New Certificate: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Total SAN Units for Previous Certificate: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Net SAN Units from Inventory: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, DetailsDomainComponent_kendo_dialog_104_Template, 11, 3, "kendo-dialog", 53);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabPosition", "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Standard OV SSL")("selected", ctx.tabindex == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Advantage OV SSL")("selected", ctx.tabindex == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Multi-Domain OV SSL")("selected", ctx.tabindex == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Multi-Domain EV SSL")("selected", ctx.tabindex == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Wildcard OV SSL")("selected", ctx.tabindex == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addDomain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.griddata)("rowClass", ctx.rowCallback)("height", 500)("selectable", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 70)("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 70)("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.gridView)("height", 500)("selectable", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total SAN Units from Inventory :", ctx.remaingSAN, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total SAN Units for New Certificate : ", ctx.totalNewCrtSAN, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total SAN Units for Previous Certificate :", ctx.totalOldCrtSAN, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Net SAN Units from Inventory:", ctx.totalNewCrtSAN - ctx.totalOldCrtSAN, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.totalNewCrtSAN, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalOldCrtSAN);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.totalNewCrtSAN - ctx.totalOldCrtSAN, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opened);
    } }, directives: [_progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__["TabStripComponent"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__["TabStripTabComponent"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__["TabContentDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_5__["LabelDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["CheckboxColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["ColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["CellTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogActionsComponent"]], styles: ["\n  .k-grid tr.even { background-color: #fff3cd; }\n       .k-grid tr.odd { background-color: #fedada; }\n       .card{\n  border:none;\n}\n       #internal-wizard li a {\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  display: block;\n  padding: 10px 15px;\n  background: #003798;\n}\n       .list-group-item.active {\n  background-color: #8b278c;\n  border-color: #8b278c;\n}\n       .list-group-item {\n    position: relative;\n    display: block;\n    padding: 15px;\n    /* margin-bottom: -1px; */\n    background-color: #fbe1fb;\n    /* border: 1px solid rgba(0,0,0,.125); */\n    font-size: 13px;\n    font-weight: 600;\n}\n       .p-5 {\n  padding: 5px !important;\n}\n       a.btn.btn-primary {\n\n  background-color: #448aff;\n  border-color: #448aff;\n  color: #fff;\n  cursor: pointer;\n}\n       .grid-wrapper {\n  position: relative;\n}\n       .k-i-loading {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    font-size: 64px;\n\n  border-color: currentColor;\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n  background-color: transparent;\n  }\n       .kendo-datepicker{\n    display: flex;\n   justify-content: center;\n   width: 612px;\n }\n       span.k-link.ng-tns-c47-0 {\n  font-size: 19px;\n}\n       /* .k-tabstrip-items {\n  border-color: #fff;\n  color: #fff;\n} */\n       .alert-info {\n  font-size: 13px;\n  color: #000;\n  background-color: #eff2fc;\n  border: 1px solid #00359b;\n  padding: 10px 20px;\n  }\n       .form-group-bg {\n  background: #eff2fc;\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid #00359b;\n  }\n       .table-responsive table td i {\n    background: none;\n}\n       .nav-tabs .nav-item {\n  background-color: #f3f3f5;\n  border: 1px solid #e1e1e1;\n  color: #456BD1;\n  border-radius: 0px ;\n  }\n       .nav-tabs .nav-item a{\n\n  color: #456BD1;\n\n  }\n       .nav-tabs .nav-link:hover {\n  color: #33509C;\n  }\n       .nav-tabs .nav-link.active {\n  border-color: #f3f3f5 !important;\n  background-color: #f3f3f5;\n  color: #456BD1;\n  font-weight: bold;\n  border-radius: 0px ;\n  }\n       /* 03-15-2021 */\n       .btn-default {\n    background-color: #fff;\n    border: 1px solid #456BD1;\n    color: #456BD1;\n    cursor: pointer;\n    text-align: center;\n    font-weight: bold;\n    font-size: 14px !important;\n    line-height: 1.8 !important;\n    margin-left:5px;\n    text-transform:inherit;\n}\n       .ent-info-banner {\n  background-color: #EFF2FB;\n  border: 1px solid #003594;\n  border-radius: 0px;\n  box-sizing: border-box;\n  color: #000;\n  font-size: 14px;\n  margin-bottom: 20px;\n  margin-top: 0px;\n  padding: 10px 15px 5px 50px;\n  position: relative;\n  width: 100%;\n  }\n       .ent-info-banner h4 {\n  display: inline-block;\n  font-size: 24px;\n  color: #3d3a3c;\n  }\n       .ent-info-banner::before {\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Font Awesome 5 Pro';\n  content: \"\\f05a\";\n  font-weight: 900;\n  color: #003594;\n  font-size: 2em;\n  position: absolute;\n  top: 47%;\n  left: 10px;\n  transform: translate(0, -50%);\n  }\n       .ent-info-reissue {\n  background-color: #EFF2FB;\n  border: 1px solid #003594;\n  border-radius: 0px;\n  box-sizing: border-box;\n  color: #000;\n  font-size: 14px;\n  margin-bottom: 20px;\n  margin-top: 0px;\n  padding: 15px 15px 15px 50px;\n  position: relative;\n  width: 100%;\n  }\n       .ent-info-reissue h4 {\n  display: inline-block;\n  font-size: 24px;\n  color: #3d3a3c;\n  }\n       .ent-info-reissue::before {\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Font Awesome 5 Pro';\n  content: \"\\f05a\";\n  font-weight: 900;\n  color: #003594;\n  font-size: 2em;\n  position: absolute;\n  top: 26%;\n  left: 10px;\n  transform: translate(0, -50%);\n  }\n       .ent-info-small {\n  background-color: #EFF2FB;\n  border: 1px solid #003594;\n  border-radius: 0px;\n  box-sizing: border-box;\n  color: #000;\n  font-size: 14px;\n  margin-bottom: 20px;\n  margin-top: 0px;\n  padding: 15px 15px 15px 50px;\n  position: relative;\n  width: 100%;\n  }\n       .ent-info-small ::before {\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Font Awesome 5 Pro';\n  content: \"\\f05a\";\n  font-weight: 900;\n  color: #003594;\n  font-size: 24px;\n  position: absolute;\n  top: 35%;\n  left: 15px;\n  transform: translate(0, -50%);\n  }\n       .ent-warning-banner {\n  background-color: #FFFBE6;\n  border: 1px solid #F2A900;\n  border-radius: 0px;\n  box-sizing: border-box;\n  color: #000;\n  font-size: 14px;\n  margin-bottom: 20px;\n  margin-top: 0px;\n  padding: 15px 15px 15px 50px;\n  position: relative;\n  width: 100%;\n  }\n       .ent-warning-banner::before {\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Font Awesome 5 Pro';\n  content: \"\\f071\";\n  font-weight: 900;\n  color: #F2A900;\n  font-size: 2em;\n  position: absolute;\n  top: 20%;\n  left: 10px;\n  transform: translate(0, -50%);\n  }\n       .btn-default:hover {\n    background-color: #dae2f6;\n    border: 1px solid #456BD1;\n    color: #456BD1;\n    cursor: pointer;\n    text-align: center;\n    font-weight: bold;\n    font-size: 14px !important;\n    line-height: 1.8 !important;\n    margin-left: 5px;\n}\n       .btn-default:focus {\nbackground-color: #fff;\nborder: 1px solid #456BD1;\ncolor: #456BD1;\ncursor: pointer;\ntext-align: center;\nfont-weight: bold;\nfont-size: 14px !important;\nline-height: 1.8 !important;\nmargin-left: 5px;\n}\n       .btn-default:active {\n    background-color: #b8c7ee;\n    border: 1px solid #456BD1;\n    color: #456BD1;\n    cursor: pointer;\n    text-align: center;\n    font-weight: bold;\n    font-size: 14px !important;\n    line-height: 1.8 !important;\n    margin-left: 5px;\n}\n       .color{\n  background-color: red;\n}\n       a.disabled {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n       /* option:hover {\n      background-color: purple;\n    } */\n       .k-grid th {\n\n      font-weight: 900;\n  }\n       .k-dialog-buttongroup .k-button {\n    width: auto !important;\n    max-width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRG9tYWluL2RldGFpbHMtZG9tYWluL2RldGFpbHMtZG9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFLGtCQUFrQix5QkFBeUIsRUFBRTtPQUN4QyxpQkFBaUIseUJBQXlCLEVBQUU7T0FNbkQ7RUFDRSxXQUFXO0FBQ2I7T0FDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO09BQ0E7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO09BR0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHdDQUF3QztJQUN4QyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO09BQ0E7RUFDRSx1QkFBdUI7QUFDekI7T0FDQTs7RUFFRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO09BQ0E7RUFDRSxrQkFBa0I7QUFDcEI7T0FDRTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsZUFBZTs7RUFFakIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCO09BQ0E7SUFDRSxhQUFhO0dBQ2QsdUJBQXVCO0dBQ3ZCLFlBQVk7Q0FDZDtPQUNBO0VBQ0MsZUFBZTtBQUNqQjtPQUNBOzs7R0FHRztPQUNIO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQjtPQUNBO0VBQ0EsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCO09BQ0E7SUFDRSxnQkFBZ0I7QUFDcEI7T0FDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQjtPQUNBOztFQUVBLGNBQWM7O0VBRWQ7T0FDQTtFQUNBLGNBQWM7RUFDZDtPQUNBO0VBQ0EsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQjtPQUVBLGVBQWU7T0FDZjtJQUNFLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjtPQUNFO0VBQ0EseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWDtPQUNBO0VBQ0EscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2Q7T0FFQTtFQUNBLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFFViw2QkFBNkI7RUFDN0I7T0FDQTtFQUNBLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7T0FFQTtFQUNBLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkO09BRUE7RUFDQSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBRVYsNkJBQTZCO0VBQzdCO09BRUE7RUFDQSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYO09BR0E7RUFDQSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBRVYsNkJBQTZCO0VBQzdCO09BQ0E7RUFDQSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYO09BRUE7RUFDQSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBRVYsNkJBQTZCO0VBQzdCO09BQ0E7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQjtPQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLHlCQUF5QjtBQUN6QixjQUFjO0FBQ2QsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQixnQkFBZ0I7QUFDaEI7T0FDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCO09BQ0E7RUFDRSxxQkFBcUI7QUFDdkI7T0FFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7T0FDQTs7T0FFTztPQUdIOztNQUVFLGdCQUFnQjtFQUNwQjtPQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9Eb21haW4vZGV0YWlscy1kb21haW4vZGV0YWlscy1kb21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuay1ncmlkIHRyLmV2ZW4geyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkOyB9XG4gICAgICAgLmstZ3JpZCB0ci5vZGQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVkYWRhOyB9XG5cblxuXG5cbiAgICAgICBcbi5jYXJke1xuICBib3JkZXI6bm9uZTtcbn1cbiNpbnRlcm5hbC13aXphcmQgbGkgYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDM3OTg7XG59XG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjI3OGM7XG4gIGJvcmRlci1jb2xvcjogIzhiMjc4Yztcbn1cblxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAtMXB4OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmUxZmI7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTsgKi9cbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wLTUge1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbn1cbmEuYnRuLmJ0bi1wcmltYXJ5IHtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ4YWZmO1xuICBib3JkZXItY29sb3I6ICM0NDhhZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ3JpZC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuICAuay1pLWxvYWRpbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIC5rZW5kby1kYXRlcGlja2Vye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIHdpZHRoOiA2MTJweDtcbiB9XG4gc3Bhbi5rLWxpbmsubmctdG5zLWM0Ny0wIHtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuLyogLmstdGFic3RyaXAtaXRlbXMge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xufSAqL1xuLmFsZXJ0LWluZm8ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMmZjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTliO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIH1cbiAgLmZvcm0tZ3JvdXAtYmcge1xuICBiYWNrZ3JvdW5kOiAjZWZmMmZjO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTliO1xuICB9XG4gIC50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHRkIGkge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ubmF2LXRhYnMgLm5hdi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmNTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbiAgY29sb3I6ICM0NTZCRDE7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA7XG4gIH1cbiAgLm5hdi10YWJzIC5uYXYtaXRlbSBhe1xuXG4gIGNvbG9yOiAjNDU2QkQxO1xuXG4gIH1cbiAgLm5hdi10YWJzIC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMzM1MDlDO1xuICB9XG4gIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjNmM2Y1ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjU7XG4gIGNvbG9yOiAjNDU2QkQxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDtcbiAgfVxuXG4gIC8qIDAzLTE1LTIwMjEgKi9cbiAgLmJ0bi1kZWZhdWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NTZCRDE7XG4gICAgY29sb3I6ICM0NTZCRDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS44ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOmluaGVyaXQ7XG59XG4gIC5lbnQtaW5mby1iYW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGMkZCO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTk0O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZzogMTBweCAxNXB4IDVweCA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5lbnQtaW5mby1iYW5uZXIgaDQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzZDNhM2M7XG4gIH1cblxuICAuZW50LWluZm8tYmFubmVyOjpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBQcm8nO1xuICBjb250ZW50OiBcIlxcZjA1YVwiO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogIzAwMzU5NDtcbiAgZm9udC1zaXplOiAyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NyU7XG4gIGxlZnQ6IDEwcHg7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmVudC1pbmZvLXJlaXNzdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGMkZCO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzNTk0O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5lbnQtaW5mby1yZWlzc3VlIGg0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjM2QzYTNjO1xuICB9XG5cbiAgLmVudC1pbmZvLXJlaXNzdWU6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IFBybyc7XG4gIGNvbnRlbnQ6IFwiXFxmMDVhXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjMDAzNTk0O1xuICBmb250LXNpemU6IDJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI2JTtcbiAgbGVmdDogMTBweDtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuXG4gIC5lbnQtaW5mby1zbWFsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkYyRkI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDM1OTQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB9XG5cblxuICAuZW50LWluZm8tc21hbGwgOjpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBQcm8nO1xuICBjb250ZW50OiBcIlxcZjA1YVwiO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogIzAwMzU5NDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzUlO1xuICBsZWZ0OiAxNXB4O1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5lbnQtd2FybmluZy1iYW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkU2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjJBOTAwO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5lbnQtd2FybmluZy1iYW5uZXI6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IFBybyc7XG4gIGNvbnRlbnQ6IFwiXFxmMDcxXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjRjJBOTAwO1xuICBmb250LXNpemU6IDJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogMTBweDtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYnRuLWRlZmF1bHQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWUyZjY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ1NkJEMTtcbiAgICBjb2xvcjogIzQ1NkJEMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmJ0bi1kZWZhdWx0OmZvY3VzIHtcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5ib3JkZXI6IDFweCBzb2xpZCAjNDU2QkQxO1xuY29sb3I6ICM0NTZCRDE7XG5jdXJzb3I6IHBvaW50ZXI7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5mb250LXdlaWdodDogYm9sZDtcbmZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xubGluZS1oZWlnaHQ6IDEuOCAhaW1wb3J0YW50O1xubWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5idG4tZGVmYXVsdDphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOGM3ZWU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ1NkJEMTtcbiAgICBjb2xvcjogIzQ1NkJEMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmNvbG9ye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbmEuZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi8qIG9wdGlvbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gICAgfSAqL1xuXG5cbiAgICAuay1ncmlkIHRoIHtcblxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgfVxuICAuay1kaWFsb2ctYnV0dG9uZ3JvdXAgLmstYnV0dG9uIHtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsDomainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details-domain',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                templateUrl: './details-domain.component.html',
                styleUrls: ['./details-domain.component.css']
            }]
    }], function () { return [{ type: src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__["EntrustService"] }]; }, null); })();
var dm = [{
        "domains": [
            {
                "domainName": "piltd.com",
                "verificationStatus": "EXPIRING",
                "ovEligible": true,
                "ovExpiry": "2021-09-30T04:00:00Z",
                "evEligible": false,
                "evExpiry": "2021-04-16T04:00:00Z",
                "clientId": 1
            },
            {
                "domainName": "qa.mailrock.net",
                "verificationMethod": "DNS",
                "verificationStatus": "EXPIRING",
                "ovEligible": true,
                "ovExpiry": "2021-09-30T04:00:00Z",
                "evEligible": false,
                "evExpiry": "2021-04-25T04:00:00Z",
                "clientId": 1
            },
            {
                "domainName": "psplhyd.com",
                "verificationMethod": "DNS",
                "verificationStatus": "EXPIRING",
                "ovEligible": true,
                "ovExpiry": "2021-09-30T04:00:00Z",
                "evEligible": false,
                "evExpiry": "2021-08-20T04:00:00Z",
                "clientId": 1
            },
            {
                "domainName": "google.com",
                "verificationMethod": "DNS",
                "verificationStatus": "CANCELLED",
                "ovEligible": false,
                "evEligible": false,
                "clientId": 1
            },
            {
                "domainName": "links.mailrock.net",
                "verificationMethod": "DNS",
                "verificationStatus": "EXPIRING",
                "ovEligible": true,
                "ovExpiry": "2021-09-30T04:00:00Z",
                "evEligible": false,
                "evExpiry": "2021-08-26T04:00:00Z",
                "clientId": 1
            },
            {
                "domainName": "fb.com",
                "verificationStatus": "CANCELLED",
                "ovEligible": false,
                "evEligible": false,
                "clientId": 1
            },
            {
                "domainName": "priyanets.com",
                "verificationMethod": "DNS",
                "verificationStatus": "EXPIRING",
                "ovEligible": true,
                "ovExpiry": "2021-09-30T04:00:00Z",
                "evEligible": false,
                "evExpiry": "2021-08-26T04:00:00Z",
                "clientId": 1
            },
            {
                "domainName": "apptrino.com",
                "verificationMethod": "EMAIL",
                "verificationStatus": "APPROVED",
                "ovEligible": true,
                "ovExpiry": "2022-05-07T04:00:00Z",
                "evEligible": true,
                "evExpiry": "2022-05-07T04:00:00Z",
                "clientId": 1
            },
            {
                "domainName": "staffing.apptrino.com",
                "verificationMethod": "EMAIL",
                "verificationStatus": "APPROVED",
                "ovEligible": true,
                "ovExpiry": "2022-05-07T04:00:00Z",
                "evEligible": true,
                "evExpiry": "2022-05-07T04:00:00Z",
                "clientId": 1
            },
            {
                "domainName": "d365eshop.com",
                "verificationMethod": "DNS",
                "verificationStatus": "DECLINED",
                "ovEligible": false,
                "evEligible": false,
                "clientId": 1
            },
            {
                "domainName": "newdomain1.com",
                "verificationMethod": "DNS",
                "verificationStatus": "DECLINED",
                "ovEligible": false,
                "evEligible": false,
                "clientId": 1
            }
        ]
    }
];
var invent = [
    {
        "productType": "ADVANTAGE_SSL",
        "totalCount": 5,
        "remainingCount": 4,
        "usedCount": 1
    },
    {
        "productType": "EV_SSL",
        "totalCount": 5,
        "remainingCount": 4,
        "usedCount": 1
    },
    {
        "productType": "EV_SAN",
        "totalCount": 10,
        "remainingCount": 10,
        "usedCount": 0
    },
    {
        "productType": "STANDARD_SSL",
        "totalCount": 5,
        "remainingCount": 1,
        "usedCount": 4
    },
    {
        "productType": "UC_SSL",
        "totalCount": 5,
        "remainingCount": 3,
        "usedCount": 2
    },
    {
        "productType": "UC_SAN",
        "totalCount": 10,
        "remainingCount": 10,
        "usedCount": 0
    },
    {
        "productType": "WILDCARD_SSL",
        "totalCount": 5,
        "remainingCount": 3,
        "usedCount": 2
    },
    {
        "productType": "CMS_1_ADMIN",
        "totalCount": 10,
        "remainingCount": 2,
        "usedCount": 8
    },
    {
        "productType": "CMS_3_ORG",
        "totalCount": 16,
        "remainingCount": 16,
        "usedCount": 0
    },
    {
        "productType": "CMS_1_CLIENT",
        "totalCount": 12,
        "remainingCount": 8,
        "usedCount": 4
    },
    {
        "productType": "CMS_3_DOMAIN",
        "totalCount": 16,
        "remainingCount": 14,
        "usedCount": 2
    }
];
var subjectAltName = [
    { type: 'DNSNAME', value: 'apptrino.com', test: 'Primary' },
    { type: 'DNSNAME', value: 'test.apptrino.com' },
    { type: 'DNSNAME', value: 'test1.apptrino.com' },
    { type: 'DNSNAME', value: 'test2.apptrino.com' }
];


/***/ }),

/***/ "./src/app/Inventry/details-inventory/details-inventory.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Inventry/details-inventory/details-inventory.component.ts ***!
  \***************************************************************************/
/*! exports provided: DetailsInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsInventoryComponent", function() { return DetailsInventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/entrust.service */ "./src/app/entrust.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function DetailsInventoryComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsInventoryComponent_li_3_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const hero_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSelect(hero_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hero_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", hero_r6 === ctx_r0.selectedHero);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r6.name);
} }
function DetailsInventoryComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Standard SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Standard SSL certificate establishes your trusted identity and eliminates browser notifications that warn visitors entering your site.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Organization Validation (OV) SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Secures both www.example.com and example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Includes Basic Website Security, by SiteLock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "For greater trust and a green address bar, choose EV Multi-Domain SSL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Remaining Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.inventories[2].remainingCount);
} }
function DetailsInventoryComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Advantage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Organization Validation (OV) SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Secures both www.example.com and example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Includes Basic Website Security, by SiteLock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "For greater trust and a green address bar, choose EV Multi-Domain SSL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Remaining Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.inventories[0].remainingCount);
} }
function DetailsInventoryComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "EV-Multi Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Organization Validation (OV) SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Secures both www.example.com and example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Includes Basic Website Security, by SiteLock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "For greater trust and a green address bar, choose EV Multi-Domain SSL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Remaining Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.inventories[1].remainingCount);
} }
function DetailsInventoryComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "UC-Multi Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Organization Validation (OV) SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Secures both www.example.com and example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Includes Basic Website Security, by SiteLock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "For greater trust and a green address bar, choose EV Multi-Domain SSL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Remaining Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.inventories[3].remainingCount);
} }
function DetailsInventoryComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wild Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Organization Validation (OV) SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Secures both www.example.com and example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Includes Basic Website Security, by SiteLock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "For greater trust and a green address bar, choose EV Multi-Domain SSL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Remaining Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.inventories[4].remainingCount);
} }
class DetailsInventoryComponent {
    constructor(router, entrustservice, httpClient) {
        this.router = router;
        this.entrustservice = entrustservice;
        this.httpClient = httpClient;
        this.countChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //@Input() public inventoryDetails: FormGroup;
        this.heroes = [{ id: 1, name: 'Standard' }, { id: 2, name: 'Advantage' }, { id: 3, name: 'EV-Multi Domain' },
            { id: 4, name: 'UC-Multi Domain' },
            { id: 5, name: 'Wild Card' },
        ];
        this.inventories = [];
        this.selectedIndex = 1;
    }
    ngOnInit() {
        this.entrustservice.getInventry().subscribe((response) => {
            const obj = JSON.parse(response);
            this.inventories = obj.inventories;
        });
    }
    onSelect(hero) {
        this.selectedHero = hero;
        this.selectedIndex = this.selectedHero.id;
        this.selectedname = this.selectedHero.name;
        this.countChanged.emit(this.selectedname);
        //this.entrustservice.changeMessage( this.selectedname);
    }
}
DetailsInventoryComponent.ɵfac = function DetailsInventoryComponent_Factory(t) { return new (t || DetailsInventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__["EntrustService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DetailsInventoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsInventoryComponent, selectors: [["app-details-inventory"]], outputs: { countChanged: "countChanged" }, decls: 10, vars: 6, consts: [[1, "row"], [1, "col-sm-3"], ["id", "internal-wizard"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "col-sm-9"], ["clas", "hide", 4, "ngIf"], [3, "click"], ["clas", "hide"], [2, "padding-bottom", "20px"], [1, "col-sm-3", "text-center"], [2, "color", "#8b278c"]], template: function DetailsInventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DetailsInventoryComponent_li_3_Template, 3, 3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailsInventoryComponent_div_5_Template, 21, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DetailsInventoryComponent_div_6_Template, 19, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailsInventoryComponent_div_7_Template, 19, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailsInventoryComponent_div_8_Template, 19, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailsInventoryComponent_div_9_Template, 19, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heroes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedIndex === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedIndex === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedIndex === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedIndex === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedIndex === 5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["/* #internal-wizard li a {\n  font-size: 13px;\n   font-weight: 600;\n   color: #bd4ebb;\n   display: block;\n   padding: 15px;\n   background: #fbe1fb;\n}\n#internal-wizard li {\n  list-style: none;\n}\n#internal-wizard > li.active > a {\n  color: #fff;\n  display: block;\n  background: #8b278c;\n}\n#internal-wizard {\n  padding: 0px !important;\n}\n#internal-wizard li a:hover {\n   color: #fff;\n   display: block;\n   padding: 15px;\n   background: #bd4ebb;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSW52ZW50cnkvZGV0YWlscy1pbnZlbnRvcnkvZGV0YWlscy1pbnZlbnRvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHIiwiZmlsZSI6InNyYy9hcHAvSW52ZW50cnkvZGV0YWlscy1pbnZlbnRvcnkvZGV0YWlscy1pbnZlbnRvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICNpbnRlcm5hbC13aXphcmQgbGkgYSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICBjb2xvcjogI2JkNGViYjtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgcGFkZGluZzogMTVweDtcbiAgIGJhY2tncm91bmQ6ICNmYmUxZmI7XG59XG4jaW50ZXJuYWwtd2l6YXJkIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbiNpbnRlcm5hbC13aXphcmQgPiBsaS5hY3RpdmUgPiBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjOGIyNzhjO1xufVxuI2ludGVybmFsLXdpemFyZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuI2ludGVybmFsLXdpemFyZCBsaSBhOmhvdmVyIHtcbiAgIGNvbG9yOiAjZmZmO1xuICAgZGlzcGxheTogYmxvY2s7XG4gICBwYWRkaW5nOiAxNXB4O1xuICAgYmFja2dyb3VuZDogI2JkNGViYjtcbn0gKi9cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsInventoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details-inventory',
                templateUrl: './details-inventory.component.html',
                styleUrls: ['./details-inventory.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__["EntrustService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, { countChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Certificate_Detailscertificate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Certificate/Detailscertificate */ "./src/app/Certificate/Detailscertificate.ts");
/* harmony import */ var _Domain_details_domain_details_domain_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Domain/details-domain/details-domain.component */ "./src/app/Domain/details-domain/details-domain.component.ts");
/* harmony import */ var _pages_account_configuration_account_configuration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/account-configuration/account-configuration.component */ "./src/app/pages/account-configuration/account-configuration.component.ts");
/* harmony import */ var _Create_ssl_tls_ssl_tls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Create/ssl-tls/ssl-tls.component */ "./src/app/Create/ssl-tls/ssl-tls.component.ts");
/* harmony import */ var _Certificate_managed_certificate_managed_certificate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Certificate/managed-certificate/managed-certificate.component */ "./src/app/Certificate/managed-certificate/managed-certificate.component.ts");
/* harmony import */ var _Certificate_active_certificates_active_certificates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Certificate/active-certificates/active-certificates.component */ "./src/app/Certificate/active-certificates/active-certificates.component.ts");
/* harmony import */ var _Certificate_renew_productname_renew_productname_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Certificate/renew-productname/renew-productname.component */ "./src/app/Certificate/renew-productname/renew-productname.component.ts");
/* harmony import */ var _Certificate_reissue_certificate_reissue_certificate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Certificate/reissue-certificate/reissue-certificate.component */ "./src/app/Certificate/reissue-certificate/reissue-certificate.component.ts");
/* harmony import */ var _pages_success_success_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/success/success.component */ "./src/app/pages/success/success.component.ts");
/* harmony import */ var _auth_navbar_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth-navbar.guard */ "./src/app/auth-navbar.guard.ts");
/* harmony import */ var _pages_helpguide_helpguide_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/helpguide/helpguide.component */ "./src/app/pages/helpguide/helpguide.component.ts");















const routes = [
    //{ path: '', redirectTo: '', pathMatch: 'full'},
    { path: '', component: _Certificate_active_certificates_active_certificates_component__WEBPACK_IMPORTED_MODULE_7__["ActiveCertificatesComponent"] },
    { path: 'success', component: _pages_success_success_component__WEBPACK_IMPORTED_MODULE_10__["SuccessComponent"] },
    { path: 'domain', component: _Domain_details_domain_details_domain_component__WEBPACK_IMPORTED_MODULE_3__["DetailsDomainComponent"] },
    { path: 'ssl-tls', component: _Create_ssl_tls_ssl_tls_component__WEBPACK_IMPORTED_MODULE_5__["SslTlsComponent"] },
    { path: 'certificates/:id', component: _Certificate_Detailscertificate__WEBPACK_IMPORTED_MODULE_2__["DetailsCertificateComponent"] },
    { path: 'renew', component: _Certificate_renew_productname_renew_productname_component__WEBPACK_IMPORTED_MODULE_8__["RenewProductnameComponent"], canActivate: [_auth_navbar_guard__WEBPACK_IMPORTED_MODULE_11__["AuthNavbarGuard"]] },
    { path: 'reissue', component: _Certificate_reissue_certificate_reissue_certificate_component__WEBPACK_IMPORTED_MODULE_9__["ReissueCertificateComponent"], canActivate: [_auth_navbar_guard__WEBPACK_IMPORTED_MODULE_11__["AuthNavbarGuard"]] },
    { path: 'revoke', component: _Certificate_managed_certificate_managed_certificate_component__WEBPACK_IMPORTED_MODULE_6__["ManagedCertificateComponent"], canActivate: [_auth_navbar_guard__WEBPACK_IMPORTED_MODULE_11__["AuthNavbarGuard"]] },
    { path: 'accountConfigure', component: _pages_account_configuration_account_configuration_component__WEBPACK_IMPORTED_MODULE_4__["AccountConfigurationComponent"] },
    { path: 'help', component: _pages_helpguide_helpguide_component__WEBPACK_IMPORTED_MODULE_12__["HelpguideComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pages_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/left-side/left-side.component */ "./src/app/pages/left-side/left-side.component.ts");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor() {
        this.title = 'EntrustData';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 0, consts: [[1, "loader-bg"], [1, "loader-bar"], ["id", "pcoded", 1, "pcoded"], [1, "pcoded-container", "navbar-wrapper"], [1, "pcoded-main-container"], [1, "pcoded-wrapper"], [1, "pcoded-content", "test"], [1, "page-header"], [1, "page-block"], [1, "pcoded-inner-content"], [1, "main-body"], [1, "page-wrapper"], [1, "page-body"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-left-side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_pages_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_1__["LeftSideComponent"], _pages_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".header-navbar[_ngcontent-%COMP%]   .navbar-wrapper[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size:18px; color:#fff;\n  }\n  .header-navbar[_ngcontent-%COMP%]   .navbar-wrapper[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px; margin-right:3px;\n  }\n  .icon[_ngcontent-%COMP%] {\n    font-weight: bold;\n    }\n  .icon[_ngcontent-%COMP%]::before {\n    display: inline-block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    font-family: 'Font Awesome 5 Pro';\n    content: \"\\f82d\";\n    font-weight: 900;\n    color: #fff;\n    font-size: 15px;\n    position: absolute;\n    top: 50%;\n    left: -15px;\n    transform: translate(0, -50%);\n    }\n  .pcoded[_ngcontent-%COMP%]   .pcoded-content[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]{\n\n      max-width: 100% !important;\n\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjLEVBQUUsVUFBVTtFQUMxQjtFQUNBO0VBQ0EsZUFBZSxFQUFFLGdCQUFnQjtFQUNqQztFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCO0VBQ0E7SUFDQSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBRVgsNkJBQTZCO0lBQzdCO0VBQ0E7O01BRUUsMEJBQTBCOztFQUU5QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1uYXZiYXIgLm5hdmJhci13cmFwcGVyIC5uYXZiYXItY29udGFpbmVyIC5uYXYtcmlnaHQgaSB7XG4gIGZvbnQtc2l6ZToxOHB4OyBjb2xvcjojZmZmO1xuICB9XG4gIC5oZWFkZXItbmF2YmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWNvbnRhaW5lciAubmF2LXJpZ2h0IC51c2VyLXByb2ZpbGUgaSB7XG4gIGZvbnQtc2l6ZTogMTVweDsgbWFyZ2luLXJpZ2h0OjNweDtcbiAgfVxuICAuaWNvbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5pY29uOjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBQcm8nO1xuICAgIGNvbnRlbnQ6IFwiXFxmODJkXCI7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IC0xNXB4O1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgICB9XG4gICAgLnBjb2RlZCAucGNvZGVkLWNvbnRlbnQgIC50ZXN0e1xuXG4gICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblxuICB9XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/left-side/left-side.component */ "./src/app/pages/left-side/left-side.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _Create_ssl_tls_ssl_tls_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Create/ssl-tls/ssl-tls.component */ "./src/app/Create/ssl-tls/ssl-tls.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _Certificate_managed_certificate_managed_certificate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Certificate/managed-certificate/managed-certificate.component */ "./src/app/Certificate/managed-certificate/managed-certificate.component.ts");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _Inventry_details_inventory_details_inventory_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Inventry/details-inventory/details-inventory.component */ "./src/app/Inventry/details-inventory/details-inventory.component.ts");
/* harmony import */ var _Domain_details_domain_details_domain_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Domain/details-domain/details-domain.component */ "./src/app/Domain/details-domain/details-domain.component.ts");
/* harmony import */ var _organization_details_organization_details_organization_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./organization/details-organization/details-organization.component */ "./src/app/organization/details-organization/details-organization.component.ts");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-label */ "./node_modules/@progress/kendo-angular-label/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _Certificate_Detailscertificate__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Certificate/Detailscertificate */ "./src/app/Certificate/Detailscertificate.ts");
/* harmony import */ var _Cleints_details_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Cleints/details/details.component */ "./src/app/Cleints/details/details.component.ts");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _Certificate_active_certificates_active_certificates_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Certificate/active-certificates/active-certificates.component */ "./src/app/Certificate/active-certificates/active-certificates.component.ts");
/* harmony import */ var _Certificate_renew_productname_renew_productname_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Certificate/renew-productname/renew-productname.component */ "./src/app/Certificate/renew-productname/renew-productname.component.ts");
/* harmony import */ var _Certificate_reissue_certificate_reissue_certificate_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Certificate/reissue-certificate/reissue-certificate.component */ "./src/app/Certificate/reissue-certificate/reissue-certificate.component.ts");
/* harmony import */ var _pages_account_configuration_account_configuration_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/account-configuration/account-configuration.component */ "./src/app/pages/account-configuration/account-configuration.component.ts");
/* harmony import */ var _pages_dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/dash-board/dash-board.component */ "./src/app/pages/dash-board/dash-board.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _pages_success_success_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/success/success.component */ "./src/app/pages/success/success.component.ts");
/* harmony import */ var _custom_pipe_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./custom-pipe.pipe */ "./src/app/custom-pipe.pipe.ts");
/* harmony import */ var _AuditLogs_details_auditlogs_details_auditlogs_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./AuditLogs/details-auditlogs/details-auditlogs.component */ "./src/app/AuditLogs/details-auditlogs/details-auditlogs.component.ts");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pages_helpguide_helpguide_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/helpguide/helpguide.component */ "./src/app/pages/helpguide/helpguide.component.ts");
/* harmony import */ var _entrust_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./entrust.service */ "./src/app/entrust.service.ts");







































if (src_environments_environment__WEBPACK_IMPORTED_MODULE_34__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_entrust_service__WEBPACK_IMPORTED_MODULE_36__["EntrustService"]], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_29__["ToastrModule"].forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["GridModule"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["PDFModule"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["ExcelModule"],
            _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["AutoCompleteModule"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["ComboBoxModule"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["DropDownsModule"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["MultiSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_18__["InputsModule"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["DropDownsModule"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"], _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_20__["LabelModule"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__["StepperModule"], _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_23__["DateInputsModule"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_33__["DialogsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_5__["LeftSideComponent"],
        _Inventry_details_inventory_details_inventory_component__WEBPACK_IMPORTED_MODULE_15__["DetailsInventoryComponent"],
        _Create_ssl_tls_ssl_tls_component__WEBPACK_IMPORTED_MODULE_7__["SslTlsComponent"],
        _Certificate_managed_certificate_managed_certificate_component__WEBPACK_IMPORTED_MODULE_12__["ManagedCertificateComponent"],
        _pages_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _AuditLogs_details_auditlogs_details_auditlogs_component__WEBPACK_IMPORTED_MODULE_32__["DetailsAuditlogsComponent"],
        _Domain_details_domain_details_domain_component__WEBPACK_IMPORTED_MODULE_16__["DetailsDomainComponent"], _organization_details_organization_details_organization_component__WEBPACK_IMPORTED_MODULE_17__["DetailsOrganizationComponent"], _Certificate_Detailscertificate__WEBPACK_IMPORTED_MODULE_21__["DetailsCertificateComponent"], _Cleints_details_details_component__WEBPACK_IMPORTED_MODULE_22__["DetailsComponent"],
        _Certificate_active_certificates_active_certificates_component__WEBPACK_IMPORTED_MODULE_24__["ActiveCertificatesComponent"], _Certificate_renew_productname_renew_productname_component__WEBPACK_IMPORTED_MODULE_25__["RenewProductnameComponent"], _Certificate_reissue_certificate_reissue_certificate_component__WEBPACK_IMPORTED_MODULE_26__["ReissueCertificateComponent"], _pages_account_configuration_account_configuration_component__WEBPACK_IMPORTED_MODULE_27__["AccountConfigurationComponent"], _pages_dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_28__["DashBoardComponent"], _pages_success_success_component__WEBPACK_IMPORTED_MODULE_30__["SuccessComponent"], _custom_pipe_pipe__WEBPACK_IMPORTED_MODULE_31__["CustomPipePipe"], _pages_helpguide_helpguide_component__WEBPACK_IMPORTED_MODULE_35__["HelpguideComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_29__["ToastrModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["GridModule"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["PDFModule"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["ExcelModule"],
        _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["AutoCompleteModule"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["ComboBoxModule"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["DropDownsModule"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["MultiSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_18__["InputsModule"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["DropDownsModule"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"], _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_20__["LabelModule"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__["StepperModule"], _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_23__["DateInputsModule"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_33__["DialogsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pages_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_5__["LeftSideComponent"],
                    _Inventry_details_inventory_details_inventory_component__WEBPACK_IMPORTED_MODULE_15__["DetailsInventoryComponent"],
                    _Create_ssl_tls_ssl_tls_component__WEBPACK_IMPORTED_MODULE_7__["SslTlsComponent"],
                    _Certificate_managed_certificate_managed_certificate_component__WEBPACK_IMPORTED_MODULE_12__["ManagedCertificateComponent"],
                    _pages_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _AuditLogs_details_auditlogs_details_auditlogs_component__WEBPACK_IMPORTED_MODULE_32__["DetailsAuditlogsComponent"],
                    _Domain_details_domain_details_domain_component__WEBPACK_IMPORTED_MODULE_16__["DetailsDomainComponent"], _organization_details_organization_details_organization_component__WEBPACK_IMPORTED_MODULE_17__["DetailsOrganizationComponent"], _Certificate_Detailscertificate__WEBPACK_IMPORTED_MODULE_21__["DetailsCertificateComponent"], _Cleints_details_details_component__WEBPACK_IMPORTED_MODULE_22__["DetailsComponent"],
                    _Certificate_active_certificates_active_certificates_component__WEBPACK_IMPORTED_MODULE_24__["ActiveCertificatesComponent"], _Certificate_renew_productname_renew_productname_component__WEBPACK_IMPORTED_MODULE_25__["RenewProductnameComponent"], _Certificate_reissue_certificate_reissue_certificate_component__WEBPACK_IMPORTED_MODULE_26__["ReissueCertificateComponent"], _pages_account_configuration_account_configuration_component__WEBPACK_IMPORTED_MODULE_27__["AccountConfigurationComponent"], _pages_dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_28__["DashBoardComponent"], _pages_success_success_component__WEBPACK_IMPORTED_MODULE_30__["SuccessComponent"], _custom_pipe_pipe__WEBPACK_IMPORTED_MODULE_31__["CustomPipePipe"], _pages_helpguide_helpguide_component__WEBPACK_IMPORTED_MODULE_35__["HelpguideComponent"],
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_29__["ToastrModule"].forRoot(),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                    _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["GridModule"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["PDFModule"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["ExcelModule"],
                    _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["AutoCompleteModule"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["ComboBoxModule"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["DropDownsModule"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["MultiSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_18__["InputsModule"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["DropDownsModule"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"], _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_20__["LabelModule"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__["StepperModule"], _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_23__["DateInputsModule"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_33__["DialogsModule"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}],
                providers: [_entrust_service__WEBPACK_IMPORTED_MODULE_36__["EntrustService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth-navbar.guard.ts":
/*!**************************************!*\
  !*** ./src/app/auth-navbar.guard.ts ***!
  \**************************************/
/*! exports provided: AuthNavbarGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNavbarGuard", function() { return AuthNavbarGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthNavbarGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        this.id = localStorage.getItem('checkOutData');
        // console.log("ActivateGuard#canActivate called, can: ", this.can);
        if (!this.id) {
            this.router.navigate(["/"]);
            return false;
        }
        return true;
    }
}
AuthNavbarGuard.ɵfac = function AuthNavbarGuard_Factory(t) { return new (t || AuthNavbarGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthNavbarGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthNavbarGuard, factory: AuthNavbarGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthNavbarGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/custom-pipe.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/custom-pipe.pipe.ts ***!
  \*************************************/
/*! exports provided: CustomPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPipePipe", function() { return CustomPipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CustomPipePipe {
    transform(input) {
        //console.log(input);
        if (!input) {
            return '';
        }
        else {
            return input.replace(/[\W_]/g, ' ');
        }
    }
}
CustomPipePipe.ɵfac = function CustomPipePipe_Factory(t) { return new (t || CustomPipePipe)(); };
CustomPipePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "customPipe", type: CustomPipePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomPipePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'customPipe'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/entrust.service.ts":
/*!************************************!*\
  !*** ./src/app/entrust.service.ts ***!
  \************************************/
/*! exports provided: EntrustService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrustService", function() { return EntrustService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class EntrustService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        //comment this line while build the project
        //baseUrl = environment.apiserver;
        //uncomment this line while build the project
        this.baseUrl = localStorage.getItem('baseUrl');
        // id = localStorage.getItem('checkOutData');
        this.uid = localStorage.getItem("tempid");
    }
    setData(data) { this.data = data; }
    setInventoryData(data) { this.invenotryData = data; }
    setorgData(data) { this.orgData = data; }
    getData() { return this.data || []; }
    getInventoryData() { return this.invenotryData || []; }
    getorgData() { return this.orgData || []; }
    hasData() {
        // return this.data && this.data['certificates'].length;    
        if (this.data) {
            return true;
        }
    }
    hasInventoryData() {
        if (this.invenotryData) {
            return true;
        }
    }
    hasorgData() {
        if (this.orgData) {
            return true;
        }
    }
    azurecrt(name, csrObj) {
        return this.httpClient.post(this.baseUrl + 'api/crmake/' + this.uid + '/' + name, csrObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => resp), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); }));
    }
    azureMergeCrt(crtname, mrgobj) {
        return this.httpClient.post(this.baseUrl + 'api/mergeCertificate/' + this.uid + '/' + crtname, mrgobj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => resp), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); }));
    }
    usercrt(csrObj) {
        return this.httpClient.post(this.baseUrl + 'api/ecrcertificate/' + this.uid, csrObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => resp), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); }));
    }
    reverifyDomain(csrObj, domain, clientId) {
        return this.httpClient.put(this.baseUrl + 'api/domain/' + clientId + '/' + domain, csrObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => resp), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); }));
    }
    // reverifyDomain(csrObj,clientId,domain) {
    //   return this.httpClient.post<any>(this.authBaseUrl + "/client/validateOtp/" + clientId + "/" + domain, csrObj) .pipe(
    //     map(resp => resp),
    //     catchError(this.errorHandler)
    // )
    // }
    crtrenew(csrObj, id) {
        return this.httpClient.post(this.baseUrl + 'api/renew/' + id + '/' + this.uid, csrObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => resp), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            throw err;
        }));
    }
    crtrissue(csrObj, id) {
        return this.httpClient.post(this.baseUrl + 'api/reissue/' + id + '/' + this.uid, csrObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => resp), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            throw err;
        }));
    }
    crtrevoke(csrObj, id) {
        return this.httpClient.post(this.baseUrl + 'api/revoke/' + id + '/' + this.uid, csrObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => resp), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            throw err;
        }));
    }
    // getAll() { return this.httpClient.get<any>(this.baseUrl + 'api/clients/') }
    //getByStatus(){return this.httpClient.get<any>('https://entrustapitest.azurewebsites.net/api/secrets').pipe() }
    //getByStatus(){return this.httpClient.get<any>(this.baseUrl +'certificates?sort=trackingId:desc&limit=1000&fields=*&status=in:ACTIVE,READY').pipe() }
    //getByStatus() { return this.httpClient.get<any>(this.baseUrl + 'api/Certificates/'+this.uid).pipe(publishReplay(),refCount())};
    //getByStatus() { return this.httpClient.get<any>(this.baseUrl + 'api/test/').pipe(publishReplay(),refCount())};
    getByStatus() { return this.httpClient.get(this.baseUrl + 'api/Certificates/' + this.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); })); }
    getBytrackingid(id) { return this.httpClient.get(this.baseUrl + 'api/certificates/' + id + '/' + this.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); })); }
    getOrganization() { return this.httpClient.get(this.baseUrl + 'api/organizations/' + this.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); })); }
    getOrganizationUnit() { return this.httpClient.get(this.baseUrl + 'api/organizationalUnits/' + this.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); })); }
    getInventry() { return this.httpClient.get(this.baseUrl + 'api/inventories/' + this.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); })); }
    getcustomFields() { return this.httpClient.get(this.baseUrl + 'api/customFields/' + this.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); })); }
    getAuditlogs() { return this.httpClient.get(this.baseUrl + 'api/auditlogs/' + this.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); })); }
    getdomain() { return this.httpClient.get(this.baseUrl + 'api/domains/' + this.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); })); }
    getClients() { return this.httpClient.get(this.baseUrl + 'api/clients/' + this.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); })); }
    getprofile() { return this.httpClient.get(this.baseUrl + 'api/profile').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); })); }
}
EntrustService.ɵfac = function EntrustService_Factory(t) { return new (t || EntrustService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
EntrustService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EntrustService, factory: EntrustService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntrustService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/organization/details-organization/details-organization.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/organization/details-organization/details-organization.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DetailsOrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsOrganizationComponent", function() { return DetailsOrganizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/entrust.service */ "./src/app/entrust.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-label */ "./node_modules/@progress/kendo-angular-label/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/__ivy_ngcc__/dist/fesm2015/index.js");









function DetailsOrganizationComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DetailsOrganizationComponent_tr_49_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onCheckboxChange($event, ctx_r2.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dm_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", dm_r1 == null ? null : dm_r1.rowColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dm_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", dm_r1.domainSimble);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dm_r1.y, "");
} }
const products = [{
        'ProductID': 1,
        'ProductName': 'Chai',
        'UnitPrice': 18.0000,
        'Discontinued': true,
        'code': 'C1'
    }, {
        'ProductID': 2,
        'ProductName': 'Chang',
        'UnitPrice': 19.0000,
        'Discontinued': false,
        'code': 'C2'
    }
];
class DetailsOrganizationComponent {
    //public selectedValue = 2;
    constructor(entrustservice, activatedRoute, fb) {
        this.entrustservice = entrustservice;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.gridData = products;
        this.domains = [];
        this.groupList = [];
        this.product = [];
        this.array3 = [];
        this.organizations = [];
        this.organizationUnits = [];
        this.oulistItems = [];
        this.certificateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            subjectAltName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            expDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            certType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            eku: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ou: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            signIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            orgnization: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.selectedValue = '';
        this.value = new Date();
        this.listItems1 = ['SHA-2'];
        this.keyUsage = ['Server & Client Authentication', 'Client Authentication', 'Server Authentication'];
        this.org = ['Server & Client Authentication', 'Client Authentication', 'Server Authentication'];
        // Use an arrow function to capture the 'this' execution context of the class.
        this.rowCallback = (context) => {
            switch (context.dataItem.code) {
                case 'C1':
                    return { gold: true };
                case 'C2':
                    return { green: true };
                default:
                    return {};
            }
        };
    }
    ngOnInit() {
        this.getdomains();
        this.getorg();
    }
    onKeydown(grid, e) {
        if (e.key === 'Enter') {
            debugger;
            grid.closeCell();
        }
    }
    cellCloseHandler(args) {
        const { formGroup, dataItem } = args;
        // save to backend etc
    }
    onInputEntry(event, id) {
        debugger;
        let input = event.target;
        let newid = 'tab' + ++id;
        console.log(newid);
        document.getElementById(newid).focus();
    }
    getorg() {
        this.entrustservice.getOrganization().subscribe((response) => {
            this.listItems = response.organizations;
            console.log(this.organizations);
        });
    }
    getdomains() {
        this.entrustservice.getdomain().subscribe((response) => {
            this.domains = response.domains;
            this.domains.forEach((key) => {
                key["subdomain"] = '';
            });
            this.gridView = this.domains;
        });
    }
    selectionChange(e) {
        debugger;
        if (e.selectedRows.length > 0) {
            this.selectedItem = e.selectedRows;
            for (let i = 0; i < e.selectedRows.length; i++) {
                this.array3.push(this.selectedItem[i].dataItem.domainName);
            }
        }
        if (e.deselectedRows.length > 0) {
            for (let i = 0; i < e.deselectedRows.length; i++) {
                this.array3.splice(e.deselectedRows[i].index, 1);
            }
        }
        console.log(this.array3);
    }
}
DetailsOrganizationComponent.ɵfac = function DetailsOrganizationComponent_Factory(t) { return new (t || DetailsOrganizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__["EntrustService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
DetailsOrganizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsOrganizationComponent, selectors: [["app-details-organization"]], decls: 70, vars: 15, consts: [[1, "row"], [1, "col-sm-12"], [1, "form-group-bg"], [2, "display", "inline-block"], [1, "fa", "fa-info-circle", 2, "font-size", "30px"], [2, "padding-left", "30px", "margin", "0px"], [2, "color", "#ff0000"], [1, "col-sm-6"], [1, "form-group", 2, "margin", "0px"], ["for", "", 1, "block"], [1, "form-group"], ["role", "tablist", 1, "nav", "nav-tabs", "tabs", 2, "width", "auto !important", "background", "none !important", "padding", "0px !important"], [1, "nav-item", 2, "line-height", "20px !important"], ["data-toggle", "tab", "href", "#Certificate", "role", "tab", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#Management", "role", "tab", 1, "nav-link"], [1, "tab-content", "tabs", "card-block", "table-bordered", "p-0"], ["id", "Certificate", "role", "tabpanel", 1, "tab-pane", "active"], [1, "dt-responsive", "table-responsive"], ["id", "order-tablea", 1, "table", "table-striped", "table-bordered", "nowrap"], [1, "text-center"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["id", "Management", "role", "tabpanel", 1, "tab-pane"], [3, "data", "height", "selectable", "selectionChange"], ["title", "", 3, "width"], ["title", "Domain", "field", "domainName", 3, "width"], ["field", "verificationStatus", "title", "Verification Status", 3, "width"], ["field", "verificationMethod", "title", "Verification Method", 3, "width"], ["field", "ovEligible", "title", "OV Eligible", 3, "width"], ["field", "evEligible", "title", "EV Eligible", 3, "width"], ["field", "evExpiry", "title", "EV Expiry", 3, "width"], ["field", "ovExpiry", "title", "OV Expiry", 3, "width"], [1, "form-group", "m-t-20", "m-b-6"], ["href", "#", 2, "text-decoration", "dashed !important"], [1, "form-group", "m-b-6"], [1, "form-group", "m-t-20"], [3, "ngClass"], ["align", "center"], ["type", "checkbox", "checked", "", 3, "change"]], template: function DetailsOrganizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New DN:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " cn=[domain value], o=[Org Value], l=[local value], st=[state value], c=[country value] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " These fields are required. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " --> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Domains in Certificate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Domain Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, DetailsOrganizationComponent_tr_49_Template, 11, 4, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "kendo-grid", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DetailsOrganizationComponent_Template_kendo_grid_selectionChange_51_listener($event) { return ctx.selectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "kendo-grid-checkbox-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "kendo-grid-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "kendo-grid-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "kendo-grid-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "kendo-grid-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "kendo-grid-column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "kendo-grid-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "kendo-grid-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Total SAN Units for New Certificate : 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Total SAN Units for Previous Certificate : 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Net SAN Units from Inventory: 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 13, ctx.selectedItem));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.array3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.gridView)("height", 500)("selectable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 180);
    } }, directives: [_progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_4__["LabelDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["CheckboxColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["ColumnComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: [".gold .codeColumn { background-color: #FFBA80; }\n.green .codeColumn { background-color: #B2F699; }\n.k-icon k-i-arrow-s:before {\n  content: \"\\e006\";\n}\n.k-grid tr.even { background-color: #f45c42; }\n.k-grid tr.odd { background-color: #41f4df; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JnYW5pemF0aW9uL2RldGFpbHMtb3JnYW5pemF0aW9uL2RldGFpbHMtb3JnYW5pemF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CLHlCQUF5QixFQUFFO0FBQy9DLHFCQUFxQix5QkFBeUIsRUFBRTtBQUloRDtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBLGtCQUFrQix5QkFBeUIsRUFBRTtBQUN0QyxpQkFBaUIseUJBQXlCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9vcmdhbml6YXRpb24vZGV0YWlscy1vcmdhbml6YXRpb24vZGV0YWlscy1vcmdhbml6YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nb2xkIC5jb2RlQ29sdW1uIHsgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkE4MDsgfVxuLmdyZWVuIC5jb2RlQ29sdW1uIHsgYmFja2dyb3VuZC1jb2xvcjogI0IyRjY5OTsgfVxuXG5cblxuLmstaWNvbiBrLWktYXJyb3ctczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTAwNlwiO1xufVxuLmstZ3JpZCB0ci5ldmVuIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y0NWM0MjsgfVxuICAgICAgIC5rLWdyaWQgdHIub2RkIHsgYmFja2dyb3VuZC1jb2xvcjogIzQxZjRkZjsgfVxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsOrganizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details-organization',
                templateUrl: './details-organization.component.html',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styleUrls: ['./details-organization.component.css']
            }]
    }], function () { return [{ type: src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__["EntrustService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/organization/organization.ts":
/*!**********************************************!*\
  !*** ./src/app/organization/organization.ts ***!
  \**********************************************/
/*! exports provided: Organizations, produtypeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Organizations", function() { return Organizations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produtypeList", function() { return produtypeList; });
class Organizations {
    constructor(name, verificationStatus, clientId) {
        this.name = name;
        this.verificationStatus = verificationStatus;
        this.clientId = clientId;
    }
}
class produtypeList {
    constructor() {
        this.items = [{
                title: 'Standard OV SSL',
                name: 'STANDARD_SSL',
                value: 0
            }, {
                title: 'Advantage OV SSL',
                name: 'ADVANTAGE_SSL',
                value: 1
            }, {
                title: 'Multi-Domain OV SSL',
                name: 'UC_SSL', value: 2
            }, {
                title: 'Multi-Domain EV SSL',
                name: 'EV_SSL', value: 3
            }, {
                title: 'Wildcard OV SSL',
                name: 'WILDCARD_SSL', value: 4
            }];
    }
}


/***/ }),

/***/ "./src/app/pages/account-configuration/account-configuration.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/account-configuration/account-configuration.component.ts ***!
  \********************************************************************************/
/*! exports provided: AccountConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountConfigurationComponent", function() { return AccountConfigurationComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-label */ "./node_modules/@progress/kendo-angular-label/__ivy_ngcc__/dist/fesm2015/index.js");







class AccountConfigurationComponent {
    constructor(http) {
        this.http = http;
        this.certificateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            usr_apiKey: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            usr_apiPass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            usr_apiName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            usr_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ngOnInit() {
    }
    add(payload) {
    }
    submit() {
        const reqdata = {
            "Name": this.certificateForm.value.usr_name,
        };
        // const headers = new HttpHeaders().set('content-type', 'application/json');  
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        let options = { headers: headers };
        this.http.post("http://localhost:60944/api/testcrt", reqdata).
            subscribe(result => {
            console.log(result);
        });
    }
}
AccountConfigurationComponent.ɵfac = function AccountConfigurationComponent_Factory(t) { return new (t || AccountConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AccountConfigurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccountConfigurationComponent, selectors: [["app-account-configuration"]], decls: 43, vars: 1, consts: [[1, "row"], [1, "col-lg-12", "col-md-12"], [1, "card"], [2, "font-weight", "bold"], [3, "formGroup"], [1, "col-sm-6"], [1, "form-group"], ["for", "", 1, "block"], ["id", "", "name", "name", "type", "text", "value", "", "formControlName", "usr_name", 1, "form-control"], [1, "form-control", "required"], ["id", "", "name", "name", "type", "text", "value", "", "formControlName", "usr_apiName", 1, "form-control"], ["id", "", "name", "name", "type", "text", "value", "", "formControlName", "usr_apiPass", 1, "form-control"], ["id", "", "name", "name", "type", "text", "value", "", "formControlName", "usr_apiKey", 1, "form-control"], [1, "form-group", "text-right", "m-t-20"], [1, "k-button", "k-primary", 3, "click"]], template: function AccountConfigurationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Account Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Provider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Select Key Vault for Client Authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "API User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "API Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "API Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Client Certificate for API Authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Select Key Vault for Client Authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountConfigurationComponent_Template_a_click_41_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.certificateForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_3__["LabelDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: [".card[_ngcontent-%COMP%]{\n    border:none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC1jb25maWd1cmF0aW9uL2FjY291bnQtY29uZmlndXJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC1jb25maWd1cmF0aW9uL2FjY291bnQtY29uZmlndXJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gICAgYm9yZGVyOm5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountConfigurationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-account-configuration',
                templateUrl: './account-configuration.component.html',
                styleUrls: ['./account-configuration.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/dash-board/dash-board.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/dash-board/dash-board.component.ts ***!
  \**********************************************************/
/*! exports provided: DashBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardComponent", function() { return DashBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DashBoardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashBoardComponent.ɵfac = function DashBoardComponent_Factory(t) { return new (t || DashBoardComponent)(); };
DashBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashBoardComponent, selectors: [["app-dash-board"]], decls: 24, vars: 0, consts: [[1, "pcoded-content"], [1, "page-header"], [1, "page-block"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-header-title"], [1, "m-b-10"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "index.html"], [1, "feather", "icon-home"], ["href", "#!"], [1, "pcoded-inner-content"], [1, "main-body"], [1, "page-wrapper"], [1, "page-body"], [1, "row"], [1, "col-lg-12", "col-md-12"], [1, "card", 2, "height", "430px"], [1, "card-header", "borderless"], [1, "card-block"]], template: function DashBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2gtYm9hcmQvZGFzaC1ib2FyZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dash-board',
                templateUrl: './dash-board.component.html',
                styleUrls: ['./dash-board.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["active"]; };
const _c1 = function () { return { exact: true }; };
//import { EntrustService } from 'src/app/entrust.service';
class HeaderComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isLogged = true;
        this.id = '';
    }
    ngOnInit() {
        this.id = localStorage.getItem('checkOutData');
        if (this.id) {
            this.isLogged = false;
        }
    }
    pageNavigate(tab) {
        this.id = localStorage.getItem('checkOutData');
        if (this.id) {
            this.isLogged = false;
        }
        if (tab === 'renew') {
            this.router.navigate(['/renew/' + this.id]);
        }
        else if (tab === 'reissue') {
            this.router.navigate(['/reissue/' + this.id]);
        }
        else if (tab === 'revoke') {
            this.router.navigate(['/revoke/' + this.id]);
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 27, vars: 20, consts: [[1, "pcoded-navbar"], [1, "pcoded-inner-navbar"], [1, "pcoded-item"], [3, "routerLinkActive", "routerLinkActiveOptions"], ["routerLink", "/", 1, "waves-effect", "waves-dark"], [1, "pcoded-mtext"], [3, "routerLinkActive"], ["routerLink", "/ssl-tls", 1, "waves-effect", "waves-dark"], ["routerLink", "reissue", 1, "waves-effect", "waves-dark"], ["routerLink", "renew", 1, "waves-effect", "waves-dark"], ["routerLink", "revoke", 1, "waves-effect", "waves-dark"], ["routerLink", "help", 1, "waves-effect", "waves-dark"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Active Certificates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create SSL/TLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Reissue SSL/TLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Renew SSL/TLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Revoke SSL/TLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["li.disabled[_ngcontent-%COMP%] {\n  \n  text-decoration:none;\n  cursor:default;\n  color:grey;\n  pointer-events:none;\n}\n\n.notallowed[_ngcontent-%COMP%]{\n  cursor: not-allowed  !important;\n}\n\n.disabled[_ngcontent-%COMP%]{\n  opacity: 0.75;\n}\n\n.active[_ngcontent-%COMP%]{\n\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7RUFFRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7O0VBRUUsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5saS5kaXNhYmxlZCB7XG4gIFxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgY3Vyc29yOmRlZmF1bHQ7XG4gIGNvbG9yOmdyZXk7XG4gIHBvaW50ZXItZXZlbnRzOm5vbmU7XG59XG5cbi5ub3RhbGxvd2Vke1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICAhaW1wb3J0YW50O1xufVxuLmRpc2FibGVke1xuICBvcGFjaXR5OiAwLjc1O1xufVxuLmFjdGl2ZXtcblxuICBvcGFjaXR5OiAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/helpguide/helpguide.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/helpguide/helpguide.component.ts ***!
  \********************************************************/
/*! exports provided: HelpguideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpguideComponent", function() { return HelpguideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HelpguideComponent {
}
HelpguideComponent.ɵfac = function HelpguideComponent_Factory(t) { return new (t || HelpguideComponent)(); };
HelpguideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpguideComponent, selectors: [["app-helpguide"]], decls: 6, vars: 0, consts: [[1, "fa", "fa-arrow-alt-right", "ent-bluest-color", 2, "color", "#456BD1"], ["href", "/assets/userguide/Entrust_Connect_for_Microsoft_Azure_User_Guide.pdf", "target", "_blank", 1, "default-link"]], template: function HelpguideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "User Guide(V.1.0.0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["a.default-link[_ngcontent-%COMP%] {\r\n    color: #456BD1;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    cursor: pointer;\r\n    margin-left: 20px;\r\n    text-decoration: underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVscGd1aWRlL2hlbHBndWlkZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVscGd1aWRlL2hlbHBndWlkZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYS5kZWZhdWx0LWxpbmsge1xyXG4gICAgY29sb3I6ICM0NTZCRDE7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpguideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-helpguide',
                templateUrl: './helpguide.component.html',
                styleUrls: ['./helpguide.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/left-side/left-side.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/left-side/left-side.component.ts ***!
  \********************************************************/
/*! exports provided: LeftSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSideComponent", function() { return LeftSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/entrust.service */ "./src/app/entrust.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function LeftSideComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.UserName));
} }
const _c0 = function () { return ["/"]; };
class LeftSideComponent {
    constructor(router, activatedRoute, es) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.es = es;
        const uid = localStorage.getItem("tempid");
        this.UserName = localStorage.getItem("tempname");
        if (this.UserName == null) {
            this.UserName = '';
        }
        if (!uid) {
            this.es.getprofile().subscribe(data => {
                //console.log(data);
                const response = JSON.parse(data);
                this.UserName = response.UserName;
                if (this.UserName == null) {
                    this.UserName = '';
                }
                const id = response.UserId.split('-');
                //console.log(id[2]);
                localStorage.setItem("tempid", id[4]);
                localStorage.setItem("tempname", this.UserName);
            });
        }
        if (this.UserName == null) {
            this.UserName = '';
        }
    }
}
LeftSideComponent.ɵfac = function LeftSideComponent_Factory(t) { return new (t || LeftSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__["EntrustService"])); };
LeftSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftSideComponent, selectors: [["app-left-side"]], decls: 34, vars: 3, consts: [[1, "navbar", "header-navbar", "pcoded-header"], [1, "navbar-wrapper"], [1, "navbar-logo"], ["id", "mobile-collapse", "href", "#!", 1, "mobile-menu", "waves-effect", "waves-light"], [1, "feather", "icon-toggle-right"], ["href", " "], ["src", "./assets/images/logo-1.png", "alt", "Theme-Logo", 1, "img-fluid"], [1, "mobile-options", "waves-effect", "waves-light"], [1, "feather", "icon-more-horizontal"], [1, "navbar-container", "container-fluid"], [1, "nav-left", 2, "margin", "2px"], [1, "p-t-b-0", 2, "line-height", "22px", "padding-left", "20px"], [1, "txt-white"], [1, "header-text"], [1, "header-text-second-row"], [1, "nav-right"], [2, "padding", "9px 5px"], ["href", "https://www.entrust.com/contact/support", "target", "_blank", 1, "support1", 2, "margin-top", "9px"], [1, "icon"], [1, "user-profile", "header-notification"], [1, "dropdown-primary", "dropdown"], ["data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "fa", "fa-user"], [4, "ngIf"], [1, "fas", "fa-caret-down"], ["data-dropdown-in", "fadeIn", "data-dropdown-out", "fadeOut", 1, "show-notification", "profile-notification", "dropdown-menu"], [3, "routerLink"]], template: function LeftSideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "font", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " CERTIFICATE SERVICES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "font", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Connect for Microsoft Azure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, LeftSideComponent_span_28_Template, 3, 3, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Account Configuration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.UserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: [".header-navbar[_ngcontent-%COMP%]   .navbar-wrapper[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size:18px; color:#fff;\n  }\n.header-navbar[_ngcontent-%COMP%]   .navbar-wrapper[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px; margin-right:10px;\n  }\n.icon[_ngcontent-%COMP%] {\n    font-weight: bold;\n    }\n.icon[_ngcontent-%COMP%]::before {\n    display: inline-block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    font-family: 'Font Awesome 5 Pro';\n    content: \"\\f82d\";\n    font-weight: 900;\n    color: #fff;\n    font-size: 20px;\n    position: absolute;\n    top: 50%;\n    left: -20px;\n    transform: translate(0, -50%);\n    }\n\n.support1[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  right: 0 !important;\n  padding-left: 6px !important;\n}\n.p-t-b-0[_ngcontent-%COMP%] {\n  padding-top: 9px !important;\n  padding-bottom: 0px !important;\n}\n.header-navbar[_ngcontent-%COMP%]   .navbar-wrapper[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n \n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVmdC1zaWRlL2xlZnQtc2lkZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxpQ0FBaUM7QUFDakM7RUFDRSxjQUFjLEVBQUUsVUFBVTtFQUMxQjtBQUNBO0VBQ0EsZUFBZSxFQUFFLGlCQUFpQjtFQUNsQztBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCO0FBQ0E7SUFDQSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBRVgsNkJBQTZCO0lBQzdCO0FBRUosaUNBQWlDO0FBQ2pDO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWZ0LXNpZGUvbGVmdC1zaWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIGFkZCB0aGlzIHN0eWVzIGNvbW1vbiBzdHlsZXMgKi9cbi5oZWFkZXItbmF2YmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWNvbnRhaW5lciAubmF2LXJpZ2h0IGkge1xuICBmb250LXNpemU6MThweDsgY29sb3I6I2ZmZjtcbiAgfVxuICAuaGVhZGVyLW5hdmJhciAubmF2YmFyLXdyYXBwZXIgLm5hdmJhci1jb250YWluZXIgLm5hdi1yaWdodCAudXNlci1wcm9maWxlIGkge1xuICBmb250LXNpemU6IDIwcHg7IG1hcmdpbi1yaWdodDoxMHB4O1xuICB9XG4gIC5pY29uIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmljb246OmJlZm9yZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IFBybyc7XG4gICAgY29udGVudDogXCJcXGY4MmRcIjtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogLTIwcHg7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIH1cblxuLyogYWRkIHRoaXMgc3R5ZXMgY29tbW9uIHN0eWxlcyAqL1xuLnN1cHBvcnQxIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNnB4ICFpbXBvcnRhbnQ7XG59XG4ucC10LWItMCB7XG4gIHBhZGRpbmctdG9wOiA5cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLmhlYWRlci1uYXZiYXIgLm5hdmJhci13cmFwcGVyIC5uYXZiYXItY29udGFpbmVyIC5uYXYtcmlnaHQgbGkge1xuIFxuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftSideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-left-side',
                templateUrl: './left-side.component.html',
                styleUrls: ['./left-side.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_entrust_service__WEBPACK_IMPORTED_MODULE_2__["EntrustService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class LoginComponent {
    constructor(fb, router, http) {
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ngOnInit() {
        const body = { grant_type: "client_credentials",
            client_id: "03205453-72f0-4e22-b899-3525e52d0111",
            client_secret: "y3RbYQ_WePEyQP3i_hA~pes1nECpC~2q24",
            scope: "https://vault.azure.net/.default",
        };
        this.http.post("https://login.microsoftonline.com/697f4bde-c123-4f9a-9090-ad61341e3aac/oauth2/v2.0/token", body).subscribe(data => {
            console.log(data);
        }, error => {
            console.log("Error", error);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 39, vars: 1, consts: [[1, "login_bg"], [1, "login-block"], [1, "container"], [1, "row"], [1, "col-sm-12"], ["name", "loginForm", 1, "md-float-material", "form-material", 3, "formGroup"], [1, "auth-box", "card", "p-20", "p-b-0", "m-t-60"], [1, "card-block"], [1, "row", "m-b-30"], [1, "col-md-12"], [1, "text-center"], ["src", "assets/images/logo.png", "alt", "logo.png"], [1, "form-group", "form-primary"], ["type", "text", "name", "email", "required", "", 1, "form-control"], [1, "form-bar"], [1, "float-label"], ["type", "password", "name", "password", "required", "", 1, "form-control"], [1, "row", "m-t-25", "text-left"], [1, "col-12"], [1, "checkbox-fade", "fade-in-primary", "d-"], ["type", "checkbox", "value", ""], [1, "cr"], [1, "cr-icon", "icofont", "icofont-ui-check", "txt-primary", 2, "color", "#ac34b1"], [1, "text-inverse"], [1, "row", "m-t-30"], ["href", "/ssl-tls", 1, "btn", "btn-primary", "btn-md", "btn-block", "waves-effect", "waves-light", "text-center", "m-b-30", 2, "background-color", "#570e5a", "border", "1px solid #570e5a"], [1, "col-md-12", "text-center"], ["href", "auth-reset-password.html", 1, "text-right", "f-w-600"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], styles: ["body {\n  background-image: none;\n  background-size: cover;\n  background-image: url(/assets/images/bg.png) ;\n} \n.login-block[_ngcontent-%COMP%]   .auth-box[_ngcontent-%COMP%] {\n  width: 390px;\n  margin: 20px auto 0 auto;\n     max-width: 450px;\n} \na[_ngcontent-%COMP%]:hover {\n  color:#77187b\n} \n.m-t-60[_ngcontent-%COMP%] {\n  margin-top: 7\n\n\n\n\n\n  0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qiw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7S0FDckIsZ0JBQWdCO0FBQ3JCO0FBQ0E7RUFDRTtBQUNGO0FBRUE7RUFDRTs7Ozs7O2dCQU1jO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG46Om5nLWRlZXAgYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9iZy5wbmcpIDtcbn0gXG4ubG9naW4tYmxvY2sgLmF1dGgtYm94IHtcbiAgd2lkdGg6IDM5MHB4O1xuICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XG4gICAgIG1heC13aWR0aDogNDUwcHg7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6Izc3MTg3YlxufVxuXG4ubS10LTYwIHtcbiAgbWFyZ2luLXRvcDogN1xuXG5cblxuXG5cbiAgMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/success/success.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/success/success.component.ts ***!
  \****************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_entrust_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/entrust.service */ "./src/app/entrust.service.ts");



class SuccessComponent {
    constructor(entrustservice) {
        this.entrustservice = entrustservice;
    }
    ngOnInit() {
        this.productype = localStorage.getItem('productype');
    }
}
SuccessComponent.ɵfac = function SuccessComponent_Factory(t) { return new (t || SuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entrust_service__WEBPACK_IMPORTED_MODULE_1__["EntrustService"])); };
SuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessComponent, selectors: [["app-success"]], decls: 8, vars: 1, consts: [[1, "col-12"], ["role", "alert", 1, "d-flex", "justify-content-center", "mt-3", "mb-4", "pt-4", "pb-4", "alert", "alert-success"], [1, "ml-3", "mr-3"], [1, "fas", "fa-check-circle", "fa-4x", "text-success", "mt-3", "mb-3"], [2, "position", "relative", "min-width", "540px"], [1, "vertical-middle-align"], [1, "m-b-30", "f-20", "m-t-20"]], template: function SuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your ", ctx.productype, " certificate has been generated.");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1Y2Nlc3Mvc3VjY2Vzcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-success',
                templateUrl: './success.component.html',
                styleUrls: ['./success.component.css']
            }]
    }], function () { return [{ type: src_app_entrust_service__WEBPACK_IMPORTED_MODULE_1__["EntrustService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: true,
    //azureserver :'https://pdevtestapimanagement.azure-api.net/',
    //apiserver :'https://pdevtestapimanagement.azure-api.net/',
    //apiserver :'https://entrustdatacardtapiang.azurewebsites.net/',
    apiserver: 'http://localhost:60944/',
    // baseUrl:localStorage.getItem('baseUrl'),
    KENDO_UI_LICENSE: "/kendo-ui-license.txt"
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\EntrustData\EntrustDataAngular\EntrustData\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map