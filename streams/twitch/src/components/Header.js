import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
const Header = (props) => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamsss
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All my streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};
export default Header;
