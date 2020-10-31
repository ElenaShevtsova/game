import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import rootReducer from '../../store/reducers';
import Game from '../game/Game';
import { jumpTo, handleClick } from '../../store/actions'

const store = createStore(rootReducer);


const putStateToProps = (state) => {
    return {
        history: state.history,
        xIsNext: state.xIsNext,
        stepNumber: state.stepNumber
    }
}

const putActionsToProps = (dispatch) => {
    return {
        jumpTo: bindActionCreators(jumpTo, dispatch),
        handleClick: bindActionCreators(handleClick, dispatch),
    }
}

const WrappedGameComponent = connect(putStateToProps, putActionsToProps)(Game)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <WrappedGameComponent />
            </Provider>
       )
    }

}