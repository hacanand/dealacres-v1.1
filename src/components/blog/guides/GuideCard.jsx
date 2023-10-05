import Image from 'next/image';
import React from 'react'
import styles from './styles.module.css'


const GuideCard = ({
    title,
    bgColor,
    borderColor,
    img,
    textColor,
    variableWidth
}) => {

    // let bgColor = `bg-${theme}-300`;
    // let borderColor = `border-l-${theme}-600`;
    // let textColor = `text-${theme}-600`;

    // switch(theme) {
    //     case 'orange':
    //         bgColor = "bg-orange-100";
    //         borderColor = "border-l-orange-300";
    //         textColor = "text-orange-300";
    //         break;
    //     case 'yellow':
    //         bgColor = "bg-amber-100";
    //         borderColor = "border-l-amber-300";
    //         textColor = "text-amber-300";
    //         break;
    //     case 'green':
    //         bgColor = "bg-lime-100";
    //         borderColor = "border-l-lime-300";
    //         textColor = "text-lime-300";
    //         break;
    //     case 'purple':
    //         bgColor = "bg-purple-100";
    //         borderColor = "border-l-purple-300";
    //         textColor = "text-purple-300";
    //         break;
    //     case 'blue':
    //         bgColor = "bg-sky-100";
    //         borderColor = "border-l-sky-300";
    //         textColor = "text-sky-300";
    //         break;
    //   }



    const noOfWordsInTitle = title.split(' ').length;
  


    return (
        <div className={`${!variableWidth ? styles.guideCard : 'w-full h-full' } col-span-1 flex flex-col gap-8 items-center shadow-lg bg-${bgColor} border-l-[14px] border-l-${borderColor} py-2 px-3`}
            style={{
                backgroundColor: bgColor,
                borderLeftColor: borderColor
            }}
        >
            <div className='font-bold text-3xl py-2 '>
                {
                    title.split(' ').map((word, index) => {
                        if (index == noOfWordsInTitle - 1) {
                            return ""
                        } else {
                            return word + " "
                        }
                    }
                    )
                }
                <br />
                <span className={``} style={{
                    color: textColor
                }}>
                    {
                        title.split(' ')[noOfWordsInTitle - 1]
                    }
                </span>
            </div>

            <Image src={`/guides/${img}`} alt={title} width={80} height={50} className='w-[100px] ' />
        </div>
    )
}

export default GuideCard
