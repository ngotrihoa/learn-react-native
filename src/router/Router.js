import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScreenNavigation } from "../common/const";
import {
  BirthDayScreen,
  GenderScreen,
  HomeScreen,
  OriginScreen,
  SignInScreen,
  SignupScreen,
} from "../screen";

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNavigation.HOME}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={ScreenNavigation.HOME}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNavigation.SIGN_IN}
          component={SignInScreen}
          options={{ title: ScreenNavigation.SIGN_IN, presentation: "modal" }}
        />
        <Stack.Screen name={ScreenNavigation.GENDER} component={GenderScreen} />
        <Stack.Screen name={ScreenNavigation.SIGNUP} component={SignupScreen} />
        <Stack.Screen name={ScreenNavigation.ORIGIN} component={OriginScreen} />
        <Stack.Screen
          name={ScreenNavigation.BIRTH_DAY}
          component={BirthDayScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
