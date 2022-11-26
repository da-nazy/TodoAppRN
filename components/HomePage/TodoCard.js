import React from 'react'
import { View,StyleSheet, TouchableOpacity,Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../asset/color';
export default function TodoCard({isActive,name,desc,time,icon,func}) {
  return (
     <TouchableOpacity 
     onPress={()=>func&&func()}
     style={{...style.cont,backgroundColor:isActive?colors.third:colors.primary}}>
      <View style={style.headCont}>
        <Text style={style.descTxt}>{name?name:'Design Logo'}</Text>
       {isActive&&<TouchableOpacity>
            <Icon name={icon?icon:"clock"} size={20} color={"#fff"}/>
        </TouchableOpacity>}
      </View>
      <View style={style.descCont}>
        <Text style={style.desTxt}>{desc?desc:'Make logo for the mini project'} </Text>
      </View>
      <View style={style.foot}>
       <Text style={style.footTxt}>
       Created at{time?time:'1 Sept 2021'}
       </Text>
      </View>
    </TouchableOpacity>
  )
}

const style=StyleSheet.create({
    cont:{
        height:130,
        borderRadius:12,
        paddingHorizontal:14,
        paddingVertical:6,
        marginTop:20

    },
    headCont:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%',
    },
    descCont:{
      minHeight:65,
      width:'100%',
      marginTop:5
    },
    desTxt:{
        fontWeight:'400',
        fontSize:14,
        fontFamily:'Montserrat',
        color:'#fff'
    },
    descTxt:{
      color:'#fff',
      fontWeight:'700',
      fontSize:16,
      fontFamily:'Montserrat',

    },
    foot:{
    minHeight:40
    },
    footTxt:{
        color:'#fff',
        fontWeight:'500',
        fontSize:12,
        fontFamily:'Montserrat',
    }
})