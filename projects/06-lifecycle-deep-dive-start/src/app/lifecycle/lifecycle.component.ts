import {Component, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, afterRender, afterNextRender} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  constructor() { // 1st. Runs when Angular instantiates the component.
    console.log('CONSTRUCTOR');

    /* SPECIAL LIFECYCLES INSIDE THE CONSTRUCTOR */
    afterRender(() => { // 	Runs every time anything changes in the entire Angular App
      console.log('afterRender');
    });

    afterNextRender(() => { // Runs after the next change anywhere in the entire Angular App
      console.log('afterNextRender');
    });
  }

  // LIFECYCLE HOOKS

  ngOnChanges(changes: SimpleChanges) { // 2nd. Runs every time the component's inputs have changed.
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit() { // 3rd. Runs once after Angular has initialized ALL the component's inputs.
    console.log('ngOnInit');
  }

  ngDoCheck() { // 4th. Runs every time when the application could lead to data changes || NICHE USAGE
    console.log('ngDoCheck');
  }

  /* CONTENT ≠ VIEW */

  // Content: Everything that it is projected to the view of a component (e.g. through ng-content)
  // View: The component's own template


  ngAfterContentInit() { // 5th. 	Runs once after the component's content has been initialized. || NICHE USAGE
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() { // 6th. 	Runs every time this component content has been checked for changes. || NICHE USAGE
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() { // 7th. 	Runs once after the component's view has been initialized. || NICHE USAGE
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() { // 8th. 	Runs every time the component's view has been checked for changes (when it checks if the UI must be updated) || NICHE USAGE
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() { // Last. Runs once before the component is destroyed.
    console.log('ngOnDestroy');
  }
}
