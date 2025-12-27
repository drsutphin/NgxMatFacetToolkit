import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {
  FacetDataType,
  FacetDefinition,
  FacetIdentifierStrategy,
  FacetToolkitConfig,
  FacetValue
} from '@drsutphin/ngx-mat-facet-toolkit';
import {NgxMatFacetToolkitComponent} from '@drsutphin/ngx-mat-facet-toolkit';
import {OutputComponent} from '../../components/output/output.component';
import {ThemeSettingsComponent} from '../../components/theme-settings/theme-settings.component';
import {of} from 'rxjs';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    NgxMatFacetToolkitComponent,
    OutputComponent,
    ThemeSettingsComponent
  ]
})
export class PageThreeComponent {
  facets: FacetDefinition[] = [
    {
      id: 'owner',
      label: 'Owner',
      type: FacetDataType.Text,
      description: 'Text filter example'
    },
    {
      id: 'team',
      label: 'Team',
      type: FacetDataType.CategorySingle,
      options: of<FacetValue[]>([
        {value: 'design', label: 'Design'},
        {value: 'engineering', label: 'Engineering'},
        {value: 'product', label: 'Product'}
      ])
    },
    {
      id: 'status',
      label: 'Status',
      type: FacetDataType.Category,
      options: of<FacetValue[]>([
        {value: 'open', label: 'Open'},
        {value: 'blocked', label: 'Blocked'},
        {value: 'done', label: 'Done'}
      ])
    },
    {
      id: 'score',
      label: 'Score',
      type: FacetDataType.Numeric,
      dataType: 'number',
      placeholder: 'Enter score'
    },
    {
      id: 'created',
      label: 'Created',
      type: FacetDataType.Date
    },
    {
      id: 'active',
      label: 'Active',
      type: FacetDataType.Boolean
    }
  ];

  config: Partial<FacetToolkitConfig> = {
    identifierStrategy: FacetIdentifierStrategy.ParentID,
    chipRowScrollable: true,
    showFilterCount: true
  };

  themeConfigUpdated(config: Partial<FacetToolkitConfig>): void {
    this.config = {
      ...this.config,
      ...config
    };
  }
}
