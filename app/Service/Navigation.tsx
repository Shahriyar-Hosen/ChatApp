import {
  CommonActions,
  DrawerActions,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

// Define your RootParamList if not already defined
export type RootParamList = {
  Home: undefined;
  AllUser: undefined;
  SingleChat: undefined;
  Login: undefined;
  Register: undefined;
  AppStack: undefined; // Add this line
  // Add other screens as needed
};

let _navigator: NavigationContainerRef<RootParamList> | null = null;

function setTopLevelNavigator(r: NavigationContainerRef<RootParamList>) {
  _navigator = r;
}

function navigate<K extends keyof RootParamList>(
  routeName: K,
  params?: RootParamList[K],
) {
  _navigator?.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
}

function replace<K extends keyof RootParamList>(
  routeName: K,
  params?: RootParamList[K],
) {
  // _navigator?.dispatch(
  //   StackActions.replace({
  //     name: routeName,
  //     params: params,
  //   }),
  // );
  _navigator?.dispatch(StackActions.replace(routeName, params));
}

function openDrawer() {
  _navigator?.dispatch(DrawerActions.openDrawer());
}

function closeDrawer() {
  _navigator?.dispatch(DrawerActions.closeDrawer());
}

function back() {
  _navigator?.dispatch(CommonActions.goBack());
}

export const Navigation = {
  navigate,
  setTopLevelNavigator,
  openDrawer,
  closeDrawer,
  back,
  replace,
};
