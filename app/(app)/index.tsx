import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        gap: 20
      }}
    >
    
      <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 10 }}>
           Home page
      </Text>
      <Link href={"/about"}>About</Link>
      <Link href={"/profile"}>profile</Link>
      <Link href={"/profile/vishwas"}>profile/vishwas-notFound /profile </Link>
      <Link href={"/products"} style={{ fontSize: 24, fontWeight: "bold" }}>Products</Link>
      <Link href={"/mmm"}>Missing route -notFound / </Link>
      <Link href={"/login"}>Login</Link>

      <Link href="/products/best-sellers/playstation" asChild> 
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>PlayStation</Text>
        </Pressable>
      </Link>

    </View>
  );}
  const styles = StyleSheet.create({
    button:{
      backgroundColor:"#0ea5e9",
      padding:12,
      borderRadius:6,
    },
    buttonText:{
      color:"white",
      fontSize:16,
    }
  });

  /*
const styles = StyleSheet.create({containe:{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  gap:20,
 // backgroundColor: "#EBDEC4",  // Un color de fondo suave para el contenedor principal
},});
*/
