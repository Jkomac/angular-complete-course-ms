import { AfterViewInit, Component, DestroyRef, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit { // Implements lifecycle hooks to ensure them to be called correctly (against any kind of typo) as part of the component's lifecycle

  currentStatus: 'online' | 'offline' | 'unknown' = 'offline'; // Literal Types: Restricts the variable to accept only the specified literal values, providing better type safety and autocompletion ('online', 'offline', or 'unknown')
  private destroyRef = inject(DestroyRef); // Injects the DestroyRef service to register a callback for when the component is destroyed

  ngOnInit(){ // Lifecycle hook that is called once after Angular has initialized ALL the component's inputs.
    console.log('ON INIT');
    const interval = setInterval(() => { // setInterval: Executes the provided function repeatedly at fixed time intervals (5000 ms, 5s in this case)
      const random = Math.random(); // [0-1)

      if (random < 0.5){
        this.currentStatus = 'online';
      } else if(random < 0.9){
        this.currentStatus = 'offline'
      } else {
        this.currentStatus = 'unknown'
      }
    }, 5000);

    this.destroyRef.onDestroy(() => { // Registers a callback to be executed when the component is destroyed
      clearInterval(interval); // Callback: A function that is passed as an argument to another function and is executed after some event or condition occurs
    })
  }

  ngAfterViewInit(){ // Lifecycle hook that is called once after the component's view (component's template) has been initialized.
    console.log('AFTER VIEW INIT');
  }

}