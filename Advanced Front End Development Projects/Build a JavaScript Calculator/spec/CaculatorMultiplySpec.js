var Calculator = require('../calculator');

describe("Multiply method", function() {
  it("should handle two 1 digit numbers", function() {
    var c = new Calculator();

    c.number(2);
    c.operation('*');
    c.number(3);

    expect(c.result()).toBe(6);
  });

  it("should handle multiple 1 digit numbers", function() {
    var c = new Calculator();

    c.number(1);
    c.operation('*');
    c.number(2);
    c.operation('*');
    c.number(3);
    c.operation('*');
    c.number(4);
    c.operation('*');
    c.number(5);

    expect(c.result()).toBe(120);
  });

  it("should handle two 2 digit numbers", function() {
    var c = new Calculator();

    c.number(2);
    c.number(2);
    c.operation('*');
    c.number(3);
    c.number(3);

    expect(c.result()).toBe(726);
  });

  it("should handle multiple 2 digit numbers", function() {
    var c = new Calculator();

    c.number(1);
    c.number(1);
    c.operation('*');
    c.number(2);
    c.number(2);
    c.operation('*');
    c.number(3);
    c.number(3);
    c.operation('*');
    c.number(4);
    c.number(4);
    c.operation('*');
    c.number(5);
    c.number(5);

    expect(c.result()).toBe(19326120);
  });

  it("should handle two 4 digit numbers", function() {
    var c = new Calculator();

    c.number(2);
    c.number(2);
    c.number(2);
    c.number(2);
    c.operation('*');
    c.number(3);
    c.number(3);
    c.number(3);
    c.number(3);

    expect(c.result()).toBe(7405926);
  });

  it("should handle multiple 4 digit numbers", function() {
    var c = new Calculator();

    c.number(1);
    c.number(1);
    c.number(1);
    c.number(1);
    c.operation('*');
    c.number(2);
    c.number(2);
    c.number(2);
    c.number(2);
    c.operation('*');
    c.number(3);
    c.number(3);
    c.number(3);
    c.number(3);
    c.operation('*');
    c.number(4);
    c.number(4);
    c.number(4);
    c.number(4);
    c.operation('*');
    c.number(5);
    c.number(5);
    c.number(5);
    c.number(5);

    expect(c.result()).toBe(203119463494386120);
  });

  it("should handle left side only expression", function() {
    var c = new Calculator();

    c.number(1);
    c.operation('*');
    expect(c.result()).toBe(1);

    c.number(3);
    c.number(4);
    c.number(5);
    c.number(6);
    c.operation('*');
    expect(c.result()).toBe(3456);
  });

  it("should handle right side only expression", function() {
    var c = new Calculator();

    c.operation('*');
    c.number(1);
    expect(c.result()).toBe(1);

    c.operation('*');
    c.number(3);
    c.number(4);
    c.number(5);
    c.number(6);
    expect(c.result()).toBe(3456);
  });
});
