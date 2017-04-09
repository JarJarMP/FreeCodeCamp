var Calculator = require('../calculator');

describe("Multiple methods should work for", function() {
  it("one digit numbers", function() {
    var c = new Calculator();

    c.number(1);
    c.operation('+');
    c.number(2);
    c.operation('-');
    c.number(3);
    expect(c.result()).toBe(0);

    c.number(1);
    c.operation('-');
    c.number(2);
    c.operation('+');
    c.number(3);
    expect(c.result()).toBe(2);

    c.number(1);
    c.operation('+');
    c.number(2);
    c.operation('*');
    c.number(3);
    expect(c.result()).toBe(7);

    c.number(1);
    c.operation('*');
    c.number(2);
    c.operation('+');
    c.number(3);
    expect(c.result()).toBe(5);

    c.number(1);
    c.operation('+');
    c.number(2);
    c.operation('/');
    c.number(3);
    expect(c.result()).toBe(1.6667);

    c.number(1);
    c.operation('/');
    c.number(2);
    c.operation('+');
    c.number(3);
    expect(c.result()).toBe(3.5);

    c.number(1);
    c.operation('*');
    c.number(2);
    c.operation('-');
    c.number(3);
    expect(c.result()).toBe(-1);

    c.number(1);
    c.operation('-');
    c.number(2);
    c.operation('*');
    c.number(3);
    expect(c.result()).toBe(-5);

    c.number(1);
    c.operation('/');
    c.number(2);
    c.operation('-');
    c.number(3);
    expect(c.result()).toBe(-2.5);

    c.number(1);
    c.operation('-');
    c.number(2);
    c.operation('/');
    c.number(3);
    expect(c.result()).toBe(0.3333);

    c.number(1);
    c.operation('/');
    c.number(2);
    c.operation('*');
    c.number(3);
    expect(c.result()).toBe(1.5);

    c.number(1);
    c.operation('*');
    c.number(2);
    c.operation('/');
    c.number(3);
    expect(c.result()).toBe(0.6667);
  });

  it("multiple digit numbers", function() {
    var c = new Calculator();

    c.number(1);
    c.operation('+');
    c.number(2);
    c.number(2);
    c.operation('-');
    c.number(3);
    c.number(3);
    c.number(3);
    expect(c.result()).toBe(-310);

    c.number(1);
    c.operation('-');
    c.number(2);
    c.number(2);
    c.operation('+');
    c.number(3);
    c.number(3);
    c.number(3);
    expect(c.result()).toBe(312);

    c.number(1);
    c.operation('+');
    c.number(2);
    c.number(2);
    c.operation('*');
    c.number(3);
    c.number(3);
    c.number(3);
    expect(c.result()).toBe(7327);

    c.number(1);
    c.operation('*');
    c.number(2);
    c.number(2);
    c.operation('+');
    c.number(3);
    c.number(3);
    c.number(3);
    expect(c.result()).toBe(355);

    c.number(1);
    c.operation('+');
    c.number(2);
    c.number(2);
    c.operation('/');
    c.number(3);
    c.number(3);
    c.number(3);
    expect(c.result()).toBe(1.0661);

    c.number(1);
    c.operation('/');
    c.number(2);
    c.number(2);
    c.operation('+');
    c.number(3);
    c.number(3);
    c.number(3);
    expect(c.result()).toBe(333.0455);

    c.number(1);
    c.operation('*');
    c.number(2);
    c.number(2);
    c.operation('-');
    c.number(3);
    c.number(3);
    c.number(3);
    expect(c.result()).toBe(-311);

    c.number(1);
    c.operation('-');
    c.number(2);
    c.number(2);
    c.operation('*');
    c.number(3);
    c.number(3);
    c.number(3);
    expect(c.result()).toBe(-7325);

    c.number(1);
    c.operation('/');
    c.number(2);
    c.number(2);
    c.operation('-');
    c.number(3);
    c.number(3);
    c.number(3);
    expect(c.result()).toBe(-332.9545);

    c.number(1);
    c.operation('-');
    c.number(2);
    c.number(2);
    c.operation('/');
    c.number(3);
    c.number(3);
    c.number(3);
    expect(c.result()).toBe(0.9339);

    c.number(1);
    c.operation('/');
    c.number(2);
    c.number(2);
    c.operation('*');
    c.number(3);
    c.number(3);
    c.number(3);
    expect(c.result()).toBe(15.1364);

    c.number(1);
    c.operation('*');
    c.number(2);
    c.number(2);
    c.operation('/');
    c.number(3);
    c.number(3);
    c.number(3);
    expect(c.result()).toBe(0.0661);
  });
});
