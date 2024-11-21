import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentDataService } from '../investment-data.service';
import { type InvestmentInput } from '../investment-input.model';
import { InvestmentData } from '../investment-results/investment-results.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  private investmentDataService = inject(InvestmentDataService);
  calculate = output<InvestmentData[]>();
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    // The sign (+) before the value is used to convert the string to a number
    const inputValues = <InvestmentInput>{initialInvestment: +this.enteredInitialInvestment(), annualInvestment: +this.enteredAnnualInvestment(), expectedReturn: +this.enteredExpectedReturn(), duration: +this.enteredDuration()};
    const data = this.investmentDataService.calculateInvestmentResults(inputValues);
    this.calculate.emit(data);
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
