import React from 'react';
import {shallow, mount} from 'enzyme';
import InfoModal from './info-modal';

describe('<InfoModal /> Component',()=>{
    it('Smoke test huzzah',()=>{
        shallow(<InfoModal />)
    });

    it('Should fire the callback when the button is clicked', () => {
      const callback = jest.fn();
      const wrapper = mount(<InfoModal poodle={callback} />);
      const id = 'what';
      wrapper.find('.close').node.id = id;
      wrapper.find('.close').simulate('click');
      expect(callback).toHaveBeenCalledWith(id);
    });
})