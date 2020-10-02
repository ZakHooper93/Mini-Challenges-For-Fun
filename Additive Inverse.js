//A number added with its additive inverse equals zero.
//Create a function that returns an array of additive inverses.

function additiveInverse(arr) {
    let additiveInverse;
    additiveInverse = arr.map((num) => {
        if (Math.sign(num) === 1) {
            num = num - (num + num)
            return num
        } else if (Math.sign(num) === - 1) {
            num = num - (num + num)
            return num
        }
    });
    return additiveInverse

};

console.log(additiveInverse([5, -7, 8, 3]))

/*
let a = 5
let b = 10
let c = b - -a; ///hmmmm now that's interesting, didn't know you could do that
console.log(c); // 5

*/