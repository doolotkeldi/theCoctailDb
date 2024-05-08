import React from "react";
import "./SectionAPI.css";
import upImage from "../../assets/Images/upImage.gif";
import arrowImage from "../../assets/Images/arrowImage.png";
import textImage from "../../assets/Images/testImage.png";
import emailImage from "../../assets/Images/email.png";
import CodeImage from "../../assets/Images/code.png";
import coctailImage from "../../assets/Images/coctail.jpeg";
import alhagol1 from "../../assets/Images/alhagol1.png";
import alhagol2 from "../../assets/Images/alhagol2.png";
import alhagol3 from "../../assets/Images/algagol3.png";
import imagesImage from "../../assets/Images/imagesImage.png";
function SectionAPI() {
  return (
    <section>
      <div className="container text-container">
        <div className="up-image">
          <img src={upImage} alt="" />
          Free Recipe API Support
        </div>
        <p>
          The API and site will always remain free to access at its basic level.{" "}
          <br />
          If you love our service and want extra features you can sign up as a
          Patreon supporter for $3. <br />
          You can cancel anytime. This allows us to pay for the servers and
          bandwidth and develop new features and content.
        </p>

        <div className="up-image">
          <img src={textImage} alt="" />
          Free Recipe API Support
        </div>
        <p>
          You can use the test API key "1" during development of your app or for
          educational use (see test links below) <br />
          However you must sign up to Patreon if you want a production API key
          if releasing publicly on an appstore. <br />
          All data is returned in JSON format. We recomend Json view chrome
          extension to view the data in your web browser.
        </p>

        <div className="up-image">
          <img src={arrowImage} alt="" />
          API Production Key Upgrade
        </div>
        <p>
          All Patreon supporters have access to the beta version of the API
          which allows mutiple ingredient filters. <br />
          Supporters also get special lookups for Popular and Recent Cocktails.
          You can also list the full database rather than limited to 100 items.{" "}
          <br />
          You also get access to the latest and multi random image API methods.{" "}
          <br />
          Finally you also get access to adding your own cocktails and images.{" "}
          <br />
          Please sign up on Patreon and you will be sent a new key.
        </p>
        <div className="up-image">
          <img src={emailImage} alt="" />
          Contact
        </div>
        <p>
          Email: thedatadb@gmail.com (please state if you are a Patreon
          Supporter)
        </p>

        <div className="up-image">
          <img src={CodeImage} alt="" />
          API Methods using the developer test key '1' as the API key
        </div>
        <div className="api-text">
          <p>Search cocktail by name</p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
          </p>
        </div>
        <div className="api-text">
          <p>List all cocktails by first letter</p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/search.php?f=a
          </p>
        </div>
        <div className="api-text">
          <p>Search ingredient by name</p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
          </p>
        </div>
        <div className="api-text">
          <p>Lookup full cocktail details by id</p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
          </p>
        </div>
        <div className="api-text">
          <p>Lookup ingredient by ID</p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552
          </p>
        </div>
        <div className="api-text">
          <p>Lookup a random cocktail</p>
          <p className="p">www.thecocktaildb.com/api/json/v1/1/random.php</p>
        </div>
        <div className="api-text">
          <p>
            Lookup a selection of 10 random cocktails (only available to $2+
            Patreon supporters)
          </p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/randomselection.php
          </p>
        </div>
        <div className="api-text">
          <p>
            List Popular cocktails (only available to $2+ Patreon supporters)
          </p>
          <p className="p">www.thecocktaildb.com/api/json/v1/1/popular.php</p>
        </div>
        <div className="api-text">
          <p>Search by ingredient</p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
          </p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka
          </p>
        </div>
        <div className="api-text">
          <p>
            Filter by multi-ingredient (only available to $2+ Patreon
            supporters)
          </p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis
          </p>
        </div>
        <div className="api-text">
          <p>Filter by alcoholic</p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
          </p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
          </p>
        </div>
        <div className="api-text">
          <p>Filter by Category</p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
          </p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
          </p>
        </div>
        <div className="api-text">
          <p>Filter by Glass</p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
          </p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute
          </p>
        </div>
        <div className="api-text">
          <p>List the categories, glasses, ingredients or alcoholic filters</p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/list.php?c=list
          </p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/list.php?g=list
          </p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/list.php?i=list
          </p>
          <p className="p">
            www.thecocktaildb.com/api/json/v1/1/list.php?a=list
          </p>
        </div>

        <div className="api-image-content">
          <div className="up-image">
            <img src={imagesImage} alt="" />
            <p style={{ margin: "0" }}> Images</p>
          </div>
          <div className="api-image-text">
            <p>Drink thumbnails</p>
            <p>Add /preview to the end of the cocktail image URL</p>
            <p className="p">
              /images/media/drink/vrwquq1478252802.jpg/preview (100x100 pixels)
            </p>
            <img src={coctailImage} alt="" />
            <p style={{ marginTop: "15px" }}>Ingredient Thumbnails</p>
            <p className="p">
              www.thecocktaildb.com/images/ingredients/gin-Small.png
            </p>
            <p className="p">
              www.thecocktaildb.com/images/ingredients/gin-Small.png{" "}
            </p>
            <p className="p">(100x100 pixels)</p>
            <p className="p">
              www.thecocktaildb.com/images/ingredients/gin-Medium.png
            </p>
            <p className="p">(350x350 pixels)</p>
            <p className="p">
              www.thecocktaildb.com/images/ingredients/gin.png
            </p>
            <p className="p">(700x700 pixels)</p>
          </div>
        </div>

        <div className="alhagole-image">
          <img className="alhagol-image-1" src={alhagol1} alt="" />
          <img className="alhagol-image-2" src={alhagol2} alt="" />
          <img className="alhagol-image-3" src={alhagol3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SectionAPI;
