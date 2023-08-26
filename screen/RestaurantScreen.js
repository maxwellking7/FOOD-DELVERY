import {View,Text, ScrollView,Image, TouchableOpacity}  from "react-native"
import React, { useEffect, useLayoutEffect } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import {s} from "react-native-wind"
import { ArrowLeftIcon, QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components2/DishRow";
import BasketIcon from "../components2/restaurantIcon";
import {useDispatch} from 'react-redux'; 
import {setRestaurant} from '../features/restaurantSlice'

export default  function RestaurantScreen (){
    const navigation=useNavigation();
    const dispatch =useDispatch()
    const {
        params:{
            id,
            Imgurl,
            title
            ,rating
            ,genre
            ,address
            ,short_description
            ,dishes
            ,long
            ,lat
        }
    }=useRoute();
    useEffect(()=>{
        dispatch(setRestaurant({
            id,
            Imgurl,
            title
            ,rating
            ,genre
            ,address
            ,short_description
            ,dishes
            ,long
            ,lat

        }))
    })
    useLayoutEffect(()=>{
        Navigation.setOptions({
            headerShown:false,
        },[])
    })
    return(
        <>
        <BasketIcon />
        <ScrollView>
        <View style={s`relative`}>
           <Image 
           source={{url:urlFor(Imgurl).url}}
           style={s`w-full h-50 bg-gray-300 p-4`}
          />
          <TouchableOpacity
          onPress={navigation.goBack}
           style={s`absolute top-14 left-5 bg-gray-100 rounded-full`}>
            <ArrowLeftIcon  size={30} color="#00CCBB"/>
          </TouchableOpacity>
        </View>

        <View style={s`bg-white`}>
            <View style={s`px-4 pt-4`}>
             <Text style={s`text-3xl font-bold`} >{title}</Text>
                <View style={s`flex-row space-x-2 my-1`}>
                    <View style={s`flex-row item-center space-x-1`}> 
                    <StarIcon  color="green" opacity={0.5} size={22} />
                    <Text style={s`text-xs text-gray-500`}>
                     <Text style={s`text-green-500 `}>{rating}</Text>.{genre}
                        </Text>
                     </View>
                    <View style={s`flex-row item-center space-x-1`}> 
                    <LocationMarkerIcon  color="gray " opacity={0.5} size={22} />
                     <Text style={s`text-green-500 `}>Nearby.{address}</Text>
                       
                     </View>
                </View>
                <Text style={s`text-gray-500 pt-2 pb-4`}>{short_description}</Text>
            </View> 
            <TouchableOpacity style={s`flex-row items-center space-x-2 p-4 border-y border-gray-300`}>
            <QuestionMarkCircleIcon  color="gray" size={30}opacity={0.3} />
            <Text style={s`pt-2 text-md font-bold`}>Have a nice day</Text>
        </TouchableOpacity>  
        </View>
        <View style={pb-4}>
            <Text style={s`px-4 pt-6 font-bold text-xl` }>Menu</Text>
            {/* dishes */}
            {dishes.map(dish=>{
                <DishRow 
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                Imgurl={dish.image}
                />
              
            })}
        </View>
        </ScrollView>
        </>
    )

} 