import React from "react";
import { useParams } from "react-router-dom";
import "./BigIngridImage.css";
const url = "https://www.thecocktaildb.com/images/ingredients/";
function BigIngridImage() {
  let text = useParams();

  return (
    <div className="bigAlhogol">
      <img src={`${url}${text.text}.png`} alt="" />
    </div>
  );
}

export default BigIngridImage;
