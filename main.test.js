const game = require('./main');

// describe('Game of Life, by Leandro Souza 😎', () => {

//     it('test', () => {
//         console.log('test');
//     });

// });

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