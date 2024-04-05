import React from 'react';
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

interface BouncyCheckboxProps extends BasePressableProps {
  size?: number;
  text?: string;
  fillColor?: string;
  isChecked?: boolean;
  unFillColor?: string;
  disableText?: boolean;
  bounceEffect?: number;
  bounceFriction?: number;
  useNativeDriver?: boolean;
  disableBuiltInState?: boolean;
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

const BouncyCheckbox: React.FC<BouncyCheckboxProps> = ({
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
  size = 25,
  onPress,
  onLongPress,
  fillColor = '#ffc484',
  ImageComponent = Image,
  unFillColor = 'transparent',
  disableText = false,
  disableBuiltInState = false,
  checkIconImageSource = require('./check.png'),
  bounceEffectIn = AnimationValues.BounceIn,
  bounceEffectOut = AnimationValues.BounceOut,
  bounceVelocityIn = AnimationValues.VelocityIn,
  bounceVelocityOut = AnimationValues.VelocityOut,
  bouncinessIn = AnimationValues.BouncinessIn,
  bouncinessOut = AnimationValues.BouncinessOut,
  TouchableComponent = Pressable,
  ...rest
}) => {
  const [checked, setChecked] = useStateWIthCallback(isChecked || false);

  const {animateBounce, bounceValue} = useBounceAnimation();

  const handlePress = () => {
    if (!disableBuiltInState) {
      setChecked(!checked, newCheckedValue => {
        onPress && onPress(newCheckedValue);
      });
    } else {
      onPress && onPress(checked);
    }
  };

  const handleLongPress = () => {
    if (!disableBuiltInState) {
      setChecked(!checked, newCheckedValue => {
        onLongPress && onLongPress(newCheckedValue);
      });
    } else {
      onLongPress && onLongPress(checked);
    }
  };

  const renderCheckIcon = () => {
    const checkStatus = disableBuiltInState ? isChecked! : checked;
    const scaleAnimation = {transform: [{scale: bounceValue}]};
    return (
      <Animated.View
        style={[
          scaleAnimation,
          styles.iconContainer(size, checkStatus, fillColor, unFillColor),
          iconStyle,
        ]}>
        <View
          style={[styles.innerIconContainer(size, fillColor), innerIconStyle]}>
          {iconComponent ||
            (checkStatus && (
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
          <Text
            style={[
              styles.textStyle(disableBuiltInState ? isChecked! : checked),
              textStyle,
            ]}>
            {text}
          </Text>
        </View>
      ))
    );
  };

  return (
    <TouchableComponent
      style={[styles.container, style]}
      onPressIn={() => {
        animateBounce(bounceEffectIn, bounceVelocityIn, bouncinessIn);
      }}
      onPressOut={() => {
        animateBounce(bounceEffectOut, bounceVelocityOut, bouncinessOut);
      }}
      onPress={handlePress}
      onLongPress={handleLongPress}
      {...rest}>
      {renderCheckIcon()}
      {renderCheckboxText()}
    </TouchableComponent>
  );
};

export default BouncyCheckbox;
