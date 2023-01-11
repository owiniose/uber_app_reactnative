import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, {Marker} from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';
import { MapViewDirections } from 'react-native-maps-directions';
import {GOOGLE_MAPS_KEY} from '@env';


const Map = () => {

    const origin = useSelector(selectOrigin);
    const destination= useSelector(selectDestination)
    const mapRef = useRef()

    useEffect(() => {
      if(!origin || !destination) return;


      //
      mapRef.current.fitToSuppliedMarkers(['origin', 'destination'],{
      edgePadding: {top: 50, right: 50, bottom:50, left:50},
    })
    }, [origin, destination])

    useEffect(() => {
      
      if(!origin || !destination) return;
      
      const getTravelTime = async () => {

        fetch(
          `https://maps.googleapis.com/maps/api/distancematrix
          /json?units=imperial&origins=${origin.description}&
          destinations=${destination.description}&key=${GOOGLE_MAPS_KEY}`)
        .then((res) => res.json())
        .then(data => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        });
       };
      getTravelTime()
    }, [origin, destination, GOOGLE_MAPS_KEY])
    
    

//     const origin = {latitude: 37.3318456, longitude: -122.0296002};
// const destination = {latitude: 37.771707, longitude: -122.4053769};

  return (
        <MapView
        ref={mapRef}
        style={tw`flex-1`}
        mapType='mutedStandard'
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
    {origin && destination &&(
        <MapViewDirections 
        origin={origin.description}
        destination= {origin.description}
        apiKey={GOOGLE_MAPS_KEY}
        strokeColor='black'
        />
    ) }
  {origin?.location &&(
    <Marker 
        coordinate={{
            latitude: 37.78825,
            longitude: -122.4324
        }}
        title="Origin"
        description={origin.description}
        identifier="origin"
    />
  )}

    </MapView>
    
  );
};

export default Map

const styles = StyleSheet.create({})