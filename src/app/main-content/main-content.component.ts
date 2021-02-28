import { Component, OnInit } from '@angular/core';
import {TabService} from '../sharedservices/tab.service';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  
  message:string;
  constructor(private tabservice: TabService) { }


  active = false;
  tabs = [
    // {
    //   name: 'Admission',
    //   ID: 1,
      
    // },
   
       
  ];
  
  ngOnInit(): void {
    //this.message = this.tabservice.getMessage();
     this.tabservice.tabMessage$.subscribe(
      tabname=>{
        if(tabname ==='admissionTab'){
           if (this.tabs.length === 0) {
             this.tabs.push(tabname)
           }
        }
      } 
    );

  }

}
