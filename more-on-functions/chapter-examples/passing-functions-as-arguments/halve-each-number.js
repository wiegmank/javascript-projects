let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()

let oneHalf = function(n) {
    return (n/2);
};

let halved = nums.map(oneHalf);

console.log(halved);
