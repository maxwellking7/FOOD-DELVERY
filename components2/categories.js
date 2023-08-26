import React, { useEffect ,useState} from "react";
import { View ,Text, TouchableOpacity,ScrollView } from "react-native";
import CategoryCard from "./categoryCard";
import client,{urlFor} from "../sanity";



export default function Categories(){
  const[categories,setCategories]=useState([]);
  useEffect(()=>{
    client.fetch(` 
    *[_type=="category" ]
    `).then((data)=>{
     setCategories(data) ;
    })
  },[])
    return(
    <ScrollView
      contentContainerStyles={{
        paddingTop:10,
        padingHorizontal:15,
        padding:50
      }}
      horizontal 
      showsHorizontalScrollIndicator={false}
      >
        {categories.map((category)=>(
          
           <CategoryCard   
           key={category._id}
           ImgUrl={urlFor(category.image).width(200).url()} 
            title={category.name} />
        ))}
        
        {/* <CategoryCard  ImgUrl={require("../assets/food.jpg")} title="testing2" />
        <CategoryCard ImgUrl={require("../assets/yummy.jpg")}  title="testing3" />
        <CategoryCard  ImgUrl={require("../assets/pie.jpg")}    title="testing4" />
        <CategoryCard ImgUrl={require("../assets/sweet.jpg")}  title="testing5" />
        <CategoryCard  ImgUrl={require("../assets/mixed2.jpg")}  title="testing5" />
        <CategoryCard  ImgUrl={require("../assets/sweet.jpg")}  title="testing5" />
        <CategoryCard  ImgUrl={require("../assets/plate.jpg")}  title="testing5" />
        <CategoryCard  ImgUrl={require("../assets/kitchen.jpg")}  title="testing5" /> */}
  {/* <Text>Categories Hello</Text> */}
  </ScrollView>
  
    );
}
 