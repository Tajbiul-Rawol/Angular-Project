import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngproject';
  items;

  showTabs;

  ngOnInit() {
    // this.showTabs = {
    //   "one": true,
    //   "two": false,
    //   "three": true
    // };
  }
}
