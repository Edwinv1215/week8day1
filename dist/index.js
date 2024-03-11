"use strict";
// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: The TypeScript compiler infers that a is a number with a value of 118.

let b = 'Thieves';
// A: The TypeScript compiler infers that b is a string with a value of 'Thieves'.

let c = [true, false, false];
// A: The TypeScript compiler infers that c is an array of booleans.

let d = {age: number};
// A: The TypeScript compiler infers that d is an object with a property 'age' that is a number.

let e = [3]
// A: The TypeScript compiler infers that e is an array of numbers.

let f;
// A: The TypeScript compiler infers that f is a number.

let g = []
// A: The TypeScript compiler infers that g is an array of numbers.

// i the Student Edwin Valentin am aware that the below homework should be used under a type sscript file
// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A:there is an error here because the year property does not have an object that is assinged to `song`. title and releaseYear are required properties that are not in the object.

let prices = [100, 200, 300];
prices[0] = '$100';
// A: there is an error here because the prices array is an array of numbers.

function myFunc(a: number, b: number): number {}
// A: there is an error here because the myFunc function is not returning a number.