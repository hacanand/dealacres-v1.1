'use client'

import React from 'react'
import { useState } from 'react'
import ListingCard from './ListingCard'


const AgentListings = (
    {
        forRentListings,
        forSaleListings
    }
) => {

    const [selectedTab, setSelectedTab] = useState('sale')
    return (
        <div className='grid grid-cols-1 sm:grid-cols-7 place-content-center content-center items-center justify-center'>
            <div className={`
            sm:self-center
            col-span-2 flex flex-row gap-4 sm:gap-0 sm:flex-col items-start justify-around sm:justify-center transition-all after:transition-all  border-b-2 border-r-0 sm:border-b-0 sm:border-r-2 border-black relative after:absolute ${selectedTab === 'sale' ? 'after:left-[20px] sm:after:left-auto sm:after:top-0': 'after:left-[50%] sm:after:left-auto sm:after:top-[55%]'} 
            after:bottom-0 after:left-0 sm:after:-right-[0px] sm:after:top-0 after:w-[40%] after:h-2 sm:after:h-[40%] sm:after:w-2 after:bg-blue-600 after:rounded`}>
                <div className={`py-4 `}>
                    <h3 className={`font-bold text-3xl cursor-pointer
                    ${selectedTab === 'sale' ? 'text-blue-600' : 'text-black'}`} onClick={() => setSelectedTab('sale')} >
                        For Sale
                    </h3>
                    <p className='break-keep flex flex-col ' >
                        <span className='break-keep '>
                            Residential Properties
                        </span>
                        <span className='break-keep'>
                            Commercial Properties
                        </span>

                    </p>
                </div>
                <div className='py-4'>
                    <h3 className={`font-bold text-3xl cursor-pointer
                    ${selectedTab === 'rent' ? 'text-blue-600' : 'text-black'}`} onClick={() => setSelectedTab('rent')}>
                        For Rent
                    </h3>
                    <p className='break-keep flex flex-col ' >
                        <span className='break-keep '>
                            Residential Properties
                        </span>
                        <span className='break-keep'>
                            Commercial Properties
                        </span>

                    </p>
                </div>

            </div>

            <div className='col-span-5 max-h-[350px] overflow-y-scroll py-2'>
            {
                selectedTab === 'sale' ? forSaleListings.map((listing, index) => (
                    <span key={index}>
                        <ListingCard
                        img={listing.img}
                        title={listing.title}
                        price={listing.price}
                        date={listing.date}
                        />
                    </span>
                )) : forRentListings.map((listing, index) => (
                    <span key={index}>
                        <ListingCard
                        img={listing.img}
                        title={listing.title}
                        price={listing.price}
                        date={listing.date}
                        />
                    </span>
                ))
            }
            </div>
        </div>
    )
}

export default AgentListings
