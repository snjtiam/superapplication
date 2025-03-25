import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import RemoteComponent from "../components/RemoteComponent";

const RemoteScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Remote Screen</Text>
      <RemoteComponent title="First Remote Component" onPress={() => console.log("First component pressed")} />
      <RemoteComponent title="Second Remote Component" onPress={() => console.log("Second component pressed")} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    padding: 16,
    textAlign: "center",
  },
});

export default RemoteScreen;
