import { TouchableOpacity,Text,StyleSheet } from "react-native"
import { colors } from "../../asset/color"

export const ButtonCont2=({name,txtColor})=>{
    return(
        <TouchableOpacity style={style.inputCont}>
            <Text style={{...style.txt,color:txtColor?txtColor:colors.third}}>{name?name:'Sign In'}</Text>
        </TouchableOpacity>
    )
}

const style=StyleSheet.create({
    inputCont:{
    width:'100%',
    height:50,
    backgroundColor:'#fff',
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginBottom:10
    },
    txt:{
     color:'#fff',
     fontSize:14,
     fontWeight:'500',
     fontFamily:'Montserrat'
    }
})