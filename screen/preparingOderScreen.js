import {View,Text} from 'rect-native'
import React, { useEffect, useSyncExternalStore } from "react"
import * as Animable from "react-native-animable"
import { useNavigation } from '@react-navigation/native'
export default PreparingOrderScreen=()=>{
    const navigation=useNavigation()
    useEffect(()=>{
        setTimeOut (()=>{
          navigation.navigate('Delivery')   
        })
    })
    return(
       <ScrollView style={s`bg-blue flex-1 justify-content items-center`}>
        <Animable.Image
        source={require("..assets/orderLoading.gif")}
        iteratinCount={1}
        style={s`h-96 w-96`}
        
        />
        <Animable.Text
       iteratinCount={1}
       style={s`text-lg my-10 text-white font-bold text-center`}
        
        >Waiting for Restaurant to accept your order
        </Animable.Text>
        <ProgressEvent.Circle size={30} indeterminate={true}  color="white"/>



       </ScrollView>
       
    )
}