import React from 'react';
import './captain.css';

const Index = () => {
  return (
    <>
     <div className="captain_container">
        <div className="captain_header">
          <h1>Hello Micheal 👋🏽</h1>

          <div className='captain_search'>
              <div className='input'>
                <img src="/search_line.svg" alt="" />
                <input type="text" placeholder='Search' />
              </div>
              <img src="/frame.svg" alt="" className='frame'/>
              <img src="/Bell_pin.svg" alt="" className='bell' />
              <div className='image'>
                <img src="/Base.svg" alt="" className='user'/>
                <img src="/Expand_down.svg" alt="" />
              </div>
          </div>

        </div>

        <div className="captain_chart">
          
        </div>
      
      </div> 
    </>
  )
}

export default Index;
