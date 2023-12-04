function flippingBits(n) {
  // Write your code here
  return ~n >>> 0;

}

//explanation
/*
This is because -1 is represented in binary as 11111111111111111111111111111111. When you apply the bitwise NOT operator to this binary representation, you get 00000000000000000000000000000000, which is represented as 0 in decimal. However, this is not the correct result, as the flipped version of -1 should be 1.

The reason for this is that JavaScript treats -1 as a signed 32-bit integer, and when you apply the bitwise NOT operator to a signed integer, it will wrap around. This means that if you flip all the bits of a signed integer, you will get the negative of the original integer plus 1.

To avoid this problem, you can use the >>> operator, which is an unsigned right shift operator. This operator shifts all the bits of the operand to the right by the specified number of positions, filling the vacated bits with 0s. This effectively converts the operand to an unsigned 32-bit integer before applying the bitwise NOT operator, ensuring that the correct result is obtained.

Here's an example of how to use the >>> operator to flip the bits of an integer:

JavaScript
function flippingBits(n) {
  return ~n >>> 0;
}

console.log(flippingBits(-1)); // Output: 1
*/