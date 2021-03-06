var Calculator = require('../calculator');

describe("Add method", function() {
  it("should handle two 1 digit numbers", function() {
    var c = new Calculator();

    c.number(2);
    c.operation('+');
    c.number(3);

    expect(c.result()).toBe(5);
  });

  it("should handle multiple 1 digit numbers", function() {
    var c = new Calculator();

    c.number(1);
    c.operation('+');
    c.number(2);
    c.operation('+');
    c.number(3);
    c.operation('+');
    c.number(4);
    c.operation('+');
    c.number(5);

    expect(c.result()).toBe(15);
  });

  it("should handle two 2 digit numbers", function() {
    var c = new Calculator();

    c.number(2);
    c.number(2);
    c.operation('+');
    c.number(3);
    c.number(3);

    expect(c.result()).toBe(55);
  });

  it("should handle multiple 2 digit numbers", function() {
    var c = new Calculator();

    c.number(1);
    c.number(1);
    c.operation('+');
    c.number(2);
    c.number(2);
    c.operation('+');
    c.number(3);
    c.number(3);
    c.operation('+');
    c.number(4);
    c.number(4);
    c.operation('+');
    c.number(5);
    c.number(5);

    expect(c.result()).toBe(165);
  });

  it("should handle two 4 digit numbers", function() {
    var c = new Calculator();

    c.number(2);
    c.number(2);
    c.number(2);
    c.number(2);
    c.operation('+');
    c.number(3);
    c.number(3);
    c.number(3);
    c.number(3);

    expect(c.result()).toBe(5555);
  });

  it("should handle multiple 4 digit numbers", function() {
    var c = new Calculator();

    c.number(1);
    c.number(1);
    c.number(1);
    c.number(1);
    c.operation('+');
    c.number(2);
    c.number(2);
    c.number(2);
    c.number(2);
    c.operation('+');
    c.number(3);
    c.number(3);
    c.number(3);
    c.number(3);
    c.operation('+');
    c.number(4);
    c.number(4);
    c.number(4);
    c.number(4);
    c.operation('+');
    c.number(5);
    c.number(5);
    c.number(5);
    c.number(5);

    expect(c.result()).toBe(16665);
  });

  it("should handle left side only expression", function() {
    var c = new Calculator();

    c.number(1);
    c.operation('+');
    expect(c.result()).toBe(1);

    c.number(3);
    c.number(4);
    c.number(5);
    c.number(6);
    c.operation('+');
    expect(c.result()).toBe(3456);
  });

  it("should handle right side only expression", function() {
    var c = new Calculator();

    c.operation('+');
    c.number(1);
    expect(c.result()).toBe(1);

    c.operation('+');
    c.number(3);
    c.number(4);
    c.number(5);
    c.number(6);
    expect(c.result()).toBe(3456);
  });
});
