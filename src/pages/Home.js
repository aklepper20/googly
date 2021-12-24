import React from "react";
import "../css/Home.css";
import Search from "../components/Search";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

//Link - Acts as an a tag but will link a route to the /about url link
//a tags refresh, link tags do not
function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="head__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/about">Store</Link>
        </div>

        <div className="home__headerRight">
          <Link to="/about">Gmail</Link>
          <Link to="/about">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
