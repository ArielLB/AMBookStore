import React, { useState } from 'react';

const RadioBox = ({ prices, handleFilters }) => {
    const [value, setValue] = useState(0);

    const handleChange = (e) => {
        handleFilters(e.target.value);
        setValue(e.target.value);
    };

    return prices.map((p, i) => (
        < div key={i} >
            <input
                type="radio"
                className='mr-2 ml-4'
                onChange={handleChange}
                value={`${p._id}`}
                name={p}
            />
            <label className='form-check-label'>{p.name}</label>
        </div >
    ))
}

export default RadioBox;
