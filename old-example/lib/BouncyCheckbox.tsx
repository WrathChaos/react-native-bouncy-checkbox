import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Text,
  View,
  Image,
  Animated,
  StyleProp,
  ViewStyle,
  TextStyle,
  Pressable,
  ImageSourcePropType,
  TouchableWithoutFeedbackProps,
} from 'react-native';
import styles, {_textStyle} from './BouncyCheckbox.style';

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type BaseTouchableProps = Pick<
  TouchableWithoutFeedbackProps,
  Exclude<keyof TouchableWithoutFeedbackProps, 'onPress'>
>;

export interface IBouncyCheckboxProps extends BaseTouchableProps {
  size?: number;
  text?: string;
  fillColor?: string;
  isChecked?: boolean;
  unfillColor?: string;
  disableText?: boolean;
  bounceEffect?: number;
  bounceFriction?: number;
  useNativeDriver?: boolean;
  disableBuiltInState?: boolean;
  ImageComponent?: any;
  TouchableComponent?: any;
  bounceEffectIn?: number;
  bounceEffectOut?: number;
  bounceVelocityIn?: number;
  bounceVelocityOut?: number;
  bouncinessIn?: number;
  bouncinessOut?: number;
  iconComponent?: React.ReactNode;
  textComponent?: React.ReactNode;
  iconStyle?: CustomStyleProp;
  innerIconStyle?: CustomStyleProp;
  style?: CustomStyleProp;
  textStyle?: CustomTextStyleProp;
  iconImageStyle?: CustomStyleProp;
  textContainerStyle?: CustomStyleProp;
  checkIconImageSource?: ImageSourcePropType;
  onPress?: (checked: boolean) => void;
}

interface IBouncyCheckBoxMethods {
  onPress: () => void;
}

const defaultCheckImage = require('./check.png');

const BouncyCheckbox = React.forwardRef<
  IBouncyCheckBoxMethods,
  IBouncyCheckboxProps
>((props, forwardedRef) => {
  const [checked, setChecked] = useState(false);
  const bounceValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    setChecked(props.isChecked ?? false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    bounceEffectIn = 0.9,
    bounceEffectOut = 1,
    bounceVelocityIn = 0.1,
    bounceVelocityOut = 0.4,
    bouncinessIn = 20,
    bouncinessOut = 20,
    useNativeDriver = true,
  } = props;

  const bounceInEffect = () => {
    Animated.spring(bounceValue, {
      toValue: bounceEffectIn,
      velocity: bounceVelocityIn,
      bounciness: bouncinessIn,
      useNativeDriver,
    }).start();
  };

  const bounceOutEffect = () => {
    Animated.spring(bounceValue, {
      toValue: bounceEffectOut,
      velocity: bounceVelocityOut,
      bounciness: bouncinessOut,
      useNativeDriver,
    }).start();
  };

  const syntheticBounceEffect = () => {
    Animated.sequence([
      Animated.timing(bounceValue, {
        toValue: bounceEffectIn,
        duration: 50,
        useNativeDriver,
      }),
      Animated.spring(bounceValue, {
        toValue: bounceEffectOut,
        velocity: bounceVelocityOut,
        bounciness: bouncinessOut,
        useNativeDriver,
      }),
    ]).start();
  };

  const renderCheckIcon = () => {
    const {
      size = 25,
      iconStyle,
      iconComponent,
      iconImageStyle,
      fillColor = '#ffc484',
      ImageComponent = Image,
      unfillColor = 'transparent',
      disableBuiltInState,
      isChecked,
      innerIconStyle,
      checkIconImageSource = defaultCheckImage,
    } = props;

    const checkStatus = disableBuiltInState ? isChecked! : checked;
    return (
      <Animated.View
        style={[
          {transform: [{scale: bounceValue}]},
          styles.iconContainer(size, checkStatus, fillColor, unfillColor),
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
    const {
      text,
      textComponent,
      isChecked,
      textStyle,
      textContainerStyle,
      disableBuiltInState,
      disableText = false,
    } = props;
    const checkDisableTextType = typeof disableText === 'undefined';
    return (
      (!disableText || checkDisableTextType) &&
      (textComponent || (
        <View style={[styles.textContainer, textContainerStyle]}>
          <Text
            style={[
              _textStyle(disableBuiltInState ? isChecked! : checked),
              textStyle,
            ]}>
            {text}
          </Text>
        </View>
      ))
    );
  };

  const onPress = useCallback(() => {
    const {disableBuiltInState = false} = props;
    if (!disableBuiltInState) {
      setChecked(prev => !prev);
    }
    syntheticBounceEffect();
    props.onPress && props.onPress(!checked);
  }, [checked, props]);

  useImperativeHandle(forwardedRef, () => ({onPress}), [onPress]);

  const {style, TouchableComponent = Pressable} = props;
  return (
    <TouchableComponent
      {...props}
      style={[styles.container, style]}
      onPressIn={bounceInEffect}
      onPressOut={bounceOutEffect}
      onPress={onPress}>
      {renderCheckIcon()}
      {renderCheckboxText()}
    </TouchableComponent>
  );
});

export default BouncyCheckbox;
