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

module.exports = {
    generateNextState
};