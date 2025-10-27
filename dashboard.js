import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './pages/Homepage';
import RegisterPage from './pages/Registerpage';
import ReviewPage from './pages/Reviewpage';

const Stack = createNativeStackNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomePage} 
          options={{ title: 'Home Page' }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterPage} 
          options={{ title: 'Register' }}
        />
        <Stack.Screen 
          name="Review" 
          component={ReviewPage} 
          options={{ title: 'Review' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
