import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainTabs } from "./BottomTabsNavigator";
import QuestionPage from "./Components/QuestionPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs">
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="question"
          component={QuestionPage}
          options={{
            headerShown: true,
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
