function knightMoves(startPosition, endPosition) {
  const createBoard = (arr = []) => {
    const rows = 8;
    const columns = 8;
    for (let i = 0; i < rows; i++) {
      arr[i] = [];
      for (let j = 0; j < columns; j++) {
        arr[i][j] = false;
      }
    }
    return arr;
  };
  const createBoard2 = (arr = []) => {
    const rows = 8;
    const columns = 8;
    for (let i = 0; i < rows; i++) {
      arr[i] = [];
      for (let j = 0; j < columns; j++) {
        arr[i][j] = -1;
      }
    }
    return arr;
  };
  if (startPosition[0] === endPosition[0] && startPosition[1] === endPosition[1]) {
    return startPosition;
  }
  const dX = [+2, +2, +1, -1, -2, -2, -1, +1];
  const dY = [-1, +1, +2, +2, +1, -1, -2, -2];

  const Q = [];
  const nodes = [];
  const board = createBoard();
  const board2 = createBoard2();
  Q.push(startPosition);
  while (Q.length !== 0) {
    const current = Q.shift();
    for (let i = 0; i < 8; i++) {
      const newX = current[0] + dX[i];
      const newY = current[1] + dY[i];
      if ((newX < 8 && newX > -1) && (newY < 8 && newY > -1)) {
        if (board[newX][newY] === false) {
          Q.push([newX, newY]);
          board[newX][newY] = true;
          if (endPosition[0] === newX && endPosition[1] === newY) {
            break;
          }
          board2[newX][newY] = i;
        }
      }
    }
  }
  Q.push(endPosition);
  while (Q.length !== 0) {
    const current = Q[Q.length - 1];

    const newX = current[0];
    const newY = current[1];
    if (board2[newX][newY] === -1) {
      board2[newX][newY] = 0;
    }
    if ((newX - dX[board2[newX][newY]] < 8 && newX - (dX[board2[newX][newY]]) > -1)
    && (newY - dY[board2[newX][newY]] < 8 && (newY - (dY[board2[newX][newY]])) > -1)) {
      Q.push([newX - dX[board2[newX][newY]], newY - dY[board2[newX][newY]]]);
      if (startPosition[0] === Q[Q.length - 1][0] && startPosition[1] === Q[Q.length - 1][1]) {
        nodes.push(Q.reverse());
        break;
      }
    } else if ((newX + dX[board2[newX][newY]] < 8 && newX + dX[board2[newX][newY]] > -1)
    && (newY + dY[board2[newX][newY]] < 8 && newY + dY[board2[newX][newY]] > -1)) {
      Q.push([newX + dX[board2[newX][newY]], newY + dY[board2[newX][newY]]]);
      if (startPosition[0] === Q[Q.length - 1][0] && startPosition[1] === Q[Q.length - 1][1]) {
        nodes.push(Q.reverse());
        break;
      }
    } else {
    Q.push([Math.abs(newX - dX[board2[newX][newY]]), Math.abs(newY - dY[board2[newX][newY]])]);
    }
  }

  console.log(`From ${startPosition[0]} ${startPosition[1]} to ${endPosition[0]} ${endPosition[1]}You made it in ${nodes[0].length - 1} moves! Here's your path:`);
  nodes.forEach((node) => {
    node.forEach((elem) => console.log(elem[0], elem[1]));
  });
}
knightMoves([4, 2], [1, 2]);
knightMoves([7, 7], [2, 2]);
knightMoves([5, 3], [3, 3]);
knightMoves([1, 1], [6, 6]);
knightMoves([7, 7], [0, 0]);
knightMoves([7, 7], [7, 7]);