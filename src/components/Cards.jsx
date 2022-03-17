import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out this epic destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="explore campechano"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="explore to an acient private cruise"
              label="Luxury"
              path="/services"
            />
          </ul>

          <ul className="cards__items">
              <CardItem
                src="images/img-3.jpg"
                text="explore campechano"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src="images/img-4.jpg"
                text="explore campechano"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src="images/img-5.jpg"
                text="explore campechano"
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
