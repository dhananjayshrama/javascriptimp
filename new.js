const prompt = require("prompt-sync")();

let age = Number(prompt("Enter your age: "));

if (age >= 18) {
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}