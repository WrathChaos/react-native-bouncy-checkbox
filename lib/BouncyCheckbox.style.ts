import { StyleSheet } from "react-native";

export default StyleSheet.create<any>({
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconImageStyle: {
    width: 10,
    height: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  iconContainer: (
    size: number,
    checked: boolean,
    fillColor: string,
    unFillColor: string,
  ) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: checked ? fillColor : unFillColor,
    alignItems: "center",
    justifyContent: "center",
  }),
  innerIconContainer: (size: number, fillColor: string) => ({
    width: size,
    height: size,
    borderWidth: 1,
    borderColor: fillColor,
    borderRadius: size / 2,
    alignItems: "center",
    justifyContent: "center",
  }),
  textStyle: (checked: boolean) => ({
    fontSize: 16,
    color: "#757575",
    textDecorationLine: checked ? "line-through" : "none",
  }),
});
