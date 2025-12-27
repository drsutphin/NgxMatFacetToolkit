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
}

export type FacetToolkitThemeVariables = Record<string, string>;
