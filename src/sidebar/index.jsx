import React from 'react';
import './sidebar.css';
import { Link, NavLink } from 'react-router-dom';
import { Data } from './data';

const Index = () => {
  return (
    <>
        <div className="sidebar_container">

            <div className="side_logo">
                <img src="/Layer 2 (1).svg" alt="" />
            </div>

            <div className="sidebar_profile">
                <div className="profile_container">
                    <img src="/base.svg" alt="" />
                    <div className="admin_details">
                        <span className="name">Michael Essien</span>
                        <span className="role">Administrator</span>
                    </div>
                </div>
            </div>

            <div className="sidebar_List">
                { Data.map((item) => (
                     <Link
                     to={item.link}
                     key={item.name}
                   > 
                        <div className="List_Container" key={item.id}>
                            <img src={item.image} alt="" className='icon'/>
                             <span>{item.name}</span>
                            <div>
                                <img src={item.icon} alt="" />
                            </div>
                        </div>
                    </Link>
                 ))}
            </div>

            <div className="logout_container">
               <img src="/entrance_line.svg" alt="" />
               <span>Log Out</span>
            </div>

        </div>
    </>
  )
}

export default Index;
