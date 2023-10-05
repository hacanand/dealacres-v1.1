import { SearchRounded } from "@mui/icons-material";
import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import styles from "./topbar.module.css";

const buttons = [
  <Button key="Buy">Buy</Button>,
  <Button key="Sell">Sell</Button>,
  <Button key="Rent">Rent</Button>,
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
          <input id="SearchAgent" type="search" />
          <label htmlFor="SearchAgent">
            <SearchRounded color="light" />
          </label>
        </div>

        <div>
          <ButtonGroup size="large" aria-label="large button group">
            {buttons}
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
