"use strict";
(self["webpackChunkdemo_application"] = self["webpackChunkdemo_application"] || []).push([["main"],{

/***/ 106:
/*!*************************************************************!*\
  !*** ./projects/demo-application/src/app/common.helpers.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lotsOfValuesTypeAhead: () => (/* binding */ lotsOfValuesTypeAhead),
/* harmony export */   testEmptyFilterTypeahead: () => (/* binding */ testEmptyFilterTypeahead)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5074);


const testEmptyFilterTypeahead = text => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)([{
  value: '-a',
  label: ' A'
}, {
  value: '-b',
  label: ' B'
}, {
  value: '-c',
  label: ' C'
}]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(values => {
  const filtered = values.filter(value => !!value.label && value.label.includes(text));
  if (filtered.length === 0) {
    return [];
  }
  return filtered;
}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(300));
const randomValueArray = [...new Set(Array.from({
  length: 40
}, () => Math.floor(Math.random() * 40)).map(num => ({
  value: `${num}`,
  label: `${num}`
})))];
const lotsOfValuesTypeAhead = text => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(randomValueArray).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(values => {
  const filtered = values.filter(value => {
    if (text.length > 0) {
      return !!value.label && value.label.includes(text);
    }
    return true;
  });
  if (filtered.length === 0) {
    return [];
  }
  return filtered;
}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(300));

/***/ }),

/***/ 1989:
/*!*************************************************************************************************!*\
  !*** ./projects/demo-application/src/app/components/theme-settings/theme-settings.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeSettingsComponent: () => (/* binding */ ThemeSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 6755);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 211);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 9902);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 5255);















const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.key;
function ThemeSettingsComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const preset_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", preset_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](preset_r1.label);
  }
}
function ThemeSettingsComponent_For_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ThemeSettingsComponent_For_27_Conditional_3_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const field_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r3.lightOverrides[field_r3.key], $event) || (ctx_r3.lightOverrides[field_r3.key] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ThemeSettingsComponent_For_27_Conditional_3_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.lightOverrides[field_r3.key]);
  }
}
function ThemeSettingsComponent_For_27_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ThemeSettingsComponent_For_27_Conditional_4_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const field_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r3.lightOverrides[field_r3.key], $event) || (ctx_r3.lightOverrides[field_r3.key] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ThemeSettingsComponent_For_27_Conditional_4_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.lightOverrides[field_r3.key]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", field_r3.placeholder);
  }
}
function ThemeSettingsComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 2)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ThemeSettingsComponent_For_27_Conditional_3_Template, 1, 1, "input", 10)(4, ThemeSettingsComponent_For_27_Conditional_4_Template, 1, 2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](field_r3.isColor ? 3 : 4);
  }
}
function ThemeSettingsComponent_For_33_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ThemeSettingsComponent_For_33_Conditional_3_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r3.darkOverrides[field_r7.key], $event) || (ctx_r3.darkOverrides[field_r7.key] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ThemeSettingsComponent_For_33_Conditional_3_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.darkOverrides[field_r7.key]);
  }
}
function ThemeSettingsComponent_For_33_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ThemeSettingsComponent_For_33_Conditional_4_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r3.darkOverrides[field_r7.key], $event) || (ctx_r3.darkOverrides[field_r7.key] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ThemeSettingsComponent_For_33_Conditional_4_Template_input_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.darkOverrides[field_r7.key]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", field_r7.placeholder);
  }
}
function ThemeSettingsComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 2)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ThemeSettingsComponent_For_33_Conditional_3_Template, 1, 1, "input", 10)(4, ThemeSettingsComponent_For_33_Conditional_4_Template, 1, 2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](field_r7.isColor ? 3 : 4);
  }
}
const hexToRgb = hex => {
  const normalized = hex.replace('#', '').trim();
  const value = normalized.length === 3 ? normalized.split('').map(char => char + char).join('') : normalized;
  if (value.length !== 6) {
    return null;
  }
  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);
  return Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b) ? null : {
    r,
    g,
    b
  };
};
const rgbaFromHex = (hex, alpha) => {
  const rgb = hexToRgb(hex);
  if (!rgb) {
    return hex;
  }
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
};
const buildOverrides = (primaryHex, textHex, surfaceHex, headerTextHex, clearButtonBg, clearButtonText) => ({
  inputBg: rgbaFromHex(primaryHex, 0.08),
  inputShadow: `0 0 0 1px ${rgbaFromHex(primaryHex, 0.35)}`,
  inputHoverBg: rgbaFromHex(primaryHex, 0.12),
  inputHoverShadow: `0 0 0 1px ${rgbaFromHex(primaryHex, 0.55)}`,
  inputFocusShadow: `0 0 0 2px ${rgbaFromHex(primaryHex, 0.35)}`,
  inputText: textHex,
  inputPlaceholder: textHex,
  addIcon: textHex,
  presetTrigger: textHex,
  countDivider: `linear-gradient(180deg, ${rgbaFromHex(primaryHex, 0.1)}, ${rgbaFromHex(primaryHex, 0.7)}, ${rgbaFromHex(primaryHex, 0.1)})`,
  countBg: rgbaFromHex(primaryHex, 0.16),
  countText: textHex,
  scrollbarThumb: rgbaFromHex(primaryHex, 0.35),
  presetRowBg: rgbaFromHex(primaryHex, 0.08),
  modalSurface: surfaceHex,
  modalText: textHex,
  modalHeaderBg: primaryHex,
  modalHeaderText: headerTextHex,
  menuSurface: surfaceHex,
  menuText: textHex,
  menuHoverBg: rgbaFromHex(primaryHex, 0.12),
  clearButtonBg,
  clearButtonText
});
class ThemeSettingsComponent {
  themeConfigUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
  themeMode = 'auto';
  themePresetId = 'material-indigo-pink';
  themeFields = [{
    key: 'inputBg',
    label: 'Input background',
    placeholder: 'rgba(46, 72, 144, 0.08)'
  }, {
    key: 'inputShadow',
    label: 'Input shadow',
    placeholder: '0 0 0 1px rgba(46, 72, 144, 0.35)'
  }, {
    key: 'inputHoverBg',
    label: 'Input hover background',
    placeholder: 'rgba(46, 72, 144, 0.12)'
  }, {
    key: 'inputHoverShadow',
    label: 'Input hover shadow',
    placeholder: '0 0 0 1px rgba(46, 72, 144, 0.55)'
  }, {
    key: 'inputFocusShadow',
    label: 'Input focus shadow',
    placeholder: '0 0 0 2px rgba(70, 110, 200, 0.35)'
  }, {
    key: 'inputText',
    label: 'Input text',
    placeholder: '#1c2b46',
    isColor: true
  }, {
    key: 'inputPlaceholder',
    label: 'Input placeholder',
    placeholder: '#1c2b46',
    isColor: true
  }, {
    key: 'addIcon',
    label: 'Add icon',
    placeholder: '#1c2b46',
    isColor: true
  }, {
    key: 'presetTrigger',
    label: 'Preset trigger',
    placeholder: '#1c2b46',
    isColor: true
  }, {
    key: 'countDivider',
    label: 'Count divider',
    placeholder: 'linear-gradient(...)'
  }, {
    key: 'countBg',
    label: 'Count background',
    placeholder: 'rgba(46, 72, 144, 0.16)'
  }, {
    key: 'countText',
    label: 'Count text',
    placeholder: '#1c2b46',
    isColor: true
  }, {
    key: 'scrollbarThumb',
    label: 'Scrollbar thumb',
    placeholder: 'rgba(46, 72, 144, 0.35)'
  }, {
    key: 'presetRowBg',
    label: 'Preset row background',
    placeholder: 'rgba(46, 72, 144, 0.08)'
  }, {
    key: 'modalSurface',
    label: 'Modal surface',
    placeholder: '#ffffff',
    isColor: true
  }, {
    key: 'modalText',
    label: 'Modal text',
    placeholder: '#1c2b46',
    isColor: true
  }, {
    key: 'modalHeaderBg',
    label: 'Modal header background',
    placeholder: '#3f51b5',
    isColor: true
  }, {
    key: 'modalHeaderText',
    label: 'Modal header text',
    placeholder: '#ffffff',
    isColor: true
  }, {
    key: 'menuSurface',
    label: 'Menu surface',
    placeholder: '#ffffff',
    isColor: true
  }, {
    key: 'menuText',
    label: 'Menu text',
    placeholder: '#1c2b46',
    isColor: true
  }, {
    key: 'menuHoverBg',
    label: 'Menu hover background',
    placeholder: 'rgba(46, 72, 144, 0.08)'
  }, {
    key: 'clearButtonBg',
    label: 'Clear button background',
    placeholder: '#e91e63',
    isColor: true
  }, {
    key: 'clearButtonText',
    label: 'Clear button text',
    placeholder: '#ffffff',
    isColor: true
  }, {
    key: 'modalActionPrimaryBg',
    label: 'Modal action primary background',
    placeholder: '#3f51b5',
    isColor: true
  }, {
    key: 'modalActionPrimaryText',
    label: 'Modal action primary text',
    placeholder: '#ffffff',
    isColor: true
  }, {
    key: 'modalActionSecondaryBg',
    label: 'Modal action secondary background',
    placeholder: 'transparent'
  }, {
    key: 'modalActionSecondaryText',
    label: 'Modal action secondary text',
    placeholder: '#1c2b46',
    isColor: true
  }, {
    key: 'modalActionWarnBg',
    label: 'Modal action warn background',
    placeholder: '#f44336',
    isColor: true
  }, {
    key: 'modalActionWarnText',
    label: 'Modal action warn text',
    placeholder: '#ffffff',
    isColor: true
  }, {
    key: 'modalActionBorder',
    label: 'Modal action border',
    placeholder: 'rgba(28, 43, 70, 0.2)'
  }, {
    key: 'modalInputFocusOutline',
    label: 'Modal input focus outline',
    placeholder: '#3f51b5',
    isColor: true
  }, {
    key: 'modalInputFocusLabel',
    label: 'Modal input focus label',
    placeholder: '#3f51b5',
    isColor: true
  }, {
    key: 'modalInputCaret',
    label: 'Modal input caret',
    placeholder: '#3f51b5',
    isColor: true
  }, {
    key: 'chipSelectedBg',
    label: 'Chip selected background',
    placeholder: 'rgba(63, 81, 181, 0.12)'
  }, {
    key: 'chipSelectedText',
    label: 'Chip selected text',
    placeholder: '#1c2b46',
    isColor: true
  }];
  themePresets = [{
    id: 'material-indigo-pink',
    label: 'Material Indigo/Pink (Light) + Blue Gray/Amber (Dark)',
    light: {
      ...buildOverrides('#3f51b5', '#1c2b46', '#ffffff', '#ffffff', '#e91e63', '#ffffff'),
      modalActionPrimaryBg: '#3f51b5',
      modalActionPrimaryText: '#ffffff',
      modalActionSecondaryBg: 'transparent',
      modalActionSecondaryText: '#1c2b46',
      modalActionWarnBg: '#f44336',
      modalActionWarnText: '#ffffff',
      modalActionBorder: 'rgba(28, 43, 70, 0.2)',
      modalInputFocusOutline: '#3f51b5',
      modalInputFocusLabel: '#3f51b5',
      modalInputCaret: '#3f51b5',
      chipSelectedBg: 'rgba(63, 81, 181, 0.12)',
      chipSelectedText: '#1c2b46'
    },
    dark: {
      ...buildOverrides('#607d8b', '#e2e8f0', '#111827', '#e2e8f0', '#f59e0b', '#111827'),
      modalActionPrimaryBg: '#1f2937',
      modalActionPrimaryText: '#e2e8f0',
      modalActionSecondaryBg: 'transparent',
      modalActionSecondaryText: '#e2e8f0',
      modalActionWarnBg: '#f97316',
      modalActionWarnText: '#111827',
      modalActionBorder: 'rgba(226, 232, 240, 0.25)',
      modalInputFocusOutline: '#93c5fd',
      modalInputFocusLabel: '#93c5fd',
      modalInputCaret: '#93c5fd',
      chipSelectedBg: 'rgba(148, 163, 184, 0.2)',
      chipSelectedText: '#e2e8f0'
    }
  }, {
    id: 'material-teal-amber',
    label: 'Material Teal/Amber (Light) + Blue Gray/Amber (Dark)',
    light: {
      ...buildOverrides('#009688', '#0f172a', '#ffffff', '#ffffff', '#ffc107', '#111827'),
      modalActionPrimaryBg: '#009688',
      modalActionPrimaryText: '#ffffff',
      modalActionSecondaryBg: 'transparent',
      modalActionSecondaryText: '#0f172a',
      modalActionWarnBg: '#ef4444',
      modalActionWarnText: '#ffffff',
      modalActionBorder: 'rgba(15, 23, 42, 0.2)',
      modalInputFocusOutline: '#009688',
      modalInputFocusLabel: '#009688',
      modalInputCaret: '#009688',
      chipSelectedBg: 'rgba(0, 150, 136, 0.12)',
      chipSelectedText: '#0f172a'
    },
    dark: {
      ...buildOverrides('#455a64', '#e2e8f0', '#0f172a', '#e2e8f0', '#f59e0b', '#111827'),
      modalActionPrimaryBg: '#1f2937',
      modalActionPrimaryText: '#e2e8f0',
      modalActionSecondaryBg: 'transparent',
      modalActionSecondaryText: '#e2e8f0',
      modalActionWarnBg: '#f97316',
      modalActionWarnText: '#111827',
      modalActionBorder: 'rgba(226, 232, 240, 0.25)',
      modalInputFocusOutline: '#93c5fd',
      modalInputFocusLabel: '#93c5fd',
      modalInputCaret: '#93c5fd',
      chipSelectedBg: 'rgba(148, 163, 184, 0.2)',
      chipSelectedText: '#e2e8f0'
    }
  }, {
    id: 'material-deep-purple-amber',
    label: 'Material Deep Purple/Amber (Light) + Blue Gray/Amber (Dark)',
    light: {
      ...buildOverrides('#673ab7', '#1e1b4b', '#ffffff', '#ffffff', '#ffc107', '#111827'),
      modalActionPrimaryBg: '#673ab7',
      modalActionPrimaryText: '#ffffff',
      modalActionSecondaryBg: 'transparent',
      modalActionSecondaryText: '#1e1b4b',
      modalActionWarnBg: '#ef4444',
      modalActionWarnText: '#ffffff',
      modalActionBorder: 'rgba(30, 27, 75, 0.2)',
      modalInputFocusOutline: '#673ab7',
      modalInputFocusLabel: '#673ab7',
      modalInputCaret: '#673ab7',
      chipSelectedBg: 'rgba(103, 58, 183, 0.12)',
      chipSelectedText: '#1e1b4b'
    },
    dark: {
      ...buildOverrides('#546e7a', '#e2e8f0', '#0f172a', '#e2e8f0', '#f59e0b', '#111827'),
      modalActionPrimaryBg: '#1f2937',
      modalActionPrimaryText: '#e2e8f0',
      modalActionSecondaryBg: 'transparent',
      modalActionSecondaryText: '#e2e8f0',
      modalActionWarnBg: '#f97316',
      modalActionWarnText: '#111827',
      modalActionBorder: 'rgba(226, 232, 240, 0.25)',
      modalInputFocusOutline: '#93c5fd',
      modalInputFocusLabel: '#93c5fd',
      modalInputCaret: '#93c5fd',
      chipSelectedBg: 'rgba(148, 163, 184, 0.2)',
      chipSelectedText: '#e2e8f0'
    }
  }];
  lightOverrides = {
    inputBg: 'rgba(46, 72, 144, 0.08)',
    inputShadow: '0 0 0 1px rgba(46, 72, 144, 0.35)',
    inputHoverBg: 'rgba(46, 72, 144, 0.12)',
    inputHoverShadow: '0 0 0 1px rgba(46, 72, 144, 0.55)',
    inputFocusShadow: '0 0 0 2px rgba(70, 110, 200, 0.35)',
    inputText: '#1c2b46',
    inputPlaceholder: '#1c2b46',
    addIcon: '#1c2b46',
    presetTrigger: '#1c2b46',
    countDivider: 'linear-gradient(180deg, rgba(46, 72, 144, 0.1), rgba(46, 72, 144, 0.7), rgba(46, 72, 144, 0.1))',
    countBg: 'rgba(46, 72, 144, 0.16)',
    countText: '#1c2b46',
    scrollbarThumb: 'rgba(46, 72, 144, 0.35)',
    presetRowBg: 'rgba(46, 72, 144, 0.08)',
    modalSurface: '#ffffff',
    modalText: '#1c2b46',
    modalHeaderBg: '#3f51b5',
    modalHeaderText: '#ffffff',
    menuSurface: '#ffffff',
    menuText: '#1c2b46',
    menuHoverBg: 'rgba(46, 72, 144, 0.08)',
    clearButtonBg: '#e91e63',
    clearButtonText: '#ffffff',
    modalActionPrimaryBg: '#3f51b5',
    modalActionPrimaryText: '#ffffff',
    modalActionSecondaryBg: 'transparent',
    modalActionSecondaryText: '#1c2b46',
    modalActionWarnBg: '#f44336',
    modalActionWarnText: '#ffffff',
    modalActionBorder: 'rgba(28, 43, 70, 0.2)',
    modalInputFocusOutline: '#3f51b5',
    modalInputFocusLabel: '#3f51b5',
    modalInputCaret: '#3f51b5',
    chipSelectedBg: 'rgba(63, 81, 181, 0.12)',
    chipSelectedText: '#1c2b46'
  };
  darkOverrides = {
    inputBg: 'rgba(148, 163, 184, 0.12)',
    inputShadow: '0 0 0 1px rgba(148, 163, 184, 0.4)',
    inputHoverBg: 'rgba(148, 163, 184, 0.18)',
    inputHoverShadow: '0 0 0 1px rgba(226, 232, 240, 0.45)',
    inputFocusShadow: '0 0 0 2px rgba(125, 166, 255, 0.35)',
    inputText: '#e2e8f0',
    inputPlaceholder: '#e2e8f0',
    addIcon: '#e2e8f0',
    presetTrigger: '#e2e8f0',
    countDivider: 'linear-gradient(180deg, rgba(226, 232, 240, 0.1), rgba(226, 232, 240, 0.7), rgba(226, 232, 240, 0.1))',
    countBg: 'rgba(226, 232, 240, 0.16)',
    countText: '#e2e8f0',
    scrollbarThumb: 'rgba(148, 163, 184, 0.45)',
    presetRowBg: 'rgba(148, 163, 184, 0.12)',
    modalSurface: '#111827',
    modalText: '#e2e8f0',
    modalHeaderBg: '#111827',
    modalHeaderText: '#e2e8f0',
    menuSurface: '#111827',
    menuText: '#e2e8f0',
    menuHoverBg: 'rgba(148, 163, 184, 0.18)',
    clearButtonBg: '#f59e0b',
    clearButtonText: '#111827',
    modalActionPrimaryBg: '#1f2937',
    modalActionPrimaryText: '#e2e8f0',
    modalActionSecondaryBg: 'transparent',
    modalActionSecondaryText: '#e2e8f0',
    modalActionWarnBg: '#f97316',
    modalActionWarnText: '#111827',
    modalActionBorder: 'rgba(226, 232, 240, 0.25)',
    modalInputFocusOutline: '#93c5fd',
    modalInputFocusLabel: '#93c5fd',
    modalInputCaret: '#93c5fd',
    chipSelectedBg: 'rgba(148, 163, 184, 0.2)',
    chipSelectedText: '#e2e8f0'
  };
  ngOnInit() {
    this.applyPreset(this.themePresetId);
    this.emitConfig();
  }
  applyPreset(presetId) {
    const preset = this.themePresets.find(item => item.id === presetId);
    if (!preset) {
      return;
    }
    this.themePresetId = preset.id;
    this.lightOverrides = {
      ...preset.light
    };
    this.darkOverrides = {
      ...preset.dark
    };
    this.emitConfig();
  }
  onFieldChange() {
    this.themePresetId = 'custom';
    this.emitConfig();
  }
  emitConfig() {
    this.themeConfigUpdated.emit({
      themeMode: this.themeMode,
      themeOverrides: {
        ...this.lightOverrides
      },
      darkThemeOverrides: {
        ...this.darkOverrides
      },
      applyThemeToRoot: true
    });
  }
  static ɵfac = function ThemeSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ThemeSettingsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ThemeSettingsComponent,
    selectors: [["app-theme-settings"]],
    outputs: {
      themeConfigUpdated: "themeConfigUpdated"
    },
    decls: 34,
    vars: 2,
    consts: [["appearance", "outlined", 1, "settings-card"], [1, "settings-content"], ["appearance", "outline"], [3, "valueChange", "selectionChange", "value"], ["value", "auto"], ["value", "light"], ["value", "dark"], ["value", "custom"], [3, "value"], [1, "field-grid"], ["matInput", "", "type", "color", 3, "ngModel"], ["matInput", "", 3, "ngModel", "placeholder"], ["matInput", "", "type", "color", 3, "ngModelChange", "ngModel"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"]],
    template: function ThemeSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Theme Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content", 1)(4, "mat-form-field", 2)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Facet theme mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("valueChange", function ThemeSettingsComponent_Template_mat_select_valueChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.themeMode, $event) || (ctx.themeMode = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ThemeSettingsComponent_Template_mat_select_selectionChange_7_listener() {
          return ctx.emitConfig();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Auto (follow body)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 2)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Theme preset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("valueChange", function ThemeSettingsComponent_Template_mat_select_valueChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.themePresetId, $event) || (ctx.themePresetId = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ThemeSettingsComponent_Template_mat_select_selectionChange_17_listener($event) {
          return ctx.applyPreset($event.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](20, ThemeSettingsComponent_For_21_Template, 2, 2, "mat-option", 8, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Light overrides");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](26, ThemeSettingsComponent_For_27_Template, 5, 2, "mat-form-field", 2, _forTrack1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Dark overrides");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](32, ThemeSettingsComponent_For_33_Template, 5, 2, "mat-form-field", 2, _forTrack1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("value", ctx.themeMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("value", ctx.themePresetId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.themePresets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.themeFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.themeFields);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.M, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.j, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.M, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.M, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.g, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.M],
    styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n\n.settings-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 12px;\n}\n\ninput[type=color][_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0;\n}\n\n.mat-mdc-card-title[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 0.5em;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8tYXBwbGljYXRpb24vc3JjL2FwcC9jb21wb25lbnRzL3RoZW1lLXNldHRpbmdzL3RoZW1lLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4OiAxO1xufVxuXG4uc2V0dGluZ3MtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cblxuLmZpZWxkLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcbiAgZ2FwOiAxMnB4O1xufVxuXG5pbnB1dFt0eXBlPSdjb2xvciddIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWF0LW1kYy1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2004:
/*!************************************************************!*\
  !*** ./projects/demo-application/src/app/app.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9770);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _ngx_mat_facet_toolkit_package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ngx-mat-facet-toolkit/package.json */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);











class AppComponent {
  router;
  document;
  activePage = 'one';
  isDarkMode = false;
  version = _ngx_mat_facet_toolkit_package_json__WEBPACK_IMPORTED_MODULE_0__.version;
  repo = typeof _ngx_mat_facet_toolkit_package_json__WEBPACK_IMPORTED_MODULE_0__.repository === 'string' ? _ngx_mat_facet_toolkit_package_json__WEBPACK_IMPORTED_MODULE_0__.repository : _ngx_mat_facet_toolkit_package_json__WEBPACK_IMPORTED_MODULE_0__.repository?.url;
  constructor(router, document) {
    this.router = router;
    this.document = document;
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        const currentURL = event.urlAfterRedirects;
        if (currentURL.includes('/theme')) {
          this.activePage = 'three';
        } else if (currentURL.includes('/two')) {
          this.activePage = 'two';
        } else {
          this.activePage = 'one';
        }
      }
    });
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.document.body.classList.toggle('dark-theme', this.isDarkMode);
  }
  static ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 19,
    vars: 7,
    consts: [[1, "spacer"], ["mat-button", "", "routerLink", "", 3, "color"], ["mat-button", "", "routerLink", "/two", 3, "color"], ["mat-button", "", "routerLink", "/theme", 3, "color"], ["mat-button", "", 3, "click"], ["target", "_blank", "mat-stroked-button", "", 3, "href"], ["fxLayout", "column", 1, "container"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar")(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Page One ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Page Two ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Theme Lab ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() {
          return ctx.toggleTheme();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "View on GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Angular Material Facet Toolkit: v", ctx.version, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx.activePage === "one" ? "primary" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx.activePage === "two" ? "primary" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx.activePage === "three" ? "primary" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isDarkMode ? "light_mode" : "dark_mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isDarkMode ? "Light mode" : "Dark mode", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.repo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n  .mat-mdc-card {\n  box-shadow: none !important;\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8tYXBwbGljYXRpb24vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBSUU7RUFDRSwyQkFBQTtBQURKOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUZGOztBQU1BO0VBQ0UsY0FBQTtBQUhGIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5cbjo6bmctZGVlcCB7XG4gIC5tYXQtbWRjLWNhcmQge1xuICAgIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xuICB9XG59XG5cbjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5cbi5jb250YWluZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 2429:
/*!*********************************************************!*\
  !*** ./projects/demo-application/src/app/app.routes.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_ROUTES: () => (/* binding */ APP_ROUTES)
/* harmony export */ });
/* harmony import */ var _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-one/page-one.component */ 8857);
/* harmony import */ var _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-two/page-two.component */ 3453);
/* harmony import */ var _pages_page_three_page_three_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-three/page-three.component */ 9441);



const APP_ROUTES = [{
  path: '',
  component: _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_0__.PageOneComponent
}, {
  path: 'two',
  component: _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_1__.PageTwoComponent
}, {
  path: 'theme',
  component: _pages_page_three_page_three_component__WEBPACK_IMPORTED_MODULE_2__.PageThreeComponent
}, {
  path: '**',
  redirectTo: ''
}];

/***/ }),

/***/ 3453:
/*!********************************************************************************!*\
  !*** ./projects/demo-application/src/app/pages/page-two/page-two.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageTwoComponent: () => (/* binding */ PageTwoComponent)
/* harmony export */ });
/* harmony import */ var _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @drsutphin/ngx-mat-facet-toolkit */ 4511);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/settings/settings.component */ 3685);
/* harmony import */ var _components_output_output_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/output/output.component */ 8649);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);









class PageTwoComponent {
  facets = [];
  identifier = null;
  strategy = _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetIdentifierStrategy.ParentID;
  config = {
    identifierStrategy: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetIdentifierStrategy.ParentID,
    chipRowScrollable: true,
    showFilterCount: true
  };
  strategyUpdated(newStrategy) {
    this.strategy = newStrategy;
    this.config = {
      ...this.config,
      identifierStrategy: newStrategy
    };
  }
  manualIdentifierUpdated(identifier) {
    this.identifier = identifier;
  }
  facetsUpdated(facets) {
    this.facets = facets;
  }
  static ɵfac = function PageTwoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PageTwoComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PageTwoComponent,
    selectors: [["app-page-two"]],
    decls: 10,
    vars: 9,
    consts: [["settings", ""], ["output", ""], ["appearance", "outlined"], ["placeholder", "Add a filter...", "clearButtonText", "CLEAR FILTERS", 3, "facetChange", "facets", "config", "identifier", "chipLabelsEnabled", "confirmOnRemove", "clearButtonEnabled"], [1, "content"], [3, "facetsUpdated", "strategyUpdated", "manualIdentifierUpdated", "currentIdentifier", "strategy"], [3, "vertical"]],
    template: function PageTwoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 2)(1, "mat-card-content")(2, "ngx-mat-facet-toolkit", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("facetChange", function PageTwoComponent_Template_ngx_mat_facet_toolkit_facetChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          const output_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](output_r2.filterUpdated($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "app-settings", 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("facetsUpdated", function PageTwoComponent_Template_app_settings_facetsUpdated_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.facetsUpdated($event));
        })("strategyUpdated", function PageTwoComponent_Template_app_settings_strategyUpdated_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.strategyUpdated($event));
        })("manualIdentifierUpdated", function PageTwoComponent_Template_app_settings_manualIdentifierUpdated_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.manualIdentifierUpdated($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "mat-divider", 6)(8, "app-output", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const settings_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("facets", ctx.facets)("config", ctx.config)("identifier", ctx.identifier)("chipLabelsEnabled", settings_r3.chipLabelsEnabled)("confirmOnRemove", settings_r3.confirmOnRemove)("clearButtonEnabled", settings_r3.clearButtonEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("currentIdentifier", ctx.identifier)("strategy", ctx.strategy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("vertical", true);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.NgxMatFacetToolkitComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent, _components_output_output_component__WEBPACK_IMPORTED_MODULE_1__.OutputComponent],
    styles: ["[_nghost-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n}\n.content[_ngcontent-%COMP%]   .mat-divider[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n@media (max-width: 900px) {\n  .content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .content[_ngcontent-%COMP%]   .mat-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8tYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy9wYWdlLXR3by9wYWdlLXR3by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7QUFDSjs7QUFHQTtFQUNFO0lBQ0Usc0JBQUE7RUFBRjtFQUVFO0lBQ0UsYUFBQTtFQUFKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGVudCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxNXB4O1xuXG4gIC5tYXQtZGl2aWRlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5tYXQtZGl2aWRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3685:
/*!*************************************************************************************!*\
  !*** ./projects/demo-application/src/app/components/settings/settings.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 6755);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 211);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 2281);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5074);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @drsutphin/ngx-mat-facet-toolkit */ 4511);
/* harmony import */ var _common_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common.helpers */ 106);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 9902);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 5255);
























function SettingsComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const strategy_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", strategy_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.displayStrategy(strategy_r1), " ");
  }
}
function SettingsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 9)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Manual Identifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 10, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsComponent_Conditional_20_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.manualIdentifier, $event) || (ctx_r1.manualIdentifier = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SettingsComponent_Conditional_20_Template_input_change_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const manualInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.manualIdentifierUpdated.emit(manualInput_r4.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.manualIdentifier);
  }
}
class SettingsComponent {
  strategyUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(true);
  manualIdentifierUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(true);
  facetsUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(true);
  set strategy(value) {
    this.currentStrategy = value;
  }
  currentIdentifier = '';
  chipLabelsEnabled = true;
  clearButtonEnabled = true;
  confirmOnRemove = true;
  isUsingSetB = true;
  allStrategies = [];
  currentStrategy = _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetIdentifierStrategy.ParentID;
  showManualInput = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
  manualIdentifier = '';
  facets = [];
  allFacets = [{
    id: 'user-name',
    label: 'User Name',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.Text,
    description: 'Please enter your user name (simple text input example)',
    icon: 'person_outline'
  }, {
    id: 'birthday',
    label: 'Birthday',
    icon: 'date_range',
    description: 'Please select your birthday (date select example)',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.Date
  }, {
    id: 'score',
    label: 'Score',
    icon: 'speed',
    description: 'Numeric filter with comparison operators.',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.Numeric,
    dataType: 'number',
    placeholder: 'Enter a score'
  }, {
    id: 'event-days',
    label: 'Event Days',
    icon: 'event_available',
    description: 'Please select start and end dates (date range select example)',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.DateRange
  }, {
    id: 'is-participant',
    label: 'Is a Participant?',
    icon: 'live_help',
    description: 'This is a test field, you can test boolean data type.',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.Boolean
  }, {
    id: 'state',
    label: 'State',
    description: 'Please select something (single select, http example)',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.CategorySingle,
    icon: 'folder_open',
    options: (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([{
      value: 'open',
      label: 'Open',
      count: 49
    }, {
      value: 'closed',
      label: 'Closed',
      count: 23
    }]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(700))
  }, {
    id: 'license',
    label: 'License(s)',
    description: 'Please select your licenses (multi select, http example)',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.Category,
    icon: 'drive_eta',
    options: (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([{
      value: 'a',
      label: 'Class A'
    }, {
      value: 'b',
      label: 'Class B'
    }, {
      value: 'c',
      label: 'Class C'
    }]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(1200))
  }, {
    id: 'city',
    label: 'Cities',
    description: 'Please select from cities.',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.Typeahead,
    icon: 'location_city',
    typeahead: {
      provider: txt => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([{
        value: `${txt}-a`,
        label: `${txt} A`
      }, {
        value: `${txt}-b`,
        label: `${txt} B`
      }, {
        value: `${txt}-c`,
        label: `${txt} C`
      }]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(1200))
    }
  }, {
    id: 'department',
    label: 'Department',
    description: 'Department filter.',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.Text,
    icon: 'apartment'
  }, {
    id: 'birthday-two',
    label: 'Birthday 2',
    icon: 'date_range',
    description: 'Please select your birthday (date select example)',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.Date
  }, {
    id: 'empty',
    label: 'Empty Test',
    description: 'Please select from options.',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.Typeahead,
    icon: 'clear',
    typeahead: {
      provider: _common_helpers__WEBPACK_IMPORTED_MODULE_0__.testEmptyFilterTypeahead,
      placeholder: 'Empty'
    }
  }, {
    id: 'many',
    label: 'Many Test',
    description: 'Please select from options.',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.Typeahead,
    icon: 'dns',
    typeahead: {
      provider: _common_helpers__WEBPACK_IMPORTED_MODULE_0__.lotsOfValuesTypeAhead,
      placeholder: '1'
    }
  }];
  constructor() {
    this.allStrategies = Object.values(_drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetIdentifierStrategy);
    this.strategyUpdated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(v => v.toLowerCase() === 'manual')).subscribe(this.showManualInput);
  }
  ngAfterViewInit() {
    this.toggleSet();
  }
  chunkArray = (arr, n) => {
    const chunkLength = Math.max(arr.length / n, 1);
    const chunks = [];
    for (let i = 0; i < n; i++) {
      if (chunkLength * (i + 1) <= arr.length) {
        chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
      }
    }
    return chunks;
  };
  displayStrategy(raw) {
    switch (raw) {
      case 'windowURL':
        return 'Window URL';
      case 'parentID':
        return 'Parent ID';
      default:
        return raw;
    }
  }
  toggleSet() {
    const chunked = this.chunkArray(this.allFacets, 2);
    if (this.isUsingSetB) {
      this.facets = chunked[0];
      this.isUsingSetB = false;
    } else {
      this.facets = chunked[1];
      this.isUsingSetB = true;
    }
    this.facetsUpdated.emit(this.facets);
  }
  static ɵfac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SettingsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SettingsComponent,
    selectors: [["app-settings"]],
    inputs: {
      strategy: "strategy",
      currentIdentifier: "currentIdentifier"
    },
    outputs: {
      strategyUpdated: "strategyUpdated",
      manualIdentifierUpdated: "manualIdentifierUpdated",
      facetsUpdated: "facetsUpdated"
    },
    decls: 22,
    vars: 9,
    consts: [["manualInput", ""], ["appearance", "outlined", 1, "settings-card"], [1, "settings-content"], [3, "ngModelChange", "ngModel"], ["mat-button", "", 3, "click"], ["appearance", "outline"], [3, "valueChange", "selectionChange", "value"], [3, "value"], ["matTooltip", "Current Identifier"], ["appearance", "outline", 1, "manual-input"], ["matInput", "", "placeholder", "cool-beans", 3, "ngModelChange", "change", "ngModel"]],
    template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 1)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-content", 2)(4, "mat-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsComponent_Template_mat_checkbox_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.chipLabelsEnabled, $event) || (ctx.chipLabelsEnabled = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Chip labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsComponent_Template_mat_checkbox_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.clearButtonEnabled, $event) || (ctx.clearButtonEnabled = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\"Clear\" Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsComponent_Template_mat_checkbox_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.confirmOnRemove, $event) || (ctx.confirmOnRemove = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Confirmation on remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_10_listener() {
          return ctx.toggleSet();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 5)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "ID Generation Strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("valueChange", function SettingsComponent_Template_mat_select_valueChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.currentStrategy, $event) || (ctx.currentStrategy = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function SettingsComponent_Template_mat_select_selectionChange_15_listener($event) {
          return ctx.strategyUpdated.emit($event.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](16, SettingsComponent_For_17_Template, 2, 2, "mat-option", 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "pre", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SettingsComponent_Conditional_20_Template, 5, 1, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.chipLabelsEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.clearButtonEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.confirmOnRemove);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Use ", ctx.isUsingSetB ? "Set A" : "Set B", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("value", ctx.currentStrategy);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.allStrategies);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 7, ctx.showManualInput) ? 20 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.M, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.j, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.M, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.M, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.g, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.M, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.h, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.e],
    styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n\n.settings-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.mat-mdc-card-title[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 1em;\n}\n\npre[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  background: black;\n  border-radius: 5px;\n  font-family: monospace;\n  font-size: small;\n  padding: 1rem;\n  margin-top: -1em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8tYXBwbGljYXRpb24vc3JjL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZmxleDogMTtcbn1cblxuLnNldHRpbmdzLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbn1cblxuLm1hdC1tZGMtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLm1hdC1tZGMtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxucHJlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtZmFtaWx5Om1vbm9zcGFjZTtcbiAgZm9udC1zaXplOnNtYWxsO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAtMWVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4341:
/*!***********************************************!*\
  !*** ./projects/demo-application/src/main.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 9736);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 2004);
/* harmony import */ var _app_app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.routes */ 2429);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 5256);
/* harmony import */ var _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @drsutphin/ngx-mat-facet-toolkit */ 4511);








if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.provideAnimations)(), (0,_angular_router__WEBPACK_IMPORTED_MODULE_6__.provideRouter)(_app_app_routes__WEBPACK_IMPORTED_MODULE_1__.APP_ROUTES), (0,_drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_7__.provideFacetToolkitConfig)({
    loggingCallback: (...args) => {
      console.log(...args);
    },
    identifierStrategy: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_7__.FacetIdentifierStrategy.ParentID
  })]
}).catch(err => console.error(err));

/***/ }),

/***/ 4511:
/*!*********************************************************************************!*\
  !*** ./dist/ngx-mat-facet-toolkit/fesm2022/drsutphin-ngx-mat-facet-toolkit.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_FACET_PRESET_STORAGE_CONFIG: () => (/* binding */ DEFAULT_FACET_PRESET_STORAGE_CONFIG),
/* harmony export */   DEFAULT_FACET_TOOLKIT_CONFIG: () => (/* binding */ DEFAULT_FACET_TOOLKIT_CONFIG),
/* harmony export */   FACET_TOOLKIT_CONFIG: () => (/* binding */ FACET_TOOLKIT_CONFIG),
/* harmony export */   FacetDataType: () => (/* binding */ FacetDataType),
/* harmony export */   FacetFilterType: () => (/* binding */ FacetFilterType),
/* harmony export */   FacetIdentifierStrategy: () => (/* binding */ FacetIdentifierStrategy),
/* harmony export */   NgxMatFacetToolkitComponent: () => (/* binding */ NgxMatFacetToolkitComponent),
/* harmony export */   provideFacetToolkitConfig: () => (/* binding */ provideFacetToolkitConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 9770);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/autocomplete */ 9771);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 1391);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 3268);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 9902);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 6755);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 211);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 5255);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 2281);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/a11y */ 9211);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/overlay */ 6895);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/portal */ 7480);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs */ 8537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! rxjs */ 2551);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 1817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/animations */ 2394);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! uuid */ 2550);















































