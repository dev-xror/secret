import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import ExploreScreen from '../../containers/ExploreScreen';
import ProfileScreen from '../../containers/ProfileScreen';
import HomeScreen from '../../containers/HomeScreen';
import DetailsScreen from '../../containers/DetailsScreen';
const {  
  Navigator,
  Screen
} = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Screen
        name="Following"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="heart-outline" color={color} size={22}/>
          ),
        }}
      />
      <Screen
        name="Discover"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="compass-outline" color={color} size={22} />
          ),
        }}
      />
      <Screen
        name="Browse"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="copy-outline" color={color} size={22} />
          ),
        }}
      />
    </Navigator>
);

export default MainTabScreen;