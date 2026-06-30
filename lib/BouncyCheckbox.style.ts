import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const DEFAULT_ICON_IMAGE_SIZE = 10;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconImageStyle: {
    width: DEFAULT_ICON_IMAGE_SIZE,
    height: DEFAULT_ICON_IMAGE_SIZE,
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
