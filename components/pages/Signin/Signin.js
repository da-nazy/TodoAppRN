import React from 'react'
import { View,Text ,StyleSheet,Image, TouchableOpacity,ScrollView} from 'react-native'

import { colors } from '../../../asset/color';
import todologo from '../../../asset/image/todologo.png';
import { InputCont } from '../../Input';
import { ButtonCont } from '../../Button/btn';
export default function Signin({navigation}) {
  return (
   <ScrollView  contentContainerStyle={styles.cont} >
    <Image resizeMode='cover'  source={todologo} style={styles.img}/>
    <View style={{...styles.inputCont}}>
    <InputCont name={"Email"} secure={false}/>
    <InputCont name={"password"} secure={true} icon={"eye-slash"}/>
    <TouchableOpacity styles={styles.fpCont}>
    <Text style={styles.fp}> Forgot Password?</Text>
    </TouchableOpacity>

    <ButtonCont func={()=>navigation.navigate('Homepage')} name="Sign in"/>

    <View style={styles.signTxtCont}>
      <Text style={styles.dhaTxt}>Don't have an account? </Text>
      <TouchableOpacity style={styles.signupCont} onPress={()=>navigation.navigate('Signup')}>
        <Text style={styles.suTxt}>Sign up</Text>
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
      display:'flex',
      flex:1,
      justifyContent:'center'
    },
    fpCont:{
      flexDirection:'row',
      borderWidth:1,
      height:50,
      width:'100%',
    },
    fp:{
      marginTop:10,
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