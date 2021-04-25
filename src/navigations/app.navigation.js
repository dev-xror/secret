import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './cards/mainTab.navigation';
import SupportScreen from '../containers/SupportScreen';
import SettingsScreen from '../containers/SettingsScreen';
import BookmarkScreen from '../containers/BookmarkScreen';
import { DrawerContent } from '../containers/DrawerContent';

const Drawer = createDrawerNavigator();

const AppNavigation = () => (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
    </Drawer.Navigator>
);

export default AppNavigation;