import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessForm from './guess-form';

describe('<GuessForm /> Component',()=>{
    it('Smoke test huzzah',()=>{
        shallow(<GuessForm state={{guessButton: false}} />)
    });

    it('Fires the callback when the form is submitted', () => {
      const callback = jest.fn();
      const wrapper = mount(<GuessForm state={{guessButton: false}} testing={callback} />);
      wrapper.setState({inputValue: 43});
      wrapper.simulate('submit');
      expect(callback).toHaveBeenCalledWith(wrapper.state('inputValue'));
    });

    it('Sets the inputValue when the getValue function is called', () => {
      const wrapper = shallow(<GuessForm state={{guessButton: false}} />);
      wrapper.setState({inputValue: 0});

      wrapper.instance().getValue(3);

      expect(wrapper.state('inputValue')).toEqual(3);
    });

    it('Fires the callback when the input is changed', () => {
      const callback = jest.fn();
      const value = 23;
      const wrapper = mount(<GuessForm state={{guessButton: false}} testing={callback} />);
      wrapper.setState({inputValue: 43});
      wrapper.find('.text').node.value = value;
      wrapper.find('.text').simulate('change');
      expect(wrapper.state('inputValue')).toEqual('23');
    });
})