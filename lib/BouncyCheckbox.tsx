import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
} from "react";
import {
  View,
  Text,
  Image,
  Animated,
  Pressable,
  Platform,
  StyleSheet,
} from "react-native";
import useBounceAnimation from "./hooks/useBounceAnimation";
import useStateWithCallback from "./helpers/useStateWithCallback";
import styles, {
  DEFAULT_ICON_IMAGE_SIZE,
  iconContainerStyle,
  innerIconContainerStyle,
  textStyle as dynamicTextStyle,
} from "./BouncyCheckbox.style";
import {
  AnimationValues,
  BouncyCheckboxHandle,
  BouncyCheckboxProps,
} from "./BouncyCheckbox.type";

const BouncyCheckbox: React.ForwardRefRenderFunction<
  BouncyCheckboxHandle,
  BouncyCheckboxProps
> = (props, ref) => {
  const {
    style,
    iconStyle,
    iconComponent,
    iconImageStyle,
    innerIconStyle,
    text,
    textComponent,
    textStyle,
    textContainerStyle,
    testID,
    size = 25,
    onPress,
    onLongPress,
    fillColor = "#ffc484",
    ImageComponent = Image,
    unFillColor = "transparent",
    disableText = false,
    isChecked = undefined,
    defaultChecked = false,
    checkIconImageSource = require("./local-assets/check.png"),
    bounceEffectIn = AnimationValues.BounceIn,
    bounceEffectOut = AnimationValues.BounceOut,
    bounceVelocityIn = AnimationValues.VelocityIn,
    bounceVelocityOut = AnimationValues.VelocityOut,
    bouncinessIn = AnimationValues.BouncinessIn,
    bouncinessOut = AnimationValues.BouncinessOut,
    TouchableComponent = Pressable,
    useBuiltInState = true,
    ...rest
  } = props;

  const [checked, setChecked] = useStateWithCallback<boolean>(
    isChecked ?? defaultChecked,
  );

  const { bounceAnimation, syntheticBounceAnimation, bounceValue } =
    useBounceAnimation();

  useEffect(() => {
    if (isChecked !== undefined) {
      setChecked(isChecked);
    }
  }, [isChecked, setChecked]);

  const onCheckboxPress = useCallback(() => {
    if (!useBuiltInState) {
      syntheticBounceAnimation(
        bounceEffectIn,
        bounceEffectOut,
        bounceVelocityOut,
        bouncinessOut,
      );
      onPress?.(isChecked ?? false);
      return;
    }

    setChecked(!checked, (newCheckedValue) => {
      syntheticBounceAnimation(
        bounceEffectIn,
        bounceEffectOut,
        bounceVelocityOut,
        bouncinessOut,
      );
      onPress?.(newCheckedValue);
    });
  }, [
    useBuiltInState,
    setChecked,
    checked,
    syntheticBounceAnimation,
    bounceEffectIn,
    bounceEffectOut,
    bounceVelocityOut,
    bouncinessOut,
    onPress,
    isChecked,
  ]);

  const onCheckboxLongPress = useCallback(() => {
    if (!onLongPress) {
      return;
    }

    if (!useBuiltInState) {
      onLongPress(isChecked ?? false);
      return;
    }

    setChecked(!checked, (newCheckedValue) => {
      onLongPress(newCheckedValue);
    });
  }, [checked, onLongPress, setChecked, useBuiltInState, isChecked]);

  useImperativeHandle(
    ref,
    () => ({ onCheckboxPress, onCheckboxLongPress }),
    [onCheckboxPress, onCheckboxLongPress],
  );

  // On react-native-web a required PNG can render at 0x0 (and with an
  // inconsistent resize mode), leaving the default check icon invisible. We
  // therefore guarantee explicit dimensions and a sane `resizeMode` on web
  // only. Native keeps the exact same style array and passes no `resizeMode`,
  // so its rendering is byte-for-byte unchanged.
  const checkIconImageStyle = useMemo(() => {
    const baseStyle = [styles.iconImageStyle, iconImageStyle];
    if (Platform.OS !== "web") {
      return baseStyle;
    }
    const flattened = StyleSheet.flatten(baseStyle) ?? {};
    const hasWidth = flattened.width != null;
    const hasHeight = flattened.height != null;
    if (hasWidth && hasHeight) {
      return baseStyle;
    }
    return [
      ...baseStyle,
      {
        width: hasWidth ? flattened.width : DEFAULT_ICON_IMAGE_SIZE,
        height: hasHeight ? flattened.height : DEFAULT_ICON_IMAGE_SIZE,
      },
    ];
  }, [iconImageStyle]);

  const renderCheckIcon = useMemo(() => {
    const scaleAnimation = { transform: [{ scale: bounceValue }] };
    return (
      <Animated.View
        style={[
          scaleAnimation,
          iconContainerStyle(size, checked, fillColor, unFillColor),
          iconStyle,
        ]}
      >
        <View style={[innerIconContainerStyle(size, fillColor), innerIconStyle]}>
          {iconComponent ||
            (checked && (
              <ImageComponent
                source={checkIconImageSource}
                style={checkIconImageStyle}
                {...(Platform.OS === "web"
                  ? { resizeMode: "contain" as const }
                  : null)}
              />
            ))}
        </View>
      </Animated.View>
    );
  }, [
    bounceValue,
    size,
    checked,
    fillColor,
    unFillColor,
    iconStyle,
    innerIconStyle,
    iconComponent,
    ImageComponent,
    checkIconImageSource,
    checkIconImageStyle,
  ]);

  const renderCheckboxText = useMemo(() => {
    if (disableText) {
      return null;
    }
    return (
      textComponent || (
        <View style={[styles.textContainer, textContainerStyle]}>
          <Text style={[dynamicTextStyle(checked), textStyle]}>{text}</Text>
        </View>
      )
    );
  }, [disableText, textComponent, textContainerStyle, checked, textStyle, text]);

  return (
    <TouchableComponent
      testID={testID}
      style={[styles.container, style]}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      onPressIn={() => {
        bounceAnimation(bounceEffectIn, bounceVelocityIn, bouncinessIn);
      }}
      onPressOut={() => {
        bounceAnimation(bounceEffectOut, bounceVelocityOut, bouncinessOut);
      }}
      onPress={onCheckboxPress}
      onLongPress={onCheckboxLongPress}
      {...rest}
    >
      {renderCheckIcon}
      {renderCheckboxText}
    </TouchableComponent>
  );
};

export default forwardRef(BouncyCheckbox);
