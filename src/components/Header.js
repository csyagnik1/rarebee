import React from 'react'
import { Fragment } from 'react'
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
// import './header.css';


function Header() {


  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
      console.log("hhgqohgoqhg")
    }
    else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    document.getElementById('hamburger-item-1').style.display='block';
  };

  const handleMouseLeave = () => {
    document.getElementById('hamburger-item-1').style.display='none';
    setIsHovered(false);
  };



  return (
    <Fragment>



      <div className='header-item-1'>
        <img src="images/RareBee Lifesciences logo.png" width="90px" height="90px" />


        <a href="aboutus.html">About Us</a>
        <a href="contactus.html">Contact Us</a>
        <a href="productlist.html">Product List</a>
        <a href="quality.html">Quality</a>
        <a href="productgallery.html">Product Gallery</a>

        <span className='hamburger-image'>
          {isHovered ? (<img
            src="images/cross-image.png"
            width="90px" height="90px"

            onClick={handleMouseLeave}
          />) : (<img
            src="images/icons8-hamburger-menu-50.png"
            width="90px" height="90px"
            onClick={handleMouseEnter}
          />)}
        </span>
      </div>
      <div className='hamburger-item-1' id='hamburger-item-1'>


        <div>
          <a href="aboutus.html">About Us</a>
        </div>
        <div>
          <a href="contactus.html">Contact Us</a>
        </div>
        <div>
          <a href="productlist.html">Product List</a>
        </div>
        <div>
          <a href="quality.html">Quality</a>
        </div>

        <div>
          <a href="productgallery.html">Product Gallery</a>
        </div>


      </div>

    </Fragment>


  )
}

export default Header;
