import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export function LineSeparate(){
    return(
        <View style={styles.Container}>
            <View style={styles.line} />
            <View style={styles.line}/>
        </View>
    )
}