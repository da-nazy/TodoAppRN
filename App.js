
import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './components/pages/Signin/Signin';
import Signup from './components/pages/Signup';
import Changepassword from './components/pages/ChangePassword';
import { HomePage } from './components/pages/HomePage';
import { CreateTodo } from './components/Todo';
import { EditTodo } from './components/Todo/edit';
import { TodoDetail } from './components/Todo/detail';
export default function App() {
  const Stack=createStackNavigator();
  return (
  
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name="Signin"
      component={Signin}
     options={{headerShown:false}}
      />
        <Stack.Screen
      name="Signup"
      component={Signup}
      options={{headerShown:false}}
      />
        <Stack.Screen
      name="Changepassword"
      component={Changepassword}
      options={{headerShown:false}}
      />
        <Stack.Screen
      name="Homepage"
      component={HomePage}
      options={{headerShown:false}}
      />
        <Stack.Screen
      name="Tododetail"
      component={TodoDetail}
      options={{headerShown:false}}
      />
    </Stack.Navigator>
   </NavigationContainer>
 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
