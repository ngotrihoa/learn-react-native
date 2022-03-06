import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { ScreenNavigation } from "../../common/const";
import LayoutSignup from "../../components/LayoutSignup";
import classes from "./styles";

const BirthDayScreen = () => {
  const [birthDay, setBirthDay] = useState({ day: "", month: "", year: "" });
  const handleKeyPressDay = (value) => {
    if (value > 31) return;
    setBirthDay((prev) => {
      return { ...prev, day: value };
    });
  };
  const handleKeyPressMonth = (value) => {
    if (value > 12) return;
    setBirthDay((prev) => {
      return { ...prev, month: value };
    });
  };
  const handleKeyPressYear = (value) => {
    if (value > new Date().getFullYear()) return;
    setBirthDay((prev) => {
      return { ...prev, year: value };
    });
  };

  return (
    <LayoutSignup next={ScreenNavigation.ORIGIN}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ marginTop: 20 }}>
          <Text style={classes.title}>Birth day:</Text>
          <View style={classes.content} keyboardShouldPersistTaps="handled">
            <TextInput
              keyboardType="numeric"
              placeholder="DD"
              onChangeText={handleKeyPressDay}
              value={birthDay.day}
              style={classes.input}
            />
            <Text style={{ color: "#fff" }}>/</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="MM"
              style={classes.input}
              value={birthDay.month}
              onChangeText={handleKeyPressMonth}
            />
            <Text style={{ color: "#fff" }}>/</Text>
            <TextInput
              value={birthDay.year}
              keyboardType="numeric"
              placeholder="YY"
              style={classes.input}
              onChangeText={handleKeyPressYear}
            />
          </View>
        </View>
      </ScrollView>
    </LayoutSignup>
  );
};

export default BirthDayScreen;
