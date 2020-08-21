import React, { useState, useEffect } from 'react' 
import { Text , View , ImageBackground , StyleSheet} from 'react-native' 
import Forecast from './Forecast'

export default function Weather(props) {
    const  [ forecastInfo , setForecastInfo ] = useState({
    main: 'main',
    description: 'description',
    temp: 0
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=49db5e0c8ff1c5d89439cb4969112165`)
        .then((response) => response.json())
        .then((json) => {
        setForecastInfo({
        main: json.weather[0].main,
        description: json.weather[0].description,
        temp: json.main.temp
        });
        })
        .catch((error) => {
        console.warn(error);
        });
        }
        }, [props.zipCode])
       
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
       
