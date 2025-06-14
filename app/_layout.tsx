/*
//diseño simple que usa el componente de Pila del exporador (Stack)

import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}
*/


/*diseño  componente Ranura  (Slot) este componete va representar 
o a envolver las paginas que estan en la Raiz  */

import { Slot } from "expo-router";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
  <SafeAreaView style={style.containe}>
    <View style={style.header}>
      <Text style={style.headerText}> My Expo App </Text>
    </View>
      <Slot/>
    <View style={style.footer}>
      <Text style={style.footerText}>© ekn47</Text>
    </View>
     
  </SafeAreaView>
  );
}

const style = StyleSheet.create({
  containe:{
    flex:1
  },
  header: {
    backgroundColor:"red",
    padding:20,
  },
  headerText:{
    color:"white",
  },
  footer:{
    backgroundColor:"blue",
    padding:20,
  },
  footerText:{
    color:"white",
  },

});


