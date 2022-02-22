import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions.js';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice.js';

const HomeScreen = () => {

  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image
                style={{
                    width: 100, height: 100, resizeMode: 'contain',
                }}
                source={{
                    uri: "https://links.papareact.com/gzs"
                }}
            />

            <GooglePlacesAutocomplete 
                placeholder="Where From?"
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInput: {
                        fontSize: 18,
                    }
                }}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "en",
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                minLength={2}
                enablePoweredByContainer={false}
                fetchDetails={true}
                onPress={(data, details = null) => {
                    console.log(data)
                    console.log(details)
                    dispatch(setOrigin({
                        location: details.geometry.location,
                        description: data.description,
                    }))

                    dispatch(setDestination(null));
                }}
                returnKeyType={"search"}
            />
            <NavOptions />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})