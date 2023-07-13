import React from 'react'
import { Fragment } from 'react'
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
// import './header.css';

function Header() {


const [navbar, setNavbar] = useState(false);
const changeBackground = () => {
  if(window.scrollY >= 80){
      setNavbar(true);
      console.log("hhgqohgoqhg")
  }
  else{
      setNavbar(false);
  }
};

window.addEventListener('scroll', changeBackground);




  return (
    <Fragment>

    
      {/* <div class="header-body"> */}
   <div className={navbar? 'header-item-1-scroll' : 'header-item-1'}> 
   <img src="images/RareBee Lifesciences logo.png" width="90px" height="90px"/>    
  
  <a href="aboutus.html">About Us</a>
  <a href="contactus.html">Contact Us</a>
  <a href="productlist.html">Product List</a>
  <a href="quality.html">Quality</a>
  <a href="productgallery.html">Product Gallery</a>
</div>
{/* </div> */}
</Fragment>
     
    
  )
}

export default Header;
