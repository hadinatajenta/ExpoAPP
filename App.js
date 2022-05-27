import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons ,AntDesign } from '@expo/vector-icons'; 

//local
import Stack from './Components/src/stack';
import Indonesia from './Components/src/tag';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerTitleAlign: 'left',
        headerShown : false
      }}
      
    >
      <Tab.Screen name="News" component={Stack} 
        options={{
        tabBarIcon:()=>(
        <Ionicons name="newspaper-outline" size={24} color="black" />)
        ,headerTitle:'Breaking News'
        }}
      />
      <Tab.Screen name="Kategori" component={Indonesia}
        options={{
        tabBarIcon:()=>(
        <AntDesign name="tagso" size={24} color="black" />)
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
