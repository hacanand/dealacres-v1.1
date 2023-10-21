import React from 'react'
import { emiData } from './emiData'
import EmiFeatureListItem from '@/components/emi/EmiFeatureListItem'
import ArticleSlider from '@/components/faq/ArticleSlider'
import EmiBanner from '@/components/emi/EmiBanner'
import EmiCalculator from '@/components/emi/EmiCalculator'
const page = () => {
    return (
        <div>
            <EmiBanner/>
            <div className='max-w-screen-lg mx-auto py-4 px-4  '>
               <EmiCalculator/>

            </div>
            <div className='max-w-screen-lg mx-auto py-4 px-4  '>
                <div className='py-4'>
                    <h2 className='font-bold text-4xl py-2 '>
                        Benefits of Using a Home Loan Affordability Calculator
                    </h2>
                    <h4 className=''>
                        Affordability calculators come with several benefits. Some of them have been listed below:
                    </h4>
                </div>
                <div className='flex flex-col gap-4 py-2'>
                    {
                        emiData.benefitsFeatures.map((feature, index) => {
                            return (
                                <div key={index}>
                                    <EmiFeatureListItem label={feature.label} text={feature.text} img={feature.img} />
                                </div>
                            )
                        })
                    }

                </div>

            </div>
            <div className='max-w-screen-lg mx-auto py-4 px-4 flex flex-col gap-4 '>
                <div className='py-4'>
                    <h2 className='font-bold text-4xl py-2 '>
                        Factors that Affect Home Loan Affordability
                    </h2>
                    <h4 className='font-bold text-lg py-2'>
                        There is a specific reason why affordability calculators ask for information related to your finances. It is simply because all those things impact your affordability.
                    </h4>
                </div>
                <div className='flex flex-col gap-4 py-2'>
                    {
                        emiData.benefitsFeatures.slice(0, 3).map((feature, index) => {
                            return (
                                <div key={index}>
                                    <EmiFeatureListItem label={feature.label} text={feature.text} img={feature.img} />
                                </div>
                            )
                        })
                    }

                </div>


                <p className='font-bold text-lg py-4'>
                    Certain other factors also affect an individual’s affordability. The calculator does not consider these things, but they play an important role in getting a home loan approval. They affect your affordability, and thus, it’s important to be aware of them.
                </p>

                <div className='flex flex-col gap-4 py-2'>
                    {
                        emiData.benefitsFeatures.slice(3,).map((feature, index) => {
                            return (
                                <div key={index}>
                                    <EmiFeatureListItem label={feature.label} text={feature.text} img={feature.img} />
                                </div>
                            )
                        })
                    }

                </div>



            </div>
            <div className='max-w-screen-lg mx-auto py-4 px-4 '>

                <h2 className='font-bold py-4 text-4xl'>
                    EMI Calculator related Articles
                </h2>
               
                        <ArticleSlider/>



            </div>
        </div>
    )
}

export default page
