import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {

  currentStatus: 'online' | 'offline' | 'unknown' = 'offline'; // Literal Types: Restricts the variable to accept only the specified literal values, providing better type safety and autocompletion ('online', 'offline', or 'unknown')

  constructor(){
    setInterval(() => { // setInterval: Executes the provided function repeatedly at fixed time intervals (5000 ms, 5s in this case)
      const random = Math.random(); // [0-1)

      if (random < 0.5){
        this.currentStatus = 'online';
      } else if(random < 0.9){
        this.currentStatus = 'offline'
      } else {
        this.currentStatus = 'unknown'
      }
    }, 5000); 
  }
}
