/**
 * Active cells with 2 or 3 active neighbors survive
 * Active cells with 1 or more than 3 neighbors die
 * Inactive cells with 3 neighbors activate
 * @param {*} currentState  
 * @param {*} neighbors 
 */
function generateNextState(currentState, neighbors) {
  if ((currentState && (neighbors === 2 || neighbors === 3)) 
    || (!currentState && neighbors === 3)) {
    return true;
  }
  return false;
};

function generateFields(size) {
  let board = { 'size': size };
  for (let line = 0; line < size; line++) {
    for (let column = 0; column < size; column++) {
      board[`${line}-${column}`] = false;
    }
  }
  return board;
};

function countActiveNeighbors(board, position) {
  const field = position.split('-'); 
  const fieldLine = parseInt(field[0]); 
  const fieldColumn = parseInt(field[1]);
  
  // Stores all valid neighbors
  const neighbors = [];
  const addNeighbor = (line, column) => {
    if (line >= 0 && column >= 0 && line < board.size 
      && column < board.size && board[`${line}-${column}`]) {
      neighbors.push(`${line}-${column}`);
    }
  };

  // Check for current row
  // previous column
  addNeighbor(fieldLine, fieldColumn-1);
  // next column
  addNeighbor(fieldLine, fieldColumn+1);

  // Check for previous row
  const previousRow = fieldLine - 1;
  // previous column
  addNeighbor(previousRow, fieldColumn-1);
  // current column
  addNeighbor(previousRow, fieldColumn);
  // next column
  addNeighbor(previousRow, fieldColumn+1);
    
  // Check for next row
  const nextRow = fieldLine + 1;
  // previous column
  addNeighbor(nextRow, fieldColumn-1);
  // current column
  addNeighbor(nextRow, fieldColumn);
  // next column
  addNeighbor(nextRow, fieldColumn+1);

  return neighbors.length;
};

export default { generateNextState, generateFields, countActiveNeighbors };