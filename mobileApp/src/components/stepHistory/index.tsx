import React from 'react';
import {TouchableHighlight, Text, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {jumpTo} from '../../redux/actions';
import {styles} from './StepHistory.styles';
import {historySelector} from '../../redux/selectors';
import { useMachine } from '@xstate/react';
import { gameMachine } from '../../Machine/main';

export function StepHistory(props) {
  const history = useSelector(historySelector);
  const dispatch = useDispatch();

  // const [current, send] = useMachine(gameMachine);
  return (
    <>
      {history.map((_, move) => {
        const desc = move ? `Перейти к ходу # ${move}` : 'К началу игры';
        return (
          <ScrollView key={move}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                if (!move) {
                  props.makeTransition();
                }
              }}>
              <Text style={styles.textColorBlue}>{desc}</Text>
            </TouchableHighlight>
          </ScrollView>
        );
      })}
    </>
  );
}
