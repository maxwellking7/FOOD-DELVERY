import {View,Text, TouchableOpacity, ScrollView} from "react-native"
import React, { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../features/restaurantSlice";
import { removeFromBasket, selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import {useDispatch} from 'react-redux'; 
import { SafeAreaView } from "react-native-safe-area-context";


const  BasketScreen=()=>{
    const navigation = useNavigation()
    const restaurant =useSelector(selectRestaurant);
    const items=useSelector(selectBasketItems)
    const basketTotal=useSelector()
    const dispatch=useDispatch(selectBasketTotal);
    useEffect(()=>{

    })
    useEffect(()=>{
const  groupeditems=items.reduce(()=>{
   (results[item.id]=results[item.id] || []).push(item)
   return results 
},{});
setGroupedItemsInBasket(groupeditems)
    },[items]
    
    )
    
    return (
        <SafeAreaView style={s`flex-1 bg-white`} > 
        <View  style={s`flex-1 bg-gray-100`}>
            <View style={s`p-5 border-b text-gray-400`}>
                <View>
                <Text style={s`text-lg font-bold text-center`}>Basket</Text>
    <Text style={s`text-center text-gray-400`}>{restaurant.title}</Text>
                </View>
                <TouchableOpacity onPress={navigation.goBack }
                style={s`rounded-full bg-gray-100 bsolute top-3 right-5 `}
                >

                </TouchableOpacity>
            </View>
    <View style={s`flex-row items-center space-x-4 px-4 py-3 bg-white my-5`}>
        <Image source={require('myimage.jpg')} 
        style={s`h-7 w-7 bg-gray-300 p-4 rounded-full `}
        />
        <Text style={s`flex-1 `}>Deliver in 54-75 min</Text>
        <TouchableOpacity>
            <Text style={s`text-[#00CCBB]`}>change</Text>
        </TouchableOpacity>
    </View>
    <ScrollView style={s`divide-gray-200`}>
        {Object.entries(setGroupedItemsInBasket).map((key,items)=>{
            <View key={key} style={s`flex-row items-center space-x-2 py-2 px-5 bg-white`}>
<Text>{items.length}</Text>
<Image  
source={{uri:urlFor(items[0]?.image).url() }}
style={s`h-10 w-10 rounded-full`}
/>
<Text style={s`flex-1`}>{items[0]?.name}</Text>
<Text style={s`text-lg text-white font-extrabold text-lg bg-blue py-1 px-2`}>
                <Currency quantity={items[0]?.price} currency="GHC" />
               </Text>
               <TouchableOpacity>
<Text style={s`text-[#00CCBB]`}
onPress={()=>dispatch(removeFromBasket({id:key}))}
>
 Remove   
</Text>
               </TouchableOpacity>
            </View>
        })}
    </ScrollView>
    <View style={s`p-5 bg-white pt-6 space-y-4`}>
        <View style={s`flex-row justify-between`}>
            <Text style={s`text-gray-400`}>Subtotal</Text>
            <Text style={s`text-gray-400`} >
            <Currency quantity={items[0]?.price} currency="GHC" />   
            </Text>
        </View>
        <View style={s`flex-row justify-between`}>
            <Text style={s`text-gray-400`}>Order  total</Text>
            <Text style={s`text-gray-400`} >
            <Currency quantity={5.99} currency="GHC" />   
            </Text>
        </View>
        <TouchableOpacity onPress={navigation.navigate("PreparingOrderScreen")} style={s`rounded-lg bg-green p-4`}>
            <Text style={s`text-center text-white text-lg font-bold `}>Place Order</Text>
        </TouchableOpacity>
    </View>
        </View>
        </SafeAreaView>
    )
}
export default BasketScreen