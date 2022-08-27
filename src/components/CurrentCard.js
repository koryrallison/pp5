import React from "react";

const CurrentCard = ({ card }) => {
  if (card) {
    return (
      <div className="card--current">
        <h3 className="card--fact">{card.catFact}</h3>
        <img src={card.imgUrl} alt={card.catFact} className="card--image" />
      </div>
    );
  }
  else return (<></>)
};

export default CurrentCard;
