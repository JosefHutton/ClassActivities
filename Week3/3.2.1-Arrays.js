// create an Array using an Array literal
const numbers = [10, 20, 30, 40, 50];
// access the 1st item in the Array
console.log(numbers[0]);
// access the last item in the Array
console.log(numbers[numbers.length - 1]);
// print the length of the Array
console.log(numbers.length);
// use the length property to access the last item in the Array
console.log(numbers[numbers.length - 1]);
// with for...of, loop over the Array, modify the value and add to a different Array
for (let number of numbers) {
  newNumbers += 5+numbers;
}
console.log(newNumbers)