const _c0 = ["typeAheadInput"];
const _c1 = () => ({
  placeholder: ""
});
const _forTrack0 = ($index, $item) => $item.value;
function FacetDetailsModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.description);
  }
}
function FacetDetailsModalComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 22);
  }
}
function FacetDetailsModalComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
  }
}
function FacetDetailsModalComponent_Case_13_Conditional_1_Conditional_1_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small")(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", item_r5.count, ")");
  }
}
function FacetDetailsModalComponent_Case_13_Conditional_1_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 25)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FacetDetailsModalComponent_Case_13_Conditional_1_Conditional_1_For_2_Conditional_3_Template, 3, 1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ɵ$index_38_r6 = ctx.$index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5.value)("selected", ctx_r1.isItemSelected(item_r5))("@fadeIn", undefined)("firstElement", ɵ$index_38_r6 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.label ? ctx_r1.truncateText(item_r5.label) : "- empty -", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](item_r5.count ? 3 : -1);
  }
}
function FacetDetailsModalComponent_Case_13_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-selection-list", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FacetDetailsModalComponent_Case_13_Conditional_1_Conditional_1_Template_mat_selection_list_selectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const options_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.selectionChange($event, ctx_r1.data, options_r4));
    })("keydown.enter", function FacetDetailsModalComponent_Case_13_Conditional_1_Conditional_1_Template_mat_selection_list_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.validateAndSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](1, FacetDetailsModalComponent_Case_13_Conditional_1_Conditional_1_For_2_Template, 4, 6, "mat-list-option", 25, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const options_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](options_r4);
  }
}
function FacetDetailsModalComponent_Case_13_Conditional_1_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FacetDetailsModalComponent_Case_13_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FacetDetailsModalComponent_Case_13_Conditional_1_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const noResults_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", noResults_r7);
  }
}
function FacetDetailsModalComponent_Case_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FacetDetailsModalComponent_Case_13_Conditional_1_Conditional_1_Template, 3, 0, "mat-selection-list")(2, FacetDetailsModalComponent_Case_13_Conditional_1_Conditional_2_Template, 1, 1, "ng-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.length > 0 ? 1 : 2);
  }
}
function FacetDetailsModalComponent_Case_13_Conditional_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FacetDetailsModalComponent_Case_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FacetDetailsModalComponent_Case_13_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const loading_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", loading_r8);
  }
}
function FacetDetailsModalComponent_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FacetDetailsModalComponent_Case_13_Conditional_1_Template, 4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FacetDetailsModalComponent_Case_13_Conditional_3_Template, 1, 1, "ng-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.resolvedOptions$)) ? 1 : 3, tmp_3_0);
  }
}
function FacetDetailsModalComponent_Case_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetDetailsModalComponent_Case_14_Conditional_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.clearInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function FacetDetailsModalComponent_Case_14_Conditional_7_Conditional_1_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small")(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", item_r13.count, ")");
  }
}
function FacetDetailsModalComponent_Case_14_Conditional_7_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 31)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FacetDetailsModalComponent_Case_14_Conditional_7_Conditional_1_For_2_Conditional_3_Template, 3, 1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ɵ$index_85_r14 = ctx.$index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r13.value)("@fadeIn", undefined)("firstElement", ɵ$index_85_r14 === 0)("selected", ctx_r1.isItemSelected(item_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.label ? ctx_r1.truncateText(item_r13.label) : "- empty -", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](item_r13.count ? 3 : -1);
  }
}
function FacetDetailsModalComponent_Case_14_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-selection-list", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FacetDetailsModalComponent_Case_14_Conditional_7_Conditional_1_Template_mat_selection_list_selectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const options_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.selectionChange($event, ctx_r1.data, options_r12));
    })("keydown.enter", function FacetDetailsModalComponent_Case_14_Conditional_7_Conditional_1_Template_mat_selection_list_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.validateAndSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](1, FacetDetailsModalComponent_Case_14_Conditional_7_Conditional_1_For_2_Template, 4, 6, "mat-list-option", 31, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const options_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](options_r12);
  }
}
function FacetDetailsModalComponent_Case_14_Conditional_7_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FacetDetailsModalComponent_Case_14_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FacetDetailsModalComponent_Case_14_Conditional_7_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const noResults_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", noResults_r7);
  }
}
function FacetDetailsModalComponent_Case_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FacetDetailsModalComponent_Case_14_Conditional_7_Conditional_1_Template, 3, 0, "mat-selection-list")(2, FacetDetailsModalComponent_Case_14_Conditional_7_Conditional_2_Template, 1, 1, "ng-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.length > 0 ? 1 : 2);
  }
}
function FacetDetailsModalComponent_Case_14_Conditional_9_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FacetDetailsModalComponent_Case_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FacetDetailsModalComponent_Case_14_Conditional_9_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const loading_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", loading_r8);
  }
}
function FacetDetailsModalComponent_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "mat-form-field", 27)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 28, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function FacetDetailsModalComponent_Case_14_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r1.typeaheadText, $event) || (ctx_r1.typeaheadText = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_Case_14_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.typeaheadValueChanged($event));
    })("keydown.enter", function FacetDetailsModalComponent_Case_14_Template_input_keydown_enter_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.validateAndSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FacetDetailsModalComponent_Case_14_Conditional_6_Template, 3, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FacetDetailsModalComponent_Case_14_Conditional_7_Template, 4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FacetDetailsModalComponent_Case_14_Conditional_9_Template, 1, 1, "ng-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", (ctx_r1.data.typeahead || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1)).placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.typeaheadText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx_r1.clearButtonDisabled ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx_r1.resolvedOptions$)) ? 7 : 9, tmp_7_0);
  }
}
function FacetDetailsModalComponent_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "mat-form-field", 32)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_Case_15_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.setValue(ctx_r1.data, $event));
    })("focus", function FacetDetailsModalComponent_Case_15_Template_input_focus_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const picker_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.isUpdate ? ctx_r1.emptyFunction() : picker_r16.open());
    })("keydown.enter", function FacetDetailsModalComponent_Case_15_Template_input_keydown_enter_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.validateAndSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-datepicker-toggle", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetDetailsModalComponent_Case_15_Template_mat_datepicker_toggle_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const picker_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](picker_r16.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-datepicker", null, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const picker_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", picker_r16)("ngModel", ctx_r1.getRawValue(ctx_r1.data));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", picker_r16);
  }
}
function FacetDetailsModalComponent_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15)(1, "mat-form-field", 35)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_Case_16_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.setValue(ctx_r1.data, $event));
    })("focus", function FacetDetailsModalComponent_Case_16_Template_input_focus_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const startDatePicker_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.isUpdate ? ctx_r1.emptyFunction() : startDatePicker_r18.open());
    })("keydown.enter", function FacetDetailsModalComponent_Case_16_Template_input_keydown_enter_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.validateAndSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-datepicker-toggle", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetDetailsModalComponent_Case_16_Template_mat_datepicker_toggle_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const startDatePicker_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](startDatePicker_r18.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-datepicker", null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 35)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_Case_16_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.setValue(ctx_r1.data, $event, 1));
    })("keydown.enter", function FacetDetailsModalComponent_Case_16_Template_input_keydown_enter_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.validateAndSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-datepicker-toggle", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetDetailsModalComponent_Case_16_Template_mat_datepicker_toggle_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const endDatePicker_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](endDatePicker_r19.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-datepicker", null, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const startDatePicker_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const endDatePicker_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.data.label, " - Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", startDatePicker_r18)("ngModel", ctx_r1.getRawValue(ctx_r1.data));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", startDatePicker_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.data.label, " - End");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", endDatePicker_r19)("ngModel", ctx_r1.getRawValue(ctx_r1.data, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", endDatePicker_r19);
  }
}
function FacetDetailsModalComponent_Case_17_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetDetailsModalComponent_Case_17_Conditional_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.data.values = []);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function FacetDetailsModalComponent_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16)(1, "mat-form-field", 38)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Criteria Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FacetDetailsModalComponent_Case_17_Template_mat_select_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.setType($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contains");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ends With");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Equals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Starts With");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 41)(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Search Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function FacetDetailsModalComponent_Case_17_Template_input_keydown_enter_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.validateAndSubmit());
    })("ngModelChange", function FacetDetailsModalComponent_Case_17_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.setValue(ctx_r1.data, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FacetDetailsModalComponent_Case_17_Conditional_17_Template, 3, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.data.fixedFilterType || ctx_r1.data.filterType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.FacetFilterType.contains);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.FacetFilterType.endsWith);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.FacetFilterType.equal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.FacetFilterType.startsWith);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.data.placeholder || ctx_r1.data.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.getRawValue(ctx_r1.data));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1.data.values ? 17 : -1);
  }
}
function FacetDetailsModalComponent_Case_18_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 41)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Minimum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_Case_18_Conditional_17_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.setValue(ctx_r1.data, $event));
    })("keydown.enter", function FacetDetailsModalComponent_Case_18_Conditional_17_Template_input_keydown_enter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.validateAndSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 41)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Maximum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_Case_18_Conditional_17_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.setValue(ctx_r1.data, $event, 1));
    })("keydown.enter", function FacetDetailsModalComponent_Case_18_Conditional_17_Template_input_keydown_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.validateAndSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.data.placeholder || ctx_r1.data.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.getRawValue(ctx_r1.data));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.data.placeholder || ctx_r1.data.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.getRawValue(ctx_r1.data, 1));
  }
}
function FacetDetailsModalComponent_Case_18_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 41)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_Case_18_Conditional_18_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.setValue(ctx_r1.data, $event));
    })("keydown.enter", function FacetDetailsModalComponent_Case_18_Conditional_18_Template_input_keydown_enter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.validateAndSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.data.placeholder || ctx_r1.data.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.getRawValue(ctx_r1.data));
  }
}
function FacetDetailsModalComponent_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17)(1, "mat-form-field", 38)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Criteria Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FacetDetailsModalComponent_Case_18_Template_mat_select_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.setType($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Equals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Greater Than");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Greater Than Or Equal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Less Than");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Less Than Or Equal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Between");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FacetDetailsModalComponent_Case_18_Conditional_17_Template, 8, 4)(18, FacetDetailsModalComponent_Case_18_Conditional_18_Template, 4, 2, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.data.fixedFilterType || ctx_r1.data.filterType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.FacetFilterType.equal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.FacetFilterType.greaterThan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.FacetFilterType.greaterThanOrEqual);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.FacetFilterType.lessThan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.FacetFilterType.lessThanOrEqual);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.FacetFilterType.between);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1.data.filterType === ctx_r1.FacetFilterType.between ? 17 : 18);
  }
}
function FacetDetailsModalComponent_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_Case_19_Template_mat_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.setValue(ctx_r1.data, $event));
    })("keydown.enter", function FacetDetailsModalComponent_Case_19_Template_mat_checkbox_keydown_enter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.validateAndSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.getRawValue(ctx_r1.data));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.placeholder || ctx_r1.data.label);
  }
}
function FacetDetailsModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetDetailsModalComponent_Conditional_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onRemove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function FacetModalComponent_ng_template_0_Template(rf, ctx) {}
function FacetModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
  }
}
const _forTrack1 = ($index, $item) => $item.id;
function PresetManagerModalComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresetManagerModalComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.filterText = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function PresetManagerModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No presets found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PresetManagerModalComponent_For_17_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18)(1, "mat-form-field", 5)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Preset name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PresetManagerModalComponent_For_17_Conditional_27_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r1.editingName, $event) || (ctx_r1.editingName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function PresetManagerModalComponent_For_17_Conditional_27_Template_input_keydown_enter_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const preset_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.confirmRename(preset_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresetManagerModalComponent_For_17_Conditional_27_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const preset_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.confirmRename(preset_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresetManagerModalComponent_For_17_Conditional_27_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.cancelRename());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.editingName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.editingName.trim());
  }
}
function PresetManagerModalComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15)(7, "button", 16)(8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", null, 0)(12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresetManagerModalComponent_For_17_Template_button_click_12_listener() {
      const preset_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.loadPreset(preset_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Load");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresetManagerModalComponent_For_17_Template_button_click_17_listener() {
      const preset_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.startRename(preset_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Rename");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresetManagerModalComponent_For_17_Template_button_click_22_listener() {
      const preset_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.deletePreset(preset_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PresetManagerModalComponent_For_17_Conditional_27_Template, 11, 2, "div", 18);
  }
  if (rf & 2) {
    const preset_r4 = ctx.$implicit;
    const presetMenu_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](preset_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", preset_r4.selections.length, " filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", presetMenu_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1.editingPresetId === preset_r4.id ? 27 : -1);
  }
}
const _c2 = ["filterInput"];
const _c3 = ["presetMenuButton"];
const _c4 = ["chipScrollContainer"];
function NgxMatFacetToolkitComponent_Conditional_1_Conditional_18_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatFacetToolkitComponent_Conditional_1_Conditional_18_For_1_Template_button_click_0_listener() {
      const preset_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.applyPreset(preset_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const preset_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](preset_r5.name);
  }
}
function NgxMatFacetToolkitComponent_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](0, NgxMatFacetToolkitComponent_Conditional_1_Conditional_18_For_1_Template, 5, 1, "button", 24, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r2.presetsForMenu());
  }
}
function NgxMatFacetToolkitComponent_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "bookmark_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No presets yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function NgxMatFacetToolkitComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "button", 19, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgxMatFacetToolkitComponent_Conditional_1_Template_button_mousedown_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.clickStarted());
    })("mouseup", function NgxMatFacetToolkitComponent_Conditional_1_Template_button_mouseup_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.clickEnded());
    })("mouseleave", function NgxMatFacetToolkitComponent_Conditional_1_Template_button_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.clickEnded());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", 20, 5)(7, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatFacetToolkitComponent_Conditional_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.promptSavePreset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "bookmark_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Save current filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatFacetToolkitComponent_Conditional_1_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.openPresetManager());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "tune");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Manage presets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NgxMatFacetToolkitComponent_Conditional_1_Conditional_18_Template, 2, 0)(19, NgxMatFacetToolkitComponent_Conditional_1_Conditional_19_Template, 5, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const presetMenu_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", presetMenu_r6)("matTooltip", ctx_r2.tooltip() !== null ? ctx_r2.tooltip() : "")("matTooltipDisabled", ctx_r2.tooltip() === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.selectedFacets().length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r2.presetsForMenu().length > 0 ? 18 : 19);
  }
}
function NgxMatFacetToolkitComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.activeFilterCount());
  }
}
function NgxMatFacetToolkitComponent_For_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const facet_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](facet_r7.icon);
  }
}
function NgxMatFacetToolkitComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatFacetToolkitComponent_For_14_Conditional_1_Template, 2, 1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const facet_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", facet_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](facet_r7.icon ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](facet_r7.label);
  }
}
function NgxMatFacetToolkitComponent_For_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](facet_r9.icon);
  }
}
function NgxMatFacetToolkitComponent_For_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](facet_r9.label + ": \xA0");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "csv");
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 1, facet_r9.values, "label", " / "), " ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "csv");
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 1, facet_r9.values, "label", " / "), " ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "csv");
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 1, facet_r9.values, "label", " / "), " ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "csv");
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 1, facet_r9.values, "label", " / "), " ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u201C", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx_r2.getDateValue(facet_r9), ctx_r2.dateFormat()), "\u201D ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \u201C", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, ctx_r2.getDateValue(facet_r9), ctx_r2.dateFormat()), "\u201D ~ \u201C", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 5, ctx_r2.getDateValue(facet_r9, 1), ctx_r2.dateFormat()), "\u201D ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxMatFacetToolkitComponent_For_20_Case_10_Template_mat_checkbox_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.setValue(facet_r9, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r2.getRawValue(facet_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", facet_r9.label, " ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_11_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u201C..", ctx_r2.getRawValue(facet_r9), "..\u201D ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_11_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u201C", ctx_r2.getRawValue(facet_r9), "\u201D ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_11_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u201C", ctx_r2.getRawValue(facet_r9), "...\u201D ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_11_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u201C...", ctx_r2.getRawValue(facet_r9), "\u201D ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxMatFacetToolkitComponent_For_20_Case_11_Case_0_Template, 1, 1)(1, NgxMatFacetToolkitComponent_For_20_Case_11_Case_1_Template, 1, 1)(2, NgxMatFacetToolkitComponent_For_20_Case_11_Case_2_Template, 1, 1)(3, NgxMatFacetToolkitComponent_For_20_Case_11_Case_3_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_15_0;
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_15_0 = facet_r9.filterType) === ctx_r2.FacetFilterType.contains ? 0 : tmp_15_0 === ctx_r2.FacetFilterType.equal ? 1 : tmp_15_0 === ctx_r2.FacetFilterType.startsWith ? 2 : tmp_15_0 === ctx_r2.FacetFilterType.endsWith ? 3 : -1);
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_12_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u201C=", ctx_r2.getRawValue(facet_r9), "\u201D ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_12_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u201C>", ctx_r2.getRawValue(facet_r9), "\u201D ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_12_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u201C\u2265", ctx_r2.getRawValue(facet_r9), "\u201D ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_12_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u201C<", ctx_r2.getRawValue(facet_r9), "\u201D ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_12_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u201C\u2264", ctx_r2.getRawValue(facet_r9), "\u201D ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_12_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \u201C", ctx_r2.getRawValue(facet_r9), " - ", ctx_r2.getRawValue(facet_r9, 1), "\u201D ");
  }
}
function NgxMatFacetToolkitComponent_For_20_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxMatFacetToolkitComponent_For_20_Case_12_Case_0_Template, 1, 1)(1, NgxMatFacetToolkitComponent_For_20_Case_12_Case_1_Template, 1, 1)(2, NgxMatFacetToolkitComponent_For_20_Case_12_Case_2_Template, 1, 1)(3, NgxMatFacetToolkitComponent_For_20_Case_12_Case_3_Template, 1, 1)(4, NgxMatFacetToolkitComponent_For_20_Case_12_Case_4_Template, 1, 1)(5, NgxMatFacetToolkitComponent_For_20_Case_12_Case_5_Template, 1, 2);
  }
  if (rf & 2) {
    let tmp_15_0;
    const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_15_0 = facet_r9.filterType) === ctx_r2.FacetFilterType.equal ? 0 : tmp_15_0 === ctx_r2.FacetFilterType.greaterThan ? 1 : tmp_15_0 === ctx_r2.FacetFilterType.greaterThanOrEqual ? 2 : tmp_15_0 === ctx_r2.FacetFilterType.lessThan ? 3 : tmp_15_0 === ctx_r2.FacetFilterType.lessThanOrEqual ? 4 : tmp_15_0 === ctx_r2.FacetFilterType.between ? 5 : -1);
  }
}
function NgxMatFacetToolkitComponent_For_20_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatFacetToolkitComponent_For_20_Conditional_13_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.removeFacet(facet_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NgxMatFacetToolkitComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function NgxMatFacetToolkitComponent_For_20_Template_mat_chip_option_selectionChange_0_listener($event) {
      const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.chipSelected($event, facet_r9));
    })("click", function NgxMatFacetToolkitComponent_For_20_Template_mat_chip_option_click_0_listener() {
      const facet_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.selectedFacetId.set(facet_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxMatFacetToolkitComponent_For_20_Conditional_2_Template, 2, 1, "mat-icon", 29)(3, NgxMatFacetToolkitComponent_For_20_Conditional_3_Template, 2, 1, "span")(4, NgxMatFacetToolkitComponent_For_20_Case_4_Template, 2, 5)(5, NgxMatFacetToolkitComponent_For_20_Case_5_Template, 2, 5)(6, NgxMatFacetToolkitComponent_For_20_Case_6_Template, 2, 5)(7, NgxMatFacetToolkitComponent_For_20_Case_7_Template, 2, 5)(8, NgxMatFacetToolkitComponent_For_20_Case_8_Template, 2, 4)(9, NgxMatFacetToolkitComponent_For_20_Case_9_Template, 3, 8)(10, NgxMatFacetToolkitComponent_For_20_Case_10_Template, 2, 3, "mat-checkbox", 30)(11, NgxMatFacetToolkitComponent_For_20_Case_11_Template, 4, 1)(12, NgxMatFacetToolkitComponent_For_20_Case_12_Template, 6, 1)(13, NgxMatFacetToolkitComponent_For_20_Conditional_13_Template, 2, 0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_20_0;
    const facet_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", facet_r9.label + (facet_r9.description ? ": " + facet_r9.description : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@chipAnimation", undefined)("color", facet_r9.readonly ? "accent" : undefined)("selected", facet_r9.id === ctx_r2.selectedFacetId());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](facet_r9.icon ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r2.chipLabelsEnabled() ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_20_0 = facet_r9.type) === ctx_r2.FacetDataType.Category ? 4 : tmp_20_0 === ctx_r2.FacetDataType.CategorySingle ? 5 : tmp_20_0 === ctx_r2.FacetDataType.Typeahead ? 6 : tmp_20_0 === ctx_r2.FacetDataType.TypeaheadSingle ? 7 : tmp_20_0 === ctx_r2.FacetDataType.Date ? 8 : tmp_20_0 === ctx_r2.FacetDataType.DateRange ? 9 : tmp_20_0 === ctx_r2.FacetDataType.Boolean ? 10 : tmp_20_0 === ctx_r2.FacetDataType.Text ? 11 : tmp_20_0 === ctx_r2.FacetDataType.Numeric ? 12 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!facet_r9.readonly ? 13 : -1);
  }
}
function NgxMatFacetToolkitComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatFacetToolkitComponent_Conditional_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.clearButtonText(), " ");
  }
}
var FacetDataType;
(function (FacetDataType) {
  FacetDataType["Text"] = "Text";
  // eslint-disable-next-line id-blacklist
  FacetDataType["Boolean"] = "Boolean";
  FacetDataType["Category"] = "Category";
  FacetDataType["CategorySingle"] = "CategorySingle";
  FacetDataType["Date"] = "Date";
  FacetDataType["DateRange"] = "DateRange";
  FacetDataType["Numeric"] = "Numeric";
  FacetDataType["Typeahead"] = "Typeahead";
  FacetDataType["TypeaheadSingle"] = "TypeaheadSingle";
})(FacetDataType || (FacetDataType = {}));
var FacetFilterType;
(function (FacetFilterType) {
  FacetFilterType["contains"] = "contains";
  FacetFilterType["startsWith"] = "startsWith";
  FacetFilterType["endsWith"] = "endsWith";
  FacetFilterType["equal"] = "equal";
  FacetFilterType["and"] = "and";
  FacetFilterType["between"] = "between";
  FacetFilterType["greaterThan"] = "greaterThan";
  FacetFilterType["lessThan"] = "lessThan";
  FacetFilterType["greaterThanOrEqual"] = "greaterThanOrEqual";
  FacetFilterType["lessThanOrEqual"] = "lessThanOrEqual";
})(FacetFilterType || (FacetFilterType = {}));
const DEFAULT_FACET_PRESET_STORAGE_CONFIG = {
  strategy: 'local',
  keyPrefix: 'ngx-mat-facet-presets',
  callbacks: {}
};
var FacetIdentifierStrategy;
(function (FacetIdentifierStrategy) {
  FacetIdentifierStrategy["WindowURL"] = "windowURL";
  FacetIdentifierStrategy["ParentID"] = "parentID";
  FacetIdentifierStrategy["Random"] = "random";
  FacetIdentifierStrategy["Manual"] = "manual";
})(FacetIdentifierStrategy || (FacetIdentifierStrategy = {}));
const DEFAULT_FACET_TOOLKIT_CONFIG = {
  allowDebugClick: false,
  chipRowScrollable: false,
  identifierStrategy: FacetIdentifierStrategy.ParentID,
  loggingCallback: () => {},
  presetStorage: DEFAULT_FACET_PRESET_STORAGE_CONFIG,
  showFilterCount: false,
  storage: 'session',
  themeMode: 'auto',
  themeOverrides: {},
  darkThemeOverrides: {},
  themeVariables: {},
  darkThemeVariables: {},
  applyThemeToRoot: false
};
const FACET_MODAL_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('facet.data');
var FacetResultType;
(function (FacetResultType) {
  FacetResultType[FacetResultType["REMOVE"] = 0] = "REMOVE";
  FacetResultType[FacetResultType["CANCEL"] = 1] = "CANCEL";
  FacetResultType[FacetResultType["ADD"] = 2] = "ADD";
})(FacetResultType || (FacetResultType = {}));
class FocusOnShowDirective {
  el;
  timeout = '0';
  firstElement = true;
  constructor(el) {
    this.el = el;
    if (!el.nativeElement.focus) {
      throw new Error('Element does not accept focus.');
    }
  }
  ngOnInit() {
    if (this.firstElement) {
      setTimeout(() => {
        this.focusInput();
      }, Number(this.timeout) || 0);
    }
  }
  focusInput() {
    const input = this.el.nativeElement;
    input.focus();
    if (this.el.nativeElement.hasOwnProperty('select')) {
      input.select();
    }
  }
  static ɵfac = function FocusOnShowDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FocusOnShowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: FocusOnShowDirective,
    selectors: [["", "focusOnShow", ""]],
    inputs: {
      timeout: [0, "focusOnShow", "timeout"],
      firstElement: "firstElement"
    }
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusOnShowDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[focusOnShow]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }], {
    timeout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['focusOnShow']
    }],
    firstElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class FacetModalRef {
  overlayRef;
  positionStrategy;
  config;
  afterClosedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  beforeClosedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  _result = {
    type: FacetResultType.CANCEL
  };
  constructor(overlayRef, positionStrategy, config) {
    this.overlayRef = overlayRef;
    this.positionStrategy = positionStrategy;
    this.config = config;
    if (!config.disableClose) {
      this.overlayRef.backdropClick().subscribe(() => {
        this.close(this._result);
      });
      this.overlayRef.detachments().subscribe(() => {
        this.beforeClosedSubject.next(this._result);
        this.beforeClosedSubject.complete();
      });
      this.overlayRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event.key === 'Escape')).subscribe(() => {
        this.close();
      });
    }
  }
  close(dialogResult) {
    if (!!dialogResult) {
      this._result = dialogResult;
    }
    this.beforeClosedSubject.next(this._result);
    this.beforeClosedSubject.complete();
    this.afterClosedSubject.next(this._result);
    this.afterClosedSubject.complete();
    this.overlayRef.dispose();
  }
  afterClosed() {
    return this.afterClosedSubject.asObservable();
  }
  beforeClosed() {
    return this.beforeClosedSubject.asObservable();
  }
  positionChanges() {
    if ('positionChanges' in this.positionStrategy) {
      return this.positionStrategy.positionChanges;
    }
    return null;
  }
}
const MAX_TEXT_LENGTH = 60;
class FacetDetailsModalComponent {
  data;
  modalRef;
  typeAheadInputs;
  isUpdate;
  typeaheadText;
  clearButtonDisabled = true;
  resolvedOptions$;
  FacetDataType = FacetDataType;
  FacetFilterType = FacetFilterType;
  typeAheadInputChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
  constructor(data, modalRef) {
    this.data = data;
    this.modalRef = modalRef;
    this.isUpdate = modalRef.config.isUpdate;
  }
  ngOnInit() {
    switch (this.data.type) {
      case FacetDataType.Typeahead:
      case FacetDataType.TypeaheadSingle:
        if (this.data.typeahead?.provider) {
          this.resolvedOptions$ = this.data.typeahead.provider('');
        }
        break;
      case FacetDataType.Date:
        this.data.values = this.data.values?.length ? this.data.values : [{
          value: null
        }];
        break;
      case FacetDataType.DateRange:
        this.data.values = this.data.values?.length ? this.data.values : [{
          value: null
        }, {
          value: null
        }];
        break;
      case FacetDataType.Boolean:
        this.data.values = this.data.values?.length ? this.data.values : [{
          value: null
        }];
        break;
      case FacetDataType.Text:
        this.data.values = this.data.values?.length ? this.data.values : [{
          value: ''
        }];
        this.data.filterType = this.data.filterType || this.data.fixedFilterType || FacetFilterType.contains;
        break;
      case FacetDataType.Numeric:
        this.data.values = this.data.values?.length ? this.data.values : [{
          value: null
        }];
        this.data.filterType = this.data.filterType || this.data.fixedFilterType || FacetFilterType.equal;
        this.ensureNumericValues(this.data.filterType);
        break;
      default:
        this.data.values = this.data.values?.length ? this.data.values : [{
          value: null
        }];
    }
    if (!this.resolvedOptions$ && this.data.options) {
      this.resolvedOptions$ = this.normalizeOptions(this.data.options);
    }
  }
  ngAfterViewInit() {
    if (this.typeAheadInputs.length > 0) {
      this.typeAheadInputChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.resolvedOptions$ = undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(this.data.typeahead?.debounce || 300)).subscribe(search => {
        if (!!this.data.typeahead?.provider) {
          this.data.typeahead.provider(search || '').subscribe(options => {
            this.resolvedOptions$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(options || []);
          });
        }
      });
    }
  }
  typeaheadValueChanged(event) {
    this.typeAheadInputChanged.next(event || '');
    this.clearButtonDisabled = !event || event.length === 0;
  }
  truncateText(txt) {
    if (txt && txt.length) {
      return txt.length > MAX_TEXT_LENGTH ? `${txt.substring(0, MAX_TEXT_LENGTH).trim()}...` : txt;
    } else {
      return txt;
    }
  }
  onOk() {
    this.modalRef.close({
      type: FacetResultType.ADD,
      data: this.data
    });
  }
  onRemove() {
    this.modalRef.close({
      type: FacetResultType.REMOVE,
      data: this.data
    });
  }
  onCancel() {
    this.modalRef.close({
      type: FacetResultType.CANCEL
    });
  }
  onClose() {
    this.modalRef.close();
  }
  validateAndSubmit() {
    if (!this.isUpdateButtonDisabled()) {
      this.onOk();
    }
  }
  isItemSelected = option => (this.data.values || []).some(o => o.value === option.value);
  addOptionToSelected = (facet, option) => {
    const isSelected = (facet.values || []).some(f => f.value === option.value);
    if (isSelected && (facet.type === FacetDataType.Category || facet.type === FacetDataType.Typeahead)) {
      facet.values = (facet.values || []).filter(f => f.value !== option.value);
    } else {
      option.selected = true;
      switch (facet.type) {
        case FacetDataType.Category:
        case FacetDataType.Typeahead:
          facet.values = facet.values || [];
          facet.values.push(option);
          break;
        case FacetDataType.CategorySingle:
        case FacetDataType.TypeaheadSingle:
          facet.values = [option];
          break;
      }
    }
  };
  isUpdateButtonDisabled = () => {
    switch (this.data.type) {
      case FacetDataType.Category:
      case FacetDataType.CategorySingle:
      case FacetDataType.Date:
      case FacetDataType.Text:
      case FacetDataType.Numeric:
      case FacetDataType.Typeahead:
      case FacetDataType.TypeaheadSingle:
        if (this.data.type === FacetDataType.Numeric) {
          const firstValue = this.getRawValue(this.data);
          const secondValue = this.getRawValue(this.data, 1);
          if (this.data.filterType === FacetFilterType.between) {
            return firstValue === null || firstValue === undefined || secondValue === null || secondValue === undefined;
          }
          return firstValue === null || firstValue === undefined || firstValue === '';
        }
        return !(this.data.values || []).some(v => !!v?.value);
      case FacetDataType.DateRange:
        return !this.getRawValue(this.data) || !this.getRawValue(this.data, 1);
      case FacetDataType.Boolean:
        return !this.getRawValue(this.data);
    }
  };
  emptyFunction() {}
  clearInput() {
    this.typeaheadText = null;
    this.typeaheadValueChanged('');
  }
  getRawValue(facet, offset) {
    if (!!facet?.values?.length && facet.values[offset || 0]) {
      return facet.values[offset || 0].value;
    }
    return null;
  }
  setValue(facet, newValue, offset) {
    if (!!facet?.values?.length && facet.values[offset || 0]) {
      facet.values[offset || 0] = {
        ...facet.values[offset || 0],
        value: newValue
      };
    }
  }
  setType(newType) {
    this.data.filterType = newType;
    if (this.data.type === FacetDataType.Numeric) {
      this.ensureNumericValues(newType);
    }
  }
  normalizeOptions(options) {
    return Array.isArray(options) ? (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(options) : options;
  }
  ensureNumericValues(filterType) {
    const firstValue = this.getRawValue(this.data);
    if (filterType === FacetFilterType.between) {
      this.data.values = [{
        value: firstValue ?? null
      }, {
        value: this.getRawValue(this.data, 1)
      }];
      return;
    }
    this.data.values = [{
      value: firstValue ?? null
    }];
  }
  selectionChange(selection, facet, options) {
    const selectedOptions = selection.source.selectedOptions.selected;
    const nextValues = selectedOptions.map(listOption => (options || []).find(option => option.value === listOption.value)).filter(option => !!option);
    facet.values = nextValues;
    if (options) {
      const selectedSet = new Set(nextValues.map(value => value.value));
      options.forEach(option => {
        option.selected = selectedSet.has(option.value);
      });
    }
  }
  static ɵfac = function FacetDetailsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FacetDetailsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FACET_MODAL_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FacetModalRef));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FacetDetailsModalComponent,
    selectors: [["ngx-mat-facet-details-modal"]],
    viewQuery: function FacetDetailsModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeAheadInputs = _t);
      }
    },
    decls: 24,
    vars: 7,
    consts: [["loading", ""], ["noResults", ""], ["typeAheadInput", ""], ["picker", ""], ["startDatePicker", ""], ["endDatePicker", ""], [1, "mat-typography", "details"], [1, "modal-header"], [1, "modal-title"], ["mat-icon-button", "", 1, "modal-close", 3, "click"], [1, "content"], [1, "description"], [1, "category-wrapper"], [1, "typeahead-wrapper"], [1, "date-wrapper"], [1, "date-range-wrapper"], [1, "text-wrapper"], [1, "numeric-wrapper"], [1, "boolean-wrapper"], [1, "actions"], ["mat-flat-button", "", 1, "add-update-button", 3, "click", "color", "disabled"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Delete Filter", "matTooltipPosition", "after", 1, "remove-button"], ["diameter", "20"], [1, "facet-no-results"], [3, "selectionChange", "keydown.enter"], ["focusOnShow", "", 3, "value", "selected", "firstElement"], [4, "ngTemplateOutlet"], ["appearance", "outline", "floatLabel", "auto", 1, "typeahead-form-field"], ["matInput", "", "autocomplete", "off", "focusOnShow", "100", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["focusOnShow", "", 3, "value", "firstElement", "selected"], ["appearance", "outline", "floatLabel", "always", 1, "date-field"], ["matInput", "", "autocomplete", "off", "focusOnShow", "100", "placeholder", "Choose a date", 3, "ngModelChange", "focus", "keydown.enter", "matDatepicker", "ngModel"], ["matSuffix", "", 3, "click", "for"], ["appearance", "outline", "floatLabel", "always"], ["matInput", "", "focusOnShow", "100", "autocomplete", "off", "placeholder", "Choose a starting date", 3, "ngModelChange", "focus", "keydown.enter", "matDatepicker", "ngModel"], ["matInput", "", "autocomplete", "off", "placeholder", "Choose an end date", 3, "ngModelChange", "keydown.enter", "matDatepicker", "ngModel"], ["appearance", "outline", 1, "criteria-field"], ["placeholder", "Criteria Type", 3, "valueChange", "value"], [3, "value"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "focusOnShow", "", "autocomplete", "off", "autofocus", "", 3, "keydown.enter", "ngModelChange", "ngModel", "placeholder"], ["matInput", "", "type", "number", "focusOnShow", "", "autocomplete", "off", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], ["matInput", "", "type", "number", "autocomplete", "off", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], [3, "ngModelChange", "keydown.enter", "ngModel"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Delete Filter", "matTooltipPosition", "after", 1, "remove-button", 3, "click"]],
    template: function FacetDetailsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "mat-toolbar", 7)(2, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetDetailsModalComponent_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onCancel());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FacetDetailsModalComponent_Conditional_8_Template, 2, 1, "p", 11)(9, FacetDetailsModalComponent_ng_template_9_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(11, FacetDetailsModalComponent_ng_template_11_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(13, FacetDetailsModalComponent_Case_13_Template, 4, 3, "div", 12)(14, FacetDetailsModalComponent_Case_14_Template, 10, 7, "div", 13)(15, FacetDetailsModalComponent_Case_15_Template, 8, 4, "div", 14)(16, FacetDetailsModalComponent_Case_16_Template, 15, 8, "div", 15)(17, FacetDetailsModalComponent_Case_17_Template, 18, 8, "div", 16)(18, FacetDetailsModalComponent_Case_18_Template, 19, 8, "div", 17)(19, FacetDetailsModalComponent_Case_19_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19)(21, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetDetailsModalComponent_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onOk());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FacetDetailsModalComponent_Conditional_23_Template, 3, 0, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.data.description ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_4_0 = true) === (ctx.data.type === ctx.FacetDataType.Category || ctx.data.type === ctx.FacetDataType.CategorySingle) ? 13 : tmp_4_0 === (ctx.data.type === ctx.FacetDataType.Typeahead || ctx.data.type === ctx.FacetDataType.TypeaheadSingle) ? 14 : tmp_4_0 === (ctx.data.type === ctx.FacetDataType.Date) ? 15 : tmp_4_0 === (ctx.data.type === ctx.FacetDataType.DateRange) ? 16 : tmp_4_0 === (ctx.data.type === ctx.FacetDataType.Text) ? 17 : tmp_4_0 === (ctx.data.type === ctx.FacetDataType.Numeric) ? 18 : tmp_4_0 === (ctx.data.type === ctx.FacetDataType.Boolean) ? 19 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.isUpdate ? "accent" : "primary")("disabled", ctx.isUpdateButtonDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isUpdate ? "Update" : "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.isUpdate ? 23 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.M, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.h, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.e, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinner, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatSelectionList, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.M, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.j, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.M, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.g, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckbox, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.M, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.g, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.M, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.M, FocusOnShowDirective],
    styles: ["mat-spinner[_ngcontent-%COMP%]{margin:1em auto}.details[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch}.content[_ngcontent-%COMP%]{min-height:120px;padding-top:22px;display:flex;flex-direction:column;align-items:normal}.content[_ngcontent-%COMP%]   mat-selection-list[_ngcontent-%COMP%]{flex:1;max-height:30vh;overflow-y:auto}.actions[_ngcontent-%COMP%]{padding:16px;display:flex;justify-content:space-between;flex-direction:row-reverse}.actions[_ngcontent-%COMP%]   .mat-mdc-unelevated-button[_ngcontent-%COMP%]:not(.mat-mdc-button-disabled):not(:disabled){background:var(--facet-toolkit-modal-action-primary-bg, #3f51b5)!important;color:var(--facet-toolkit-modal-action-primary-text, #ffffff)!important}.actions[_ngcontent-%COMP%]   .mat-mdc-unelevated-button.mat-mdc-button-disabled[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   .mat-mdc-unelevated-button[_ngcontent-%COMP%]:disabled{background:var(--mdc-filled-button-disabled-container-color, rgba(0, 0, 0, .12))!important;color:var(--mdc-filled-button-disabled-label-text-color, rgba(0, 0, 0, .38))!important;cursor:not-allowed}.actions[_ngcontent-%COMP%]   .mat-mdc-stroked-button[_ngcontent-%COMP%]{background:var(--facet-toolkit-modal-action-secondary-bg, transparent)!important;color:var(--facet-toolkit-modal-action-secondary-text, #1c2b46)!important;border-color:var(--facet-toolkit-modal-action-border, rgba(28, 43, 70, .2))!important}.actions[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   .mat-mdc-icon-button.color-warn[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   .mat-mdc-unelevated-button.mat-warn[_ngcontent-%COMP%]{background:var(--facet-toolkit-modal-action-warn-bg, #f44336)!important;color:var(--facet-toolkit-modal-action-warn-text, #ffffff)!important}span.facet-no-results[_ngcontent-%COMP%]{text-align:center;color:gray;margin-top:1em;margin-bottom:1em}.mat-selection-list[_ngcontent-%COMP%]{margin-top:0;padding-top:0}.mat-form-field[_ngcontent-%COMP%]{margin:0!important;padding-left:15px;padding-right:15px}mat-form-field[_ngcontent-%COMP%]{--mdc-outlined-text-field-focus-outline-color: var(--facet-toolkit-modal-input-focus-outline, #3f51b5);--mdc-outlined-text-field-focus-label-text-color: var(--facet-toolkit-modal-input-focus-label, #3f51b5);caret-color:var(--facet-toolkit-modal-input-caret, #3f51b5)}.mat-dialog-actions[_ngcontent-%COMP%]{padding:0 15px 15px}.modal-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center!important;border-top-left-radius:8px;border-top-right-radius:8px;background:var(--facet-toolkit-modal-header-bg, var(--facet-toolkit-modal-header-bg-light, var(--mat-toolbar-container-background-color, #3f51b5)))!important;color:var(--facet-toolkit-modal-header-text, var(--facet-toolkit-modal-header-text-light, var(--mat-toolbar-container-text-color, #ffffff)))!important}.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{height:40px!important;margin:0!important;line-height:45px}p.description[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px;margin-bottom:0;color:gray;flex:1}.date-range-wrapper[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px;display:flex;flex-direction:column;align-items:stretch;justify-content:space-between}.date-range-wrapper[_ngcontent-%COMP%], .category-wrapper[_ngcontent-%COMP%]{margin-top:1em}.boolean-wrapper[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px;flex:4;display:flex;justify-content:flex-start;align-items:center}.text-wrapper[_ngcontent-%COMP%], .numeric-wrapper[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px;display:flex;flex-direction:column;flex:2;margin-top:1rem}.date-wrapper[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px;display:flex;justify-content:center;align-items:center}.date-wrapper[_ngcontent-%COMP%]   .date-field[_ngcontent-%COMP%]{flex:1}.typeahead-wrapper[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px;display:flex;flex-direction:column;align-items:stretch;margin-top:1em}.typeahead-wrapper[_ngcontent-%COMP%]   .typeahead-form-field[_ngcontent-%COMP%]{flex:1}"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
        opacity: '0',
        height: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.animate)('.2s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
        opacity: '1',
        height: '*'
      }))])])]
    }
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacetDetailsModalComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-mat-facet-details-modal',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.h, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.M, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.M, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.M, FocusOnShowDirective],
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
        opacity: '0',
        height: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.animate)('.2s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
        opacity: '1',
        height: '*'
      }))])])],
      template: "<div class=\"mat-typography details\">\n\n<mat-toolbar class=\"modal-header\">\n    <h2 class=\"modal-title\">{{data.label}}</h2>\n    <button class=\"modal-close\" mat-icon-button (click)=\"onCancel()\">\n      <mat-icon>clear</mat-icon>\n    </button>\n  </mat-toolbar>\n\n  <div class=\"content\">\n\n    @if (data.description) {\n      <p class=\"description\">{{data.description}}</p>\n    }\n\n    <ng-template #loading>\n      <mat-spinner diameter=\"20\"></mat-spinner>\n    </ng-template>\n\n    <ng-template #noResults>\n      <span class=\"facet-no-results\" @fadeIn>No Results</span>\n    </ng-template>\n\n    @switch (true) {\n      @case (data.type === FacetDataType.Category || data.type === FacetDataType.CategorySingle) {\n        <div class=\"category-wrapper\">\n          @if (resolvedOptions$ | async; as options) {\n            <mat-divider></mat-divider>\n            @if (options.length > 0) {\n              <mat-selection-list (selectionChange)=\"selectionChange($event, data, options)\"\n                                  (keydown.enter)=\"validateAndSubmit()\">\n                @for (item of options; track item.value) {\n                  <mat-list-option [value]=\"item.value\" [selected]=\"isItemSelected(item)\"\n                                   @fadeIn\n                                   focusOnShow\n                                   [firstElement]=\"$first\">\n                    <span>\n                      {{ item.label ? truncateText(item.label) : \"- empty -\" }}\n                      @if (item.count) {\n                        <small><i>({{item.count}})</i></small>\n                      }\n                    </span>\n                  </mat-list-option>\n                }\n              </mat-selection-list>\n            } @else {\n              <ng-container *ngTemplateOutlet=\"noResults\"></ng-container>\n            }\n            <mat-divider></mat-divider>\n          } @else {\n            <ng-container *ngTemplateOutlet=\"loading\"></ng-container>\n          }\n        </div>\n      }\n      @case (data.type === FacetDataType.Typeahead || data.type === FacetDataType.TypeaheadSingle) {\n        <div class=\"typeahead-wrapper\">\n\n          <mat-form-field class=\"typeahead-form-field\" appearance=\"outline\" floatLabel=\"auto\">\n            <mat-label>Search...</mat-label>\n            <input matInput #typeAheadInput\n                   autocomplete=\"off\"\n                   focusOnShow=\"100\"\n                   [(ngModel)]=\"typeaheadText\"\n                   placeholder=\"{{(data.typeahead || {placeholder: ''}).placeholder}}\"\n                   (ngModelChange)=\"typeaheadValueChanged($event)\"\n                   (keydown.enter)=\"validateAndSubmit()\"/>\n\n            @if (!clearButtonDisabled) {\n              <button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearInput()\">\n                <mat-icon>clear</mat-icon>\n              </button>\n            }\n          </mat-form-field>\n\n          @if (resolvedOptions$ | async; as options) {\n            <mat-divider></mat-divider>\n            @if (options.length > 0) {\n              <mat-selection-list (selectionChange)=\"selectionChange($event, data, options)\"\n                                  (keydown.enter)=\"validateAndSubmit()\">\n                @for (item of options; track item.value) {\n                  <mat-list-option [value]=\"item.value\"\n                                   @fadeIn\n                                   focusOnShow\n                                   [firstElement]=\"$first\"\n                                   [selected]=\"isItemSelected(item)\">\n                    <span>\n                      {{ item.label ? truncateText(item.label) : \"- empty -\" }}\n                      @if (item.count) {\n                        <small><i>({{item.count}})</i></small>\n                      }\n                    </span>\n                  </mat-list-option>\n                }\n              </mat-selection-list>\n            } @else {\n              <ng-container *ngTemplateOutlet=\"noResults\"></ng-container>\n            }\n            <mat-divider></mat-divider>\n          } @else {\n            <ng-container *ngTemplateOutlet=\"loading\"></ng-container>\n          }\n\n        </div>\n      }\n      @case (data.type === FacetDataType.Date) {\n        <div class=\"date-wrapper\">\n\n          <mat-form-field appearance=\"outline\" floatLabel=\"always\" class=\"date-field\">\n            <mat-label>{{data.label}}</mat-label>\n            <input matInput autocomplete=\"off\" focusOnShow=\"100\" [matDatepicker]=\"picker\" [ngModel]=\"getRawValue(data)\" (ngModelChange)=\"setValue(data, $event)\"\n                   placeholder=\"Choose a date\" (focus)=\"isUpdate ? emptyFunction() : picker.open()\"\n                   (keydown.enter)=\"validateAndSubmit()\"/>\n            <mat-datepicker-toggle matSuffix [for]=\"picker\" (click)=\"picker.open()\"></mat-datepicker-toggle>\n          </mat-form-field>\n          <mat-datepicker #picker></mat-datepicker>\n\n        </div>\n      }\n      @case (data.type === FacetDataType.DateRange) {\n        <div class=\"date-range-wrapper\">\n\n          <mat-form-field appearance=\"outline\" floatLabel=\"always\">\n            <mat-label>{{data.label}} - Start</mat-label>\n            <input matInput focusOnShow=\"100\" autocomplete=\"off\" [matDatepicker]=\"startDatePicker\"\n                   [ngModel]=\"getRawValue(data)\" (ngModelChange)=\"setValue(data, $event)\" placeholder=\"Choose a starting date\"\n                   (focus)=\"isUpdate ? emptyFunction() : startDatePicker.open()\"\n                   (keydown.enter)=\"validateAndSubmit()\"/>\n            <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\" (click)=\"startDatePicker.open()\"></mat-datepicker-toggle>\n          </mat-form-field>\n          <mat-datepicker #startDatePicker></mat-datepicker>\n\n          <mat-form-field appearance=\"outline\" floatLabel=\"always\">\n            <mat-label>{{data.label}} - End</mat-label>\n            <input matInput autocomplete=\"off\" [matDatepicker]=\"endDatePicker\"\n                   [ngModel]=\"getRawValue(data, 1)\" (ngModelChange)=\"setValue(data, $event, 1)\" placeholder=\"Choose an end date\"\n                   (keydown.enter)=\"validateAndSubmit()\"/>\n            <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\" (click)=\"endDatePicker.open()\"></mat-datepicker-toggle>\n          </mat-form-field>\n          <mat-datepicker #endDatePicker></mat-datepicker>\n\n        </div>\n      }\n      @case (data.type === FacetDataType.Text) {\n        <div class=\"text-wrapper\">\n\n          <mat-form-field class=\"criteria-field\" appearance=\"outline\">\n            <mat-label>Criteria Type</mat-label>\n            <mat-select [value]=\"data.fixedFilterType || data.filterType\"\n                        (valueChange)=\"setType($event)\" placeholder=\"Criteria Type\">\n              <mat-option [value]=\"FacetFilterType.contains\">Contains</mat-option>\n              <mat-option [value]=\"FacetFilterType.endsWith\">Ends With</mat-option>\n              <mat-option [value]=\"FacetFilterType.equal\">Equals</mat-option>\n              <mat-option [value]=\"FacetFilterType.startsWith\">Starts With</mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <mat-form-field class=\"search-field\" appearance=\"outline\">\n            <mat-label>Search Text</mat-label>\n            <input matInput focusOnShow (keydown.enter)=\"validateAndSubmit()\" autocomplete=\"off\"\n                   [ngModel]=\"getRawValue(data)\" (ngModelChange)=\"setValue(data, $event)\"\n                   placeholder=\"{{data.placeholder || data.label }}\" autofocus/>\n            @if (data.values) {\n              <button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"data.values = []\">\n                <mat-icon>close</mat-icon>\n              </button>\n            }\n          </mat-form-field>\n\n        </div>\n      }\n      @case (data.type === FacetDataType.Numeric) {\n        <div class=\"numeric-wrapper\">\n\n          <mat-form-field class=\"criteria-field\" appearance=\"outline\">\n            <mat-label>Criteria Type</mat-label>\n            <mat-select [value]=\"data.fixedFilterType || data.filterType\"\n                        (valueChange)=\"setType($event)\" placeholder=\"Criteria Type\">\n              <mat-option [value]=\"FacetFilterType.equal\">Equals</mat-option>\n              <mat-option [value]=\"FacetFilterType.greaterThan\">Greater Than</mat-option>\n              <mat-option [value]=\"FacetFilterType.greaterThanOrEqual\">Greater Than Or Equal</mat-option>\n              <mat-option [value]=\"FacetFilterType.lessThan\">Less Than</mat-option>\n              <mat-option [value]=\"FacetFilterType.lessThanOrEqual\">Less Than Or Equal</mat-option>\n              <mat-option [value]=\"FacetFilterType.between\">Between</mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          @if (data.filterType === FacetFilterType.between) {\n            <mat-form-field class=\"search-field\" appearance=\"outline\">\n              <mat-label>Minimum</mat-label>\n              <input matInput type=\"number\" focusOnShow autocomplete=\"off\"\n                     [ngModel]=\"getRawValue(data)\" (ngModelChange)=\"setValue(data, $event)\"\n                     placeholder=\"{{data.placeholder || data.label }}\"\n                     (keydown.enter)=\"validateAndSubmit()\"/>\n            </mat-form-field>\n\n            <mat-form-field class=\"search-field\" appearance=\"outline\">\n              <mat-label>Maximum</mat-label>\n              <input matInput type=\"number\" autocomplete=\"off\"\n                     [ngModel]=\"getRawValue(data, 1)\" (ngModelChange)=\"setValue(data, $event, 1)\"\n                     placeholder=\"{{data.placeholder || data.label }}\"\n                     (keydown.enter)=\"validateAndSubmit()\"/>\n            </mat-form-field>\n          } @else {\n            <mat-form-field class=\"search-field\" appearance=\"outline\">\n              <mat-label>Value</mat-label>\n              <input matInput type=\"number\" focusOnShow autocomplete=\"off\"\n                     [ngModel]=\"getRawValue(data)\" (ngModelChange)=\"setValue(data, $event)\"\n                     placeholder=\"{{data.placeholder || data.label }}\"\n                     (keydown.enter)=\"validateAndSubmit()\"/>\n            </mat-form-field>\n          }\n\n        </div>\n      }\n      @case (data.type === FacetDataType.Boolean) {\n        <div class=\"boolean-wrapper\">\n          <mat-checkbox [ngModel]=\"getRawValue(data)\" (ngModelChange)=\"setValue(data, $event)\"\n                        (keydown.enter)=\"validateAndSubmit()\">{{data.placeholder || data.label}}</mat-checkbox>\n        </div>\n      }\n    }\n\n  </div>\n\n  <div class=\"actions\">\n\n    <button mat-flat-button class=\"add-update-button\" [color]=\"isUpdate ? 'accent' : 'primary'\" (click)=\"onOk()\"\n            [disabled]=\"isUpdateButtonDisabled()\">{{isUpdate ? 'Update' : 'Add'}}</button>\n\n    @if (isUpdate) {\n      <button mat-icon-button class=\"remove-button\" color=\"warn\" (click)=\"onRemove()\" matTooltip=\"Delete Filter\" matTooltipPosition=\"after\">\n        <mat-icon>delete</mat-icon>\n      </button>\n    }\n\n  </div>\n</div>\n",
      styles: ["mat-spinner{margin:1em auto}.details{display:flex;flex-direction:column;align-items:stretch}.content{min-height:120px;padding-top:22px;display:flex;flex-direction:column;align-items:normal}.content mat-selection-list{flex:1;max-height:30vh;overflow-y:auto}.actions{padding:16px;display:flex;justify-content:space-between;flex-direction:row-reverse}.actions .mat-mdc-unelevated-button:not(.mat-mdc-button-disabled):not(:disabled){background:var(--facet-toolkit-modal-action-primary-bg, #3f51b5)!important;color:var(--facet-toolkit-modal-action-primary-text, #ffffff)!important}.actions .mat-mdc-unelevated-button.mat-mdc-button-disabled,.actions .mat-mdc-unelevated-button:disabled{background:var(--mdc-filled-button-disabled-container-color, rgba(0, 0, 0, .12))!important;color:var(--mdc-filled-button-disabled-label-text-color, rgba(0, 0, 0, .38))!important;cursor:not-allowed}.actions .mat-mdc-stroked-button{background:var(--facet-toolkit-modal-action-secondary-bg, transparent)!important;color:var(--facet-toolkit-modal-action-secondary-text, #1c2b46)!important;border-color:var(--facet-toolkit-modal-action-border, rgba(28, 43, 70, .2))!important}.actions .remove-button,.actions .mat-mdc-icon-button.color-warn,.actions .mat-mdc-unelevated-button.mat-warn{background:var(--facet-toolkit-modal-action-warn-bg, #f44336)!important;color:var(--facet-toolkit-modal-action-warn-text, #ffffff)!important}span.facet-no-results{text-align:center;color:gray;margin-top:1em;margin-bottom:1em}.mat-selection-list{margin-top:0;padding-top:0}.mat-form-field{margin:0!important;padding-left:15px;padding-right:15px}mat-form-field{--mdc-outlined-text-field-focus-outline-color: var(--facet-toolkit-modal-input-focus-outline, #3f51b5);--mdc-outlined-text-field-focus-label-text-color: var(--facet-toolkit-modal-input-focus-label, #3f51b5);caret-color:var(--facet-toolkit-modal-input-caret, #3f51b5)}.mat-dialog-actions{padding:0 15px 15px}.modal-header{display:flex;justify-content:space-between;align-items:center!important;border-top-left-radius:8px;border-top-right-radius:8px;background:var(--facet-toolkit-modal-header-bg, var(--facet-toolkit-modal-header-bg-light, var(--mat-toolbar-container-background-color, #3f51b5)))!important;color:var(--facet-toolkit-modal-header-text, var(--facet-toolkit-modal-header-text-light, var(--mat-toolbar-container-text-color, #ffffff)))!important}.modal-header .modal-title{height:40px!important;margin:0!important;line-height:45px}p.description{padding-left:15px;padding-right:15px;margin-bottom:0;color:gray;flex:1}.date-range-wrapper{padding-left:15px;padding-right:15px;display:flex;flex-direction:column;align-items:stretch;justify-content:space-between}.date-range-wrapper,.category-wrapper{margin-top:1em}.boolean-wrapper{padding-left:15px;padding-right:15px;flex:4;display:flex;justify-content:flex-start;align-items:center}.text-wrapper,.numeric-wrapper{padding-left:15px;padding-right:15px;display:flex;flex-direction:column;flex:2;margin-top:1rem}.date-wrapper{padding-left:15px;padding-right:15px;display:flex;justify-content:center;align-items:center}.date-wrapper .date-field{flex:1}.typeahead-wrapper{padding-left:15px;padding-right:15px;display:flex;flex-direction:column;align-items:stretch;margin-top:1em}.typeahead-wrapper .typeahead-form-field{flex:1}\n"]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [FACET_MODAL_DATA]
    }]
  }, {
    type: FacetModalRef
  }], {
    typeAheadInputs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: ['typeAheadInput']
    }]
  });
})();
const DefaultFacetModalConfig = {
  backdropClass: '',
  disableClose: false,
  hasBackdrop: true,
  panelClass: '',
  isUpdate: false
};
const facetModalAnimations = {
  modalContainer: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.trigger)('modalContainer', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.state)('void, exit', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
    opacity: 0,
    transform: 'scale(0.7)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
    transform: 'none'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.transition)('* => enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
    transform: 'none',
    opacity: 1
  }))), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.transition)('* => void, * => exit', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.animate)('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
    opacity: 0
  })))])
};
class FacetModalComponent extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__.B {
  modalRef;
  portalOutlet;
  hostClass = 'facet-modal-component';
  constructor(modalRef) {
    super();
    this.modalRef = modalRef;
  }
  state = 'enter';
  animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  get animationState() {
    return this.state;
  }
  _onAnimationDone({
    toState,
    totalTime
  }) {
    if (toState === 'enter') {
      this.animationStateChanged.next({
        state: 'opened',
        totalTime
      });
    } else if (toState === 'exit') {
      this.animationStateChanged.next({
        state: 'closed',
        totalTime
      });
    }
  }
  _onAnimationStart({
    toState,
    totalTime
  }) {
    if (toState === 'enter') {
      this.animationStateChanged.next({
        state: 'opening',
        totalTime
      });
    } else if (toState === 'exit' || toState === 'void') {
      this.animationStateChanged.next({
        state: 'closing',
        totalTime
      });
    }
  }
  attachComponentPortal(componentPortal) {
    return this.portalOutlet.attachComponentPortal(componentPortal);
  }
  attachTemplatePortal(portal) {
    throw new Error('Method not implemented.');
  }
  _startExitAnimation() {
    this.state = 'exit';
  }
  static ɵfac = function FacetModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FacetModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FacetModalRef));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FacetModalComponent,
    selectors: [["ngx-facet-modal"]],
    viewQuery: function FacetModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__.f, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.portalOutlet = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function FacetModalComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@modalContainer.done", function FacetModalComponent_animation_modalContainer_done_HostBindingHandler($event) {
          return ctx._onAnimationDone($event);
        })("@modalContainer.start", function FacetModalComponent_animation_modalContainer_start_HostBindingHandler($event) {
          return ctx._onAnimationStart($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@modalContainer", ctx.animationState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.hostClass);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 2,
    vars: 1,
    consts: [["cdkPortalOutlet", ""], [1, "arrow"]],
    template: function FacetModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FacetModalComponent_ng_template_0_Template, 0, 0, "ng-template", 0)(1, FacetModalComponent_Conditional_1_Template, 1, 0, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx.modalRef.config.centered ? 1 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__.h, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__.f],
    styles: ["[_nghost-%COMP%]{position:relative;background:var(--facet-toolkit-modal-surface, var(--facet-toolkit-modal-surface-light, #ffffff))!important;color:var(--facet-toolkit-modal-text, #1c2b46);border-radius:8px;min-width:300px;--facet-toolkit-preset-row-bg-light: rgba(46, 72, 144, .08);--facet-toolkit-preset-row-bg-dark: rgba(148, 163, 184, .12);--facet-toolkit-preset-row-bg: var(--facet-toolkit-preset-row-bg-light);--facet-toolkit-modal-surface-light: #ffffff;--facet-toolkit-modal-surface-dark: #1f2937;--facet-toolkit-modal-text-light: #1c2b46;--facet-toolkit-modal-text-dark: #e2e8f0;--facet-toolkit-modal-header-bg-light: #3f51b5;--facet-toolkit-modal-header-bg-dark: #111827;--facet-toolkit-modal-header-text-light: #ffffff;--facet-toolkit-modal-header-text-dark: #e2e8f0}.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%]{--facet-toolkit-preset-row-bg: var(--facet-toolkit-preset-row-bg-dark);--facet-toolkit-modal-surface: var(--facet-toolkit-modal-surface-dark);--facet-toolkit-modal-text: var(--facet-toolkit-modal-text-dark)}.facet-theme-light[_nghost-%COMP%], .facet-theme-light   [_nghost-%COMP%]{--facet-toolkit-preset-row-bg: var(--facet-toolkit-preset-row-bg-light);--facet-toolkit-modal-surface: var(--facet-toolkit-modal-surface-light);--facet-toolkit-modal-text: var(--facet-toolkit-modal-text-light)}.facet-theme-dark[_nghost-%COMP%], .facet-theme-dark   [_nghost-%COMP%]{--facet-toolkit-preset-row-bg: var(--facet-toolkit-preset-row-bg-dark);--facet-toolkit-modal-surface: var(--facet-toolkit-modal-surface-dark);--facet-toolkit-modal-text: var(--facet-toolkit-modal-text-dark)}.arrow[_ngcontent-%COMP%]{position:absolute;z-index:-1;width:20px;height:20px;top:-10px;left:24px;border-radius:4px;transform-origin:top left;transform:rotate(45deg);background:var(--facet-toolkit-modal-header-bg, var(--facet-toolkit-modal-header-bg-light, #3f51b5))}"],
    data: {
      animation: [facetModalAnimations.modalContainer]
    }
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacetModalComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-facet-modal',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__.h],
      animations: [facetModalAnimations.modalContainer],
      template: "<ng-template cdkPortalOutlet></ng-template>\n@if (!modalRef.config.centered) {\n  <div class=\"arrow\"></div>\n}\n",
      styles: [":host{position:relative;background:var(--facet-toolkit-modal-surface, var(--facet-toolkit-modal-surface-light, #ffffff))!important;color:var(--facet-toolkit-modal-text, #1c2b46);border-radius:8px;min-width:300px;--facet-toolkit-preset-row-bg-light: rgba(46, 72, 144, .08);--facet-toolkit-preset-row-bg-dark: rgba(148, 163, 184, .12);--facet-toolkit-preset-row-bg: var(--facet-toolkit-preset-row-bg-light);--facet-toolkit-modal-surface-light: #ffffff;--facet-toolkit-modal-surface-dark: #1f2937;--facet-toolkit-modal-text-light: #1c2b46;--facet-toolkit-modal-text-dark: #e2e8f0;--facet-toolkit-modal-header-bg-light: #3f51b5;--facet-toolkit-modal-header-bg-dark: #111827;--facet-toolkit-modal-header-text-light: #ffffff;--facet-toolkit-modal-header-text-dark: #e2e8f0}:host-context(.dark-theme){--facet-toolkit-preset-row-bg: var(--facet-toolkit-preset-row-bg-dark);--facet-toolkit-modal-surface: var(--facet-toolkit-modal-surface-dark);--facet-toolkit-modal-text: var(--facet-toolkit-modal-text-dark)}:host-context(.facet-theme-light){--facet-toolkit-preset-row-bg: var(--facet-toolkit-preset-row-bg-light);--facet-toolkit-modal-surface: var(--facet-toolkit-modal-surface-light);--facet-toolkit-modal-text: var(--facet-toolkit-modal-text-light)}:host-context(.facet-theme-dark){--facet-toolkit-preset-row-bg: var(--facet-toolkit-preset-row-bg-dark);--facet-toolkit-modal-surface: var(--facet-toolkit-modal-surface-dark);--facet-toolkit-modal-text: var(--facet-toolkit-modal-text-dark)}.arrow{position:absolute;z-index:-1;width:20px;height:20px;top:-10px;left:24px;border-radius:4px;transform-origin:top left;transform:rotate(45deg);background:var(--facet-toolkit-modal-header-bg, var(--facet-toolkit-modal-header-bg-light, #3f51b5))}\n"]
    }]
  }], () => [{
    type: FacetModalRef
  }], {
    portalOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__.f, {
        static: true
      }]
    }],
    hostClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class']
    }],
    animationState: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['@modalContainer']
    }],
    _onAnimationDone: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['@modalContainer.done', ['$event']]
    }],
    _onAnimationStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['@modalContainer.start', ['$event']]
    }]
  });
})();
class FacetModalService {
  overlay;
  injector;
  constructor(overlay, injector) {
    this.overlay = overlay;
    this.injector = injector;
  }
  open(component, target, config = {}) {
    const facetModalConfig = Object.assign({}, DefaultFacetModalConfig, config);
    const offsetY = facetModalConfig.offsetY || 0;
    const offsetX = facetModalConfig.offsetX || 0;
    const positionStrategy = facetModalConfig.centered ? this.overlay.position().global().centerHorizontally().centerVertically() : this.overlay.position().flexibleConnectedTo(target).withPush(false).withFlexibleDimensions(true).withPositions([{
      overlayX: 'start',
      overlayY: 'top',
      originX: 'start',
      originY: 'center',
      offsetX,
      offsetY
    }]);
    const overlayRef = this.overlay.create({
      hasBackdrop: facetModalConfig.hasBackdrop ?? true,
      backdropClass: facetModalConfig.backdropClass,
      panelClass: facetModalConfig.panelClass,
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.block()
    });
    if (facetModalConfig.themeVariables) {
      Object.entries(facetModalConfig.themeVariables).forEach(([key, value]) => {
        overlayRef.overlayElement.style.setProperty(key, value);
      });
    }
    if (facetModalConfig.width) {
      overlayRef.updateSize({
        width: facetModalConfig.width
      });
    }
    const modalRef = new FacetModalRef(overlayRef, positionStrategy, facetModalConfig);
    const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
      providers: [{
        provide: FACET_MODAL_DATA,
        useValue: config.data
      }, {
        provide: FacetModalRef,
        useValue: modalRef
      }],
      parent: this.injector
    });
    const modal = overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__.C(FacetModalComponent, null, injector)).instance;
    modal.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__.C(component, null, injector));
    return modalRef;
  }
  static ɵfac = function FacetModalService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FacetModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__.a), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: FacetModalService,
    factory: FacetModalService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacetModalService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__.a
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
  }], null);
})();
class FacetRemoveConfirmModalComponent {
  data;
  modalRef;
  constructor(data, modalRef) {
    this.data = data;
    this.modalRef = modalRef;
  }
  close() {
    this.modalRef.close({
      type: FacetResultType.CANCEL
    });
  }
  confirm() {
    this.modalRef.close({
      type: FacetResultType.ADD,
      data: true
    });
  }
  static ɵfac = function FacetRemoveConfirmModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FacetRemoveConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FACET_MODAL_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FacetModalRef));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FacetRemoveConfirmModalComponent,
    selectors: [["ngx-mat-facet-remove-confirm-modal"]],
    decls: 16,
    vars: 1,
    consts: [[1, "facet-remove-confirm-modal"], [1, "spacer"], ["mat-icon-button", "", "aria-label", "Close remove filter dialog", 3, "click"], [1, "content"], [1, "actions"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "", "color", "warn", 3, "click"]],
    template: function FacetRemoveConfirmModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar")(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Remove filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetRemoveConfirmModalComponent_Template_button_click_5_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetRemoveConfirmModalComponent_Template_button_click_12_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetRemoveConfirmModalComponent_Template_button_click_14_listener() {
          return ctx.confirm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Remove the \"", ctx.data.label, "\" filter?");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.M],
    styles: [".facet-remove-confirm-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;min-width:320px}mat-toolbar[_ngcontent-%COMP%]{background:var(--facet-toolkit-modal-header-bg, var(--facet-toolkit-modal-header-bg-light, var(--mat-toolbar-container-background-color, #3f51b5)))!important;color:var(--facet-toolkit-modal-header-text, var(--facet-toolkit-modal-header-text-light, var(--mat-toolbar-container-text-color, #ffffff)))!important}.spacer[_ngcontent-%COMP%]{flex:1}.content[_ngcontent-%COMP%]{padding:0 16px}.actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px;padding:0 16px 16px}.actions[_ngcontent-%COMP%]   .mat-mdc-unelevated-button.mat-warn[_ngcontent-%COMP%]{background:var(--facet-toolkit-modal-action-warn-bg, #f44336)!important;color:var(--facet-toolkit-modal-action-warn-text, #ffffff)!important}.actions[_ngcontent-%COMP%]   .mat-mdc-stroked-button[_ngcontent-%COMP%]{background:var(--facet-toolkit-modal-action-secondary-bg, transparent)!important;color:var(--facet-toolkit-modal-action-secondary-text, #1c2b46)!important;border-color:var(--facet-toolkit-modal-action-border, rgba(28, 43, 70, .2))!important}"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacetRemoveConfirmModalComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-mat-facet-remove-confirm-modal',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule],
      template: "<div class=\"facet-remove-confirm-modal\">\n  <mat-toolbar>\n    <span>Remove filter</span>\n    <span class=\"spacer\"></span>\n    <button mat-icon-button (click)=\"close()\" aria-label=\"Close remove filter dialog\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-toolbar>\n\n  <div class=\"content\">\n    <p>Remove the \"{{data.label}}\" filter?</p>\n  </div>\n\n  <div class=\"actions\">\n    <button mat-stroked-button (click)=\"close()\">Cancel</button>\n    <button mat-flat-button color=\"warn\" (click)=\"confirm()\">Remove</button>\n  </div>\n</div>\n",
      styles: [".facet-remove-confirm-modal{display:flex;flex-direction:column;gap:12px;min-width:320px}mat-toolbar{background:var(--facet-toolkit-modal-header-bg, var(--facet-toolkit-modal-header-bg-light, var(--mat-toolbar-container-background-color, #3f51b5)))!important;color:var(--facet-toolkit-modal-header-text, var(--facet-toolkit-modal-header-text-light, var(--mat-toolbar-container-text-color, #ffffff)))!important}.spacer{flex:1}.content{padding:0 16px}.actions{display:flex;justify-content:flex-end;gap:8px;padding:0 16px 16px}.actions .mat-mdc-unelevated-button.mat-warn{background:var(--facet-toolkit-modal-action-warn-bg, #f44336)!important;color:var(--facet-toolkit-modal-action-warn-text, #ffffff)!important}.actions .mat-mdc-stroked-button{background:var(--facet-toolkit-modal-action-secondary-bg, transparent)!important;color:var(--facet-toolkit-modal-action-secondary-text, #1c2b46)!important;border-color:var(--facet-toolkit-modal-action-border, rgba(28, 43, 70, .2))!important}\n"]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [FACET_MODAL_DATA]
    }]
  }, {
    type: FacetModalRef
  }], null);
})();
class PresetDeleteModalComponent {
  data;
  modalRef;
  constructor(data, modalRef) {
    this.data = data;
    this.modalRef = modalRef;
  }
  close() {
    this.modalRef.close({
      type: FacetResultType.CANCEL
    });
  }
  confirm() {
    this.modalRef.close({
      type: FacetResultType.ADD,
      data: true
    });
  }
  static ɵfac = function PresetDeleteModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PresetDeleteModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FACET_MODAL_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FacetModalRef));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PresetDeleteModalComponent,
    selectors: [["ngx-mat-facet-preset-delete-modal"]],
    decls: 18,
    vars: 1,
    consts: [[1, "preset-delete-modal"], [1, "spacer"], ["mat-icon-button", "", "aria-label", "Close delete preset dialog", 3, "click"], [1, "content"], [1, "warning"], [1, "actions"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "", "color", "warn", 3, "click"]],
    template: function PresetDeleteModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar")(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete preset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresetDeleteModalComponent_Template_button_click_5_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "This action cannot be undone.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5)(14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresetDeleteModalComponent_Template_button_click_14_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresetDeleteModalComponent_Template_button_click_16_listener() {
          return ctx.confirm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Delete the preset \"", ctx.data.name, "\"?");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.M],
    styles: [".preset-delete-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;min-width:320px}mat-toolbar[_ngcontent-%COMP%]{background:var(--facet-toolkit-modal-header-bg, var(--facet-toolkit-modal-header-bg-light, var(--mat-toolbar-container-background-color, #3f51b5)))!important;color:var(--facet-toolkit-modal-header-text, var(--facet-toolkit-modal-header-text-light, var(--mat-toolbar-container-text-color, #ffffff)))!important}.spacer[_ngcontent-%COMP%]{flex:1}.content[_ngcontent-%COMP%]{padding:0 16px}.warning[_ngcontent-%COMP%]{font-size:12px;opacity:.7}.actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px;padding:0 16px 16px}.actions[_ngcontent-%COMP%]   .mat-mdc-unelevated-button.mat-warn[_ngcontent-%COMP%]{background:var(--facet-toolkit-modal-action-warn-bg, #f44336)!important;color:var(--facet-toolkit-modal-action-warn-text, #ffffff)!important}.actions[_ngcontent-%COMP%]   .mat-mdc-stroked-button[_ngcontent-%COMP%]{background:var(--facet-toolkit-modal-action-secondary-bg, transparent)!important;color:var(--facet-toolkit-modal-action-secondary-text, #1c2b46)!important;border-color:var(--facet-toolkit-modal-action-border, rgba(28, 43, 70, .2))!important}"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresetDeleteModalComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-mat-facet-preset-delete-modal',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule],
      template: "<div class=\"preset-delete-modal\">\n  <mat-toolbar>\n    <span>Delete preset</span>\n    <span class=\"spacer\"></span>\n    <button mat-icon-button (click)=\"close()\" aria-label=\"Close delete preset dialog\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-toolbar>\n\n  <div class=\"content\">\n    <p>Delete the preset \"{{data.name}}\"?</p>\n    <p class=\"warning\">This action cannot be undone.</p>\n  </div>\n\n  <div class=\"actions\">\n    <button mat-stroked-button (click)=\"close()\">Cancel</button>\n    <button mat-flat-button color=\"warn\" (click)=\"confirm()\">Delete</button>\n  </div>\n</div>\n",
      styles: [".preset-delete-modal{display:flex;flex-direction:column;gap:12px;min-width:320px}mat-toolbar{background:var(--facet-toolkit-modal-header-bg, var(--facet-toolkit-modal-header-bg-light, var(--mat-toolbar-container-background-color, #3f51b5)))!important;color:var(--facet-toolkit-modal-header-text, var(--facet-toolkit-modal-header-text-light, var(--mat-toolbar-container-text-color, #ffffff)))!important}.spacer{flex:1}.content{padding:0 16px}.warning{font-size:12px;opacity:.7}.actions{display:flex;justify-content:flex-end;gap:8px;padding:0 16px 16px}.actions .mat-mdc-unelevated-button.mat-warn{background:var(--facet-toolkit-modal-action-warn-bg, #f44336)!important;color:var(--facet-toolkit-modal-action-warn-text, #ffffff)!important}.actions .mat-mdc-stroked-button{background:var(--facet-toolkit-modal-action-secondary-bg, transparent)!important;color:var(--facet-toolkit-modal-action-secondary-text, #1c2b46)!important;border-color:var(--facet-toolkit-modal-action-border, rgba(28, 43, 70, .2))!important}\n"]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [FACET_MODAL_DATA]
    }]
  }, {
    type: FacetModalRef
  }], null);
})();
class PresetManagerModalComponent {
  data;
  modalRef;
  modalService;
  elementRef;
  filterText = '';
  editingPresetId = null;
  editingName = '';
  presets = [];
  constructor(data, modalRef, modalService, elementRef) {
    this.data = data;
    this.modalRef = modalRef;
    this.modalService = modalService;
    this.elementRef = elementRef;
    this.presets = [...(data.presets || [])];
  }
  get filteredPresets() {
    const text = (this.filterText || '').trim().toLowerCase();
    if (!text) {
      return this.presets;
    }
    return this.presets.filter(preset => preset.name.toLowerCase().includes(text));
  }
  close() {
    this.modalRef.close({
      type: FacetResultType.CANCEL
    });
  }
  loadPreset(preset) {
    this.data.onLoad(preset);
    this.modalRef.close({
      type: FacetResultType.CANCEL
    });
  }
  startRename(preset) {
    this.editingPresetId = preset.id;
    this.editingName = preset.name;
  }
  confirmRename(preset) {
    const trimmed = (this.editingName || '').trim();
    if (!trimmed) {
      return;
    }
    this.data.onRename(preset, trimmed);
    this.presets = this.presets.map(item => item.id === preset.id ? {
      ...item,
      name: trimmed,
      updatedAt: new Date().toISOString()
    } : item);
    this.editingPresetId = null;
    this.editingName = '';
  }
  cancelRename() {
    this.editingPresetId = null;
    this.editingName = '';
  }
  deletePreset(preset) {
    const modalRef = this.modalService.open(PresetDeleteModalComponent, this.elementRef.nativeElement, {
      centered: true,
      data: {
        name: preset.name
      },
      panelClass: this.modalRef.config.panelClass,
      themeVariables: this.modalRef.config.themeVariables,
      width: '320px'
    });
    modalRef.afterClosed().subscribe(result => {
      if (result.type !== FacetResultType.ADD) {
        return;
      }
      this.data.onDelete(preset);
      this.presets = this.presets.filter(item => item.id !== preset.id);
    });
  }
  static ɵfac = function PresetManagerModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PresetManagerModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FACET_MODAL_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FacetModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FacetModalService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PresetManagerModalComponent,
    selectors: [["ngx-mat-facet-preset-manager-modal"]],
    decls: 18,
    vars: 3,
    consts: [["presetMenu", "matMenu"], [1, "preset-manager-modal"], [1, "spacer"], ["mat-icon-button", "", "aria-label", "Close preset manager", 3, "click"], [1, "search-row"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear search", 3, "click", 4, "ngIf"], [1, "preset-list"], [1, "empty-state"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear search", 3, "click"], [1, "preset-row"], [1, "preset-info"], [1, "preset-name"], [1, "preset-meta"], [1, "preset-actions"], ["mat-icon-button", "", "aria-label", "Preset actions", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "rename-row"], ["matInput", "", 3, "ngModelChange", "keydown.enter", "ngModel"], ["mat-icon-button", "", "aria-label", "Confirm rename", 3, "click", "disabled"], ["mat-icon-button", "", "aria-label", "Cancel rename", 3, "click"]],
    template: function PresetManagerModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "mat-toolbar")(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Manage Presets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresetManagerModalComponent_Template_button_click_5_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "mat-form-field", 5)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Search presets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PresetManagerModalComponent_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.filterText, $event) || (ctx.filterText = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PresetManagerModalComponent_button_13_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PresetManagerModalComponent_Conditional_15_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](16, PresetManagerModalComponent_For_17_Template, 28, 4, null, null, _forTrack1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.filterText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.filteredPresets.length === 0 ? 15 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.filteredPresets);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.M, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.M, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.j, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.M, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.g, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuTrigger],
    styles: [".preset-manager-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;min-width:360px}mat-toolbar[_ngcontent-%COMP%]{background:var(--facet-toolkit-modal-header-bg, var(--facet-toolkit-modal-header-bg-light, var(--mat-toolbar-container-background-color, #3f51b5)))!important;color:var(--facet-toolkit-modal-header-text, var(--facet-toolkit-modal-header-text-light, var(--mat-toolbar-container-text-color, #ffffff)))!important}.spacer[_ngcontent-%COMP%]{flex:1}.search-row[_ngcontent-%COMP%]{padding:0 16px}.preset-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;padding:0 16px 16px;max-height:320px;overflow:auto}.preset-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 10px;border-radius:10px;background:var(--facet-toolkit-preset-row-bg, rgba(46, 72, 144, .08))}.preset-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.preset-name[_ngcontent-%COMP%]{font-weight:600}.preset-meta[_ngcontent-%COMP%]{font-size:12px;opacity:.7}.preset-actions[_ngcontent-%COMP%]{display:flex;align-items:center}.preset-actions[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]{color:var(--facet-toolkit-modal-action-secondary-text, #1c2b46)!important}.rename-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.rename-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}.rename-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{--mdc-outlined-text-field-focus-outline-color: var(--facet-toolkit-modal-input-focus-outline, #3f51b5);--mdc-outlined-text-field-focus-label-text-color: var(--facet-toolkit-modal-input-focus-label, #3f51b5);caret-color:var(--facet-toolkit-modal-input-caret, #3f51b5)}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:16px;opacity:.7}.rename-row[_ngcontent-%COMP%]   .mat-mdc-unelevated-button[_ngcontent-%COMP%]{background:var(--facet-toolkit-modal-action-primary-bg, #3f51b5)!important;color:var(--facet-toolkit-modal-action-primary-text, #ffffff)!important}.rename-row[_ngcontent-%COMP%]   .mat-mdc-stroked-button[_ngcontent-%COMP%]{background:var(--facet-toolkit-modal-action-secondary-bg, transparent)!important;color:var(--facet-toolkit-modal-action-secondary-text, #1c2b46)!important;border-color:var(--facet-toolkit-modal-action-border, rgba(28, 43, 70, .2))!important}.dark-theme[_nghost-%COMP%]   .preset-meta[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .preset-meta[_ngcontent-%COMP%], .facet-theme-dark[_nghost-%COMP%]   .preset-meta[_ngcontent-%COMP%], .facet-theme-dark   [_nghost-%COMP%]   .preset-meta[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .empty-state[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .empty-state[_ngcontent-%COMP%], .facet-theme-dark[_nghost-%COMP%]   .empty-state[_ngcontent-%COMP%], .facet-theme-dark   [_nghost-%COMP%]   .empty-state[_ngcontent-%COMP%]{opacity:.8}"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresetManagerModalComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-mat-facet-preset-manager-modal',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.M, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuModule],
      template: "<div class=\"preset-manager-modal\">\n  <mat-toolbar>\n    <span>Manage Presets</span>\n    <span class=\"spacer\"></span>\n    <button mat-icon-button (click)=\"close()\" aria-label=\"Close preset manager\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-toolbar>\n\n  <div class=\"search-row\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Search presets</mat-label>\n      <input matInput [(ngModel)]=\"filterText\">\n      <button matSuffix mat-icon-button aria-label=\"Clear search\" *ngIf=\"filterText\" (click)=\"filterText = ''\">\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-form-field>\n  </div>\n\n  <div class=\"preset-list\">\n    @if (filteredPresets.length === 0) {\n      <div class=\"empty-state\">No presets found.</div>\n    }\n\n    @for (preset of filteredPresets; track preset.id) {\n      <div class=\"preset-row\">\n        <div class=\"preset-info\">\n          <div class=\"preset-name\">{{preset.name}}</div>\n          <div class=\"preset-meta\">{{preset.selections.length}} filters</div>\n        </div>\n        <div class=\"preset-actions\">\n          <button mat-icon-button [matMenuTriggerFor]=\"presetMenu\" aria-label=\"Preset actions\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n          <mat-menu #presetMenu=\"matMenu\">\n            <button mat-menu-item (click)=\"loadPreset(preset)\">\n              <mat-icon>upload</mat-icon>\n              <span>Load</span>\n            </button>\n            <button mat-menu-item (click)=\"startRename(preset)\">\n              <mat-icon>edit</mat-icon>\n              <span>Rename</span>\n            </button>\n            <button mat-menu-item (click)=\"deletePreset(preset)\">\n              <mat-icon>delete</mat-icon>\n              <span>Delete</span>\n            </button>\n          </mat-menu>\n        </div>\n      </div>\n\n      @if (editingPresetId === preset.id) {\n        <div class=\"rename-row\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Preset name</mat-label>\n            <input matInput [(ngModel)]=\"editingName\" (keydown.enter)=\"confirmRename(preset)\">\n          </mat-form-field>\n          <button mat-icon-button (click)=\"confirmRename(preset)\" [disabled]=\"!editingName.trim()\" aria-label=\"Confirm rename\">\n            <mat-icon>check</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"cancelRename()\" aria-label=\"Cancel rename\">\n            <mat-icon>close</mat-icon>\n          </button>\n        </div>\n      }\n    }\n  </div>\n</div>\n",
      styles: [".preset-manager-modal{display:flex;flex-direction:column;gap:12px;min-width:360px}mat-toolbar{background:var(--facet-toolkit-modal-header-bg, var(--facet-toolkit-modal-header-bg-light, var(--mat-toolbar-container-background-color, #3f51b5)))!important;color:var(--facet-toolkit-modal-header-text, var(--facet-toolkit-modal-header-text-light, var(--mat-toolbar-container-text-color, #ffffff)))!important}.spacer{flex:1}.search-row{padding:0 16px}.preset-list{display:flex;flex-direction:column;gap:12px;padding:0 16px 16px;max-height:320px;overflow:auto}.preset-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 10px;border-radius:10px;background:var(--facet-toolkit-preset-row-bg, rgba(46, 72, 144, .08))}.preset-info{display:flex;flex-direction:column;gap:2px}.preset-name{font-weight:600}.preset-meta{font-size:12px;opacity:.7}.preset-actions{display:flex;align-items:center}.preset-actions .mat-mdc-icon-button{color:var(--facet-toolkit-modal-action-secondary-text, #1c2b46)!important}.rename-row{display:flex;align-items:center;gap:8px}.rename-row mat-form-field{flex:1}.rename-row mat-form-field{--mdc-outlined-text-field-focus-outline-color: var(--facet-toolkit-modal-input-focus-outline, #3f51b5);--mdc-outlined-text-field-focus-label-text-color: var(--facet-toolkit-modal-input-focus-label, #3f51b5);caret-color:var(--facet-toolkit-modal-input-caret, #3f51b5)}.empty-state{text-align:center;padding:16px;opacity:.7}.rename-row .mat-mdc-unelevated-button{background:var(--facet-toolkit-modal-action-primary-bg, #3f51b5)!important;color:var(--facet-toolkit-modal-action-primary-text, #ffffff)!important}.rename-row .mat-mdc-stroked-button{background:var(--facet-toolkit-modal-action-secondary-bg, transparent)!important;color:var(--facet-toolkit-modal-action-secondary-text, #1c2b46)!important;border-color:var(--facet-toolkit-modal-action-border, rgba(28, 43, 70, .2))!important}:host-context(.dark-theme) .preset-meta,:host-context(.facet-theme-dark) .preset-meta,:host-context(.dark-theme) .empty-state,:host-context(.facet-theme-dark) .empty-state{opacity:.8}\n"]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [FACET_MODAL_DATA]
    }]
  }, {
    type: FacetModalRef
  }, {
    type: FacetModalService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }], null);
})();
class PresetNameModalComponent {
  data;
  modalRef;
  name = '';
  constructor(data, modalRef) {
    this.data = data;
    this.modalRef = modalRef;
    this.name = (data.initialName || '').trim();
  }
  close() {
    this.modalRef.close({
      type: FacetResultType.CANCEL
    });
  }
  save() {
    const trimmed = (this.name || '').trim();
    if (!trimmed) {
      return;
    }
    this.modalRef.close({
      type: FacetResultType.ADD,
      data: trimmed
    });
  }
  static ɵfac = function PresetNameModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PresetNameModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FACET_MODAL_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FacetModalRef));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PresetNameModalComponent,
    selectors: [["ngx-mat-facet-preset-name-modal"]],
    decls: 18,
    vars: 5,
    consts: [[1, "preset-name-modal"], [1, "spacer"], ["mat-icon-button", "", "aria-label", "Close preset name dialog", 3, "click"], [1, "content"], ["appearance", "outline"], ["matInput", "", "focusOnShow", "", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "actions"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click", "disabled"]],
    template: function PresetNameModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar")(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresetNameModalComponent_Template_button_click_5_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "mat-form-field", 4)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PresetNameModalComponent_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.name, $event) || (ctx.name = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function PresetNameModalComponent_Template_input_keydown_enter_12_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6)(14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresetNameModalComponent_Template_button_click_14_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresetNameModalComponent_Template_button_click_16_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.placeholder || "Preset name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.name.trim());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.confirmLabel || "Save", " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.M, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.M, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.j, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.M, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, FocusOnShowDirective],
    styles: [".preset-name-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;min-width:300px}mat-toolbar[_ngcontent-%COMP%]{background:var(--facet-toolkit-modal-header-bg, var(--facet-toolkit-modal-header-bg-light, var(--mat-toolbar-container-background-color, #3f51b5)))!important;color:var(--facet-toolkit-modal-header-text, var(--facet-toolkit-modal-header-text-light, var(--mat-toolbar-container-text-color, #ffffff)))!important}.spacer[_ngcontent-%COMP%]{flex:1}.content[_ngcontent-%COMP%]{padding:0 16px}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]{--mdc-outlined-text-field-focus-outline-color: var(--facet-toolkit-modal-input-focus-outline, #3f51b5);--mdc-outlined-text-field-focus-label-text-color: var(--facet-toolkit-modal-input-focus-label, #3f51b5);caret-color:var(--facet-toolkit-modal-input-caret, #3f51b5)}.actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px;padding:0 16px 16px}.actions[_ngcontent-%COMP%]   .mat-mdc-unelevated-button[_ngcontent-%COMP%]{background:var(--facet-toolkit-modal-action-primary-bg, #3f51b5)!important;color:var(--facet-toolkit-modal-action-primary-text, #ffffff)!important}.actions[_ngcontent-%COMP%]   .mat-mdc-stroked-button[_ngcontent-%COMP%]{background:var(--facet-toolkit-modal-action-secondary-bg, transparent)!important;color:var(--facet-toolkit-modal-action-secondary-text, #1c2b46)!important;border-color:var(--facet-toolkit-modal-action-border, rgba(28, 43, 70, .2))!important}"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresetNameModalComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-mat-facet-preset-name-modal',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.M, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, FocusOnShowDirective],
      template: "<div class=\"preset-name-modal\">\n  <mat-toolbar>\n    <span>{{data.title}}</span>\n    <span class=\"spacer\"></span>\n    <button mat-icon-button (click)=\"close()\" aria-label=\"Close preset name dialog\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-toolbar>\n\n  <div class=\"content\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>{{data.placeholder || 'Preset name'}}</mat-label>\n      <input matInput [(ngModel)]=\"name\" (keydown.enter)=\"save()\" focusOnShow>\n    </mat-form-field>\n  </div>\n\n  <div class=\"actions\">\n    <button mat-stroked-button (click)=\"close()\">Cancel</button>\n    <button mat-flat-button color=\"primary\" [disabled]=\"!name.trim()\" (click)=\"save()\">\n      {{data.confirmLabel || 'Save'}}\n    </button>\n  </div>\n</div>\n",
      styles: [".preset-name-modal{display:flex;flex-direction:column;gap:12px;min-width:300px}mat-toolbar{background:var(--facet-toolkit-modal-header-bg, var(--facet-toolkit-modal-header-bg-light, var(--mat-toolbar-container-background-color, #3f51b5)))!important;color:var(--facet-toolkit-modal-header-text, var(--facet-toolkit-modal-header-text-light, var(--mat-toolbar-container-text-color, #ffffff)))!important}.spacer{flex:1}.content{padding:0 16px}mat-form-field{width:100%}mat-form-field{--mdc-outlined-text-field-focus-outline-color: var(--facet-toolkit-modal-input-focus-outline, #3f51b5);--mdc-outlined-text-field-focus-label-text-color: var(--facet-toolkit-modal-input-focus-label, #3f51b5);caret-color:var(--facet-toolkit-modal-input-caret, #3f51b5)}.actions{display:flex;justify-content:flex-end;gap:8px;padding:0 16px 16px}.actions .mat-mdc-unelevated-button{background:var(--facet-toolkit-modal-action-primary-bg, #3f51b5)!important;color:var(--facet-toolkit-modal-action-primary-text, #ffffff)!important}.actions .mat-mdc-stroked-button{background:var(--facet-toolkit-modal-action-secondary-bg, transparent)!important;color:var(--facet-toolkit-modal-action-secondary-text, #1c2b46)!important;border-color:var(--facet-toolkit-modal-action-border, rgba(28, 43, 70, .2))!important}\n"]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [FACET_MODAL_DATA]
    }]
  }, {
    type: FacetModalRef
  }], null);
})();
class VCRefInjector {
  raw;
  constructor(injector) {
    this.raw = injector;
  }
  get parentIdentifier() {
    const parent = this.parent;
    if (!!parent) {
      return parent.tagName.toLowerCase();
    }
    return null;
  }
  get parent() {
    if (!!this.raw && this.raw._lView && this.raw._lView.length > 0) {
      return this.raw._lView[0];
    }
    return null;
  }
}
const chipAnimation = [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.trigger)('chipAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
  transform: 'translateX(0)',
  opacity: 0,
  position: 'absolute'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
  transform: 'translateX(-100%)',
  opacity: 1,
  position: '*'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.animate)('200ms ease-out')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.transition)('* => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
  position: 'absolute'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
  transform: 'translateX(-100%)',
  opacity: 0
}))])])];
class FacetStorageService {
  storageStrategy = 'session';
  /**
   * Update the loggingCallback function
   */
  updateLoggingCallback(loggingCallback) {
    this.loggingCallback = loggingCallback;
  }
  /**
   * Saves the selected facets to localStorage for our current identifier
   */
  updateSavedFacets(identifier, selectedFacets) {
    if (!identifier) {
      this.loggingCallback(`Cannot update ${this.mode}, no ID set`);
      return;
    }
    if (this.storageStrategy === 'none') {
      return;
    }
    this.loggingCallback(`Saving facets in ${this.mode} for component with ID`, identifier);
    this.storageBackend?.setItem(identifier, JSON.stringify(selectedFacets));
  }
  /**
   * Clears previously saved facets for this specific component
   */
  clearStorage(identifier) {
    if (!identifier) {
      return;
    }
    if (this.storageStrategy === 'none') {
      return;
    }
    this.loggingCallback(`Clearing ${this.mode} for ID`, identifier);
    this.storageBackend?.removeItem(identifier);
  }
  /**
   * Loads facets from storage for our current identifier
   */
  loadFacetsFromStorage(identifier) {
    let sessionFacets = [];
    if (this.storageStrategy === 'none') {
      return [];
    }
    if (!!identifier && !this.checkStorage(identifier)) {
      sessionFacets = JSON.parse(this.storageBackend?.getItem(identifier) || '[]');
      sessionFacets = sessionFacets || [];
      this.loggingCallback('Loaded facets for component with ID', identifier, sessionFacets);
    } else if (!identifier) {
      this.loggingCallback('No identifier set on this component');
    } else if (this.checkStorage(identifier)) {
      this.loggingCallback(`No ${this.mode} variable set for component with ID`, identifier, localStorage.getItem(identifier));
    }
    return sessionFacets;
  }
  loggingCallback = () => {};
  updateStorageStrategy(strategy) {
    this.storageStrategy = strategy;
  }
  get mode() {
    if (this.storageStrategy === 'none') {
      return 'none';
    }
    return this.storageStrategy === 'local' ? 'localStorage' : 'sessionStorage';
  }
  checkStorage(key) {
    return !this.storageBackend?.getItem(key);
  }
  get storageBackend() {
    if (this.storageStrategy === 'none') {
      return null;
    }
    return this.storageStrategy === 'local' ? localStorage : sessionStorage;
  }
  static ɵfac = function FacetStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FacetStorageService)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: FacetStorageService,
    factory: FacetStorageService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacetStorageService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class FacetPresetStorageService {
  loggingCallback = () => {};
  storageStrategy = DEFAULT_FACET_PRESET_STORAGE_CONFIG.strategy || 'local';
  keyPrefix = DEFAULT_FACET_PRESET_STORAGE_CONFIG.keyPrefix || 'ngx-mat-facet-presets';
  callbacks = DEFAULT_FACET_PRESET_STORAGE_CONFIG.callbacks || {};
  updateLoggingCallback(loggingCallback) {
    this.loggingCallback = loggingCallback;
  }
  updateStorageStrategy(strategy) {
    this.storageStrategy = strategy;
  }
  updateStorageKeyPrefix(prefix) {
    if (!prefix) {
      return;
    }
    this.keyPrefix = prefix;
  }
  updateStorageCallbacks(callbacks) {
    this.callbacks = callbacks || {};
  }
  updateStorageConfig(config) {
    if (!config) {
      return;
    }
    if (config.strategy) {
      this.storageStrategy = config.strategy;
    }
    if (config.keyPrefix) {
      this.keyPrefix = config.keyPrefix;
    }
    if (config.callbacks) {
      this.callbacks = config.callbacks;
    }
  }
  loadPresets(identifier) {
    if (!identifier) {
      this.loggingCallback('Cannot load presets, no ID set');
      return [];
    }
    if (this.callbacks.loadPresets) {
      return this.callbacks.loadPresets(identifier) || [];
    }
    if (this.storageStrategy === 'none') {
      return [];
    }
    const stored = this.storageBackend?.getItem(this.getStorageKey(identifier));
    if (!stored) {
      return [];
    }
    try {
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed)) {
        return [];
      }
      return parsed;
    } catch {
      this.loggingCallback('Failed to parse preset storage for ID', identifier);
      return [];
    }
  }
  savePresets(identifier, presets) {
    if (!identifier) {
      this.loggingCallback('Cannot save presets, no ID set');
      return;
    }
    if (this.callbacks.savePresets) {
      this.callbacks.savePresets(identifier, presets || []);
      return;
    }
    if (this.storageStrategy === 'none') {
      return;
    }
    this.storageBackend?.setItem(this.getStorageKey(identifier), JSON.stringify(presets || []));
  }
  clearPresets(identifier) {
    if (!identifier) {
      this.loggingCallback('Cannot clear presets, no ID set');
      return;
    }
    if (this.callbacks.clearPresets) {
      this.callbacks.clearPresets(identifier);
      return;
    }
    if (this.storageStrategy === 'none') {
      return;
    }
    this.storageBackend?.removeItem(this.getStorageKey(identifier));
  }
  getStorageKey(identifier) {
    return `${this.keyPrefix}:${identifier}`;
  }
  get storageBackend() {
    if (this.storageStrategy === 'none') {
      return null;
    }
    return this.storageStrategy === 'local' ? localStorage : sessionStorage;
  }
  static ɵfac = function FacetPresetStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FacetPresetStorageService)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: FacetPresetStorageService,
    factory: FacetPresetStorageService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacetPresetStorageService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
