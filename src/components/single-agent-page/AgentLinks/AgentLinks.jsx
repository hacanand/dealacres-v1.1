import React from 'react'
import { hariyana, hisar, hisarProperty } from './Menu'
import LinkSection from './LinkSection'
const AgentLinks = () => {
    return (
        <div className='flex flex-row md:flex-col overflow-x-auto gap-5 max-h-[400px] md:max-h-[600px] overflow-y-auto'>
            <div className='min-w-[60%]'>
                <div className='py-2'>
                    <h2 className='font-bold text-xl py-3'>Top Localities in Hisar </h2>
                    <LinkSection data={hisar} />
                </div>

            </div>
            <div className='min-w-[60%]'>
                <div >
                    <h2 className='font-bold text-xl py-3'>PROPERTY DEALER IN HISAR </h2>
                    <LinkSection data={hisarProperty} />
                </div>

            </div>
            <div className='min-w-[60%]'>
                <div className='py-2'>
                    <h2 className='font-bold text-xl py-3'>REAL ESTATE AGENT IN HARYANA </h2>
                    <LinkSection data={hariyana} />
                </div>

            </div>



        </div>
    )
}

export default AgentLinks