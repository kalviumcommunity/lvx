import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Item from "./Components/Item/Item";
import data from "./data.json";
import { useEffect } from "react";
import "./App.css";
function App() {

  const url = 'http://127.0.0.1:2000/lvx/items'
  useEffect(()=>{

    const fetchDB = async() =>{
      try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
      }catch(err){
        console.log(err)
      }
    }
    fetchDB()
  },[])
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
