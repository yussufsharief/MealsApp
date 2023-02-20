import { useLayoutEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import MealDetail from "../components/MealDetail";
import { MEALS } from "../data/dummy-data";

function MealsDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealsId;
  const mealDetails = MEALS.find((meal) => meal.id === mealId);
  useLayoutEffect(() => {
    navigation.setOptions({ title: "Meal Detail",headerRight:()=>{
        return <IconButton onPress={headerButtonPressHandler}/>
    } });
  }, []);
  function headerButtonPressHandler(){
    console.log("zoop");
  }
  return (
    <ScrollView>
      <View style={styles.detailContainer}>
        <Image style={styles.image} source={{ uri: mealDetails.imageUrl }} />
        <MealDetail
          duration={mealDetails.duration}
          complexity={mealDetails.complexity}
          affordability={mealDetails.complexity}
          textStyle={styles.detailText}
        />
        <View style={styles.ingDetails}>
          <Text style={styles.header}>Ingredients</Text>
          </View>
          <View style={styles.subDetails}>

          {mealDetails.ingredients.map((element, index) => {
              return (
                  <Text
                  style={[styles.detailText,{fontWeight:'bold'}]}
                  key={index}
                  >
                {element}
              </Text>
            );
        })}
        </View>
        
        <View style={styles.steps}>
          <Text style={styles.header}>Steps</Text>
          </View>
          <View style={styles.subDetails}>
            
          {mealDetails.steps.map((element, index) => {
              return (
                  <Text
                  style={[styles.detailText,{fontWeight:'bold'}]}
                  key={index}
                  >
                {element}
              </Text>
            );
        })}
        </View>
       
      </View>
    </ScrollView>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  ingDetails: {
    margin:4,
    padding:6,
    borderBottomColor:'white',
    borderBottomWidth:2,
    marginVertical:4
  },
  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign:'center',
   
  },
  steps: {
    margin:4,
    padding:6,
    borderBottomColor:'white',
    borderBottomWidth:2,
    marginVertical:4
  },
  image: {
    width: "100%",
    height: 350,
  },
  detailText:{
    color:"white",
  },
  subDetails:{
    borderRadius:2,
    margin:8,
    padding:6
  }
});
