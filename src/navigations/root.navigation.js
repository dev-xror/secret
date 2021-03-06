import React from 'react';

import { 
  NavigationContainer
} from '@react-navigation/native';

import AppNavigation from './app.navigation';
import AuthNavigation from './auth.navigation';

const RootNavigation = ({theme, isAuthenticated}) => {
  return (
    <NavigationContainer theme={theme}>
      { 
        isAuthenticated === true ? <AppNavigation theme={theme}/> : <AuthNavigation theme={theme}/>
      }
    </NavigationContainer>
  );
}

export default RootNavigation;
