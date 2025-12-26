import {Component, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FacetModalRef} from '../facet-modal.ref';
import {FACET_MODAL_DATA} from '../facet-modal.data';
import {FacetResultType} from '../../models/facet-result.model';

export interface PresetDeleteModalData {
  name: string;
}

@Component({
  selector: 'ngx-mat-facet-preset-delete-modal',
  templateUrl: './preset-delete-modal.component.html',
  styleUrls: ['./preset-delete-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class PresetDeleteModalComponent {
  constructor(
    @Inject(FACET_MODAL_DATA) public data: PresetDeleteModalData,
    public modalRef: FacetModalRef<boolean>
  ) {}

  close(): void {
    this.modalRef.close({type: FacetResultType.CANCEL});
  }

  confirm(): void {
    this.modalRef.close({type: FacetResultType.ADD, data: true});
  }
}
