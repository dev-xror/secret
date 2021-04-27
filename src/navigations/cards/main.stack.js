import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import MainTab from './main.tab';

import {
  Avatar,
  OnlineStatus
} from '../../components/Common/Avatar';

const HomeStack = createStackNavigator();

const MainStack = ({navigation}) => {
  const { colors } = useTheme();
  const [fontColor, setFontColor] = useState("black");
  useEffect(() => {
    setFontColor(colors.text);
  }, [colors]);

  return (
    <HomeStack.Navigator screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: colors.background
        }
    }}>
    <HomeStack.Screen name="Home" component={MainTab} options={{
      title: null,
      headerLeft: () => (
          <Avatar onPress={() => navigation.openDrawer()}  style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <Icon name="person-outline" size={25} color={fontColor}></Icon>
            <OnlineStatus />
          </Avatar>
      ),
      headerRight: () => (
        <View style={{flexDirection:"row"}}>
            <Icon.Button name="notifications-outline" size={25} backgroundColor="transparent" color={fontColor}/>            
            <Icon.Button name="chatbox-outline" size={25} backgroundColor="transparent" color={fontColor}></Icon.Button>
            <Icon.Button name="search-sharp" size={25} backgroundColor="transparent" color={fontColor}></Icon.Button>
        </View>
      )
    }} />
</HomeStack.Navigator>
)};

export default MainStack;
  