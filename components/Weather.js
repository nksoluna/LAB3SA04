import React, { useState } from 'react' 
import { Text , View , ImageBackground , StyleSheet} from 'react-native' 
import Forecast from './Forecast'

export default function Weather(props) {
    const  [ forecastInfo , setforecastInfo ] = useState({
    main: 'main',
    description: 'description',
    temp: 0
    })
    
    return (      
        <View>
            
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
        <Text style = {styles.wbackground}>Zip Code is {props.zipCode}</Text>
        
        <Forecast {...forecastInfo} />
        
        </ImageBackground>
        
        </View>
        );
       }
    const styles = StyleSheet.create({
        backdrop: {
        
            alignContent : 'center',
            flexDirection: 'column' ,
            textAlignVertical : 'center' , 
            
            
        width: '100%',
        height: '100%'
        },
        wbackground : {
             flex : 0.15 ,
            backgroundColor : 'blue' ,
            alignItems : 'stretch' ,
            flexDirection : 'row' ,
            textAlign : 'center' ,
            fontSize :30 ,
            color : 'white' ,
            textAlignVertical : 'center' ,
            opacity : 0.75 ,
            
        } ,
       });
       
