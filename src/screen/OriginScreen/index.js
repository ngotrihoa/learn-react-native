import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { ScreenNavigation } from "../../common/const";
import LayoutSignup from "../../components/LayoutSignup";
import RadioInputItem from "../../components/RadioInputItem";
import { FontAwesome } from "@expo/vector-icons";
import classes from "./styles";
import { TouchableOpacity } from "react-native";

const listCountry = [
  {
    icon: "flag-checkered",
    name: "Viet Nam",
  },
  {
    icon: "flag-checkered",
    name: "Lao",
  },
  {
    icon: "flag-checkered",
    name: "Thai Lan",
  },
  {
    icon: "flag-checkered",
    name: "Trung Quoc",
  },
  {
    icon: "flag-checkered",
    name: "Campuchia",
  },
  {
    icon: "flag-checkered",
    name: "Philippines",
  },
];

const OriginScreen = () => {
  const [selected, setSelected] = useState([]);
  const handleSelect = (item) => {
    setSelected((prev) => {
      if (prev.length >= 4) return prev;
      return prev.concat(item);
    });
  };
  return (
    <LayoutSignup next={ScreenNavigation.SIGNUP}>
      <View style={classes.container}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          Origin:
        </Text>
        <View style={[classes.listSelected, classes.list]}>
          {selected &&
            selected.map((item, index) => (
              <TouchableOpacity
                key={item.name + index}
                style={[classes.listItem, classes.listItemSelected]}
                onPress={() => handleSelect(item)}
              >
                <FontAwesome name={item.icon} size={24} color="blue" />
                <Text style={classes.text}>{item.name}</Text>
              </TouchableOpacity>
            ))}
        </View>
        <ScrollView style={classes.list}>
          {listCountry.map((item, index) => (
            <TouchableOpacity
              key={item.name + index}
              style={classes.listItem}
              onPress={() => handleSelect(item)}
            >
              <FontAwesome name={item.icon} size={24} color="blue" />
              <Text style={classes.text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </LayoutSignup>
  );
};

export default OriginScreen;
