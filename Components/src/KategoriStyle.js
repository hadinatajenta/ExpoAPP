import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container :{
        flex :1,
        backgroundColor :'#ffffff'
    },
    header:{
        width : '100%',
        height : 80,
        alignItems :'center',
        justifyContent :'flex-end',
        backgroundColor :'#ffffff'
    },
    headerJudul :{
        fontSize :30 ,
        fontWeight : 'bold',
        fontFamily :'Montserrat'
    },
    body:{
        width : 350,
        height : 100,
        justifyContent :'space-around',
        alignSelf :'center',
        flexDirection :'row',
        marginTop : 20
    },
    box :{
        width : 160,
        height : 100,
        alignItems :'center',
        justifyContent :'center'
    },
    gambar :{
        width : 160,
        height : 80,
        borderRadius : 15,
    }
});

export default styles;