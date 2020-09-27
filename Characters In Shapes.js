//Create a function that counts how many characters make up a rectangular shape. You will be given an array of strings.

function countCharacters(arr) {
    let charCount = 0
    for (i =0; i < arr.length; i++) {
        charCount += arr[i].length;
    } return charCount
}