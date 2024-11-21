import { Component, Input} from '@angular/core';

import { type InvestmentData } from './investment-results.model';


@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  @Input() results?: InvestmentData[];
}
