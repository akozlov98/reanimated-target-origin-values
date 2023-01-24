import Animated, {
  Easing,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {Dimensions, View} from 'react-native';
import React from 'react';

const {width: screenWidth} = Dimensions.get('screen');

const Placeholder = ({width}) => {
  return (
    <View
      style={{
        height: 20,
        width,
        backgroundColor: '#EBF0F5',
        marginBottom: 8,
      }}>
      <Animated.View
        entering={SlideThroughScreen}
        style={{height: '100%', width: 2, backgroundColor: 'red'}}
      />
    </View>
  );
};

const SlideThroughScreen = (values) => {
  'worklet';
  const animations = {
    originX: withRepeat(
      withTiming(-values.targetGlobalOriginX + screenWidth, {
        duration: 2000,
        easing: Easing.linear,
      }),
      -1,
    ),
  };

  const initialValues = {
    originX: -values.targetGlobalOriginX,
  };

  return {
    initialValues,
    animations,
  };
};

export default function AnimatedStyleUpdateExample() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 24,
        }}>
        <View style={{justifyContent: 'space-around'}}>
          <Placeholder width={120} />
          <Placeholder width={80} />
        </View>
        <View style={{justifyContent: 'space-around', alignItems: 'flex-end'}}>
          <Placeholder width={200} />
          <Placeholder width={90} />
        </View>
      </View>
    </View>
  );
}
