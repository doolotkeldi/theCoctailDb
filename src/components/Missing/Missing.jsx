import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Missing.css";
function Missing() {
  return (
    <div className="Missing">
      <Header />
      <div className="missing-text ">
        <p>Drinks: Missing Images</p>
        <p>
          NOTE: To find images try a google image search for the main
          ingredients listed. Click the search icon to find the first 2
          ingredients
        </p>
        <p>None Found, all drinks have images!</p>
      </div>
      <Footer />
      <div className="white"></div>
    </div>
  );
}

export default Missing;
