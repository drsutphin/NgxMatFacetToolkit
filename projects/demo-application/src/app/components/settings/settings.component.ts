import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BehaviorSubject, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {
  FacetDataType,
  FacetDefinition,
  FacetIdentifierStrategy,
  FacetValue
} from '@drsutphin/ngx-mat-facet-toolkit';
import {lotsOfValuesTypeAhead, testEmptyFilterTypeahead} from '../../common.helpers';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
  ]
})
export class SettingsComponent implements AfterViewInit {

  @Output()
  strategyUpdated = new EventEmitter<FacetIdentifierStrategy>(true);

  @Output()
  manualIdentifierUpdated = new EventEmitter<string>(true);

  @Output()
  facetsUpdated = new EventEmitter<FacetDefinition[]>(true);

  @Input()
  set strategy(value: FacetIdentifierStrategy) {
    this.currentStrategy = value;
  }

  @Input()
  currentIdentifier: string | null = '';

  public chipLabelsEnabled = true;
  public clearButtonEnabled = true;
  public confirmOnRemove = true;
  public isUsingSetB = true;

  public allStrategies: FacetIdentifierStrategy[] = [];
  public currentStrategy: FacetIdentifierStrategy = FacetIdentifierStrategy.ParentID;
  public showManualInput = new BehaviorSubject(false);
  public manualIdentifier = '';
  public facets: Array<FacetDefinition> = [];

  private allFacets: FacetDefinition[] = [
    {
      id: 'user-name',
      label: 'User Name',
      type: FacetDataType.Text,
      description: 'Please enter your user name (simple text input example)',
      icon: 'person_outline'
    }, {
      id: 'birthday',
      label: 'Birthday',
      icon: 'date_range',
      description: 'Please select your birthday (date select example)',
      type: FacetDataType.Date,
    },
    {
      id: 'score',
      label: 'Score',
      icon: 'speed',
      description: 'Numeric filter with comparison operators.',
      type: FacetDataType.Numeric,
      dataType: 'number',
      placeholder: 'Enter a score'
    },
    {
      id: 'event-days',
      label: 'Event Days',
      icon: 'event_available',
      description: 'Please select start and end dates (date range select example)',
      type: FacetDataType.DateRange,
    },
    {
      id: 'is-participant',
      label: 'Is a Participant?',
      icon: 'live_help',
      description: 'This is a test field, you can test boolean data type.',
      type: FacetDataType.Boolean,
    },
    {
      id: 'state',
      label: 'State',
      description: 'Please select something (single select, http example)',
      type: FacetDataType.CategorySingle,
      icon: 'folder_open',
      options: of<FacetValue[]>([
        {value: 'open', label: 'Open', count: 49},
        {value: 'closed', label: 'Closed', count: 23}
      ]).pipe(delay(700))
    },
    {
      id: 'license',
      label: 'License(s)',
      description: 'Please select your licenses (multi select, http example)',
      type: FacetDataType.Category,
      icon: 'drive_eta',
      options: of<FacetValue[]>([
        {value: 'a', label: 'Class A'},
        {value: 'b', label: 'Class B'},
        {value: 'c', label: 'Class C'}
      ]).pipe(delay(1200))
    },
    {
      id: 'city',
      label: 'Cities',
      description: 'Please select from cities.',
      type: FacetDataType.Typeahead,
      icon: 'location_city',
      typeahead: {
        provider: (txt: string) => of<FacetValue[]>([
          {value: `${txt}-a`, label: `${txt} A`},
          {value: `${txt}-b`, label: `${txt} B`},
          {value: `${txt}-c`, label: `${txt} C`}
        ]).pipe(delay(1200)),
      }
    },
    {
      id: 'department',
      label: 'Department',
      description: 'Department filter.',
      type: FacetDataType.Text,
      icon: 'apartment'
    },
    {
      id: 'birthday-two',
      label: 'Birthday 2',
      icon: 'date_range',
      description: 'Please select your birthday (date select example)',
      type: FacetDataType.Date,
    },
    {
      id: 'empty',
      label: 'Empty Test',
      description: 'Please select from options.',
      type: FacetDataType.Typeahead,
      icon: 'clear',
      typeahead: {
        provider: testEmptyFilterTypeahead,
        placeholder: 'Empty'
      }
    },
    {
      id: 'many',
      label: 'Many Test',
      description: 'Please select from options.',
      type: FacetDataType.Typeahead,
      icon: 'dns',
      typeahead: {
        provider: lotsOfValuesTypeAhead,
        placeholder: '1'
      }
    }
  ];

  constructor() {
    this.allStrategies = Object.values(FacetIdentifierStrategy);
    this.strategyUpdated.pipe(
      map(v => v.toLowerCase() === 'manual')
    ).subscribe(this.showManualInput);
  }

  ngAfterViewInit() {
    this.toggleSet();
  }

  chunkArray = (arr: Array<any>, n: number) => {
    const chunkLength = Math.max(arr.length / n, 1);
    const chunks = [];
    for (let i = 0; i < n; i++) {
      if (chunkLength * (i + 1) <= arr.length) {
        chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
      }
    }
    return chunks;
  };

  displayStrategy(raw: string): string {
    switch (raw) {
      case 'windowURL':
        return 'Window URL';
      case 'parentID':
        return 'Parent ID';
      default:
        return raw;
    }
  }

  toggleSet() {
    const chunked = this.chunkArray(this.allFacets, 2);

    if (this.isUsingSetB) {
      this.facets = chunked[0];
      this.isUsingSetB = false;
    } else {
      this.facets = chunked[1];
      this.isUsingSetB = true;
    }

    this.facetsUpdated.emit(this.facets);
  }
}
