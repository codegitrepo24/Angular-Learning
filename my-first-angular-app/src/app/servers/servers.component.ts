import { Component, OnInit } from '@angular/core';

@Component({
  /**
 * Selectors:
 * - Selectors in Angular are patterns that match elements in the HTML and apply Angular functionality to them.
 * - They are used to identify components or directives in templates.
 * - Selectors can be element selectors, attribute selectors, class selectors, or combination selectors.
 */
  selector: 'app-servers', //-------> Element Selector
  // selector: `[app-servers]`, //--------> Attribute Selector
  // selector: `app-servers`,   // -------> Class Selector
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrl: './servers.component.css'
  
})
export class ServersComponent{
allowNewServer = false;
serverCreationStatus = 'No server was created!';
serverName = 'Testserver';

constructor() {
   setTimeout(() => {
    this.allowNewServer = true;
   }, 5000)
}

onCreateServer(){
  this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName;
}

onUpdateServerName(event: Event){
  this.serverName = (<HTMLInputElement>event.target).value;
}

}
