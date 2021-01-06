import React, {FC} from 'react';
import {View} from 'react-native';

import {Square} from './square';
import {styles} from './Board.styles';

type BoardComponentProps = {saveCurrentSquare: any, current: any};
export const Board:FC<BoardComponentProps> = (props) => {
  const {saveCurrentSquare, current} = props;
  const squares = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  return (
    <View style={styles.square}>
      {squares.map((row) => {
        return (
          <View key={`Row ${row}`}>
            {row.map((i) => {
              return <Square index={i} key={`Index ${i}`} saveCurrentSquare={saveCurrentSquare} current={current}/>;
            })}
          </View>
        );
      })}
    </View>
  );
};
