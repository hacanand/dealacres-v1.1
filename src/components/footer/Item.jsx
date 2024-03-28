import React from "react";
import styles from '@/components/footer/footer.module.css'
import Link from "next/link";

const Item = ({ Links, title }) => {
  return (
    <ul className="text-center">
      <h1 className="mb-1 text-xl font-[Poppins] font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <Link
            className={styles.item}
            href={link.link}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Item;