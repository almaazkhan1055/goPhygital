import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import News from "./News";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <News />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
