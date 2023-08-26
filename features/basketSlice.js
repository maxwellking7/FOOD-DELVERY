import {createSlice} from '@reduxjs/toolkit'
const initialState={
    items:[],
}
export const basketSlice=createSlice({
    name:'basket',
    initialState,
    reducers:{

        addToBasket:(state,action) => {
            state.items = {...state.items,action.payload}
        },
       removeFromBasket :(state,action) =>{
          const index=state.items.findIndex((items) =>items.id === action.payload.id)
          let newBasket=[...state.items];
          if(state >= 0){
            newBasket.splice(index,1)
          }else{
            console.warn(`cant remove product id :${action.paylload} as it's not in the basket`)  
          }
        },
        
    },//action creators are creatd for each
})
export const {addToBasket,removeFromBasket}=basketSlice.actions
export const selectBasketItems =state=>state.basket.items;
export const selectBasketItemsWithId=(state,id) => {state.basket.items.filter(items=>items.id === id )}
export const selectBasketTotal=(state)=>state.basket.items.reduce((total)=>total +=item.price,0)

export default basketSlice.reducer;