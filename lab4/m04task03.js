﻿// Task03 - Update your constructor Cat from task 2
// Constructor should add to objects method action()
// After calling method action return string with next format:
// color + " cat " + name + " run!"

// For example if cat created with parameters "white" and "Lucky"
// it action() should be "white cat Lucky run!"

// P.S
// Remember about this

function task03(color, name) {
    return new Cat(color, name); // don't change this code
}
function Cat(color, name) {
    this.color = color, this.name = name, this.action=function(){return this.color + " cat " + this.name + " run!";};
}

console.log(task03("white", "Tommy").action());
