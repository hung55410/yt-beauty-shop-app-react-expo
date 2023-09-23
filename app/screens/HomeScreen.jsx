import { 
  View, 
  Text, 
  SafeAreaView, 
  Image, 
  TextInput,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'

import { MaterialIcons } from '@expo/vector-icons';
import { Screen3 } from '../assets';

const HomeScreen = () => {

  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchTerm = (text) => {
    setSearchTerm(text)
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-start bg-[#EBEAEF]">
      <View className="w-full flex-row items-center justify-between px-4 py-2">
        <MaterialIcons name="chevron-left" size={32} color="#555" />

        <Image 
          source={Screen3} 
          className="w-12 h-12 rounded-xl" 
          resizeMode='cover'
        />
      </View>

      {/* Search Box starts here */}
      <View className="flex-row items-center justify-between px-4 py-2 w-full space-x-6">
          <View className="px-4 py-2 bg-white rounded-xl flex-1 flex-row items-center justify-center space-x-2">
            <MaterialIcons name="search" size={24} color="#7f7f7f" />
            <TextInput 
              className="text-base font-semibold text-[#555] flex-1 py-1 mt-1" 
              placeholder='Search here...'
            value={searchTerm}
            onChangeText={handleSearchTerm}
            />
          </View>
        <TouchableOpacity className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
          <MaterialIcons name="filter-alt" size={24} color="#7f7f7f" />
        </TouchableOpacity>
      </View>
      {/* Search bbox ends here */}
    </SafeAreaView>
  )
}

export default HomeScreen