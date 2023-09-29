import React from 'react'
import Select from 'react-select'

const CallingTimeSelector = ({
    value,
    onChange
}) => {

    const options = [
       {
        value: "9:00 - 5: 00",
        label: "9:00 - 5: 00",
        
       },
       {
        value: "5:00 - 11:00",
        label: "5:00 - 11:00",
    
       },
       {
        value: "12:00 - 12:00",
        label: "Anytime"
       }
    ]
    
  return (
    <div>
      <Select
      placeholder="Preffered Calling Time"
        options={options}
        isClearable
        value={value}
        onChange = {(value) => onChange(value)}
      />
    </div>
  )
}

export default CallingTimeSelector


