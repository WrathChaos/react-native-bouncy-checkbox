export const iconContainer = (
  size,
  checked,
  borderRadius,
  borderColor,
  fillColor,
  unfillColor
) => {
  return {
    width: size,
    borderColor,
    borderRadius,
    height: size,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: checked ? fillColor : unfillColor
  };
};

export const textStyle = (checked, textColor, fontFamily, fontSize) => {
  return {
    fontFamily,
    fontSize: 16,
    color: "#757575",
    textDecorationLine: checked ? "line-through" : "none"
  };
};

export default {
  container: {
    margin: 8,
    alignItems: "center",
    flexDirection: "row"
  },
  textContainer: { marginLeft: 16 }
};
