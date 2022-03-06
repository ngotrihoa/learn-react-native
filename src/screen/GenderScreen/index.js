import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { ScreenNavigation } from "../../common/const";
import LayoutSignup from "../../components/LayoutSignup";
import RadioInputItem from "../../components/RadioInputItem";

const GenderScreen = () => {
  const [gender, setGender] = useState();
  return (
    <LayoutSignup next={ScreenNavigation.BIRTH_DAY}>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          Gender:
        </Text>
        <View style={{ marginTop: 20 }}>
          <ScrollView style={{ paddingHorizontal: 20 }}>
            <RadioInputItem
              title="Male"
              onPress={() => setGender("Male")}
              active={gender === "Male"}
            />
            <RadioInputItem
              title="Female"
              onPress={() => setGender("Female")}
              active={gender === "Female"}
            />
          </ScrollView>
        </View>
      </View>
    </LayoutSignup>
  );
};

export default GenderScreen;
