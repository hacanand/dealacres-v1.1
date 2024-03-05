import React from 'react'
import { hariyana, hisar, hisarProperty } from './Menu'
import LinkSection from './LinkSection'
const AgentLinks = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='py-2'>
                <h2 className='font-bold text-xl py-3'>Top Localities in Hisar </h2>
                <LinkSection data={hisar} />
            </div>
            <div >
                <h2 className='font-bold text-xl py-3'>PROPERTY DEALER IN HISAR </h2>
                <LinkSection data={hisarProperty} />
            </div>
            <div className='py-2'>
                <h2 className='font-bold text-xl py-3'>REAL ESTATE AGENT IN HARYANA </h2>
                <LinkSection data={hariyana} />
            </div>
        </div>
    )
}

export default AgentLinks