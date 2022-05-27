import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

//import from local
import styles from "./KategoriStyle";
export default function Kategori({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerJudul}> Kategori </Text>
            </View>

            <View style={styles.body}>
                <TouchableOpacity onPress={()=>navigation.navigate('Business')} >
                    <View style={styles.box}>
                        <Image style={styles.gambar} source={require('../images/Business.jpg')} />
                        <Text style={styles.judul}>Bisnis</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Entertainment')}>
                    <View style={styles.box}>
                        <Image style={styles.gambar} source={require('../images/Entertainment.jpg')} />
                        <Text style={styles.judul}>Entertainment</Text>
                    </View>
                </TouchableOpacity>
            </View>

             <View style={styles.body}>
                <TouchableOpacity onPress={()=>navigation.navigate('Science')}>
                    <View style={styles.box}>
                        <Image style={styles.gambar} source={require('../images/Science.jpg')} />
                        <Text style={styles.judul}>Science</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Technology')}>
                    <View style={styles.box}>
                        <Image style={styles.gambar} source={require('../images/Technology.jpg')} />
                        <Text style={styles.judul}>Technology</Text>
                    </View>
                </TouchableOpacity>
            </View>

             <View style={styles.body}>
                <TouchableOpacity onPress={()=>navigation.navigate('Health')}>
                    <View style={styles.box}>
                        <Image style={styles.gambar} source={require('../images/Health.jpg')} />
                        <Text style={styles.judul}>Health</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Sports')}>
                    <View style={styles.box}>
                        <Image style={styles.gambar} source={require('../images/Sport.jpg')} />
                        <Text style={styles.judul}>Sports</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}