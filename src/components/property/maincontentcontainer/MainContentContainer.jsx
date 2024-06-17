"use client";
import { useState } from "react";
import { Lato } from "next/font/google";
import styles from "./maincontent.module.css";
import { BsCurrencyRupee } from "react-icons/bs";
import Mainoverview from "./Mainoverview.jsx";
import Amenities from "./Amenities.jsx";
import Specification from "./Specification.jsx";
import Locality from "./Locality.jsx";
import Developerinfo from "./Developerinfo.jsx";

import MortgageCalculator from "../mortgagecalculator/MortGageCalculator";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

function MainContentContainer(props) {
  console.log(props);
  console.log(props.content?.mainContent);
  const API_KEY = "AIzaSyCLnG8KQEzHCSMW62v1Kknt95xEGKMXW-0";

  const [showFull, setShowFull] = useState(false);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?q=${props?.content?.mapCoordinates?.latitude},${props?.content?.mapCoordinates?.longitude}&key=${API_KEY}`;

  return (
    <div style={lato.style} className={`${styles.mainContainer}`}>
      <div className={`${styles.headerComp} `}>
        <h6>{props.content?.mainContent?.currentStatus}</h6>
        <div className={styles.head}>
          {props.content?.mainContent?.title},{" "}
          <p style={{ display: "inline" }}>
            {props.content?.mainContent?.sideTitle}
          </p>
        </div>
        <div className="font-bold text-xl">
          {/* <BsCurrencyRupee style={{ display: "inline" }} /> */}
          {props.content?.mainContent?.price}
        </div>
      </div>
      <div className={styles.aboutProperty}>
        <h3>About this home</h3>
        <p>
          {showFull
            ? props.content?.mainContent?.about
            : `${props.content?.mainContent?.about?.substring(0, 600)}`}
        </p>
        <h6 onClick={() => setShowFull(!showFull)}>
          {showFull ? "Show Less" : "Show More"}
        </h6>
      </div>
      <div className="text-[20px]">
        <h1>{props.content?.mainContent?.title} Overview</h1>
        <Mainoverview overviewData={props.content?.mainContent?.overview} />
      </div>
      <div className={styles.mapContainer}>
        <iframe
          src={mapSrc}
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div id="#seller">
        <h1>Specification: {props.content?.title}</h1>
        <Specification
          specificationData={props.content?.mainContent?.specification}
        />
      </div>
      <div id="ametities">
        <h1>Amenities</h1>
        <Amenities ameData={props.content?.mainContent?.Amenities} />
      </div>
      <div id="mortgageCalculator">
        <h1>Mortgage Calculator</h1>
        <MortgageCalculator />
      </div>
      <div id="aboutDeveloper">
        <h1> About Developer</h1>
        <Developerinfo devData={props.content?.mainContent?.aboutDeveloper} />
      </div>
      <div className={styles.mainContainerLine}></div>
      <div id="localityOverview">
        <h1 className="">Locality Overview</h1>
        <Locality
          localityData={props.content?.mainContent?.localityOverview}
          desc={true}
          hasLocalityIntro={true}
        />
      </div>
    </div>
  );
}

export default MainContentContainer;
