import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../containers/SplashScreen';
import SignInScreen from '../containers/SignInScreen';
import SignUpScreen from '../containers/SignUpScreen';

const RootStack = createStackNavigator();

const AuthNavigation = ({theme}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </RootStack.Navigator>
);

export default AuthNavigation;