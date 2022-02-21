import { StatusBar } from 'expo-status-bar';

import { FlatList, StyleSheet, View } from 'react-native';
import Header from './components/Header';

import {colors} from  './styles/constants';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.cardBackground} translucent={true} style="dark" />
      <Header label="Kind Words" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});
