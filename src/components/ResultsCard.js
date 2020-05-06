import React from "react";
import { View, StyleSheet, Text, Image} from "react-native";


const ResultsCard = ({result})=>{
    return (
    <View style={styles.container}>
        <Image style={styles.imageStyle} source={{uri: result.image_url}}/>
        <Text style={styles.name}>{result.name}</Text>
    <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
    );
};
const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
    },
    imageStyle:{
        width:250,
        height: 120,
        borderRadius: 5,
        marginBottom:5
    },
    name:{
        fontWeight:'bold'
    },
    container:{
        margin: 15,
    }
}); 

export default ResultsCard;