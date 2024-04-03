"use client"
import Link from 'next/link';
import styles from './navbar2.module.css'

const Navbar02 = () => {



  return (
    <div className={`${styles.navbarContainer}`}>
      <Menu />
      
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
    <p>
      <Link  onClick={handleNavLinkClick}href="#Overview">Overview</Link>
    </p>
    <p>
      <Link  onClick={handleNavLinkClick}href="#seller">Specification</Link>
    </p>
    <p>
      <Link  onClick={handleNavLinkClick}href="#Amenities">Amenities</Link>
    </p>
    <p>
      <Link  onClick={handleNavLinkClick}href="#MortgageCalculator">Mortgage Calculator</Link>
    </p>
    <p>
      <Link onClick={handleNavLinkClick} href="#About Builder">About Builder</Link>
    </p>
    <p>
      <Link  onClick={handleNavLinkClick}href="#Locality Overview">Locality Overview</Link>
    </p>
    <p>
      <Link  onClick={handleNavLinkClick}href="#Properties By Builder">Properties By Builder</Link>
    </p>
  </>
  )
};

export default Navbar02