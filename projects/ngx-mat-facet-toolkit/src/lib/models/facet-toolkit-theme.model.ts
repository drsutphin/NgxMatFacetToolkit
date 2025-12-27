export type FacetToolkitThemeMode = 'auto' | 'light' | 'dark';

export interface FacetToolkitThemeOverrides {
  inputBg?: string;
  inputShadow?: string;
  inputHoverBg?: string;
  inputHoverShadow?: string;
  inputFocusShadow?: string;
  inputText?: string;
  inputPlaceholder?: string;
  addIcon?: string;
  presetTrigger?: string;
  countDivider?: string;
  countBg?: string;
  countText?: string;
  scrollbarThumb?: string;
  presetRowBg?: string;
  modalSurface?: string;
  modalText?: string;
  modalHeaderBg?: string;
  modalHeaderText?: string;
  menuSurface?: string;
  menuText?: string;
  menuHoverBg?: string;
  clearButtonBg?: string;
  clearButtonText?: string;
}

export type FacetToolkitThemeVariables = Record<string, string>;
