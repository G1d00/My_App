<<<<<<< HEAD
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import { icons } from '@/constants/icons';

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Pressable onPress={onPress}>
        <Image
          source={icons.search}
          className="size-5"
          resizeMode="contain"
          tintColor="#ab8bff"
        />
      </Pressable>
      <TextInput
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#ab8bff"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
=======
import { View, Text Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const searchBar = () => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image source={icons.search} className="size-5" resizeMode='contain' tintColor="#ab8bff" />
    </View>
  )
}

export default searchBar
>>>>>>> 164c11edba403041810501b03eb27171d5fcf697
