import {Component, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FacetModalRef} from '../facet-modal.ref';
import {FACET_MODAL_DATA} from '../facet-modal.data';
import {FacetResultType} from '../../models/facet-result.model';

export interface FacetRemoveConfirmModalData {
  label: string;
}

@Component({
  selector: 'ngx-mat-facet-remove-confirm-modal',
  templateUrl: './facet-remove-confirm-modal.component.html',
  styleUrls: ['./facet-remove-confirm-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class FacetRemoveConfirmModalComponent {
  constructor(
    @Inject(FACET_MODAL_DATA) public data: FacetRemoveConfirmModalData,
    public modalRef: FacetModalRef<boolean>
  ) {}

  close(): void {
    this.modalRef.close({type: FacetResultType.CANCEL});
  }

  confirm(): void {
    this.modalRef.close({type: FacetResultType.ADD, data: true});
  }
}
