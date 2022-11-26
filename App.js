import { StatusBar } from 'expo-status-bar';
import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Signin from './components/pages/Signin/Signin';
import Signup from './components/pages/Signup';
import Changepassword from './components/pages/ChangePassword';
import { HomePage } from './components/pages/HomePage';
import { CreateTodoList } from './components/CreateTodoList';
export default function App() {
  return (
    <View style={styles.container}>
     <CreateTodoList/>
    </View>
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
