export const _iconContainer = (size, borderWidth, borderRadius, borderColor, checked, fillColor, unfillColor) => {
    return {
        width: size,
        height: size,
        borderWidth,
        borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor,
        backgroundColor: checked ? fillColor : unfillColor
    };
};

export const _textStyle = (
    checked,
    color,
    fontFamily,
    fontSize,
    textDecoration
) => {
    return {
        fontSize,
        fontFamily,
        color ,
        textDecorationLine:!textDecoration && checked ? "line-through" : "none",
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
