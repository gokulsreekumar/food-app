import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit  }) => {
  return (
    <View style={styles.searchBoxStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => {
          onTermChange(newTerm);
        }}
        onEndEditing={() => {
          onTermSubmit();
        }}
        style={styles.textInputStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
  },
  textInputStyle: {
    flex: 1,
    fontSize: 20,
  },
  searchBoxStyle: {
    backgroundColor: "rgb(230,230,230)",
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  iconStyle: {
    padding: 10,
    fontSize: 30,
  },
});
export default SearchBar;
