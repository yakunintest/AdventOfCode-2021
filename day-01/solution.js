'use strict';
const fs = require("fs");
const file = fs.readFileSync("input.txt");
const inputArray = file.toString().split("\n").map((val) => parseInt(val));


function firstPart(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) count++;
  }
  return count;
}

console.log("Part 1: " + firstPart(inputArray));
