import React, { useEffect, useState, useRef } from "react";
import { Animated, StyleSheet, Easing } from "react-native";

const style = StyleSheet.create({
  rainy: {
    color: "gray",
    position: "absolute",
  },
});

const START_POSITION = -50;
const RAIN_TYPES = ["💧"];
const FALL_SPEEDS = ["slow", "medium", "fast"];
const FALL_DURATIONS = {
  fast: [7000, 10000],
  medium: [8000, 20000],
  slow: [30000, 60000],
};

export default function Rainy({ scene, fallSpeed }) {
  const [config, setConfig] = useState(() =>
    getConfig({ scene, fallSpeed, initialDelay: true })
  );
  const animatedY = useRef(new Animated.Value(START_POSITION)).current;

  const runAnimation = () => {
    animatedY.setValue(START_POSITION);
    Animated.sequence([
      Animated.delay(config.fallDelay),
      Animated.timing(animatedY, {
        toValue: scene.height,
        duration: config.fallDuration,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      const newConfig = getConfig({ scene, fallSpeed });
      setConfig(newConfig);
    });
  };

  useEffect(() => {
    if (config) {
      runAnimation();
    }
  }, [config]);
  return (
    <Animated.Text
      style={[
        style.rainy,
        {
          left: config.xPosition,
          fontSize: config.size,
          opacity: config.opacity,
          transform: [{ translateY: animatedY }],
        },
      ]}>
      {config.type}
    </Animated.Text>
  );
}

const getConfig = ({ scene, initialDelay = false, fallSpeed } = {}) => {
  const { width } = scene;
  let speed = "medium";

  if (FALL_SPEEDS.includes(fallSpeed)) {
    speed = fallSpeed;
  }

  const size = randomInt(6, 14);
  const opacity = randomInt(3, 6) / 10;
  const type = RAIN_TYPES[0];
  const xPosition = randomInt(0, width);

  // fall animation
  const fallDuration = randomInt(...FALL_DURATIONS[speed]);
  const fallDelay = randomInt(300, initialDelay ? 18000 : 8000);
  return {
    size,
    opacity,
    type,
    xPosition,
    fallDuration,
    fallDelay,
  };
};

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
