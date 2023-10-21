"use client"
import React, {useState} from 'react'
import data from "../rentagreement/dummyData";
import AgentList from './AgentList';
import styles from "./agent.module.css"

const NormalAgent = (props) => {
    // let [limit, setLimit] = useState(5);
    const filteredData = data["Experts"];
  return (
    <div className={styles.agentLayout}>
      <div>
          <AgentList
            featured={false}
            limit={5}
          />
        </div>
    </div>
  )
}

export default NormalAgent
