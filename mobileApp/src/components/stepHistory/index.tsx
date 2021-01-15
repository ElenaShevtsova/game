import React from 'react';
import {TouchableHighlight, Text, ScrollView, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {jumpTo} from '../../redux/actions/actions';
import {styles} from './StepHistory.styles';
import {historySelector} from '../../redux/selectors/selectors';

export function StepHistory() {
    const history = useSelector(historySelector);
    const dispatch = useDispatch();
    return (
        <>
            <FlatList data={history} ListHeaderComponent={() =>
                <TouchableHighlight style={styles.button} onPress={() => dispatch(jumpTo(0))}>
                    <Text style={styles.textColorBlue}>К началу игры</Text></TouchableHighlight>}
                      renderItem={({item, index}) =>
                          <ScrollView key={index}>
                              <TouchableHighlight style={styles.button} onPress={() => dispatch(jumpTo(index))}>
                                  <Text style={styles.textColorBlue}>Перейти к ходу # {index}</Text>
                              </TouchableHighlight>
                          </ScrollView>
                      }
            />
        </>
    );
}
