"use client";
import React, { useState } from "react";
import "./explore.css";
import {cardData} from './data'


const Explore = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardHover = (cardId) => {
    setActiveCard(cardId);
  };

  return (
    <div className="cards-wrapper">
        <div><h2 className="text-xl sm:text-2xl font-[Poppins] font-bold text-center py-6"> Explore! <span className="text-blue-500">Insights and tools</span></h2></div>
      <div className="cards-container">
        {cardData.map((card) => (
          <>
            {/* <div><h2 className="text-sm ">{card.title}</h2></div> */}
            <div
              key={card.id}
              className={`card ${activeCard === card.id ? "active" : ""}`}
              style={{
                flex: activeCard === card.id ? "0 0 100%" : "0 0 200px",
                minWidth: activeCard === card.id ? "100%" : "200px",
                height:activeCard === card.id ? "100%" : "200px",
                width:activeCard === card.id ? "100%" : "700px",
                margin:activeCard === card.id ? "0px" : "2px",
              }}
              onMouseEnter={() => handleCardHover(card.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="card-content">
                {/* <div className="title"><h2 className="text-sm text-center transform -rotate-90">{card.title}</h2></div> */}
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                />
                {activeCard === card.id && (
                  <div className="card-description">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Explore;