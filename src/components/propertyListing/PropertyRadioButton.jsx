'use client';
import { useState } from 'react';
const PropertyRadioButton = () => {

    const [cornerShop, setCornerShop] = useState('');
    const [isMainRoadFacing, setIsMainRoadFacing] = useState('')
    const [washRoom, setWashRoom] = useState('')
    const [pantry, setPantry] = useState('')

    const handleRadioChange = (event) => {
        setCornerShop(event.target.value);
    };
    const handleRadioChangeRoad = (e) => {
        setIsMainRoadFacing(e.target.value);
    }
    const handleRadioChangeWash = (e) => {
        setWashRoom(e.target.value);
    }
    const handleRadioChangePantry = (e) => {
        setPantry(e.target.value);
    }
    return (
        <div className='my-4'>
            <div className='flex flex-row gap-4 '>
                <p>Corner Shop</p>
                <label>
                    <input
                        type="radio"
                        value="yes"
                        checked={cornerShop === 'yes'}
                        onChange={handleRadioChange}
                    />
                    Yes
                </label>
                <label>
                    <input
                        type="radio"
                        value="no"
                        checked={cornerShop === 'no'}
                        onChange={handleRadioChange}
                    />
                    No
                </label>
            </div>
            <div className='flex flex-row gap-4  mt-3'>
                <p>Is Main Road Facing</p>
                <label>
                    <input
                        type="radio"
                        value="yes"
                        checked={isMainRoadFacing === 'yes'}
                        onChange={handleRadioChangeRoad}
                    />
                    Yes
                </label>
                <label>
                    <input
                        type="radio"
                        value="no"
                        checked={isMainRoadFacing === 'no'}
                        onChange={handleRadioChangeRoad}
                    />
                    No
                </label>
            </div>
            <div className='flex flex-row gap-4 mt-3'>
                <p>Personal Washroom</p>
                <label>
                    <input
                        type="radio"
                        value="yes"
                        checked={washRoom === 'yes'}
                        onChange={handleRadioChangeWash}
                    />
                    Yes
                </label>
                <label>
                    <input
                        type="radio"
                        value="no"
                        checked={washRoom === 'no'}
                        onChange={handleRadioChangeWash}
                    />
                    No
                </label>
            </div>
            <div className='flex flex-row gap-4 mt-3'>
                <p>Pantry/ Cafeteria</p>
                <label>
                    <input
                        type="radio"
                        value="yes"
                        checked={pantry === 'yes'}
                        onChange={handleRadioChangePantry}
                    />
                    Yes
                </label>
                <label>
                    <input
                        type="radio"
                        value="no"
                        checked={pantry === 'no'}
                        onChange={handleRadioChangePantry}
                    />
                    No
                </label>
            </div>
        </div>
    )
}

export default PropertyRadioButton