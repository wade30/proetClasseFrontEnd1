import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgIfComponent } from './Directives/ng-if/ng-if.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgForComponent } from './Directives/ng-for/ng-for.component';
import { FormExemple1Component } from './form-exemple1/form-exemple1.component';
import { FormExemple2Component } from './form-exemple2/form-exemple2.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgForComponent,
    FormExemple1Component,
    FormExemple2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
