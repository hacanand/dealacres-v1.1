import React from "react";
import styles from '@/components/footer/footer.module.css'
import Link from "next/link";

const Item = ({ Links, title }) => {
  return (

    <ul className="flex flex-col items-center" >
      <div>
      <h1 className="mb-1 text-xl font-[Poppins] font-semibold">{title}</h1>
     <div>
      {Links.map((link) => (
        
        <li className=" text-left" key={link.name}>
          <Link
            className={styles.item}
            href={link.link}
          >
            {link.name}
          </Link>
        </li>
      ))}
     </div>
     </div>
    </ul>
  );
};

export default Item;