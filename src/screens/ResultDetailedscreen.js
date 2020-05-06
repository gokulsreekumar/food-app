import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultDetailedScreen = ({ navigation }) => {
  const [result, setResult] = useState(null); // Null for default object, so check for null before showing
  const id = navigation.getParam("id");
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  // call this getResponse one time.
  useEffect(()=>{
      getResult(id);
  },[]);
  if(result===null){
    return null;
  }
  return (
    <View>
      <Text style={styles.textStyle}> {result.name} </Text>
      <FlatList
      data = {result.photos}
      keyExtractor = {(photo)=> photo}
      renderItem = {({item})=>{
        return <Image
            style = {styles.imageStyle}
            source = {{uri: item}}
        />
      }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
  },
  imageStyle:{
    height: 200,
    width: 300,
  }
});
export default ResultDetailedScreen;
