import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/onboarding/LoginPage';
import { validUser, invalidUser } from '../../test-data/users';

test.describe('P0 - Login de usuario', () => {

  test('Login fallido con contraseña incorrecta', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate('/login');
    await loginPage.login(invalidUser.email, invalidUser.password);

    const errorMessage = await loginPage.getLoginError();
    expect(errorMessage).toContain('credenciales');
  });

  test('Login exitoso con credenciales válidas', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate('/login');
    await loginPage.login(validUser.email, validUser.password);

    await expect(page).toHaveURL(/dashboard/);
  });

});
