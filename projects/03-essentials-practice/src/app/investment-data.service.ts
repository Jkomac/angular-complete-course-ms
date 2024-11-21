import { Injectable } from "@angular/core";
import { type InvestmentInput } from "./investment-input.model";

@Injectable({providedIn: 'root'})
export class InvestmentDataService {
 
  // Method to calculate investment results
  calculateInvestmentResults(data: InvestmentInput) { // Passing an object instead of individual parameters

    const {initialInvestment, annualInvestment, expectedReturn, duration} = data; // Destructuring the data object in order to access the properties directly
    const annualData = [];
    let investmentValue = initialInvestment;
    
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;

      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: (initialInvestment + annualInvestment * year),
      });
    }
    return annualData;
  }
}