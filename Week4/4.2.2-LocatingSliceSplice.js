const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.ind
let firstA = arr.indexOf('a')
let firstB = arr.indexOf('b')
let firstC = arr.indexOf('c')
// find the last index of "a", "b", and "c"
let lastC = arr.lastindexOf('c')
let lastB = arr.lastindexOf('b')
let lastA = arr.lastindexOf('a')
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicate(array, duplicateValue) {
  let firstIndex = array.indexOf(duplicateValue);
  let lastIndex = array.lastindexOf(duplicateValue);
  while (firstIndex !== lastIndex) {
    array.splice(lastIndex, 1);
    lastIndex = array.lastindexOf(duplicateValue);
  }
}


