import React, { 
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect
} from 'react';

import { Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
    email: String;
    password: String;
}

type UserCreate = {
    id: string;
    name: String;
    email: String;
    password: String;
}

type AuthContextData = {
    userData: UserCreate;    
    loading: boolean;
    signIn: (userLogin: User) => Promise<void>;
    signOut: (userCreate:UserCreate) => Promise<void>;
    userLogin: UserCreate;
    close: () => void;
    isVerificationEmail: boolean;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserCreate[]>([]);
    const [userData, setUserData] = useState<UserCreate>({} as UserCreate);
    const [userLogin, setUserLogin] = useState<UserCreate>({} as UserCreate);
    const [loading, setLoading] = useState(false);
    const [isVerificationEmail, setIsVerificationEmail] = useState(false);

    const LOGIN_USER = 'login@storage';

    async function signOut(userCreate:UserCreate){
        try {
            setLoading(true);
            console.log(userCreate.email);

            const storage = await AsyncStorage.getItem(LOGIN_USER);
            const data =  JSON.parse(storage);
            setUser(data);
            //console.log(user.length);

            const dataUser = [
                ...user,
                userCreate
            ];

            let verificationEmail = false;
            
            // for(let index = 0; index <= user.length; index++){
            //     if(userCreate.email == user[index].email){
            //         verificationEmail = true;
            //         setIsVerificationEmail(true);
            //         Alert.alert('Email ja ultilizado');
            //         return;
            //     }
            // }
            
            await AsyncStorage.setItem(LOGIN_USER, JSON.stringify(dataUser));
            console.log('Usuário criado com sucesso');
            setUser([]);
            
            setLoading(false);
 
        } catch {
           Alert.alert('Não foi possível criar login');
        } finally {
            setLoading(false);
        }
    }

    async function signIn(userLogin: User) {
        let verification = false;
       try {
            setLoading(true);

            const storage = await AsyncStorage.getItem(LOGIN_USER);
            const data = JSON.parse(storage);
            setUser(data);
            
                for(let index = 0; index <= user.length; index++){
                    console.log('Email no sistema: ' + user[index].email);
                    if(userLogin.email === user[index].email && userLogin.password === user[index].password){
                        setUserLogin(user[index]);
                        verification = true;
                        console.log('Usuário logado com sucesso');
                    }
                }
            
           setUser([]);
           setLoading(false);
 
        } catch {
            if(verification != true){
                Alert.alert('Não foi possível altenticar');
            }
        } finally {
            setLoading(false);
        }
    }

    async function close(){
        await setUserLogin({} as UserCreate);
    }


    return(
        <AuthContext.Provider value={{
            userData,
            loading,
            signIn,
            signOut,
            userLogin,
            close,
            isVerificationEmail
        }}>
            { children }
        </AuthContext.Provider>
    )
}

function userAuth(){
    const context = useContext(AuthContext);

    return context;
}

export {
    AuthProvider,
    userAuth
}