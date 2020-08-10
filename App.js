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
      inactiveTintColor: 'gray',
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

      /*    screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              const icons = {
                Home: 'home',
                Settings: 'settings',
              };
    
              return (
                <Feather
                  name={icons[route.name]}
                  color={color}
                  size={size}
                />
              );
            },
          })}*/
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
                color={focused ? theme.backgroundColor : 'gray'}
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
                color={focused ? theme.backgroundColor : 'gray'}
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
