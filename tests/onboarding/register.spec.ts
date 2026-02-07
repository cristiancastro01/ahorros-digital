import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/onboarding/RegisterPage';
import { validUser } from '../../test-data/users';

test.describe('P0 - Registro de usuario', () => {

  test('Registro exitoso con datos válidos', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.navigate('/register');
    await registerPage.register(validUser.email, validUser.password);

    await expect(page).toHaveURL(/dashboard/);
  });

  test('Registro fallido con campos obligatorios vacíos', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.navigate('/register');
    await registerPage.submit();

    expect(await registerPage.isRegisterButtonDisabled()).toBeTruthy();
  });

});
