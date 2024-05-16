import React from 'react'

const LocationInput = ({
    inputPlaceholder,
    inputName,
    onInputChange
}) => {
    return (
        <input

            name={inputName}
            placeholder={inputPlaceholder}
            type='text'
            className='py-1 xs:py-2 sm:py-4 px-2 rounded-lg w-full mb-2 border-t-4 border-r-2 border-l-2 border-[#c7deee] border-b-4'
            onChange={onInputChange}
        />
    )
}

export default LocationInput
