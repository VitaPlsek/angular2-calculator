import { Component } from '@angular/core';
import { Calculator } from '../calculations/calculator';
import { DisplayContainer } from '../calculations/displayContainer';
import { Mul, Div, Sub, Add } from '../calculations/operations';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less'],
  providers: [Calculator, DisplayContainer]
})
export class CalculatorComponent {

  constructor(private calculator: Calculator,
              private displayContainer: DisplayContainer) {

    this.calculator.addOperation(new Add());
    this.calculator.addOperation(new Sub());
    this.calculator.addOperation(new Div());
    this.calculator.addOperation(new Mul());
  }

  getDisplayValue() {
    return this.displayContainer.getValue();
  }

  processOperand(operand: string) {
    this.displayContainer.addToValue(operand);

    const value = this.displayContainer.getValue();
    this.calculator.setOperand(value);
  }

  processOperation(operation: string) {
    this.displayContainer.markAsResult();

    const operand = this.displayContainer.getValue();

    this.calculator.setOperand(operand);
    this.calculator.setOperation(operation);
  }

  processEquals() {
    const result = this.calculator.equals();
    this.displayContainer.setValue(result);
  }

  processClear() {
    this.displayContainer.clear();
    this.calculator.clear();
  }
}
