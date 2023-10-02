"use client"

import useCountries from '@/app/hooks/useCountries'
import React from 'react'
import Select from 'react-select'

const CountrySelect = ({
    value,
    onChange,
    required,
    errors,
    id,
    register,
    requireMessage,
    pattern
}) => {

    

    const {getAll} = useCountries();
    console.log(errors)

    return (
        <div>
             <Select
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value)}
        {...register(id, { required: (requireMessage ? requireMessage : ''),
                pattern: (pattern ? {
                  value: (pattern),
                  message: (requireMessage ? requireMessage : 'Enter valid details.')
                }: {}) 
              })}
        formatOptionLabel={(option) => (
          <div className={`
          flex flex-row items-center  z-10 bg-white `}>
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">
                {option.callingCode} 
              </span>
            </div>
          </div>
        )}
        classNames={{
          control: () => `${errors[id] ? 'border-rose-500' : 'border-slate-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-slate-600'} border-2`,
          input: () => 'text-lg',
          option: () => 'text-lg'
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6'
          }
        })}
      />

        </div>
    )
}

export default CountrySelect
