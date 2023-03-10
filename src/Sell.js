import React from 'react'
import Navbar2 from './Components/Navbar2/Navbar2'
import './Sell.css'
import { BiImageAdd } from "react-icons/bi";
function Sell() {
    return (
      <>
      <Navbar2 />
      <div className='sell-page'>
      <div className='sell-card'>
        <div className='image-section'>
          <div className="add-icon">
            <BiImageAdd size={60} />
          </div>
          <div>Add images</div>
        </div>
        <div className='description3'>DESCRIPTION</div>
        <div className='descrip'>Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Molestiae ipsa neque.</div>
        <div className='sell-icon'>SELL</div>
      </div>
      </div>
      </>
      )
}

export default Sell