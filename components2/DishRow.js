import {View,Text, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import {useDispatch} from "react-redux";
import { addToBasket,selectBasketItems, selectBasketItemsWithId  } from '../features/basketSlice';

export default  DishRow = ({
  id,name,description,price,image
})=>
{
    const items=useSelector( (state)=>selectBasketItemsWithId(state,id))
    const [IsPressed,setIsPressed] =useState(false)
    const dispatch=useDispatch();
    const addToBasket=()=>{
        dispatch(addToBasket(id,name,description,price,image))
    }
    const removeFromBasket=()=>{
        dispatch(removeFromBasket(id,name,description,price,image))
    }
    
    return(
        <>
       <TouchableOpacity onPress={()=>setIsPressed(IsPressed)}style={s`bg-white border p-4 border-gray-200`}>
        <View style={s`flex-row `}>
        <View style={s`flex-1 pr-2`}>
    
            <Text style={s`text-lg mb-1 `}>{name}</Text>
             <Text style={s`text-gray-400`}>{description}</Text>
             <Text style={s`text-gray-400 pt-2`}>
                <Currency quantity={price} currency="GHC"/>
            </Text>
        </View>


        
        <View>
            <Image
            style={{
                borderWidth:1,
                borderColor:"#F3F3F4"
            }}
            
            source={{url:urlFor(image).url()}} />
        </View>
        </View>
       </TouchableOpacity>
   {IsPressed && (
    <View style={s`bg-white px-4`}>
        <View style={s`flex-row items-center space-x-2 ${IsPressed && 'broder-b-2' }`}>
            <TouchableOpacity>
            <MinusCircleIcon 
           
            size={40}/>
            </TouchableOpacity>

            <Text>{items.length}</Text>
            <TouchableOpacity>
            <PlusCircleIcon 
onPress={addToBasket}
            size={40}/>
            </TouchableOpacity>
        </View>
    </View>
   )}
       </>
    )
}