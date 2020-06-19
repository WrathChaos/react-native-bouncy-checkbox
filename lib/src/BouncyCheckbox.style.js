export const _iconContainer = (checked, fillColor, unfillColor) => {
  return {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    borderColor: "#ffc484",
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
