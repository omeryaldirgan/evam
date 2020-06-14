import React, { useState,useContext } from 'react'
import {FormContext} from '../context/context';
import FormGroup from './FormGroup';
import Fields from './Fields';
const FormDetail=()=>{
    const {forms}=useContext(FormContext);
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');

    const [fields1,setFields1]=useState('');
    const [fields1Type,setFields1Type]=useState('');
    const [fields1Required,setfields1Required]=useState(true);

    const [fields2,setFields2]=useState('');
    const [fields2Type,setFields2Type]=useState('');
    const [fields2Required,setfields2Required]=useState(true);

    const [fields3,setFields3]=useState('');
    const [fields3Type,setFields3Type]=useState('');
    const [fields3Required,setfields3Required]=useState(false);
    
    
    return(
        <form>
            <FormGroup id="form_ismi" label="Form İsmi" value={name} onChange={(e)=>setName(e.target.value)}/>
            <FormGroup id="form_aciklama" label="Form Açıklaması" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <Fields
                id="check1"
                label="1.Sütun"
                value={fields1}
                onChange={(e)=>setFields1(e.target.value)}
                fieldsType={fields1Type}
                onChangeSelect={(e)=>setFields1Type(e.target.value)}
                fieldsRequired={fields1Required}
                onChangeCheckbox={(e)=>setfields1Required(e.target.checked ? true : false)}
            />
             <Fields
                id="check2"
                label="2.Sütun"
                value={fields2}
                onChange={(e)=>setFields2(e.target.value)}
                fieldsType={fields2Type}
                onChangeSelect={(e)=>setFields2Type(e.target.value)}
                fieldsRequired={fields2Required}
                onChangeCheckbox={(e)=>setfields2Required(e.target.checked ? true : false)}
            />
            <Fields
                id="check3"
                label="3.Sütun"
                value={fields3}
                onChange={(e)=>setFields3(e.target.value)}
                fieldsType={fields3Type}
                onChangeSelect={(e)=>setFields3Type(e.target.value)}
                fieldsRequired={fields3Required}
                onChangeCheckbox={(e)=>setfields3Required(e.target.checked ? true : false)}
            />
           
            <button type='submit' className="btn btn-info float-right">Güncelle</button>
        </form>
    )
}

export default FormDetail;
