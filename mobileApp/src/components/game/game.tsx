import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './Game.styles';
import {Board} from '../board';
import {StepHistory} from '../stepHistory';
import React, {FC} from 'react';
import {Status} from '../../types';
import { useMachine } from '@xstate/react';
import { gameMachine } from '../../Machine/main';

export type GameComponentProps = {status: Status};
export const GameComponent: FC<GameComponentProps> = (props) => {
  const {status, current, makeTransition} = props;
  return (
    <ScrollView contentContainerStyle={styles.gameContainerStyle} style={styles.game}>
      <Board current={current} makeTransition={makeTransition}/>
      <ScrollView style={styles.gameInfo}>
        <View>
          <Text style={styles.styleStatus}>{current.value}</Text>
        </View>
        <StepHistory makeTransition={makeTransition} current={current} />
      </ScrollView>
    </ScrollView>
  );
};
