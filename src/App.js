// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bitcoin from './screens/Bitcoin';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="bitcoin"
          options={{
            headerShown: true,
            title: 'Bitcoin',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
          }}
          component={Bitcoin}
        />
      </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}

export default App;