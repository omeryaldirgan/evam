import React from 'react'

const FormFields=({label,value,onChange,fieldsRequired,dataType,name,onKeyPress})=>{
return(
    <div className='form-group'>
    <div className="field-1">
        <label>{label}</label>
        <div className="row">
        <div className="col-md-6">
         <input onKeyPress={onKeyPress} name={name} type={dataType} required={fieldsRequired} className="form-control"   value={value} onChange={onChange}/>  
        </div>
        </div>
    </div>
</div>
)
}
export default FormFields;