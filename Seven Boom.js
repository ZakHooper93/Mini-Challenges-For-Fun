//Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

function sevenBoom(arr) {
    sevenPresent = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 7) {
            sevenPresent++
        }
    } if (sevenPresent > 0) {
        return "Boom!"
    } else {
        return "there is no 7 in the array"
    }
}