import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScreenNavigation } from "../../common/const";
import classes from "./styles";

const HomeScreen = ({ navigation }) => {
  const handlePressSignIn = () => navigation.navigate(ScreenNavigation.SIGN_IN);
  const handlePressSignUp = () => navigation.navigate(ScreenNavigation.GENDER);

  return (
    <View style={classes.root}>
      <Image
        style={classes.background}
        source={{
          uri: "https://images.unsplash.com/photo-1646504345183-3b95f560be6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
      <View style={classes.content}>
        <Text style={classes.title}>Mektoube</Text>
        <Text style={classes.subTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint
          ipsa explicabo, ratione sit odio accusantium ipsum debitis voluptas,
          tempora voluptate
        </Text>
      </View>
      <View style={classes.bottom}>
        <Text style={classes.bottomLeft} onPress={handlePressSignIn}>
          se connected
        </Text>
        <TouchableOpacity style={classes.btn} onPress={handlePressSignUp}>
          <Text style={classes.btnText}>Inscription gratuite en 1min</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
