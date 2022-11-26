import { TouchableOpacity,Text,StyleSheet } from "react-native"
import { colors } from "../../asset/color"

export const ButtonCont=({name})=>{
    return(
        <TouchableOpacity style={style.inputCont}>
            <Text style={style.txt}>{name?name:'Sign In'}</Text>
        </TouchableOpacity>
    )
}

const style=StyleSheet.create({
    inputCont:{
    width:'100%',
    height:50,
    backgroundColor:colors.primary,
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
    },
    txt:{
     color:'#fff',
     fontSize:14,
     fontWeight:'500',
     fontFamily:'Montserrat'
    }
})