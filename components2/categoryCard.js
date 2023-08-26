import React from "react";
import {Text,TouchableOpacity,Image } from "react-native";
import {s} from "react-native-wind"
export default function CategoryCard({ImgUrl,title}){
    return(
   <TouchableOpacity style={s`relative mr-2`}>
      <Image 
      source={{uri:ImgUrl}} style={s`h-20 w-20 rounded`} 
      
      />
  <Text style={s`absolute bottom-1 left-1 text-white font-bold`}>{title}</Text>
  </TouchableOpacity>
// {/* <ScrollView>
//     <Text>Category Card</Text>
// </ScrollView> */}
  
    );
}
