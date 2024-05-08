import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
function ByName() {
  const { item } = useParams();
  const [data, setData] = useState([]);
  async function getService() {
    const res = await axios.get(`${API}${item}`);
    console.log(res.data.drinks);
    setData(res.data.drinks);
  }
  useEffect(() => {
    getService();
  }, [item]);
  return (
    <div>
      <div className="coctail-blocks container">
        {data.map((item) => (
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
  );
}

export default ByName;
