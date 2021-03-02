import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabService } from '../sharedservices/tab.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //this is where all the menus will go
  menuOptions = [];
  constructor(private tabService:TabService, private router:Router) { }


  openTab(url: string) {
    this.tabService.addTab(url);
    this.router.navigateByUrl(url);
    
  }
  ngOnInit(): void {
    
    //add the tabOptions array into the menu array to load the menu 
    this.menuOptions = this.tabService.tabOptions;
  }



}
