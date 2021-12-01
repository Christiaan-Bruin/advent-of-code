const fs = require("fs");

const lines = fs
  .readFileSync("day1.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)
  .map((x) => parseInt(x));

const isBigger = (a, b) => {
  return b > a;
};

const Part1 = (array) => {
  let increased = 0;

  for (let i = 1; i < array.length; i++) {
    if (isBigger(array[i - 1], array[i])) increased++;
  }

  return increased;
};

const Part2 = (array) => {
  let increased = 0;

  for (let i = 3; i < array.length; i++) {
    let prevWindow = array[i - 1] + array[i - 2] + array[i - 3];
    let nextWindow = array[i] + array[i - 1] + array[i - 2];

    if (isBigger(prevWindow, nextWindow)) increased++;
  }

  return increased;
};

console.log("Part 1: " + Part1(lines));
console.log("Part 2: " + Part2(lines));
