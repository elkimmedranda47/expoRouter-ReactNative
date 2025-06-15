import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProducList() {
  return (
    <View style={styles.containe}>
      <Text>Products</Text>
      
      

      <Link href={"./1"} relativeToDirectory >Ver Producto 1</Link>
      <Link href={"/products/52"}>Ver Producto 52</Link>
      <Link href={"/products/3"}>Ver Producto 3</Link>
      
      <Link href={"/products/best-sellers/playstation-5"}>PlayStation 5 (best seller)</Link>
      <Link href={"/products/deals/black-friday/playstation-5"}>PlayStation 5 (deals)</Link>
      <Link href={"/products/search/playstation-5"}>PlayStation 5 (Search)</Link>
      
      <Link href={"/products/deals/black-friday/apple-iphone-13?utm_source=whatsapp&utm_medium=chat&utm_campaign=black_friday_2025_sale&utm_content=iphone13_promo_chat"}>
  📱 ¡iPhone 13 en Black Friday - WhatsApp!
</Link>


      
    </View>
  )
}
const styles = StyleSheet.create({containe:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    gap:10
},
});
