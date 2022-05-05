import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, SafeAreaView,Image, FlatList } from "react-native";

export default function SingleCertificat({libelle,structure,img}) {
    
    return(
        
        <View style={styles.certificat}>
            <Image source={img} style={styles.imageStyle}/>
            <Text style={styles.libelle} >{libelle}</Text>
            <Text style={styles.structure} >{structure}</Text>
        </View>
       
    )
}



const styles = StyleSheet.create(
    {
        certificat:{
            marginBottom: 25,
        },
        imageStyle:{
            width:300,
            height:300,
        },
    
        libelle:{
        color:"white",
        fontSize:18
        },
    
        structure:{
            color:"#ffc107",
            fontSize:20,
            fontWeight:"bold",
            fontStyle: 'italic',
        }
    }
)