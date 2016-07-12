$(document).ready(function() {
  $('.calculator').fadeIn('slow').removeClass('hidden');

  console.log('toto davy');

  var display = $('.input_result');
  var percentage = '';
  var button = '';
  var operator = '';
  var total = '';
  var operatorSelected = false;
  var num1 = '0';
  var num2 = '0';

  // Clear display
  display.text('0');

  $('#clearall').click(function() {
    display.text('0');
    button = '';
    operator = '';
    total = '';
    operatorSelected = false;
    num1 = '0';
    num2 = '0';

  });

  // Show the numbers on display
  $('.num').click(function() {
    button += $(this).text();
    display.text(button);

    console.log('total');
    if (operatorSelected == true) {
      num2 = button;
    } else {
      num1 = button;
    }
    total = button;
  });

  // Select the operator and calculate answer if operator already selected.
  $('.operator').click(function() {
    if (operatorSelected) {
      total = calculateTotal(num1, operator, num2);
      display.text(total);
      console.log(total);
      num1 = total;
    }
    operator = $(this).text();
    button = '';
    operatorSelected = true;
  });

  $('#percentage').click(function() {
    total = calculatePercentage(total);
    if (operatorSelected == true) {
      num2 = total;
    } else {
      num1 = total;
    }
    display.text(total);
  });

  $('#changeSign').click(function() {
    total = calculateSign(total);
    if (operatorSelected == true) {
      num2 = total;
    } else {
      num1 = total;
    }
    display.text(total);
  });

  // Calculate the answer if num1 and num2 are not null.
  $('#equal').click(function() {
    if (num1 !== null && num2 !== null ) {
      total = calculateTotal(num1, operator, num2);
      display.text(total);
      button = total;
      console.log(total);
    }
  });

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
