import { Injectable } from '@angular/core';
@Injectable()
export class DisplayContainer {
  private isResult_;
  private value_;

  constructor() {

    this.isResult_ = false;
    this.value_ = null;

    this.clear();
  }

  markAsResult() {
    this.isResult_ = true;
  }

  setValue(value) {
    this.markAsResult();
    this.value_ = value;
  }

  addToValue(value) {
    if (this.isResult_) {
      this.setValue("");
      this.isResult_ = false;
    }

    this.value_ += value;
  }

  getValue() {
    return this.value_;
  }

  clear() {
    this.setValue("0");
  }

}
