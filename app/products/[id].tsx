import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProductDetail() {
//id:Number;
const { id } = useLocalSearchParams();
const numericId = parseInt(id as string,10);

console.log(typeof id);
console.log(typeof numericId);

  return (
    <View style={styles.continue}>
      <Text>Details about Product witth id {id}</Text>
     
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
