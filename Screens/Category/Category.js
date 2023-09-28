import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "../../Components/Header/Header";
import Body from "../../Components/Body/Body";
import { categories } from "../../Constants/data";
import styles from "./styles";
import Card from "../../Components/Card/Card";

const Category = ({ navigation }) => {
  const handlePress = (Category) => {
    navigation.navigate("SubCategories", { Category });
  };
  return (
    <View style={{ flex: 1 }}>
      <Header text={"Categories"} />
      <Body flex={1} wantElevation={false}>
        <Text style={styles.headerText}>Sab Saman</Text>
        <ScrollView contentContainerStyle={styles.mainContainer}>
          {categories.map((category, i) => (
            <Card
              key={i}
              name={category.name}
              image={category.image}
              handlePress={handlePress}
              item={category}
            />
          ))}
        </ScrollView>
      </Body>
    </View>
  );
};

export default Category;
