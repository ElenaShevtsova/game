import React from 'react';
import {Provider} from "react-redux";
import {configure, mount} from 'enzyme';
import {Square} from "./square";
import {createStore} from "redux";
import {rootReducer, initialState} from "../../redux/reducers";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
const store = createStore(rootReducer, initialState);

describe('Square Component', () => {
    const squareComponent = mount(<Provider store={store}><Square/></Provider>);

    it('button has attribute disabled', () => {
        expect(squareComponent.find('button').props()).toHaveProperty('disabled');
    });

    it('button has attribute disabled', () => {
        const useDispatchSpy = jest.spyOn(jest.requireActual('react-redux'), 'useDispatch');
        const mockDispatchFn = jest.fn();
        useDispatchSpy.mockReturnValue(mockDispatchFn);
        squareComponent.find('button').simulate('click');
        expect(useDispatchSpy).toBeCalledTimes(1);

    });
});