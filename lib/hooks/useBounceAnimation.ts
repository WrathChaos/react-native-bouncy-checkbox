import {Animated} from 'react-native';
import {useState} from 'react';

const useBounceAnimation = () => {
  const [bounceValue, setBounceValue] = useState(new Animated.Value(1));

  const animateBounce = (
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

  return {bounceValue, animateBounce};
};

export default useBounceAnimation;
