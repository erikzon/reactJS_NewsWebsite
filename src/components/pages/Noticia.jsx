import React from "react";
import { useState, useEffect } from "react";
import "../../App.css";

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
        console.log(data[0]);
        setPost(data[0]);
        setListo(true);
        return data[0];
      });
  }

  useEffect(() => {
    getPost();
  }, []);

  if (listo) {
    return (
      <>
        <h1 className="Noticia"> Noticia {post.title.rendered}</h1>
      </>
    );
  } else {
      return (
          <>
          <h1>...cargando</h1>
          </>
      )
  }
}

export default Noticia;
