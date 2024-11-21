import { Component, signal } from '@angular/core';

import { type InvestmentData } from './investment-results/investment-results.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  investmentResults?: InvestmentData[];

  onCalculate(results: InvestmentData[]) {
    this.investmentResults = results;
  }
}