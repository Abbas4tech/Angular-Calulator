import { buttons } from './buttons';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-body',
  templateUrl: './calculator-body.component.html',
})
export class CalculatorBodyComponent implements OnInit {
  buttonsArray = buttons;

  displayText: string = '';

  operationDone: boolean = false;

  constructor() {}

  showButton(evntObj: any) {
    if (this.operationDone) this.operationDone = false;
    evntObj.value === 'C'
      ? (this.displayText = '')
      : (this.displayText += evntObj.value);
  }

  calculateResult() {
    this.displayText = eval(this.displayText).toFixed(2);
    this.operationDone = true;
  }

  backSpace() {
    if (this.operationDone) this.displayText = '';
    this.displayText = this.displayText.substring(
      0,
      this.displayText.length - 1
    );
  }

  ngOnInit(): void {}
}
