import { Component, Input} from '@angular/core'
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
   allowNewServer = false;
   serverName = 'servertest';
   createdServer = "no server is created";
   
   constructor(){
       setTimeout(()=>{
           this.allowNewServer = true;
       },2000 )
   }

   onCreateServer(){
     this.createdServer = "a server is created";
   }

   onUpdateServerName(event: Event){
     this.serverName = (<HTMLInputElement>event.target).value; 
   }
}