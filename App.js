import * as React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home"
import IssLocationScreen from './screens/IssLocation';
import MeteorsScreen from './screens/Meteors';

const Stack=createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="IssLocation" component={IssLocationScreen}/>
        <Stack.Screen name="Meteors" component={MeteorsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}
export default App;