const FACET_TOOLKIT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Facet Toolkit Configuration', {
  providedIn: 'root',
  factory: () => DEFAULT_FACET_TOOLKIT_CONFIG
});
const provideFacetToolkitConfig = config => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.makeEnvironmentProviders)([(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.provideNativeDateAdapter)(), {
  provide: FACET_TOOLKIT_CONFIG,
  useValue: {
    ...DEFAULT_FACET_TOOLKIT_CONFIG,
    ...config
  }
}]);
class CSVPipe {
  transform(value, objectKeyName, separator) {
    return value.map(e => objectKeyName ? e[objectKeyName] : e).join(separator || ',');
  }
  static ɵfac = function CSVPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CSVPipe)();
  };
  static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "csv",
    type: CSVPipe,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CSVPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'csv',
      standalone: true,
      pure: false
    }]
  }], null, null);
})();
class FilterPipe {
  transform(objectArray, fieldName, fieldValue) {
    return objectArray.filter(obj => obj[fieldName] === fieldValue);
  }
  static ɵfac = function FilterPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FilterPipe)();
  };
  static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "filter",
    type: FilterPipe,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'filter',
      standalone: true,
      pure: false
    }]
  }], null, null);
})();
class KeysPipe {
  transform(value) {
    return Object.keys(value).map(k => ({
      key: k,
      value: k
    }));
  }
  static ɵfac = function KeysPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || KeysPipe)();
  };
  static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "keys",
    type: KeysPipe,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'keys',
      standalone: true,
      pure: false
    }]
  }], null, null);
})();
const THEME_VAR_MAP = {
  inputBg: '--facet-toolkit-input-bg',
  inputShadow: '--facet-toolkit-input-shadow',
  inputHoverBg: '--facet-toolkit-input-hover-bg',
  inputHoverShadow: '--facet-toolkit-input-hover-shadow',
  inputFocusShadow: '--facet-toolkit-input-focus-shadow',
  inputText: '--facet-toolkit-input-text',
  inputPlaceholder: '--facet-toolkit-input-placeholder',
  addIcon: '--facet-toolkit-add-icon',
  presetTrigger: '--facet-toolkit-preset-trigger',
  countDivider: '--facet-toolkit-count-divider',
  countBg: '--facet-toolkit-count-bg',
  countText: '--facet-toolkit-count-text',
  scrollbarThumb: '--facet-toolkit-scrollbar-thumb',
  presetRowBg: '--facet-toolkit-preset-row-bg',
  modalSurface: '--facet-toolkit-modal-surface',
  modalText: '--facet-toolkit-modal-text',
  modalHeaderBg: '--facet-toolkit-modal-header-bg',
  modalHeaderText: '--facet-toolkit-modal-header-text',
  menuSurface: '--facet-toolkit-menu-surface',
  menuText: '--facet-toolkit-menu-text',
  menuHoverBg: '--facet-toolkit-menu-hover-bg',
  clearButtonBg: '--facet-toolkit-clear-button-bg',
  clearButtonText: '--facet-toolkit-clear-button-text',
  modalActionPrimaryBg: '--facet-toolkit-modal-action-primary-bg',
  modalActionPrimaryText: '--facet-toolkit-modal-action-primary-text',
  modalActionSecondaryBg: '--facet-toolkit-modal-action-secondary-bg',
  modalActionSecondaryText: '--facet-toolkit-modal-action-secondary-text',
  modalActionWarnBg: '--facet-toolkit-modal-action-warn-bg',
  modalActionWarnText: '--facet-toolkit-modal-action-warn-text',
  modalActionBorder: '--facet-toolkit-modal-action-border',
  modalInputFocusOutline: '--facet-toolkit-modal-input-focus-outline',
  modalInputFocusLabel: '--facet-toolkit-modal-input-focus-label',
  modalInputCaret: '--facet-toolkit-modal-input-caret',
  chipSelectedBg: '--facet-toolkit-chip-selected-bg',
  chipSelectedText: '--facet-toolkit-chip-selected-text'
};
const mergeThemeVariables = (base, override) => ({
  ...(base || {}),
  ...(override || {})
});
const mapThemeVariables = (variables, suffix) => {
  if (!variables) {
    return {};
  }
  return Object.entries(variables).reduce((acc, [key, value]) => {
    if (!value) {
      return acc;
    }
    const trimmedKey = key.trim();
    if (!trimmedKey) {
      return acc;
    }
    if (trimmedKey.endsWith('-light') || trimmedKey.endsWith('-dark')) {
      acc[trimmedKey] = value;
      return acc;
    }
    if (trimmedKey.startsWith('--facet-toolkit-')) {
      acc[`${trimmedKey}-${suffix}`] = value;
      return acc;
    }
    acc[trimmedKey] = value;
    return acc;
  }, {});
};
const mapThemeOverrides = (overrides, suffix) => {
  if (!overrides) {
    return {};
  }
  return Object.entries(overrides).reduce((acc, [key, value]) => {
    if (!value) {
      return acc;
    }
    const varName = THEME_VAR_MAP[key];
    if (!varName) {
      return acc;
    }
    acc[`${varName}-${suffix}`] = value;
    return acc;
  }, {});
};
class NgxMatFacetToolkitComponent {
  facets = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([]);
  config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)({});
  placeholder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)('Filter Table...');
  clearButtonText = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)('Clear Filters');
  clearButtonEnabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(true);
  dateFormat = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)('M/d/yyyy');
  tooltip = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(null);
  displayFilterIcon = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(true);
  facetWidth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)('400px');
  facetHasBackdrop = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(true);
  confirmOnRemove = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(true);
  chipLabelsEnabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(true);
  identifier = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(null);
  themeMode = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(null);
  themeOverrides = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(null);
  darkThemeOverrides = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(null);
  themeVariables = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(null);
  darkThemeVariables = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(null);
  applyThemeToRoot = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(null);
  hostStyles = {};
  isThemeDark = false;
  isThemeLight = false;
  facetChange = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
  facetRemoved = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
  facetReset = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
  filterInput;
  inputAutoComplete;
  presetMenuButton;
  chipScrollContainer;
  FacetDataType = FacetDataType;
  FacetFilterType = FacetFilterType;
  selectedFacetId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
  filterText = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('');
  injectedConfig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FACET_TOOLKIT_CONFIG);
  storageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FacetStorageService);
  presetStorageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FacetPresetStorageService);
  modal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FacetModalService);
  vcRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
  documentRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_30__.DOCUMENT);
  identifierStrategy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(FacetIdentifierStrategy.ParentID);
  resolvedIdentifier = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
  allowDebugClick = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
  chipRowScrollable = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
  loggingCallback = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(() => {});
  showFilterCount = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
  resolvedThemeMode = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('auto');
  resolvedThemeVariables = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({});
  appliedRootVariables = new Set();
  appliedRootClasses = new Set();
  timeoutHandler = null;
  chipRowResizeObserver = null;
  chipRowUpdateHandle = null;
  injectorRef = new VCRefInjector(this.vcRef.injector);
  selectedFacets = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
  activeFilterCount = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.selectedFacets().length);
  chipRowScrollableEnabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.chipRowScrollable());
  showFilterCountEnabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.showFilterCount());
  facetDefinitions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.facets() || []);
  selectedFacetViews = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.selectedFacets().map(selection => this.toEditorState(selection)).filter(facet => !!facet));
  presets = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
  presetsForMenu = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => [...this.presets()].sort((a, b) => a.name.localeCompare(b.name)));
  chipRowHasOverflow = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
  availableFacets = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const selectedIds = new Set(this.selectedFacets().map(selection => selection.id));
    return this.facetDefinitions().filter(facet => !selectedIds.has(facet.id));
  });
  filteredFacets = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const filterText = this.filterText().toLowerCase();
    if (!filterText) {
      return this.availableFacets();
    }
    return this.availableFacets().filter(facet => facet.label.toLowerCase().includes(filterText));
  });
  constructor() {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
      this.identifier();
      this.themeMode();
      this.themeOverrides();
      this.darkThemeOverrides();
      this.themeVariables();
      this.darkThemeVariables();
      this.applyThemeToRoot();
      const config = {
        ...DEFAULT_FACET_TOOLKIT_CONFIG,
        ...this.injectedConfig,
        ...this.config()
      };
      this.allowDebugClick.set(config.allowDebugClick);
      this.chipRowScrollable.set(config.chipRowScrollable);
      this.identifierStrategy.set(config.identifierStrategy);
      this.loggingCallback.set(config.loggingCallback);
      this.showFilterCount.set(config.showFilterCount);
      this.storageService.updateLoggingCallback(config.loggingCallback);
      this.storageService.updateStorageStrategy(config.storage);
      this.presetStorageService.updateLoggingCallback(config.loggingCallback);
      this.presetStorageService.updateStorageConfig(config.presetStorage);
      this.applyThemeConfig(config);
      this.resolveIdentity();
    });
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
      this.config();
      const identifier = this.resolvedIdentifier();
      this.refreshPresets(identifier);
    });
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
      const facets = this.facetDefinitions();
      const identifier = this.resolvedIdentifier();
      this.refreshSelectionsFromFacets(facets, identifier);
    });
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
      const selections = this.selectedFacets();
      this.facetChange.emit(selections);
    });
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
      this.selectedFacetViews();
      this.scheduleChipRowUpdate();
    });
  }
  static getFixedURL() {
    return window.location.pathname.toString().replace(/\s+/g, '-').replace(/\//g, '-').replace(/^-/g, '').replace(/--/g, '-');
  }
  ngAfterViewInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_31__.fromEvent)(this.filterInput.nativeElement, 'keyup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(150), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.map)(() => this.filterInput.nativeElement.value)).subscribe(text => {
      this.filterText.set(text || '');
    });
    if (this.chipScrollContainer?.nativeElement && typeof ResizeObserver !== 'undefined') {
      this.chipRowResizeObserver = new ResizeObserver(() => {
        this.updateChipRowOverflow();
      });
      this.chipRowResizeObserver.observe(this.chipScrollContainer.nativeElement);
      this.scheduleChipRowUpdate();
    }
  }
  ngOnDestroy() {
    if (this.chipRowResizeObserver) {
      this.chipRowResizeObserver.disconnect();
      this.chipRowResizeObserver = null;
    }
    if (this.chipRowUpdateHandle !== null) {
      cancelAnimationFrame(this.chipRowUpdateHandle);
      this.chipRowUpdateHandle = null;
    }
    this.clearRootThemeVariables();
  }
  chipSelected(event, facet) {
    if (event.selected && !facet.readonly) {
      const elementRef = event.source._elementRef.nativeElement;
      this.facetSelected(facet, {
        top: elementRef.clientHeight - 5,
        left: -3
      }, true, elementRef);
    }
  }
  autoCompleteDisplay(_) {
    return '';
  }
  autoCompleteSelected(event) {
    const selectedFacet = event.option.value;
    const parentElement = this.filterInput.nativeElement;
    if (!!parentElement) {
      const elementRef = parentElement.getBoundingClientRect();
      const top = elementRef.height - 3;
      const left = -38;
      const editorState = this.toEditorState(this.toSelection(selectedFacet, [])) || {
        ...selectedFacet,
        values: [],
        options: this.normalizeOptions(selectedFacet.options)
      };
      this.facetSelected(editorState, {
        top,
        left
      }, false, this.filterInput);
      this.filterInput.nativeElement.value = '';
      this.filterText.set('');
    }
  }
  facetSelected(facet, position, isUpdate, target) {
    this.promptFacet({
      ...facet
    }, position, isUpdate, target);
  }
  promptFacet(facet, position, isUpdate, target) {
    const facetDetailsModal = this.modal.open(FacetDetailsModalComponent, target, {
      data: facet,
      offsetY: position.top,
      offsetX: position.left,
      isUpdate,
      hasBackdrop: this.facetHasBackdrop(),
      width: this.facetWidth()
    });
    facetDetailsModal.beforeClosed().subscribe(() => {
      this.selectedFacetId.set(null);
    });
    facetDetailsModal.afterClosed().subscribe(result => {
      if (result.type === FacetResultType.REMOVE && result.data) {
        this.removeFacet(result.data);
      } else if (result.type === FacetResultType.ADD && result.data) {
        this.addOrUpdateFacet(result.data);
      }
    });
  }
  addOrUpdateFacet(facet) {
    const selection = this.toSelection(facet, facet.values, facet.filterType);
    const nextSelections = this.selectedFacets().filter(existing => existing.id !== selection.id).concat(selection);
    this.selectedFacets.set(nextSelections);
    this.storageService.updateSavedFacets(this.resolvedIdentifier(), nextSelections);
  }
  removeFacet(facet) {
    if (!this.confirmOnRemove()) {
      return this.commitFacetRemoval(facet);
    }
    const target = this.filterInput?.nativeElement;
    const modalRef = this.modal.open(FacetRemoveConfirmModalComponent, target, this.applyModalThemeConfig({
      centered: true,
      data: {
        label: facet.label
      },
      width: '320px'
    }));
    modalRef.afterClosed().subscribe(result => {
      if (result.type !== FacetResultType.ADD) {
        return;
      }
      this.commitFacetRemoval(facet);
    });
    return false;
  }
  reset() {
    const readonlySelections = this.facetDefinitions().filter(facet => facet.readonly && (facet.defaultValues || []).length > 0).map(facet => this.toSelection(facet, facet.defaultValues || []));
    this.selectedFacets.set(readonlySelections);
    this.storageService.clearStorage(this.resolvedIdentifier());
    this.facetReset.emit();
  }
  promptSavePreset() {
    const target = this.presetMenuButton?.nativeElement || this.filterInput?.nativeElement;
    const modalRef = this.modal.open(PresetNameModalComponent, target, this.applyModalThemeConfig({
      data: {
        title: 'Save current filters',
        confirmLabel: 'Save preset',
        placeholder: 'Preset name'
      },
      offsetY: 20,
      offsetX: -10,
      width: '320px'
    }));
    modalRef.afterClosed().subscribe(result => {
      if (result.type !== FacetResultType.ADD || !result.data) {
        return;
      }
      this.savePreset(result.data);
    });
  }
  openPresetManager() {
    const target = this.presetMenuButton?.nativeElement || this.filterInput?.nativeElement;
    this.modal.open(PresetManagerModalComponent, target, this.applyModalThemeConfig({
      data: {
        presets: this.presetsForMenu(),
        onLoad: preset => this.applyPreset(preset),
        onRename: (preset, name) => this.renamePreset(preset, name),
        onDelete: preset => this.deletePreset(preset)
      },
      centered: true,
      width: '380px'
    }));
  }
  applyThemeConfig(config) {
    const resolvedMode = this.themeMode() ?? config.themeMode;
    const resolvedOverrides = {
      ...(config.themeOverrides || {}),
      ...(this.themeOverrides() || {})
    };
    const resolvedDarkOverrides = {
      ...(config.darkThemeOverrides || {}),
      ...(this.darkThemeOverrides() || {})
    };
    const resolvedThemeVars = mergeThemeVariables(config.themeVariables, this.themeVariables());
    const resolvedDarkThemeVars = mergeThemeVariables(config.darkThemeVariables, this.darkThemeVariables());
    const resolvedApplyToRoot = this.applyThemeToRoot() ?? config.applyThemeToRoot;
    this.resolvedThemeMode.set(resolvedMode);
    this.isThemeDark = resolvedMode === 'dark';
    this.isThemeLight = resolvedMode === 'light';
    const mergedVariables = {
      ...mapThemeOverrides(resolvedOverrides, 'light'),
      ...mapThemeOverrides(resolvedDarkOverrides, 'dark'),
      ...mapThemeVariables(resolvedThemeVars, 'light'),
      ...mapThemeVariables(resolvedDarkThemeVars, 'dark')
    };
    this.resolvedThemeVariables.set(mergedVariables);
    this.hostStyles = mergedVariables;
    if (resolvedApplyToRoot) {
      this.applyRootThemeVariables(mergedVariables, resolvedMode);
    } else {
      this.clearRootThemeVariables();
    }
  }
  applyModalThemeConfig(config) {
    const themeMode = this.resolvedThemeMode();
    const themeVariables = this.resolvedThemeVariables();
    const themeClass = themeMode === 'dark' ? 'facet-theme-dark' : themeMode === 'light' ? 'facet-theme-light' : null;
    const panelClass = this.mergePanelClass(config.panelClass, themeClass);
    return {
      ...config,
      panelClass,
      themeVariables
    };
  }
  mergePanelClass(panelClass, themeClass) {
    if (!themeClass) {
      return panelClass;
    }
    if (!panelClass) {
      return themeClass;
    }
    if (Array.isArray(panelClass)) {
      return [...panelClass, themeClass];
    }
    return [panelClass, themeClass];
  }
  applyRootThemeVariables(variables, themeMode) {
    const root = this.documentRef?.documentElement;
    const rootStyle = root?.style;
    if (!rootStyle || !root) {
      return;
    }
    this.appliedRootVariables.forEach(key => rootStyle.removeProperty(key));
    this.appliedRootVariables.clear();
    Object.entries(variables).forEach(([key, value]) => {
      if (!key || !value) {
        return;
      }
      rootStyle.setProperty(key, value);
      this.appliedRootVariables.add(key);
    });
    const effectiveMode = this.getEffectiveThemeMode(themeMode);
    Object.entries(variables).forEach(([key, value]) => {
      if (!key || !value) {
        return;
      }
      const suffix = `-${effectiveMode}`;
      if (key.endsWith(suffix)) {
        const baseKey = key.slice(0, -suffix.length);
        rootStyle.setProperty(baseKey, value);
        this.appliedRootVariables.add(baseKey);
      }
    });
    this.appliedRootClasses.forEach(className => root.classList.remove(className));
    this.appliedRootClasses.clear();
    root.classList.add('facet-theme-panel');
    this.appliedRootClasses.add('facet-theme-panel');
    if (themeMode === 'dark') {
      root.classList.add('facet-theme-dark');
      this.appliedRootClasses.add('facet-theme-dark');
    } else if (themeMode === 'light') {
      root.classList.add('facet-theme-light');
      this.appliedRootClasses.add('facet-theme-light');
    }
  }
  getEffectiveThemeMode(themeMode) {
    if (themeMode !== 'auto') {
      return themeMode;
    }
    const body = this.documentRef?.body;
    return body?.classList.contains('dark-theme') ? 'dark' : 'light';
  }
  clearRootThemeVariables() {
    const root = this.documentRef?.documentElement;
    const rootStyle = root?.style;
    if (!rootStyle || !root) {
      return;
    }
    this.appliedRootVariables.forEach(key => rootStyle.removeProperty(key));
    this.appliedRootVariables.clear();
    this.appliedRootClasses.forEach(className => root.classList.remove(className));
    this.appliedRootClasses.clear();
  }
  applyPreset(preset) {
    const facetDefinitions = this.facetDefinitions();
    const presetById = new Map(preset.selections.map(selection => [selection.id, selection]));
    const nextSelections = facetDefinitions.map(facet => {
      const stored = presetById.get(facet.id);
      if (stored) {
        return stored;
      }
      if (facet.readonly && facet.defaultValues && facet.defaultValues.length > 0) {
        return this.toSelection(facet, facet.defaultValues);
      }
      return null;
    }).filter(selection => !!selection);
    this.selectedFacets.set(nextSelections);
    this.storageService.updateSavedFacets(this.resolvedIdentifier(), nextSelections);
  }
  savePreset(name) {
    const identifier = this.resolvedIdentifier();
    if (!identifier) {
      this.loggingCallback()('Cannot save preset, no identifier resolved');
      return;
    }
    const selections = this.cloneSelections(this.selectedFacets());
    const preset = {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_34__["default"])(),
      name,
      identifier,
      selections,
      createdAt: new Date().toISOString()
    };
    const nextPresets = this.presets().concat(preset);
    this.persistPresets(nextPresets);
  }
  renamePreset(preset, name) {
    const nextPresets = this.presets().map(item => item.id === preset.id ? {
      ...item,
      name,
      updatedAt: new Date().toISOString()
    } : item);
    this.persistPresets(nextPresets);
  }
  deletePreset(preset) {
    const nextPresets = this.presets().filter(item => item.id !== preset.id);
    this.persistPresets(nextPresets);
  }
  persistPresets(presets) {
    this.presets.set(presets);
    this.presetStorageService.savePresets(this.resolvedIdentifier(), presets);
  }
  refreshPresets(identifier) {
    if (!identifier) {
      this.presets.set([]);
      return;
    }
    this.presets.set(this.presetStorageService.loadPresets(identifier));
  }
  cloneSelections(selections) {
    return (selections || []).map(selection => ({
      ...selection,
      values: (selection.values || []).map(value => ({
        ...value
      }))
    }));
  }
  commitFacetRemoval(facet) {
    const updatedSelections = this.selectedFacets().filter(selection => selection.id !== facet.id);
    this.selectedFacets.set(updatedSelections);
    this.storageService.updateSavedFacets(this.resolvedIdentifier(), updatedSelections);
    this.facetRemoved.emit(this.toSelection(facet, facet.values, facet.filterType));
    return true;
  }
  scheduleChipRowUpdate() {
    if (!this.chipScrollContainer?.nativeElement) {
      return;
    }
    if (this.chipRowUpdateHandle !== null) {
      return;
    }
    this.chipRowUpdateHandle = requestAnimationFrame(() => {
      this.chipRowUpdateHandle = null;
      this.updateChipRowOverflow();
    });
  }
  updateChipRowOverflow() {
    const container = this.chipScrollContainer?.nativeElement;
    if (!container) {
      return;
    }
    this.chipRowHasOverflow.set(container.scrollWidth > container.clientWidth);
  }
  focus(event) {
    event.stopPropagation();
    this.inputAutoComplete.openPanel();
  }
  getValue(facet, offset) {
    if (!!facet?.values?.length && facet.values[offset || 0]?.value !== undefined) {
      return facet.values[offset || 0];
    }
    return null;
  }
  getRawValue(facet, offset) {
    const value = this.getValue(facet, offset);
    return value ? value.value : null;
  }
  getDateValue(facet, offset) {
    const value = this.getRawValue(facet, offset);
    if (value instanceof Date || typeof value === 'string' || typeof value === 'number') {
      return value;
    }
    return null;
  }
  setValue(facet, newValue, offset) {
    if (!!facet?.values?.length && facet.values[offset || 0]) {
      facet.values[offset || 0] = {
        ...facet.values[offset || 0],
        value: newValue
      };
    }
  }
  identify(identifier) {
    this.loggingCallback()(`Identifying facet with ID: ${identifier}`);
    if (!identifier || identifier.length === 0 || identifier === '-') {
      this.resolvedIdentifier.set('default-facet');
    } else {
      this.resolvedIdentifier.set(`${identifier}-facet`);
    }
  }
  getIdentifierStrategy() {
    return this.identifierStrategy();
  }
  printIdentity() {
    console.log(this.resolvedIdentifier());
  }
  clickStarted() {
    if (!this.allowDebugClick()) {
      return;
    }
    this.timeoutHandler = setTimeout(() => {
      this.printIdentity();
      this.timeoutHandler = null;
    }, 1000);
  }
  clickEnded() {
    if (this.timeoutHandler) {
      clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }
  resolveIdentity(manual) {
    const identifierInput = manual ?? this.identifier();
    let identity;
    this.loggingCallback()('Generating ID with strategy', this.identifierStrategy());
    switch (this.identifierStrategy()) {
      case FacetIdentifierStrategy.WindowURL:
        identity = NgxMatFacetToolkitComponent.getFixedURL();
        break;
      case FacetIdentifierStrategy.ParentID:
        identity = this.injectorRef.parentIdentifier;
        break;
      case FacetIdentifierStrategy.Random:
        identity = (0,uuid__WEBPACK_IMPORTED_MODULE_34__["default"])();
        break;
      default:
        identity = identifierInput;
        break;
    }
    this.identify(identity);
  }
  refreshSelectionsFromFacets(facets, identifier) {
    if (!facets.length) {
      this.selectedFacets.set([]);
      return;
    }
    const storedSelections = this.storageService.loadFacetsFromStorage(identifier);
    const storedById = new Map(storedSelections.map(selection => [selection.id, selection]));
    const nextSelections = facets.map(facet => {
      const stored = storedById.get(facet.id);
      if (stored) {
        return stored;
      }
      if (facet.defaultValues && facet.defaultValues.length > 0) {
        return this.toSelection(facet, facet.defaultValues);
      }
      return null;
    }).filter(selection => !!selection);
    this.selectedFacets.set(nextSelections);
  }
  toSelection(facet, values, filterType) {
    return {
      id: facet.id,
      type: facet.type,
      filterType: this.resolveFilterType(facet, filterType),
      values: values || []
    };
  }
  resolveFilterType(facet, filterType) {
    if (filterType) {
      return filterType;
    }
    if (facet.fixedFilterType) {
      return facet.fixedFilterType;
    }
    switch (facet.type) {
      case FacetDataType.Date:
      case FacetDataType.Boolean:
      case FacetDataType.Numeric:
        return FacetFilterType.equal;
      case FacetDataType.DateRange:
        return FacetFilterType.between;
      case FacetDataType.CategorySingle:
      case FacetDataType.TypeaheadSingle:
        return FacetFilterType.equal;
      case FacetDataType.Text:
      case FacetDataType.Category:
      case FacetDataType.Typeahead:
      default:
        return FacetFilterType.contains;
    }
  }
  toEditorState(selection) {
    const facet = this.facetDefinitions().find(definition => definition.id === selection.id);
    if (!facet) {
      return null;
    }
    return {
      ...facet,
      values: selection.values,
      filterType: selection.filterType,
      options: this.normalizeOptions(facet.options)
    };
  }
  normalizeOptions(options) {
    if (!options) {
      return undefined;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_35__.isObservable)(options) ? options : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(options);
  }
  static ɵfac = function NgxMatFacetToolkitComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgxMatFacetToolkitComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NgxMatFacetToolkitComponent,
    selectors: [["ngx-mat-facet-toolkit"]],
    viewQuery: function NgxMatFacetToolkitComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__.MatAutocompleteTrigger, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__.MatAutocompleteTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filterInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputAutoComplete = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.presetMenuButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chipScrollContainer = _t.first);
      }
    },
    hostVars: 6,
    hostBindings: function NgxMatFacetToolkitComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.hostStyles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("facet-theme-dark", ctx.isThemeDark)("facet-theme-light", ctx.isThemeLight);
      }
    },
    inputs: {
      facets: [1, "facets"],
      config: [1, "config"],
      placeholder: [1, "placeholder"],
      clearButtonText: [1, "clearButtonText"],
      clearButtonEnabled: [1, "clearButtonEnabled"],
      dateFormat: [1, "dateFormat"],
      tooltip: [1, "tooltip"],
      displayFilterIcon: [1, "displayFilterIcon"],
      facetWidth: [1, "facetWidth"],
      facetHasBackdrop: [1, "facetHasBackdrop"],
      confirmOnRemove: [1, "confirmOnRemove"],
      chipLabelsEnabled: [1, "chipLabelsEnabled"],
      identifier: [1, "identifier"],
      themeMode: [1, "themeMode"],
      themeOverrides: [1, "themeOverrides"],
      darkThemeOverrides: [1, "darkThemeOverrides"],
      themeVariables: [1, "themeVariables"],
      darkThemeVariables: [1, "darkThemeVariables"],
      applyThemeToRoot: [1, "applyThemeToRoot"]
    },
    outputs: {
      facetChange: "facetChange",
      facetRemoved: "facetRemoved",
      facetReset: "facetReset"
    },
    decls: 22,
    vars: 12,
    consts: [["filterInput", ""], ["auto", "matAutocomplete"], ["chipScrollContainer", ""], ["chipList", ""], ["presetMenuButton", ""], ["presetMenu", "matMenu"], [1, "main-facet-wrapper"], [1, "icon-wrapper"], [1, "content-wrapper"], [1, "chip-row"], [1, "filter-input-container"], [1, "flex-facet-autocomplete"], [1, "add-icon", 3, "click"], [1, "filter-input", 3, "keydown.backspace", "keydown.delete", "matChipInputFor", "placeholder", "matChipInputAddOnBlur", "matAutocomplete"], ["panelWidth", "250px", 1, "mat-facet-autocomplete", 3, "optionSelected", "displayWith"], [3, "value"], [1, "chip-scroll-container"], ["matTooltipShowDelay", "1000", 1, "facet-chip", 3, "color", "selected", "matTooltip"], ["mat-flat-button", "", "color", "accent", 1, "facet-clear-button"], ["mat-icon-button", "", 1, "preset-menu-trigger", 3, "mousedown", "mouseup", "mouseleave", "matMenuTriggerFor", "matTooltip", "matTooltipDisabled"], [1, "preset-menu"], ["mat-menu-item", "", 3, "click", "disabled"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "disabled", ""], ["mat-menu-item", ""], ["aria-hidden", "true", 1, "filter-count-divider"], [1, "filter-count"], ["matTooltipShowDelay", "1000", 1, "facet-chip", 3, "selectionChange", "click", "color", "selected", "matTooltip"], [1, "flex-facet"], [1, "inline-chip-icon"], [1, "inline-chip-checkbox", 3, "disabled", "ngModel"], ["matChipRemove", ""], [1, "inline-chip-checkbox", 3, "ngModelChange", "disabled", "ngModel"], ["matChipRemove", "", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "facet-clear-button", 3, "click"]],
    template: function NgxMatFacetToolkitComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatFacetToolkitComponent_Conditional_1_Template, 20, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "span", 11)(6, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatFacetToolkitComponent_Template_mat_icon_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.focus($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 13, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.backspace", function NgxMatFacetToolkitComponent_Template_input_keydown_backspace_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
        })("keydown.delete", function NgxMatFacetToolkitComponent_Template_input_keydown_delete_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgxMatFacetToolkitComponent_Conditional_10_Template, 3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-autocomplete", 14, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function NgxMatFacetToolkitComponent_Template_mat_autocomplete_optionSelected_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.autoCompleteSelected($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](13, NgxMatFacetToolkitComponent_For_14_Template, 4, 3, "mat-option", 15, _forTrack1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16, 2)(17, "mat-chip-grid", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](19, NgxMatFacetToolkitComponent_For_20_Template, 14, 8, "mat-chip-option", 17, _forTrack1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NgxMatFacetToolkitComponent_Conditional_21_Template, 2, 1, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const auto_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const chipList_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.displayFilterIcon() ? 1 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("chip-scrollable", ctx.chipRowScrollableEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputFor", chipList_r14)("placeholder", ctx.placeholder())("matChipInputAddOnBlur", false)("matAutocomplete", auto_r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.showFilterCountEnabled() ? 10 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.autoCompleteDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.filteredFacets());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-scroll", ctx.chipRowHasOverflow());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.selectedFacetViews());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.clearButtonEnabled() && ctx.selectedFacets().length > 0 ? 21 : -1);
      }
    },
    dependencies: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_37__.A, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__.MatProgressBarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.M, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.M, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.M, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.M, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.M, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckbox, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__.MatChipsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__.MatChipGrid, _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__.MatChipInput, _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__.MatChipOption, _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__.MatChipRemove, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.h, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.e, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__.m, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__.h, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuTrigger, CSVPipe],
    styles: ["[_nghost-%COMP%]{--facet-toolkit-input-bg-light: rgba(46, 72, 144, .08);--facet-toolkit-input-shadow-light: 0 0 0 1px rgba(46, 72, 144, .35);--facet-toolkit-input-hover-bg-light: rgba(46, 72, 144, .12);--facet-toolkit-input-hover-shadow-light: 0 0 0 1px rgba(46, 72, 144, .55);--facet-toolkit-input-focus-shadow-light: 0 0 0 2px rgba(70, 110, 200, .35);--facet-toolkit-input-text-light: #1c2b46;--facet-toolkit-input-placeholder-light: #1c2b46;--facet-toolkit-add-icon-light: #1c2b46;--facet-toolkit-preset-trigger-light: #1c2b46;--facet-toolkit-count-divider-light: linear-gradient(180deg, rgba(46, 72, 144, .1), rgba(46, 72, 144, .7), rgba(46, 72, 144, .1));--facet-toolkit-count-bg-light: rgba(46, 72, 144, .16);--facet-toolkit-count-text-light: #1c2b46;--facet-toolkit-scrollbar-thumb-light: rgba(46, 72, 144, .35);--facet-toolkit-preset-row-bg-light: rgba(46, 72, 144, .08);--facet-toolkit-modal-surface-light: #ffffff;--facet-toolkit-modal-text-light: #1c2b46;--facet-toolkit-modal-header-bg-light: #3f51b5;--facet-toolkit-modal-header-text-light: #ffffff;--facet-toolkit-menu-surface-light: #ffffff;--facet-toolkit-menu-text-light: #1c2b46;--facet-toolkit-menu-hover-bg-light: rgba(46, 72, 144, .08);--facet-toolkit-clear-button-bg-light: #e91e63;--facet-toolkit-clear-button-text-light: #ffffff;--facet-toolkit-modal-action-primary-bg-light: #3f51b5;--facet-toolkit-modal-action-primary-text-light: #ffffff;--facet-toolkit-modal-action-secondary-bg-light: transparent;--facet-toolkit-modal-action-secondary-text-light: #1c2b46;--facet-toolkit-modal-action-warn-bg-light: #f44336;--facet-toolkit-modal-action-warn-text-light: #ffffff;--facet-toolkit-modal-action-border-light: rgba(28, 43, 70, .2);--facet-toolkit-modal-input-focus-outline-light: #3f51b5;--facet-toolkit-modal-input-focus-label-light: #3f51b5;--facet-toolkit-modal-input-caret-light: #3f51b5;--facet-toolkit-chip-selected-bg-light: rgba(63, 81, 181, .12);--facet-toolkit-chip-selected-text-light: #1c2b46;--facet-toolkit-input-bg-dark: rgba(148, 163, 184, .12);--facet-toolkit-input-shadow-dark: 0 0 0 1px rgba(148, 163, 184, .4);--facet-toolkit-input-hover-bg-dark: rgba(148, 163, 184, .18);--facet-toolkit-input-hover-shadow-dark: 0 0 0 1px rgba(226, 232, 240, .45);--facet-toolkit-input-focus-shadow-dark: 0 0 0 2px rgba(125, 166, 255, .35);--facet-toolkit-input-text-dark: #e2e8f0;--facet-toolkit-input-placeholder-dark: #e2e8f0;--facet-toolkit-add-icon-dark: #e2e8f0;--facet-toolkit-preset-trigger-dark: #e2e8f0;--facet-toolkit-count-divider-dark: linear-gradient(180deg, rgba(226, 232, 240, .1), rgba(226, 232, 240, .7), rgba(226, 232, 240, .1));--facet-toolkit-count-bg-dark: rgba(226, 232, 240, .16);--facet-toolkit-count-text-dark: #e2e8f0;--facet-toolkit-scrollbar-thumb-dark: rgba(148, 163, 184, .45);--facet-toolkit-preset-row-bg-dark: rgba(148, 163, 184, .12);--facet-toolkit-modal-surface-dark: #1f2937;--facet-toolkit-modal-text-dark: #e2e8f0;--facet-toolkit-modal-header-bg-dark: #111827;--facet-toolkit-modal-header-text-dark: #e2e8f0;--facet-toolkit-menu-surface-dark: #111827;--facet-toolkit-menu-text-dark: #e2e8f0;--facet-toolkit-menu-hover-bg-dark: rgba(148, 163, 184, .18);--facet-toolkit-clear-button-bg-dark: #f43f5e;--facet-toolkit-clear-button-text-dark: #111827;--facet-toolkit-modal-action-primary-bg-dark: #1f2937;--facet-toolkit-modal-action-primary-text-dark: #e2e8f0;--facet-toolkit-modal-action-secondary-bg-dark: transparent;--facet-toolkit-modal-action-secondary-text-dark: #e2e8f0;--facet-toolkit-modal-action-warn-bg-dark: #f97316;--facet-toolkit-modal-action-warn-text-dark: #111827;--facet-toolkit-modal-action-border-dark: rgba(226, 232, 240, .25);--facet-toolkit-modal-input-focus-outline-dark: #93c5fd;--facet-toolkit-modal-input-focus-label-dark: #93c5fd;--facet-toolkit-modal-input-caret-dark: #93c5fd;--facet-toolkit-chip-selected-bg-dark: rgba(148, 163, 184, .2);--facet-toolkit-chip-selected-text-dark: #e2e8f0;--facet-toolkit-input-bg: var(--facet-toolkit-input-bg-light);--facet-toolkit-input-shadow: var(--facet-toolkit-input-shadow-light);--facet-toolkit-input-hover-bg: var(--facet-toolkit-input-hover-bg-light);--facet-toolkit-input-hover-shadow: var(--facet-toolkit-input-hover-shadow-light);--facet-toolkit-input-focus-shadow: var(--facet-toolkit-input-focus-shadow-light);--facet-toolkit-input-text: var(--facet-toolkit-input-text-light);--facet-toolkit-input-placeholder: var(--facet-toolkit-input-placeholder-light);--facet-toolkit-add-icon: var(--facet-toolkit-add-icon-light);--facet-toolkit-preset-trigger: var(--facet-toolkit-preset-trigger-light);--facet-toolkit-count-divider: var(--facet-toolkit-count-divider-light);--facet-toolkit-count-bg: var(--facet-toolkit-count-bg-light);--facet-toolkit-count-text: var(--facet-toolkit-count-text-light);--facet-toolkit-scrollbar-thumb: var(--facet-toolkit-scrollbar-thumb-light);--facet-toolkit-preset-row-bg: var(--facet-toolkit-preset-row-bg-light);--facet-toolkit-modal-surface: var(--facet-toolkit-modal-surface-light);--facet-toolkit-modal-text: var(--facet-toolkit-modal-text-light);--facet-toolkit-modal-header-bg: var(--facet-toolkit-modal-header-bg-light);--facet-toolkit-modal-header-text: var(--facet-toolkit-modal-header-text-light);--facet-toolkit-menu-surface: var(--facet-toolkit-menu-surface-light);--facet-toolkit-menu-text: var(--facet-toolkit-menu-text-light);--facet-toolkit-menu-hover-bg: var(--facet-toolkit-menu-hover-bg-light);--facet-toolkit-clear-button-bg: var(--facet-toolkit-clear-button-bg-light);--facet-toolkit-clear-button-text: var(--facet-toolkit-clear-button-text-light);--facet-toolkit-modal-action-primary-bg: var(--facet-toolkit-modal-action-primary-bg-light);--facet-toolkit-modal-action-primary-text: var(--facet-toolkit-modal-action-primary-text-light);--facet-toolkit-modal-action-secondary-bg: var(--facet-toolkit-modal-action-secondary-bg-light);--facet-toolkit-modal-action-secondary-text: var(--facet-toolkit-modal-action-secondary-text-light);--facet-toolkit-modal-action-warn-bg: var(--facet-toolkit-modal-action-warn-bg-light);--facet-toolkit-modal-action-warn-text: var(--facet-toolkit-modal-action-warn-text-light);--facet-toolkit-modal-action-border: var(--facet-toolkit-modal-action-border-light);--facet-toolkit-modal-input-focus-outline: var(--facet-toolkit-modal-input-focus-outline-light);--facet-toolkit-modal-input-focus-label: var(--facet-toolkit-modal-input-focus-label-light);--facet-toolkit-modal-input-caret: var(--facet-toolkit-modal-input-caret-light);--facet-toolkit-chip-selected-bg: var(--facet-toolkit-chip-selected-bg-light);--facet-toolkit-chip-selected-text: var(--facet-toolkit-chip-selected-text-light)}.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%]{--facet-toolkit-input-bg: var(--facet-toolkit-input-bg-dark);--facet-toolkit-input-shadow: var(--facet-toolkit-input-shadow-dark);--facet-toolkit-input-hover-bg: var(--facet-toolkit-input-hover-bg-dark);--facet-toolkit-input-hover-shadow: var(--facet-toolkit-input-hover-shadow-dark);--facet-toolkit-input-focus-shadow: var(--facet-toolkit-input-focus-shadow-dark);--facet-toolkit-input-text: var(--facet-toolkit-input-text-dark);--facet-toolkit-input-placeholder: var(--facet-toolkit-input-placeholder-dark);--facet-toolkit-add-icon: var(--facet-toolkit-add-icon-dark);--facet-toolkit-preset-trigger: var(--facet-toolkit-preset-trigger-dark);--facet-toolkit-count-divider: var(--facet-toolkit-count-divider-dark);--facet-toolkit-count-bg: var(--facet-toolkit-count-bg-dark);--facet-toolkit-count-text: var(--facet-toolkit-count-text-dark);--facet-toolkit-scrollbar-thumb: var(--facet-toolkit-scrollbar-thumb-dark);--facet-toolkit-preset-row-bg: var(--facet-toolkit-preset-row-bg-dark);--facet-toolkit-modal-surface: var(--facet-toolkit-modal-surface-dark);--facet-toolkit-modal-text: var(--facet-toolkit-modal-text-dark);--facet-toolkit-modal-header-bg: var(--facet-toolkit-modal-header-bg-dark);--facet-toolkit-modal-header-text: var(--facet-toolkit-modal-header-text-dark);--facet-toolkit-menu-surface: var(--facet-toolkit-menu-surface-dark);--facet-toolkit-menu-text: var(--facet-toolkit-menu-text-dark);--facet-toolkit-menu-hover-bg: var(--facet-toolkit-menu-hover-bg-dark);--facet-toolkit-clear-button-bg: var(--facet-toolkit-clear-button-bg-dark);--facet-toolkit-clear-button-text: var(--facet-toolkit-clear-button-text-dark);--facet-toolkit-modal-action-primary-bg: var(--facet-toolkit-modal-action-primary-bg-dark);--facet-toolkit-modal-action-primary-text: var(--facet-toolkit-modal-action-primary-text-dark);--facet-toolkit-modal-action-secondary-bg: var(--facet-toolkit-modal-action-secondary-bg-dark);--facet-toolkit-modal-action-secondary-text: var(--facet-toolkit-modal-action-secondary-text-dark);--facet-toolkit-modal-action-warn-bg: var(--facet-toolkit-modal-action-warn-bg-dark);--facet-toolkit-modal-action-warn-text: var(--facet-toolkit-modal-action-warn-text-dark);--facet-toolkit-modal-action-border: var(--facet-toolkit-modal-action-border-dark);--facet-toolkit-modal-input-focus-outline: var(--facet-toolkit-modal-input-focus-outline-dark);--facet-toolkit-modal-input-focus-label: var(--facet-toolkit-modal-input-focus-label-dark);--facet-toolkit-modal-input-caret: var(--facet-toolkit-modal-input-caret-dark);--facet-toolkit-chip-selected-bg: var(--facet-toolkit-chip-selected-bg-dark);--facet-toolkit-chip-selected-text: var(--facet-toolkit-chip-selected-text-dark)}.facet-theme-light[_nghost-%COMP%]{--facet-toolkit-input-bg: var(--facet-toolkit-input-bg-light);--facet-toolkit-input-shadow: var(--facet-toolkit-input-shadow-light);--facet-toolkit-input-hover-bg: var(--facet-toolkit-input-hover-bg-light);--facet-toolkit-input-hover-shadow: var(--facet-toolkit-input-hover-shadow-light);--facet-toolkit-input-focus-shadow: var(--facet-toolkit-input-focus-shadow-light);--facet-toolkit-input-text: var(--facet-toolkit-input-text-light);--facet-toolkit-input-placeholder: var(--facet-toolkit-input-placeholder-light);--facet-toolkit-add-icon: var(--facet-toolkit-add-icon-light);--facet-toolkit-preset-trigger: var(--facet-toolkit-preset-trigger-light);--facet-toolkit-count-divider: var(--facet-toolkit-count-divider-light);--facet-toolkit-count-bg: var(--facet-toolkit-count-bg-light);--facet-toolkit-count-text: var(--facet-toolkit-count-text-light);--facet-toolkit-scrollbar-thumb: var(--facet-toolkit-scrollbar-thumb-light);--facet-toolkit-preset-row-bg: var(--facet-toolkit-preset-row-bg-light);--facet-toolkit-modal-surface: var(--facet-toolkit-modal-surface-light);--facet-toolkit-modal-text: var(--facet-toolkit-modal-text-light);--facet-toolkit-modal-header-bg: var(--facet-toolkit-modal-header-bg-light);--facet-toolkit-modal-header-text: var(--facet-toolkit-modal-header-text-light);--facet-toolkit-menu-surface: var(--facet-toolkit-menu-surface-light);--facet-toolkit-menu-text: var(--facet-toolkit-menu-text-light);--facet-toolkit-menu-hover-bg: var(--facet-toolkit-menu-hover-bg-light);--facet-toolkit-clear-button-bg: var(--facet-toolkit-clear-button-bg-light);--facet-toolkit-clear-button-text: var(--facet-toolkit-clear-button-text-light);--facet-toolkit-modal-action-primary-bg: var(--facet-toolkit-modal-action-primary-bg-light);--facet-toolkit-modal-action-primary-text: var(--facet-toolkit-modal-action-primary-text-light);--facet-toolkit-modal-action-secondary-bg: var(--facet-toolkit-modal-action-secondary-bg-light);--facet-toolkit-modal-action-secondary-text: var(--facet-toolkit-modal-action-secondary-text-light);--facet-toolkit-modal-action-warn-bg: var(--facet-toolkit-modal-action-warn-bg-light);--facet-toolkit-modal-action-warn-text: var(--facet-toolkit-modal-action-warn-text-light);--facet-toolkit-modal-action-border: var(--facet-toolkit-modal-action-border-light);--facet-toolkit-modal-input-focus-outline: var(--facet-toolkit-modal-input-focus-outline-light);--facet-toolkit-modal-input-focus-label: var(--facet-toolkit-modal-input-focus-label-light);--facet-toolkit-modal-input-caret: var(--facet-toolkit-modal-input-caret-light);--facet-toolkit-chip-selected-bg: var(--facet-toolkit-chip-selected-bg-light);--facet-toolkit-chip-selected-text: var(--facet-toolkit-chip-selected-text-light)}.facet-theme-dark[_nghost-%COMP%]{--facet-toolkit-input-bg: var(--facet-toolkit-input-bg-dark);--facet-toolkit-input-shadow: var(--facet-toolkit-input-shadow-dark);--facet-toolkit-input-hover-bg: var(--facet-toolkit-input-hover-bg-dark);--facet-toolkit-input-hover-shadow: var(--facet-toolkit-input-hover-shadow-dark);--facet-toolkit-input-focus-shadow: var(--facet-toolkit-input-focus-shadow-dark);--facet-toolkit-input-text: var(--facet-toolkit-input-text-dark);--facet-toolkit-input-placeholder: var(--facet-toolkit-input-placeholder-dark);--facet-toolkit-add-icon: var(--facet-toolkit-add-icon-dark);--facet-toolkit-preset-trigger: var(--facet-toolkit-preset-trigger-dark);--facet-toolkit-count-divider: var(--facet-toolkit-count-divider-dark);--facet-toolkit-count-bg: var(--facet-toolkit-count-bg-dark);--facet-toolkit-count-text: var(--facet-toolkit-count-text-dark);--facet-toolkit-scrollbar-thumb: var(--facet-toolkit-scrollbar-thumb-dark);--facet-toolkit-preset-row-bg: var(--facet-toolkit-preset-row-bg-dark);--facet-toolkit-modal-surface: var(--facet-toolkit-modal-surface-dark);--facet-toolkit-modal-text: var(--facet-toolkit-modal-text-dark);--facet-toolkit-modal-header-bg: var(--facet-toolkit-modal-header-bg-dark);--facet-toolkit-modal-header-text: var(--facet-toolkit-modal-header-text-dark);--facet-toolkit-menu-surface: var(--facet-toolkit-menu-surface-dark);--facet-toolkit-menu-text: var(--facet-toolkit-menu-text-dark);--facet-toolkit-menu-hover-bg: var(--facet-toolkit-menu-hover-bg-dark);--facet-toolkit-clear-button-bg: var(--facet-toolkit-clear-button-bg-dark);--facet-toolkit-clear-button-text: var(--facet-toolkit-clear-button-text-dark);--facet-toolkit-modal-action-primary-bg: var(--facet-toolkit-modal-action-primary-bg-dark);--facet-toolkit-modal-action-primary-text: var(--facet-toolkit-modal-action-primary-text-dark);--facet-toolkit-modal-action-secondary-bg: var(--facet-toolkit-modal-action-secondary-bg-dark);--facet-toolkit-modal-action-secondary-text: var(--facet-toolkit-modal-action-secondary-text-dark);--facet-toolkit-modal-action-warn-bg: var(--facet-toolkit-modal-action-warn-bg-dark);--facet-toolkit-modal-action-warn-text: var(--facet-toolkit-modal-action-warn-text-dark);--facet-toolkit-modal-action-border: var(--facet-toolkit-modal-action-border-dark);--facet-toolkit-modal-input-focus-outline: var(--facet-toolkit-modal-input-focus-outline-dark);--facet-toolkit-modal-input-focus-label: var(--facet-toolkit-modal-input-focus-label-dark);--facet-toolkit-modal-input-caret: var(--facet-toolkit-modal-input-caret-dark);--facet-toolkit-chip-selected-bg: var(--facet-toolkit-chip-selected-bg-dark);--facet-toolkit-chip-selected-text: var(--facet-toolkit-chip-selected-text-dark)}  .facet-theme-panel .mat-mdc-menu-panel,   .facet-theme-panel .mat-mdc-autocomplete-panel{background:var(--facet-toolkit-menu-surface, var(--mat-menu-container-color, #ffffff));color:var(--facet-toolkit-menu-text, var(--mat-menu-item-label-text-color, #1c2b46))}  .facet-theme-panel .mat-mdc-menu-item,   .facet-theme-panel .mat-mdc-option{color:var(--facet-toolkit-menu-text, var(--mat-menu-item-label-text-color, #1c2b46))}  .facet-theme-panel .mat-mdc-menu-item:hover,   .facet-theme-panel .mat-mdc-option:hover,   .facet-theme-panel .mat-mdc-option.mdc-list-item--selected{background:var(--facet-toolkit-menu-hover-bg, var(--mat-menu-item-hover-state-layer-color, rgba(0, 0, 0, .04)))}*[_ngcontent-%COMP%]{outline:0}.filter-input-container[_ngcontent-%COMP%]{background-color:transparent!important;opacity:1!important;box-shadow:none!important;background-color:var(--facet-toolkit-input-bg)!important;box-shadow:var(--facet-toolkit-input-shadow)!important;color:var(--facet-toolkit-input-text);transition:box-shadow .12s ease,background-color .12s ease;height:28px;display:inline-flex;align-items:center;gap:2px;flex:0 0 auto;padding:0 4px;margin-bottom:10px;border-radius:999px}.filter-input-container[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]{border:none!important;background:none!important;width:56px;font-size:14px!important;font-weight:400;height:28px;line-height:28px;padding:0;text-align:left;color:inherit;position:relative;top:0;margin-left:2px;vertical-align:middle}.filter-input[_ngcontent-%COMP%]::placeholder{color:var(--facet-toolkit-input-placeholder);opacity:.9}.inline-chip-icon[_ngcontent-%COMP%]{width:18px;height:18px;font-size:18px;margin-right:7px;margin-left:0}[_nghost-%COMP%]   .mat-checkbox-inner-container[_ngcontent-%COMP%]{transform:scale(.7)}.inlineChipCheckbox[_nghost-%COMP%]   label.mat-checkbox-layout[_ngcontent-%COMP%]   div.mat-checkbox-inner-container[_ngcontent-%COMP%], .inlineChipCheckbox   [_nghost-%COMP%]   label.mat-checkbox-layout[_ngcontent-%COMP%]   div.mat-checkbox-inner-container[_ngcontent-%COMP%]{transform:scale(.7)}.add-icon[_ngcontent-%COMP%]{margin-top:0;color:var(--facet-toolkit-add-icon)}.add-icon[_ngcontent-%COMP%]:hover, .filter-input-container[_ngcontent-%COMP%]:hover{cursor:pointer}.filter-input-container[_ngcontent-%COMP%]:hover{background-color:var(--facet-toolkit-input-hover-bg)!important;box-shadow:var(--facet-toolkit-input-hover-shadow)!important}.filter-input-container[_ngcontent-%COMP%]:focus-within{box-shadow:var(--facet-toolkit-input-focus-shadow)!important}.filter-count-divider[_ngcontent-%COMP%]{display:inline-block;width:1px;height:18px;margin:0 3px;background:var(--facet-toolkit-count-divider);align-self:center}.filter-count[_ngcontent-%COMP%]{font-size:11px;font-weight:700;line-height:16px;padding:2px 6px;border-radius:999px;background:var(--facet-toolkit-count-bg);color:var(--facet-toolkit-count-text);letter-spacing:.02em;align-self:center}.facet-clear-button[_ngcontent-%COMP%]{background:var(--facet-toolkit-clear-button-bg, var(--mdc-filled-button-container-color))!important;color:var(--facet-toolkit-clear-button-text, var(--mdc-filled-button-label-text-color))!important}  .facet-chip.mat-mdc-chip-selected{background:var(--facet-toolkit-chip-selected-bg)!important;color:var(--facet-toolkit-chip-selected-text)!important}.main-facet-wrapper[_ngcontent-%COMP%]{min-height:36px;display:flex;align-items:center}.main-facet-wrapper[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:center;align-items:center;margin-right:20px}.preset-menu-trigger[_ngcontent-%COMP%]{margin-bottom:10px;color:var(--facet-toolkit-preset-trigger)}  .mat-autocomplete-panel.mat-autocomplete-visible{left:-40px!important;top:15px!important}  .mat-chip-list-wrapper{display:flex;flex-wrap:wrap;align-items:center;gap:8px;transition:width .3s ease-in-out}.facet-chip[_ngcontent-%COMP%]{order:1}.content-wrapper[_ngcontent-%COMP%]{flex:1;min-width:0}.chip-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;min-width:0}.chip-scroll-container[_ngcontent-%COMP%]{display:flex;align-items:center;overflow-x:auto;overflow-y:hidden;height:40px;margin-bottom:10px;width:100%;flex:1 1 auto;min-width:0;white-space:nowrap;scrollbar-width:thin}.chip-scroll-container.has-scroll[_ngcontent-%COMP%]{margin-bottom:0}.content-wrapper.chip-scrollable[_ngcontent-%COMP%]     .mat-chip-list-wrapper{display:inline-flex!important;flex-wrap:nowrap!important;width:max-content;white-space:nowrap}.content-wrapper.chip-scrollable[_ngcontent-%COMP%]     .mat-chip-list-wrapper::-webkit-scrollbar, .chip-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar{height:6px}.content-wrapper.chip-scrollable[_ngcontent-%COMP%]     .mat-chip-list-wrapper::-webkit-scrollbar-thumb, .chip-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--facet-toolkit-scrollbar-thumb);border-radius:999px}.content-wrapper.chip-scrollable[_ngcontent-%COMP%]     .mat-chip-list-wrapper::-webkit-scrollbar-track, .chip-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.content-wrapper.chip-scrollable[_ngcontent-%COMP%]     .mat-chip-option, .content-wrapper.chip-scrollable[_ngcontent-%COMP%]     .mat-chip-row{flex:0 0 auto}.content-wrapper.chip-scrollable[_ngcontent-%COMP%]     .mat-chip-grid{display:inline-flex!important;flex-wrap:nowrap;align-items:center;width:max-content}.content-wrapper.chip-scrollable[_ngcontent-%COMP%]     .mat-mdc-chip-set, .content-wrapper.chip-scrollable[_ngcontent-%COMP%]     .mdc-evolution-chip-set__chips{display:inline-flex!important;flex-wrap:nowrap!important;width:max-content;white-space:nowrap}.content-wrapper.chip-scrollable[_ngcontent-%COMP%]     .mat-chip-list-wrapper{align-items:center;display:inline-flex!important;flex-wrap:nowrap!important}.content-wrapper.chip-scrollable[_ngcontent-%COMP%]     .mat-chip-row, .content-wrapper.chip-scrollable[_ngcontent-%COMP%]     .mat-chip-option{max-height:28px;white-space:nowrap}.content-wrapper.chip-scrollable[_ngcontent-%COMP%]     .mat-chip-option{white-space:nowrap}.flex-facet[_ngcontent-%COMP%]{display:flex;align-items:center}.flex-facet-autocomplete[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;height:28px}"],
    data: {
      animation: [chipAnimation]
    }
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatFacetToolkitComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-mat-facet-toolkit',
      standalone: true,
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_37__.A, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__.MatProgressBarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.M, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.M, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.M, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__.MatChipsModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.h, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__.MatAutocompleteModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__.m, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__.h, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuModule, CSVPipe, FilterPipe, KeysPipe, FocusOnShowDirective],
      animations: [chipAnimation],
      template: "<div class=\"main-facet-wrapper\">\n\n  @if (displayFilterIcon()) {\n    <div class=\"icon-wrapper\">\n      <button #presetMenuButton mat-icon-button [matMenuTriggerFor]=\"presetMenu\"\n              class=\"preset-menu-trigger\"\n              (mousedown)=\"clickStarted()\" (mouseup)=\"clickEnded()\" (mouseleave)=\"clickEnded()\"\n              [matTooltip]=\"tooltip() !== null ? tooltip() : ''\"\n              [matTooltipDisabled]=\"tooltip() === null\">\n        <mat-icon>bookmark</mat-icon>\n      </button>\n      <mat-menu #presetMenu=\"matMenu\" class=\"preset-menu\">\n        <button mat-menu-item (click)=\"promptSavePreset()\" [disabled]=\"selectedFacets().length === 0\">\n          <mat-icon>bookmark_add</mat-icon>\n          <span>Save current filters</span>\n        </button>\n        <button mat-menu-item (click)=\"openPresetManager()\">\n          <mat-icon>tune</mat-icon>\n          <span>Manage presets</span>\n        </button>\n        <mat-divider></mat-divider>\n        @if (presetsForMenu().length > 0) {\n          @for (preset of presetsForMenu(); track preset.id) {\n            <button mat-menu-item (click)=\"applyPreset(preset)\">\n              <mat-icon>bookmark</mat-icon>\n              <span>{{preset.name}}</span>\n            </button>\n          }\n        } @else {\n          <button mat-menu-item disabled>\n            <mat-icon>bookmark_border</mat-icon>\n            <span>No presets yet</span>\n          </button>\n        }\n      </mat-menu>\n    </div>\n  }\n\n  <div class=\"content-wrapper\" [class.chip-scrollable]=\"chipRowScrollableEnabled()\">\n    <div class=\"chip-row\">\n      <div class=\"filter-input-container\">\n        <span class=\"flex-facet-autocomplete\">\n\n          <mat-icon class=\"add-icon\" (click)=\"focus($event)\">add</mat-icon>\n\n          <input #filterInput [matChipInputFor]=\"chipList\" class=\"filter-input\" [placeholder]=\"placeholder()\"\n                 [matChipInputAddOnBlur]=\"false\" [matAutocomplete]=\"auto\"\n                 (keydown.backspace)=\"$event.stopPropagation()\"\n                 (keydown.delete)=\"$event.stopPropagation()\">\n\n          @if (showFilterCountEnabled()) {\n            <span class=\"filter-count-divider\" aria-hidden=\"true\"></span>\n            <span class=\"filter-count\">{{activeFilterCount()}}</span>\n          }\n\n          <mat-autocomplete #auto=\"matAutocomplete\" class=\"mat-facet-autocomplete\" (optionSelected)=\"autoCompleteSelected($event)\"\n                            [displayWith]=\"autoCompleteDisplay\" panelWidth=\"250px\">\n            @for (facet of filteredFacets(); track facet.id) {\n              <mat-option [value]=\"facet\">\n                @if (facet.icon) {\n                  <mat-icon>{{facet.icon}}</mat-icon>\n                }\n                <span>{{ facet.label }}</span>\n              </mat-option>\n            }\n          </mat-autocomplete>\n\n        </span>\n      </div>\n\n      <div class=\"chip-scroll-container\" #chipScrollContainer [class.has-scroll]=\"chipRowHasOverflow()\">\n        <mat-chip-grid #chipList>\n          @for (facet of selectedFacetViews(); track facet.id) {\n            <mat-chip-option @chipAnimation [color]=\"facet.readonly ? 'accent' : undefined\"\n                             class=\"facet-chip\"\n                             (selectionChange)=\"chipSelected($event, facet)\" (click)=\"selectedFacetId.set(facet.id)\"\n                             [selected]=\"facet.id === selectedFacetId()\"\n                             matTooltip=\"{{facet.label + (facet.description ? ': ' + facet.description : '')}}\"\n                             matTooltipShowDelay=\"1000\">\n              <span class=\"flex-facet\">\n\n                @if (facet.icon) {\n                  <mat-icon class=\"inline-chip-icon\">{{facet.icon}}</mat-icon>\n                }\n\n                @if (chipLabelsEnabled()) {\n                  <span>{{ facet.label + ': &nbsp;'}}</span>\n                }\n\n                @switch (facet.type) {\n                  @case (FacetDataType.Category) {\n                    {{facet.values | csv:'label':' / '}}\n                  }\n                  @case (FacetDataType.CategorySingle) {\n                    {{facet.values | csv:'label':' / '}}\n                  }\n                  @case (FacetDataType.Typeahead) {\n                    {{facet.values | csv:'label':' / '}}\n                  }\n                  @case (FacetDataType.TypeaheadSingle) {\n                    {{facet.values | csv:'label':' / '}}\n                  }\n                  @case (FacetDataType.Date) {\n                    \u201C{{getDateValue(facet) | date:dateFormat()}}\u201D\n                  }\n                  @case (FacetDataType.DateRange) {\n                    \u201C{{getDateValue(facet) | date:dateFormat()}}\u201D ~ \u201C{{getDateValue(facet, 1) | date:dateFormat()}}\u201D\n                  }\n                  @case (FacetDataType.Boolean) {\n                    <mat-checkbox [disabled]=\"true\" class=\"inline-chip-checkbox\" [ngModel]=\"getRawValue(facet)\" (ngModelChange)=\"setValue(facet, $event)\">\n                      {{facet.label}}\n                    </mat-checkbox>\n                  }\n                  @case (FacetDataType.Text) {\n                    @switch (facet.filterType) {\n                      @case (FacetFilterType.contains) {\n                        \u201C..{{getRawValue(facet)}}..\u201D\n                      }\n                      @case (FacetFilterType.equal) {\n                        \u201C{{getRawValue(facet)}}\u201D\n                      }\n                      @case (FacetFilterType.startsWith) {\n                        \u201C{{getRawValue(facet)}}...\u201D\n                      }\n                      @case (FacetFilterType.endsWith) {\n                        \u201C...{{getRawValue(facet)}}\u201D\n                      }\n                    }\n                  }\n                  @case (FacetDataType.Numeric) {\n                    @switch (facet.filterType) {\n                      @case (FacetFilterType.equal) {\n                        \u201C={{getRawValue(facet)}}\u201D\n                      }\n                      @case (FacetFilterType.greaterThan) {\n                        \u201C>{{getRawValue(facet)}}\u201D\n                      }\n                      @case (FacetFilterType.greaterThanOrEqual) {\n                        \u201C\u2265{{getRawValue(facet)}}\u201D\n                      }\n                      @case (FacetFilterType.lessThan) {\n                        \u201C<{{getRawValue(facet)}}\u201D\n                      }\n                      @case (FacetFilterType.lessThanOrEqual) {\n                        \u201C\u2264{{getRawValue(facet)}}\u201D\n                      }\n                      @case (FacetFilterType.between) {\n                        \u201C{{getRawValue(facet)}} - {{getRawValue(facet, 1)}}\u201D\n                      }\n                    }\n                  }\n                }\n\n                @if (!facet.readonly) {\n                  <mat-icon matChipRemove (click)=\"removeFacet(facet)\">cancel</mat-icon>\n                }\n\n              </span>\n\n            </mat-chip-option>\n          }\n        </mat-chip-grid>\n      </div>\n    </div>\n  </div>\n\n\n  @if (clearButtonEnabled() && selectedFacets().length > 0) {\n    <button mat-flat-button (click)=\"reset()\" color=\"accent\" class=\"facet-clear-button\">\n      {{clearButtonText()}}\n    </button>\n  }\n\n</div>\n",
      styles: [":host{--facet-toolkit-input-bg-light: rgba(46, 72, 144, .08);--facet-toolkit-input-shadow-light: 0 0 0 1px rgba(46, 72, 144, .35);--facet-toolkit-input-hover-bg-light: rgba(46, 72, 144, .12);--facet-toolkit-input-hover-shadow-light: 0 0 0 1px rgba(46, 72, 144, .55);--facet-toolkit-input-focus-shadow-light: 0 0 0 2px rgba(70, 110, 200, .35);--facet-toolkit-input-text-light: #1c2b46;--facet-toolkit-input-placeholder-light: #1c2b46;--facet-toolkit-add-icon-light: #1c2b46;--facet-toolkit-preset-trigger-light: #1c2b46;--facet-toolkit-count-divider-light: linear-gradient(180deg, rgba(46, 72, 144, .1), rgba(46, 72, 144, .7), rgba(46, 72, 144, .1));--facet-toolkit-count-bg-light: rgba(46, 72, 144, .16);--facet-toolkit-count-text-light: #1c2b46;--facet-toolkit-scrollbar-thumb-light: rgba(46, 72, 144, .35);--facet-toolkit-preset-row-bg-light: rgba(46, 72, 144, .08);--facet-toolkit-modal-surface-light: #ffffff;--facet-toolkit-modal-text-light: #1c2b46;--facet-toolkit-modal-header-bg-light: #3f51b5;--facet-toolkit-modal-header-text-light: #ffffff;--facet-toolkit-menu-surface-light: #ffffff;--facet-toolkit-menu-text-light: #1c2b46;--facet-toolkit-menu-hover-bg-light: rgba(46, 72, 144, .08);--facet-toolkit-clear-button-bg-light: #e91e63;--facet-toolkit-clear-button-text-light: #ffffff;--facet-toolkit-modal-action-primary-bg-light: #3f51b5;--facet-toolkit-modal-action-primary-text-light: #ffffff;--facet-toolkit-modal-action-secondary-bg-light: transparent;--facet-toolkit-modal-action-secondary-text-light: #1c2b46;--facet-toolkit-modal-action-warn-bg-light: #f44336;--facet-toolkit-modal-action-warn-text-light: #ffffff;--facet-toolkit-modal-action-border-light: rgba(28, 43, 70, .2);--facet-toolkit-modal-input-focus-outline-light: #3f51b5;--facet-toolkit-modal-input-focus-label-light: #3f51b5;--facet-toolkit-modal-input-caret-light: #3f51b5;--facet-toolkit-chip-selected-bg-light: rgba(63, 81, 181, .12);--facet-toolkit-chip-selected-text-light: #1c2b46;--facet-toolkit-input-bg-dark: rgba(148, 163, 184, .12);--facet-toolkit-input-shadow-dark: 0 0 0 1px rgba(148, 163, 184, .4);--facet-toolkit-input-hover-bg-dark: rgba(148, 163, 184, .18);--facet-toolkit-input-hover-shadow-dark: 0 0 0 1px rgba(226, 232, 240, .45);--facet-toolkit-input-focus-shadow-dark: 0 0 0 2px rgba(125, 166, 255, .35);--facet-toolkit-input-text-dark: #e2e8f0;--facet-toolkit-input-placeholder-dark: #e2e8f0;--facet-toolkit-add-icon-dark: #e2e8f0;--facet-toolkit-preset-trigger-dark: #e2e8f0;--facet-toolkit-count-divider-dark: linear-gradient(180deg, rgba(226, 232, 240, .1), rgba(226, 232, 240, .7), rgba(226, 232, 240, .1));--facet-toolkit-count-bg-dark: rgba(226, 232, 240, .16);--facet-toolkit-count-text-dark: #e2e8f0;--facet-toolkit-scrollbar-thumb-dark: rgba(148, 163, 184, .45);--facet-toolkit-preset-row-bg-dark: rgba(148, 163, 184, .12);--facet-toolkit-modal-surface-dark: #1f2937;--facet-toolkit-modal-text-dark: #e2e8f0;--facet-toolkit-modal-header-bg-dark: #111827;--facet-toolkit-modal-header-text-dark: #e2e8f0;--facet-toolkit-menu-surface-dark: #111827;--facet-toolkit-menu-text-dark: #e2e8f0;--facet-toolkit-menu-hover-bg-dark: rgba(148, 163, 184, .18);--facet-toolkit-clear-button-bg-dark: #f43f5e;--facet-toolkit-clear-button-text-dark: #111827;--facet-toolkit-modal-action-primary-bg-dark: #1f2937;--facet-toolkit-modal-action-primary-text-dark: #e2e8f0;--facet-toolkit-modal-action-secondary-bg-dark: transparent;--facet-toolkit-modal-action-secondary-text-dark: #e2e8f0;--facet-toolkit-modal-action-warn-bg-dark: #f97316;--facet-toolkit-modal-action-warn-text-dark: #111827;--facet-toolkit-modal-action-border-dark: rgba(226, 232, 240, .25);--facet-toolkit-modal-input-focus-outline-dark: #93c5fd;--facet-toolkit-modal-input-focus-label-dark: #93c5fd;--facet-toolkit-modal-input-caret-dark: #93c5fd;--facet-toolkit-chip-selected-bg-dark: rgba(148, 163, 184, .2);--facet-toolkit-chip-selected-text-dark: #e2e8f0;--facet-toolkit-input-bg: var(--facet-toolkit-input-bg-light);--facet-toolkit-input-shadow: var(--facet-toolkit-input-shadow-light);--facet-toolkit-input-hover-bg: var(--facet-toolkit-input-hover-bg-light);--facet-toolkit-input-hover-shadow: var(--facet-toolkit-input-hover-shadow-light);--facet-toolkit-input-focus-shadow: var(--facet-toolkit-input-focus-shadow-light);--facet-toolkit-input-text: var(--facet-toolkit-input-text-light);--facet-toolkit-input-placeholder: var(--facet-toolkit-input-placeholder-light);--facet-toolkit-add-icon: var(--facet-toolkit-add-icon-light);--facet-toolkit-preset-trigger: var(--facet-toolkit-preset-trigger-light);--facet-toolkit-count-divider: var(--facet-toolkit-count-divider-light);--facet-toolkit-count-bg: var(--facet-toolkit-count-bg-light);--facet-toolkit-count-text: var(--facet-toolkit-count-text-light);--facet-toolkit-scrollbar-thumb: var(--facet-toolkit-scrollbar-thumb-light);--facet-toolkit-preset-row-bg: var(--facet-toolkit-preset-row-bg-light);--facet-toolkit-modal-surface: var(--facet-toolkit-modal-surface-light);--facet-toolkit-modal-text: var(--facet-toolkit-modal-text-light);--facet-toolkit-modal-header-bg: var(--facet-toolkit-modal-header-bg-light);--facet-toolkit-modal-header-text: var(--facet-toolkit-modal-header-text-light);--facet-toolkit-menu-surface: var(--facet-toolkit-menu-surface-light);--facet-toolkit-menu-text: var(--facet-toolkit-menu-text-light);--facet-toolkit-menu-hover-bg: var(--facet-toolkit-menu-hover-bg-light);--facet-toolkit-clear-button-bg: var(--facet-toolkit-clear-button-bg-light);--facet-toolkit-clear-button-text: var(--facet-toolkit-clear-button-text-light);--facet-toolkit-modal-action-primary-bg: var(--facet-toolkit-modal-action-primary-bg-light);--facet-toolkit-modal-action-primary-text: var(--facet-toolkit-modal-action-primary-text-light);--facet-toolkit-modal-action-secondary-bg: var(--facet-toolkit-modal-action-secondary-bg-light);--facet-toolkit-modal-action-secondary-text: var(--facet-toolkit-modal-action-secondary-text-light);--facet-toolkit-modal-action-warn-bg: var(--facet-toolkit-modal-action-warn-bg-light);--facet-toolkit-modal-action-warn-text: var(--facet-toolkit-modal-action-warn-text-light);--facet-toolkit-modal-action-border: var(--facet-toolkit-modal-action-border-light);--facet-toolkit-modal-input-focus-outline: var(--facet-toolkit-modal-input-focus-outline-light);--facet-toolkit-modal-input-focus-label: var(--facet-toolkit-modal-input-focus-label-light);--facet-toolkit-modal-input-caret: var(--facet-toolkit-modal-input-caret-light);--facet-toolkit-chip-selected-bg: var(--facet-toolkit-chip-selected-bg-light);--facet-toolkit-chip-selected-text: var(--facet-toolkit-chip-selected-text-light)}:host-context(.dark-theme){--facet-toolkit-input-bg: var(--facet-toolkit-input-bg-dark);--facet-toolkit-input-shadow: var(--facet-toolkit-input-shadow-dark);--facet-toolkit-input-hover-bg: var(--facet-toolkit-input-hover-bg-dark);--facet-toolkit-input-hover-shadow: var(--facet-toolkit-input-hover-shadow-dark);--facet-toolkit-input-focus-shadow: var(--facet-toolkit-input-focus-shadow-dark);--facet-toolkit-input-text: var(--facet-toolkit-input-text-dark);--facet-toolkit-input-placeholder: var(--facet-toolkit-input-placeholder-dark);--facet-toolkit-add-icon: var(--facet-toolkit-add-icon-dark);--facet-toolkit-preset-trigger: var(--facet-toolkit-preset-trigger-dark);--facet-toolkit-count-divider: var(--facet-toolkit-count-divider-dark);--facet-toolkit-count-bg: var(--facet-toolkit-count-bg-dark);--facet-toolkit-count-text: var(--facet-toolkit-count-text-dark);--facet-toolkit-scrollbar-thumb: var(--facet-toolkit-scrollbar-thumb-dark);--facet-toolkit-preset-row-bg: var(--facet-toolkit-preset-row-bg-dark);--facet-toolkit-modal-surface: var(--facet-toolkit-modal-surface-dark);--facet-toolkit-modal-text: var(--facet-toolkit-modal-text-dark);--facet-toolkit-modal-header-bg: var(--facet-toolkit-modal-header-bg-dark);--facet-toolkit-modal-header-text: var(--facet-toolkit-modal-header-text-dark);--facet-toolkit-menu-surface: var(--facet-toolkit-menu-surface-dark);--facet-toolkit-menu-text: var(--facet-toolkit-menu-text-dark);--facet-toolkit-menu-hover-bg: var(--facet-toolkit-menu-hover-bg-dark);--facet-toolkit-clear-button-bg: var(--facet-toolkit-clear-button-bg-dark);--facet-toolkit-clear-button-text: var(--facet-toolkit-clear-button-text-dark);--facet-toolkit-modal-action-primary-bg: var(--facet-toolkit-modal-action-primary-bg-dark);--facet-toolkit-modal-action-primary-text: var(--facet-toolkit-modal-action-primary-text-dark);--facet-toolkit-modal-action-secondary-bg: var(--facet-toolkit-modal-action-secondary-bg-dark);--facet-toolkit-modal-action-secondary-text: var(--facet-toolkit-modal-action-secondary-text-dark);--facet-toolkit-modal-action-warn-bg: var(--facet-toolkit-modal-action-warn-bg-dark);--facet-toolkit-modal-action-warn-text: var(--facet-toolkit-modal-action-warn-text-dark);--facet-toolkit-modal-action-border: var(--facet-toolkit-modal-action-border-dark);--facet-toolkit-modal-input-focus-outline: var(--facet-toolkit-modal-input-focus-outline-dark);--facet-toolkit-modal-input-focus-label: var(--facet-toolkit-modal-input-focus-label-dark);--facet-toolkit-modal-input-caret: var(--facet-toolkit-modal-input-caret-dark);--facet-toolkit-chip-selected-bg: var(--facet-toolkit-chip-selected-bg-dark);--facet-toolkit-chip-selected-text: var(--facet-toolkit-chip-selected-text-dark)}:host(.facet-theme-light){--facet-toolkit-input-bg: var(--facet-toolkit-input-bg-light);--facet-toolkit-input-shadow: var(--facet-toolkit-input-shadow-light);--facet-toolkit-input-hover-bg: var(--facet-toolkit-input-hover-bg-light);--facet-toolkit-input-hover-shadow: var(--facet-toolkit-input-hover-shadow-light);--facet-toolkit-input-focus-shadow: var(--facet-toolkit-input-focus-shadow-light);--facet-toolkit-input-text: var(--facet-toolkit-input-text-light);--facet-toolkit-input-placeholder: var(--facet-toolkit-input-placeholder-light);--facet-toolkit-add-icon: var(--facet-toolkit-add-icon-light);--facet-toolkit-preset-trigger: var(--facet-toolkit-preset-trigger-light);--facet-toolkit-count-divider: var(--facet-toolkit-count-divider-light);--facet-toolkit-count-bg: var(--facet-toolkit-count-bg-light);--facet-toolkit-count-text: var(--facet-toolkit-count-text-light);--facet-toolkit-scrollbar-thumb: var(--facet-toolkit-scrollbar-thumb-light);--facet-toolkit-preset-row-bg: var(--facet-toolkit-preset-row-bg-light);--facet-toolkit-modal-surface: var(--facet-toolkit-modal-surface-light);--facet-toolkit-modal-text: var(--facet-toolkit-modal-text-light);--facet-toolkit-modal-header-bg: var(--facet-toolkit-modal-header-bg-light);--facet-toolkit-modal-header-text: var(--facet-toolkit-modal-header-text-light);--facet-toolkit-menu-surface: var(--facet-toolkit-menu-surface-light);--facet-toolkit-menu-text: var(--facet-toolkit-menu-text-light);--facet-toolkit-menu-hover-bg: var(--facet-toolkit-menu-hover-bg-light);--facet-toolkit-clear-button-bg: var(--facet-toolkit-clear-button-bg-light);--facet-toolkit-clear-button-text: var(--facet-toolkit-clear-button-text-light);--facet-toolkit-modal-action-primary-bg: var(--facet-toolkit-modal-action-primary-bg-light);--facet-toolkit-modal-action-primary-text: var(--facet-toolkit-modal-action-primary-text-light);--facet-toolkit-modal-action-secondary-bg: var(--facet-toolkit-modal-action-secondary-bg-light);--facet-toolkit-modal-action-secondary-text: var(--facet-toolkit-modal-action-secondary-text-light);--facet-toolkit-modal-action-warn-bg: var(--facet-toolkit-modal-action-warn-bg-light);--facet-toolkit-modal-action-warn-text: var(--facet-toolkit-modal-action-warn-text-light);--facet-toolkit-modal-action-border: var(--facet-toolkit-modal-action-border-light);--facet-toolkit-modal-input-focus-outline: var(--facet-toolkit-modal-input-focus-outline-light);--facet-toolkit-modal-input-focus-label: var(--facet-toolkit-modal-input-focus-label-light);--facet-toolkit-modal-input-caret: var(--facet-toolkit-modal-input-caret-light);--facet-toolkit-chip-selected-bg: var(--facet-toolkit-chip-selected-bg-light);--facet-toolkit-chip-selected-text: var(--facet-toolkit-chip-selected-text-light)}:host(.facet-theme-dark){--facet-toolkit-input-bg: var(--facet-toolkit-input-bg-dark);--facet-toolkit-input-shadow: var(--facet-toolkit-input-shadow-dark);--facet-toolkit-input-hover-bg: var(--facet-toolkit-input-hover-bg-dark);--facet-toolkit-input-hover-shadow: var(--facet-toolkit-input-hover-shadow-dark);--facet-toolkit-input-focus-shadow: var(--facet-toolkit-input-focus-shadow-dark);--facet-toolkit-input-text: var(--facet-toolkit-input-text-dark);--facet-toolkit-input-placeholder: var(--facet-toolkit-input-placeholder-dark);--facet-toolkit-add-icon: var(--facet-toolkit-add-icon-dark);--facet-toolkit-preset-trigger: var(--facet-toolkit-preset-trigger-dark);--facet-toolkit-count-divider: var(--facet-toolkit-count-divider-dark);--facet-toolkit-count-bg: var(--facet-toolkit-count-bg-dark);--facet-toolkit-count-text: var(--facet-toolkit-count-text-dark);--facet-toolkit-scrollbar-thumb: var(--facet-toolkit-scrollbar-thumb-dark);--facet-toolkit-preset-row-bg: var(--facet-toolkit-preset-row-bg-dark);--facet-toolkit-modal-surface: var(--facet-toolkit-modal-surface-dark);--facet-toolkit-modal-text: var(--facet-toolkit-modal-text-dark);--facet-toolkit-modal-header-bg: var(--facet-toolkit-modal-header-bg-dark);--facet-toolkit-modal-header-text: var(--facet-toolkit-modal-header-text-dark);--facet-toolkit-menu-surface: var(--facet-toolkit-menu-surface-dark);--facet-toolkit-menu-text: var(--facet-toolkit-menu-text-dark);--facet-toolkit-menu-hover-bg: var(--facet-toolkit-menu-hover-bg-dark);--facet-toolkit-clear-button-bg: var(--facet-toolkit-clear-button-bg-dark);--facet-toolkit-clear-button-text: var(--facet-toolkit-clear-button-text-dark);--facet-toolkit-modal-action-primary-bg: var(--facet-toolkit-modal-action-primary-bg-dark);--facet-toolkit-modal-action-primary-text: var(--facet-toolkit-modal-action-primary-text-dark);--facet-toolkit-modal-action-secondary-bg: var(--facet-toolkit-modal-action-secondary-bg-dark);--facet-toolkit-modal-action-secondary-text: var(--facet-toolkit-modal-action-secondary-text-dark);--facet-toolkit-modal-action-warn-bg: var(--facet-toolkit-modal-action-warn-bg-dark);--facet-toolkit-modal-action-warn-text: var(--facet-toolkit-modal-action-warn-text-dark);--facet-toolkit-modal-action-border: var(--facet-toolkit-modal-action-border-dark);--facet-toolkit-modal-input-focus-outline: var(--facet-toolkit-modal-input-focus-outline-dark);--facet-toolkit-modal-input-focus-label: var(--facet-toolkit-modal-input-focus-label-dark);--facet-toolkit-modal-input-caret: var(--facet-toolkit-modal-input-caret-dark);--facet-toolkit-chip-selected-bg: var(--facet-toolkit-chip-selected-bg-dark);--facet-toolkit-chip-selected-text: var(--facet-toolkit-chip-selected-text-dark)}::ng-deep .facet-theme-panel .mat-mdc-menu-panel,::ng-deep .facet-theme-panel .mat-mdc-autocomplete-panel{background:var(--facet-toolkit-menu-surface, var(--mat-menu-container-color, #ffffff));color:var(--facet-toolkit-menu-text, var(--mat-menu-item-label-text-color, #1c2b46))}::ng-deep .facet-theme-panel .mat-mdc-menu-item,::ng-deep .facet-theme-panel .mat-mdc-option{color:var(--facet-toolkit-menu-text, var(--mat-menu-item-label-text-color, #1c2b46))}::ng-deep .facet-theme-panel .mat-mdc-menu-item:hover,::ng-deep .facet-theme-panel .mat-mdc-option:hover,::ng-deep .facet-theme-panel .mat-mdc-option.mdc-list-item--selected{background:var(--facet-toolkit-menu-hover-bg, var(--mat-menu-item-hover-state-layer-color, rgba(0, 0, 0, .04)))}*{outline:0}.filter-input-container{background-color:transparent!important;opacity:1!important;box-shadow:none!important;background-color:var(--facet-toolkit-input-bg)!important;box-shadow:var(--facet-toolkit-input-shadow)!important;color:var(--facet-toolkit-input-text);transition:box-shadow .12s ease,background-color .12s ease;height:28px;display:inline-flex;align-items:center;gap:2px;flex:0 0 auto;padding:0 4px;margin-bottom:10px;border-radius:999px}.filter-input-container .filter-input{border:none!important;background:none!important;width:56px;font-size:14px!important;font-weight:400;height:28px;line-height:28px;padding:0;text-align:left;color:inherit;position:relative;top:0;margin-left:2px;vertical-align:middle}.filter-input::placeholder{color:var(--facet-toolkit-input-placeholder);opacity:.9}.inline-chip-icon{width:18px;height:18px;font-size:18px;margin-right:7px;margin-left:0}:host-context .mat-checkbox-inner-container{transform:scale(.7)}:host-context(.inlineChipCheckbox) label.mat-checkbox-layout div.mat-checkbox-inner-container{transform:scale(.7)}.add-icon{margin-top:0;color:var(--facet-toolkit-add-icon)}.add-icon:hover,.filter-input-container:hover{cursor:pointer}.filter-input-container:hover{background-color:var(--facet-toolkit-input-hover-bg)!important;box-shadow:var(--facet-toolkit-input-hover-shadow)!important}.filter-input-container:focus-within{box-shadow:var(--facet-toolkit-input-focus-shadow)!important}.filter-count-divider{display:inline-block;width:1px;height:18px;margin:0 3px;background:var(--facet-toolkit-count-divider);align-self:center}.filter-count{font-size:11px;font-weight:700;line-height:16px;padding:2px 6px;border-radius:999px;background:var(--facet-toolkit-count-bg);color:var(--facet-toolkit-count-text);letter-spacing:.02em;align-self:center}.facet-clear-button{background:var(--facet-toolkit-clear-button-bg, var(--mdc-filled-button-container-color))!important;color:var(--facet-toolkit-clear-button-text, var(--mdc-filled-button-label-text-color))!important}::ng-deep .facet-chip.mat-mdc-chip-selected{background:var(--facet-toolkit-chip-selected-bg)!important;color:var(--facet-toolkit-chip-selected-text)!important}.main-facet-wrapper{min-height:36px;display:flex;align-items:center}.main-facet-wrapper .icon-wrapper{height:100%;display:flex;justify-content:center;align-items:center;margin-right:20px}.preset-menu-trigger{margin-bottom:10px;color:var(--facet-toolkit-preset-trigger)}::ng-deep .mat-autocomplete-panel.mat-autocomplete-visible{left:-40px!important;top:15px!important}::ng-deep .mat-chip-list-wrapper{display:flex;flex-wrap:wrap;align-items:center;gap:8px;transition:width .3s ease-in-out}.facet-chip{order:1}.content-wrapper{flex:1;min-width:0}.chip-row{display:flex;align-items:center;gap:8px;min-width:0}.chip-scroll-container{display:flex;align-items:center;overflow-x:auto;overflow-y:hidden;height:40px;margin-bottom:10px;width:100%;flex:1 1 auto;min-width:0;white-space:nowrap;scrollbar-width:thin}.chip-scroll-container.has-scroll{margin-bottom:0}.content-wrapper.chip-scrollable ::ng-deep .mat-chip-list-wrapper{display:inline-flex!important;flex-wrap:nowrap!important;width:max-content;white-space:nowrap}.content-wrapper.chip-scrollable ::ng-deep .mat-chip-list-wrapper::-webkit-scrollbar,.chip-scroll-container::-webkit-scrollbar{height:6px}.content-wrapper.chip-scrollable ::ng-deep .mat-chip-list-wrapper::-webkit-scrollbar-thumb,.chip-scroll-container::-webkit-scrollbar-thumb{background-color:var(--facet-toolkit-scrollbar-thumb);border-radius:999px}.content-wrapper.chip-scrollable ::ng-deep .mat-chip-list-wrapper::-webkit-scrollbar-track,.chip-scroll-container::-webkit-scrollbar-track{background:transparent}.content-wrapper.chip-scrollable ::ng-deep .mat-chip-option,.content-wrapper.chip-scrollable ::ng-deep .mat-chip-row{flex:0 0 auto}.content-wrapper.chip-scrollable ::ng-deep .mat-chip-grid{display:inline-flex!important;flex-wrap:nowrap;align-items:center;width:max-content}.content-wrapper.chip-scrollable ::ng-deep .mat-mdc-chip-set,.content-wrapper.chip-scrollable ::ng-deep .mdc-evolution-chip-set__chips{display:inline-flex!important;flex-wrap:nowrap!important;width:max-content;white-space:nowrap}.content-wrapper.chip-scrollable ::ng-deep .mat-chip-list-wrapper{align-items:center;display:inline-flex!important;flex-wrap:nowrap!important}.content-wrapper.chip-scrollable ::ng-deep .mat-chip-row,.content-wrapper.chip-scrollable ::ng-deep .mat-chip-option{max-height:28px;white-space:nowrap}.content-wrapper.chip-scrollable ::ng-deep .mat-chip-option{white-space:nowrap}.flex-facet{display:flex;align-items:center}.flex-facet-autocomplete{display:inline-flex;align-items:center;justify-content:center;height:28px}\n"]
    }]
  }], () => [], {
    hostStyles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style']
    }],
    isThemeDark: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.facet-theme-dark']
    }],
    isThemeLight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.facet-theme-light']
    }],
    filterInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['filterInput']
    }],
    inputAutoComplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__.MatAutocompleteTrigger, {
        read: _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__.MatAutocompleteTrigger
      }]
    }],
    presetMenuButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['presetMenuButton', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }],
    chipScrollContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['chipScrollContainer', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }]
  });
})();

