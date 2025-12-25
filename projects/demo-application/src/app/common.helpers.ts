import {of} from 'rxjs';
import {FacetValue} from '@drsutphin/ngx-mat-facet-toolkit';
import {delay, map} from 'rxjs/operators';

export const testEmptyFilterTypeahead = (text: string) => of<FacetValue[]>([
  {value: '-a', label: ' A'},
  {value: '-b', label: ' B'},
  {value: '-c', label: ' C'}
]).pipe(
  map(values => {
    const filtered = values.filter(value => !!value.label && value.label.includes(text));

    if (filtered.length === 0) {
      return [];
    }

    return filtered;
  }),
  delay(300),
);

const randomValueArray: FacetValue[] = [...new Set(Array.from({length: 40}, () => Math.floor(Math.random() * 40)).map(num => ({
  value: `${num}`,
  label: `${num}`
})))];

export const lotsOfValuesTypeAhead = (text: string) => of(randomValueArray).pipe(
  map(values => {
    const filtered = values.filter(value => {
      if (text.length > 0) {
        return !!value.label && value.label.includes(text);
      }

      return true;
    });

    if (filtered.length === 0) {
      return [];
    }

    return filtered;
  }),
  delay(300),
);
