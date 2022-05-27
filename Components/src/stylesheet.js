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
    fontSize :25 ,
    fontWeight : 'bold',
    fontFamily :'Montserrat'
},
boxBerita:{
    flexDirection :'row',
    alignSelf :'center',
    width :370,
    borderRadius:20,
    alignItems : 'center',
    backgroundColor:'#ffffff',
    margin :10,
    justifyContent :'space-between',
    height : 130,
  },
  elevation: {
    elevation:6,
    shadowColor: '#000000',
  },
  jamal:{
    flexDirection :'column',
    width : 260,
    height: 130,
  },
  gambar :{
    width: 100, 
    height : 100,
    borderRadius : 20,
    alignSelf :'center',
    marginRight : 10,

},
judul :{
    fontFamily : 'Montserrat',
    fontWeight : "bold",
    fontSize : 20,
    color :'#000000',
    margin : 10,
},
deskripsi :{
    margin :10,
    fontSize : 10,
    color : '#000000',
    fontFamily :'Montserrat'

},
shadow:{
    shadowColor :'#7f5df0',
    shadowOffset :{
        width :0,
        height:10,
    },
    shadowOpacity :0.25,
    shadowRadius :3.5,
    elevation :5
}

});

export default styles;