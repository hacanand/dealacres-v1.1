"use client"

import styles from './navbar2.module.css'
import Link from 'next/link';

const Navbar03 = () => {
  

    return (
      <div className={styles.navbarContainer} >
        <Menu/>
      </div>
    )
}


const Menu = () => {

  const handleNavLinkClick = (e) => {

    e.preventDefault();
    let id = e.target.attributes.getNamedItem('href').value

    let el = document.getElementById(id)

    if(el){
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }


  }

  return (
    <>
      <p className="whitespace-nowrap" >
        <Link onClick={handleNavLinkClick}  href="#About">About</Link>
      </p>
      <p className="whitespace-nowrap" >
        <Link onClick={handleNavLinkClick}  href="#Explore">Explore Neighbourhood</Link>
      </p>
      <p className="whitespace-nowrap" >
        <Link onClick={handleNavLinkClick}  href="#Projects">Projects</Link>
      </p>
      <p className="whitespace-nowrap" >
        <Link onClick={handleNavLinkClick}  href="#SimilarLocalities">Similar Localities</Link>
      </p>
      <p className="whitespace-nowrap" >
        <Link onClick={handleNavLinkClick}  href="#PhotoVideo">Photos & Videos</Link>
      </p>
      <p className="whitespace-nowrap" >
        <Link onClick={handleNavLinkClick}  href="Developer">Developer</Link>
      </p>
      <p className="whitespace-nowrap" >
        <Link onClick={handleNavLinkClick}  href="#Guides">Guides</Link>
      </p>
    </>
  )
};

export default Navbar03