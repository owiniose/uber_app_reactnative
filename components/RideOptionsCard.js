import { StyleSheet, Text, SafeAreaView, View,
     TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'


const RideOptionsCard = () => {

   const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
        <View style={tw`flex-row py-12 px-6 items-center`}>
            <TouchableOpacity onPress={()=> navigation.navigate("NavigateCard")}
            >
                <Icon
                name='chevron-left'
                type='font-awesome'
                />
      </TouchableOpacity>
      {/* <TouchableOpacity style= {tw`flex 
      flex-row justify-between bg-black w-24 px-4 py-3
       rounded-full`}
       onPress={()=> navigation.navigate("NavigateCard")}
       >
          <Icon
         name='chevron-left'
         type='font-awesome' color='white' size={16}
          />
          
      </TouchableOpacity> */}
      <Text style={tw`text-center text-xl pl-28`}>Select a Ride</Text>
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