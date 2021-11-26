import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 

import { userAuth } from '../../hooks/auth';

import{ styles} from './styles';

import IlustrationHomeOffice from '../../assets/the_office.svg';


export function Home(){
    const navigation = useNavigation();

    const { userLogin, close } = userAuth();

    async function closeLogin(){
        close();
    }


    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#253274"
                
            />  
            <View style={styles.header}>
                <View style={styles.contentHeader}>
                    <Text style={styles.userName}>Bem vindo</Text>
                    <Text style={styles.userNamePrimary}> {userLogin.name}</Text>
                </View>

                <TouchableOpacity style={styles.close} onPress={closeLogin}> 
                    <AntDesign name="closecircle" size={18} color="red" />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <IlustrationHomeOffice 
                    width={300}
                />
            </View>
          
        </View>
    )
}