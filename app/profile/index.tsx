import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Profile(){
    return (<View style={styles.continue}>
                <Text> Profile </Text>
            </View>)

}


const styles = StyleSheet.create({
    continue:{
       flex:1,
       justifyContent:"center",
       alignItems:"center", 
    }
})