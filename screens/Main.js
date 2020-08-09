import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>MAIN PART</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});