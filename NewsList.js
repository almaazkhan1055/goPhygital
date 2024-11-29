import React from "react";
import DraggableFlatList from "react-native-draggable-flatlist";
import NewsItem from "./NewsItem";
import { StyleSheet } from "react-native";

const NewsList = ({ news, setNews }) => {
  const renderNews = ({ item, drag, isActive }) => (
    <NewsItem item={item} drag={drag} isActive={isActive} />
  );

  return (
    <DraggableFlatList
      data={news}
      keyExtractor={(_, index) => `draggable-item-${index}`}
      renderItem={renderNews}
      onDragEnd={({ data }) => setNews(data)}
      onDragBegin={() => console.log("Drag started")}
      contentContainerStyle={styles.grid}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default NewsList;
