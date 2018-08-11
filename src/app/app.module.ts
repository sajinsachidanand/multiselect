import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MultiselectComponent, SearchTextPipe } from './multiselect/multiselect.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiselectComponent,
    SearchTextPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
