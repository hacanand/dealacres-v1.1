import React from "react";
import styles from '@/components/footer/footer.module.css'
import Link from "next/link";

const Item = ({ Links, title, isSocial }) => {
  return (
    <ul className={`${isSocial ? 'min-w-[60%]' : 'min-w-full'} max-h-[500px] sm:max-h-none pb-4  `}>
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