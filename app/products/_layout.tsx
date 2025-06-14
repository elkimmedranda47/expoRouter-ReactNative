import { Slot } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';


export default function ProductLayout(){
    return(
        <View style={style.containe}>
            <Slot/>
                <View style={style.discountedProductots}>
                <Text> Discounted Products</Text>        
                </View>          
        </View>
    );
    
}



const style= StyleSheet.create({
    containe:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    discountedProductots:{
        backgroundColor:"orange",
        padding:20,
        width:"100%"
    }
});