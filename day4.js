const fs = require("fs");

const data = fs.readFileSync("day4.txt").toString().trim().split("\n\n");

const numbersToDraw = data[0]
  .trim()
  .split(",")
  .map((x) => parseInt(x));

const parseDataToRows = (data) => {
  return data.split("\n").map((row) =>
    row
      .trim()
      .split(/\s+/g)
      .map((x) => parseInt(x))
  );
};

const convertToBoardObject = (rows) => {
  return {
    rows,
    cols: rows[0].map((_, i) => rows.map((row) => row[i])),
  };
};

const boards = data.slice(1).map(parseDataToRows).map(convertToBoardObject);

const allDrawnNumbersInArray = (array, drawnNumbers) => {
  return array.every((number) => drawnNumbers.includes(number));
};

const isBoardComplete = (board, drawnNumbers) => {
  const matchingRows = board.rows.some((row) =>
    allDrawnNumbersInArray(row, drawnNumbers)
  );
  const matchingCols = board.cols.some((col) =>
    allDrawnNumbersInArray(col, drawnNumbers)
  );

  return matchingCols || matchingRows;
};

const calculateScore = (board, drawnNumbers) => {
  return (
    board.rows
      .flatMap((row) => row)
      .flatMap((element) => element)
      .filter((element) => !drawnNumbers.includes(element))
      .reduce((a, b) => a + b) * drawnNumbers[drawnNumbers.length - 1]
  );
};

const removeBoardFromStorage = (board, boardStorage) => {
  const idx = boardStorage.indexOf(board);
  boardStorage.splice(idx, 1);
  return board;
};

const Part1 = (boards, numbersToDraw) => {
  let scores = [];
  for (let i = 5; scores.length == 0; i++) {
    const drawnNumbers = numbersToDraw.slice(0, i + 1);
    scores = boards
      .filter((board) => isBoardComplete(board, drawnNumbers))
      .map((x) => calculateScore(x, drawnNumbers))
      .sort()
      .reverse();
  }

  return scores;
};

const Part2 = (boards, numbersToDraw) => {
  let scores = [];
  for (let i = 5; boards.length != 0 || numbersToDraw.length != i; i++) {
    const drawnNumbers = numbersToDraw.slice(0, i + 1);
    scores.push(
      ...boards
        .filter((board) => isBoardComplete(board, drawnNumbers))
        .map((x) => removeBoardFromStorage(x, boards))
        .map((x) => calculateScore(x, drawnNumbers))
        .sort()
        .reverse()
    );
  }

  return scores[scores.length - 1];
};

console.log("Part 1: " + Part1(boards, numbersToDraw));
console.log("Part 2: " + Part2(boards, numbersToDraw));
