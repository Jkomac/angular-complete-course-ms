import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton]', // Attribute Selector extends the built-in element (button) into a custom element (appButton) || It is possible to add more than 1 selector by using 'button[appButton], a[appButton]'
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  
}
