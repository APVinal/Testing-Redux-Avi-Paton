import React from 'react';
import {shallow, mount} from 'enzyme';
import TopNav from './top-nav';

describe('<TopNav /> Component',()=>{
    it('Smoke test huzzah',()=>{
        shallow(<TopNav />)
    });

    it('Should fire the callback when What? is clicked', ()=> {
      const callback = jest.fn();
      const wrapper = mount(<TopNav poodle={callback} />);
      const id = 'heyhey';
      wrapper.find('.what').node.id = id;
      wrapper.find('.what').simulate('click');
      expect(callback).toHaveBeenCalledWith(id);
    });

    it('Should fire the callback when + NewGame is clicked', ()=> {
      const callback = jest.fn();
      const wrapper = mount(<TopNav poodle={callback}  />);
      wrapper.find('.what').simulate('click', {
        anything() {}
      });
      expect(callback).toHaveBeenCalled;
    });
})