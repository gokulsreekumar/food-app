import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";


// hooks are like functions returning items (naming is caps for all first)
// Components are JSX blocks used as 'Elements' ( like <SearchBar /> that is passed in with PROPS, naming is 'use'

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price)=>{
    // price === $ || $$ || $$$
    return results.filter((result)=>{
      return result.price === price; 
      // filter is a method that takes in a callback that runs on each data and gets back a boolean.
      // the callback function must have an argument of each item in the list.
    });

  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        // onTermSubmit={()=>searchApi()}, instead of writing so, we can just pass on a reference to this function without parantheses
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null} 
      <ScrollView>
      <ResultsList results={filterResultsByPrice('$')} title = "Cost Effective" />
      <ResultsList results={filterResultsByPrice('$$')} title = "Bit Pricier" />
      <ResultsList results={filterResultsByPrice('$$$')} title = "Big Spender" /> 
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
  },
});
export default SearchScreen;
