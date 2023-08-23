// import React from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   StyleSheet,
//   useColorScheme,
// } from 'react-native';

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={Style.container}>
//       <Text style={isDarkMode ? Style.whiteText : Style.darkText}>
//         HoLLo world
//       </Text>
//     </View>
//   );
// };

// const Style = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',

//   },
//   whiteText: {
//     color: '#FFFFFF',
//   },
//   darkText: {
//     color: '#000000',
//   },
// });

// export default App;
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevetedCards from './components/ElevetedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevetedCards />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
