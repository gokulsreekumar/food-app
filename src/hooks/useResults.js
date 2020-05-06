import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

// All the code we need to make a request to the yelp api

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  // async function is used for making a request
  // similar to use of .then() await waits till response is got.
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 30,
          term: searchTerm,
          location: "san jose",
        },
      });
      // response.data is the JSON response
      setResults(response.data.businesses);
      console.log("Searching!");
      // console.log(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong!");
      // console.log('Something went wrong!');
    }
  };
  useEffect(() => {
    searchApi("pasta"); // a default search term run initially, one time only.
  }, []);
  return [searchApi, results, errorMessage];
};
