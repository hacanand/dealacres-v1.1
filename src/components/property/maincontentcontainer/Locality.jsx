"use client";
import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { PiThumbsUp, PiThumbsDown } from "react-icons/pi";
import styles from "./locality.module.css";

function Locality(props) {
  //console.log(props);
  const [showFull, setShowFull] = useState(false);

  return (
    <div className={styles.localityOverviewContainer}>
      {/* {props?.desc && ( */}
        <div className={styles.localityHead}>
          <div className={styles.localityHeadMain}>
            <p className="text-xl">{props?.localityData?.title}</p>
            <h5>{props?.localityData?.subtitle}</h5>
          </div>
          <button> View {props?.localityData?.title} Overview</button>
        </div>
      {/* )} */}
      <div className={styles.localityContent}>
        {props.hasLocalityIntro && (
          <div className={styles.localityContentHead}>
            <h3>Locality Introduction</h3>
            <p>
              {showFull
                ? props.localityData?.introduction
                : `${props.localityData?.introduction?.substring(0, 200)}`}
            </p>
            <h6
              className={`${
                props.localityData?.introduction?.length < 200
                  ? "hidden"
                  : "block"
              }`}
              onClick={() => setShowFull(!showFull)}
            >
              {showFull ? "Read Less" : "Read More"}
            </h6>
          </div>
        )}
        <div
          className={`${styles.localityContentData} ${
            !props.hasLocalityIntro && "!mb-0"
          }`}
        >
          <div className={styles.localityContentDataProCon}>
            <h2 className="pl-[20px] text-2xl">
              <FaThumbsUp
                style={{ display: "inline", marginRight: "0.5rem" }}
                color="#33cc33"
              />{" "}
              Pro&apos;s
            </h2>
            <ul>
              {props.localityData.Pros.map((dt, index) => (
                <li key={index} className="text-left">
                  <PiThumbsUp
                    style={{ marginRight: "0.5rem", display: "inline" }}
                    color="#33cc33"
                  />
                  {dt}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.localityContentDataProCon}>
            <h2 className="pl-[20px] text-2xl">
              <FaThumbsDown
                style={{ display: "inline", marginRight: "0.5rem" }}
                color="red"
              />{" "}
              Con&apos;s
            </h2>
            <ul>
              {props.localityData?.Cons?.map((dt, index) => (
                <li key={index} className="text-left">
                  <PiThumbsDown
                    style={{ marginRight: "0.5rem", display: "inline" }}
                    color="red"
                  />
                  {dt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locality;
