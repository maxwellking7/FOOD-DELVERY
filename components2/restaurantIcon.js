import {View ,Text, TouchableOpacity} from "react-native"
 import React from "react";
import {useSelector} from "react-redux";
import { selectBasketItems ,selectBasketTotal} from "../features/basketSlice";
import {useNavigation} from "@react-navigation/native"
import Currency from "react-currency-formatter";
const   BasketIcon = ()=>{
    const items =useSelector(selectBasketItems)
    const navigation = useNavigation();
    const basketTotal=useSelector(selectBasketTotal);
    if (items.length === 0) return null

    return(
        <View style={s`absolute bottom-10 w-full  z-50`}>
            <TouchableOpacity  onPress={()=>navigation.navigate('Basket')} style={s`bg-green p-4 rounded-lg flex-row items-center space-x-1 `}>
               <Text>{items.length}</Text> 
               <Text style={s`flex-1 text-white font-extrabold bp-[#1A2968]text-lg `}>View Basket</Text>
               <Text style={s`text-lg text-white font-extrabold text-lg bg-blue py-1 px-2`}>
                <Currency quantity={basketTotal} currency="GHC" />
               </Text>
            </TouchableOpacity>
        </View>
    )
}
export default BasketIcon