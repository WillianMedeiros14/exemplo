import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SignInRoute } from './sigIn.routes';
import { userAuth } from '../hooks/auth';
import { AuthRoutes } from './auth.routes';


export function Routes(){

    const { userLogin } = userAuth();

    return (
        <NavigationContainer>
         { userLogin.email ? <AuthRoutes /> : <SignInRoute />  }
        </NavigationContainer>
    );
}