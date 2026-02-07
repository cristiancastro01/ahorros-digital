import { Page } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class SimulatorPage extends BasePage {
  private amountInput = '#amount';
  private simulateButton = '#simulate';
  private resultText = '#result';
  private errorMessage = '.error-message';

  constructor(page: Page) {
    super(page);
  }

  async enterAmount(amount: number) {
    await this.page.fill(this.amountInput, amount.toString());
  }

  async simulate(amount: number) {
    await this.enterAmount(amount);
    await this.page.click(this.simulateButton);
  }

  async getSimulationResult() {
    return this.page.textContent(this.resultText);
  }

  async getErrorMessage() {
    return this.page.textContent(this.errorMessage);
  }

  async isSimulateButtonDisabled() {
    return this.page.isDisabled(this.simulateButton);
  }
}
