import axios from "axios";
import React, { useEffect, useState } from "react";
import { 
  SafeAreaView, 
  Text, 
  ScrollView ,
  Image,
  View, 
  TouchableOpacity,
  RefreshControl} from "react-native";
//import stylesheet
import styles from "./stylesheet";


//refresh var
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
//code
export default function App({navigation}){
  //wait
  const[data,setData]=useState()
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  //getData
    const getData = async() =>{
      try {
        const res = await axios.get('https://newsapi.org/v2/top-headlines',{
          params:{
            country:'id',
            category :'health',
            apiKey :'427838a2cd824cd2ae100ddb3eefa9bb'
          },
        })
        setData(res.data.articles)

      } catch (error) {
        alert(error.message)
      }
    };
    

    useEffect(()=>{
      getData()
    },[])

  //return
  return(
   <SafeAreaView>
    <View style={styles.header}>
      <Text style={styles.headerJudul}> Health </Text>
    </View>
    <ScrollView
     contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
     >
       {data && data.map((item,i)=>{
         return<View style={styles.container}>

        <TouchableOpacity
          onPress={()=>navigation.navigate('Detail',{data:item})}
        >
         <View style={[styles.boxBerita,styles.elevation]}>
            <View style={styles.jamal}>
                <Text style={styles.judul} numberOfLines={2} >{item.title}</Text>
                <Text style={styles.deskripsi} >{item.author}</Text>
            </View>

          <Image style={[styles.gambar,styles.elevation]} source={{uri:item.urlToImage}}/>
         </View>
        </TouchableOpacity>

         </View>
       })}
    </ScrollView>
     {console.log(data)}
   </SafeAreaView>
  );
}