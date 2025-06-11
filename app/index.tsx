import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap:20
        //backgroundColor: "#EBDEC4",  // Un color de fondo suave para el contenedor principal
      }}
    >
      <Text>Home page</Text>
      <Link href={"/about"}>About</Link>
      <Link href={"/profile"}>Profile</Link>
    </View>
  );
}
