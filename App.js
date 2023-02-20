import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#341401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f55" },
          }}
        >
          <Stack.Screen
            name="Meals Categories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
              // headerStyle:{ backgroundColor: "#341401" }, // we can add this on navigator to apply style for all screens
              // headerTintColor: "white",
              // contentStyle:{backgroundColor:"#3f2f55"}
            }}
          />
        
          <Stack.Screen
            name="Meals Overview"
            component={MealsOverviewScreen}
            // options={({route,navigation})=>{ // there is an alternative for this approach instea of this we set option inside the component
            //   const catId = route.params.categoryId;
            //   return {
            //     title:catId,
            //   };
            // }}
          />

        <Stack.Screen name="Meals Detail Screen" component={MealsDetailsScreen} 
          // options={{headerRight:()=>{
          // return <Button title="Tap Me!" onPress={}/> here if you want to interact with this screen component , we have toright this options on the screen instead of here
         //}}}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
