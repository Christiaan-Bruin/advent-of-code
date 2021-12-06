const fs = require("fs");

const lines = fs
  .readFileSync("day3.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

const findMostCommonBit = (array, position, isInverted) => {
  let countZeros = 0;
  let countOnes = 0;

  for (let i = 0; i < array.length; i++) {
    array[i].charAt(position) == "0" ? countZeros++ : countOnes++;
  }

  let value = isInverted
    ? countZeros > countOnes
      ? "1"
      : "0"
    : countZeros > countOnes
    ? "0"
    : "1";

  return value;
};

const Part1 = (array) => {
  let gammaRate = [];
  let epsilonRate = [];

  for (let i = 0; i < 12; i++) {
    gammaRate.push(findMostCommonBit(array, i, false));
    epsilonRate.push(findMostCommonBit(array, i, true));
  }
  gammaRateValue = parseInt(gammaRate.join(""), 2);
  epsilonRateValue = parseInt(epsilonRate.join(""), 2);

  return gammaRateValue * epsilonRateValue;
};

console.log("Part 1: " + Part1(lines));
