import {Component, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FacetResultType} from '../../models/facet-result.model';
import {FacetModalRef} from '../facet-modal.ref';
import {FACET_MODAL_DATA} from '../facet-modal.data';
import {FocusOnShowDirective} from '../../directives/focus-on-show.directive';

export interface PresetNameModalData {
  title: string;
  confirmLabel?: string;
  initialName?: string;
  placeholder?: string;
}

@Component({
  selector: 'ngx-mat-facet-preset-name-modal',
  templateUrl: './preset-name-modal.component.html',
  styleUrls: ['./preset-name-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FocusOnShowDirective
  ]
})
export class PresetNameModalComponent {
  name = '';

  constructor(
    @Inject(FACET_MODAL_DATA) public data: PresetNameModalData,
    public modalRef: FacetModalRef<string>
  ) {
    this.name = (data.initialName || '').trim();
  }

  close(): void {
    this.modalRef.close({type: FacetResultType.CANCEL});
  }

  save(): void {
    const trimmed = (this.name || '').trim();
    if (!trimmed) {
      return;
    }
    this.modalRef.close({type: FacetResultType.ADD, data: trimmed});
  }
}
