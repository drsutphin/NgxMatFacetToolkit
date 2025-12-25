import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {FacetSelection} from '@drsutphin/ngx-mat-facet-toolkit';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class OutputComponent {

  public selectedFacets: FacetSelection[] = [];

  filterUpdated(facetFilters: FacetSelection[]): void {
    this.selectedFacets = facetFilters;
    console.log('filter', facetFilters);
  }
}
