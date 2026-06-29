import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const styles = StyleSheet.create({
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
});

export const iconContainerStyle = (
  size: number,
  checked: boolean,
  fillColor: string,
  unFillColor: string,
): ViewStyle => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  backgroundColor: checked ? fillColor : unFillColor,
  alignItems: "center",
  justifyContent: "center",
});

export const innerIconContainerStyle = (
  size: number,
  fillColor: string,
): ViewStyle => ({
  width: size,
  height: size,
  borderWidth: 1,
  borderColor: fillColor,
  borderRadius: size / 2,
  alignItems: "center",
  justifyContent: "center",
});

export const textStyle = (checked: boolean): TextStyle => ({
  fontSize: 16,
  color: "#757575",
  textDecorationLine: checked ? "line-through" : "none",
});

export default styles;
