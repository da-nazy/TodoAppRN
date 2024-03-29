import { View,StyleSheet,Dimensions ,Text,ScrollView} from "react-native"
import { ButtonCont2 } from "../Button/btn2"
export const DeleteTodo=({cancel})=>{
    return(
   <View style={style.cont}>
   <ScrollView contentContainerStyle={style.subCont}>
   <View style={style.actionBtn}>
    <ButtonCont2 name={"Delete Todo"}/>
    <ButtonCont2 func={()=>cancel()} name={"Cancel"} txtColor={'rgba(0, 255, 25, 0.5)'}/>
   </View>
   </ScrollView>
   </View>
    )
}

const style=StyleSheet.create({
    cont:{
   height:Dimensions.get('screen').height,
   width:Dimensions.get('screen').width,
   backgroundColor:'rgba(0, 0, 0, 0.5)',
   justifyContent:'flex-end',
   position:'absolute',
   zIndex:5,
   bottom:0,
   flex:1,
   top:0,
   paddingBottom:20
    },
    subCont:{
     flex:1,
     height:Dimensions.get('screen').height,
     flexDirection:'column',
     justifyContent:'flex-end'
    },
    txt:{
        width:'100%'
    },
    actionBtn:{
       width:'100%',
       minHeight:230,
       padding:20
    }
})