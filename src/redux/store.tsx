import {rootReducer} from "./reducers";
import {createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

export const store = createStore(
    rootReducer, composeWithDevTools()
);