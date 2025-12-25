import {expect, test} from '@playwright/test';

test('loads the demo app and facet search', async ({page}) => {
  await page.goto('/');
  await expect(page.getByText('Angular Material Facet Toolkit')).toBeVisible();
  await expect(page.locator('ngx-mat-facet-toolkit')).toBeVisible();
});
