import React from "react";
import  './Menu.css';

const Menu = ({ items }) => {
  return (
    <div className="movieCart">
      {items.map((item) => {
        const {  title, description, posterURL, rating } = item;
        return (
          <article >
              <h1>{title}</h1>
              <img className="filmimg" src={posterURL} alt={title} style={{width:300}} />
              <p>{description}</p>
              <h1>{rating}</h1>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;





