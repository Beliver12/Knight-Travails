function knightMoves(startPosition, endPosition, positions = [startPosition], savedPos = []) {
  // const moves = [[+2, -1], [+2, +1], [+1, +2], [-1, +2], [-1, +2], [-2, +1],
  // [-2, -1], [-1, -2], [+1, -2]];
  const checkPosition = (arr, x, y) => {
    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < arr[j].length; i++) {
        if (arr[j][i][0] === x && arr[j][i][1] === y) {
          return false;
        }
        continue;
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

  if (savedPos.length < 8) {
    Q.unshift(startPosition[0], startPosition[1]);
  } else if (savedPos.length === 8 && Q.length < 1) {
    for (let j = 0; j < savedPos.length; j++) {
      for (let i = 0; i < savedPos[j].length; i++) {
        Q.unshift(savedPos[j][savedPos[i].length - 1][0], savedPos[j][savedPos[i].length - 1][1]);
        const temp = savedPos[j];
        savedPos[j] = savedPos[savedPos.length - 1];
        savedPos[savedPos.length - 1] = temp;
        positions.pop();
        positions.push([Q[0], Q[1]]);
        break;
      }
      break;
    }
  }
  let move = moves;
  while (move) {
    let x = Q.at(-2);
    let y = Q.at(-1);
    if ((x + move.moveX < 7 && x + move.moveX > 0) && (y + move.moveY < 7 && y + move.moveY > 0)) {
      // positions.push([x, y]);

      x += move.moveX;
      y += move.moveY;
      if (checkPosition(savedPos, x, y) === true) {
        Q.unshift(x, y);
        Q.splice(2, 2);
        positions.push([x, y]);
      }
    }
    if (positions[positions.length - 1][0] === endPosition[0] && positions[positions.length - 1][1] === endPosition[1]) {

      break;
    }
    move = move.next;
  }
  // positions.shift();
  if (savedPos.length > 7) {
    positions.shift();
    savedPos[savedPos.length - 1].push(positions[0]);
    savedPos[savedPos.length - 1].push(positions[1]);
    //let accuratePositions = savedPos.pop();
  }
  if (savedPos.length < 8) {
    savedPos.push([positions[0], positions[1]]);
  }
  if (savedPos[savedPos.length - 1][savedPos[savedPos.length - 1].length - 1][0] === endPosition[0]
    && savedPos[savedPos.length - 1][savedPos[savedPos.length - 1].length - 1][1] === endPosition[1]) {
        let accuratePositions = savedPos.pop();
    }
  // positions = [];
  knightMoves(startPosition, endPosition, positions = [startPosition], savedPos);

  return { checkPosition };
}

console.log(knightMoves([3, 3], [4, 3]));
