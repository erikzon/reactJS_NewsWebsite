import React from "react";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  const [posts, setPosts] = useState([]);
  async function getPosts() {
    return await fetch("https://www.prensalibre.com/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
        return data;
      });
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="cards">
      <h1>Ultimas noticias en Guatemala</h1>
      <div className="cards__container">
        {posts.map((post) => (
          <CardItem
            key={post.id}
            src={post.jetpack_featured_media_url}
            text={post.title.rendered}
            label={`publicado a las ${post.date_gmt.split("T")[1]}`}
            path={`/Noticia/${post.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
