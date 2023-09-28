import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../Constants/colors";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/action";

const ItemModal = ({ isVisible, setIsVisible, item, cart }) => {
  const [quantity, setQuantity] = useState(cart ? item.quantity : 1);
  const [totalPrice, setTotalPrice] = useState( cart ? item.price * item.quantity : item.price);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  const handleMinusQuantity = () => {
    setQuantity((prev) => prev - 1);
    setTotalPrice((prev) => prev - item.price);
  };
  const handlePlusQuantity = () => {
    setQuantity((prev) => prev + 1);
    setTotalPrice((prev) => prev + item.price);
  };
  const addItemToCart = () => {
    setIsVisible(false);
    dispatch(addToCart({ ...item, quantity }));
  };

  useEffect(() => {
    if (quantity === 0) {
      setDisabled(true);
      setIsVisible(false)
      if(cart) dispatch(removeFromCart(item.id))
    } else {
      setDisabled(false);
    }
  }, [quantity]);

  return (
    <Modal
      isVisible={isVisible}
      swipeDirection="down"
      onBackdropPress={() => setIsVisible(false)}
      onSwipeComplete={(e) => {
        setIsVisible(false);
      }}
      style={styles.modal}
    >
      <View style={styles.container}>
        <View style={styles.dragBar}></View>
        <Image src={item.image} style={styles.modalImage} />
        <Text>{item.name}</Text>
        <View style={styles.quantityContainer}>
          <View style={styles.quantityWrapper}>
            <Text style={styles.quantityText}>Quantity </Text>
            <Text style={styles.quantityText}>{quantity.toString()}</Text>
          </View>
          <View style={styles.quantityButtonWrapper}>
            <TouchableOpacity
              style={{
                ...styles.quantityButton,
                borderColor: disabled ? colors.lightGray : "black",
              }}
              disabled={disabled}
              onPress={handleMinusQuantity}
            >
              <Icon
                name="minus"
                style={{
                  ...styles.quantityIcon,
                  color: disabled ? colors.lightGray : "black",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={handlePlusQuantity}
            >
              <Icon name="plus" style={styles.quantityIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.totalPriceWrapper}>
          <Text style={styles.priceText}>Total: </Text>
          <Text style={styles.priceText}>Rs. {totalPrice}</Text>
        </View>
        <TouchableOpacity
          style={{
            ...styles.modalButton,
            backgroundColor: disabled ? colors.grey : colors.bg,
          }}
          disabled={disabled}
          onPress={addItemToCart}
        >
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ItemModal;
