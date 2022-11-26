import react,{useState} from 'react'
import { TextInput,StyleSheet,View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "../../asset/color";
export const InputCont=({name,secure,icon,borderColor,textColor})=>{
    const [inputToggle,setInputToggle]=useState(false);
    
    return(
    <View style={styles.cont}>
    <TextInput
     placeholder={name?name:'name'}
     placeholderTextColor={textColor?textColor:colors.secondary}
     style={{...styles.input,
        borderColor:borderColor?borderColor:colors.secondary}}
        secureTextEntry={secure}
     />
    {icon&&<TouchableOpacity style={styles.iconCont} onPress={()=>setInputToggle(!inputToggle)}>
     <Icon name={icon} size={20} color={inputToggle?colors.third:colors.secondary}/>
     </TouchableOpacity>}
    </View>
    )
}

const styles=StyleSheet.create({
    cont:{
     width:'100%',
     flexDirection:'row',
     alignItems:'center',
    },
    iconCont:{
      height:50,
      width:30,
      marginLeft:-35,
      alignItems:'center',
      justifyContent:'flex-end'
    },
    input:{
    width:'100%',
    height:50,
    borderWidth:1,
    marginTop:20,
    borderRadius:12,
    padding:10,
    fontSize:16,
    }
})