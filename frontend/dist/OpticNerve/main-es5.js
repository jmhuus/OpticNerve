function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _capture_capture_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./capture/capture.component */
    "./src/app/capture/capture.component.ts");

    var routes = [{
      path: '',
      component: _capture_capture_component__WEBPACK_IMPORTED_MODULE_2__["CaptureComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'OpticNerve';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _capture_capture_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./capture/capture.component */
    "./src/app/capture/capture.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _capture_capture_component__WEBPACK_IMPORTED_MODULE_4__["CaptureComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _capture_capture_component__WEBPACK_IMPORTED_MODULE_4__["CaptureComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/capture/capture.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/capture/capture.component.ts ***!
    \**********************************************/

  /*! exports provided: CaptureComponent */

  /***/
  function srcAppCaptureCaptureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CaptureComponent", function () {
      return CaptureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./device */
    "./src/app/capture/device.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var CaptureComponent = /*#__PURE__*/function () {
      function CaptureComponent(cdRef) {
        var _this = this;

        _classCallCheck(this, CaptureComponent);

        this.cdRef = cdRef; // Retrieve ipcRenderer for electron

        this.ipc = window["ipc"]; // Asynchronous response

        this.ipc.on('rendererListener', function (event, arg) {
          // TODO(jordanhuus): add context to response request and data
          console.log(arg["image-path"]);
          _this.device.image_latest_path = arg["image-path"];

          _this.cdRef.detectChanges();
        });
      }

      _createClass(CaptureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.device = new _device__WEBPACK_IMPORTED_MODULE_1__["Device"]('NIKON', 'D3100', 1234, 4321, 'A', 1.8, 123, 400);
        } // Set CSS class for the chosen device shooting mode (M, A, S, P)

      }, {
        key: "getModeClass",
        value: function getModeClass(mode) {
          if (mode == this.device.shooting_mode) {
            return "shooting_mode_highlighted";
          } else {
            return "shooting_mode_normal";
          }
        } // Capture a new image

      }, {
        key: "captureImage",
        value: function captureImage() {
          console.log('this.constructor.name');
          console.log(this.constructor.name); // Asynchronous send

          this.ipc.send("main", {
            "command": "captureImage_server"
          }); // this.device.image_latest_path = "assets/images/latest_2020_07_27_14_40_48.jpg";
        }
      }]);

      return CaptureComponent;
    }();

    CaptureComponent.ɵfac = function CaptureComponent_Factory(t) {
      return new (t || CaptureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    CaptureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CaptureComponent,
      selectors: [["app-capture"]],
      decls: 231,
      vars: 12,
      consts: [["id", "Custom_Size__1"], ["id", "Group_1"], ["id", "capture-image-button", 3, "click"], ["id", "Group_18"], [1, "Rectangle_1_k"], ["id", "Rectangle_1_k", "rx", "10", "ry", "10", "x", "0", "y", "0", "width", "162", "height", "36"], ["id", "Open_File_Browser"], ["id", "Group_19"], [1, "Rectangle_1_n"], ["id", "Rectangle_1_n", "rx", "10", "ry", "10", "x", "0", "y", "0", "width", "162", "height", "36"], ["id", "Open_Image"], ["viewBox", "0 0 1 931", 1, "Line_1"], ["id", "Line_1", "d", "M 0 0 L 0 931"], ["id", "Aperture"], ["id", "Format"], ["id", "JPEG"], ["id", "W_H"], ["id", "VendorID"], ["id", "Aperture_v"], ["id", "Lens"], ["id", "Aperture_x"], ["id", "Aperture_y"], ["id", "Manufacturer"], ["id", "Aperture_"], ["id", "Model"], ["id", "NIKON_D3100"], ["id", "ID1234"], ["id", "NIKON_D3100_"], ["id", "ID1920_1080"], ["id", "Aperture_ba"], ["id", "Aperture_bb"], ["id", "Aperture_bc"], ["id", "Group_2"], [1, "Rectangle_5"], ["alt", "", 3, "src"], ["id", "Group_3"], [1, "Rectangle_5_bf"], ["id", "Rectangle_5_bf", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "140", "height", "94"], ["viewBox", "0 0 35 32", 1, "Polygon_1_bg"], ["id", "Polygon_1_bg", "d", "M 17.5 0 L 35 32 L 0 32 Z"], [1, "Ellipse_1_bh"], ["id", "Ellipse_1_bh", "rx", "12.5", "ry", "12.5", "cx", "12.5", "cy", "12.5"], [1, "Rectangle_3_bi"], ["id", "Rectangle_3_bi", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "37", "height", "37"], ["id", "Group_4"], [1, "Rectangle_5_bk"], ["id", "Rectangle_5_bk", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "140", "height", "94"], ["viewBox", "0 0 35 31", 1, "Polygon_1_bl"], ["id", "Polygon_1_bl", "d", "M 17.5 0 L 35 31 L 0 31 Z"], [1, "Ellipse_1_bm"], ["id", "Ellipse_1_bm", "rx", "12.5", "ry", "12.5", "cx", "12.5", "cy", "12.5"], [1, "Rectangle_3_bn"], ["id", "Rectangle_3_bn", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "37", "height", "37"], ["id", "Group_5"], [1, "Rectangle_5_bp"], ["id", "Rectangle_5_bp", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "140", "height", "94"], ["viewBox", "0 0 35 31", 1, "Polygon_1_bq"], ["id", "Polygon_1_bq", "d", "M 17.5 0 L 35 31 L 0 31 Z"], [1, "Ellipse_1_br"], ["id", "Ellipse_1_br", "rx", "12.5", "ry", "12.5", "cx", "12.5", "cy", "12.5"], [1, "Rectangle_3_bs"], ["id", "Rectangle_3_bs", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "37", "height", "37"], ["id", "Live_View"], ["id", "Last_Image"], ["id", "f18"], ["id", "Shutter"], ["id", "ID10s"], ["id", "ISO"], ["id", "ID400"], ["viewBox", "0 0 359 1", 1, "Line_8"], ["id", "Line_8", "d", "M 0 0 L 359 0"], ["id", "M", 3, "ngClass"], ["id", "A", 3, "ngClass"], ["id", "S", 3, "ngClass"], ["id", "P", 3, "ngClass"], ["id", "Group_9"], [1, "Rectangle_5_b"], ["id", "Rectangle_5_b", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "140", "height", "94"], ["viewBox", "0 0 35 32", 1, "Polygon_1_b"], ["id", "Polygon_1_b", "d", "M 17.5 0 L 35 32 L 0 32 Z"], [1, "Ellipse_1_b"], ["id", "Ellipse_1_b", "rx", "12.5", "ry", "12.5", "cx", "12.5", "cy", "12.5"], [1, "Rectangle_3_b"], ["id", "Rectangle_3_b", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "37", "height", "37"], ["id", "Group_7"], [1, "Rectangle_5_cb"], ["id", "Rectangle_5_cb", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "140", "height", "95"], ["viewBox", "0 0 35 31", 1, "Polygon_1_cc"], ["id", "Polygon_1_cc", "d", "M 17.5 0 L 35 31 L 0 31 Z"], [1, "Ellipse_1_cd"], ["id", "Ellipse_1_cd", "rx", "12.5", "ry", "12.5", "cx", "12.5", "cy", "12.5"], [1, "Rectangle_3_ce"], ["id", "Rectangle_3_ce", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "37", "height", "36"], ["id", "Group_8"], [1, "Rectangle_5_cg"], ["id", "Rectangle_5_cg", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "140", "height", "94"], ["viewBox", "0 0 35 32", 1, "Polygon_1_ch"], ["id", "Polygon_1_ch", "d", "M 17.5 0 L 35 32 L 0 32 Z"], [1, "Ellipse_1_ci"], ["id", "Ellipse_1_ci", "rx", "12.5", "ry", "12.5", "cx", "12.5", "cy", "12.5"], [1, "Rectangle_3_cj"], ["id", "Rectangle_3_cj", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "37", "height", "37"], [1, "Rectangle_6"], ["id", "Rectangle_6", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "167", "height", "112"], ["id", "Group_15"], [1, "Rectangle_5_cm"], ["id", "Rectangle_5_cm", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "140", "height", "94"], ["viewBox", "0 0 35 32", 1, "Polygon_1_cn"], ["id", "Polygon_1_cn", "d", "M 17.5 0 L 35 32 L 0 32 Z"], [1, "Ellipse_1_co"], ["id", "Ellipse_1_co", "rx", "12.5", "ry", "12.5", "cx", "12.5", "cy", "12.5"], [1, "Rectangle_3_cp"], ["id", "Rectangle_3_cp", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "37", "height", "37"], ["id", "Group_17"], [1, "Rectangle_5_cr"], ["id", "Rectangle_5_cr", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "140", "height", "94"], ["viewBox", "0 0 35 32", 1, "Polygon_1_cs"], ["id", "Polygon_1_cs", "d", "M 17.5 0 L 35 32 L 0 32 Z"], [1, "Ellipse_1_ct"], ["id", "Ellipse_1_ct", "rx", "12.5", "ry", "12.5", "cx", "12.5", "cy", "12.5"], [1, "Rectangle_3_cu"], ["id", "Rectangle_3_cu", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "37", "height", "37"], ["id", "Group_16"], [1, "Rectangle_5_cw"], ["viewBox", "0 0 1082 1", 1, "Line_9"], ["id", "Line_9", "d", "M 0 0 L 1082 0"], [1, "Rectangle_7"], ["id", "Rectangle_7", "rx", "3.5", "ry", "3.5", "x", "0", "y", "0", "width", "223", "height", "7"], [1, "Rectangle_8"], ["id", "Rectangle_8", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "109", "height", "121"], ["id", "Count"], ["id", "Delay"], [1, "Rectangle_9"], ["id", "Rectangle_9", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "77", "height", "31"], [1, "Rectangle_10"], ["id", "Rectangle_10", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "77", "height", "31"], ["id", "Stop_Time"], ["id", "Something"], [1, "Rectangle_11"], ["id", "Rectangle_11", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "77", "height", "31"], [1, "Rectangle_12"], ["id", "Rectangle_12", "rx", "0", "ry", "0", "x", "0", "y", "0", "width", "77", "height", "31"], ["viewBox", "0 0 251 1", 1, "Line_10"], ["id", "Line_10", "d", "M 0 0 L 251 0"], ["viewBox", "0 0 269 1", 1, "Line_11"], ["id", "Line_11", "d", "M 0 0 L 269 0"], ["id", "Group_20"], ["viewBox", "0 0 11 14", 1, "Line_12"], ["id", "Line_12", "d", "M 0 0 L 11 14"], ["viewBox", "0 0 11 14", 1, "Line_13"], ["id", "Line_13", "d", "M 11 0 L 0 14"], ["id", "OpticNerve"], ["viewBox", "0 0 33 24", 1, "Polygon_2"], ["id", "Polygon_2", "d", "M 16.5 0 L 33 24 L 0 24 Z"]],
      template: function CaptureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureComponent_Template_button_click_2_listener() {
            return ctx.captureImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Capture Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Open File Browser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "rect", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Open Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Aperture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Format");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "JPEG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "W, H");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "VendorID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Aperture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Aperture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Aperture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Manufacturer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Aperture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "NIKON D3100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "1234");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "NIKON D3100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "1920, 1080");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Aperture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Aperture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Aperture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "svg", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "rect", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "svg", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "svg", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "ellipse", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "svg", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "rect", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "svg", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "rect", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "svg", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "svg", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "ellipse", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "svg", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "rect", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "svg", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "rect", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "svg", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "svg", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "ellipse", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "svg", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "rect", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Live View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Last Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](114, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Shutter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "ISO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "svg", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "svg", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "rect", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "svg", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "svg", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "ellipse", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "svg", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "rect", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "svg", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "rect", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "svg", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "svg", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "ellipse", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "svg", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "rect", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "svg", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "rect", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "svg", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "path", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "svg", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "ellipse", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "svg", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "rect", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "svg", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "rect", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "svg", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "rect", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "svg", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "path", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "svg", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "ellipse", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "svg", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "rect", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "svg", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "rect", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "svg", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "path", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "svg", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "ellipse", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "svg", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "rect", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "svg", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "svg", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "rect", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "svg", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "rect", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Count");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Delay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "svg", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "rect", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "svg", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "rect", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Stop Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Something\u2026");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "svg", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "rect", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "svg", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "rect", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "svg", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "path", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "svg", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "path", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "svg", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "path", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "svg", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "path", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "OpticNerve");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "svg", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "path", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.device.image_latest_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("f", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](114, 9, ctx.device.aperture, "0.1"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.device.shutter, "s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.device.iso);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getModeClass("M"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getModeClass("A"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getModeClass("S"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getModeClass("P"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.device.image_latest_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
      styles: [".mediaViewInfo[_ngcontent-%COMP%] {\n    --web-view-name: Custom Size \u2013 1;\n    --web-view-id: Custom_Size__1;\n    --web-scale-on-resize: true;\n    --web-enable-deep-linking: true;\n}\n[_ngcontent-%COMP%]:root {\n    --web-view-ids: Custom_Size__1;\n}\n*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    border: none;\n}\n#Custom_Size__1[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(43,37,60,1);\n    overflow: hidden;\n    --web-view-name: Custom Size \u2013 1;\n    --web-view-id: Custom_Size__1;\n    --web-scale-on-resize: true;\n    --web-enable-deep-linking: true;\n}\n#Group_1[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 149px;\n    height: 47px;\n    left: 227px;\n    top: 987px;\n    overflow: visible;\n}\n#capture-image-button[_ngcontent-%COMP%] {\n    height: auto;\n    width: auto;\n    padding: 1em;\n    cursor: pointer;\n}\n#capture-image-button[_ngcontent-%COMP%]:hover {\n  background-color: #555555;\n  color: white;\n}\n#Group_18[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 162px;\n    height: 36px;\n    left: 1551px;\n    top: 715px;\n    overflow: visible;\n}\n#Rectangle_1_k[_ngcontent-%COMP%] {\n    fill: rgba(5,9,13,1);\n}\n.Rectangle_1_k[_ngcontent-%COMP%] {\n    -webkit-filter: drop-shadow(5px 5px 6px rgba(37, 4, 39, 0.514));\n            filter: drop-shadow(5px 5px 6px rgba(37, 4, 39, 0.514));\n    position: absolute;\n    overflow: visible;\n    width: 180px;\n    height: 54px;\n    left: 0px;\n    top: 0px;\n}\n#Open_File_Browser[_ngcontent-%COMP%] {\n    left: 13px;\n    top: 10px;\n    position: absolute;\n    overflow: visible;\n    width: 133px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 15px;\n    color: rgba(255,255,255,1);\n}\n#Group_19[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 162px;\n    height: 36px;\n    left: 1551px;\n    top: 761px;\n    overflow: visible;\n}\n#Rectangle_1_n[_ngcontent-%COMP%] {\n    fill: rgba(5,9,13,1);\n}\n.Rectangle_1_n[_ngcontent-%COMP%] {\n    -webkit-filter: drop-shadow(5px 5px 6px rgba(37, 4, 39, 0.514));\n            filter: drop-shadow(5px 5px 6px rgba(37, 4, 39, 0.514));\n    position: absolute;\n    overflow: visible;\n    width: 180px;\n    height: 54px;\n    left: 0px;\n    top: 0px;\n}\n#Open_Image[_ngcontent-%COMP%] {\n    left: 38px;\n    top: 9px;\n    position: absolute;\n    overflow: visible;\n    width: 88px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 15px;\n    color: rgba(255,255,255,1);\n}\n#Line_1[_ngcontent-%COMP%] {\n    fill: transparent;\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Line_1[_ngcontent-%COMP%] {\n    overflow: visible;\n    position: absolute;\n    width: 1px;\n    height: 931px;\n    left: 655.5px;\n    top: 71.5px;\n    transform: matrix(1,0,0,1,0,0);\n}\n#Aperture[_ngcontent-%COMP%] {\n    left: 124px;\n    top: 816px;\n    position: absolute;\n    overflow: visible;\n    width: 78px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#Format[_ngcontent-%COMP%] {\n    left: 34px;\n    top: 385px;\n    position: absolute;\n    overflow: visible;\n    width: 65px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#JPEG[_ngcontent-%COMP%] {\n    left: 182px;\n    top: 384px;\n    position: absolute;\n    overflow: visible;\n    width: 54px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    color: rgba(255,255,255,1);\n}\n#W_H[_ngcontent-%COMP%] {\n    left: 402px;\n    top: 385px;\n    position: absolute;\n    overflow: visible;\n    width: 44px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#VendorID[_ngcontent-%COMP%] {\n    left: 34px;\n    top: 481px;\n    position: absolute;\n    overflow: visible;\n    width: 83px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#Aperture_v[_ngcontent-%COMP%] {\n    left: 402px;\n    top: 481px;\n    position: absolute;\n    overflow: visible;\n    width: 78px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#Lens[_ngcontent-%COMP%] {\n    left: 34px;\n    top: 417px;\n    position: absolute;\n    overflow: visible;\n    width: 44px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#Aperture_x[_ngcontent-%COMP%] {\n    left: 182px;\n    top: 416px;\n    position: absolute;\n    overflow: visible;\n    width: 84px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    color: rgba(255,255,255,1);\n}\n#Aperture_y[_ngcontent-%COMP%] {\n    left: 402px;\n    top: 417px;\n    position: absolute;\n    overflow: visible;\n    width: 78px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#Manufacturer[_ngcontent-%COMP%] {\n    left: 34px;\n    top: 513px;\n    position: absolute;\n    overflow: visible;\n    width: 120px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#Aperture_[_ngcontent-%COMP%] {\n    left: 402px;\n    top: 513px;\n    position: absolute;\n    overflow: visible;\n    width: 78px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#Model[_ngcontent-%COMP%] {\n    left: 34px;\n    top: 449px;\n    position: absolute;\n    overflow: visible;\n    width: 57px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#NIKON_D3100[_ngcontent-%COMP%] {\n    left: 183px;\n    top: 448px;\n    position: absolute;\n    overflow: visible;\n    width: 131px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    color: rgba(255,255,255,1);\n}\n#ID1234[_ngcontent-%COMP%] {\n    left: 183px;\n    top: 480px;\n    position: absolute;\n    overflow: visible;\n    width: 45px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    color: rgba(255,255,255,1);\n}\n#NIKON_D3100_[_ngcontent-%COMP%] {\n    left: 183px;\n    top: 514px;\n    position: absolute;\n    overflow: visible;\n    width: 131px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    color: rgba(255,255,255,1);\n}\n#ID1920_1080[_ngcontent-%COMP%] {\n    left: 508px;\n    top: 385px;\n    position: absolute;\n    overflow: visible;\n    width: 101px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    color: rgba(255,255,255,1);\n}\n#Aperture_ba[_ngcontent-%COMP%] {\n    left: 402px;\n    top: 449px;\n    position: absolute;\n    overflow: visible;\n    width: 78px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#Aperture_bb[_ngcontent-%COMP%] {\n    left: 34px;\n    top: 545px;\n    position: absolute;\n    overflow: visible;\n    width: 78px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#Aperture_bc[_ngcontent-%COMP%] {\n    left: 402px;\n    top: 545px;\n    position: absolute;\n    overflow: visible;\n    width: 78px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#Group_2[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 929px;\n    height: 578px;\n    left: 784px;\n    top: 116px;\n    overflow: visible;\n}\n.Rectangle_5[_ngcontent-%COMP%] {\n    display: flex;\n    overflow: hidden;\n    width: 929px;\n    height: 578px;\n    left: 0px;\n    top: 0px;\n}\n.Rectangle_5[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    max-height: 100%;\n}\n#Polygon_1[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Polygon_1[_ngcontent-%COMP%] {\n    overflow: hidden;\n    position: absolute;\n    width: 103px;\n    height: 91px;\n    left: 45px;\n    top: 224px;\n    transform: matrix(1,0,0,1,0,0);\n}\n#Ellipse_1[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Ellipse_1[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 74px;\n    height: 75px;\n    left: 470px;\n    top: 105px;\n}\n#Rectangle_3[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_3[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 107px;\n    height: 106px;\n    left: 777px;\n    top: 437px;\n}\n#Group_3[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 140px;\n    height: 94px;\n    left: 728px;\n    top: 850px;\n    overflow: visible;\n}\n#Rectangle_5_bf[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(255,157,25,1);\n    stroke-width: 2px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_5_bf[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 140px;\n    height: 94px;\n    left: 0px;\n    top: 0px;\n}\n#Polygon_1_bg[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(113,113,113,1);\n    stroke-width: 2px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Polygon_1_bg[_ngcontent-%COMP%] {\n    overflow: hidden;\n    position: absolute;\n    width: 35px;\n    height: 32px;\n    left: 15px;\n    top: 29px;\n    transform: matrix(1,0,0,1,0,0);\n}\n#Ellipse_1_bh[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(113,113,113,1);\n    stroke-width: 2px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Ellipse_1_bh[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 25px;\n    height: 25px;\n    left: 63px;\n    top: 15px;\n}\n#Rectangle_3_bi[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(113,113,113,1);\n    stroke-width: 2px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_3_bi[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 37px;\n    height: 37px;\n    left: 88px;\n    top: 46px;\n}\n#Group_4[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 140px;\n    height: 94px;\n    left: 877px;\n    top: 850px;\n    overflow: visible;\n}\n#Rectangle_5_bk[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_5_bk[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 140px;\n    height: 94px;\n    left: 0px;\n    top: 0px;\n}\n#Polygon_1_bl[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Polygon_1_bl[_ngcontent-%COMP%] {\n    overflow: hidden;\n    position: absolute;\n    width: 35px;\n    height: 31px;\n    left: 15px;\n    top: 30px;\n    transform: matrix(1,0,0,1,0,0);\n}\n#Ellipse_1_bm[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Ellipse_1_bm[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 25px;\n    height: 25px;\n    left: 63px;\n    top: 15px;\n}\n#Rectangle_3_bn[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_3_bn[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 37px;\n    height: 37px;\n    left: 88px;\n    top: 46px;\n}\n#Group_5[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 140px;\n    height: 94px;\n    left: 1026px;\n    top: 850px;\n    overflow: visible;\n}\n#Rectangle_5_bp[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_5_bp[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 140px;\n    height: 94px;\n    left: 0px;\n    top: 0px;\n}\n#Polygon_1_bq[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Polygon_1_bq[_ngcontent-%COMP%] {\n    overflow: hidden;\n    position: absolute;\n    width: 35px;\n    height: 31px;\n    left: 15px;\n    top: 29px;\n    transform: matrix(1,0,0,1,0,0);\n}\n#Ellipse_1_br[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Ellipse_1_br[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 25px;\n    height: 25px;\n    left: 63px;\n    top: 15px;\n}\n#Rectangle_3_bs[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_3_bs[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 37px;\n    height: 37px;\n    left: 88px;\n    top: 46px;\n}\n#Live_View[_ngcontent-%COMP%] {\n    left: 287px;\n    top: 64px;\n    position: absolute;\n    overflow: visible;\n    width: 85px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(255,157,25,1);\n}\n#Last_Image[_ngcontent-%COMP%] {\n    left: 1199px;\n    top: 64px;\n    position: absolute;\n    overflow: visible;\n    width: 100px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(255,157,25,1);\n}\n#f18[_ngcontent-%COMP%] {\n    left: 121px;\n    top: 747px;\n    position: absolute;\n    overflow: visible;\n    width: 85px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 50px;\n    color: rgba(255,255,255,1);\n}\n#Shutter[_ngcontent-%COMP%] {\n    left: 274px;\n    top: 816px;\n    position: absolute;\n    overflow: visible;\n    width: 66px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#ID10s[_ngcontent-%COMP%] {\n    left: 259px;\n    top: 747px;\n    position: absolute;\n    overflow: visible;\n    width: 96px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 50px;\n    color: rgba(255,255,255,1);\n}\n#ISO[_ngcontent-%COMP%] {\n    left: 423px;\n    top: 816px;\n    position: absolute;\n    overflow: visible;\n    width: 34px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#ID400[_ngcontent-%COMP%] {\n    left: 397px;\n    top: 747px;\n    position: absolute;\n    overflow: visible;\n    width: 84px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 50px;\n    color: rgba(255,255,255,1);\n}\n#Line_8[_ngcontent-%COMP%] {\n    fill: transparent;\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Line_8[_ngcontent-%COMP%] {\n    overflow: visible;\n    position: absolute;\n    width: 359px;\n    height: 1px;\n    left: 121.5px;\n    top: 720.5px;\n    transform: matrix(1,0,0,1,0,0);\n}\n.shooting_mode_highlighted[_ngcontent-%COMP%] {\n    top: 600px;\n    width: 53px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 60px;\n    color: rgba(255,255,255,1);\n}\n.shooting_mode_normal[_ngcontent-%COMP%] {\n    width: 14px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#M[_ngcontent-%COMP%] {\n    left: 147px;\n    top: 662px;\n    position: absolute;\n    overflow: visible;\n}\n#A[_ngcontent-%COMP%] {\n    left: 244px;\n    top: 662px;\n    position: absolute;\n    overflow: visible;\n}\n#S[_ngcontent-%COMP%] {\n    left: 341px;\n    top: 662px;\n    position: absolute;\n    overflow: visible;\n}\n#P[_ngcontent-%COMP%] {\n    left: 438px;\n    top: 662px;\n    position: absolute;\n    overflow: visible;\n}\n#Group_9[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 140px;\n    height: 94px;\n    left: 1175px;\n    top: 850px;\n    overflow: visible;\n}\n#Rectangle_5_b[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_5_b[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 140px;\n    height: 94px;\n    left: 0px;\n    top: 0px;\n}\n#Polygon_1_b[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Polygon_1_b[_ngcontent-%COMP%] {\n    overflow: hidden;\n    position: absolute;\n    width: 35px;\n    height: 32px;\n    left: 15px;\n    top: 29px;\n    transform: matrix(1,0,0,1,0,0);\n}\n#Ellipse_1_b[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Ellipse_1_b[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 25px;\n    height: 25px;\n    left: 63px;\n    top: 15px;\n}\n#Rectangle_3_b[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_3_b[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 37px;\n    height: 37px;\n    left: 88px;\n    top: 46px;\n}\n#Group_7[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 140px;\n    height: 95px;\n    left: 1324px;\n    top: 850px;\n    overflow: visible;\n}\n#Rectangle_5_cb[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_5_cb[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 140px;\n    height: 95px;\n    left: 0px;\n    top: 0px;\n}\n#Polygon_1_cc[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Polygon_1_cc[_ngcontent-%COMP%] {\n    overflow: hidden;\n    position: absolute;\n    width: 35px;\n    height: 31px;\n    left: 15px;\n    top: 29px;\n    transform: matrix(1,0,0,1,0,0);\n}\n#Ellipse_1_cd[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Ellipse_1_cd[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 25px;\n    height: 25px;\n    left: 63px;\n    top: 15px;\n}\n#Rectangle_3_ce[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_3_ce[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 37px;\n    height: 36px;\n    left: 88px;\n    top: 46px;\n}\n#Group_8[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 140px;\n    height: 94px;\n    left: 1473px;\n    top: 850px;\n    overflow: visible;\n}\n#Rectangle_5_cg[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_5_cg[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 140px;\n    height: 94px;\n    left: 0px;\n    top: 0px;\n}\n#Polygon_1_ch[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Polygon_1_ch[_ngcontent-%COMP%] {\n    overflow: hidden;\n    position: absolute;\n    width: 35px;\n    height: 32px;\n    left: 15px;\n    top: 29px;\n    transform: matrix(1,0,0,1,0,0);\n}\n#Ellipse_1_ci[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Ellipse_1_ci[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 25px;\n    height: 25px;\n    left: 63px;\n    top: 15px;\n}\n#Rectangle_3_cj[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_3_cj[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 37px;\n    height: 37px;\n    left: 88px;\n    top: 46px;\n}\n#Rectangle_6[_ngcontent-%COMP%] {\n    fill: transparent;\n}\n.Rectangle_6[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 167px;\n    height: 112px;\n    left: 1603px;\n    top: 816px;\n}\n#Group_15[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 140px;\n    height: 94px;\n    left: 1621px;\n    top: 850px;\n    overflow: visible;\n}\n#Rectangle_5_cm[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_5_cm[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 140px;\n    height: 94px;\n    left: 0px;\n    top: 0px;\n}\n#Polygon_1_cn[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Polygon_1_cn[_ngcontent-%COMP%] {\n    overflow: hidden;\n    position: absolute;\n    width: 35px;\n    height: 32px;\n    left: 15px;\n    top: 29px;\n    transform: matrix(1,0,0,1,0,0);\n}\n#Ellipse_1_co[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Ellipse_1_co[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 25px;\n    height: 25px;\n    left: 63px;\n    top: 15px;\n}\n#Rectangle_3_cp[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_3_cp[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 37px;\n    height: 37px;\n    left: 88px;\n    top: 46px;\n}\n#Group_17[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 140px;\n    height: 94px;\n    left: 1770px;\n    top: 850px;\n    overflow: visible;\n}\n#Rectangle_5_cr[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_5_cr[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 140px;\n    height: 94px;\n    left: 0px;\n    top: 0px;\n}\n#Polygon_1_cs[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Polygon_1_cs[_ngcontent-%COMP%] {\n    overflow: hidden;\n    position: absolute;\n    width: 35px;\n    height: 32px;\n    left: 15px;\n    top: 29px;\n    transform: matrix(1,0,0,1,0,0);\n}\n#Ellipse_1_ct[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Ellipse_1_ct[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 25px;\n    height: 25px;\n    left: 63px;\n    top: 15px;\n}\n#Rectangle_3_cu[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_3_cu[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 37px;\n    height: 37px;\n    left: 88px;\n    top: 46px;\n}\n#Group_16[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 350px;\n    height: 214px;\n    left: 160px;\n    top: 116px;\n    overflow: visible;\n}\n.Rectangle_5_cw[_ngcontent-%COMP%] {\n    display: flex;\n    overflow: hidden;\n    width: 350px;\n    height: 214px;\n    left: 0px;\n    top: 0px;\n}\n.Rectangle_5_cw[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    max-height: 100%;\n}\n#Polygon_1_cx[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Polygon_1_cx[_ngcontent-%COMP%] {\n    overflow: hidden;\n    position: absolute;\n    width: 103px;\n    height: 91px;\n    left: 65px;\n    top: 57px;\n    transform: matrix(1,0,0,1,0,0);\n}\n#Ellipse_1_cy[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Ellipse_1_cy[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 74px;\n    height: 75px;\n    left: 153px;\n    top: 31px;\n}\n#Rectangle_3_cz[_ngcontent-%COMP%] {\n    fill: rgba(29,29,29,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_3_cz[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 107px;\n    height: 106px;\n    left: 177px;\n    top: 77px;\n}\n#Line_9[_ngcontent-%COMP%] {\n    fill: transparent;\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Line_9[_ngcontent-%COMP%] {\n    overflow: visible;\n    position: absolute;\n    width: 1082px;\n    height: 1px;\n    left: 728.5px;\n    top: 963.5px;\n    transform: matrix(1,0,0,1,0,0);\n}\n#Rectangle_7[_ngcontent-%COMP%] {\n    fill: rgba(255,157,25,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_7[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 223px;\n    height: 7px;\n    left: 729px;\n    top: 960px;\n}\n#Rectangle_8[_ngcontent-%COMP%] {\n    fill: rgba(43,37,60,1);\n}\n.Rectangle_8[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 109px;\n    height: 121px;\n    left: 1811px;\n    top: 839px;\n}\n#Count[_ngcontent-%COMP%] {\n    left: 122px;\n    top: 885px;\n    position: absolute;\n    overflow: visible;\n    width: 55px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#Delay[_ngcontent-%COMP%] {\n    left: 122px;\n    top: 921px;\n    position: absolute;\n    overflow: visible;\n    width: 51px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#Rectangle_9[_ngcontent-%COMP%] {\n    fill: rgba(105,105,105,0.282);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_9[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 77px;\n    height: 31px;\n    left: 205px;\n    top: 882px;\n}\n#Rectangle_10[_ngcontent-%COMP%] {\n    fill: rgba(105,105,105,0.282);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_10[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 77px;\n    height: 31px;\n    left: 205px;\n    top: 918px;\n}\n#Stop_Time[_ngcontent-%COMP%] {\n    left: 323px;\n    top: 885px;\n    position: absolute;\n    overflow: visible;\n    width: 93px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#Something[_ngcontent-%COMP%] {\n    left: 323px;\n    top: 921px;\n    position: absolute;\n    overflow: visible;\n    width: 118px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    color: rgba(112,112,112,1);\n}\n#Rectangle_11[_ngcontent-%COMP%] {\n    fill: rgba(105,105,105,0.282);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_11[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 77px;\n    height: 31px;\n    left: 473px;\n    top: 882px;\n}\n#Rectangle_12[_ngcontent-%COMP%] {\n    fill: rgba(105,105,105,0.282);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Rectangle_12[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: visible;\n    width: 77px;\n    height: 31px;\n    left: 473px;\n    top: 918px;\n}\n#Line_10[_ngcontent-%COMP%] {\n    fill: transparent;\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Line_10[_ngcontent-%COMP%] {\n    overflow: visible;\n    position: absolute;\n    width: 251px;\n    height: 1px;\n    left: 34.5px;\n    top: 584.5px;\n    transform: matrix(1,0,0,1,0,0);\n}\n#Line_11[_ngcontent-%COMP%] {\n    fill: transparent;\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Line_11[_ngcontent-%COMP%] {\n    overflow: visible;\n    position: absolute;\n    width: 269px;\n    height: 1px;\n    left: 351.5px;\n    top: 584.5px;\n    transform: matrix(1,0,0,1,0,0);\n}\n#Group_20[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 22px;\n    height: 14px;\n    left: 302.5px;\n    top: 578.5px;\n    overflow: visible;\n}\n#Line_12[_ngcontent-%COMP%] {\n    fill: transparent;\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Line_12[_ngcontent-%COMP%] {\n    overflow: visible;\n    position: absolute;\n    width: 11.786px;\n    height: 14.618px;\n    left: 0px;\n    top: 0px;\n    transform: matrix(1,0,0,1,0,0);\n}\n#Line_13[_ngcontent-%COMP%] {\n    fill: transparent;\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Line_13[_ngcontent-%COMP%] {\n    overflow: visible;\n    position: absolute;\n    width: 11.786px;\n    height: 14.618px;\n    left: 11px;\n    top: 0px;\n    transform: matrix(1,0,0,1,0,0);\n}\n#OpticNerve[_ngcontent-%COMP%] {\n    left: 28px;\n    top: 23px;\n    position: absolute;\n    overflow: visible;\n    width: 108px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Helvetica Neue;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    color: rgba(255,255,255,1);\n}\n#Polygon_2[_ngcontent-%COMP%] {\n    fill: rgba(255,255,255,1);\n    stroke: rgba(112,112,112,1);\n    stroke-width: 1px;\n    stroke-linejoin: miter;\n    stroke-linecap: butt;\n    stroke-miterlimit: 4;\n    shape-rendering: auto;\n}\n.Polygon_2[_ngcontent-%COMP%] {\n    overflow: hidden;\n    position: absolute;\n    width: 33px;\n    height: 24px;\n    left: 149px;\n    top: 23px;\n    transform: matrix(1,0,0,1,0,0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FwdHVyZS9jYXB0dXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSwrREFBdUQ7WUFBdkQsdURBQXVEO0lBQ3ZELGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtBQUNaO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZ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YixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsUUFBUTtJQUNSLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFFBQVE7SUFDUiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULDhCQUE4QjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2NhcHR1cmUvY2FwdHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lZGlhVmlld0luZm8ge1xuICAgIC0td2ViLXZpZXctbmFtZTogQ3VzdG9tIFNpemUg4oCTIDE7XG4gICAgLS13ZWItdmlldy1pZDogQ3VzdG9tX1NpemVfXzE7XG4gICAgLS13ZWItc2NhbGUtb24tcmVzaXplOiB0cnVlO1xuICAgIC0td2ViLWVuYWJsZS1kZWVwLWxpbmtpbmc6IHRydWU7XG59XG46cm9vdCB7XG4gICAgLS13ZWItdmlldy1pZHM6IEN1c3RvbV9TaXplX18xO1xufVxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4jQ3VzdG9tX1NpemVfXzEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywzNyw2MCwxKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC0td2ViLXZpZXctbmFtZTogQ3VzdG9tIFNpemUg4oCTIDE7XG4gICAgLS13ZWItdmlldy1pZDogQ3VzdG9tX1NpemVfXzE7XG4gICAgLS13ZWItc2NhbGUtb24tcmVzaXplOiB0cnVlO1xuICAgIC0td2ViLWVuYWJsZS1kZWVwLWxpbmtpbmc6IHRydWU7XG59XG4jR3JvdXBfMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNDlweDtcbiAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgbGVmdDogMjI3cHg7XG4gICAgdG9wOiA5ODdweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbiNjYXB0dXJlLWltYWdlLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jY2FwdHVyZS1pbWFnZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NTU1O1xuICBjb2xvcjogd2hpdGU7XG59XG4jR3JvdXBfMTgge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTYycHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGxlZnQ6IDE1NTFweDtcbiAgICB0b3A6IDcxNXB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuI1JlY3RhbmdsZV8xX2sge1xuICAgIGZpbGw6IHJnYmEoNSw5LDEzLDEpO1xufVxuLlJlY3RhbmdsZV8xX2sge1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCA2cHggcmdiYSgzNywgNCwgMzksIDAuNTE0KSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDU0cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xufVxuI09wZW5fRmlsZV9Ccm93c2VyIHtcbiAgICBsZWZ0OiAxM3B4O1xuICAgIHRvcDogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDEzM3B4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbn1cbiNHcm91cF8xOSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNjJweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbGVmdDogMTU1MXB4O1xuICAgIHRvcDogNzYxcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4jUmVjdGFuZ2xlXzFfbiB7XG4gICAgZmlsbDogcmdiYSg1LDksMTMsMSk7XG59XG4uUmVjdGFuZ2xlXzFfbiB7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4IDZweCByZ2JhKDM3LCA0LCAzOSwgMC41MTQpKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogNTRweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG59XG4jT3Blbl9JbWFnZSB7XG4gICAgbGVmdDogMzhweDtcbiAgICB0b3A6IDlweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDg4cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xufVxuI0xpbmVfMSB7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgc3Ryb2tlOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLkxpbmVfMSB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiA5MzFweDtcbiAgICBsZWZ0OiA2NTUuNXB4O1xuICAgIHRvcDogNzEuNXB4O1xuICAgIHRyYW5zZm9ybTogbWF0cml4KDEsMCwwLDEsMCwwKTtcbn1cbiNBcGVydHVyZSB7XG4gICAgbGVmdDogMTI0cHg7XG4gICAgdG9wOiA4MTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDc4cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG59XG4jRm9ybWF0IHtcbiAgICBsZWZ0OiAzNHB4O1xuICAgIHRvcDogMzg1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xufVxuI0pQRUcge1xuICAgIGxlZnQ6IDE4MnB4O1xuICAgIHRvcDogMzg0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiA1NHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbn1cbiNXX0gge1xuICAgIGxlZnQ6IDQwMnB4O1xuICAgIHRvcDogMzg1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiA0NHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xufVxuI1ZlbmRvcklEIHtcbiAgICBsZWZ0OiAzNHB4O1xuICAgIHRvcDogNDgxcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiA4M3B4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xufVxuI0FwZXJ0dXJlX3Yge1xuICAgIGxlZnQ6IDQwMnB4O1xuICAgIHRvcDogNDgxcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiA3OHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xufVxuI0xlbnMge1xuICAgIGxlZnQ6IDM0cHg7XG4gICAgdG9wOiA0MTdweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG59XG4jQXBlcnR1cmVfeCB7XG4gICAgbGVmdDogMTgycHg7XG4gICAgdG9wOiA0MTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDg0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xufVxuI0FwZXJ0dXJlX3kge1xuICAgIGxlZnQ6IDQwMnB4O1xuICAgIHRvcDogNDE3cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiA3OHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xufVxuI01hbnVmYWN0dXJlciB7XG4gICAgbGVmdDogMzRweDtcbiAgICB0b3A6IDUxM3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG59XG4jQXBlcnR1cmVfIHtcbiAgICBsZWZ0OiA0MDJweDtcbiAgICB0b3A6IDUxM3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogNzhweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogcmdiYSgxMTIsMTEyLDExMiwxKTtcbn1cbiNNb2RlbCB7XG4gICAgbGVmdDogMzRweDtcbiAgICB0b3A6IDQ0OXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogNTdweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogcmdiYSgxMTIsMTEyLDExMiwxKTtcbn1cbiNOSUtPTl9EMzEwMCB7XG4gICAgbGVmdDogMTgzcHg7XG4gICAgdG9wOiA0NDhweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDEzMXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbn1cbiNJRDEyMzQge1xuICAgIGxlZnQ6IDE4M3B4O1xuICAgIHRvcDogNDgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbn1cbiNOSUtPTl9EMzEwMF8ge1xuICAgIGxlZnQ6IDE4M3B4O1xuICAgIHRvcDogNTE0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAxMzFweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG59XG4jSUQxOTIwXzEwODAge1xuICAgIGxlZnQ6IDUwOHB4O1xuICAgIHRvcDogMzg1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAxMDFweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG59XG4jQXBlcnR1cmVfYmEge1xuICAgIGxlZnQ6IDQwMnB4O1xuICAgIHRvcDogNDQ5cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiA3OHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xufVxuI0FwZXJ0dXJlX2JiIHtcbiAgICBsZWZ0OiAzNHB4O1xuICAgIHRvcDogNTQ1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiA3OHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xufVxuI0FwZXJ0dXJlX2JjIHtcbiAgICBsZWZ0OiA0MDJweDtcbiAgICB0b3A6IDU0NXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogNzhweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogcmdiYSgxMTIsMTEyLDExMiwxKTtcbn1cbiNHcm91cF8yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDkyOXB4O1xuICAgIGhlaWdodDogNTc4cHg7XG4gICAgbGVmdDogNzg0cHg7XG4gICAgdG9wOiAxMTZweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi5SZWN0YW5nbGVfNSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA5MjlweDtcbiAgICBoZWlnaHQ6IDU3OHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbn1cbi5SZWN0YW5nbGVfNSBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuI1BvbHlnb25fMSB7XG4gICAgZmlsbDogcmdiYSgyOSwyOSwyOSwxKTtcbiAgICBzdHJva2U6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uUG9seWdvbl8xIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAzcHg7XG4gICAgaGVpZ2h0OiA5MXB4O1xuICAgIGxlZnQ6IDQ1cHg7XG4gICAgdG9wOiAyMjRweDtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgxLDAsMCwxLDAsMCk7XG59XG4jRWxsaXBzZV8xIHtcbiAgICBmaWxsOiByZ2JhKDI5LDI5LDI5LDEpO1xuICAgIHN0cm9rZTogcmdiYSgxMTIsMTEyLDExMiwxKTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1saW5lY2FwOiBidXR0O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbn1cbi5FbGxpcHNlXzEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogNzRweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgbGVmdDogNDcwcHg7XG4gICAgdG9wOiAxMDVweDtcbn1cbiNSZWN0YW5nbGVfMyB7XG4gICAgZmlsbDogcmdiYSgyOSwyOSwyOSwxKTtcbiAgICBzdHJva2U6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uUmVjdGFuZ2xlXzMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogMTA3cHg7XG4gICAgaGVpZ2h0OiAxMDZweDtcbiAgICBsZWZ0OiA3NzdweDtcbiAgICB0b3A6IDQzN3B4O1xufVxuI0dyb3VwXzMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiA5NHB4O1xuICAgIGxlZnQ6IDcyOHB4O1xuICAgIHRvcDogODUwcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4jUmVjdGFuZ2xlXzVfYmYge1xuICAgIGZpbGw6IHJnYmEoMjksMjksMjksMSk7XG4gICAgc3Ryb2tlOiByZ2JhKDI1NSwxNTcsMjUsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uUmVjdGFuZ2xlXzVfYmYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiA5NHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbn1cbiNQb2x5Z29uXzFfYmcge1xuICAgIGZpbGw6IHJnYmEoMjksMjksMjksMSk7XG4gICAgc3Ryb2tlOiByZ2JhKDExMywxMTMsMTEzLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLlBvbHlnb25fMV9iZyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgdG9wOiAyOXB4O1xuICAgIHRyYW5zZm9ybTogbWF0cml4KDEsMCwwLDEsMCwwKTtcbn1cbiNFbGxpcHNlXzFfYmgge1xuICAgIGZpbGw6IHJnYmEoMjksMjksMjksMSk7XG4gICAgc3Ryb2tlOiByZ2JhKDExMywxMTMsMTEzLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLkVsbGlwc2VfMV9iaCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBsZWZ0OiA2M3B4O1xuICAgIHRvcDogMTVweDtcbn1cbiNSZWN0YW5nbGVfM19iaSB7XG4gICAgZmlsbDogcmdiYSgyOSwyOSwyOSwxKTtcbiAgICBzdHJva2U6IHJnYmEoMTEzLDExMywxMTMsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uUmVjdGFuZ2xlXzNfYmkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogMzdweDtcbiAgICBoZWlnaHQ6IDM3cHg7XG4gICAgbGVmdDogODhweDtcbiAgICB0b3A6IDQ2cHg7XG59XG4jR3JvdXBfNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDk0cHg7XG4gICAgbGVmdDogODc3cHg7XG4gICAgdG9wOiA4NTBweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbiNSZWN0YW5nbGVfNV9iayB7XG4gICAgZmlsbDogcmdiYSgyOSwyOSwyOSwxKTtcbiAgICBzdHJva2U6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uUmVjdGFuZ2xlXzVfYmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiA5NHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbn1cbiNQb2x5Z29uXzFfYmwge1xuICAgIGZpbGw6IHJnYmEoMjksMjksMjksMSk7XG4gICAgc3Ryb2tlOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLlBvbHlnb25fMV9ibCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzMXB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgdG9wOiAzMHB4O1xuICAgIHRyYW5zZm9ybTogbWF0cml4KDEsMCwwLDEsMCwwKTtcbn1cbiNFbGxpcHNlXzFfYm0ge1xuICAgIGZpbGw6IHJnYmEoMjksMjksMjksMSk7XG4gICAgc3Ryb2tlOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLkVsbGlwc2VfMV9ibSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBsZWZ0OiA2M3B4O1xuICAgIHRvcDogMTVweDtcbn1cbiNSZWN0YW5nbGVfM19ibiB7XG4gICAgZmlsbDogcmdiYSgyOSwyOSwyOSwxKTtcbiAgICBzdHJva2U6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uUmVjdGFuZ2xlXzNfYm4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogMzdweDtcbiAgICBoZWlnaHQ6IDM3cHg7XG4gICAgbGVmdDogODhweDtcbiAgICB0b3A6IDQ2cHg7XG59XG4jR3JvdXBfNSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDk0cHg7XG4gICAgbGVmdDogMTAyNnB4O1xuICAgIHRvcDogODUwcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4jUmVjdGFuZ2xlXzVfYnAge1xuICAgIGZpbGw6IHJnYmEoMjksMjksMjksMSk7XG4gICAgc3Ryb2tlOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLlJlY3RhbmdsZV81X2JwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogOTRweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG59XG4jUG9seWdvbl8xX2JxIHtcbiAgICBmaWxsOiByZ2JhKDI5LDI5LDI5LDEpO1xuICAgIHN0cm9rZTogcmdiYSgxMTIsMTEyLDExMiwxKTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1saW5lY2FwOiBidXR0O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbn1cbi5Qb2x5Z29uXzFfYnEge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzFweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHRvcDogMjlweDtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgxLDAsMCwxLDAsMCk7XG59XG4jRWxsaXBzZV8xX2JyIHtcbiAgICBmaWxsOiByZ2JhKDI5LDI5LDI5LDEpO1xuICAgIHN0cm9rZTogcmdiYSgxMTIsMTEyLDExMiwxKTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1saW5lY2FwOiBidXR0O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbn1cbi5FbGxpcHNlXzFfYnIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgbGVmdDogNjNweDtcbiAgICB0b3A6IDE1cHg7XG59XG4jUmVjdGFuZ2xlXzNfYnMge1xuICAgIGZpbGw6IHJnYmEoMjksMjksMjksMSk7XG4gICAgc3Ryb2tlOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLlJlY3RhbmdsZV8zX2JzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDM3cHg7XG4gICAgaGVpZ2h0OiAzN3B4O1xuICAgIGxlZnQ6IDg4cHg7XG4gICAgdG9wOiA0NnB4O1xufVxuI0xpdmVfVmlldyB7XG4gICAgbGVmdDogMjg3cHg7XG4gICAgdG9wOiA2NHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogODVweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMTU3LDI1LDEpO1xufVxuI0xhc3RfSW1hZ2Uge1xuICAgIGxlZnQ6IDExOTlweDtcbiAgICB0b3A6IDY0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMTU3LDI1LDEpO1xufVxuI2YxOCB7XG4gICAgbGVmdDogMTIxcHg7XG4gICAgdG9wOiA3NDdweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDg1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG59XG4jU2h1dHRlciB7XG4gICAgbGVmdDogMjc0cHg7XG4gICAgdG9wOiA4MTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDY2cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG59XG4jSUQxMHMge1xuICAgIGxlZnQ6IDI1OXB4O1xuICAgIHRvcDogNzQ3cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiA5NnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xufVxuI0lTTyB7XG4gICAgbGVmdDogNDIzcHg7XG4gICAgdG9wOiA4MTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDM0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG59XG4jSUQ0MDAge1xuICAgIGxlZnQ6IDM5N3B4O1xuICAgIHRvcDogNzQ3cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiA4NHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xufVxuI0xpbmVfOCB7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgc3Ryb2tlOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLkxpbmVfOCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNTlweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBsZWZ0OiAxMjEuNXB4O1xuICAgIHRvcDogNzIwLjVweDtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgxLDAsMCwxLDAsMCk7XG59XG4uc2hvb3RpbmdfbW9kZV9oaWdobGlnaHRlZCB7XG4gICAgdG9wOiA2MDBweDtcbiAgICB3aWR0aDogNTNweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbn1cbi5zaG9vdGluZ19tb2RlX25vcm1hbCB7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG59XG4jTSB7XG4gICAgbGVmdDogMTQ3cHg7XG4gICAgdG9wOiA2NjJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4jQSB7XG4gICAgbGVmdDogMjQ0cHg7XG4gICAgdG9wOiA2NjJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4jUyB7XG4gICAgbGVmdDogMzQxcHg7XG4gICAgdG9wOiA2NjJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4jUCB7XG4gICAgbGVmdDogNDM4cHg7XG4gICAgdG9wOiA2NjJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4jR3JvdXBfOSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDk0cHg7XG4gICAgbGVmdDogMTE3NXB4O1xuICAgIHRvcDogODUwcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4jUmVjdGFuZ2xlXzVfYiB7XG4gICAgZmlsbDogcmdiYSgyOSwyOSwyOSwxKTtcbiAgICBzdHJva2U6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uUmVjdGFuZ2xlXzVfYiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDk0cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xufVxuI1BvbHlnb25fMV9iIHtcbiAgICBmaWxsOiByZ2JhKDI5LDI5LDI5LDEpO1xuICAgIHN0cm9rZTogcmdiYSgxMTIsMTEyLDExMiwxKTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1saW5lY2FwOiBidXR0O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbn1cbi5Qb2x5Z29uXzFfYiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgdG9wOiAyOXB4O1xuICAgIHRyYW5zZm9ybTogbWF0cml4KDEsMCwwLDEsMCwwKTtcbn1cbiNFbGxpcHNlXzFfYiB7XG4gICAgZmlsbDogcmdiYSgyOSwyOSwyOSwxKTtcbiAgICBzdHJva2U6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uRWxsaXBzZV8xX2Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgbGVmdDogNjNweDtcbiAgICB0b3A6IDE1cHg7XG59XG4jUmVjdGFuZ2xlXzNfYiB7XG4gICAgZmlsbDogcmdiYSgyOSwyOSwyOSwxKTtcbiAgICBzdHJva2U6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uUmVjdGFuZ2xlXzNfYiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAzN3B4O1xuICAgIGhlaWdodDogMzdweDtcbiAgICBsZWZ0OiA4OHB4O1xuICAgIHRvcDogNDZweDtcbn1cbiNHcm91cF83IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogOTVweDtcbiAgICBsZWZ0OiAxMzI0cHg7XG4gICAgdG9wOiA4NTBweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbiNSZWN0YW5nbGVfNV9jYiB7XG4gICAgZmlsbDogcmdiYSgyOSwyOSwyOSwxKTtcbiAgICBzdHJva2U6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uUmVjdGFuZ2xlXzVfY2Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiA5NXB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbn1cbiNQb2x5Z29uXzFfY2Mge1xuICAgIGZpbGw6IHJnYmEoMjksMjksMjksMSk7XG4gICAgc3Ryb2tlOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLlBvbHlnb25fMV9jYyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzMXB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgdG9wOiAyOXB4O1xuICAgIHRyYW5zZm9ybTogbWF0cml4KDEsMCwwLDEsMCwwKTtcbn1cbiNFbGxpcHNlXzFfY2Qge1xuICAgIGZpbGw6IHJnYmEoMjksMjksMjksMSk7XG4gICAgc3Ryb2tlOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLkVsbGlwc2VfMV9jZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBsZWZ0OiA2M3B4O1xuICAgIHRvcDogMTVweDtcbn1cbiNSZWN0YW5nbGVfM19jZSB7XG4gICAgZmlsbDogcmdiYSgyOSwyOSwyOSwxKTtcbiAgICBzdHJva2U6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uUmVjdGFuZ2xlXzNfY2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogMzdweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbGVmdDogODhweDtcbiAgICB0b3A6IDQ2cHg7XG59XG4jR3JvdXBfOCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDk0cHg7XG4gICAgbGVmdDogMTQ3M3B4O1xuICAgIHRvcDogODUwcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4jUmVjdGFuZ2xlXzVfY2cge1xuICAgIGZpbGw6IHJnYmEoMjksMjksMjksMSk7XG4gICAgc3Ryb2tlOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLlJlY3RhbmdsZV81X2NnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogOTRweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG59XG4jUG9seWdvbl8xX2NoIHtcbiAgICBmaWxsOiByZ2JhKDI5LDI5LDI5LDEpO1xuICAgIHN0cm9rZTogcmdiYSgxMTIsMTEyLDExMiwxKTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1saW5lY2FwOiBidXR0O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbn1cbi5Qb2x5Z29uXzFfY2gge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHRvcDogMjlweDtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgxLDAsMCwxLDAsMCk7XG59XG4jRWxsaXBzZV8xX2NpIHtcbiAgICBmaWxsOiByZ2JhKDI5LDI5LDI5LDEpO1xuICAgIHN0cm9rZTogcmdiYSgxMTIsMTEyLDExMiwxKTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1saW5lY2FwOiBidXR0O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbn1cbi5FbGxpcHNlXzFfY2kge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgbGVmdDogNjNweDtcbiAgICB0b3A6IDE1cHg7XG59XG4jUmVjdGFuZ2xlXzNfY2oge1xuICAgIGZpbGw6IHJnYmEoMjksMjksMjksMSk7XG4gICAgc3Ryb2tlOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLlJlY3RhbmdsZV8zX2NqIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDM3cHg7XG4gICAgaGVpZ2h0OiAzN3B4O1xuICAgIGxlZnQ6IDg4cHg7XG4gICAgdG9wOiA0NnB4O1xufVxuI1JlY3RhbmdsZV82IHtcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcbn1cbi5SZWN0YW5nbGVfNiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAxNjdweDtcbiAgICBoZWlnaHQ6IDExMnB4O1xuICAgIGxlZnQ6IDE2MDNweDtcbiAgICB0b3A6IDgxNnB4O1xufVxuI0dyb3VwXzE1IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogOTRweDtcbiAgICBsZWZ0OiAxNjIxcHg7XG4gICAgdG9wOiA4NTBweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbiNSZWN0YW5nbGVfNV9jbSB7XG4gICAgZmlsbDogcmdiYSgyOSwyOSwyOSwxKTtcbiAgICBzdHJva2U6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uUmVjdGFuZ2xlXzVfY20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiA5NHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbn1cbiNQb2x5Z29uXzFfY24ge1xuICAgIGZpbGw6IHJnYmEoMjksMjksMjksMSk7XG4gICAgc3Ryb2tlOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLlBvbHlnb25fMV9jbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgdG9wOiAyOXB4O1xuICAgIHRyYW5zZm9ybTogbWF0cml4KDEsMCwwLDEsMCwwKTtcbn1cbiNFbGxpcHNlXzFfY28ge1xuICAgIGZpbGw6IHJnYmEoMjksMjksMjksMSk7XG4gICAgc3Ryb2tlOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLkVsbGlwc2VfMV9jbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBsZWZ0OiA2M3B4O1xuICAgIHRvcDogMTVweDtcbn1cbiNSZWN0YW5nbGVfM19jcCB7XG4gICAgZmlsbDogcmdiYSgyOSwyOSwyOSwxKTtcbiAgICBzdHJva2U6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uUmVjdGFuZ2xlXzNfY3Age1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogMzdweDtcbiAgICBoZWlnaHQ6IDM3cHg7XG4gICAgbGVmdDogODhweDtcbiAgICB0b3A6IDQ2cHg7XG59XG4jR3JvdXBfMTcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiA5NHB4O1xuICAgIGxlZnQ6IDE3NzBweDtcbiAgICB0b3A6IDg1MHB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuI1JlY3RhbmdsZV81X2NyIHtcbiAgICBmaWxsOiByZ2JhKDI5LDI5LDI5LDEpO1xuICAgIHN0cm9rZTogcmdiYSgxMTIsMTEyLDExMiwxKTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1saW5lY2FwOiBidXR0O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbn1cbi5SZWN0YW5nbGVfNV9jciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDk0cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xufVxuI1BvbHlnb25fMV9jcyB7XG4gICAgZmlsbDogcmdiYSgyOSwyOSwyOSwxKTtcbiAgICBzdHJva2U6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uUG9seWdvbl8xX2NzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbGVmdDogMTVweDtcbiAgICB0b3A6IDI5cHg7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgoMSwwLDAsMSwwLDApO1xufVxuI0VsbGlwc2VfMV9jdCB7XG4gICAgZmlsbDogcmdiYSgyOSwyOSwyOSwxKTtcbiAgICBzdHJva2U6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uRWxsaXBzZV8xX2N0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGxlZnQ6IDYzcHg7XG4gICAgdG9wOiAxNXB4O1xufVxuI1JlY3RhbmdsZV8zX2N1IHtcbiAgICBmaWxsOiByZ2JhKDI5LDI5LDI5LDEpO1xuICAgIHN0cm9rZTogcmdiYSgxMTIsMTEyLDExMiwxKTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1saW5lY2FwOiBidXR0O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbn1cbi5SZWN0YW5nbGVfM19jdSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAzN3B4O1xuICAgIGhlaWdodDogMzdweDtcbiAgICBsZWZ0OiA4OHB4O1xuICAgIHRvcDogNDZweDtcbn1cbiNHcm91cF8xNiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDIxNHB4O1xuICAgIGxlZnQ6IDE2MHB4O1xuICAgIHRvcDogMTE2cHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4uUmVjdGFuZ2xlXzVfY3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAyMTRweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG59XG4uUmVjdGFuZ2xlXzVfY3cgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbn1cbiNQb2x5Z29uXzFfY3gge1xuICAgIGZpbGw6IHJnYmEoMjksMjksMjksMSk7XG4gICAgc3Ryb2tlOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLlBvbHlnb25fMV9jeCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwM3B4O1xuICAgIGhlaWdodDogOTFweDtcbiAgICBsZWZ0OiA2NXB4O1xuICAgIHRvcDogNTdweDtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgxLDAsMCwxLDAsMCk7XG59XG4jRWxsaXBzZV8xX2N5IHtcbiAgICBmaWxsOiByZ2JhKDI5LDI5LDI5LDEpO1xuICAgIHN0cm9rZTogcmdiYSgxMTIsMTEyLDExMiwxKTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1saW5lY2FwOiBidXR0O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbn1cbi5FbGxpcHNlXzFfY3kge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogNzRweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgbGVmdDogMTUzcHg7XG4gICAgdG9wOiAzMXB4O1xufVxuI1JlY3RhbmdsZV8zX2N6IHtcbiAgICBmaWxsOiByZ2JhKDI5LDI5LDI5LDEpO1xuICAgIHN0cm9rZTogcmdiYSgxMTIsMTEyLDExMiwxKTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1saW5lY2FwOiBidXR0O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbn1cbi5SZWN0YW5nbGVfM19jeiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAxMDdweDtcbiAgICBoZWlnaHQ6IDEwNnB4O1xuICAgIGxlZnQ6IDE3N3B4O1xuICAgIHRvcDogNzdweDtcbn1cbiNMaW5lXzkge1xuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgIHN0cm9rZTogcmdiYSgxMTIsMTEyLDExMiwxKTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1saW5lY2FwOiBidXR0O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbn1cbi5MaW5lXzkge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTA4MnB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIGxlZnQ6IDcyOC41cHg7XG4gICAgdG9wOiA5NjMuNXB4O1xuICAgIHRyYW5zZm9ybTogbWF0cml4KDEsMCwwLDEsMCwwKTtcbn1cbiNSZWN0YW5nbGVfNyB7XG4gICAgZmlsbDogcmdiYSgyNTUsMTU3LDI1LDEpO1xuICAgIHN0cm9rZTogcmdiYSgxMTIsMTEyLDExMiwxKTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1saW5lY2FwOiBidXR0O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbn1cbi5SZWN0YW5nbGVfNyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAyMjNweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBsZWZ0OiA3MjlweDtcbiAgICB0b3A6IDk2MHB4O1xufVxuI1JlY3RhbmdsZV84IHtcbiAgICBmaWxsOiByZ2JhKDQzLDM3LDYwLDEpO1xufVxuLlJlY3RhbmdsZV84IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDEwOXB4O1xuICAgIGhlaWdodDogMTIxcHg7XG4gICAgbGVmdDogMTgxMXB4O1xuICAgIHRvcDogODM5cHg7XG59XG4jQ291bnQge1xuICAgIGxlZnQ6IDEyMnB4O1xuICAgIHRvcDogODg1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xufVxuI0RlbGF5IHtcbiAgICBsZWZ0OiAxMjJweDtcbiAgICB0b3A6IDkyMXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogNTFweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogcmdiYSgxMTIsMTEyLDExMiwxKTtcbn1cbiNSZWN0YW5nbGVfOSB7XG4gICAgZmlsbDogcmdiYSgxMDUsMTA1LDEwNSwwLjI4Mik7XG4gICAgc3Ryb2tlOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLlJlY3RhbmdsZV85IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDc3cHg7XG4gICAgaGVpZ2h0OiAzMXB4O1xuICAgIGxlZnQ6IDIwNXB4O1xuICAgIHRvcDogODgycHg7XG59XG4jUmVjdGFuZ2xlXzEwIHtcbiAgICBmaWxsOiByZ2JhKDEwNSwxMDUsMTA1LDAuMjgyKTtcbiAgICBzdHJva2U6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uUmVjdGFuZ2xlXzEwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDc3cHg7XG4gICAgaGVpZ2h0OiAzMXB4O1xuICAgIGxlZnQ6IDIwNXB4O1xuICAgIHRvcDogOTE4cHg7XG59XG4jU3RvcF9UaW1lIHtcbiAgICBsZWZ0OiAzMjNweDtcbiAgICB0b3A6IDg4NXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogOTNweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogcmdiYSgxMTIsMTEyLDExMiwxKTtcbn1cbiNTb21ldGhpbmcge1xuICAgIGxlZnQ6IDMyM3B4O1xuICAgIHRvcDogOTIxcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAxMThweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogcmdiYSgxMTIsMTEyLDExMiwxKTtcbn1cbiNSZWN0YW5nbGVfMTEge1xuICAgIGZpbGw6IHJnYmEoMTA1LDEwNSwxMDUsMC4yODIpO1xuICAgIHN0cm9rZTogcmdiYSgxMTIsMTEyLDExMiwxKTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1saW5lY2FwOiBidXR0O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbn1cbi5SZWN0YW5nbGVfMTEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogNzdweDtcbiAgICBoZWlnaHQ6IDMxcHg7XG4gICAgbGVmdDogNDczcHg7XG4gICAgdG9wOiA4ODJweDtcbn1cbiNSZWN0YW5nbGVfMTIge1xuICAgIGZpbGw6IHJnYmEoMTA1LDEwNSwxMDUsMC4yODIpO1xuICAgIHN0cm9rZTogcmdiYSgxMTIsMTEyLDExMiwxKTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1saW5lY2FwOiBidXR0O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbn1cbi5SZWN0YW5nbGVfMTIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogNzdweDtcbiAgICBoZWlnaHQ6IDMxcHg7XG4gICAgbGVmdDogNDczcHg7XG4gICAgdG9wOiA5MThweDtcbn1cbiNMaW5lXzEwIHtcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICBzdHJva2U6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uTGluZV8xMCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyNTFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBsZWZ0OiAzNC41cHg7XG4gICAgdG9wOiA1ODQuNXB4O1xuICAgIHRyYW5zZm9ybTogbWF0cml4KDEsMCwwLDEsMCwwKTtcbn1cbiNMaW5lXzExIHtcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICBzdHJva2U6IHJnYmEoMTEyLDExMiwxMTIsMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogNDtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG59XG4uTGluZV8xMSB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyNjlweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBsZWZ0OiAzNTEuNXB4O1xuICAgIHRvcDogNTg0LjVweDtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgxLDAsMCwxLDAsMCk7XG59XG4jR3JvdXBfMjAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgbGVmdDogMzAyLjVweDtcbiAgICB0b3A6IDU3OC41cHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4jTGluZV8xMiB7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgc3Ryb2tlOiByZ2JhKDExMiwxMTIsMTEyLDEpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgIHN0cm9rZS1saW5lam9pbjogbWl0ZXI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xufVxuLkxpbmVfMTIge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTEuNzg2cHg7XG4gICAgaGVpZ2h0OiAxNC42MThweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgoMSwwLDAsMSwwLDApO1xufVxuI0xpbmVfMTMge1xuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgIHN0cm9rZTogcmdiYSgxMTIsMTEyLDExMiwxKTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1saW5lY2FwOiBidXR0O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbn1cbi5MaW5lXzEzIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDExLjc4NnB4O1xuICAgIGhlaWdodDogMTQuNjE4cHg7XG4gICAgbGVmdDogMTFweDtcbiAgICB0b3A6IDBweDtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgxLDAsMCwxLDAsMCk7XG59XG4jT3B0aWNOZXJ2ZSB7XG4gICAgbGVmdDogMjhweDtcbiAgICB0b3A6IDIzcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAxMDhweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG59XG4jUG9seWdvbl8yIHtcbiAgICBmaWxsOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgIHN0cm9rZTogcmdiYSgxMTIsMTEyLDExMiwxKTtcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1saW5lY2FwOiBidXR0O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bztcbn1cbi5Qb2x5Z29uXzIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzM3B4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBsZWZ0OiAxNDlweDtcbiAgICB0b3A6IDIzcHg7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgoMSwwLDAsMSwwLDApO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaptureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-capture',
          templateUrl: './capture.component.html',
          styleUrls: ['./capture.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/capture/device.ts":
  /*!***********************************!*\
    !*** ./src/app/capture/device.ts ***!
    \***********************************/

  /*! exports provided: Device */

  /***/
  function srcAppCaptureDeviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Device", function () {
      return Device;
    });

    var Device = /*#__PURE__*/function () {
      function Device(manufacturer, model, iProduct, iVendor, shooting_mode, aperture, shutter, iso) {
        _classCallCheck(this, Device);

        this.manufacturer = manufacturer;
        this.model = model;
        this.iProduct = iProduct;
        this.iVendor = iVendor;
        this.shooting_mode = shooting_mode;
        this.aperture = aperture;
        this.shutter = shutter;
        this.iso = iso;
        this.image_latest_path = "assets/images/milky_way_image_pending.jpg";
      }
      /*
      Set the perferred shooting mode
      M -> manual mode       A -> aperture priority
      S -> shutter priority  P -> programmed
      */


      _createClass(Device, [{
        key: "setShootingMode",
        value: function setShootingMode(mode) {
          var modes = ['M', 'A', 'S', 'P'];

          if (modes.includes(mode)) {
            this.shooting_mode = mode;
          }
        }
      }]);

      return Device;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/jordanhuus/Documents/computer_science/OpticNerve/frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map