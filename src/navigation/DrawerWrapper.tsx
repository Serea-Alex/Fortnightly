import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Fonts from '../global/Fonts';
import Colors from '../global/Colors';
import {SCREENS} from '../global/Utils';
import {FRONT_SCREEN_TITLE} from '../global/Strings';

import MainNavigator from './MainNavigator';

const Drawer = createDrawerNavigator();

const DrawerWrapper = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={SCREENS.FRONT}>
        <Drawer.Screen
          name={FRONT_SCREEN_TITLE}
          component={MainNavigator}
          options={{
            headerShown: false,
            drawerActiveTintColor: Colors.black,
            drawerLabelStyle: {
              ...Fonts.medium16LF,
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerWrapper;
