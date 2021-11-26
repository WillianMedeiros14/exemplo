import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        
    },
    header: {
        height: 80,
        width: '100%',
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingLeft: 15,
        paddingBottom: 15,
        paddingRight: 15
    },
    userName: {
        fontSize: 17,
        color: theme.colors.white,
        fontFamily: theme.fonts.Roboto_400Regular
    },
    contentHeader: {
        flexDirection: 'row',

    },
    userNamePrimary:{
        fontSize: 17,
        color: theme.colors.white,
        fontFamily: theme.fonts.Roboto_700Bold
    },
    close: {
        height: 40,
        width: 40,
        backgroundColor: theme.colors.white,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 200
    }
   
});