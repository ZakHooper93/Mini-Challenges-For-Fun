//Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.

function reverse(bool) {

	if (typeof(bool) === "boolean") {
        return !bool
    } else return "boolean expected"
};

//Alternatively

function reverse(bool) {
   return typeof(bool) === "boolean" ? !bool : "boolean expected" 
}