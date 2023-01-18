import React, {useState} from 'react';
import Navbar from './navbar'
import {data} from './data';
import Menu from './Menu';
import './App.css';
import Add from './Add';

function App() {
  const[menuItems, setMenuItems] = useState(data);
  const [query,setQuery] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  return (
    
      <div>
      <Navbar setQuery={setQuery} filterRating={filterRating} setFilterRating={setFilterRating} />
      <Add movies={menuItems} setMovies={setMenuItems}/>
      <Menu items={menuItems} query={query} filterRating={filterRating} setFilterRating={setFilterRating} />
      </div>
  );
}

export default App;
