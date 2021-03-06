import {
    NEW_GAME,
    MAKE_GUESS,
    TOGGLE_INFO_MODAL,
    newGame,
    makeGuess,
    toggleInfoModal
} from './actions';

import reducer from './reducer';

describe('Reducer', () => {
    it('testing initial state', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.showInfoModal).toEqual(false);
        expect(state.correctAnswer).toBeGreaterThan(0);
        expect(state.correctAnswer).toBeLessThan(101);
    });
    it('Should reset state to initial state on newGame Action', () =>{
        let dummyState = {
            guesses: [1, 2, 3],
            feedback: 'You\'re Cold...',
            correctAnswer: 99,
            showInfoModal: true
        };
        const state = reducer(dummyState, newGame());
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.showInfoModal).toEqual(false);
        expect(state.correctAnswer).toBeGreaterThan(0);
        expect(state.correctAnswer).toBeLessThan(101);
    });
    it('Should change showInfoModal in state', () => {
        let dummyState = {
            guesses: [1, 2, 3],
            feedback: 'You\'re Cold...',
            correctAnswer: 99,
            showInfoModal: true
        };
        const state = reducer(dummyState, toggleInfoModal());
        expect(state.showInfoModal).toEqual(false);
    });
    it('Should return correct feedback when given NaN', () => {
        let dummyState = {
            guesses: [],
            feedback: '',
            correctAnswer: 1,
            showInfoModal: false
        };
        const state = reducer(dummyState, makeGuess('abc'));
        expect(state.feedback).toEqual('Please enter a valid number');
    });
    it('Should return correct feedback when Ice Cold', () => {
        let dummyState = {
            guesses: [],
            feedback: '',
            correctAnswer: 1,
            showInfoModal: false
        };
        const state = reducer(dummyState, makeGuess(51));
        expect(state.feedback).toEqual('You\'re Ice Cold...');
        expect(state.guesses).toEqual([51]);
    });
    it('Should return correct feedback when Cold', () => {
        let dummyState = {
            guesses: [],
            feedback: '',
            correctAnswer: 1,
            showInfoModal: false
        };
        const state = reducer(dummyState, makeGuess(31));
        expect(state.feedback).toEqual('You\'re Cold...');
        expect(state.guesses).toEqual([31]);
    });
    it('Should return correct feedback when Warm', () => {
        let dummyState = {
            guesses: [],
            feedback: '',
            correctAnswer: 1,
            showInfoModal: false
        };
        const state = reducer(dummyState, makeGuess(11));
        expect(state.feedback).toEqual('You\'re Warm');
        expect(state.guesses).toEqual([11]);
    });
    it('Should return correct feedback when Hot', () => {
        let dummyState = {
            guesses: [],
            feedback: '',
            correctAnswer: 1,
            showInfoModal: false
        };
        const state = reducer(dummyState, makeGuess(2));
        expect(state.feedback).toEqual('You\'re Hot!');
        expect(state.guesses).toEqual([2]);
    });
    it('Should return correct feedback when correct', () => {
        let dummyState = {
            guesses: [],
            feedback: '',
            correctAnswer: 1,
            showInfoModal: false
        };
        const state = reducer(dummyState, makeGuess(1));
        expect(state.feedback).toEqual('You got it!');
        expect(state.guesses).toEqual([1]);
    });

})
