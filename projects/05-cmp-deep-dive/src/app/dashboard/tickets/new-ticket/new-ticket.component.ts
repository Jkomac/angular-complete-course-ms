import { Component, ElementRef, viewChild } from '@angular/core';

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

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); // ViewChild Signal: Allow us to access to an element/child component of its own template || variableName = viewChild<ElementRef<typeOfTemplateVariable>>('nameTemplateVariableWithout#')

  onSubmit(titleElement: HTMLInputElement, textInput: HTMLTextAreaElement){ // If the template variable were assigned to some other element, the type would reflect that element (e.g. Label -> HTMLLabelElement)
    // console.dir(titleElement); // Shows the properties of titleElement object to the console in a more detailed and interactive way
    const enteredTitle = titleElement.value;
    const enteredText = textInput.value;
    console.log('Entered value: ' + enteredTitle);
    console.log('Entered text: ' + enteredText);
    this.form().nativeElement.reset(); // ElementRef is a wrapper around a native DOM element. Use the nativeElement property to access the actual DOM element.
  }
}
