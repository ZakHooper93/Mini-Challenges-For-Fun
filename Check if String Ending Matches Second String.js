//Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

function checkEnding(str1, str2) {
    strEndCheck = str1.endsWith(str2)
    return strEndCheck
}

checkEnding("abc", "bc")