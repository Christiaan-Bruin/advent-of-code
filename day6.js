class Fish {
  constructor(timer) {
    this.timer = timer;
  }

  breedFish() {
    if (this.timer == 0) {
      this.timer = 6;
      return new Fish(8);
    } else {
      this.timer--;
      return;
    }
  }
}

const fs = require("fs");

const allFish = fs
  .readFileSync("day6.txt", { encoding: "utf-8" })
  .split(",")
  .filter((x) => x)
  .map((x) => parseInt(x))
  .map((x) => new Fish(x));

const amountOfDays = 80;

const Part1 = (fishList, days) => {
  for (let i = 0; i < days; i++) {
    const newFish = fishList
      .map((x) => x.breedFish(fishList))
      .filter((x) => x != null);
    fishList.push(...newFish);
  }
  return fishList.length;
};

console.log(Part1(allFish, amountOfDays));
