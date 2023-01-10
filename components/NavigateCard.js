import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_KEY} from '@env';

const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Daniel</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
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
        />
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