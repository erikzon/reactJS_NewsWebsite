import React from "react";
import { useState, useEffect } from "react";
import { decode } from "html-entities";
import CardItem from "./CardItem";
import "./Cards.css";
import Paginador from "./Paginador";

function Cards() {
  const [posts, setPosts] = useState([]);
  const [listo, setlisto] = useState(true);
  const [pagina, setPagina] = useState(1);
  async function getPosts() {
    return await fetch(
      `https://www.prensalibre.com/wp-json/wp/v2/posts?page=${pagina}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setlisto(true);
        return data;
      });
  }

  useEffect(() => {
    getPosts(pagina);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pagina]);

  if (listo) {
    return (
      <div className="cards">
        <h1>Ultimas noticias en Guatemala</h1>
        <div className="cards__container">
          {posts.map((post) => (
            <CardItem
              key={post.id}
              src={post.jetpack_featured_media_url}
              text={decode(post.title.rendered)}
              label={`publicado a las ${post.date_gmt.split("T")[1]}`}
              path={`/Noticia/${post.id}`}
            />
          ))}
        </div>
        <div>
          <Paginador setPagina={setPagina} Pagina={pagina} />
        </div>
      </div>
    );
  } else {
    return <h2>...cargando</h2>;
  }
}

export default Cards;
