import {Component, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FacetModalRef} from '../facet-modal.ref';
import {FACET_MODAL_DATA} from '../facet-modal.data';
import {FacetPreset} from '../../models';
import {FacetResultType} from '../../models/facet-result.model';

export interface PresetManagerModalData {
  presets: FacetPreset[];
  onLoad: (preset: FacetPreset) => void;
  onRename: (preset: FacetPreset, name: string) => void;
  onDelete: (preset: FacetPreset) => void;
}

@Component({
  selector: 'ngx-mat-facet-preset-manager-modal',
  templateUrl: './preset-manager-modal.component.html',
  styleUrls: ['./preset-manager-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ]
})
export class PresetManagerModalComponent {
  filterText = '';
  editingPresetId: string | null = null;
  editingName = '';
  presets: FacetPreset[] = [];

  constructor(
    @Inject(FACET_MODAL_DATA) public data: PresetManagerModalData,
    public modalRef: FacetModalRef
  ) {
    this.presets = [...(data.presets || [])];
  }

  get filteredPresets(): FacetPreset[] {
    const text = (this.filterText || '').trim().toLowerCase();
    if (!text) {
      return this.presets;
    }
    return this.presets.filter(preset => preset.name.toLowerCase().includes(text));
  }

  close(): void {
    this.modalRef.close({type: FacetResultType.CANCEL});
  }

  loadPreset(preset: FacetPreset): void {
    this.data.onLoad(preset);
  }

  startRename(preset: FacetPreset): void {
    this.editingPresetId = preset.id;
    this.editingName = preset.name;
  }

  confirmRename(preset: FacetPreset): void {
    const trimmed = (this.editingName || '').trim();
    if (!trimmed) {
      return;
    }
    this.data.onRename(preset, trimmed);
    this.presets = this.presets.map(item =>
      item.id === preset.id ? {...item, name: trimmed, updatedAt: new Date().toISOString()} : item
    );
    this.editingPresetId = null;
    this.editingName = '';
  }

  cancelRename(): void {
    this.editingPresetId = null;
    this.editingName = '';
  }

  deletePreset(preset: FacetPreset): void {
    if (!confirm(`Delete preset "${preset.name}"?`)) {
      return;
    }
    this.data.onDelete(preset);
    this.presets = this.presets.filter(item => item.id !== preset.id);
  }
}
