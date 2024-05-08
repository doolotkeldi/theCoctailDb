import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/images/ingredients/";

function RandomIngredient() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const newIngredients = [];
        while (newIngredients.length < 8) {
          const response = await axios.get(
            "https://www.thecocktaildb.com/api/json/v1/1/random.php"
          );
          const cocktail = response.data.drinks[0];
          const cocktailIngredients = [];
          // Extract ingredients from the cocktail
          for (let i = 1; i <= 15; i++) {
            const ingredient = cocktail[`strIngredient${i}`];
            if (ingredient) {
              cocktailIngredients.push(ingredient);
            } else {
              break;
            }
          }
          newIngredients.push(...cocktailIngredients);
        }
        setIngredients(newIngredients);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    }
    fetchIngredients();
  }, []);

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="line-content"></div>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          fontFamily: "Arial",
          fontSize: "18px",
          marginTop: "30px",
        }}
      >
        Random Ingredients
      </h1>
      <div className="coctail-blocks container">
        {ingredients.slice(0, 4).map((item) => (
          <Link to={`/ingredient/${item}`} key={item} className="coctail-block">
            <div className="coctail-block-image">
              <img src={`${url}${item}.png`} alt="" />
            </div>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RandomIngredient;
