import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap:20,
        backgroundColor: "#EBDEC4",  // Un color de fondo suave para el contenedor principal
      }}
    >
       <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 10 }}>Página de Inicio</Text>
      <Link href={"/about"}>Acerca de</Link>
      <Link href={"/profile"}>Perfil</Link>
      <Link href={"/products"} style={{ fontSize: 24, fontWeight: "bold" }}>Productos</Link>
    </View>
  );
}
