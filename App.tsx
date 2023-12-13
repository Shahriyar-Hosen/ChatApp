import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {COLORS} from './app/Component/Constant/';
import {AppStack, AuthStack} from './app/Navigation';
import {Navigation, RootParamList} from './app/Service/Navigation';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer
      ref={(r: NavigationContainerRef<RootParamList>) =>
        Navigation.setTopLevelNavigator(r)
      }>
      <Stack.Navigator
        // headerMode="none"
        detachInactiveScreens={false}
        initialRouteName="Auth"
        screenOptions={{
          cardStyle: {backgroundColor: COLORS.white},
          gestureEnabled: true,
          // backgroundColor: COLORS.button,
          ...TransitionPresets.SlideFromRightIOS,
          gestureDirection: 'horizontal',
        }}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
