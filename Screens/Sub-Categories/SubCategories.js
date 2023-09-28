import React, { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "../../Components/Header/Header";
import Body from "../../Components/Body/Body";
import { subCategories } from "../../Constants/data";
import styles from "./styles";
import Card from "../../Components/Card/Card";

const SubCategory = ({ navigation, route }) => {
  const handlePress = (subCategory) => {
    navigation.navigate("Items", { subCategory });
  };
  return (
    <View style={{ flex: 1 }}>
      <Header text={"SubCategories"} />
      <Body flex={1} wantElevation={false}>
        <Text style={styles.headerText}>{route.params.Category.name}</Text>
        <ScrollView contentContainerStyle={styles.mainContainer}>
          {subCategories.map((subCategory, i) => (
            <Card
              key={i}
              name={subCategory.name}
              image={subCategory.image}
              handlePress={handlePress}
              item={subCategory}
            />
          ))}
        </ScrollView>
      </Body>
    </View>
  );
};

export default SubCategory;
