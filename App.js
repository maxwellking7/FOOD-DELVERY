import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View } from 'react-native';
import { Home,Restaurant,Order } from './screen'; 
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screen/Home';
import RestaurantScreen from './screen/RestaurantScreen';

const Stack = createNativeStackNavigator();
 function App(){
  return(
    <NavigationContainer>
      <Provider store={store}>
         
     
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Basket" component={BasketScreen} 
        options={{presentation:"modal",headerShown:false}}
        />
        <Stack.Screen name="Preparing Order Screen" component={PreparingOrderScreen} 
        options={{presentation:"FullScreen modal",headerShown:false}}
        />
        <Stack.Screen name=" Delivery Screen " component={Delivery Screen} 
        options={{presentation:"FullScreen modal",headerShown:false}}
        />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
  }
export default App;
