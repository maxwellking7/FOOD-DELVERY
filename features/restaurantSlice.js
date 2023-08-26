import {createSlice} from '@reduxjs/toolkit'
const initialState={
    restaurant:{

        id:null,
        Imgurl:null,
        title:null,
        rating:null,
        address:null,
        short_description,
        dishes:null,
    }
}
export const basketSlice=createSlice({
    name:'restaurant',
    initialState,
    reducers:{
setRestaurant:(state,action)=>{
    state.restaurant = action.payload
}
      
        
    },//action creators are creatd for each
})
export const {addToBasket,removeFromBasket}=restaurantSlice.actions
export const selectRestaurant =state=>state.restaurant.restaurant;

export default restaurantSlice.reducer;