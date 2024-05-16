import React from 'react'

const OuterWrapper = ({
    children
}) => {
  return (
    <section className='
    flex flex-col md:flex-row 
    md:px-4 
    items-start justify-center 
    md:gap-20 
    md:container mx-auto md:my-10 
    overflow-auto'>


        {children}
    </section>
  )
}

export default OuterWrapper
