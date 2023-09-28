import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Card = ({image, name, handlePress, item}) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => handlePress(item)}
    >
      <Image src={image} style={styles.cardImage} />
      <Text style={styles.cardName}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Card;
