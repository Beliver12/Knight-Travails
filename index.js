function knightMoves(startPosition, endPosition, positions = []) {
  // const moves = [[+2, -1], [+2, +1], [+1, +2], [-1, +2], [-1, +2], [-2, +1],
  // [-2, -1], [-1, -2], [+1, -2]];
  const checkPosition = (arr, x, y) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(x, y)) {
        return false;
      }
      continue;
    }
    return true;
  };
  const moves = {
    moveX: +2,
    moveY: -1,
    next: {
      moveX: +2,
      moveY: +1,
      next: {
        moveX: +1,
        moveY: +2,
        next: {
          moveX: -1,
          moveY: +2,
          next: {
            moveX: -1,
            moveY: +2,
            next: {
              moveX: -2,
              moveY: +1,
              next: {
                moveX: -2,
                moveY: -1,
                next: {
                  moveX: -1,
                  moveY: -2,
                  next: {
                    moveX: +1,
                    moveY: -2,
                    next: null,
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  if (startPosition[0] === endPosition[0] && startPosition[1] === endPosition[1]) {
    return startPosition;
  }

  const Q = [];
  Q.push(startPosition[0], startPosition[1]);
  let move = moves;
  while (move) {
    let x = Q.at(-2);
    let y = Q.at(-1);
    if ((x + move.moveX < 7 && x + move.moveX > 0) && (y + move.moveY < 7 && y + move.moveY > 0)) {
      positions.push([x, y]);

      x += move.moveX;
      y += move.moveY;
      if (checkPosition(positions, x, y) === true) {
        Q.unshift(x, y);
        Q.splice(2, 2);
      }
    }
    move = move.next;
  }
  knightMoves(startPosition, endPosition, positions);

  return { checkPosition };
}

console.log(knightMoves([3, 3], [4, 3]));