/*
 * Public API Surface of ngx-mat-facet-toolkit
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 5207:
/*!*****************************************************!*\
  !*** ./projects/ngx-mat-facet-toolkit/package.json ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"@drsutphin/ngx-mat-facet-toolkit","version":"1.0.24","description":"Angular 19 standalone facet filtering toolkit built on Angular Material.","keywords":["angular","angular-material","material","facet","facet-search","filters","filtering","chips","autocomplete","standalone","ui"],"author":"Derek Sutphin","repository":{"type":"git","url":"git+https://github.com/drsutphin/NgxMatFacetToolkit.git"},"peerDependencies":{"@angular/common":"^19.0.0","@angular/core":"^19.0.0","@angular/forms":"^19.0.0","@angular/material":"^19.0.0","uuid":"^9.0.1"},"dependencies":{"tslib":"^2.6.2"}}');

/***/ }),

/***/ 5256:
/*!*******************************************************************!*\
  !*** ./projects/demo-application/src/environments/environment.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 8649:
/*!*********************************************************************************!*\
  !*** ./projects/demo-application/src/app/components/output/output.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutputComponent: () => (/* binding */ OutputComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);





class OutputComponent {
  selectedFacets = [];
  filterUpdated(facetFilters) {
    this.selectedFacets = facetFilters;
    console.log('filter', facetFilters);
  }
  static ɵfac = function OutputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OutputComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OutputComponent,
    selectors: [["app-output"]],
    decls: 7,
    vars: 3,
    consts: [["appearance", "outlined"]],
    template: function OutputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Output");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content")(4, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx.selectedFacets));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.JsonPipe, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle],
    styles: ["[_nghost-%COMP%] {\n  flex: 3;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  max-height: 320px;\n  overflow: auto;\n}\n\npre[_ngcontent-%COMP%] {\n  background: black;\n  color: white;\n  padding: 1em;\n  border-radius: 5px;\n  font-family: monospace;\n  font-size: small;\n  margin: 0;\n}\n\n.mat-mdc-card-title[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8tYXBwbGljYXRpb24vc3JjL2FwcC9jb21wb25lbnRzL291dHB1dC9vdXRwdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXg6IDM7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAzMjBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTptb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTpzbWFsbDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWF0LW1kYy1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8857:
/*!********************************************************************************!*\
  !*** ./projects/demo-application/src/app/pages/page-one/page-one.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageOneComponent: () => (/* binding */ PageOneComponent)
