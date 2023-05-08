import React from "react";

const Player = ({ name, img, time }) => {
  return (
    <article className="player">
      <article className="parts_container">
        <h2>{name}</h2>

        <div className="parts"></div>
      </article>

      <div className="separator"></div>

      <figure className="img">
        <img src={img} />

        <span>{time}</span>
      </figure>
    </article>
  );
};

export default Player;
