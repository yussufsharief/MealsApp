import { StyleSheet, Text, View } from "react-native";

function MealDetail({duration,complexity,affordability,textStyle}) {
  return(

      <View style={styles.details}>
    <Text style={[styles.detilItem,textStyle]}>{duration}m</Text>
    <Text style={[styles.detilItem,textStyle]}>{complexity.toUpperCase()}</Text>
    <Text style={[styles.detilItem,textStyle]}>{affordability.toUpperCase()}</Text>
  </View>
      )
}

export default MealDetail;

const styles = StyleSheet.create({details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detilItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },});
