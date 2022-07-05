import React from "react";
import "./MovieCard.css";
import StarRating from "./StarRating";
import {Link} from "react-router-dom";

const MovieCard = ({item}) => {
    // console.log(item)
  return (
    <div style={{ display: "flex",justifyContent: "flex-start",position: "relative",}}>
        <div className="MovieCard">
          <div className="title"> <h1 className="title">{item.title}</h1>
            <br />
            <p className="mini">{item.minititle}</p>
          </div>
          <div className="affiche">
            <Link to={`/moreinformaion/${item.id}`}>
          <button className="info"><img src={item.affiche} alt="Affiche" /></button>
          </Link>
            </div>
          <div className="description">
            <p>
              <p>Description :</p>
              <p className="mini">{item.description}</p> 
            </p>
          </div>
          <div className="rating"><StarRating rating={item.rating}/></div>
          <form action={item.posteURL} target="_blank">
            <button className="posterURL">Watch Now</button>
          </form>
        </div>
    </div>
  );
};

export default MovieCard;
