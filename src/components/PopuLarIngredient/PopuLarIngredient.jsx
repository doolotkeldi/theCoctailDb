import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PopuLarIngredient.css";
import { Link } from "react-router-dom";

const API =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=";
const byName = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";

function PopuLarIngredient() {
  const [data, setData] = useState([]);
  const [text, setText] = useState([]);
  async function getService() {
    const res = await axios.get(API);
    const urlName = await axios.get(byName);
    setData(res.data.drinks);
    //  console.log(res.data.drinks)
    console.log(urlName.data.drinks);
    setText(urlName.data.drinks);
  }
  useEffect(() => {
    getService();
  }, []);

  return (
    <div className="container popular-ingredient-container">
      <div className="line-content"></div>
      <h1>Popular Ingredients </h1>

      <div style={{ width: "100%" }} className="coctail-blocks">
        {text.slice(0, 4).map((item) => (
          <Link
            to={`/ingredient/${item.strIngredient1}`}
            key={item}
            className="coctail-block"
          >
            <div className="coctail-block-image">
              <img
                src={`https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}.png`}
                alt=""
              />
            </div>
            <p>{item.strIngredient1}</p>
          </Link>
        ))}
      </div>
      <div className="line-content"></div>
    </div>
  );
}

export default PopuLarIngredient;
