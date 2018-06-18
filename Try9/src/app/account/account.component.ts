import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService,
              private accountsServer: AccountsService){}
  
  onSetTo(status: string){
   // this.statusChanged.emit({id: this.id, newStatus: status});
   this.accountsServer.updateStatus(this.id, status); 
   this.accountsServer.statusUpdated.emit(status); 
   //this.loggingService.logStatusChange(status);
  }
}