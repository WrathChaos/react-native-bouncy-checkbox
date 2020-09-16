import { ViewStyle, TextStyle, ImageStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  textContainer: ViewStyle;
}

export const _iconContainer = (
  size: number,
  borderWidth: number,
  borderRadius: number,
  borderColor: string,
  checked: boolean,
  fillColor: string,
  unfillColor: string,
): ViewStyle => {
  return {
    width: size,
    height: size,
    borderWidth,
    borderColor,
    borderRadius,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: checked ? fillColor : unfillColor,
  };
};

export const _textStyle = (
  checked: boolean,
  color: string,
  fontFamily?: string,
  fontSize?: number,
  textDecoration?: string,
): TextStyle => {
  return {
    fontSize,
    fontFamily,
    color,
    textDecorationLine: !textDecoration && checked ? "line-through" : "none",
  };
};

export const _iconImageStyle = (
  checkImageWidth: number,
  checkImageHeight: number,
  checked: boolean,
): ImageStyle => ({
  width: checkImageWidth,
  height: checkImageHeight,
  display: checked ? "flex" : "none",
});

export default StyleSheet.create<Style>({
  container: {
    margin: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  textContainer: {
    marginLeft: 16,
  },
});
