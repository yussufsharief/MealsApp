import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import {Ionicons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator  screenOptions={{
      headerStyle: { backgroundColor: "#341401" },
      headerTintColor: "white",
      sceneContainerStyle: { backgroundColor: "#3f2f55" },
      drawerContentStyle:{backgroundColor:'teal'},
      drawerActiveTintColor:'white',
      drawerActiveBackgroundColor:'#3fcf65'
    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
              title: "All Categories",
              drawerIcon:({color,size})=><Ionicons name="list" color={color} size={size}/>
            }}/>
      <Drawer.Screen name="favorites" component={FavoritesScreen} options={{
              title: "Favorites",
              drawerIcon:({color,size})=><Ionicons name="star" color={color} size={size}/>
            }}/>
    </Drawer.Navigator>
  );
}
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
            component={DrawerNavigator}
            options={{
              title: "All Categories",
              headerShown:false
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

          <Stack.Screen
            name="Meals Detail Screen"
            component={MealsDetailsScreen}
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
