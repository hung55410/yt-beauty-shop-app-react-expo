import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const FeedDetail = ({data}) => {

    const screenWidth = Math.round(Dimensions.get("window").width)
    const cardWidth = screenWidth / 2 - 20
    console.log(screenWidth);

  return (
    <View 
        className="p-4 m-2 rounded-xl bg-white flex items-center justify-center" 
        style={{width: cardWidth}}
    >
        <Image 
            source={{uri: data?.mainImage?.asset?.url }} 
            resizeMode='contain' 
            className="w-32 h-52"
        />

        <View className="flex items-start justify-start space-y-1 w-full">
            <Text 
                className="text-base font-semibold text-[#555]"
                numberOfLines={1}
            >
                {data?.title}
            </Text>
            <Text 
                className="text-sm text-[#777]"
                numberOfLines={1}
            >
                {data?.shortDescription}
            </Text>
        </View>
        <View className="flex-row items-center justify-between space-y-1 w-full">
            <Text className="text-base font-semibold text-[#555]">
                $ {data?.price}
            </Text>

            <TouchableOpacity className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
                <AntDesign name='heart' size={16} color={"#FBFBFB"} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default FeedDetail