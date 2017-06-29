import {NEW_GAME, 
        MAKE_GUESS, 
        TOGGLE_INFO_MODAL,
        newGame,
        makeGuess,
        toggleInfoModal
} from './actions';

describe('newGame', () => {
    it('should return action', () =>{
        const action = newGame();
        expect(action.type).toEqual(NEW_GAME);
        expect(action.correctAnswer).toBeGreaterThan(0);
        expect(action.correctAnswer).toBeLessThan(101);
    })
})

describe('makeGuess', () => {
    it('should return action', () => {
        const guess = 53;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    })
})

describe('toggleInfoModal', () => {
    it('should return action', () => {
        const action = toggleInfoModal();
        expect(action.type).toEqual(TOGGLE_INFO_MODAL);
    })
})