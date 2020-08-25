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
    if (props.name == "Chiang Mai") {
      imgs = require("../image/chiangmai.jpg");
    }
    if (props.name == "Khon Kaen") {
      imgs = require("../image/khonkaen.jpg");
    }
  
    if (props.name == "Chaophraya Surasak") {
      imgs = require("../image/chonburi.jpg");
    }
    if (props.name == "Ayutthaya") {
      imgs = require("../image/singburi.jpg");
    }
    if (props.name == "Yala") {
      imgs = require("../image/yala.jpg");
    }
    if (props.name == "Ubon Ratchathani") {
      imgs = require("../image/ubon.jpg");
    }
    return (
        <View>
            <Text style = {styles.wbackground}>{props.name}</Text>
            <View>
                <Image source={imgs} style={styles.img}></Image>
            </View>
            <Text style = {styles.mainText}>{"\n"}</Text>
            <Text style = {styles.wbackground}>{props.main}</Text>
            <Text style = {styles.wbackground}>{props.description}</Text>
            <Text style = {styles.wbackground}>Current temp : {props.temp} °C</Text>
            <Text style = {styles.wbackground}>Pressure : {props.pressure} Pascal </Text>
            <Text style = {styles.wbackground}>humidity : {props.humidity} g.m-3</Text>
            <Text style = {styles.wbackground}>Timezone : {props.timezone}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        top: 15,
        left : 20 ,
        width: 320,
        height: 150,
  
        
    },

    wbackground : {     
       backgroundColor : '#eda334' ,
       alignItems : 'stretch' ,
       flexDirection : 'row' ,
       textAlign : 'center' ,
       fontSize :25 ,
       color : 'white' ,
       textAlignVertical : 'center' ,
       opacity : 0.75 , 
    }, 

    
});