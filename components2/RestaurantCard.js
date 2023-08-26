import React from "react";
import { View ,Text, TouchableOpacity,Image} from "react-native";
import {s} from "react-native-wind"
import { StarIcon } from "react-native-heroicons/solid";
import {LocationMarkerIcon} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard=(
     { id,
          title,
          ImgUrl,
          rating,
          address,
          short_description,
          genre,
          dishes,
          long,
          lat}
     )=>{
     const navigation = useNavigation();
    
     return(
        <TouchableOpacity 
        onPress={()=>{
          navigation.navigate('Restaurant',{
               id,
               ImgUrl,
               title,
               rating,
               genre,
               address,
               short_description,
               dishes,
               long,
               lat
          })
        }}
        style={s`bg-white mr-3 shadow`}>
    <Image
    source={{uri:urlFor(photo).url()}}
    style={s`h-36 w-64 rounded-sm `}
    />
    <View style={s`px-3 pb-4`}>
     <Text style={s`font-bold text-lg pt-2`}>{title}</Text>
     <View style={s`flex-row items-center space-x-1`}>
     <StarIcon color='green' opacity={0.5} size={22}/>
     <Text style={s`text-xs text-gray-500`}>
          <Text style={s`text-green-500`}>{rating}</Text> . {genre}
     </Text>

    </View>
    
    <View style={s`flex-row items-center space-x-1` }>
     {/* <LocationMarkerIcon opacity={0.4} color="gray" size={22}/> */}
     <Text style={s`text-gray-500`}>Nearby . {address}</Text>
    </View>
    </View>
    </TouchableOpacity>
     );
};
export  default  RestaurantCard