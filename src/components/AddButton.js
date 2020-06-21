import React from "react";
import { FAB } from "react-native-paper";
import { StyleSheet } from "react-native";

function AddButton() {
  return (
    <FAB
      style={styles.fab}
      icon="plus"
      onPress={() => (window.location.search = "?new=true")}
    />
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default AddButton;
