import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FrontScreen from '../screens/FrontScreen';
import ArticleScreen from '../screens/ArticleScreen';
import FullArticleScreen from '../screens/FullArticleScreen';

import {SCREENS} from '../global/Utils';
import {RootStackParamList} from '../global/Types';

const StackNavigator = createStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name={SCREENS.FRONT}
        component={FrontScreen}
        options={{headerShown: false}}
      />

      <StackNavigator.Screen
        name={SCREENS.ARTICLE}
        component={ArticleScreen}
        options={{headerShown: false}}
      />

      <StackNavigator.Screen
        name={SCREENS.FULL_ARTICLE}
        component={FullArticleScreen}
        options={{headerShown: false}}
      />
    </StackNavigator.Navigator>
  );
};

export default MainNavigator;
