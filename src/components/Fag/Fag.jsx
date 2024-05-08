import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Fag.css";
import fag from "../../assets/Images/faq.png";

function Fag() {
  return (
    <div>
      <Header />
      <div className="container fag-container">
        <img src={fag} alt="" />
        <p>
          How do I add a cocktail? <br />
          Only Patreon supporters can add new cocktails. The link is on Patreon
          as a news item. Just make sure you have a nice large JPG image to
          upload after you add them.
        </p>
        How do I apply for an API key? <br />
        If you are a developer, then you can use the test api key of '1' to get
        started. <br />
        Once you have written your app you can support us on Patreon and apply
        for a production API key via email. API keys usually take 24hrs.
        <p>
          How do I upload an image? <br />
          Just click the red upload image button and upload a picture that is
          square dimensions. We recomend 700x700 size.
        </p>
        <p>
          Are there any limits on the API? <br />
          No limits, the API is unlimited usage.
        </p>
        <p>
          I'm have a commercial app, can I use the database? <br />
          Yes! But we expect you to sign up on Patreon. We are non-profit and
          all support goes towards the site.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Fag;
