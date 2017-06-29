import React from 'react';
import {shallow, mount} from 'enzyme';
import Header from './header';

describe('<Header /> Component',()=>{
    it('Smoke test huzzah',()=>{
        shallow(<Header state={{poodle: false}} />)
    });

    // it('Should hide the infoModal', ()=> {
    //   const wrapper = shallow(<Header state={{poodle: false}} />);
    //   const infoModal = wrapper.find('infoModal').at(0);
    //               // console.log(infoModal.text());
    //   expect(infoModal.value).toEqual(undefined);
    // });

    it('Should show the infoModal', () => {
      const wrapper = shallow(<Header state={{poodle: true}} />);
      const infoModal = wrapper.find('div');
            // console.log(infoModal);
        expect(infoModal[0]).toEqual(undefined);

    })

})