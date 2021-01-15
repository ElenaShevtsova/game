import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {rootReducer} from '../reducers/reducers';

export const store = createStore(rootReducer, composeWithDevTools());
