import React from "react";
import pattern_card from "../assets/images/bg-pattern-card.svg";
import img_profile from "../assets/images/image-victor.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="pattern-card">
        <img src={pattern_card} alt="bg-pattern-card" />
      </div>
      <div className="image-profile">
        <img src={img_profile} alt="image-profile" />
      </div>
      <div className="info">
        <h4 className="name">Victor Crest</h4>
        <p className="age">26</p>
      </div>
      <p className="city">London</p>
      <div className="container-stats">
        <div className="stats">
          <h5 className="numbers">80K</h5>
          <p className="category">Followers</p>
        </div>
        <div className="stats">
          <h5 className="numbers">803K</h5>
          <p className="category">Likes</p>
        </div>
        <div className="stats">
          <h5 className="numbers">1.4K</h5>
          <p className="category">Photos</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
