import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

//import from local
import Kategori from "./Kategori";
import Business from "./Bisnis";
import Entertainment from './Entertein';
import Science from './Science';
import Technology from './Technology';
import Health from './Health';
import Sports from './Sports';

const Stack = createStackNavigator();

export default function Tag(){
  return(
    <Stack.Navigator screenOptions={{headerShown : false}} >
      <Stack.Screen name="Kategori" component={Kategori}/>
      <Stack.Screen name="Business" component={Business}/>
      <Stack.Screen name="Entertainment" component={Entertainment} />
      <Stack.Screen name="Science" component={Science} />
      <Stack.Screen name="Technology" component={Technology}/>
      <Stack.Screen name="Health" component={Health}/>
      <Stack.Screen name="Sports" component={Sports}/>
    </Stack.Navigator>
  );
}