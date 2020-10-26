/*
A palindrome is a word that is identical forward and backwards.

    mom
    racecar
    kayak

Given a word, create a function that checks whether it is a palindrome.
*/

function checkPalindrome(str) {
    stringSplit = str.split(""); //Split the string into an array, seperated by commas.

    stringSplitReverse = stringSplit.reverse(); //As the string is now an Array, we can use the .reverse method to invert the ordering of the array.

    stringReverseJoined = stringSplitReverse.join(""); // .join allows us to concatenate the array back into a string, seperated by commas unless specified otherwise. Here I specified nothing ("").

    //An if else statement to return the boolean value as true if the intial string matches our final joined string. Otherwise, return false.
    if (str === stringReverseJoined) {
        return true
    } else {
        return false
    }
}

checkPalindrome("mom");

checkPalindrome("scary");

checkPalindrome("reviver");

checkPalindrome("stressed");