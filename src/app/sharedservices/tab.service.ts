import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  //message: string;


  private _tabMessageSource = new Subject<string>();
  
  tabMessage$ = this._tabMessageSource.asObservable();

  constructor() { }
  
  tabName(tabname: string){
    this._tabMessageSource.next(tabname);
  }

  
  
  
  
  
  // setMessage(data){
  //    this.message = data;
  // }

  // getMessage(){
  //   return this.message;
  // }

  
}
