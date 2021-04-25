import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { 
    Provider as PaperProvider
} from 'react-native-paper';

import { AuthContext } from '../context/authContext';

import RootNavigation from '../navigations/root.navigation';

import AsyncStorage from '@react-native-community/async-storage';

import authReducer from '../reducers/authReducer';

import {
    CustomDarkTheme,
    CustomDefaultTheme
} from '../theme';  

const RootContainer = () => {
    // const [isLoading, setIsLoading] = React.useState(true);
    // const [userToken, setUserToken] = React.useState(null); 

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null
    };

    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

    const [loginState, dispatch] = useReducer(authReducer, initialLoginState);

    const AuthProvider = useMemo(() => ({
        signIn: async(foundUser) => {
            // setUserToken('fgkj');
            // setIsLoading(false);
            const userToken = String(foundUser[0].userToken);
            const userName = foundUser[0].username;
            
            try {
            await AsyncStorage.setItem('userToken', userToken);
            } catch(e) {
            console.log(e);
            }
            // console.log('user token: ', userToken);
            dispatch({ type: 'LOGIN', id: userName, token: userToken });
        },
        signOut: async() => {
            // setUserToken(null);
            // setIsLoading(false);
            try {
            await AsyncStorage.removeItem('userToken');
            } catch(e) {
            console.log(e);
            }
            dispatch({ type: 'LOGOUT' });
        },
        signUp: () => {
            // setUserToken('fgkj');
            // setIsLoading(false);
        },
        toggleTheme: () => {
            setIsDarkTheme( isDarkTheme => !isDarkTheme );
        }
    }), []);    

    useEffect(() => {
        setTimeout(async() => {
            // setIsLoading(false);
            let userToken;
            userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch(e) {
                console.log(e);
            }
            // console.log('user token: ', userToken);
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
        }, 1000);
    }, []);

    if( loginState.isLoading ) 
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large"/>
            </View>
        );
    
    return (
        <PaperProvider theme={theme}>
            <AuthContext.Provider value={AuthProvider}>
                <RootNavigation theme={theme} isAuthenticated={loginState.userToken !== null}/>
            </AuthContext.Provider>
        </PaperProvider>
    );
};

export default RootContainer;