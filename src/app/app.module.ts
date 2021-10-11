import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SeriesPipe } from './series.pipe';
import { MychartComponent } from './mychart/mychart.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesPipe,
    MychartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
