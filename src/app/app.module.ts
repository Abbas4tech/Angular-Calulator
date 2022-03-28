import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalculatorBodyComponent } from './calculator-body/calculator-body.component';
import { CalculatorButtonComponent } from './calculator-body/calculator-button/calculator-button.component';
import { CalculatorDisplayComponent } from './calculator-body/calculator-display/calculator-display.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CalculatorBodyComponent, CalculatorButtonComponent, CalculatorDisplayComponent, CardComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
