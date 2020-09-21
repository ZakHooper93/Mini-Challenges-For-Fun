//Create a function that takes an array of strings and returns the words that are exactly four letters.

function isFourLetters(arr) {
    fourLettersWordsArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length === 4)
            fourLettersWordsArr.push(arr[i]);
    } return fourLettersWordsArr;
}