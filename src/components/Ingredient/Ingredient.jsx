import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Ingredient.css";
import diraction1 from "../../assets/Images/9.png";
import diraction2 from "../../assets/Images/8.png";

const API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=";
const urlAPI = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
const url = "https://www.thecocktaildb.com/images/ingredients/";
const disAPI = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=";

function Ingredient() {
  let { text } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [disText, setDisText] = useState("");
  const [doolotkeldi, setDoolotkeldi] = useState("");
  const [image, setImage] = useState("");

  async function getService() {
    const responce = await axios.get(`${disAPI}${text}`);

    console.log(responce);
    console.log(responce.data.ingredients[0].strIngredient);
    setImage(responce.data.ingredients[0].strIngredient);
    showService(responce.data.ingredients[0].strIngredient);
    setDisText(responce.data.ingredients[0].strDescription);
    // setDisText(responce.data.ingredients[0].strDescription)
    // setDoolotkeldi(responce.data.ingredients[0].strIngredient)

    // console.log(res.data.drinks)
  }

  useEffect(() => {
    getService();
  }, [text]);

  async function showService(doolotkeldi) {
    const res = await axios.get(`${urlAPI}${doolotkeldi}`);
    console.log(res);
    setData(res.data.drinks);
  }

  function incrementHandler(id) {
    let addText = Number(text) + 1;
    navigate(`/ingredient/${addText}`);
  }
  function decrementHandler(id) {
    let addText = Number(text) - 1;
    navigate(`/ingredient/${addText}`);
  }

  return (
    <div className="alhagol-container container">
      <div className="alhagol-content">
        <div className="alhagol-info">
          <h1>{image}</h1>
          <Link to={`/bigIngrid/${image}`} className="alhagol-info-image">
            <img src={`${url}${image}.png`} alt="" />
          </Link>
          <div className="arrowImage">
            <img onClick={decrementHandler} src={diraction1} alt="" />
            <img onClick={incrementHandler} src={diraction2} alt="" />
          </div>
          <div></div>
        </div>

        <div className="alhagol-text">
          <h1>Drinks</h1>
          <div className="alhagol-blocks">
            {data.map((item) => (
              <Link
                to={`/idCoctail/${item.idDrink}`}
                key={item.id}
                className="alhagol-block"
              >
                <div className="alhagol-block-image">
                  <img src={item.strDrinkThumb} alt="" />
                </div>
                {item.strDrink}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="discription">
        <p>{disText}</p>
      </div>
    </div>
  );
}

export default Ingredient;
