import game from './main';

// describe('Game of Life, by Leandro Souza 😎', () => {

//   it('test', () => {
//     console.log('test');
//   });

// });

describe('Verifies field generator', () => {
  it('generates single field board', () => {
    const board = game.generateFields(1);
    expect(Object.keys(board)).toContain('0-0');
    expect(board['0-0']).toBeFalsy();
  });
  it('generates multiple fields board', () => {
    const board = game.generateFields(2);
    const boardKeys = Object.keys(board);
    expect(boardKeys).toContain('0-0');
    expect(boardKeys).toContain('0-1');
    expect(boardKeys).toContain('1-0');
    expect(boardKeys).toContain('1-1');
  });
});

describe('Verifies countActiveNeighbors', () => {
  const board = game.generateFields(3);
    
  it('should return 0 for field without active neighbors', () => {
    expect(game.countActiveNeighbors(board, '1-1')).toBe(0);
  })    
  it('should return 1 for field with one active neighbors', () => {
    board['1-2'] = true;
    expect(game.countActiveNeighbors(board, '1-1')).toBe(1);
  })
  it('should return 2 for field witho two active neighbors', () => {
    board['0-1'] = true;
    expect(game.countActiveNeighbors(board, '1-1')).toBe(2);
  })    
  it('should return 3 for field with three active neighbors', () => {
    board['2-1'] = true;
    expect(game.countActiveNeighbors(board, '1-1')).toBe(3);
  })
});

describe('Verifies cells next state', () => {
    
  // Active cells
  it('active cell with one neighbor should die', () => {
    expect(game.generateNextState(true, 1)).toBeFalsy();
  });
  it('active cell with zero neighbors should die', () => {
    expect(game.generateNextState(true, 0)).toBeFalsy();
  });
  it('active cell with four neighbors should die', () => {
    expect(game.generateNextState(true, 4)).toBeFalsy();
  });
  it('active cell with five neighbors should die', () => {
    expect(game.generateNextState(true, 5)).toBeFalsy();
  });
  it('active cell with two neighbors should survive', () => {
    expect(game.generateNextState(true, 2)).toBeTruthy();
  });
  it('active cell with three neighbors should survive', () => {
    expect(game.generateNextState(true, 3)).toBeTruthy();
  });
  
  // Inactive cells
  it('inactive cell with three neighbors should activate', () => {
    expect(game.generateNextState(false, 3)).toBeTruthy();
  });
  it('inactive cell with four neighbors should not change', () => {
    expect(game.generateNextState(false, 4)).toBeFalsy();
  });
  it('inactive cell with two neighbors should not change', () => {
    expect(game.generateNextState(false, 2)).toBeFalsy();
  });
    
});