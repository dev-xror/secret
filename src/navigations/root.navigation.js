import React from 'react';

import { 
  NavigationContainer
} from '@react-navigation/native';
import RootStackScreen from './navigation/RootStackScreen';

import AppNavigation from './app.navigation';


const RootNavigation = ({theme, isAuthenticated}) => {
  return (
    <NavigationContainer theme={theme}>
      { 
        isAuthenticated === true ? <AppNavigation/> : <RootStackScreen/>
      }
    </NavigationContainer>
  );
}

export default RootNavigation;
