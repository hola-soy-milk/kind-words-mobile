import {useState} from 'react';
import { TextInput, Button } from 'react-native';

const renderItem = item => <PostList post={item.item} />

import {colors} from  '../..//styles/constants';
import { StatusBar } from 'expo-status-bar';

import Header from '../Header';
import { StyleSheet, View } from "react-native";
export default () => {
  const [name, onSetName] = useState("");
  const [body, onSetBody] = useState("");
  const [handle, onSetHandle] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.cardBackground}
        translucent={true}
        style="dark"
      />
      <Header label="Kind Words" />
      <FlatList
        style={styles.list}
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.createdAt}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  container: {
    height: "100%",
    backgroundColor: colors.background,
  },
});
