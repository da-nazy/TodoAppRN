import { View,StyleSheet, Dimensions, TextInput } from "react-native"
import { colors } from "../../asset/color"
import { InputCont } from "../Input"
export const CreateTodoList=()=>{
    return(
<View style={style.cont}>
  <InputCont 
  secure={false} 
  name="Title" 
  textColor={"#fff"} 
  borderColor={"#fff"}
  />
  <View style={style.descCont}>
    <TextInput
    placeholderTextColor={'#fff'}
     style={style.descInput} placeholder="Description" multiline={true}/>
  </View>
</View>
    )
}

const style=StyleSheet.create({
    cont:{
        padding:20,
        height:Dimensions.get('screen').height,
        backgroundColor:colors.primary,
        width:'100%'
    },
    descCont:{
         width:'100%',
         minHeight:400,
         marginTop:20,
        
    },
    descInput:{
        width:'100%',
        height:400,
        borderWidth:1,
        borderColor:'#fff',
        color:'#fff',
        borderRadius:12,
        padding:10,
        alignItems:'flex-start'
    }
})