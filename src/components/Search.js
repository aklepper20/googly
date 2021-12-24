import React, { useState } from "react";
import "../css/Search.css";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
//want to enter search with enter key. 1. change to form and button that runs function put type="submit"

//GOAL - re-use the search input component inside the searchpage.js but we DONT want the buttons SOOOO
//hidebuttons, if we dont pass anything in - we assume its false.
//funcitonality of the buttons are there on the dom, they just arent displayed
function Search({ hideButtons = false }) {
  const [input, setInput] = useState("");
  const navigation = useNavigate();

  const [{}, dispatch] = useStateValue();

  const search = (e) => {
    e.preventDefault();

    //put the search term inside the data layer
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    //when you hit enter with your input in, it will redirct you to the SearchPage.js component
    navigation("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {/* if we do NOT pass hidebuttons props we will show the buttons, then go ahead and show the html */}
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        //   show the same exact html but we give it a special class name that display: none it
        //hide buttons but keep functionality
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
