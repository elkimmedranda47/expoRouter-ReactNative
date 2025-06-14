import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.containe}>
    
       <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 10 }}>Home page</Text>
      <Link href={"/about"}>About</Link>
      <Link href={"/profile"}>profile</Link>
      <Link href={"/profile/vishwas"}>profile/vishwas-notFound /profile </Link>
      <Link href={"/products"} style={{ fontSize: 24, fontWeight: "bold" }}>Products</Link>
      <Link href={"/mmm"}>Missing route -notFound / </Link>
    </View>
  );}

const styles = StyleSheet.create({containe:{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  gap:20,
 // backgroundColor: "#EBDEC4",  // Un color de fondo suave para el contenedor principal
},});
