import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    Container: {
        backgroundColor: theme.colors.primary,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 18,
        paddingBottom: 18
    },
    text: {
        fontSize: 17,
        color: theme.colors.white,
        fontFamily: theme.fonts.Roboto_700Bold,
    }
});