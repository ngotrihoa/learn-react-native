import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import classes from "./styles";

const Footer = ({ next }) => {
  const navigation = useNavigation();
  return (
    <View style={classes.footer}>
      <TouchableOpacity
        style={classes.icon}
        onPress={() => navigation.push(next)}
      >
        <Ionicons name="checkmark-sharp" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
