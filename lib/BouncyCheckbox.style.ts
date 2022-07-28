import { ViewStyle, TextStyle, StyleSheet } from "react-native";

export const _iconContainer = (
  size: number,
  checked: boolean,
  fillColor: string,
  unfillColor: string,
): ViewStyle => {
  return {
    width: size,
    height: size,
    borderRadius: size / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: checked ? fillColor : unfillColor,
  };
};

export const _textStyle = (checked: boolean): TextStyle => {
  return {
    fontSize: 16,
    color: "#757575",
    textDecorationLine: checked ? "line-through" : "none",
  };
};

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
    marginLeft: 16,
  },
  iconContainer: (
    size: number,
    checked: boolean,
    fillColor: string,
    unfillColor: string,
  ) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: checked ? fillColor : unfillColor,
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
});
