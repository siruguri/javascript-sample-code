function one() {
    var i = 42;
}

function two() {
    i = 2;
    one();
    return i;
    // should return 2
}

console.log(two());
