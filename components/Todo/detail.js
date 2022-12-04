import react,{useState,useRef} from 'react';
import { View,StyleSheet,Dimensions,TouchableOpacity,Text } from "react-native"
import Icon  from "react-native-vector-icons/FontAwesome5";
import { EditTodo } from './edit';
import Custombtm from '../Util/Custombtm';
import { DeleteTodo } from "./delete";
export const TodoDetail=({navigation})=>{
    const [toggleDelete,setToggleDelete]=useState(false);
    const editTodoRef=useRef();
    const editTodo=()=>{
      editTodoRef.current.open();
    }
  
    const AppIcon=({iconName,func})=>{
  return(
    <TouchableOpacity onPress={()=>func&&func()}>
    <Icon name={iconName} size={20} color={"#272727"}/>
   </TouchableOpacity>
    )
    };
    return(
        <View style={style.cont}>
       <View style={style.head}>
        <AppIcon iconName="angle-left" func={()=>navigation.navigate('Homepage')}/>
       <View style={style.actionBtn}>
       <AppIcon iconName="clock"/>
       <AppIcon iconName="pen" func={()=>editTodo()}/>
       <AppIcon iconName="trash-alt" func={()=>setToggleDelete(true)}/>
       </View>
       </View>
       <View style={style.body}> 
        <Text style={style.name}>
        Design Logo
        </Text>
        <Text style={style.desc}>
        Make logo for the mini project
        </Text>
       </View>
       <View style={style.foot}>
        <Text style={style.txtfoot}>
        Created at 1 Sept 2021
        </Text>
       </View>

       <Custombtm 
        displayComp={()=><EditTodo/>} 
        btmRef={editTodoRef} 
        height={Dimensions.get('screen').height}
         cod={true} copm={true}/>

       {toggleDelete&&<DeleteTodo cancel={()=>setToggleDelete(false)}/>}
        </View>
    )
}

const style=StyleSheet.create({
    cont:{
    height:Dimensions.get('screen').height,
    width:'100%',
    paddingTop:30,
    paddingLeft:10,
    paddingRight:10,
    flexDirection:'column',
    },
    head:{
     width:'100%',
     height:40,
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center'
    },
    actionBtn:{
        flexDirection:'row',
        minWidth:90,
        justifyContent:'space-evenly',
      
    },
    body:{
        minHeight:300,
        width:'100%',
        marginTop:20
    },
    name:{
        fontWeight:'400',
        fontSize:26,
        fontFamily:'Bebas Neue',
        marginBottom:24
    },
    desc:{
     fontSize:16,
     fontWeight:'400',
     fontFamily:'Montserrat',
     minHeight:50
    },
    foot:{
        flexDirection:'row',
        justifyContent:'center',
        position:'absolute',
        width:'100%',
        bottom:0,
        marginBottom:40
       
    },
    txtfoot:{
        fontSize:14,
     fontWeight:'400',
     fontFamily:'Montserrat',  
    }


})