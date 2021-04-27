import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SupportScreen from '../containers/SupportScreen';
import SettingsScreen from '../containers/SettingsScreen';
import BookmarkScreen from '../containers/BookmarkScreen';
import { DrawerContent } from '../containers/DrawerContent';
import MainStack from './cards/main.stack';
const Drawer = createDrawerNavigator();

const AppNavigation = ({theme}) => (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainStack} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
    </Drawer.Navigator>
);

export default AppNavigation;