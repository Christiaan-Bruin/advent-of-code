const fs = require("fs");

const lines = fs
  .readFileSync("day1.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)
  .map((x) => parseInt(x));

// Part 1
let increased = 0;

for (let i = 1; i < lines.length; i++) {
  if (lines[i - 1] < lines[i]) {
    increased++;
  }
}

console.log(increased);

// Part 2
increased = 0;

for (let i = 3; i < lines.length; i++) {
  if (
    lines[i] + lines[i - 1] + lines[i - 2] >
    lines[i - 1] + lines[i - 2] + lines[i - 3]
  ) {
    increased++;
  }
}

console.log(increased);
