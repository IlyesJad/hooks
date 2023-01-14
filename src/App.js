import React, {useState} from 'react';
import Navbar from './navbar'
import {data} from './data';
import Menu from './Menu';
import './App.css';

function App() {
  const[menuItems, setMenuItems] = useState(data);
  console.log(menuItems)
  return (
    
      <div >
      <Navbar />
      <Menu items={menuItems} />
      </div>
  );
}

export default App;
