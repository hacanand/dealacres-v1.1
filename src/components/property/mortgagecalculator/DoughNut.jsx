import React, { useEffect, useRef, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughNut = ({
    dProps,
    mortgage,
    setIsLoading
}) => {
    const { amount, downpayment, r: roi, n: tenure, pTax: tax, insurance, pmi } = dProps;




    const data = {
        labels: ['Principal', 'Interest', 'Home Insurance', 'PMI'],
        position: 'right',
        datasets: [
            {
                label: "",
                data: [amount, roi, insurance, pmi],
                backgroundColor: [
                    '#ffcdd2',
                    '#9575cd',
                    '#81d4fa',
                    '#dce775'
                ],
                borderColor: [
                    '#ffcdd2',
                    '#9575cd',
                    '#81d4fa',
                    '#dce775'
                ],
                borderWidth: 1
            }
        ]



    }



    const options = {
        cutout: '75%',
        radius: '100%',
        plugins: {
            legend: {
                position: 'right',
                display: false,
                labels: {
                    render: 'label',
                    arc: true,
                    position: 'bottom',
                    align: 'end',
                    justify: 'end', // Set the align property to 'start' to move labels to the right
                    color: 'black',

                    font: {
                        weight: 'bold'
                    }
                },
            },

            title: {
                text: "Title Value",
                align: 'center',
                position: 'inside',
                display: true,

            },



        }
    };

    const [isChartRendered, setIsChartRendered] = useState(false)
    const chartRef = useRef(null)



    useEffect(() => {
        if (chartRef.current) {
            setIsChartRendered(true);
        }
    }, [])

    useEffect(() => {
        if (isChartRendered) {
            setIsLoading(false)
        } else {
            setIsLoading(true)
        }
    }, [isChartRendered])

    console.log(isChartRendered)


    return (
        <div className='relative flex justify-between gap-4 flex-row items-center md:items-start '>

            {(!isChartRendered || ((!amount && !insurance && !roi && !pmi))) &&
                <div className="absolute inset-0   flex items-center justify-center text-black font-bold text-2xl">
                    Please Enter Your Data
                </div>}

            <div className="max-h-[150px] md:max-h-[250px]  max-w-[200px]  md:max-w-[250px] relative ">

                <Doughnut ref={chartRef} data={data} options={options} />

                <div className="absolute top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2 text-xl font-bold text-center">
                    {!isNaN(Number(mortgage)) &&
                        `₹${Math.ceil(mortgage).toLocaleString('en-IN')} Per Month`
                    }
                </div>
            </div>
            {isChartRendered && (amount && insurance && roi && pmi) && <div className=" self-center bg-neutral-200/50 right-4 top-[50%] flex flex-col gap-2 px-2 md:px-4 w-full">
                {data.labels.map((label, i) => {
                    return (
                        <p className="flex flex-row gap-2 md:gap-8 border-b border-b-gray-400 py-2 text-sm justify-between items-center" key={i}>
                            <div className='flex flex-row items-center justify-center gap-2'>
                                
                            <div className=' min-h-[30px] min-w-[30px]' style={{
                                borderColor: data.datasets[0].backgroundColor[i],
                                borderWidth: '3px',
                                borderStyle: 'solid',
                                borderRadius: '100%'
                            }}></div>{label}
                            </div>
                            <span className="">₹ {" "} {data.datasets[0].data[i]}</span>
                        </p>
                    )
                })}
            </div>}

        </div>
    )
}

export default DoughNut
