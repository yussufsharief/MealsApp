import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function MealItem({ title, imageUrl }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200,
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18
    }
})
