import React,{useState,useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { colors } from '../../asset/color';
export default function Custombtm({displayComp,cod,copm,btmRef,height}){
    
return(
    <RBSheet
    dragFromTopOnly={true}
    ref={btmRef}
    closeOnDragDown={cod}
    closeOnPressMask={copm}
    openDuration={12}
    height={height}
    
  
    customStyles={{
        wrapper: {
            backgroundColor: "transparent"
        },
        draggableIcon: {
            backgroundColor:'#fff',
            width:100
        },
        container: {
            backgroundColor: colors.primary,
            
        }
    }}
>
    {displayComp()}
    
   </RBSheet>
)
}