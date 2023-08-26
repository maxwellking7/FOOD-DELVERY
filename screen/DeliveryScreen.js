import {View,Text, TouchableOpacity} from "react-native"
import React from "react";
import {useSelector} from "react-redux"
import { SafeAreaView } from "react-native-safe-area-context"
import {XIcon} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { Marker } from "react-native-svg";
 
const DeliveryScreen=()=>{
    const  navigation = useNavigation()
    const restaurant =useSelector(selectRestaurant);
    return
    (
        <View> 
           
           <SafeAreaView>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("Home ")}>
                    <XIcon color="white" />
                </TouchableOpacity>
                <Text>Order help </Text>
            </View>
            <View style={s`bg-white mx-5 my-5 rounded-md p-6 `}>
                <Text style={s`text-lg text-gray-400`}>Extended Arrival</Text>
                <Text>45-55 Minutes</Text>
                <Image 
                source={{uri:'https//links.papareact.com/fls'}}
            style={s`h-26 w-26`}
            />
            </View>
            <Text style={s`mt-3 text-gray-500`}>
        Your order at {restaurant.title} is being prepared

            </Text>
           
           </SafeAreaView>
           <MapView 
           initialRegion={{
            latitude:restaurant.lat,
            longitude:restaurant.long,
            longitudeDelta:0.05

           }}
           style={s`flex-1 mt-10 x-2`}
           mapType="mutedStandard"
           
           >

           </MapView>
            </View>
    )
}
export default DeliveryScreen