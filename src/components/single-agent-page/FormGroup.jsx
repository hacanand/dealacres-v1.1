import React from 'react'

const FormGroup = ({
    register,
    id,
    required,
    labelValue,
    type = "text",
    errors,
    requiredMessage
}) => {

  return (
    <div className='flex items-start flex-col py-1 sm:py-2 min-w-full'>
            <label htmlFor={id} className='text-xs xs:text-base md:text-lg'>
                {labelValue}
            </label>
            <input
            className='bg-[#D8E6FE] py-1 xs:py-2 text-sm sm:text-base  px-2 xs:px-4 rounded shadow hover:outline-blue-500 w-full'
             type={type} id={id} {...register(id, {required: requiredMessage})} />

             {
                errors[id] && <div className='w-full border border-rose-600 py-1 xs:py-2 text-xs xs:text-base md:text-lg text-rose-600  px-2 xs:px-4 rounded shadow'>
                    {errors[id].message}
               </div>
             }
    </div>
  )
}

export default FormGroup
