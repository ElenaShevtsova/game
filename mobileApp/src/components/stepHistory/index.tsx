import React from 'react';
import {TouchableHighlight, Text, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {jumpTo} from '../../redux/actions';
import {styles} from './StepHistory.styles';
import {historySelector} from '../../redux/selectors';

export function StepHistory() {
  const history = useSelector(historySelector);
  const dispatch = useDispatch();
  return (
    <>
      {history.map((_, move) => {
        const desc = move ? `Перейти к ходу # ${move}` : 'К началу игры';
        return (
          <ScrollView key={move}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                dispatch(jumpTo(move));
              }}>
              <Text style={styles.textColorBlue}>{desc}</Text>
            </TouchableHighlight>
          </ScrollView>
        );
      })}
    </>
  );
}
