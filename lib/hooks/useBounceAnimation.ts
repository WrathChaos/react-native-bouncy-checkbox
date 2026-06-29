import { Animated } from "react-native";
import { useCallback, useRef } from "react";

const useBounceAnimation = () => {
  const bounceValue = useRef(new Animated.Value(1)).current;

  const bounceAnimation = useCallback(
    (value: number, velocity: number, bounciness: number) => {
      Animated.spring(bounceValue, {
        toValue: value,
        velocity,
        bounciness,
        useNativeDriver: true,
      }).start();
    },
    [bounceValue],
  );

  const syntheticBounceAnimation = useCallback(
    (
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
    },
    [bounceValue],
  );

  return {
    bounceValue,
    bounceAnimation,
    syntheticBounceAnimation,
  };
};

export default useBounceAnimation;
