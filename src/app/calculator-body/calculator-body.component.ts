import { buttons } from './buttons';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-body',
  templateUrl: './calculator-body.component.html',
  styleUrls: ['./calculator-body.component.css'],
})
export class CalculatorBodyComponent implements OnInit {
  buttonsArray = buttons;

  displayText: string = '';

  constructor() {}

  showButton(evntObj: any) {
    evntObj.value === 'C'
      ? (this.displayText = '')
      : (this.displayText += evntObj.value);
  }
  calculateResult() {
    this.displayText = eval(this.displayText);
  }
  backSpace() {
    this.displayText = this.displayText.substring(
      0,
      this.displayText.length - 1
    );
  }

  ngOnInit(): void {}
}
