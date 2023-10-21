"use client"
import React from "react";
import { BsFilePdfFill } from "react-icons/bs";
import styles from "./downloadmaterial.module.css"
import RentalManual from "./RentalManual";
import InsightReview from "../locationOverview/content2/InsightReview";

const DownloadMaterial = () => {
  return (
    <div>
        <div className={styles.MainLayout}>
      <div>
        <h2>
          Download <span style={{color: "#31843e"}}>Free</span> Rent Agreement
        </h2>
        <p>
          Get Hussle free Rent Agreement with our agreement format which will
          help you to stay Away from legal Disputes. So Download this Super easy
          and quick Rent Agreement Draft and make it easy for you.
        </p>
      </div>

      <div>
        <span>
          <BsFilePdfFill color="red" style={{ display: "inline-block" }} />
          <a href="https://cyberleninka.org/article/n/203.pdf"> Residential Rent Agreement Format </a>
        </span>

        <span>
          <BsFilePdfFill color="red" style={{ display: "inline-block" }} />
          <a href="https://cyberleninka.org/article/n/203.pdf"> Commercial Rent Agreement Format  </a>
        </span>

        <span>
          <BsFilePdfFill color="red" style={{ display: "inline-block" }} />
          <a href="https://cyberleninka.org/article/n/203.pdf"> Lease Agreement Format  </a>
        </span>
      </div>
      <RentalManual />
      <InsightReview />
      </div>
    </div>
  );
};

export default DownloadMaterial;
