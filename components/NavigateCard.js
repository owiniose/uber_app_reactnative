import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_KEY} from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
    const dispatch= useDispatch();
    const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Daniel</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <TouchableOpacity onPress={()=>{navigation.navigate("RideOptionsCard")}}>
            <GooglePlacesAutocomplete
            placeholder='Where to?'
            styles={toInputBoxStyles}
            debounce={400}
            nearbyPlacesAPI="GooglePlacesSearch"
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
                key: GOOGLE_MAPS_KEY,
                language: "en",
              }}
              onPress={(data, details = null) => {
                dispatch(
                  setDestination({
                    location: details?.geometry.location,
                    description: data.description,
                  })
                );
                navigation.navigate("RideOptionsCard");
              }}
        />
        </TouchableOpacity>
        <NavFavourites/>
      </View>
      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
      <TouchableOpacity style= {tw`flex 
      flex-row justify-between bg-black w-24 px-4 py-3
       rounded-full`}
       onPress={()=> navigation.navigate("RideOptionsCard")}
       >
          <Icon
          name='car' type='font-awesome' color='white' size={16}
          />
          <Text style={tw`text-white text-center`} >Rides</Text>
      </TouchableOpacity>
      <TouchableOpacity style= {tw`flex 
      flex-row  w-24 px-4 py-3
       rounded-full`}>
          <Icon
          name='fast-food-outline' 
          type='ionicon' color='black' size={16}
          />
          <Text style={tw` text-center`} >EatsScreen</Text>
      </TouchableOpacity>
      </View>
      
      
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop: 20,
        flex:0
    },
    textInputContainer:{
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
    textInput:{
        backgroundColor:"#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
})