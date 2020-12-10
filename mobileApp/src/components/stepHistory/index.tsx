import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {jumpTo} from '../../redux/actions';
import {IInitState} from '../../redux/reducers';
import {SquaresInHistory} from '../../types';
import {View, TouchableHighlight, StyleSheet, Text} from 'react-native';
import {blackColor} from '../board/square';

export function StepHistory() {
  const history = useSelector<IInitState, SquaresInHistory>(
    (state) => state.history,
  );
  const dispatch = useDispatch();
  return (
    <>
      {history.map((_, move) => {
        const desc = move ? `Перейти к ходу # ${move}` : 'К началу игры';
        return (
          <View key={move}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                dispatch(jumpTo(move));
              }}>
              <Text style={styles.textColorBlue}>{desc}</Text>
            </TouchableHighlight>
          </View>
        );
      })}
    </>
  );
}

const blueColor = '#207ee8';
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: blackColor,
    borderStyle: 'solid',
    width: 170,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  textColorBlue: {
    color: blueColor,
    fontSize: 16,
    textAlign: 'center',
  },
});
