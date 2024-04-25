import {
  StackNavigationOptions,
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {FC} from 'react';
import {COLORS} from '../Component/Constant/Color';
import Home from '../Screen/Home';
import SingleChat from '../Screen/Home/SingleChat';
import AllUser from '../Screen/User/AllUser';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  cardStyle: {backgroundColor: COLORS.button},
  gestureEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
  gestureDirection: 'horizontal', // Override gestureDirection if needed
};

export const AppStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="Home"
      // headerMode="none"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllUser" component={AllUser} />
      <Stack.Screen name="SingleChat" component={SingleChat} />
    </Stack.Navigator>
  );
};
