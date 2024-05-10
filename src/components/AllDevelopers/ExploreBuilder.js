"use client"
import React, { useEffect, useState } from 'react'
import styles from "./explorebuilder.module.css"
import Image from 'next/image'

import data from "./dummyData.js"

const ExploreBuilder = () => {
  const [limit, setLimit] = useState(8);


  const [project, setProject] = useState("Residential");
  const [projectLimit, setProjectLimit] = useState(4);

  let toggleProjects = () => {
    if (projectLimit >= 6) {
      setProjectLimit(4);
    } else {
      setProjectLimit(6);
    }
  };

  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const maxLength = -1;


  // Pagination -->

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const filteredData = data["Property"].slice(indexOfFirstCard, indexOfLastCard);
  const pageNumbers = Array.from({ length: 10 }, (_, index) => index + 1);
  const totalPageNumbers = Math.ceil(data["Property"].length / cardsPerPage);
  const [pagesToShow, setPagesToShow] = useState({
    start: 0,
    end: 10
  });

  const nextPage = () => {
    if (currentPage < Math.ceil(data["Property"].length / cardsPerPage)) {

      let el = document.getElementById('pageTitle');
              if(el){
                el.scrollIntoView({behavior: 'smooth', block: 'end'})
              }
              
      setCurrentPage(currentPage + 1);
      setPagesToShow((prev) => ({
   
        start: currentPage,
        end: (currentPage + 5 < totalPageNumbers ? currentPage + 5 : totalPageNumbers)
        
      }))  
      
    }
  };

  const prevPage = () => {


    if (currentPage > 1) {

      let el = document.getElementById('pageTitle');
              if(el){
                el.scrollIntoView({behavior: 'smooth', block: 'end'})
              }

      setCurrentPage(currentPage - 1);
      setPagesToShow((prev) => ({
   
        start: currentPage - 2,
        end: (currentPage + 5 < totalPageNumbers ? currentPage + 5 : totalPageNumbers)
        
      }))  

    }
  };

  console.log(currentPage)


  useEffect(() => {
    if(typeof window === 'undefined') return;
    if(window.innerWidth <= 768){
      setPagesToShow((prev) => ({
        ...prev,
        end: 5
      }));
    }

  }, [])


  return (
    <div className={styles.ExploreBuilder}>
      {filteredData.map((dt, index) => (
        <div className="mt-8 md:mt-12" key={index}>
          <div className={styles.TopBuilders}>
            <div className={styles.Logo}>
              <Image
                src={dt.builderLogo}
                alt={dt.builderName}
              />
            </div>
            <div className={styles.TopBuilderContent}>

              <h3>{dt.builderName}</h3>

              <p>{isTruncated ? (dt.description.slice(0, 210)) : (dt.description)}

                <span className={styles.SeeMore} onClick={toggleTruncate} >{isTruncated ? " Read More" : " Read Less"}</span>
              </p>

            </div>
          </div>

          <div className={styles.ProjectCategory}>
            <div className={styles.Category}>
              <span onClick={() => {
                setProject("Residential")
              }} 
              className="text-xs xs:text-sm sm:text-base"
              style={{
                marginRight: 'unset',
                padding: '2px 6px',
                transition: 'border-bottom 0.1s ease-in',
                borderBottom: (project === 'Residential' ? '4px solid #60a2e7' : '0px') 
              }}><strong>Residential Projects</strong> </span>

              <span onClick={() => {
                setProject("Commercial")
              }} 
              className="text-xs xs:text-sm sm:text-base"
              style={{
                marginRight: 'unset',
                padding: '2px 6px',
                transition: 'border-bottom 0.1s ease-in',
                borderBottom: (project === 'Commercial' ? '4px solid #60a2e7' : '0px') 
              }}
              ><strong>Commercial Projects</strong></span>
            </div>
            <hr />
            <br />
            <div className={styles.projectLine}>
              {/* Featured start */}
              {dt[project].slice(0, projectLimit).map((property, index) => (
                <div key={index} className={styles.Projects}>
                  <div className="md:w-[80px] min-w-[80px] md:h-[80px] ">
                    <Image
                      src={property.projectImg}
                      alt={property.ProjectName}
                    />
                  </div>
                  <div>
                    <h4>{property.ProjectName}</h4>
                    <p>by {property.group} </p>
                    <p className='break-all'>{property.address}</p>
                    <strong>{property.price}</strong>
                  </div>

                </div>

              ))}
              

              {/* featured close */}

            </div>

            <div className='block  text-center text-blue-500 underline font-bold'>
                <button onClick={toggleProjects}> {(projectLimit <= 4) ? " View All " + project + " Projects" : "View Less"}</button></div>
          </div>


        </div>

      ))}

      <div className={styles.pagination}>

        <span onClick={prevPage}> {"<"} Previous</span>

        {pageNumbers.slice(pagesToShow.start, pagesToShow.end).map((number) => (
          <span
            key={number}
            onClick={() => {
              let el = document.getElementById('pageTitle');
              if(el){
                el.scrollIntoView({behavior: 'smooth', block: 'end'})
              }
              setCurrentPage(number)}}
            className='w-[30px] h-[30px]'
            style={{
              cursor: "pointer",
              fontWeight: currentPage === number ? "bold" : "normal",
              border: "1px solid #0061fd",
              borderRadius: "50%",
              padding: "1% 0.5%",  
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
           
              
            }}
          >
            {number}
          </span>
        ))}

        <span onClick={nextPage}>Next {">"}</span>
      </div>
    </div>
  )
}

export default ExploreBuilder
