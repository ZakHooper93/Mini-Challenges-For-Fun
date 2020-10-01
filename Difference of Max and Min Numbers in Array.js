
//Create a function that takes an array and returns the difference between the biggest and smallest numbers.

function diffMaxMin(arr) {
    max = Math.max(...arr) //Using the spread operator, we can "spread" out the array into a single set of number, seperated by a space. We can now use the Math.max method to find the largest.
    min = Math.min(...arr) //The exact same as above, but for the min value.
    diff = max - min //To find the difference, we simple substract the min from the max, to get diff.
    console.log(...arr);
    console.log(max)
    console.log(min)
    console.log(diff)
    return diff
}

diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])