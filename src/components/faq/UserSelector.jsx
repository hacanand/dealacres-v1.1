import React from 'react'
import Select from 'react-select'

const UserSelector = ({
    value,
    onChange
}) => {

    const options = [
       {
        value: "user",
        label: "User"
       },
       {
        value: "owner",
        label: "Owner"
       },
       {
        value: "agent",
        label: "Agent"
       },
       {
        value: "dealer",
        label: "Dealer"
       },
    ]
    
  return (
    <div>
      <Select
      placeholder="User Type"
        options={options}
        isClearable
        value={value}
        onChange = {(value) => onChange(value)}
      />
    </div>
  )
}

export default UserSelector


