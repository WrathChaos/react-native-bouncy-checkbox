import {
  ImageSourcePropType,
  ImageStyle,
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import React from "react";

export const AnimationValues = {
  BounceIn: 0.9,
  BounceOut: 1,
  VelocityIn: 0.1,
  VelocityOut: 0.4,
  BouncinessIn: 20,
  BouncinessOut: 20,
};

export type BasePressableProps = Omit<
  PressableProps,
  "onPress" | "onLongPress"
>;

export interface BouncyCheckboxProps extends BasePressableProps {
  size?: number;
  text?: string;
  testID?: string;
  fillColor?: string;
  isChecked?: boolean;
  defaultChecked?: boolean;
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
  // Touchable/Image wrappers accept arbitrary third-party components
  // (Pressable, TouchableOpacity, FastImage, ...), so props stay open.
  ImageComponent?: React.ComponentType<any>;
  TouchableComponent?: React.ComponentType<any>;
  iconComponent?: React.ReactNode;
  textComponent?: React.ReactNode;
  iconStyle?: StyleProp<ViewStyle>;
  innerIconStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconImageStyle?: StyleProp<ImageStyle>;
  textContainerStyle?: StyleProp<ViewStyle>;
  checkIconImageSource?: ImageSourcePropType;
  useBuiltInState?: boolean;
  onPress?: (checked: boolean) => void;
  onLongPress?: (checked: boolean) => void;
}

export interface BouncyCheckboxHandle {
  onCheckboxPress: () => void;
  onCheckboxLongPress: () => void;
}
