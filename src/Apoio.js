import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';

export default function Local() {
    const [erro, setErro] = useState();
    const [localizacao, setLocalizacao] = useState();
    const mapRef = useRef();

    async function getLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErro("Erro");
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocalizacao(location);
    }

    useEffect(() => {
        getLocation();
        Location.watchPositionAsync({
            accuracy: Location.LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, (response) => {
            setLocalizacao(response);
            mapRef.current?.animateCamera({
                center: response.coords
            })
        });

    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Text style={css.titulo}>Redes próximas de você</Text>
            {localizacao &&
                <MapView
                    ref={mapRef}
                    initialRegion={{
                        latitude: localizacao?.coords.latitude,
                        longitude: localizacao?.coords.longitude,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05
                    }}
                    style={css.mapa}
                >
                    <Marker coordinate={{
                        latitude: localizacao.coords.latitude,
                        longitude: localizacao.coords.longitude
                    }} />

                </MapView>
            }
        </View>
    )
}

const css = StyleSheet.create({
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 8,
        color: '#fff',
        backgroundColor: '#E255A3'
    },
    mapa: {
        flex: 1,
    }
})
