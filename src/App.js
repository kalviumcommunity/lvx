import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Item from "./Components/Item/Item";
import data from "./data.json";
import "./App.css";
function App() {
  return (
    <>
    <Navbar />
      <div className="content">
        {data.map((product, index) => (
          <Item
            key={index}
            image={product.image}
            price={product.price}
            description={product.description}
            id={product.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
