import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RandomCoctail.css";

function RandomCocktail() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    async function fetchCocktails() {
      try {
        const newCocktails = [];
        while (newCocktails.length < 8) {
          const response = await axios.get(
            "https://www.thecocktaildb.com/api/json/v1/1/random.php"
          );
          const cocktail = response.data.drinks[0];
          if (!newCocktails.some((c) => c.idDrink === cocktail.idDrink)) {
            newCocktails.push(cocktail);
          }
        }
        setCocktails(newCocktails);
      } catch (error) {
        console.error("Ошибка при получении коктейлей:", error);
      }
    }
    fetchCocktails();
  }, []);

  return (
    <section className="container random-coctail">
      <div className="line-content"></div>

      <h1>Random Coctails</h1>
      <div className="coctail-blocks container">
        {cocktails.map((item) => (
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

      <div className="line-content"></div>
    </section>
  );
}

export default RandomCocktail;
