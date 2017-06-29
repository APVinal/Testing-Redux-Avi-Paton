import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm /> Component',()=>{
    it('Smoke test huzzah',()=>{
        shallow(<GuessForm state={{guessButton: false}} />)
    });

    it('GuessForm submit button calls function on submit', () => {
      const callback = jest.fn();
      const wrapper = mount(<GuessForm dispatch={callback} />)
      const value = '5';
      wrapper.find('input[type="text"]').node.value = value;
      wrapper.find('form').simulate('submit');
      expect(callback).toHaveBeenCalledWith(makeGuess(value));
    });
})