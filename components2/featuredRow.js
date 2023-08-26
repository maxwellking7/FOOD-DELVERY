import { View,Text, ScrollView } from "react-native";
import React, { useEffect,useState } from "react";
import {s} from "react-native-wind"
import {ArrowRightIcon} from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";
export default  function FeaturedRow({id,title,description}){

    const[restaurants,setRestaurants]=useState([]);
    useEffect(()=>{
sanityClient.fetch(` 
*[_type=="featured" && id==$id]{
    ...,
    restaurants[]->{
      ...,
      dishes[]->,
      type->{ 
        name
    }
    },
  }[0],
  {id}
`).then(data=>{
    setRestaurants(data?.restaurants);
})
    },[id])
    
    return(
        <View>
            <View style={s`mt-4 flex-row items-center justify-between px-4`}>
                <Text style={s`font-bold text-lg`}>{title}</Text>
               <ArrowRightIcon color="00CCBB"/>
            </View>
 <Text style={s`xs text-gray-500 px-4 `}>{description}</Text>
 <ScrollView 
 horizontal
 contentContainerStyle={{
    paddingHorizontal:15
 }}
 showsHorizontalScrollIndicator={false}
 style={s`pt-4`}
 >
{/* RestaurantCard */}
{restaurants?.map(restaurant=>{
    <RestaurantCard
    key={restaurant._id}
id={restaurant._id}
title={restaurant.name}
ImgUrl={restaurant.image}
rating={restaurant.rating}
address={restaurant.address}
short_description={restaurant.short_description}
genre={restaurant.type?.name}
dishes={restaurant.dishes}
long={restaurant.long}
lat={restaurant.lat}

/>

})}

 <RestaurantCard
id={123}
title="Cake"
ImgUrl ={require("../assets/mixed2.jpg")}
rating={4.5}
address='145 main street'
short_description='this is a test description'
genre='Ghanaian'
dishes='Banku'
long={20}
lat={0}

/>
<RestaurantCard
id={123}
title="Cake"
ImgUrl={require("../assets/mixed2.jpg")}
rating={4.5}
address='145 main street'
short_description='this is a test description'
genre='Ghanaian'
dishes='Banku'
long={20}
lat={0}

/>
<RestaurantCard
id={123}
title="Cake"
ImgUrl={require("../assets/mixed2.jpg")}
rating={4.5}
address='145 main street'
short_description='this is a test description'
genre='Ghanaian'
dishes='Banku'
long={20}
lat={0}

/> 

 </ScrollView>
        </View>  
    )
} 