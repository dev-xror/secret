import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Discover from '../../containers/Discover';
import ComingSoon from '../../containers/ComingSoon';
import Following from '../../containers/Following';

const {  
  Navigator,
  Screen
} = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Navigator
      initialRouteName="Following"
      activeColor="#fff"
    >
      <Screen
        name="Following"
        component={Following}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="heart-outline" color={color} size={22}/>
          ),
        }}
      />
      <Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="compass-outline" color={color} size={22} />
          ),
        }}
      />
      <Screen
        name="Browse"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="copy-outline" color={color} size={22} />
          ),
        }}
      />
    </Navigator>
);

export default MainTabScreen;