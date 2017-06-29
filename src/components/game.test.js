import React from 'react';
import {shallow, mount} from 'enzyme';
import Game from './game';

describe('<Game /> Component',()=>{
    it('Smoke test huzzah',()=>{
        shallow(<Game />)
    });
})