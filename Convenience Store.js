//Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. 
//Change will always be represented in the following order: quarters, dimes, nickels, pennies.
//To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

function changeEnough(change, amountDue) {
    const [quarter, dime, nickel, penny] = change;
    quarterConvert = change[0] * 25;
    dimeConvert = change[1] * 10;
    nickelConvert = change[2] * 5;
    pennyConvert = change[3];
    totalCashPenny = quarterConvert + dimeConvert + nickelConvert + pennyConvert;
    totalCashDollar = totalCashPenny / 100
    if (totalCashDollar >= amountDue) {
        return true
    } else {
        return false
    }

}
console.log(changeEnough([2, 100, 0, 0], 14.11))
console.log(changeEnough([10, 0, 0, 50], 13.85))

//This is another solution I found which is much more elegant. Will probs use this in future.

function changeEnough(change, amountDue) {
    let sum = change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01;
    return sum >= amountDue;
}