import React from 'react'
import Item from "./Item";
import styles from '@/components/footer/footer.module.css'
import { realestate,commercial,Residential,agents } from "./Menu";



const Itemcontainer = () => {
  return (
    <div className={`${styles.itemcont} flex justify-around`}>
      <Item Links={realestate} title="REAL ESTATE" />
      <Item Links={commercial} title="COMMERCIAL PROPERTIES" />
      <Item Links={Residential} title="RESIDENTIAL PROPERTIES" />
      <Item Links={agents} title="REAL ESTATE AGENTS" />
    </div>
  )
}

export default Itemcontainer
