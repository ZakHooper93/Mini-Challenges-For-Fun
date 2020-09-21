/*Write a function that returns true if both numbers are:

    Smaller than 0, OR ...
    Greater than 0, OR ...
    Exactly 0

Otherwise, return false.*/

function both(n1, n2) {
    if (n1 > 0 && n2 > 0) {
        return true;
    } else if (n1 === 0 && n2 === 0) {
        return true;
    } else if (n1 < 0 && n2 < 0) {
        return true;
    } else {
        return false;
    }
}