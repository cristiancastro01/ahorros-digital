import { test, expect } from '@playwright/test';
import { SimulatorPage } from '../../pages/simulator/SimulatorPage';
import { validAmount, zeroAmount } from '../../test-data/simulatorData';

test.describe('P1 - Simulador de ahorro', () => {

  test.beforeEach(async ({ page }) => {
    // Simulación de usuario autenticado
    await page.goto('/login');
    await page.fill('#email', 'testuser@mail.com');
    await page.fill('#password', 'Test@1234');
    await page.click('#login');
    await page.waitForURL(/dashboard/);
  });

  test('Simulación exitosa con monto válido', async ({ page }) => {
    const simulatorPage = new SimulatorPage(page);

    await simulatorPage.navigate('/simulator');
    await simulatorPage.simulate(validAmount);

    const result = await simulatorPage.getSimulationResult();
    expect(result).not.toBeNull();
  });

  test('Simulación fallida con monto igual a 0', async ({ page }) => {
    const simulatorPage = new SimulatorPage(page);

    await simulatorPage.navigate('/simulator');
    await simulatorPage.simulate(zeroAmount);

    const errorMessage = await simulatorPage.getErrorMessage();
    expect(errorMessage).toContain('monto');
  });

});
