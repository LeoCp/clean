import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import { Home } from '@domain/home';
import { Bookmarks } from '@domain/bookmarks';
import { Collections } from '@domain/collections';
import { Settings } from '@domain/settings';
import { TTabIcon } from '@routes/main/types/TTabIcon';
import { colors } from '@theme/colors';
import { TRoute } from '@routes/types/TRoute';
import { Navigation } from '@constants/navigation';

const Tab = createBottomTabNavigator();

export const getTabOptions = (
  iconName: TTabIcon,
): BottomTabNavigationOptions => ({
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.gray,
  tabBarIcon: ({ focused }) => {
    const color = focused ? colors.primary : colors.gray;
    return <Icon color={color} name={iconName} size={22} />;
  },
});

const screenOptions = {
  ...Navigation.SCREEN_OPTIONS,
  tabBarShowLabel: false,
};

export function Main() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={TRoute.HOME}
        component={Home}
        options={getTabOptions('home')}
      />
      <Tab.Screen
        name={TRoute.BOOKMARKS}
        component={Bookmarks}
        options={getTabOptions('bookmark')}
      />
      <Tab.Screen
        name={TRoute.COLLECTIONS}
        component={Collections}
        options={getTabOptions('grid')}
      />
      <Tab.Screen
        name={TRoute.SETTINGS}
        component={Settings}
        options={getTabOptions('settings')}
      />
    </Tab.Navigator>
  );
}
