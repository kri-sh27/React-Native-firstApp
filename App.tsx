import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={Style.container}>
      <Text style={isDarkMode ? Style.whiteText : Style.darkText}>
        HoLLo world
      </Text>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});

export default App;
