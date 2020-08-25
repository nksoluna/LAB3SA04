import React from 'react' 
import { FlatList ,View , Text, StatusBar ,StyleSheet, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableHighlight } from 'react-native-gesture-handler'


const availableZipItems = [
    { place: 'Hatyai', code: '90110' ,pic: require("../image/hatyai.jpg") },
    { place: 'Trang', code: '92000',pic: require("../image/trang.jpg") },
    { place: 'Chiangmai', code: '50000' , pic: require("../image/chiangmai.jpg") },
    { place: 'Khonkaen', code: '40000' , pic: require("../image/khonkaen.jpg") },
    { place: 'Chonburi', code: '20240' , pic: require("../image/chonburi.jpg") },
    { place: 'Singburi', code: '16130' , pic: require("../image/singburi.jpg") },
    { place: 'Yala', code: '95000' ,pic: require("../image/yala.jpg") },
    { place: 'UbonRatchathani', code: '34160',pic: require("../image/ubon.jpg") },
   ]
   const ZipItem = ({place, code, navigation , pic}) => (
    <TouchableHighlight onPress={() => navigation.navigate("Weather", { zipCode: code })}
>
    <View style={styles.layout}>
      <ImageBackground source={pic} style={styles.backdrop}></ImageBackground>
      <Text style={{ textAlign: "center"}}>
        {place}
      </Text>
      <Text style={{ textAlign: "center" }}>
        {code}
      </Text>
      <Text style={{ backgroundColor: "#FFFFFF" }}>{"\n"}</Text>
    </View>
  </TouchableHighlight>
);
   const _keyExtractor = item => item.code
   export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
    <View>
    <FlatList
    data={availableZipItems}
    keyExtractor={_keyExtractor}
    renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
    />
    <StatusBar style="auto" />
    </View>
    );
   
   }

   const styles = StyleSheet.create({
    ZipItem: {
    
        alignContent : 'center',
        flexDirection: 'column' ,
        textAlignVertical : 'center' , 
        
        
    width: '100%',
    height: '100%'
    },
    
    backdrop: {
        flexDirection: "column",
        alignItems: "center",
        width: 415,
        height: 100,
      },
      zipItem: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      layout: {
        alignItems: "stretch",
      },
      zipPlace: {
        flex: 1,
      },
      zipCode: {
        flex: 1,
      },
   });
   