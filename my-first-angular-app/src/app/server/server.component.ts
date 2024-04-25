import { Component } from '@angular/core';


/**
 * Component:
 * - In Angular, a component is a TypeScript class that's responsible for controlling a portion of the UI.
 * - It is associated with an HTML template and typically handles data and user interactions.
 * - Components encapsulate functionality and markup, making them reusable and maintainable.
 */ 

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {

  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }
}
