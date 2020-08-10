import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';

import { MainScreen, SettingsScreen } from './screens';
import { withTheme, ThemeContextProvider } from './theme/themeProvider';

const Tab = createBottomTabNavigator();

const MyTabs = withTheme(
  ({ theme }) => {
    const customTabBarStyle = {
      activeTintColor: theme.backgroundColor,
      allowFontScaling: true,
      labelStyle: {
        fontSize: 20
      },
      tabStyle: { paddingTop: 5 },
      style: { height: 60, borderTopColor: theme.color },
    }
    return (
      <Tab.Navigator
        tabBarOptions={customTabBarStyle}
      >
        <Tab.Screen
          name="Home"
          component={MainScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused, color, size }) => (
              <Feather
                name="home"
                focused={focused}
                color={color}
                size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Feather
                name="settings"
                focused={focused}
                color={color}
                size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
)

export default () => {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </ThemeContextProvider>
  );
}
