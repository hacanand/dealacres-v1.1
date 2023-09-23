import React from 'react'




const PostHeader = ({
    heading,
    align,
    size,
    style
}) => {

    let textStyle = ''
    switch(style){
        case 'italic':
            textStyle = 'italic underline'
            break;
        default:
            textStyle = 'not-italic';
            break;
    }
  return (
    <div className={` py-4 font-medium
        ${align === 'center' ? 'text-center' : 'text-left'}
        ${size === 'small' && 'text-lg'}
        ${size === 'medium' && 'text-3xl'}
        ${size === 'large' && 'text-4xl'}
        ${textStyle}
    `}>
        {heading}
    </div>
  )
}

export default PostHeader
