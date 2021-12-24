import React from "react";
import { Link } from "react-router-dom";
import "../css/SearchPage.css";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import Search from "../components/Search";
//1. hit enter
//2. redirect to /search
//3. push the search term into the data layer
//4. once its in the data layer, we pull it using useStateValue in searchPage
//5. then custom hook, with the search term passed to it into googlesearch() which makes a call to google api and that returns the data as an object

function SearchPage() {
  //deconstruct the term, import the useStateValue and whatever input the user typed in will be pulled from the data layer
  const [{ term }, dispatch] = useStateValue();
  //passes the term input by user into the useGoogleSearch to run th eeffect and gets the result unique to the term
  const { data } = useGoogleSearch(term);

  //mock api call
  //   const data = Response;
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults}
            results {data?.searchInformation.formattedSearchTime} seconds for
            {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link} target="_blank">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0].src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0].src}
                      alt="Google Image"
                    />
                  )}
                {item.displayLink}
              </a>
              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
