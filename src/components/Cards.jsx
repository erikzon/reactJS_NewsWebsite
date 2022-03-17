import React from "react";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  const [post, setPost] = useState([]);
  async function getPosts() {
    return await fetch("https://www.prensalibre.com/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data);
        return data;
      });
  }
  useEffect(() => {
    // getPosts();
  }, []);
  
  return (
    <div className="cards">
      <h1>Ultimas noticias en Guatemala</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="explore 22"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
