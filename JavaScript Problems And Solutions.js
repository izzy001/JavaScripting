/* Created by Emoitologa Israel on 13/12/2018
source: https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php */

/* JavaScript Recursion */
/* Exercise 1:
Write a JavaScript program to calculate the factorial of a number. */
//In mathematics, the factorial of a non-negative integer n, denoted by n!, 
//is the product of all positive integers less than or equal to n. 
//For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(x) {
    if ( x === 0) {
        return 1;
    } else {
        return x * factorial(x-1);
    }
}

console.log(factorial(5));


/* Exercise 2: Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers. */
let gcd = function (a, b) {
    if( !b) {
        return a;
    } else {
        return gcd(b, a % b);
    }
};

console.log(gcd(2154, 458));

//for less boilerplate, use
let gcd = function(a, b) {
	return b === 0 ? a : gcd( b, a % b );
} 

/* Exercise 3: Write a JavaScript program to get the integers in range (x, y). 
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]*/

let range = (startNum, endNum) => {
    if (endNum - startNum === 2) {
        
        return [startNum + 1];
        
    } else {
        let list = range(startNum, endNum - 1);
        list.push(endNum - 1);
        return list;
    }
};

console.log(range(2,9));

/* Exercise 4: Write a JavaScript program to compute the sum of an array of integers.

Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21 */

let arraySum = (my_array) => {

    if (my_array.length === 1) {

        return my_array[0];
        
    } else {
        return my_array.pop() + arraySum(my_array);
    }

};

console.log(arraySum([1,2,3,4,5,6]));


/* Exercise 5: Write a JavaScript program to compute the exponent of a number.

Note: The exponent of a number says how many times the base number is used as a factor.
82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent. */

let exponent = (a, n) => {
    return n === 0 ? 1 : a * exponent(a, n-1);
};

console.log(exponent(4,2));

//other method
var exponent = function(a, n) 
{
   if (n === 0) 
   {
    return 1;
    }
  else 
  {
    return a * exponent(a, n-1);
  }
};

console.log(exponent(4, 2));

/* Exercise 6: Write a JavaScript program to get the first n Fibonacci numbers.

Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . .n 
Each subsequent number is the sum of the previous two. */
let fibonacci_series = (n) => {
    if (n==1) {

        return [0, 1];
        
    } else {
        let s  = fibonacci_series( n-1 );
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

console.log(fibonacci_series(8));

/* Exercise 7: Write a JavaScript program to check whether a number is even or not. */
isEven = (number)  => {

    if (number < 0) {

        number = Math.abs(number);
        
    }  if (number === 0) {
        
        return true;

    } if ( number === 1) {
       
        return false;
    } else {

        number = number - 2;
        return isEven(number); 
    }

}

console.log(isEven(234)); //true
console.log(isEven(-45)); // false
console.log(isEven(-45)); // false

/* Exercise 8: Write a JavaScript program for binary search. 
Sample array : [0,1,2,3,4,5,6]
console.log(l.br_search(5)) will return '5'*/

Array.prototype.br_search = function ( target ){

    var half = parseInt(this.length / 2);

    if (target === this[ half ]) {

        return half;
    } if ( target > this[half] ) {
        return half + this.slice(half, this.length).br_search(target);
    } else  {
        return this.slice( 0, half).br_search(target);
    }

}

l= [0,1,2,3,4,5,6];

console.log(l.br_search(5));


/* Exercise 9:  Write a merge sort program in JavaScript. 
Sample array : [34,7,23,32,5,62]
Sample output : [5, 7, 23, 32, 34, 62]*/

Array.prototype.mergeSort = function() {
    if (this.length <= 1) {

        return this;
        
    }

    let half  = parseInt( this.length / 2);
    let left = this.slice (0, half).mergeSort();
    let right =  this.slice (half, this.length).mergeSort();
    let merge = function (left, right) {
        let array = [];
        while (left.length > 0 && right.length > 0) {
            array.push((left[0] <= right[0]) ? left.shift() : right.shift());
        }
        return array.concat(left).concat(right);
    };
    return merge(left, right);
};

var a = [34,7,23,32,5,62];
console.log(a.mergeSort());

