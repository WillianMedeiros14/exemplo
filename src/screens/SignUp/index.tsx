import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Button } from '../../components/Buttom';
import { LineSeparate } from '../../components/LineSeparate';
import { ButtonOptionLogin } from '../../components/ButtonOptionLogin';

import { useNavigation } from '@react-navigation/native'
import { useForm, Controller, Control } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import ElipsePrimary from '../../assets/elipse_primary.svg';

import { userAuth } from '../../hooks/auth';

import{ styles} from './styles';

type UserCreate = {
    id: String;
    name: String;
    email: String;
    password: String;
}

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é pbrigatório!'),
    email: Yup.string().email('Não é um email válido').required('Email é obrigatório!'),
    password: Yup.string().required('Senha é obrigatória!'),
})

export function SignUp(){
    const navigation = useNavigation();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmationPassword, setShowConfirmationPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');
    
    const [verificationPassword, setVerificationPassword] = useState(false);

    const { loading, signOut, isVerificationEmail  } = userAuth();


    const {
        control,
        handleSubmit,
        formState: {
          errors
        }
      } = useForm({
        resolver: yupResolver(schema)
    });

   
    function handleGoBack(){
        navigation.goBack();
    }

    async function handleSignUp(formData: UserCreate){
        if(confirmationPassword.length > 8 || formData.password){
            var random =  Math.floor(Date.now() * Math.random()).toString(36);

            const data = {
                id: random,
                name: formData.name,
                email: formData.email,
                password: formData.password
            }
            
            if(formData.password == confirmationPassword){
                await signOut(data);
                if(isVerificationEmail != true){
                    navigation.goBack();
                } 
            } else {
                setVerificationPassword(true);
            }
        }else{
            setVerificationPassword(true);
        }
    }

    useEffect(() => {
        setVerificationPassword(false);
    },[confirmationPassword])

    return (
        <View style={styles.container}>
             <ScrollView>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />  
           
           <View style={styles.form}>
               <Text style={styles.title}>Criar conta</Text>

               <View style={styles.content}>    
                    <Text style={styles.subTitle}>Nome</Text>

                    <Controller
                        name="name"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.input}
                                placeholder="Usuário"
                                autoCorrect={false}
                                autoCapitalize="none"
                                value={value}
                                onChangeText={onChange}
                            />
                        )}
                    />
                    {
                        errors.name && <Text style={styles.error}> {errors.name.message}</Text>
                    }
                   
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
                    {
                        verificationPassword && <Text style={styles.error}> A senha precisa ter no mínimo 8 caracteres</Text>
                    }

                    <Text style={styles.subTitle}>Confirmar senha</Text>
                    <View style={styles.containerPassword}>
                        <TextInput
                            placeholder="***********"
                            style={styles.inputPassword}
                            secureTextEntry={!showConfirmationPassword}
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={confirmationPassword}
                            onChangeText={ (text) => setConfirmationPassword(text)}
                        />
                        <TouchableOpacity
                            style={styles.buttonvisiblePassword}
                            onPress={() => setShowConfirmationPassword((prevState) => !prevState)}
                        >
                            <Ionicons
                                name={showConfirmationPassword ? 'md-eye' : 'md-eye-off'}
                                size={24}
                                color="#00000099"
                            />
                        </TouchableOpacity>
                    </View>
                    {
                        verificationPassword && <Text style={styles.error}>As senhas são diferentes</Text>
                    }
                    
                    <View style={styles.ContainerButton}>
                        <Button 
                            text="Criar conta" 
                            loadingLoginAuth={loading} 
                            onPress={handleSubmit(handleSignUp)}
                        />
                    </View>

                    <LineSeparate />

                    <ButtonOptionLogin
                        text="Possui conta?"
                        title="Entrar"
                        onPress={handleGoBack}
                    />
                   
               </View>
           </View>
           </ScrollView>
        </View>
    )
}