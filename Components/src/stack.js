import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//import from local
import HomeScreen from './home';
import Deskripsi from './deskripsi'
import indonesia from './tag'
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator   
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown : false
      }}
    >
      <Stack.Screen 
        name="usNews "
        component={HomeScreen}
        />
      <Stack.Screen 
        name="idNews "
        component={indonesia}
        /> 
      <Stack.Screen 
        name="Detail" 
        component={Deskripsi} 
        />
    </Stack.Navigator>
  );
}

