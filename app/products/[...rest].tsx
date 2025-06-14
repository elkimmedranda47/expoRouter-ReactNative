
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function CatchAllProductDetails() {
    // Retrieves parameters from the URL, expecting an array named 'rest'
    const { rest } = useLocalSearchParams<{rest: string[]} >();

    return (
        // The main container that will be horizontally divided
        <View style={styles.mainContainer}>

            {/* First half of the screen */}
            <View style={styles.leftHalf}>
                {/* Text content for the first half */}
                <Text style={styles.titleText}>Detalle producto - La misma interface todos los productos</Text>
                <Text style={styles.bodyText}>Catch all product details</Text>
                {/* Icono de carrito de compras */}
                <Ionicons name="cart-outline" size={60} color="black" style={styles.cartIcon} />
                {/* Contenido de texto para la primera mitad */}
            </View>

            {/* Second half of the screen */}
            <View style={styles.rightHalf}>
                {/* Text content for the second half */}
                {/*<Text style={styles.titleText2}>Link producto - URL</Text>*/}
                {/* Displays the product URL, joining array elements with a slash */}
                <Text style={styles.bodyText2}> ({rest.join("/")})</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    // Style for the main container that holds both halves
    mainContainer: {
        flex: 1, // Takes up the full available height
        flexDirection: 'row', // Arranges children (leftHalf, rightHalf) horizontally
    },
    // Style for the left half of the screen
    leftHalf: {
        flex: 1, // Takes up 50% of the mainContainer's width
        backgroundColor: '#F0B211', // Example color: Tomato
        justifyContent: 'center', // Centers content vertically within this half
        alignItems: 'center', // Centers content horizontally within this half
        padding: 20, // Adds padding around the content
    },
    // Style for the right half of the screen
    rightHalf: {
        flex: 1, // Takes up the other 50% of the mainContainer's width
        backgroundColor: '#4682B4', // Example color: SteelBlue
        justifyContent: 'center', // Centers content vertically within this half
        alignItems: 'center', // Centers content horizontally within this half
        padding: 20, // Adds padding around the content
    },
   // Estilo común para títulos más grandes
   titleText: {
    fontSize: 32, // Tamaño de fuente grande
    fontWeight: '500', // Tipo de letra "fuerte" o muy negrita
    fontStyle: 'italic', // Aplica estilo cursiva
    marginBottom: 10,
    textAlign: 'center', // Asegura que el texto esté centrado
    color: 'black', // Color de texto negro
},

titleText2: {
    fontSize: 32, // Tamaño de fuente grande
    fontWeight: '900', // Tipo de letra "fuerte" o muy negrita
   
    marginBottom: 10,
    textAlign: 'center', // Asegura que el texto esté centrado
    color: 'black', // Color de texto negro
},
    // Common style for body text
    bodyText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
    },
    bodyText2: {
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
        textShadowColor: 'white', // Color de la sombra del texto
        textShadowOffset: { width: 2, height: 2 }, // Desplazamiento de la sombra (X, Y)
        textShadowRadius: 5, // Radio de desenfoque de la sombra
    },
    // Estilo para el icono del carrito de compras
    cartIcon: {
        marginBottom: 20, // Espacio debajo del icono
    },
});

/*

import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function CatchAllProductDetails() {
    const { rest } = useLocalSearchParams<{rest: string[]} >();
//const numericId = parseInt(id as string,10);

//console.log(typeof id);
//console.log(typeof numericId);

  return (
    <View style={styles.containe}>
      <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 10 }}>Detalle producto -La misma interface todos los productos </Text>
      <Text>Catch all product details</Text>
      <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 10 }} > likn producto-Url </Text>
      <Text >  {rest.join("/") }</Text>  
    </View>
  );
}
const styles = StyleSheet.create({
    containe:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor: "#EBDEC4",
    gap:20
    },
});


*/