import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";
import styles from "./styles";
import ItemModal from "../../Components/ItemModal/ItemModal";

const Cart = () => {
  const { items } = useSelector((state) => state.cartReducer);
  const [item, setItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [total, setTotal] = useState(0);

  const handleItem = (item) => {
    setItem(item);
    setIsVisible(true);
  };

  useEffect(() => {
    let temp = 0;
    items.forEach((element) => {
      temp += element.price * element.quantity;
    });
    setTotal(temp);
  }, [items]);

  return (
    <View style={{ flex: 1 }}>
      <Header text={"Cart"} />
      <View style={styles.labelWrapper}>
        <Text style={styles.labelText}>Item</Text>
        <Text style={styles.labelText}>Name</Text>
        <Text style={styles.labelText}>Quantity</Text>
        <Text style={styles.labelText}>Price</Text>
      </View>
      {items.length > 0 ? (
        <ScrollView style={styles.itemsView}>
          {items.map((item, i) => (
            <TouchableOpacity
              style={styles.itemContainer}
              key={i}
              onPress={() => handleItem(item)}
            >
              <View style={styles.itemWrapper}>
                <Image src={item.image} style={styles.image} />
                <Text>{item.name}</Text>
                <Text>{item.quantity}</Text>
                <Text>Rs. {item.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.noItemText}>No Items Added To Cart Yet!</Text>
        </View>
      )}
      {item && (
        <ItemModal
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          item={item}
          cart={true}
        />
      )}
      <View>
        <View style={styles.totalWrapper}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalText}>{total}</Text>
        </View>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
