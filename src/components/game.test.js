import React from 'react';
import {shallow, mount} from 'enzyme';
import Game from './game';

describe('<Game /> Component',()=>{
    it('Smoke test huzzah',()=>{
        shallow(<Game />)
    });

    it('Starts a new game', () => {
      const wrapper = shallow(<Game />);

      wrapper.setState({
        guesses: [1,2,3,4],
        feedback: "Anything we want",
        correctAnswer: 75,
        poodle:false,
        guessButton:true
      });

      wrapper.instance().newGame();
      expect(wrapper.state('guesses')).toEqual([]);
      expect(wrapper.state('feedback')).toEqual('New Game! Make your guess!');
      expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
      expect(wrapper.state('correctAnswer')).toBeLessThan(101);
    });

    it('Submits a player\'s guess', () => {
      const wrapper = shallow(<Game />);

      wrapper.setState({
        guesses:[1,2,3,4],
        feedback: "Anything we want",
        correctAnswer: 75,
        poodle: false,
        guessButton: true
      });

      wrapper.instance().submitGuess(7);
      expect(wrapper.state('guesses')).toEqual([1,2,3,4,7]);
      expect(wrapper.state('feedback')).toEqual("Ice cold, baby... ice cold.");
    });

    it('Tells the player they won', () => {
      const wrapper = shallow(<Game />);

      wrapper.setState({
        guesses:[1,2,3,4],
        feedback: "Anything we want",
        correctAnswer: 75,
        poodle: false,
        guessButton: true
      });

      wrapper.instance().winner();
      expect(wrapper.state('feedback')).toEqual("You Won. Click new game to play again");
      expect(wrapper.state('guessButton')).toEqual(false);
    });

    it('Switch the model', () => {
      const wrapper = shallow(<Game />);

      wrapper.setState({
        guesses:[1,2,3,4],
        feedback: "Anything we want",
        correctAnswer: 75,
        poodle: false,
        guessButton: true
      });

      wrapper.instance().poodle('what');
      expect(wrapper.state('poodle')).toEqual(true);
    });
})