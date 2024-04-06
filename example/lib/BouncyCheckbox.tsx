import React, {
  forwardRef,
  RefAttributes,
  useCallback,
  useEffect,
  useImperativeHandle,
} from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  StyleProp,
  ViewStyle,
  Pressable,
  PressableProps,
  TextStyle,
  ImageStyle,
  ImageSourcePropType,
} from 'react-native';
import useBounceAnimation from './hooks/useBounceAnimation';
import useStateWIthCallback from './helpers/useStateWIthCallback';
import styles from './BouncyCheckbox.style';

const AnimationValues = {
  BounceIn: 0.9,
  BounceOut: 1,
  VelocityIn: 0.1,
  VelocityOut: 0.4,
  BouncinessIn: 20,
  BouncinessOut: 20,
};

type BasePressableProps = Pick<
  PressableProps,
  Exclude<keyof PressableProps, 'onPress' | 'onLongPress'>
>;

export interface BouncyCheckboxProps extends BasePressableProps {
  size?: number;
  text?: string;
  testID?: string;
  fillColor?: string;
  isChecked?: boolean;
  unFillColor?: string;
  disableText?: boolean;
  bounceEffect?: number;
  bounceFriction?: number;
  useNativeDriver?: boolean;
  bounceEffectIn?: number;
  bounceEffectOut?: number;
  bounceVelocityIn?: number;
  bounceVelocityOut?: number;
  bouncinessIn?: number;
  bouncinessOut?: number;
  ImageComponent?: any;
  TouchableComponent?: any;
  iconComponent?: React.ReactNode;
  textComponent?: React.ReactNode;
  iconStyle?: StyleProp<ViewStyle>;
  innerIconStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconImageStyle?: StyleProp<ImageStyle>;
  textContainerStyle?: StyleProp<ViewStyle>;
  checkIconImageSource?: ImageSourcePropType;
  onPress?: (checked: boolean) => void;
  onLongPress?: (checked: boolean) => void;
}

export interface BouncyCheckboxHandle {
  onCheckboxPress: () => void;
}

const BouncyCheckbox: React.ForwardRefRenderFunction<
  BouncyCheckboxHandle,
  BouncyCheckboxProps & RefAttributes<BouncyCheckboxHandle>
> = (props, ref) => {
  const {
    style,
    iconStyle,
    iconComponent,
    iconImageStyle,
    isChecked,
    innerIconStyle,
    text,
    textComponent,
    textStyle,
    textContainerStyle,
    testID,
    size = 25,
    onPress,
    onLongPress,
    fillColor = '#ffc484',
    ImageComponent = Image,
    unFillColor = 'transparent',
    disableText = false,
    checkIconImageSource = require('./check.png'),
    bounceEffectIn = AnimationValues.BounceIn,
    bounceEffectOut = AnimationValues.BounceOut,
    bounceVelocityIn = AnimationValues.VelocityIn,
    bounceVelocityOut = AnimationValues.VelocityOut,
    bouncinessIn = AnimationValues.BouncinessIn,
    bouncinessOut = AnimationValues.BouncinessOut,
    TouchableComponent = Pressable,
    ...rest
  } = props;

  const [checked, setChecked] = useStateWIthCallback(isChecked || false);

  const {bounceAnimation, syntheticBounceAnimation, bounceValue} =
    useBounceAnimation();

  useEffect(() => {
    setChecked(isChecked || false);
  }, [isChecked, setChecked]);

  const onCheckboxPress = useCallback(() => {
    setChecked(!checked, newCheckedValue => {
      syntheticBounceAnimation(
        bounceEffectIn,
        bounceEffectOut,
        bounceVelocityOut,
        bouncinessOut,
      );
      onPress && onPress(newCheckedValue);
    });
  }, [
    bounceEffectIn,
    bounceEffectOut,
    bounceVelocityOut,
    bouncinessOut,
    checked,
    onPress,
    setChecked,
    syntheticBounceAnimation,
  ]);

  useImperativeHandle(ref, () => ({onCheckboxPress}), [onCheckboxPress]);

  const handleLongPress = () => {
    if (!onLongPress) {
      return;
    }
    setChecked(!checked, newCheckedValue => {
      onLongPress && onLongPress(newCheckedValue);
    });
  };

  const renderCheckIcon = () => {
    const scaleAnimation = {transform: [{scale: bounceValue}]};
    return (
      <Animated.View
        style={[
          scaleAnimation,
          styles.iconContainer(size, checked, fillColor, unFillColor),
          iconStyle,
        ]}>
        <View
          style={[styles.innerIconContainer(size, fillColor), innerIconStyle]}>
          {iconComponent ||
            (checked && (
              <ImageComponent
                source={checkIconImageSource}
                style={[styles.iconImageStyle, iconImageStyle]}
              />
            ))}
        </View>
      </Animated.View>
    );
  };

  const renderCheckboxText = () => {
    const checkDisableTextType = typeof disableText === 'undefined';
    return (
      (!disableText || checkDisableTextType) &&
      (textComponent || (
        <View style={[styles.textContainer, textContainerStyle]}>
          <Text style={[styles.textStyle(checked), textStyle]}>{text}</Text>
        </View>
      ))
    );
  };

  return (
    <TouchableComponent
      testID={testID}
      style={[styles.container, style]}
      onPressIn={() => {
        bounceAnimation(bounceEffectIn, bounceVelocityIn, bouncinessIn);
      }}
      onPressOut={() => {
        bounceAnimation(bounceEffectOut, bounceVelocityOut, bouncinessOut);
      }}
      onPress={onCheckboxPress}
      onLongPress={handleLongPress}
      {...rest}>
      {renderCheckIcon()}
      {renderCheckboxText()}
    </TouchableComponent>
  );
};

export default forwardRef(BouncyCheckbox);
