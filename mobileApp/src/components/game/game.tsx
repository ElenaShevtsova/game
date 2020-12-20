import {ScrollView, Text, View} from 'react-native';
import {styles} from './Game.styles';
import {Board} from '../board';
import {StepHistory} from '../stepHistory';
import React, {FC} from 'react';
import {Status} from '../../types';

export type GameComponentProps = {status: Status};
export const GameComponent: FC<GameComponentProps> = (props) => {
  const {status} = props;
  return (
    <ScrollView style={styles.game}>
      <Board />
      <ScrollView style={styles.gameInfo}>
        <View>
          <Text style={styles.styleStatus}>{status}</Text>
        </View>
        <StepHistory />
      </ScrollView>
    </ScrollView>
  );
};