/* harmony export */ });
/* harmony import */ var _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @drsutphin/ngx-mat-facet-toolkit */ 4511);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/settings/settings.component */ 3685);
/* harmony import */ var _components_output_output_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/output/output.component */ 8649);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);









class PageOneComponent {
  facets = [];
  identifier = null;
  strategy = _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetIdentifierStrategy.ParentID;
  config = {
    identifierStrategy: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetIdentifierStrategy.ParentID,
    chipRowScrollable: true,
    showFilterCount: true
  };
  strategyUpdated(newStrategy) {
    this.strategy = newStrategy;
    this.config = {
      ...this.config,
      identifierStrategy: newStrategy
    };
  }
  manualIdentifierUpdated(identifier) {
    this.identifier = identifier;
  }
  facetsUpdated(facets) {
    this.facets = facets;
  }
  static ɵfac = function PageOneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PageOneComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PageOneComponent,
    selectors: [["app-page-one"]],
    decls: 10,
    vars: 9,
    consts: [["settings", ""], ["output", ""], ["appearance", "outlined"], ["placeholder", "Add a filter...", "clearButtonText", "CLEAR FILTERS", 3, "facetChange", "facets", "config", "identifier", "chipLabelsEnabled", "confirmOnRemove", "clearButtonEnabled"], [1, "content"], [3, "facetsUpdated", "strategyUpdated", "manualIdentifierUpdated", "currentIdentifier", "strategy"], [3, "vertical"]],
    template: function PageOneComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 2)(1, "mat-card-content")(2, "ngx-mat-facet-toolkit", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("facetChange", function PageOneComponent_Template_ngx_mat_facet_toolkit_facetChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          const output_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](output_r2.filterUpdated($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "app-settings", 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("facetsUpdated", function PageOneComponent_Template_app_settings_facetsUpdated_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.facetsUpdated($event));
        })("strategyUpdated", function PageOneComponent_Template_app_settings_strategyUpdated_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.strategyUpdated($event));
        })("manualIdentifierUpdated", function PageOneComponent_Template_app_settings_manualIdentifierUpdated_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.manualIdentifierUpdated($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "mat-divider", 6)(8, "app-output", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const settings_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("facets", ctx.facets)("config", ctx.config)("identifier", ctx.identifier)("chipLabelsEnabled", settings_r3.chipLabelsEnabled)("confirmOnRemove", settings_r3.confirmOnRemove)("clearButtonEnabled", settings_r3.clearButtonEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("currentIdentifier", ctx.identifier)("strategy", ctx.strategy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("vertical", true);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.NgxMatFacetToolkitComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent, _components_output_output_component__WEBPACK_IMPORTED_MODULE_1__.OutputComponent],
    styles: ["[_nghost-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n}\n.content[_ngcontent-%COMP%]   .mat-divider[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n@media (max-width: 900px) {\n  .content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .content[_ngcontent-%COMP%]   .mat-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8tYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy9wYWdlLW9uZS9wYWdlLW9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7QUFDSjs7QUFHQTtFQUNFO0lBQ0Usc0JBQUE7RUFBRjtFQUVFO0lBQ0UsYUFBQTtFQUFKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGVudCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxNXB4O1xuXG4gIC5tYXQtZGl2aWRlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5tYXQtZGl2aWRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9441:
/*!************************************************************************************!*\
  !*** ./projects/demo-application/src/app/pages/page-three/page-three.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageThreeComponent: () => (/* binding */ PageThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @drsutphin/ngx-mat-facet-toolkit */ 4511);
/* harmony import */ var _components_output_output_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/output/output.component */ 8649);
/* harmony import */ var _components_theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/theme-settings/theme-settings.component */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);










class PageThreeComponent {
  facets = [{
    id: 'owner',
    label: 'Owner',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.Text,
    description: 'Text filter example'
  }, {
    id: 'team',
    label: 'Team',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.CategorySingle,
    options: (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([{
      value: 'design',
      label: 'Design'
    }, {
      value: 'engineering',
      label: 'Engineering'
    }, {
      value: 'product',
      label: 'Product'
    }])
  }, {
    id: 'status',
    label: 'Status',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.Category,
    options: (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([{
      value: 'open',
      label: 'Open'
    }, {
      value: 'blocked',
      label: 'Blocked'
    }, {
      value: 'done',
      label: 'Done'
    }])
  }, {
    id: 'score',
    label: 'Score',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.Numeric,
    dataType: 'number',
    placeholder: 'Enter score'
  }, {
    id: 'created',
    label: 'Created',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.Date
  }, {
    id: 'active',
    label: 'Active',
    type: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetDataType.Boolean
  }];
  config = {
    identifierStrategy: _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.FacetIdentifierStrategy.ParentID,
    chipRowScrollable: true,
    showFilterCount: true
  };
  themeConfigUpdated(config) {
    this.config = {
      ...this.config,
      ...config
    };
  }
  static ɵfac = function PageThreeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PageThreeComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: PageThreeComponent,
    selectors: [["app-page-three"]],
    decls: 9,
    vars: 3,
    consts: [["output", ""], ["appearance", "outlined"], ["placeholder", "Add a filter...", "clearButtonText", "CLEAR FILTERS", 3, "facetChange", "facets", "config"], [1, "content"], [3, "themeConfigUpdated"], [3, "vertical"]],
    template: function PageThreeComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 1)(1, "mat-card-content")(2, "ngx-mat-facet-toolkit", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("facetChange", function PageThreeComponent_Template_ngx_mat_facet_toolkit_facetChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const output_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](output_r2.filterUpdated($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "app-theme-settings", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("themeConfigUpdated", function PageThreeComponent_Template_app_theme_settings_themeConfigUpdated_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.themeConfigUpdated($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "mat-divider", 5)(7, "app-output", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("facets", ctx.facets)("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("vertical", true);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _drsutphin_ngx_mat_facet_toolkit__WEBPACK_IMPORTED_MODULE_2__.NgxMatFacetToolkitComponent, _components_output_output_component__WEBPACK_IMPORTED_MODULE_0__.OutputComponent, _components_theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_1__.ThemeSettingsComponent],
    styles: ["[_nghost-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n}\n.content[_ngcontent-%COMP%]   .mat-divider[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n@media (max-width: 900px) {\n  .content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .content[_ngcontent-%COMP%]   .mat-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8tYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy9wYWdlLXRocmVlL3BhZ2UtdGhyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0FBQ0o7O0FBR0E7RUFDRTtJQUNFLHNCQUFBO0VBQUY7RUFFRTtJQUNFLGFBQUE7RUFBSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRlbnQge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTVweDtcblxuICAubWF0LWRpdmlkZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAubWF0LWRpdmlkZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4341)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map