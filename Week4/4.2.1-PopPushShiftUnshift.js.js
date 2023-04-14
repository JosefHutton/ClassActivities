const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popReturn = nums.pop();
console.log(nums);
let popReturn2 = nums.pop()
console.log(nums)
// remove each of the first two items with shift(), saving each item to a variable
let shiftReturn = nums.shift();
console.log(nums);
let shiftReturn2 = nums.shift();
console.log(nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6
let pushReturn = nums.push(5);
console.log(nums);
let pushReturn2 = nums.push(6);
console.log(nums);
let unshiftReturn = nums.unshift(1);
console.log(nums);
let unshiftReturn2 = nums.unshift(0);
console.log(nums);
