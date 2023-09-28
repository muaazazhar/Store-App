import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "../../Components/Header/Header";
import Body from "../../Components/Body/Body";
import { items } from "../../Constants/data";
import styles from "./styles";
import ItemModal from "../../Components/ItemModal/ItemModal";
import Card from "../../Components/Card/Card";

const SubCategory = ({ route }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [item, setItem] = useState(null);

  const handlePress = (item) => {
    setIsVisible((prev) => !prev);
    setItem(item);
  };
  return (
    <View style={{ flex: 1 }}>
      <Header text={"Items"} />
      <Body flex={1} wantElevation={false}>
        <Text style={styles.headerText}>{route.params.subCategory.name}</Text>
        <ScrollView contentContainerStyle={styles.mainContainer}>
          {items.map((item, i) => (
            <Card
              key={i}
              image={item.image}
              name={item.name}
              handlePress={handlePress}
              item={item}
            />
          ))}
        </ScrollView>
        {item && (
          <ItemModal
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            item={item}
          />
        )}
      </Body>
    </View>
  );
};

export default SubCategory;
