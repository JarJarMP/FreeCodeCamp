var Calculator = require('../calculator');

describe("Removing item with Clear Entry:", function() {
  it("number", function() {
    var c = new Calculator();

    c.number(1);
    c.operation('+');
    c.number(2);
    c.operation('-');
    c.number(3);
    c.clearEntry();
    expect(c.result()).toBe(3);

    c.number(1);
    c.operation('+');
    c.number(2);
    c.operation('-');
    c.number(4);
    c.operation('+');
    c.number(4);
    c.number(4);
    c.number(4);
    c.clearEntry();
    expect(c.result()).toBe(-1);
  });

  it("operator", function() {
    var c = new Calculator();

    c.number(1);
    c.operation('+');
    c.number(2);
    c.operation('-');
    c.clearEntry();
    expect(c.result()).toBe(3);

    c.number(1);
    c.operation('+');
    c.number(2);
    c.operation('-');
    c.number(4);
    c.number(4);
    c.operation('+');
    c.clearEntry();
    expect(c.result()).toBe(-41);
  });
});
