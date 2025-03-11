import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // host: {class: 'dashboard-item'} // Instead of adding the property, we can act directly to the CSS file
})
export class DashboardItemComponent {
  image = input.required<{src: string; alt: string}>();
  title = input.required<string>();  
  //@Input({required: true}) image!: {src: string; alt: string};
  //@Input({required: true}) title!: string;
}
