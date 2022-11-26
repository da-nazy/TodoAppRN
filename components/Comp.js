import {View,Text} from 'react-native';

export default function Comp(){
    return(
<View>
<Text>
  Daniels component  
</Text>
</View>
    )
}
export function Comp1(props){
    
    return(
        <View>
            <Text> {props.name} Daniels Second component</Text>
        </View>
    )
}
export function Comp2({name,age,setName}){
    return(
        <View>
            <Text>Daniels third component</Text>
        </View>
    )
}