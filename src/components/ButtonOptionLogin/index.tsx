import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    text: String;
    title: String;
}

export function ButtonOptionLogin({text, title, ...rest}: Props){
    return(
        <View style={styles.Container} >
            <Text style={styles.text}>{text}</Text>

            <TouchableOpacity {...rest}>
                <Text style={[styles.title, styles.title]}> {title}</Text>
            </TouchableOpacity>
        </View>
    )
}