import React, {FC} from 'react';
import {TouchableHighlight, Text, ScrollView} from 'react-native';

import {styles} from './StepHistory.styles';
import {Move, Square, State, Step} from '../../types';

type StepHistoryProps = { state: State, jumpToMove(step: Step): void };

export const StepHistory: FC<StepHistoryProps> = (props) => {
    const {state, jumpToMove} = props;
    const history = state.context.history;
    return (
        <>
            {history.map((_: Square, move: Move) => {
                const desc = move ? `Перейти к ходу # ${move}` : 'К началу игры';
                return (
                    <ScrollView key={move}>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={() => {
                                jumpToMove(move);
                            }}>
                            <Text style={styles.textColorBlue}>{desc}</Text>
                        </TouchableHighlight>
                    </ScrollView>
                );
            })}
        </>
    );
}
