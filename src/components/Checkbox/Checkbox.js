import React from 'react';

import './Checkbox.css';

const Checkbox = ({type, value, onChange, checked}) => (
    <label className='container'>
        <input type={type}
               value={value}
               checked={checked}
               onChange={onChange}/>
            <span className="checkmark mt-2" />
    </label>
);

export default Checkbox;
