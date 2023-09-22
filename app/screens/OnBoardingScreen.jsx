import { View, Text } from 'react-native'
import React from 'react'

import Swiper from 'react-native-swiper'

const OnBoardingScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Swiper>
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
      </Swiper>
    </View>
  )
}

export const ScreenOne = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <Text>Screen one</Text>
        </View>
    )
}

export const ScreenTwo = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <Text>Screen two</Text>
        </View>
    )
}

export const ScreenThree = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <Text>Screen three</Text>
        </View>
    )
}

export default OnBoardingScreen