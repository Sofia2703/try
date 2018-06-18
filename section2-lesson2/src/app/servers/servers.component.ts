import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  
  /*template: `
            <app-server></app-server>
            <app-server></app-server>`,*/

  /*Here is in Property Binging lesson and propety binding vs Srtring Interpolation
  and Passing and Using Data with Event Binding
  selector: 'app-servers',
  templateUrl: './servers.component.html', 
  styleUrls: ['./servers.component.css']
  to here*/

  selector: 'app-servers',
  templateUrl: './servers.component.html', 
  styleUrls: ['./servers.component.css']

})
export class ServersComponent implements OnInit {
  /*Here is in *Property Binging* lesson and *propety binding vs Srtring Interpolation*
    allowNewServer = false;
  to here*/

  /*Here is Passing and Using Data with Event Binding
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName ='';*/

  /*Using ngIf to Output Data Conditionally
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName ='Testserver';
  serverCreated = false;*/

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName ='Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() { 
    /*Here is in *Property Binging* lesson and *propety binding vs Srtring Interpolation*
      and *Passing and Using Data with Event Binding* and *Combining all Forms of Databinding* 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
    to here */

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }
  /*Here is *Event* lesson and *Passing and Using Data with Event Binding*
  and *two-way-databinding*
  
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!' ;
  }
  ---- *Passing and Using Data with Event Binding* ----
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }*/
  
  /*Combining all Forms of Databinding
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName ;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }*/

  /*Using ngIf to Output Data Conditionally
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName ;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }*/

  /*ngfor sec2 les36
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName ;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }*/

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName ;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}