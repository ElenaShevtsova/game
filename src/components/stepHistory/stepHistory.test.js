import React from 'react';
import {Provider} from "react-redux";
import {configure, mount} from 'enzyme';
import {StepHistory} from './index';
import {createStore} from "redux";
import {rootReducer, initialState} from "../../redux/reducers";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const store = createStore(rootReducer,initialState);

describe('stepHistory Component', () => {
    it('click on the button calls the function', () => {
        const useDispatchSpy = jest.spyOn(jest.requireActual('react-redux'), 'useDispatch');
        const mockDispatchFn = jest.fn();
        useDispatchSpy.mockReturnValue(mockDispatchFn);
        const stepHistoryComponent = mount(<Provider store={store}><StepHistory/></Provider>);
        stepHistoryComponent.find('button').simulate('click');
        expect(useDispatchSpy).toBeCalledTimes(1);
    });
});