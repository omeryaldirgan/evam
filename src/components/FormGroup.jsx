import React from 'react'
const FormGroup=({id,label,value,onChange})=>(
    <div className="form-group">
    <label htmlFor={id}>{label}</label>
        <input type="text" id={id}   className="form-control"  value={value} onChange={onChange}  />
    </div>
)

export default FormGroup;