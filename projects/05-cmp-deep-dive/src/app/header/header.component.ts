import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent], // Importing the ButtonComponent in ordert to use it in the template
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
