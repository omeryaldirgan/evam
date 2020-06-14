import React from 'react'

const Fields=({id,label,value,onChange,fieldsType,onChangeSelect,fieldsRequired,onChangeCheckbox,dataType,name})=>(
    <div className='form-group'>
    <div className="field-1">
        <label>{label}</label>
        <div className="row">
        <div className="col-md-6">
            <input name={name} type={dataType} required={fieldsRequired} className="form-control"   value={value} onChange={onChange}  />
        </div>
        <div className="col-md-3">
        <select className="custom-select" value={fieldsType} onChange={onChangeSelect} >
            <option>Seçiniz</option>
            <option value="NUMBER">NUMBER</option>
            <option value="STRING">STRING</option>
        </select>
        </div>
        <div className="col-md-3" style={{display:'flex', alignItems:'center'}}>
            <div className="form-check">
            <input className="form-check-input" type="checkbox"  
                id={id}  value={fieldsRequired} 
                onChange={onChangeCheckbox} 
                defaultChecked={fieldsRequired}
            />
            <label className="form-check-label" htmlFor={id}>
                Required
            </label>
            </div>
        </div>
        </div>
    </div>
</div>
)

export default Fields;