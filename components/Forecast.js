import React from 'react' 
import { View , Text , StyleSheet, Image } from 'react-native'

export default function Forecast(props) {
    let imgs = "";
    if (props.name == "Hat Yai") {
      imgs = require("../image/hatyai.jpg");
    }
    if (props.name == "Trang") {
      imgs = require("../image/trang.jpg");
    }
    if (props.name == "ChiangMai") {
      imgs = require("../image/chiangmai.jpg");
    }
    if (props.name == "KhonKaen") {
      imgs = require("../image/khonkaen.jpg");
    }
  
    if (props.name == "Chonburi") {
      imgs = require("../image/chonburi.jpg");
    }
    if (props.name == "Singburi") {
      imgs = require("../image/singburi.jpg");
    }
    if (props.name == "Yala") {
      imgs = require("../image/yala.jpg");
    }
    if (props.name == "UbonRatchathani") {
      imgs = require("../image/ubon.jpg");
    }
    return (
    <View >
    <Text style = {styles.wbackground}>{props.main}</Text>
    <Text style = {styles.wbackground}>{props.description}</Text>
    <View>
        <Image style={styles.imgs}></Image>
      </View>
    <Text style = {styles.wbackground}>{props.temp} °C</Text>
    </View>
    
    );
   }
   const styles = StyleSheet.create({
       wbackground : {
 
   backgroundColor : 'blue' ,
   alignItems : 'stretch' ,
   flexDirection : 'row' ,
   textAlign : 'center' ,
   fontSize :35 ,
   color : 'white' ,
   textAlignVertical : 'center' ,
   opacity : 0.75 ,
   
} ,
img: {
    top: 15,
    width: 320,
    height: 150,
  },

  mainText: {
    fontSize: 30,
    color: "black",
    paddingTop: 25,
    textAlign: "center",
    opacity: 0.75,
  },
  descriptionText: {
    fontSize: 25,
    color: "black",
    paddingTop: 10,
    textAlign: "center",
    opacity: 0.75,
  },
  detailText: {
    fontSize: 13,
    color: "black",
    paddingTop: 15,
    textAlign: "center",
    opacity: 0.75,
  },
  feellikeText: {
    fontSize: 15,
    color: "black",
    paddingTop: 0,
    textAlign: "center",
    opacity: 0.75,
  },
  tempText: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    opacity: 0.75,
  },
  celsiusText: {
    fontSize: 15,
    textAlign: "center",
    color: "black",
    opacity: 0.75,
  },
});
    
   
