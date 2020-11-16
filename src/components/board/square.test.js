import React from 'react';
import {Provider} from "react-redux";
import {configure, mount} from 'enzyme';
import {Square} from "./square";
import {createStore} from "redux";
import {rootReducer} from "../../redux/reducers";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
const store = createStore(rootReducer, {
    history: [
        {
            squares: Array(9).fill(null),
        },
    ],
    xIsNext: true,
    stepNumber: 0,
    winner: null,
    disabled: false,
});

describe('Square Component', () => {

    it('has a tag button', () => {
        const squareComponent = mount(<Provider store={store}><Square/></Provider>);
        console.log(squareComponent.debug());
        expect(squareComponent.find('button').length).toEqual(1);
    });
});