import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import uberlogo from '../assets/uber_logo.png'
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_KEY} from '@env';
import { useDispatch } from 'react-redux';
import { setDestnation, setOrigin } from '../slices/navSlice'




const HomeScreen = () => {
   const dispatch = useDispatch()
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>

           <Image
           style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
           }} 
           source={uberlogo}
           />
           <GooglePlacesAutocomplete
            styles={{
               container: {
                  flex: 0
               },
               textInput:{
                  fontSize: 18,
               }
            }}
            onPress={(data, details = null ) => {
               dispatch(setOrigin({
                  location: details.geometry.location,
                  description: data.description
               }))
               dispatch(setDestnation(null))
            } 
         }
            fetchDetails={true}
            returnKeyType={"search"}
            enablePoweredByContainer={false}
            query={{
               key:GOOGLE_MAPS_KEY,
               language: 'en',
            }}
           nearbyPlacesAPI='GooglePlacesSearch'
           debounce={400}
           placeholder="Where From?"
           />
           <NavOptions/>
        </View>
     </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})