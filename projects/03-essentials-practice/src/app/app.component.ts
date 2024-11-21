import { Component, signal } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { type InvestmentData } from './investment-results/investment-results.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  investmentResults = signal<InvestmentData[] | undefined>(undefined); // Way to initialize the investmentResults property with an undefined value

  onCalculate(results: InvestmentData[]) {
    this.investmentResults.set(results);
  }
}