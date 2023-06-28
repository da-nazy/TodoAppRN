import React from 'react'
import { View,Text ,StyleSheet,Image, TouchableOpacity, ScrollView} from 'react-native'

import { colors } from '../../../asset/color';
import todologo from '../../../asset/image/todologo.png';
import { InputCont } from '../../Input';
import { ButtonCont } from '../../Button/btn';
export default function Signup({navigation}) {
  return (
   <ScrollView contentContainerStyle={styles.cont}>
    <Image  source={todologo} style={styles.img}/>
    <View style={{...styles.inputCont}}>
    <InputCont name={"Email"} secure={false}/>
    <InputCont name={"Full Name"} secure={false}/>
    <InputCont name={"Password"} secure={true} icon={"eye-slash"}/>
    <InputCont name={"Confirm Password"} secure={true} icon={"eye-slash"}/>
    <ButtonCont name={'Sign up'}/>
    <View style={styles.signTxtCont}>
      <Text style={styles.dhaTxt}>Have an account? </Text>
      <TouchableOpacity style={styles.signupCont} onPress={()=>navigation.navigate('Signin')}>
        <Text style={styles.suTxt}>Log In</Text>
      </TouchableOpacity>
    </View>
    </View>
   </ScrollView>
  )
}

const styles=StyleSheet.create({
    cont:{
      width:'100%',
      minHeight:500,
      padding:20,
      alignItems:"center",
      justifyContent:'center',
      flex:1
    },
    fpCont:{
      flexDirection:'row',
      
      height:50,
      width:'100%'
    },
    fp:{
      marginTop:20,
      color:colors.secondary,
      textDecorationStyle:'underline',
       alignSelf:'flex-end'
    },
    img:{
    width:150,
    height:150
    
    },
    txt:{
        fontFamily:'serif'
    },
    inputCont:{
      width:'100%'
    },
    signTxtCont:{
      flexDirection:'row',
      width:'100%',
      height:50,
      marginTop:15,
      justifyContent:'center'
    },
    signupCont:{
      marginLeft:10
    },
    dhaTxt:{
    color:colors.secondary,
    fontFamily:'serif',
    fontSize:12,
    fontWeight:'500'
    },
    suTxt:{
      color:colors.primary,
      fontFamily:'serif',
      fontSize:12,
      fontWeight:'500'
    }
})