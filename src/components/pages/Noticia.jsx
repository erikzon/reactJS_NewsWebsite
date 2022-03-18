import React from "react";
import { useState, useEffect } from "react";
import { decode } from "html-entities";
import "../../App.css";
import "./Noticia.css";

function Noticia() {
  const [post, setPost] = useState([]);
  const [listo, setListo] = useState(false);

  async function getPost() {
    return await fetch(
      `https://www.prensalibre.com/wp-json/wp/v2/posts?include=${
        window.location.pathname.split("/")[2]
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setPost(data[0]);
        setListo(true);
        return data[0];
      });
  }

  function createMarkup() {
    return { __html: decode(post.content.rendered) };
  }
  useEffect(() => {
    getPost();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (listo) {
    return (
      <>
        <h1
          className="Noticia"
          style={{ backgroundImage: `url(${post.jetpack_featured_media_url})` }}
        >
          {decode(post.title.rendered)}
        </h1>
        <div className="noticia_container">
          <h3>PUBLICADO EL {post.date_gmt.split("T")[0]}</h3>
          <a href={post.link} style={{ display: "block" }}>
            FUENTE
          </a>
          <p dangerouslySetInnerHTML={createMarkup()}></p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>...cargando</h1>
      </>
    );
  }
}

export default Noticia;
