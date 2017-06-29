import React from 'react';
import {shallow, mount} from 'enzyme';
import {TopNav} from './top-nav';

describe('<TopNav /> Component',()=>{
    it('Smoke test huzzah',()=>{
        shallow(<TopNav />)
    });
    it("TopNav's onNewGame method is called on click", ()=>{
      const callback = jest.fn();
      const wrapper = shallow(<TopNav dispatch={callback} />);
      wrapper.find('.new').simulate('click', {preventDefault: () => {}});
      expect(callback).toHaveBeenCalled();
    });
    it("TopNav's onInfo method is called on click", ()=>{
      const callback = jest.fn();
      const wrapper = shallow(<TopNav dispatch={callback} />);
      wrapper.find('.what').first().simulate('click', {preventDefault: () => {}});
      expect(callback).toHaveBeenCalled();
    });
    
})