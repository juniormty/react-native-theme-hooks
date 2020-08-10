import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
 
import { themes, theme } from '../theme/themeProvider';

const SettingScreen = () => {
  renderItem = ({ item }) => (
    <TouchableOpacity>
      <View
        style={[
          style.itemContainer,
          {
            backgroundColor: item.backgroundColor,
          },
        ]}
      >
        <Text style={[style.itemText, { color: item.color }]}>{item.key}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={style.container}
      ListHeaderComponent={
        <Text style={[style.headline, { color: theme.backgroundColor }]}>
          Choose your theme:
        </Text>
      }
      data={themes}
      renderItem={renderItem}
    />
  );
};
export default SettingScreen;

const style = StyleSheet.create({
  container: { flex: 1 },
  headline: {
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 20,
    fontWeight: '200',
    fontSize: 24,
  },
  itemContainer: {
    height: 100,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  itemText: { fontWeight: 'bold' },
});