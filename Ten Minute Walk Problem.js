//Ten Minute Walk
/*
function isValidWalk(walk) {
    if (walk.length === 10) {
        var xAxis = 0;
        var yAxis = 0;

        for (i = 0; i < walk.length; i++) {
            if (walk[i] === "n") {
                yAxis += 1;
            } else if (walk[i] === "e") {
                xAxis += 1;
            } else if (walk[i] === "s") {
                yAxis -= 1;
            } else {
                xAxis -= 1;
            }
            console.log(xAxis, yAxis);
        }
        if (xAxis === 0 && yAxis === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

var test1 = isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]); //This should return true, is a valid array of 10 steps that returns to the starting location.
var test2 = isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]); //This should return false, doesn't return to start place.

console.log(test1);
console.log(test2);
*/
