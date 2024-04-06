import { Animated } from "react-native";
import { useState } from "react";

const useBounceAnimation = () => {
  const [bounceValue] = useState(new Animated.Value(1));

  const bounceAnimation = (
    value: number,
    velocity: number,
    bounciness: number,
  ) => {
    Animated.spring(bounceValue, {
      toValue: value,
      velocity,
      bounciness,
      useNativeDriver: true,
    }).start();
  };

  const syntheticBounceAnimation = (
    bounceEffectIn: number,
    bounceEffectOut: number,
    bounceVelocityOut: number,
    bouncinessOut: number,
  ) => {
    Animated.sequence([
      Animated.timing(bounceValue, {
        toValue: bounceEffectIn,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.spring(bounceValue, {
        toValue: bounceEffectOut,
        velocity: bounceVelocityOut,
        bounciness: bouncinessOut,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return {
    bounceValue,
    bounceAnimation,
    syntheticBounceAnimation,
  };
};

export default useBounceAnimation;
