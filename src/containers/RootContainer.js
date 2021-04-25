import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { 
    Provider as PaperProvider
} from 'react-native-paper';

import { AuthContext } from '../context/authContext';
import AuthProvider from '../providers/authProvider';
import RootNavigation from '../navigations/root.navigation';

import AsyncStorage from '@react-native-community/async-storage';

import authReducer from './reducers/authReducer';

import {
    CustomDarkTheme,
    CustomDefaultTheme
} from './theme';  

const RootContainer = () => {
    // const [isLoading, setIsLoading] = React.useState(true);
    // const [userToken, setUserToken] = React.useState(null); 

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null
    };

    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

    const [loginState, dispatch] = React.useReducer(authReducer, initialLoginState);

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