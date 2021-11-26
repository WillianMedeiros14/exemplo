import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
       
    },
    text: {
       fontSize: 16,
       color: theme.colors.primary,
    },
    title: {
        color: theme.colors.secondary,
    }  
});