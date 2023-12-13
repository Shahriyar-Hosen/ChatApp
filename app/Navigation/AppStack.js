import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import {COLORS} from '../Component/Constant/Color';
import Home from '../Screen/Home';
import SingleChat from '../Screen/Home/SingleChat';
import AllUser from '../Screen/User/AllUser';
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: COLORS.button},
        gestureEnabled: true,
        backgroundColor: COLORS.button,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="Home"
      headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllUser" component={AllUser} />
      <Stack.Screen name="SingleChat" component={SingleChat} />
    </Stack.Navigator>
  );
}
