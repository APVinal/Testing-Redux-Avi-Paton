import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessCount} from './guess-count';

describe('<GuessCount /> Component',()=>{
    it('Smoke test huzzah',()=>{
        shallow(<GuessCount />)
    });

    it('Renders the correct number', () => {
      const guess = 87;
      const wrapper = shallow(<GuessCount count={guess} />);
      expect(wrapper.text()).toEqual(`Guess #${guess}!`);
    });
})