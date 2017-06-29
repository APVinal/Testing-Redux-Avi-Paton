import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessList} from './guess-list';

describe('<GuessList /> Component',()=>{
    it('Smoke test huzzah',()=>{
        shallow(<GuessList guesses={[]}/>)
    });

    it('Renders the guesses', () => {
      const guessList = [23,43,12,2]
      const wrapper = shallow(<GuessList guesses={guessList} />);
      const guesses = wrapper.find('li');
      expect(guesses.length).toEqual(guessList.length);
      guessList.forEach((value, index) => {
        expect(guesses.at(index).text()).toEqual(value.toString());
      });

    })
})