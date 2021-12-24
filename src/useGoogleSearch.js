import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "9be20a73840a33466";

//pass in hook and whenever that changes then we fire off this code
//so whenever someone types an input, it dispatches into the data layer, searchpage pulls the term
//
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  //this will get all of the google search results and then give it to the searchPage
  //this hook will return the data and we display on searchPage
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    };
    fetchData();
  }, [term]);

  //returns the data in object form
  return { data };
};

export default useGoogleSearch;
