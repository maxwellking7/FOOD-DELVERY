import React, { useEffect, useLayoutEffect,useState } from "react";
import { View,Text,SafeAreaView, TextInput ,Image, ScrollView, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components2/categories";
import {ChevronDownIcon,UserIcon,AdjustmentsVerticalIcon,SearchIcon} from "react-native-heroicons/outline";
import FeaturedRow from "../components2/featuredRow";
import {s} from "react-native-wind";
import client from "../sanity"

 export default function HomeScreen() {
   const navigation=useNavigation();
 const [featuredCategory,setfeaturedCategory]=useState([]) 
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    
    },[]) 
useEffect(()=>{
  client.fetch(
    `
    *[_type== "featured"]{
      ...,restaurants[]->{
        ...,dishes[]->
      }
        } `
  ).then(data=>{
    setfeaturedCategory(data)
  })
},[] )

    return(
      <SafeAreaView style={s`bg-white pt-5`}>

      <View style={s`flex-row pb-3 items-center mx-4 space-x-2 `}>
        <Image 
        source={require('../assets/mixed2.jpg')}
        style={s`h-7 w-7 bg-gray-300 p-4 rounded-full`}
        />
        <View style={s`flex-1`}>
         <Text style={s`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
         <Text style={s`font-bold text-xl`}>Current Location
         <ChevronDownIcon  size={15}  />
         </Text>
                </View >
          <UserIcon size={30} color='#00CCBB' style={{paddingTop:25}}/>          
            </View> 

            <View style={s`flex-row items-center space-x-2 pb-2 mx-4  `}>
         <View style={s`flex-row flex-1 space-x-2 bg-gray-200 `}>
          {/* <SearchIcon  color="gray" size={20}/> */}
           <TextInput  placeholder="Restaurants and cuisines" keyboardType="default" />
         </View>            
          <AdjustmentsVerticalIcon  color='#00CCBB'/>
         </View> 
       {/* content  */}
         <ScrollView  style={s`bg-gray-100 `}
         contentContainerStyle={{
          paddingBottom:100
    }}>   

          <Categories />
{featuredCategory?.map(category=>{
    
       <FeaturedRow  key={category._id}
       id={category._id}
        title={category.name}  
         description={category.short_description}
       featuredCategory={category.name}
        />

 })}
        <FeaturedRow title="Amazing Discounts" 
        description="Enjoy amazing discounts" 
        featuredCategory="discounts" 
        id='2' 
        />

        <FeaturedRow title="Offers for You"  
         description="We give you the best of offers "
        featuredCategory="offers"
        id='3'
         />

    
       </ScrollView>
      
     </SafeAreaView>  
       )   
}








