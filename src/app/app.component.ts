import { Component, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  counter = [1]
  addNewChart() {
    this.counter.push(this.counter.length + 1);
  }
}
