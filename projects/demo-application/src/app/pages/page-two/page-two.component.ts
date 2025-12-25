import {Component} from '@angular/core';
import {
  FacetDefinition,
  FacetIdentifierStrategy,
  FacetToolkitConfig
} from '@drsutphin/ngx-mat-facet-toolkit';
import {SettingsComponent} from '../../components/settings/settings.component';
import {OutputComponent} from '../../components/output/output.component';
import {NgxMatFacetToolkitComponent} from '@drsutphin/ngx-mat-facet-toolkit';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    NgxMatFacetToolkitComponent,
    SettingsComponent,
    OutputComponent
  ]
})
export class PageTwoComponent {
  facets: Array<FacetDefinition> = [];
  identifier: string | null = null;
  strategy: FacetIdentifierStrategy = FacetIdentifierStrategy.ParentID;
  config: Partial<FacetToolkitConfig> = {
    identifierStrategy: FacetIdentifierStrategy.ParentID
  };

  strategyUpdated(newStrategy: FacetIdentifierStrategy) {
    this.strategy = newStrategy;
    this.config = {
      ...this.config,
      identifierStrategy: newStrategy
    };
  }

  manualIdentifierUpdated(identifier: string) {
    this.identifier = identifier;
  }

  facetsUpdated(facets: FacetDefinition[]) {
    this.facets = facets;
  }
}
