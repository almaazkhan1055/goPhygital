import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const NewsItem = ({ item, drag, isActive }) => {
  return (
    <TouchableOpacity onPressIn={drag}>
      <View
        style={[
          styles.itemContainer,
          { backgroundColor: isActive ? "#f0f0f0" : "#fff" },
        ]}
      >
        <Image source={{ uri: item?.urlToImage }} style={styles.image} />
        <Text style={styles.description}>
          {item?.description ? item?.description.slice(0, 50) + "..." : ""}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 180,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  description: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
});

export default NewsItem;
