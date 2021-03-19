import { ViewStyle, TextStyle, ImageStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  textContainer: ViewStyle;
}

export const _iconContainer = (
  size: number,
  checked: boolean,
  fillColor: string,
  unfillColor: string,
): ViewStyle => {
  return {
    width: size,
    height: size,
    borderWidth: 1,
    borderColor: "#ffc484",
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

export const _iconImageStyle = (checked: boolean): ImageStyle => ({
  width: 10,
  height: 10,
  display: checked ? "flex" : "none",
});

export default StyleSheet.create<Style>({
  container: {
    alignSelf: "baseline",
    alignItems: "center",
    flexDirection: "row",
  },
  textContainer: {
    marginLeft: 16,
  },
});
