import {ScrollView, Text, View} from 'react-native';
import {styles} from './Game.styles';
import {Board} from '../board';
import {StepHistory} from '../stepHistory';
import React, {FC} from 'react';
import {Status} from '../../types';

export type GameComponentProps = { status: Status, saveCurrentSquare: any, current: any, jumpToMove: any};
export const GameComponent: FC<GameComponentProps> = (props) => {
    const {status, saveCurrentSquare, current, jumpToMove} = props;
    return (
        <View style={styles.game}>
            <Board saveCurrentSquare={saveCurrentSquare} current={current}/>
            <ScrollView style={styles.gameInfo}>
                <View>
                    <Text style={styles.styleStatus}>{status}</Text>
                </View>
                <StepHistory current={current} jumpToMove={jumpToMove}/>
            </ScrollView>
        </View>
    );
};
