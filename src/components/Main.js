import React from 'react';
import { Fragment } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../MobileApp.css'

function Main() {
  const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 800 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



  return (
    <Fragment>
    <div className="main-body">
   
        <div className='main-container-level-1'>
          
       
          <div className='maint-text-container'>
          <div className='main-text-1'>
            Please Provide Text to display.
          </div>
          </div>


       
        
        </div>


   <div className='main-container-level-2'>
          AGOQHGQOPHGQOHGOQH
          </div>
        
    </div>

  
    
    </Fragment>
  )
}

export default Main;
