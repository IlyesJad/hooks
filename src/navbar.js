import React, { useState } from "react";
import { Rating } from "@mui/material";
import './navbar.css';
import {data} from "./data"
const Navbar = ({setQuery , setFilterRating, filterRating }) => {
    
    return (

        <div className='search_bar'>
            <div className="logo">
            <h1>Movie <span>App</span></h1>
            </div>
            <div className="find">
            <Rating
            name="simple-controlled"
            value={filterRating}
            onChange={(event, newValue) => {
            setFilterRating(newValue);
  }}/>
            <input placeholder="  Search"
             onChange={(e) => setQuery(e.target.value)} 
             /> 
             
            </div>
        </div>
    )
}

export default Navbar