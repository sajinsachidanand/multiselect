import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2-multiselect-master';
  items = [{name:'mno', value:'1'},{name:'xyz',value:'2'},{name:'abc',value:3},{name:'def',value:4},{name:'sre',value:5}];
}
