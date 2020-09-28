// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers 
//using recursion. 

var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(128, 64));
