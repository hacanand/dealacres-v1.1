"use client";
import React, { useState } from "react";
import ExpertLayout from "./ExpertLayout";
import data from "./dummyData";
import styles from "./expert.module.css"

const Experts = () => {
  let [limit, setLimit] = useState(5);
  const filteredData = data["Experts"].slice(0, limit);

  let toggleDisplay = () => {
    if (limit == -1) {
      setLimit(5);
    } else {
      setLimit(-1);
    }
  };
  return (
    <div className="container">
      <div>
      {filteredData.map((dt, index) => (
          <ExpertLayout
            // key={index}
            dt = {dt}
            filteredData={filteredData}
            limit={limit}

          />
      ))}
        </div>
      <div className="text-center">
    
    <button className={styles.MoreExperts} onClick={toggleDisplay} >{limit == -1 ? 'View Less':  "View All" }</button>
    </div>
    </div>
  );
};

export default Experts;
