import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type InvestmentData } from './investment-results.model';


@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  results = input<InvestmentData[]>();
  //@Input() results?: InvestmentData[];
}
