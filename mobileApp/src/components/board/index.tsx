import React, { FC } from 'react';
import { View } from 'react-native';

import { Square } from './square';
import { styles } from './Board.styles';
import { Squares, State } from '../../types';

type BoardComponentProps = { saveCurrentSquare(currentSquare: Squares): void; state: State };
export const Board: FC<BoardComponentProps> = (props) => {
  const { saveCurrentSquare, state } = props;
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
              return (
                <Square
                  index={i}
                  key={`Index ${i}`}
                  saveCurrentSquare={saveCurrentSquare}
                  state={state}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
};
