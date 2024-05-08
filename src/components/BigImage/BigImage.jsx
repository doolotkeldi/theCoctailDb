import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./BigImage.css";

const API = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const url = "/images/media/drink/vrwquq1478252802.jpg/preview (100x100 pixels)";
function BigImage() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  console.log(data);
  const [user, setUser] = useState();
  async function getService() {
    const res = await axios.get(`${API}${id}`);
    console.log(res.data.drinks[0]);
    setData(res.data.drinks[0]);
    setUser(res.data.drinks[0].strDrinkThumb);
  }
  useEffect(() => {
    getService();
  }, []);
  function handleClick(event) {
    setData(event.target);
    if (data) {
      navigate(-1);
    }
  }
  return (
    <div>
      <div onClick={handleClick} className="big-image">
        <img src={user} alt="" />
      </div>
    </div>
  );
}

export default BigImage;
