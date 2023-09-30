//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }

  function findMaxValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] > min){
        min = arr[i];
      }
    }
    return min;
  }

function mySort(someArray) {
    let newArray = [];
    while (someArray.length > 0) {
      newArray.push(findMinValue(someArray)) //adds min value to new array
      someArray.splice(someArray.indexOf(findMinValue(someArray)), 1) //removes min value from given array
    } 
    return newArray;
};

function recursiveSortAscend(someArray) {
    let newArray = [];
    if (someArray.length < 1) {//base case = someArray.length = 0
      return newArray;
    } else {
      newArray.push(findMinValue(someArray)) //adds min value to new array
      someArray.splice(someArray.indexOf(findMinValue(someArray)), 1) //removes min value from given array
      return newArray.concat(recursiveSortAscend(someArray))//call recursiveSort again
    }
};

function recursiveSortDescend(someArray) {
    let newArray = [];
    if (someArray.length < 1) {//base case = someArray.length = 0
      return newArray;
    } else {
      newArray.push(findMaxValue(someArray)) //adds min value to new array
      someArray.splice(someArray.indexOf(findMaxValue(someArray)), 1) //removes min value from given array
      return newArray.concat(recursiveSortDescend(someArray))//call recursiveSort again
    }
};

//Sort each array in ascending order.
console.log("Ascending Order");
console.log(recursiveSortAscend(nums1));
console.log(recursiveSortAscend(nums2));
console.log(recursiveSortAscend(nums3));

//Sort each array in decending order.
nums1 = [5, 10, 2, 42];
nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log("Descending Order");
console.log(recursiveSortDescend(nums1));
console.log(recursiveSortDescend(nums2));
console.log(recursiveSortDescend(nums3));

