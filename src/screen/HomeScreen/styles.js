import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    // opacity: 0.5,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  subTitle: {
    color: "#fff",
    paddingHorizontal: 50,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  bottomLeft: {
    flex: 1,
    textTransform: "uppercase",
    textDecorationLine: "underline",
    fontWeight: "500",
    color: "white",
  },
  btn: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "#23CF61",
    textTransform: "uppercase",
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default styles;
