import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Category from '../Category/Category';
import SubCategories from '../Sub-Categories/SubCategories';
import Items from '../Items/Items';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Categories' component={Category}/>
      <Stack.Screen name='SubCategories' component={SubCategories}/>
      <Stack.Screen name='Items' component={Items}/>
    </Stack.Navigator>
  )
}

export default HomeStack