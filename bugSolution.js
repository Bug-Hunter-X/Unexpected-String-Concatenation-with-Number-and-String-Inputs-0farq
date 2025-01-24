function foo(a, b) {
  //Explicit type checking and conversion
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return 0; //Handle Non-numeric values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10

//Corrected behavior
console.log(foo(5, '5')); //Output: 10
console.log(foo('5',5)); //Output: 10