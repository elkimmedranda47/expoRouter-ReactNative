import { Slot } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function Authlayout() {
  return (
    <View style={styles.containe}>
  
    <Image
        source ={require("../../assets/images/react-logo.png")}
        style={styles.logo}
    />
      <Slot/>
    </View>
  )
}

const styles = StyleSheet.create({
    containe:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    logo:{
        width:100,
        height:100,
    }
})