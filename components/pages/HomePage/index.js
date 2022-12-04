import react,{useRef} from 'react'
import { View,ScrollView, Dimensions,StyleSheet,Text,Image, TouchableOpacity} from "react-native"
import { colors } from "../../../asset/color";
import Icon from 'react-native-vector-icons/FontAwesome5';
import menu from '../../../asset/image/menu.png'
import TodoCard from "../../HomePage/TodoCard";
import Custombtm from "../../Util/Custombtm";
import { CreateTodo } from '../../Todo';
import { EditTodo } from '../../Todo/edit';
export const HomePage=({navigation})=>{
    const editTodoRef=useRef(null);
    const createTodoRef=useRef(null);
    const openEditTodo=()=>{
        editTodoRef.current.open(); 
    }
    const openCreateTodo=()=>{
        createTodoRef.current.open();
    }
    return(
        <View 
        style={style.cont}
        >
        <View style={style.settingCont}>
            <Text style={style.tdTxt}>TO DO LIST</Text>
             <TouchableOpacity>
             <Icon name="cog" size={20} color={"black"}/>
             </TouchableOpacity>
        </View>
        <View style={style.listTodoCont}>
            <View style={style.lisTodo}><Image source={menu}/><Text style={style.lsTxt}>LIST OF TODO</Text>
             </View>
            <TouchableOpacity>
            <Icon name="filter" size={20} color={colors.third}/>
           </TouchableOpacity>

        </View>
        <ScrollView>
            <TodoCard  name ="David" isActive={true} func={()=>navigation.navigate('Tododetail')}/>
            <TodoCard isActive={false} func={()=>navigation.navigate('Tododetail')}/>
        </ScrollView>
        <TouchableOpacity style={style.fabCont} onPress={()=>openCreateTodo()}>
            <Icon name={'plus'} size={30} color={'#fff'}/>
        </TouchableOpacity>
        <Custombtm 
        displayComp={()=><CreateTodo/>} 
        btmRef={createTodoRef} 
        height={Dimensions.get('screen').height}
         cod={true} 
         copm={true}/>
         
       
        </View>
    )
}

const style=StyleSheet.create({
    fabCont:{
      width:50,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:colors.third,
      position:'absolute',
      bottom:0,
      right:0,
      marginRight:20,
      marginBottom:30
    },
    todoCont:{
     marginTop:20
    },
    cont:{
     height:Dimensions.get('screen').height,
     width:'100%',
     padding:20
    },
    settingCont:{
    height:50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
   
    },
    tdTxt:{
       fontSize:30 ,
       fontWeight:'500',
       color:colors.primary
    },
    listTodoCont:{
    flexDirection:'row',
     height:50,
     justifyContent:'space-between',
     alignItems:'center',
     marginTop:30
    },
    lisTodo:{
        flexDirection:'row',
        alignItems:'center'
    },
    lsTxt:{
        fontSize:30,
        fontWeight:'600',
        marginLeft:10,
        color:colors.third
    }
})