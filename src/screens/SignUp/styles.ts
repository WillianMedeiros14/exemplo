import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    form: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        paddingRight: 36,
        paddingLeft: 36,
        paddingTop: 130,
    },
    title: {
        fontSize: 32,
        fontFamily: theme.fonts.Roboto_700Bold,
        color: theme.colors.primary,
        marginBottom: 32
    },
    content: {
        height: '100%',
    },
    subTitle: {
        fontSize: 11,
        color: 'rgba(37, 50, 116, 0.6)',
        marginBottom: 4,
        fontFamily: theme.fonts.Roboto_400Regular,
        marginTop: 16
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(37, 50, 116, 0.28)',
        fontFamily: theme.fonts.Roboto_400Regular,
        color: theme.colors.primary,
        fontSize: 15,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        borderRadius: 6,
    },
    containerPassword: {
        borderWidth: 1,
        borderColor: 'rgba(37, 50, 116, 0.28)',
        borderRadius: 6,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputPassword: {
        flex: 1,
        fontSize: 15,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        color: theme.colors.primary,
    },
    buttonvisiblePassword: {
        paddingLeft: 20,
        paddingRight: 20
    },
    error: {
        fontSize: 12,
        fontFamily: theme.fonts.Roboto_400Regular,
        color: theme.colors.red
    },
 
    ContainerButton: {
        width: '100%',
        marginTop: 16
    }
   
});