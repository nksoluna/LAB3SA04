import React from 'react' 
import { View , Text , StyleSheet, Image } from 'react-native'

export default function Forecast(props) {
    let img = "";
    if (props.name == "Hat Yai") {
      img = require("../image/hatyai.jpg");
    }
    if (props.name == "Trang") {
      img = require("../image/trang.jpg");
    }
    if (props.name == "Chiang Mai") {
      img = require("../image/chiangmai.jpg");
    }
    if (props.name == "Khon Kaen") {
      img = require("../image/khonkaen.jpg");
    }
  
    if (props.name == "Chaophraya Surasak") {
      img = require("../image/chonburi.jpg");
    }
    if (props.name == "Ayutthaya") {
      img = require("../image/singburi.jpg");
    }
    if (props.name == "Yala") {
      img = require("../image/yala.jpg");
    }
    if (props.name == "Ubon Ratchathani") {
      img = require("../image/ubon.jpg");
    }
    return (
        <View>
            <Text style = {styles.wbackground}>{props.name}</Text>
            <View>
                <Image source={img} style={styles.img}></Image>
            </View>
            <Text style = {styles.mainText}>{"\n"}</Text>
            <Text style = {styles.wbackground}>{props.main}</Text>
            <Text style = {styles.wbackground}>{props.description}</Text>
            <Text style = {styles.wbackground}>Tempurature : {props.temp} °C</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        top: 15,
        left : 20 ,
        width: 320,
        height: 150,
        textAlignVertical:'center'
        
    },

    wbackground : {     
       backgroundColor : 'blue' ,
       alignItems : 'stretch' ,
       flexDirection : 'row' ,
       textAlign : 'center' ,
       fontSize :25 ,
       color : 'white' ,
       textAlignVertical : 'center' ,
       opacity : 0.75 , 
    }, 

    
});