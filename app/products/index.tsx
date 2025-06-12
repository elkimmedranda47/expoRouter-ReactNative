import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProducList() {
  return (
    <View style={styles.continue}>
      <Text>Products</Text>
      <Link href={"/products/1"}>Product 1</Link>
      <Link href={"/products/52"}>Product 52</Link>
      <Link href={"/products/3"}>Product 3</Link>
    </View>
  )
}
const styles = StyleSheet.create({continue:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    gap:20
},
});
