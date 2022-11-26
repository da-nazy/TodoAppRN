
import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Signin from './components/pages/Signin/Signin';
import Signup from './components/pages/Signup';
import Changepassword from './components/pages/ChangePassword';
import { HomePage } from './components/pages/HomePage';
import { CreateTodo } from './components/Todo';
import { EditTodo } from './components/Todo/edit';
import Custombtm from './components/Util/Custombtm';
export default function App() {
  const editTodoRef=useRef(null);

  return (
    <View style={styles.container}>
     <HomePage/>

    
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
