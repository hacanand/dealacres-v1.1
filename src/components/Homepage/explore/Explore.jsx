"use client";
import React, { useState } from "react";
import "./explore.css";
import BudgetCalculation from "@/components/budgetCalculation/BudgetCalculation";
import { cardData, carddata } from "./data";

const Explore = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [showBudgetCalculation, setShowBudgetCalculation] = useState(false);

  const handleCardHover = (cardId) => {
    setActiveCard(cardId);
  };

  const handleCardClick = (cardId) => {
    if (cardId === 5) {
      setShowBudgetCalculation(true);
    }
  };

  const handleBudgetCalculationClose = () => {
    setShowBudgetCalculation(false);
  };

  return (
    <div className="cards-wrapper">
      <div>
        <h2 className="text-xl sm:text-2xl font-[Poppins] font-bold text-center py-6">
          {" "}
          Explore! <span className="text-blue-500">Insights and tools</span>
        </h2>
      </div>
      <div className="cards-container cursor-pointer">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`card ${activeCard === card.id ? "active" : ""}`}
            style={{
              flex: activeCard === card.id ? "0 0 160px" : "0 0 160px",
              minWidth: activeCard === card.id ? "100%" : "160px",
              height: activeCard === card.id ? "100%" : "230px",
              width: activeCard === card.id ? "100%" : "160px",
              margin: activeCard === card.id ? "0px" : "0px",
            }}
            onMouseEnter={() => handleCardHover(card.id)}
            onMouseLeave={() => setActiveCard(null)}
            onClick={() => handleCardClick(card.id)}
          >
            <div
              className="card-content"
              style={{
                backgroundImage: `linear-gradient(to right, ${card.color}, white)`,
              }}
            >
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
        ))}
      </div>
      <div className="cards-container-responsive">
        {carddata.map((card) => (
          <div
            key={card}
            className="card"
            style={{
              flex: "0 0 110px",
              minWidth: "110px",
              height: "130px",
              width: "110px",
              margin: "0px",
            }}
          >
            <div className="card-content">
              <div
                className="card-image"
                style={{ backgroundImage: `url(${card})`, objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
      {showBudgetCalculation && <BudgetCalculation onClose={handleBudgetCalculationClose} />}
    </div>
  );
};

export default Explore;