import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import NewsList from "./NewsList";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=usd&apiKey=9cec9ffe35fe4aa083ca3b0c773b3d46"
        );
        const data = await response.json();
        setNews(data?.articles);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return loading ? (
    <ActivityIndicator style={styles.loader} />
  ) : (
    <NewsList news={news} setNews={setNews} />
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default News;
