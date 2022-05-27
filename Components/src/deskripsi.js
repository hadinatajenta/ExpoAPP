import React from "react";
import { useFonts } from 'expo-font';
import { View,Dimensions, Text,Image, ScrollView, TouchableOpacity,Linking, StatusBar} from "react-native";
import { AntDesign,Ionicons,MaterialIcons   } from '@expo/vector-icons'; 

//import stylesheet
import styles from "./stylesheet2";

export default function Deskripsi({route,navigation}){
    const {width, heigh}= Dimensions.get('window');
    const [loaded] = useFonts({
    Montserrat: require('../font/Montserrat.ttf'),
    });
  
    if (!loaded) {
        return null;
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                title="Go back" onPress={() => navigation.goBack()} >
                    <AntDesign name="back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerJudul}> Details </Text>
            </View>

            <ScrollView >
                <Text style={styles.judul}>{route.params.data.title}</Text>
                <Text style={styles.penulis}>{route.params.data.author}</Text>
                <Image 
                style={styles.gambar}
                source={{uri:route.params.data.urlToImage}}
                />
                <Text style={styles.konten}>{route.params.data.description}</Text>
                <Text style={styles.konten}>{route.params.data.content}</Text>


                {console.log(route.params.data)}
            </ScrollView>
            <TouchableOpacity 
            style={styles.touch}
            onPress={ ()=>{ Linking.openURL(route.params.data.url)}}
            >
                <View style={styles.button}>
                    <Ionicons name="ios-reader-outline" size={24} color="black" />
                    <Text> Baca Selengkapnya </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}