import React, {FC} from 'react';
import {TouchableHighlight, Text, ScrollView} from 'react-native';

import {styles} from './StepHistory.styles';
import {Current, Move} from '../../types';

type StepHistoryProps = { state: Current, jumpToMove: any };

export const StepHistory: FC<StepHistoryProps> = (props) => {
    const {state, jumpToMove} = props;
    const history = state.context.history;
    return (
        <>
            {history.map((_: any, move: Move) => {
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
