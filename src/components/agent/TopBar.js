import { SearchRounded } from "@mui/icons-material";
import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import styles from "./topbar.module.css";

const buttons = [
  <Button variant="text" size="large" key="Buy" className="border-r">
    Buy
  </Button>,
  <Button variant="text" key="Sell">
    Sell
  </Button>,
  <Button variant="text" key="Rent">
    Rent
  </Button>,
];

const TopBar = () => {
  return (
    <div className={styles.topbarLayout}>
      <div className={styles.title}>
        <h1>Property Dealer & Real Estate Agents in Hisar</h1>
        <p>
          Looking for agents in <a href="#">nearby areas?</a>
        </p>
      </div>

      <div className={styles.searchLayout}>
        <div className={styles.searchBar}>
          <input
            id="SearchAgent"
            type="search"
            className="px-8"
            placeholder="Enter Locality, Agent Name"
          />
          <label htmlFor="SearchAgent">
            <SearchRounded color="light" />
          </label>
        </div>

        <div className="join px-8 rounded-xl">
          <button className="btn join-item px-8">Buy</button>
          <button className="btn join-item px-8">Sell</button>
          <button className="btn join-item px-8">Rent</button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
