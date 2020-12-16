import {Text, TouchableHighlight, View} from 'react-native';
import {styles} from './Square.styles';
import React, {FC} from 'react';
import {Disabled, Index, CurrentSquare} from '../../types';
import {actionTypes} from '../../redux/actions';
import {useDispatch} from 'react-redux';

export type SquareViewComponentProps = {
  disabled: Disabled;
  click: actionTypes;
  currentSquare: CurrentSquare;
  index: Index;
};
export const SquareViewComponent: FC<SquareViewComponentProps> = (props) => {
  const {disabled, click, currentSquare, index} = props;
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableHighlight
        onPress={() => dispatch(click)}
        disabled={disabled}
        style={styles.field}>
        <Text style={styles.fontSize}>{currentSquare[index]}</Text>
      </TouchableHighlight>
    </View>
  );
};
