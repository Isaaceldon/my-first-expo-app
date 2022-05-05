import React from "react";
import {Text,View,StyleSheet} from 'react-native';
import {Image} from 'react-native';
import {Button} from 'react-native';

export default function Home({navigation}) {

    return(
        <View style={styles.home_container}>
            <View style={styles.imageBlock}>
                <Image style={styles.imageStyle}  source={require("../assets/img/isaac-profil3.png")} />
                <View style = {styles.figcaption}>
                <Text style={[styles.profil,styles.profil2]}>Isaac Joël AWIGNAN</Text>
                <Text style={styles.profil}>Full-stack web and mobile developer</Text>
                </View>
            </View>
            <View>
                <Button onPress={()=>{navigation.navigate('Certificats')}}   color="#ffc107" title="View Certificat"/>
            </View>
        </View>
    )
} 


const styles =StyleSheet.create({
    home_container:{
       
            flex: 1,
            justifyContent:"space-around",
            alignItems: 'center',
            backgroundColor: "teal",
    },

    imageStyle:{
        
      width:300,
      height:300,
       marginBottom:25,
    },

    imageBlock:{
        textAlign:"center",
        
       
    },

    figcaption:{
        textAlign:"center",
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 1,
        borderWidth:2,
        borderColor:"#ffc107",
        padding: 10,

    },

    profil:{
        color:"white",
        fontSize:20,
        fontWeight: 'normal',
        textAlign:"center"
    },
    profil2:{
        fontWeight:"bold"
    },
    button:{
        fontWeight: 'bold',
        backgroundColor: "#ffc107",
    }



})