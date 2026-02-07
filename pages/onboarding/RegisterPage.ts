import { Page } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class RegisterPage extends BasePage {
  private emailInput = '#email';
  private passwordInput = '#password';
  private registerButton = '#register';
  private errorMessage = '.error-message';

  constructor(page: Page) {
    super(page);
  }

  async fillEmail(email: string) {
    await this.page.fill(this.emailInput, email);
  }

  async fillPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async submit() {
    await this.page.click(this.registerButton);
  }

  async register(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.submit();
  }

  async getErrorMessage() {
    return this.page.textContent(this.errorMessage);
  }

  async isRegisterButtonDisabled() {
    return this.page.isDisabled(this.registerButton);
  }
}
