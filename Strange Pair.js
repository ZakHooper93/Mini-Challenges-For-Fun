//A pair of strings form a strange pair if both of the following are true:
//The 1st string's first letter = 2nd string's last letter.
//The 1st string's last letter = 2nd string's first letter.
//Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.

function isStrangePair(str1, str2) {
    let str1Start = str1.substring(0, 1);

    let str1End = str1.substring((str1.length - 1), (str1.length));

    let str2Start = str2.substring(0, 1);

    let str2End = str2.substring((str2.length - 1), (str2.length));

    if (str1Start === str2End && str1End === str2Start) {
        return true
    } else {
        return false
    }
};