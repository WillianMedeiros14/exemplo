import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles';

interface Props extends RectButtonProps {
    text: String;
    loadingLoginAuth: boolean;
}

export function Button({text, loadingLoginAuth, ...rest}: Props){
    return(
        <RectButton style={styles.Container} {...rest}>
            {
            loadingLoginAuth ? (
              <ActivityIndicator size={20} color={"#fff"} />
            ) : (
                <Text style={styles.text}>{text}</Text>
            )
          }
        </RectButton>
    )
}