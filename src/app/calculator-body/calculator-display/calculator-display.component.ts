import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-display',
  templateUrl: './calculator-display.component.html',
})
export class CalculatorDisplayComponent implements OnInit {
  @Input() displayText!: any;
  @Input() onBack!: any;
  operationIsDone = false;

  constructor() {}
  @HostListener('window:keypress', ['$event']) keyPressEvent(event: any) {
    console.log(event.key);
    console.log(event);
    if (event.code === 'Space') {
      if (this.operationIsDone) this.displayText = '';
      this.displayText = this.displayText.substring(
        0,
        this.displayText.length - 1
      );
    } else if (event.code === 'Enter') {
      this.operationIsDone = true;
      this.displayText = eval(this.displayText);
    } else {
      if (this.operationIsDone) {
        this.operationIsDone = false;
        this.displayText = '';
      }
      this.displayText += event.key;
    }
  }

  ngOnInit(): void {}
}
//============================================
// sendTypedVal(event: any) {
//   console.log(event.target.value);
// }

// pressBack() {
//   console.log('pressBack ran!');
//   this.onBack();
// }
