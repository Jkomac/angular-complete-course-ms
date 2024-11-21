import { Component, EventEmitter, inject, Output } from '@angular/core';

import { InvestmentDataService } from '../investment-data.service';
import { type InvestmentInput } from '../investment-input.model';
import { InvestmentData } from '../investment-results/investment-results.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  private investmentDataService = inject(InvestmentDataService);
  @Output() calculate = new EventEmitter<InvestmentData[]>();
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    // The sign (+) before the value is used to convert the string to a number
    const inputValues = <InvestmentInput>{initialInvestment: +this.enteredInitialInvestment, annualInvestment: +this.enteredAnnualInvestment, expectedReturn: +this.enteredExpectedReturn, duration: +this.enteredDuration};
    const data = this.investmentDataService.calculateInvestmentResults(inputValues);
    this.calculate.emit(data);
    this.enteredInitialInvestment = '0';
    this.enteredAnnualInvestment = '0';
    this.enteredExpectedReturn = '5';
    this.enteredDuration = '10';
  }
}
