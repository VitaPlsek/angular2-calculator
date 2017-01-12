abstract class Operation {
  constructor(private name: string) {
  }

  calculate(a, b) {
    return this.calculateInternal_(parseFloat(a), parseFloat(b));
  };

  abstract calculateInternal_(number: number, number2: number);
}

export class Add extends Operation {
  constructor() {
    super('add');
  }

  calculateInternal_(a, b) {
    return a + b;
  };
}

export class Sub extends Operation {
  constructor() {
    super('sub');
  }

  calculateInternal_(a, b) {
    return a - b;
  };
}

export class Div extends Operation {
  constructor() {
    super('div');
  }

  calculateInternal_(a, b) {
    return a / b;
  };
}

export class Mul extends Operation {
  constructor() {
    super('mul');
  }

  calculateInternal_(a, b) {
    return a * b;
  };
}

