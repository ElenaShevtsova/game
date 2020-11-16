import React from 'react';
import {shallow} from 'enzyme';
import {Square} from "./square";

describe('has a tag button', ()=> {
    const squareComponent = shallow(<Square/>);
    const node = squareComponent.find('button');
    expect(node.length).toEqual(1);
});