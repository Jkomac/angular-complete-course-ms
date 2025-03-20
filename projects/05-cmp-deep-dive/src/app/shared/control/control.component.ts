import { Component, ContentChild, ElementRef, HostBinding, HostListener, inject, Input, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // Apply component styles globally without any sort of encapsulation || .Emulated is the default one (styles only applicable in this component)
  host: {
    class: 'control', // Applies the 'control' class to the host element of the component, allowing specific styles defined in CSS to be applied || Allows to apply attributes, classes or styles
    '(click)': 'onClick()' // EventBinding that binds a method to an event on the host element, allowing the method to be called when the event occurs. The event and the method must be enclosed in single quotes.
  } 
})
export class ControlComponent {

  // @HostBinding('class') className = 'control'; // Another "deprecated "way to bind the 'control' class to the host element. || If the variable name does not match the property name, specify the property name as an argument
  // @HostListener('click') onClick(){ // Another way of EventBinding that binds a method to an event on the host element, allowing the method to be called when the event occurs. The event name must be specified as an argument
  //   console.log('Clicked!');
  // }
  label = input.required<string>();
  private el = inject(ElementRef); // A way to programmatically accesss the Host Element
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>; // @ContentChild: Allows us to access a PROJECTED CONTENT element from the parent component's template || @ContentChild('TemplateVariable') variableName: ElementRef<typeOfTemplateVariable>

  onClick(){
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }
}
