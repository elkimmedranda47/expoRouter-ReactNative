import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CustomNoFound() {
  return (
    <View style={style.containe} >
      <Text>CustomNotFound</Text>
      <Link href={"/"}>Go to home</Link>
    </View>
  )
}
const style = StyleSheet.create({containe:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    gap:20,
}},);


/*
const styles = StyleSheet.create({containe:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap:20,
   // backgroundColor: "#11A5F0",  // Un color de fondo suave para el contenedor principal
  },});
  */