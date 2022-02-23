import {useState} from 'react';
import { FlatList } from 'react-native';
import PostList from '../PostItem';

const renderItem = item => <PostList post={item.item} />

import {colors} from  '../..//styles/constants';
import { StatusBar } from 'expo-status-bar';

import Header from '../Header';
import { StyleSheet, View } from "react-native";
export default () => {
  const [posts, setPosts] = useState([
    {sender: "Ramon", handle: "hola_soy_milk", body: "You're awesome!", createdAt: new Date()},
    {sender: "Pearl", handle: "punk_rock_swords", body: "Affluent!", createdAt: new Date()},
    {sender: "Garnet", handle: "stronger_than_u", body: "An experience!", createdAt: new Date()},
  ]);
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
