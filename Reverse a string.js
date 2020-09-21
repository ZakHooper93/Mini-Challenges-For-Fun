//Create a function that takes a string as its argument and returns the string in reversed order.

function missingAngle(angle1, angle2) {
    var addedAngle = angle1 + angle2;
    if (addedAngle > 90) {
        return "acute";
    } else if (addedAngle < 90) {
        return "obtuse";
    } else {
        return "right";
    }
}
console.log(missingAngle(45, 45))