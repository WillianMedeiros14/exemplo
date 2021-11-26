import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../global/styles/theme';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

const { Navigator, Screen } = createNativeStackNavigator();

export function SignInRoute(){
    return (
        <Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }            
        >
            <Screen
                name="SigIn"
                component={SignIn}
            />

            <Screen
                name="SignUp"
                component={SignUp}
            />
        </Navigator>
    );
}