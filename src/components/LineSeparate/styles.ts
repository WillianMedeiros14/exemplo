import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 25
    },
    line: {
        height: 1,
        width: '30%',
        backgroundColor: theme.colors.primary,
        marginLeft: 10,
        marginRight: 10
    }
    
});