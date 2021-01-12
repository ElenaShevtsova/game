import {ScrollView, Text, View} from 'react-native';
import {styles} from './Game.styles';
import {Board} from '../board';
import {StepHistory} from '../stepHistory';
import React, {FC} from 'react';
import {Current, Status} from '../../types';

export type GameComponentProps = { status: Status, saveCurrentSquare: any, state: Current, jumpToMove: any };
export const GameComponent: FC<GameComponentProps> = (props) => {
    const {status, saveCurrentSquare, state, jumpToMove} = props;
    return (
        <View style={styles.game}>
            <Board saveCurrentSquare={saveCurrentSquare} state={state}/>
            <ScrollView style={styles.gameInfo}>
                <View>
                    <Text style={styles.styleStatus}>{status}</Text>
                </View>
                <StepHistory state={state} jumpToMove={jumpToMove}/>
            </ScrollView>
        </View>
    );
};
