import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


import { withTheme } from '../theme/themeProvider';


export default withTheme( 
  ({ theme }) => {
    return (
      <View 
        style={[
          styles.container, 
          { backgroundColor: theme.backgroundColor }
          ]}
      >
        <Text selectable style={[styles.paragraph,{ color: theme.color }]}>
        Main screen sample. {"\n"}
        color: {"\n"}
        <Text selectable style={{color: theme.color}}>{theme.color}</Text> {"\n"}
        background color: {"\n"}
        <Text selectable style={{backgroundColor: theme.color, color: theme.backgroundColor}}>{theme.key}</Text> {"\n"}
        <Text selectable style={{backgroundColor: theme.color, color: theme.backgroundColor}}>{theme.backgroundColor}</Text> {"\n"}
        {"\n"}
        ---- ###### ###### ----
      </Text>
      <Card style={{ backgroundColor: theme.color }}>
        <Text
          style={[{
            fontSize: 60,
            marginVertical: 50,
            textAlign: "center",
            fontWeight: "bold"
          },
           { color: theme.backgroundColor }]}>
          MAIN
        </Text>
      </Card>
    </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
