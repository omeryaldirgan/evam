import React, { useState,useContext,useEffect } from 'react'
import {FormContext} from '../context/context';
import FormGroup from './FormGroup';
import Fields from './Fields';
import {slugify} from '../util/util'
const FormDetail=(props)=>{
    const {forms}=useContext(FormContext);
    const [key,setKey]=useState(localStorage.getItem('key'));
    const [name,setName]=useState(forms[key].name);
    const [description,setDescription]=useState(forms[key].description);
    
    const onHandleChange=(event)=>{
        const a=event.target.value
        console.log(a);
    } 
    return(
        <form>
            <FormGroup id="form_ismi" label="Form İsmi" value={name} onChange={(e)=>setName(e.target.value)}/>
            <FormGroup id="form_aciklama" label="Form Açıklaması" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            {
                forms[key].fields.map((item,inx)=>(
                    <Fields
                        key={inx}
                        id={`check${inx}`}
                        label={item.name}
                        fieldsRequired={item.required}
                        dataType={item.dataType == 'STRING' ? 'text':'number'}
                        onChange={onHandleChange}
                    />
                ))
            }
            <button type='submit' className="btn btn-info float-right">Güncelle</button>
        </form>
    )
}

export default FormDetail;
