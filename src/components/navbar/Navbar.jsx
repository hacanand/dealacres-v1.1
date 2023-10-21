"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useParams, usePathname } from 'next/navigation'
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Image from "next/image";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/' || pathname === '/blog'


  const Menu = () => (
    <>
      <p>
        <a href="##buyer">Buyer</a>
      </p>
      <p>
        <a href="#seller">Seller</a>
      </p>
      <p>
        <a href="#tenant">Tenant</a>
      </p>
      <p>
        <a href="blog">Blog</a>
      </p>
      <p>
        <a href="#services">Services</a>
      </p>
    </>
  );

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar${isHomePage ? "" : "Page"}${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-links">
        <div className="navbar-links__logo">
          <Image
            alt="Logo"
            src="/lda.png"
            height={20}
            width={40}
            className="IMG"
          />
          <h3 className="font-[Poppins] text-white">Deal Acres</h3>
        </div>
        <div className="navbar-links__container">
          <Menu />
        </div>
        <div className="navbar-sign">
          <Link
            href="#"
            className=" text-sm sm:text-base md:text-lg text-center   font-light  text-white sm:font-normal md:font-medium shadow-blue-200 shadow-sm bg-blue-500 p-2 sm:p-2 rounded-3xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200"
          >
            Post Your Property{" "}
            <span className="text-yellow-500 text-sm sm:text-xl font-bold">Free</span>
          </Link>
          <Link
            href="#"
            className="mx-3 text-base hover:rounded-2xl p-2     bg-gradient-to-r
           hover:from-blue-700 hover:to-indigo-600 rounded-3xl text-white font-medium hover:font-bold"
          >
            Sign In
          </Link>
          <button type="button">Sign Up</button>
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={45}
            className='close'
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container">
            <div className="navabr-menu_container-links">
              <Menu />
              <div className="navbar-menu_container-links-sign">
                <p>Sign In</p>
                <h5>Post your Property</h5>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
