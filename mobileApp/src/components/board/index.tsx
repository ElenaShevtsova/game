import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {Square} from './square';
import {styles} from './Board.styles';

export const Board = () => {
    const squares = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
    ];

    return (
        // <View style={styles.square}>
        //   {squares.map((row) => {
        //     return (
        //       <View key={`Row ${row}`}>
        //         {row.map((i) => {
        //           return <Square index={i} key={`Index ${i}`} />;
        //         })}
        //       </View>
        //     );
        //   })}
        // </View>
        <View style={styles.square}>
            <FlatList data={squares}  numColumns={3} renderItem={({item}) =>
                <FlatList data={item} renderItem={({item}) => <Square index={item} key={`Index ${item}`}/>}/>}
            />
        </View>
    );
};
