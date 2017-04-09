var Calculator = require('../calculator');

describe("Removing item with Clear All:", function() {
  it("number", function() {
    var c = new Calculator();

    c.number(1);
    c.operation('+');
    c.number(2);
    c.operation('-');
    c.number(3);
    c.clearAll();
    expect(c.result()).toBe(0);

    c.number(1);
    c.operation('+');
    c.number(2);
    c.operation('-');
    c.number(4);
    c.operation('+');
    c.number(4);
    c.number(4);
    c.number(4);
    c.clearAll();
    expect(c.result()).toBe(0);
  });

  it("operator", function() {
    var c = new Calculator();

    c.number(1);
    c.operation('+');
    c.number(2);
    c.operation('-');
    c.clearAll();
    expect(c.result()).toBe(0);

    c.number(1);
    c.operation('+');
    c.number(2);
    c.operation('-');
    c.number(4);
    c.number(4);
    c.operation('+');
    c.clearAll();
    expect(c.result()).toBe(0);
  });
});
