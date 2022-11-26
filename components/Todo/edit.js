import { View,StyleSheet, Dimensions, TextInput, ScrollView } from "react-native"
import { colors } from "../../asset/color"
import { InputCont } from "../Input"
import { ButtonCont2 } from "../Button/btn2"
export const EditTodo=()=>{
    return(
<View style={style.cont}>
 <ScrollView style={{marginBottom:55}}>
 <InputCont 
  secure={false} 
  name="Title" 
  textColor={"#fff"} 
  borderColor={"#fff"}
  />
  <View style={style.descCont}>
    <TextInput
    placeholderTextColor={'#fff'}
    style={{...style.descInput,textAlignVertical:'top'}}
    placeholder="Description"
    multiline={true}
    editable={true}
    numberOfLines={23}
    />
  </View>
  <InputCont 
  textColor={"#fff"}
  borderColor={"#fff"}
  name="Deadline (optional)"
  icon="calendar"
  iconColor="#fff"
  />
  <InputCont
  textColor={"#fff"}
  borderColor={"#fff"}
  name="Add Image (optional)"
  icon="image"
  iconColor="#fff"
  />
  <ButtonCont2 name={"Edit Todo"}/>
 </ScrollView>

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
         marginTop:20
    },
    descInput:{
        width:'100%',
        borderWidth:1,
        borderColor:'#fff',
        color:'#fff',
        borderRadius:12,
        padding:10,
    }
})