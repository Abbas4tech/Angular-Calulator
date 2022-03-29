import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-display',
  templateUrl: './calculator-display.component.html',
  styleUrls: ['./calculator-display.component.css'],
})
export class CalculatorDisplayComponent implements OnInit {
  @Input() displayText!: string;
  // @Input() onBack!: any;
  // typedValue: string = '';

  constructor() {}
  // @HostListener('window:keypress', ['$event']) keyPressEvent(event: any) {
  //   console.log(event.key);
  //   this.displayText += event.key;
  // }

  sendTypedVal(event: any) {
    console.log(event.target.value);
  }

  // pressBack() {
  //   this.onBack();
  // }

  ngOnInit(): void {}
}
