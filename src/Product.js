import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./Product.css";
import { useLocation, useParams } from "react-router-dom";
import data from "./data.json";

function App2() {
  const location = useLocation()
  const params = useParams()
  const product = data.find(item =>item.id==params.id)
  console.log(product)
  return (
    <>
    <Navbar />
      <div className="content2">
        <img
          alt="item"
          src={product.image}
          className="image"
        ></img>
        <div className="details">
            <div className="price2">{product.price}</div>
            <div className="description2">{product.description}</div>
        </div>
      </div>
    </>
  );
}

export default App2;
