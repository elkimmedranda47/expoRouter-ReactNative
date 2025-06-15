
import { Link, router } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function Login() {
  return (
    <View style={styles.containe}>
      <Text>Login</Text>
      <Link href={"./register"}>Create acount</Link>
      <Button title="Login" onPress={()=>router.replace("/profile")}></Button>
    </View>
  )
}
/*
video 9
 tema 1 personalizar la aparienza de nuestro enlaces. app/index.tsx -- Pressable --asChild
 tema 2 rutas relativas. products/index.tsx
 tmea 3 navegacion imperativa,navegar entre pantallas con programacion, objeto enrutador.   ,router.replace(/profile),
 tema 4 redirigir al usuario a otra pantalla diferente en funcion de una condicion. profile/index.tsx <Redirect href=/login/>; 

<Button title="Login" onPress={()=>router.back("/profile")}></Button>
<Button title="Login" onPress={()=>router.push("/profile")}></Button>
<Button title="Login" onPress={()=>router.repace("/profile")}></Button>
repace: sutituye la pantalla atual por la nueva pantalla asi cuadno 
se logea el usuario y le da para atras, no vuelve a /login sino a /profile 
*/

const styles = StyleSheet.create({containe:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
},
});
