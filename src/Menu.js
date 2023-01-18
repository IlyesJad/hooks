import { Rating } from "@mui/material";
import React from "react";
import './Menu.css';

const Menu = ({ items, query ,setFilterRating, filterRating}) => {
  return (
    <div className="movieCart">
      {items.filter((movie) => (
        movie.title.toLowerCase().trim().includes(query.toLowerCase().trim()) &&  movie.rating >= filterRating
        )) 
        .map((item) => {
          const { title, description, posterURL, rating } = item;
          return (
            <article>
              <h1 className="titre">{title}</h1>
              <img className="filmimg" src={posterURL} alt={title} />
              <p className="description" >{description}</p>
              <Rating
                name="read-only"
                value={rating}
                readOnly
              />
            </article>
          );
        })}
    </div>
  );
};

export default Menu;





