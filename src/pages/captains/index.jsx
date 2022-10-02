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

        {/* charts */}
        <div className="captain_chart">
          <div className='chart_1'>

          </div>
          <div className='chart_2'>

          </div>
          <div className='chart_3'>

          </div>
        </div>

        {/* services */}
        <div className="captain_services">
          <h1>Gigmile Captain</h1>

          <div className="filter">
            <div className="search">
              <input type="text" name="" id="" placeholder='Search captains, services...' />
              <img src="/search_line.svg" alt="" />
            </div>
            <div className="filter_by">
              <span>Filter by</span>
              <img src="/filter-list.svg" alt="" />
            </div>
          </div>

        </div>


        <div className="captain_table">
          
        </div>
      
      </div> 
    </>
  )
}

export default Index;
