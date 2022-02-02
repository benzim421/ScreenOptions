import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Options from "../screens/Options";
import Options2 from "./Options2";
import Options3 from "./Options3";
import Options4 from "./Options4";
import Options5 from "./Options5";
import Options6 from "./Options6";
import Options7 from "./Options7";
import Options8 from "./Options8";
import Options9 from "./Options9";
import Options10 from "./Options10";
import Options11 from "./Options11";
import Options12 from "./Options12";

export const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="The Beginning" component={Options} />
    <MainStack.Screen name="The Lit Up Door" component={Options2} />
    <MainStack.Screen name="Exploration" component={Options3} />
    <MainStack.Screen name="Gold Collection" component={Options4} />
    <MainStack.Screen name="The Portal" component={Options5} />
    <MainStack.Screen name="The Jump" component={Options6} />
    <MainStack.Screen name="The Beam" component={Options7} />
    <MainStack.Screen name="Death" component={Options8} />
    <MainStack.Screen name="The Good Portal" component={Options9} />
    <MainStack.Screen name="The Bad Portal" component={Options10} />
    <MainStack.Screen name="The Throw" component={Options11} />
    <MainStack.Screen name="The Sprint to Safety" component={Options12} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
