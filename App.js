import PostListScreen from './components/screens/PostListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="PostList" component={PostListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
