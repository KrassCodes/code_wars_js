// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
    if (Number.isInteger(n/x) && Number.isInteger(n/y))
    return true;
    else
    return false;
  }