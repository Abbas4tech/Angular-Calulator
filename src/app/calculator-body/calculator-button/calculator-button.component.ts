import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.css'],
})
export class CalculatorButtonComponent implements OnInit {
  @Input() properiesOfButton!: { value: string };
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  enterValue(valObj: any): void {
    this.buttonClicked.emit(valObj);
  }

  ngOnInit(): void {}
}
