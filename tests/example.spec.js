// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('file:///D:/Development%20Web/Javascript/University_Finder/index.html');

  await expect(page).toHaveTitle(/University Finder/);
});


test('get started link', async ({ page }) => {
  
  await page.goto('file:///D:/Development%20Web/Javascript/University_Finder/index.html');

  // await page.getByPlaceholder('Write hear').fill('Middlesex Community College');
  await page.getByTestId('input-write').fill('Middlesex Community College');
  
  // await page.getByRole('button', { name: 'Search' }).click();
  await page.getByTestId('btn-search').click();

  
  let contentLista = page.getByTestId('lista');
  expect(contentLista).not.toBeNull();
});
