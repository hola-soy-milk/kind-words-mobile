import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

import {colors} from  './styles/constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Header label="Kind Words" />
      <StatusBar backgroundColor={colors.cardBackground} translucent={true} style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});
