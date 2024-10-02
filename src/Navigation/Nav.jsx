import React from 'react'
import "./nav.css"
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai"




const Nav = ({modeValue, modeButtonChange, query, handleInputChange}) => {




  return (
    <nav>
      <div className='nav-container'>
        <input type="text" className='search-input' onChange={handleInputChange} placeholder="Enter the shoe you want" value={query} />
        </div>

      <div className="profile-container">
        <a href="#"> <FiHeart className='nav-icons'/> </a>
        <a href="#"><AiOutlineShoppingCart className='nav-icons'/></a>
        <a href="#"><AiOutlineUserAdd className='nav-icons'/></a>
        {/* <button onClick={modeButtonChange} className='mode-btn'>{modeValue}</button> */}
      </div>
    </nav>
  )
}

export default Nav