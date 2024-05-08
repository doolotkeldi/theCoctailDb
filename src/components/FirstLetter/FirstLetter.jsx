import React from "react";
import { Link } from "react-router-dom";
import "./FristLetter.css";

function FirstLetter() {
  const ArrayName = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div className="search-text container">
      <h1>Browse By Name</h1>
      <div className="text-item">
        {ArrayName.map((item) => (
          <Link key={item} to={`/byname/${item.toLocaleLowerCase().trim()}`}>
            {item} /{" "}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FirstLetter;
