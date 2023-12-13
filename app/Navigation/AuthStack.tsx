import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import React, {FC} from 'react';
import {COLORS} from '../Component/Constant/Color';
import Login from '../Screen/Auth/Login';
import Register from '../Screen/Auth/Register';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  cardStyle: {backgroundColor: COLORS.button},
  gestureEnabled: true,
  // backgroundColor: COLORS.button,
  ...TransitionPresets.SlideFromRightIOS,
  gestureDirection: 'horizontal',
};

export const AuthStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="Login"
      // headerMode="none"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
