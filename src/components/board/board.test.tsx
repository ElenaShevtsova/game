import React from 'react';
import {shallow, configure} from 'enzyme';
import {Board} from './index';
import {Square} from "./square";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Board Component', () => {
    it('renders nine Square Component', () => {
        const boardComponent = shallow(<Board/>);
        expect(boardComponent.find(Square)).toHaveLength(9);
    });

    it('div with className game-board has 3 row', () => {
        const boardComponent = shallow(<Board/>);
        expect(boardComponent.find('.game-board').children().length).toEqual(3);
    });

    it('should render 9 Square Component', () => {
        const boardComponent = shallow(<Board/>);
        expect(boardComponent.find(Square)).toHaveLength(9);
    });
});