import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { useForm, Controller, Control } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Button } from '../../components/Buttom';
import { LineSeparate } from '../../components/LineSeparate';
import { ButtonOptionLogin } from '../../components/ButtonOptionLogin';

import { userAuth } from '../../hooks/auth';

import ElipsePrimary from '../../assets/elipse_primary.svg';

import{ styles} from './styles';


type User = {
    email: String;
    password: String;
}

const schema = Yup.object().shape({
    email: Yup.string().email('Não é um email válido').required('Email é obrigatório!'),
    password: Yup.string().required('Senha é obrigatória!'),
})

export function SignIn(){
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const { loading, signIn, userLogin } = userAuth();

    const {
        control,
        handleSubmit,
        formState: {
          errors
        }
      } = useForm({
        resolver: yupResolver(schema)
    });


    async function handleSignIn(formData: User){
        await signIn(formData);
    }

    function handleSignUp(){
        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.container}>
            <ScrollView>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />  
          
          
            <ElipsePrimary />
           
           <View style={styles.form}>
              
               <Text style={styles.title}>Entrar</Text>

               <View style={styles.content}>
                   <Text style={styles.subTitle}>Email</Text>
                   
                    <Controller
                        name="email"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder="usuario@gmail.com"
                                style={styles.input}
                                keyboardType="email-address"
                                autoCorrect={false}
                                autoCapitalize="none"
                                value={value}
                                onChangeText={onChange}
                            />
                        )}
                    />
                    {
                        errors.email && <Text style={styles.error}> {errors.email.message}</Text>
                    }

                    <Text style={styles.subTitle}>Senha</Text>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <View style={styles.containerPassword}>
                                <TextInput
                                    placeholder="***********"
                                    style={styles.inputPassword}
                                    secureTextEntry={!showPassword}
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    value={value}
                                    onChangeText={onChange}
                                />
                                <TouchableOpacity
                                    style={styles.buttonvisiblePassword}
                                    onPress={() => setShowPassword((prevState) => !prevState)}
                                >
                                    <Ionicons
                                        name={showPassword ? 'md-eye' : 'md-eye-off'}
                                        size={24}
                                        color="#00000099"
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                    />

                    {
                        errors.password && <Text style={styles.error}> {errors.password.message}</Text>
                    }
                    
                    <View
                        style={styles.ContainerForgotPassword}
                    >
                        
                    </View>

                    <Button text="Entrar" loadingLoginAuth={loading} 
                        onPress={handleSubmit(handleSignIn)}
                    />

                    <LineSeparate />

                    <ButtonOptionLogin
                        text="Não possui conta?"
                        title="Criar login"
                        onPress={handleSignUp}
                    />      
               </View>
           </View>
         
          
               </ScrollView>
        </View>
    )
}