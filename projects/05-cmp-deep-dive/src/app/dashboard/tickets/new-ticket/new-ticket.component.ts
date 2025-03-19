import { Component } from '@angular/core';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  onSubmit(titleElement: HTMLInputElement, textInput: HTMLTextAreaElement){ // If the template variable were assigned to some other element, the type would reflect that element (e.g. Label -> HTMLLabelElement)
    // console.dir(titleElement); // Shows the properties of titleElement object to the console in a more detailed and interactive way
    const enteredTitle = titleElement.value;
    const enteredText = textInput.value;
    console.log('Entered value: ' + enteredTitle);
    console.log('Entered text: ' + enteredText);
  }
}
