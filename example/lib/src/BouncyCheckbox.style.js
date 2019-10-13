export const iconContainer = (
  size,
  checked,
  borderColor,
  fillColor,
  unfillColor
) => {
  return {
    width: size,
    height: size,
    borderColor,
    borderWidth: 1,
    borderRadius: size,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: checked ? fillColor : unfillColor
  };
};

export default {};
