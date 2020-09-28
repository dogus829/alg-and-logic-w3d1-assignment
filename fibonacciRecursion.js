// Write a JavaScript program to get the first n Fibonacci numbers using recursion
// the fibonacci sequence involes adding the past two numbers in a list to
//create the next one. 

// https://www.mathsisfun.com/numbers/fibonacci-sequence.html#:~:text=The%20Fibonacci%20Sequence%20is%20the,21%2C%2034%2C%20...


function fibonacci(num) {


    if (num <= 1) {return 1};
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }

  console.log(fibonacci(8))





