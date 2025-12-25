import {render} from '@testing-library/angular';
import {NgxMatFacetToolkitComponent} from './ngx-mat-facet-toolkit.component';
import {FacetDataType, FacetDefinition, FacetSelection, FacetValue} from './models';

describe('NgxMatFacetToolkitComponent', () => {
  test('should render component', async () => {
    await setup();
  });

  test('should emit facetChange with default selections', async () => {
    const component = await setup();
    const instance = component.fixture.componentInstance;

    const emissions: FacetSelection[][] = [];
    instance.facetChange.subscribe(selection => emissions.push(selection));

    const facets: FacetDefinition[] = [
      {
        id: 'status',
        label: 'Status',
        type: FacetDataType.Text,
        defaultValues: [{value: 'active', label: 'Active'}]
      }
    ];

    component.fixture.componentRef.setInput('facets', facets);
    component.fixture.detectChanges();
    await component.fixture.whenStable();

    const lastEmission = emissions[emissions.length - 1] || [];
    expect(lastEmission.length).toBe(1);
    expect(lastEmission[0].id).toBe('status');
    expect(lastEmission[0].values[0].value).toBe('active');
  });

  test('should emit facetRemoved when removing a facet', async () => {
    const component = await setup();
    const instance = component.fixture.componentInstance;

    const removed: FacetSelection[] = [];
    instance.facetRemoved.subscribe(selection => removed.push(selection));

    const facets: FacetDefinition[] = [
      {
        id: 'category',
        label: 'Category',
        type: FacetDataType.Category,
        defaultValues: [{value: 'a', label: 'A'}]
      }
    ];

    component.fixture.componentRef.setInput('confirmOnRemove', false);
    component.fixture.componentRef.setInput('facets', facets);
    component.fixture.detectChanges();
    await component.fixture.whenStable();

    const facetView = instance.selectedFacetViews()[0];
    expect(facetView).toBeDefined();

    instance.removeFacet(facetView);

    expect(removed.length).toBe(1);
    expect(removed[0].id).toBe('category');
  });

  test('should emit facetReset when reset is called', async () => {
    const component = await setup();
    const instance = component.fixture.componentInstance;

    const resets: number[] = [];
    instance.facetReset.subscribe(() => resets.push(1));

    const facets: FacetDefinition[] = [
      {
        id: 'readonly',
        label: 'Readonly',
        type: FacetDataType.Text,
        readonly: true,
        defaultValues: [{value: 'locked', label: 'Locked'}]
      }
    ];

    component.fixture.componentRef.setInput('facets', facets);
    component.fixture.detectChanges();
    await component.fixture.whenStable();

    instance.reset();
    expect(resets.length).toBe(1);
  });
});

async function setup() {
  return await render(NgxMatFacetToolkitComponent);
}
