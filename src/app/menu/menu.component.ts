import { Component, OnInit } from '@angular/core';
import { TabService } from '../sharedservices/tab.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private tabservice:TabService) { }

  openTab(){
    this.tabservice.tabName('admissionTab');
  }



  tabmessage = "hello this is a tab";

  ngOnInit(): void {
     //this.tabservice.setMessage(this.tabmessage);
    
  }



}
