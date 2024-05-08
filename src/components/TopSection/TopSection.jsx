import React from "react";
import SupportImage from "../../assets/Images/2.png";
import Image3 from "../../assets/Images/3.png";
import "./TopSection.css";
function TopSection() {
  return (
    <section>
      <div className="text-content container">
        <img className="logo-image-1" src={Image3} alt="" />
        <img className="logo-image-2" src={Image3} alt="" />
        <h1>Welcome to TheCocktailDB</h1>
        <p>
          An open, crowd-sourced database of drinks and cocktails from around
          the world.
        </p>
        <p> We also offer a free cocktail API for anyone wanting to use it.</p>{" "}
        <p>
          If you like the site, please consider supporting us on Patreon by
          clicking the link below...
        </p>
        <div className="support-image">
          <img src={SupportImage} alt="" />
          Click to upgrade free API to premium for $3
          <p>Currently (336 supporters)</p>
        </div>
      </div>
    </section>
  );
}

export default TopSection;
