//Something which is not true is false, but something which is not not true is true! Create a function where given n number of "not", evaluate whether it's true or false.

let notNotNot = (n, bool) => !(n % 2) === bool;