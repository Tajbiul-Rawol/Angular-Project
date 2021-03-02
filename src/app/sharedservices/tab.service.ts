import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {ITab} from '../tab.model';
@Injectable({
  providedIn: 'root'
})
export class TabService {
 
  //tabs of type ITab
  tabs: ITab[] = [];
 //tab Options of type ITab
  tabOptions: ITab[]= [
    { 
      name: 'Admission',
      url: '/admission' 
    },
    { 
      name: 'Students',
      url: '/students'
    },
    { 
      name: 'Server',
      url: '/server'
    },
  ];  

  constructor() {}

  //add a single tab by url by pushing into the tabs array
  addTab(url: string){
    const tab = this.getTabOptionByUrl(url);
    if (!this.tabs.includes(tab)) {
      this.tabs.push(tab);
    }else{
      alert("tab already there");
    }
    
  }

  //retrieve the tab via url from the tabOptions array
  getTabOptionByUrl(url: string): ITab{
    return this.tabOptions.find(tab => tab.url === url);
  }

  //delete a tab 
  deleteTab(index: number){
    this.tabs.splice(index, 1);
  }




}
