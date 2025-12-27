import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {
  FacetToolkitConfig,
  FacetToolkitThemeMode,
  FacetToolkitThemeOverrides
} from '@drsutphin/ngx-mat-facet-toolkit';

interface ThemeField {
  key: keyof FacetToolkitThemeOverrides;
  label: string;
  placeholder: string;
  isColor?: boolean;
}

interface ThemePreset {
  id: string;
  label: string;
  light: FacetToolkitThemeOverrides;
  dark: FacetToolkitThemeOverrides;
}

const hexToRgb = (hex: string): {r: number; g: number; b: number} | null => {
  const normalized = hex.replace('#', '').trim();
  const value = normalized.length === 3
    ? normalized.split('').map(char => char + char).join('')
    : normalized;
  if (value.length !== 6) {
    return null;
  }
  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);
  return Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b) ? null : {r, g, b};
};

const rgbaFromHex = (hex: string, alpha: number): string => {
  const rgb = hexToRgb(hex);
  if (!rgb) {
    return hex;
  }
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
};

const buildOverrides = (
  primaryHex: string,
  textHex: string,
  surfaceHex: string,
  headerTextHex: string,
  clearButtonBg: string,
  clearButtonText: string
): FacetToolkitThemeOverrides => ({
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

@Component({
  selector: 'app-theme-settings',
  templateUrl: './theme-settings.component.html',
  styleUrls: ['./theme-settings.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class ThemeSettingsComponent implements OnInit {
  @Output()
  themeConfigUpdated = new EventEmitter<Partial<FacetToolkitConfig>>(true);

  themeMode: FacetToolkitThemeMode = 'auto';
  themePresetId = 'material-indigo-pink';

  themeFields: ThemeField[] = [
    {key: 'inputBg', label: 'Input background', placeholder: 'rgba(46, 72, 144, 0.08)'},
    {key: 'inputShadow', label: 'Input shadow', placeholder: '0 0 0 1px rgba(46, 72, 144, 0.35)'},
    {key: 'inputHoverBg', label: 'Input hover background', placeholder: 'rgba(46, 72, 144, 0.12)'},
    {key: 'inputHoverShadow', label: 'Input hover shadow', placeholder: '0 0 0 1px rgba(46, 72, 144, 0.55)'},
    {key: 'inputFocusShadow', label: 'Input focus shadow', placeholder: '0 0 0 2px rgba(70, 110, 200, 0.35)'},
    {key: 'inputText', label: 'Input text', placeholder: '#1c2b46', isColor: true},
    {key: 'inputPlaceholder', label: 'Input placeholder', placeholder: '#1c2b46', isColor: true},
    {key: 'addIcon', label: 'Add icon', placeholder: '#1c2b46', isColor: true},
    {key: 'presetTrigger', label: 'Preset trigger', placeholder: '#1c2b46', isColor: true},
    {key: 'countDivider', label: 'Count divider', placeholder: 'linear-gradient(...)'},
    {key: 'countBg', label: 'Count background', placeholder: 'rgba(46, 72, 144, 0.16)'},
    {key: 'countText', label: 'Count text', placeholder: '#1c2b46', isColor: true},
    {key: 'scrollbarThumb', label: 'Scrollbar thumb', placeholder: 'rgba(46, 72, 144, 0.35)'},
    {key: 'presetRowBg', label: 'Preset row background', placeholder: 'rgba(46, 72, 144, 0.08)'},
    {key: 'modalSurface', label: 'Modal surface', placeholder: '#ffffff', isColor: true},
    {key: 'modalText', label: 'Modal text', placeholder: '#1c2b46', isColor: true},
    {key: 'modalHeaderBg', label: 'Modal header background', placeholder: '#3f51b5', isColor: true},
    {key: 'modalHeaderText', label: 'Modal header text', placeholder: '#ffffff', isColor: true},
    {key: 'menuSurface', label: 'Menu surface', placeholder: '#ffffff', isColor: true},
    {key: 'menuText', label: 'Menu text', placeholder: '#1c2b46', isColor: true},
    {key: 'menuHoverBg', label: 'Menu hover background', placeholder: 'rgba(46, 72, 144, 0.08)'},
    {key: 'clearButtonBg', label: 'Clear button background', placeholder: '#e91e63', isColor: true},
    {key: 'clearButtonText', label: 'Clear button text', placeholder: '#ffffff', isColor: true}
  ];

  themePresets: ThemePreset[] = [
    {
      id: 'material-indigo-pink',
      label: 'Material Indigo/Pink (Light) + Blue Gray/Amber (Dark)',
      light: buildOverrides('#3f51b5', '#1c2b46', '#ffffff', '#ffffff', '#e91e63', '#ffffff'),
      dark: buildOverrides('#607d8b', '#e2e8f0', '#111827', '#e2e8f0', '#f59e0b', '#111827')
    },
    {
      id: 'material-teal-amber',
      label: 'Material Teal/Amber (Light) + Blue Gray/Amber (Dark)',
      light: buildOverrides('#009688', '#0f172a', '#ffffff', '#ffffff', '#ffc107', '#111827'),
      dark: buildOverrides('#455a64', '#e2e8f0', '#0f172a', '#e2e8f0', '#f59e0b', '#111827')
    },
    {
      id: 'material-deep-purple-amber',
      label: 'Material Deep Purple/Amber (Light) + Blue Gray/Amber (Dark)',
      light: buildOverrides('#673ab7', '#1e1b4b', '#ffffff', '#ffffff', '#ffc107', '#111827'),
      dark: buildOverrides('#546e7a', '#e2e8f0', '#0f172a', '#e2e8f0', '#f59e0b', '#111827')
    }
  ];

  lightOverrides: FacetToolkitThemeOverrides = {
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
    clearButtonText: '#ffffff'
  };

  darkOverrides: FacetToolkitThemeOverrides = {
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
    clearButtonText: '#111827'
  };

  ngOnInit(): void {
    this.applyPreset(this.themePresetId);
    this.emitConfig();
  }

  applyPreset(presetId: string): void {
    const preset = this.themePresets.find(item => item.id === presetId);
    if (!preset) {
      return;
    }
    this.themePresetId = preset.id;
    this.lightOverrides = {...preset.light};
    this.darkOverrides = {...preset.dark};
    this.emitConfig();
  }

  onFieldChange(): void {
    this.themePresetId = 'custom';
    this.emitConfig();
  }

  emitConfig(): void {
    this.themeConfigUpdated.emit({
      themeMode: this.themeMode,
      themeOverrides: {...this.lightOverrides},
      darkThemeOverrides: {...this.darkOverrides}
    });
  }
}
