import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { WrappedGameComponent } from '../game';

export function App() {
    return (
        <Provider store={store}>
            <WrappedGameComponent />
        </Provider>
    )
}
