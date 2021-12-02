const fs = require("fs");

const lines = fs
  .readFileSync("day2.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

const splitInput = (input) => {
  const splitValues = input.split(" ");

  const inputObj = {
    command: splitValues[0],
    movement: +splitValues[1],
  };

  return inputObj;
};

const Part1 = (array) => {
  let xPos = 0;
  let yPos = 0;

  for (let i = 0; i < array.length; i++) {
    const move = splitInput(array[i]);

    switch (move.command) {
      case "forward":
        xPos += move.movement;
        break;
      case "up":
        yPos -= move.movement;
        break;
      case "down":
        yPos += move.movement;
        break;
    }
  }

  return xPos * yPos;
};

const Part2 = (array) => {
  let xPos = 0;
  let yPos = 0;
  let aim = 0;

  for (let i = 0; i < array.length; i++) {
    const move = splitInput(array[i]);

    switch (move.command) {
      case "forward":
        xPos += move.movement;
        yPos += aim * move.movement;
        break;
      case "up":
        aim -= move.movement;
        break;
      case "down":
        aim += move.movement;
        break;
    }
  }

  return xPos * yPos;
};

console.log(Part1(lines));
console.log(Part2(lines));
