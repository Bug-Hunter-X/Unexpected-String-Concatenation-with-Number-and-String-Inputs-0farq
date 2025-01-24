# Unexpected String Concatenation in JavaScript Addition

This repository demonstrates a common JavaScript pitfall: unexpected string concatenation when using the '+' operator with a mixture of numbers and strings.

## Bug Description
The `foo` function is designed to add two numbers. However, when one input is a number and the other a string, JavaScript performs string concatenation instead of numerical addition, resulting in unexpected output.

## Solution
The solution involves explicit type checking and conversion to ensure both inputs are numbers before performing addition.  This prevents string concatenation and produces the intended numerical sum. 