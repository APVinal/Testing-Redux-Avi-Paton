import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessSection from './guess-section';

describe('<GuessSection /> Component',()=>{
    it('Smoke test huzzah',()=>{
        shallow(<GuessSection />)
    });

    // it('Renders feedback', () => {
    //   const feedback = "Foobar";
    //   const wrapper = shallow(<GuessSection feedback={feedback} />)
    //   expect(wrapper.contains(<h2 id="feedback">{feedback}</h2>)).toEqual(true);
    // });
})