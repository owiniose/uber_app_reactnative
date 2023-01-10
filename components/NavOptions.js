import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames'
import uberx from '../assets/UberX.webp'
import ubere from '../assets/eats.png';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';



const data =[
    {
        id: "123",
        title: "Get a ride",
        image: uberx,
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order Food",
        image: ubere,
        screen: "EatsScreen",//Change in Future
    },
];

const NavOptions = () => {

    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)

  return (
   <FlatList
    data={data}
    keyExtractor={(item)=> item.id}
    horizontal
    renderItem={({item})=>(
        <TouchableOpacity
            onPress={()=> navigation.navigate(item.screen)} 
            style ={tw` p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            disabled={origin}>

                {/* style={tw`${!origin && "opacity-20"}`} */}
            <View  >
                <Image
                style={{
                    width: 120, height: 120, resizeMode: 'contain'
                }}
                source={item.image}
                />
                <Text style={tw` mt-2 text-lg font-semibold`}>
                    {item.title}
                </Text>
                <Icon
                style={tw` p-2 bg-black rounded-full w-10 mt-4`}
                name='arrowright'
                type='antdesign'
                color='white'
                />

            </View>
        </TouchableOpacity>
    )}  
   />
  )
}

export default NavOptions