import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./IdCoctail.css";
import ListImage from "../../assets/Images/7.png";
import diraction1 from "../../assets/Images/9.png";
import diraction2 from "../../assets/Images/8.png";

const API = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const url = "https://www.thecocktaildb.com/images/ingredients/";
const dataAPI = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=";

function IdCoctail() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [data, setData] = useState({});
  // const [idIngrid,setIdIngrid] = useState(0)
  const [strIngrid, setStrIngrid] = useState("");

  async function getService() {
    const res = await axios.get(`${API}${id}`);
    setData(res.data.drinks[0]);
    showService(res.data.drinks[0]);
    console.log(res);
  }

  useEffect(() => {
    getService();
  }, [id]); // Перезапускаем эффект при изменении параметра id

  async function showData(text) {
    const res = await axios.get(`${dataAPI}${text}`);
    console.log(res.data.ingredients[0].idIngredient);
    navigate(`/ingredient/${res.data.ingredients[0].idIngredient}`);
  }
  function diractionHandler() {
    // Увеличиваем id на 1 и добавляем его к текущему URL
    const nextId = Number(id) + 1;
    navigate(`/idCoctail/${nextId}`);
  }
  function decrementHandler() {
    const nextId = Number(id) - 1;
    navigate(`/idCoctail/${nextId}`);
  }

  function showService(data) {
    let ingrid = [];
    for (let i = 1; i < 20; i++) {
      let show = data["strIngredient" + i];
      if (show) {
        ingrid.push(
          <div
            onClick={() => showData(show)}
            className="image-block"
            key={show}
          >
            {/* to={`/ingredient/${show}`} */}
            <div className="image-block-img">
              <img src={`${url}/${show}.png`} alt="" />
            </div>
            <p>{show}</p>
          </div>
        );
      }
    }
    setStrIngrid(ingrid);
  }

  return (
    <div className="container ingridContainer">
      <div className="ingrid-text">
        <h1>Mojito</h1>
        <h1>Ingreients</h1>
      </div>
      <div className="ingrid-content">
        <div className="ingrid-info">
          <Link to={`/bigImage/${id}`} className="ingrid-global-image">
            <img src={data.strDrinkThumb} alt="" />
          </Link>
          <div className="ingrid-info-text">
            <p className="text-p-1">Image Source:</p>
            <img src={ListImage} alt="" />
            <Link className="text-p-2">Creative Commons Pixabay</Link>
          </div>
          <div className="diraction-image">
            <img onClick={decrementHandler} src={diraction1} alt="" />
            <img onClick={diractionHandler} src={diraction2} alt="" />
          </div>
        </div>
        <div className="image-blocks">{strIngrid}</div>
      </div>

      <div className="ingrid-instructions">
        <h1>Instructions</h1>
        <p>{data.strInstructions}</p>
        <h1>Glass</h1>
        <p>{data.strGlass}</p>
      </div>
    </div>
  );
}

export default IdCoctail;
