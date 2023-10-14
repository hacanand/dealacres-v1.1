import React from 'react'
import ProjectCard from './ProjectCard'
import imgSrc from '../../../public/single-website/bunglow.webp'
const ProjectListings = () => {
    return (
        <div className='bg-[##F6F6F6]'>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {[...Array(6)].map(
                    (_, index) => {
                        return (
                            <div className='col-span-1' key={index}>
                                <ProjectCard 
                                img={imgSrc}
                                title={"Off the Arbour"}
                                address="Sector 63, Gurgaon, Haryana, India"
                                bathroomCount={1}
                                bedroomCount={8}
                                hasGarage={true}
                                area={700}
                                />
                            </div>
                        )
                    }
                )}
            </div>


        </div>
    )
}

export default ProjectListings
