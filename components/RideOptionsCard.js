import { StyleSheet, Text, SafeAreaView, View,
     TouchableOpacity, 
     FlatList} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];


const RideOptionsCard = () => {

   const navigation = useNavigation();
   const [selected, setSelected] = useState(null);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
        <View style={tw`flex-row py-6 px-6 items-center`}>
            <TouchableOpacity onPress={()=> navigation.navigate("NavigateCard")}
            >
                <Icon
                name='chevron-left'
                type='font-awesome'
                />
      </TouchableOpacity> 
      <Text style={tw`text-center text-xl pl-28`}>Select a Ride</Text>
        </View>
        <FlatList data={data}
          keyExtractor={(item)=>item.id}
          renderItem={({item:{id, title, multiplier, image}, item }) =>(
            
            <TouchableOpacity  onPress ={()=> setSelected(item)}
            style={tw`flex-row justify-between 
            px-10 items-center ${id === selected?.id && 'bg-gray-200'}`}
             
            >
              <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain"
              }}
              source ={{uri : image}}
              />
              <View style={tw`-ml-6`}>
                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                <Text>Travel time...</Text>
              </View>
              <Text style={tw`text-xl`}>
                $99
              </Text>
            </TouchableOpacity>
          )}
        />

        <View>
          <TouchableOpacity style={tw`bg-black py-3 m-3`}> 
            <Text style={tw`text-center text-white text-xl`}>
              Choose {selected?.title}
            </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({
    back:{
      position: 'relative',
      top:43,
      right: 170,
      padding: 3,
    }
})