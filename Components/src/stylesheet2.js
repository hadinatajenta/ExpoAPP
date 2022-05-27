import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container :{
        flex :1,
        backgroundColor : '#ffffff',
    },  
    judul :{
        marginTop :10,
        fontSize : 25,
        fontWeight : 'bold',
        fontFamily : 'Montserrat-Bold',
        margin : 20
    },
    gambar :{
        width : 400,
        height: 250,
        alignSelf : "center",
        marginHorizontal : 20
    },
    header:{
    width : '100%',
    height : 80,
    flexDirection :'row',
    justifyContent :'flex-start',
    alignItems :'center',
    marginLeft : 20,
    marginTop : 20
    },
    headerJudul :{
        fontSize :20 ,
        fontWeight : 'bold',
        fontFamily :'Montserrat',
        textAlign :'center'
    },
    penulis:{
        marginLeft : 20,
        marginBottom :20
    },
    konten:{
        margin:20,
        fontSize :15,
        fontFamily :'Montserrat',
        color :'black',
        width : '100%',
        width : 300
    },
    button:{
        width : 200,
        height : 40,
        backgroundColor :'#ffffff',
        borderRadius : 20,
        borderWidth :0.5,
        flexDirection : 'row',
        alignContent :'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    touch:{
        alignSelf :'center' 
 }
});

export default styles;