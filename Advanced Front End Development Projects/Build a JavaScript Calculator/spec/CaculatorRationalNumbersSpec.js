var Calculator = require('../calculator');

describe("Rational numbers", function() {
  it("have to be accepted", function() {
    var c = new Calculator();

    c.number(1);
    c.dot()
    c.number(2);
    expect(c.result()).toBe(1.2);
  });

  it("have to be able to be used with methods", function() {
    var c = new Calculator();

    c.number(1);
    c.dot()
    c.number(2);
    c.operation('+');
    c.number(1);
    c.dot()
    c.number(2);
    expect(c.result()).toBe(2.4);

    c.number(1);
    c.dot()
    c.number(2);
    c.operation('*');
    c.number(1);
    c.dot()
    c.number(2);
    expect(c.result()).toBe(1.44);

    c.number(1);
    c.dot()
    c.number(2);
    c.number(2);
    c.operation('+');
    c.number(1);
    c.dot()
    c.number(2);
    c.number(4);
    expect(c.result()).toBe(2.46);
  });
});
