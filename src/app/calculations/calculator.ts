import { Injectable } from '@angular/core';

@Injectable()
export class Calculator {
  private operations;
  private result;
  private operand;
  private operation;


  constructor() {
    this.operations = new Map();

    this.result = null;
    this.operand = null;
    this.operation = null;
  }

  addOperation(operation) {
    this.operations.set(operation.name, operation);
  };

  calculate(name, a, b) {
    if (!this.operations.has(name)) {
      throw new TypeError('Unknown operation: ' + name);
    }

    return this.operations.get(name).calculate(a, b);
  }

  equals() {
    if (this.result === null) {
      this.result = 0;
    }

    if (this.operation) {
      this.result = this.calculate(this.operation, this.result, this.operand);
    }

    return this.result;
  }

  setOperand(operand) {
    this.operand = operand;

    if (this.result === null || !this.operation) {
      this.result = operand;
    }
  }

  setOperation(operation) {
    if (!this.operations.has(operation)) {
      throw new TypeError('Unknown operation: ' + operation);
    }

    this.operation = operation;
  }

  clear() {
    this.result = null;
    this.operand = null;
    this.operation = null;
  }
}
