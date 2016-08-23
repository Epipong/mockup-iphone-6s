(function() {
  var app = angular.module('calculator', []);

  app.controller('CalculatorController', function($scope) {
    this.display = '0';

    var percentage = '';
    var button = '';
    var operator = '';
    var total = '';
    var operatorSelected = false;
    var num1 = '0';
    var num2 = '0';

    this.clearall = function() {
      this.display = '0';
      button = '';
      operator = '';
      total = '';
      operatorSelected = false;
      num1 = '0';
      num2 = '0';
    }

    // Show the numbers on display
    this.getNum = function(num) {
      if (button.includes('.') && num.includes('.')) {
        return ;
      }
      button += num;
      console.log(num);
      this.display = button;

      if (operatorSelected == true) {
        num2 = button;
      } else {
        num1 = button;
      }
      total = button;
    }

    // Select the operator and calculate answer if operator already selected.
    this.getOp = function(op) {
      if (operatorSelected) {
        total = calculateTotal(num1, operator, num2);
        this.display = total;
        console.log(total);
        num1 = total;
      }
      operator = op;
      button = '';
      operatorSelected = true;
    }

    this.getPercentage = function() {
      total = calculatePercentage(total);
      if (operatorSelected == true) {
        num2 = total;
      } else {
        num1 = total;
      }
      this.display = total;
    }

    this.changeSign = function() {
      total = calculateSign(total);
      if (operatorSelected == true) {
        num2 = total;
      } else {
        num1 = total;
      }
      this.display = total;
    }

    // Calculate the answer if num1 and num2 are not null.
    this.equal = function() {
      if (operatorSelected == false) {
        this.display = num1;
        button = total.toString();
      } else if (num1 !== null && num2 !== null ) {
        total = calculateTotal(num1, operator, num2);
        this.display = total;
        button = total.toString();
        num1 = total;
      }
      operatorSelected = false;
      num2 = '0';
    }

    // Function that calculates the sum of numbers
    function calculateTotal(num1, operator, num2) {
      calculate = eval(num1 + operator + num2);
      Math.round(calculate);
      return calculate;
    }

    // Function that calculates the percentage
    function calculatePercentage(num) {
      return (num / 100);
    }

    // Function that changes + or - sign
    function calculateSign(num) {
      return (num * -1);
    }
  });
})();
