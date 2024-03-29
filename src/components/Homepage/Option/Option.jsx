'use client';

import React, { useState } from "react";
import "./option.css";
import { cardData } from "./data";
import { IoMdCloseCircleOutline } from "react-icons/io";

const NewOption = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardId) => {
    setActiveCard( cardId);
  };

  const handleCloseButtonClick = (event, cardId) => {
    event.stopPropagation(); 
    setActiveCard(null);
  };

  return (
    <div className="cards-wrapper">
      <div>
        <h2 className="text-xl sm:text-2xl font-[Poppins] font-bold text-center py-6">
          GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
        </h2>
      </div>
      <div className="cards-container cursor-pointer">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`card ${activeCard === card.id ? "active" : ""}`}
            style={{
              flex: activeCard === card.id ? "0 0 160px" : "0 0 160px",
              minWidth: activeCard === card.id ? "80%" : "280px",
              height: activeCard === card.id ? "100%" : "230px",
              width: activeCard === card.id ? "80%" : "230px",
              margin: activeCard === card.id ? "0px" : "0px",
            }}
            onClick={() => handleCardClick(card.id)}
          >
            <div
              className="card-content"
              style={{
                background: "blue",
              }}
            >
              {activeCard === card.id && (
                <button
                  className="close-button"
                  onClick={(event) => handleCloseButtonClick(event, card.id)}
                >
                 <IoMdCloseCircleOutline color='white' className="w-6 h-6 cursor-pointer" />
                </button>
              )}
              <div
                className="card-image"
                style={{ backgroundImage: `url(${card.imageUrl})` }}
              />
              {activeCard === card.id && (
                <div className="md:ml-5 lg:ml-14">
                  <ul className="py-4 text-sm grid grid-cols-3 text-white gap-1">
                    {card.links.map((link, index) => (
                      <li key={index} className="mr-3 hover:text-black">
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
             
            </div>
            <div className="mt-2 text-md text-center ">{card.title}</div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default NewOption;