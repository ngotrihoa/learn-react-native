import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const RadioInputItem = ({ title, onPress, active }) => {
  return (
    <TouchableOpacity style={styles.radioItem} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      {active ? (
        <FontAwesome name="dot-circle-o" size={24} color="white" />
      ) : (
        <FontAwesome name="circle-o" size={24} color="white" />
      )}
    </TouchableOpacity>
  );
};

export default RadioInputItem;

const styles = StyleSheet.create({
  radioItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc40",
    paddingVertical: 10,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "700",
  },
});
