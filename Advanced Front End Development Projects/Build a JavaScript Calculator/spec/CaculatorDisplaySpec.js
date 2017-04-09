var Calculator = require('../calculator');

describe("Display method", function() {
  it("has to return a human readable form of the current input", function() {
    var c = new Calculator();

    c.number(1);
    c.dot()
    c.number(2);
    c.operation('+');
    c.number(1);
    c.dot()
    c.number(2);
    c.number(1);
    c.number(2);
    c.operation('-');
    c.number(3);
    c.number(5);
    c.number(5);
    c.operation('*');
    c.number(2);
    c.number(2);
    expect(c.display()).toBe('1.2 + 1.212 - 355 * 22');
    expect(c.result()).toBe(-7807.588);
  });
});
