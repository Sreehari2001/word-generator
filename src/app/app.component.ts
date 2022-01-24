import { Component } from '@angular/core';
import word from "../utils/words"
import countries from "../utils/countries"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  words = '';
  countriess = '';
  limit = 10;
  limit2 = 5;
  handleSlideChange(newLimit : number){
    this.limit = newLimit;
  }
  handleSlideChange2(newLimit2 : number){
    this.limit2 = newLimit2;
  }
  generate() {
    this.words = word.slice(0, this.limit).join(' ');
  }
  generate2() {
    this.countriess = countries.slice(0, this.limit2).join(' ');
  }
}
