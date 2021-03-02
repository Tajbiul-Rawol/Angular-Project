import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {TabService} from '../sharedservices/tab.service';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  @ViewChild ('panel') panel: TabView;
  activeTabUrl;
  constructor(private tabService: TabService, private router: Router) { }
  selectedIndex = 0;

  closeTab( event: Event) {
    // this.selectedIndex = event.index;
    // //this.tabService.deleteTab(event);
    // // //prevent content from refreshing
    // //event.preventDefault();
     console.log(event);
    
  }

  onTabChange(event) {
    this.router.navigateByUrl(event.nextId);
  }
  //tabs list
  tabs = [];  
  ngOnInit(): void {
    //save the tabs from the tabservice into the tabs array 
    this.tabs = this.tabService.tabs;
    
    this.router.events.subscribe(
      event =>{
        if (event instanceof NavigationEnd) {
          this.activeTabUrl = event.urlAfterRedirects;
        }
      }
    );
  }

  

}
