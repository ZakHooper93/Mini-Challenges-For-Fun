//There's a great war between the even and odd numbers. Many numbers already lost their life in this war and it's your task to end this. 
//You have to determine which group is larger: the even, or the odd. The larger group wins.
//Create a function that takes an array of integers and sum up the even and odd numbers seperately and then substract the smaller one from the bigger one. Return the substraction.

let array = [5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]

function warOfNumbers(arr) {
    let oddArray = []
    let evenArray = [];
    function sort() {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evenArray.push(array[i]);
            } else if (arr[i] % 2 === 1) {
                oddArray.push(array[i]);
            }
        }
        console.log(evenArray)
        console.log(oddArray)
    }
    sort()
    function adds(odds, evens) {
        let oddTotal = 0;
        let evenTotal = 0;
        for (let i = 0; i < odds.length; i++) {
            oddTotal += odds[i]
        }
        for (let i = 0; i < evens.length; i++) {
            evenTotal += evens[i]
        };
        console.log(oddTotal)
        console.log(evenTotal)
        if (oddTotal > evenTotal) {
            sub = oddTotal - evenTotal;
            return sub
        } else if (evenTotal > oddTotal) {
            sub = evenTotal - oddTotal
            return sub
        }

    } adds(oddArray, evenArray);
}

warOfNumbers(array);
console.log(sub)