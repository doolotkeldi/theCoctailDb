import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PopularCoctail.css";
import { Link } from "react-router-dom";

const API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Vodka";

function PopularCoctail() {
  const [coctail, setCoctail] = useState([]);
  async function getService() {
    const res = await axios.get(API);
    console.log(res.data.drinks);
    setCoctail(res.data.drinks);
  }
  useEffect(() => {
    getService();
  }, []);
  return (
    <section>
      <div className="coctail-container container">
        <h1>Popular Drinks</h1>
        <div className="coctail-blocks container">
          {coctail.slice(0, 8).map((item) => (
            <Link
              to={`/idCoctail/${item.idDrink}`}
              key={item.id}
              className="coctail-block"
            >
              <div className="coctail-block-image">
                <img src={item.strDrinkThumb} alt="" />
              </div>
              {item.strDrink}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCoctail;
