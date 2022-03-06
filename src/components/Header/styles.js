import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingTop: 30,
    paddingHorizontal: 20,
    position: "relative",
    height: 100,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "white",
    position: "absolute",
    left: "47%",
    top: 30,
  },
});

export default styles;
