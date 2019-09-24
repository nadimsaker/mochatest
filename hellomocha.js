var assert = require("assert");
describe("Testing Math Function - suite", function() {
  beforeEach(function() {});

  it("Add Two numbers", function() {
    let number1 = 5;
    let number2 = 6;

    let result = number1 + number2;

    assert.equal(result, 10);
  });

  it("Subtraction of Two numbers", function() {
    let number1 = 5;
    let number2 = 6;

    let result = number1 - number2;

    assert.equal(result, -1);
  });

  it("Multiplication of Two numbers", function() {
    let number1 = 5;
    let number2 = 6;

    let result = number1 * number2;

    assert.equal(result, 30);
  });

  it("Division of Two numbers", function() {
    let number1 = 90;
    let number2 = 6;

    let result = number1 / number2;

    assert.equal(result, 15);
  });

  it("Pending test");
});
