function knightMoves(startPosition, endPosition) {
  const moves = [[+2, -1], [+2, +1], [+1, +2], [-1, +2], [-1, +2], [-2, +1],
    [-2, -1], [-1, -2], [+1, -2]];
  const checkMoves = (startPosition, current = []) => {
    for (const move of moves) {
      if ((startPosition.at(-2) + move[0] < 8 || startPosition.at(-2) + move[0] > -1)
       && startPosition.at(-1) + move[1] < 8 || startPosition.at(-1) + move[1] > -1) {
        current.push([startPosition[0] + move[0], startPosition[1] + move[1]]);
      }
    }
    for (let i = 0; i < current.length; i++) {
      if (current[i][0] + moves[i][0] > 7 && current[i][0] + moves[i][0] < 0
          && current[i][1] + moves[i][1] > 7 && current[i][1] + moves[i][1] < 0) {
        i++;
      }
      current.push([current[i][0] + moves[i][0], current[i][1] + moves[i][1]]);
    }
  };
  if (startPosition[0] === endPosition[0] && startPosition[1] === endPosition[1]) {
    return startPosition;
  }
  checkMoves(startPosition);
  return { checkMoves };
}

console.log(knightMoves([3, 3], [4, 3]));
