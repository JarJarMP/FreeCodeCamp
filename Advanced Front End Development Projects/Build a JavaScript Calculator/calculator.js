module.exports = Calculator;

function Calculator() {
  var self = this;

  self.init();
}

Calculator.prototype.init = function() {
  var self = this;

  self.availableOperators = ['+', '-', '*', '/'];
  self.stack = []; // collecting all numbers and operators here
  self.lastStackItemType = ''; // number or operator
}

Calculator.prototype.number = function(value) {
  var self = this;

  var valueToSave = parseInt(value);
  
  // validate for 0-9 interval
  valueToSave = (valueToSave > -1 && valueToSave < 10) ? 
                String(valueToSave) : 
                '0';

  // handle more than 1 digit numbers
  valueToSave = (self.lastStackItemType === 'number') ?
                self.stack.pop() + valueToSave :
                valueToSave;
  
  // add new number to stack
  self.stack.push(valueToSave);
  self.lastStackItemType = 'number';
}

Calculator.prototype.operation = function(operator) {
  var self = this;

  if (self.availableOperators.indexOf(String(operator)) > -1) {
    // overwrite previous operator with the latest
    if (self.lastStackItemType === 'operator') {
      self.stack.pop(); 
    }

    self.stack.push(String(operator));
    self.lastStackItemType = 'operator';
  }
}

Calculator.prototype.dot = function() {
  var self = this;

  if (self.lastStackItemType === 'number') {
    self.stack.push(self.stack.pop() + '.');
  }
};

Calculator.prototype.result = function() {
  var self = this;

  self.validateStack();

  var result = eval(self.stack.join(''));
      result = result === undefined ? 0 : result;
  
  // clean up
  self.init();

  // make it at most 4 digit decimal long number
  result = parseFloat(result.toFixed(4));

  return result;
}

Calculator.prototype.validateStack = function() {
  var self = this;

  // left side only expression
  if (self.lastStackItemType === 'operator') {
    self.stack.pop();
  }

  // right side only expression
  if (self.availableOperators.indexOf(self.stack[0]) > -1) {
    self.stack.shift();
  }
}

Calculator.prototype.clearEntry = function() {
  var self = this;

  self.stack.pop();
  self.lastStackItemType = (self.lastStackItemType === 'number') ? 
                            'operator' : 
                            'number';
}

Calculator.prototype.clearAll = function() {
  var self = this;

  self.init();
}

Calculator.prototype.display = function() {
  var self = this;

  return self.stack.join(' ');
};
