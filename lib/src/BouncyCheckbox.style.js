export const _iconContainer = (
  size,
  checked,
  borderRadius,
  borderColor,
  borderWidth,
  fillColor,
  unfillColor
) => {
  return {
    width: size,
    borderColor,
    borderRadius,
    height: size,
    borderWidth,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: checked ? fillColor : unfillColor,
  };
};

export const _textStyle = (
  checked,
  textColor,
  fontFamily,
  fontSize,
  disableTextDecoration
) => {
  return {
    fontSize,
    fontFamily,
    color: textColor,
    textDecorationLine:
      !disableTextDecoration && checked ? "line-through" : "none",
  };
};

export default {
  container: {
    margin: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  textContainer: { marginLeft: 16 },
};
