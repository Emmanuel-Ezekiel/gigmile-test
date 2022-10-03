import React from 'react';
import './captain.css';
import Pagination from '@mui/material/Pagination';
// import { Pagination } from '@mui/material';
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Alan Richard Michaelson', '+234 90455778990', '23 May, 2021', 'Motorcycle Financing', 'Repair Advance' ),
  createData('Ice cream sandwich', 237, 9.0, 37, ),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];

const data = [
  { name: "/Frame 5383.svg", age: "+234 90455778990", gender: "23 May, 2021", services: "Motorcycle Financing     Repair Advance", },
  { name: "/Frame 5383.svg", age: "+234 90455778990", gender: "23 May, 2021", services: "Smartphone Financing" },
  { name: "/Frame 5383.svg", age: "+234 90455778990", gender: "23 May, 2021", services: "Fuel Advalce  Repair Advance" },
  { name: "/Frame 5383.svg", age: "+234 90455778990", gender: "23 May, 2021", services: "Motorcycle Financing  Repair Advance" },
  { name: "/Frame 5383.svg", age: "+234 90455778990", gender: "23 May, 2021", services: "Nil" },
  { name: "/Frame 5383.svg", age: "+234 90455778990", gender: "23 May, 2021", services: "Motorcycle Financing" },
  { name: "/Frame 5383.svg", age: "+234 90455778990", gender: "23 May, 2021", services: "Motorcycle Financing  Repair Advance" },
]


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
            <div className='header'>
                  <div className="chart">
                    <img src="/Frame 26822 (1).svg" alt="" />
                  </div>
                  <span>Active Captains</span>
              </div>
              <div className="des">
              <span>Gigmile Captains currently on service requests &nbsp; <img src="/Ellipse 299.svg" alt="" /> &nbsp; Last 30 days </span> 
              </div>
              <div className="line2"></div>

              <div className='score'>
                <img src="/Vector.svg" alt="" />
                <span>Overall:</span>
                <h1>2,643,890,786</h1>
              </div>

              <div className='New_chart'>
                <img src="/Frame 626243.svg" alt="" className='num' />
                <div className='bar'>
                   <img src="/Frame 626255.svg" alt="" />
                </div>
  
              </div>

          </div>
          <div className='chart_2'>
            <div className='header'>
                <div className="chart">
                  <img src="/Frame 26822.svg" alt="" />
                </div>
                <span>Defaulted Captains</span>
            </div>
            <p>Defaulted Gigmile Captains so far.</p>

            <div className="line"></div>

            <div className="amount">
              <h6>Overall:</h6>
              <h4>2,643,890</h4>
              <div className="week">
                <span> <img src="/Polygon 1.svg" alt="" /> 3000</span>
                <h5>Increase this week</h5>
              </div>
            </div>

            <div className="btn">
              <span>View more details</span>
            </div>

          </div>

          <div className='chart_2'>
            <div className='header'>
                  <div className="chart">
                    <img src="/Frame 26822 (1).svg" alt="" />
                  </div>
                  <span>Gigmile Captains</span>
              </div>
              <p>Total Gigmile Captains so far.</p>

              <div className="line"></div>

              <div className="amount2">
                <h6>Overall:</h6>
                <h4>2,643,564,890</h4>
                <div className="week">
                  <span> <img src="/Polygon 1.svg" alt="" /> 3000</span>
                  <h5>Increase this week</h5>
                </div>
              </div>

              <div className="btn2">
                <span>View more details</span>
              </div>
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
        {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Captain</TableCell>
            <TableCell align="right">Mobile number</TableCell>
            <TableCell align="right">Joined Gigmile</TableCell>
            <TableCell align="right">Joined Gigmile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
      <table>
        <tr>
            <th>Captain</th>
            <th>Mobile number</th>
            <th>Joined Gigmile</th>
            <th>Service Requests</th>
          </tr>
          {data.map((val, key) => {
          return (
            <tr key={key}>
              <td className='first'> <img src={val.name} alt="" /> </td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
              <td>{val.services}</td>
            </tr>
          )
        })}
      </table>

        </div>

        <div className="pagination">
         <Pagination count={16} defaultPage={1} boundaryCount={1} siblingCount={0.29} shape="rounded"  />
        </div>
      
      </div> 
    </>
  )
}

export default Index;
