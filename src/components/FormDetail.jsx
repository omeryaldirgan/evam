import React, { useState,useContext,useReducer} from 'react'
import {FormContext} from '../context/context';
import FormGroup from './FormGroup';
import FormFields from './FormFields';
import {slugify} from '../util/util'
const FormDetail=(props)=>{
    const {forms}=useContext(FormContext);
    const [key,setKey]=useState(localStorage.getItem('key'));
    const [name,setName]=useState(forms[key].name);
    const [description,setDescription]=useState(forms[key].description);

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),{ }
      );
    const handleChange = (type,e) => {
        const { name, value} = e.target;
        if(type=='STRING'){
            setUserInput({[name]: value.replace(/[^A-Za-z ]/gi, "")});
        }
        
    }
    return(
        <form className="offset-md-2 col-md-8">
            <FormGroup id="form_ismi" label="Form İsmi" value={name} onChange={(e)=>setName(e.target.value)}/>
            <FormGroup id="form_aciklama" label="Form Açıklaması" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            {
                forms[key].fields.map((item,inx)=>(
                    <FormFields
                        key={inx}
                        id={`check${inx}`}
                        label={item.name}
                        value={userInput[slugify(item.name)]}
                        name={slugify(item.name)}
                        fieldsRequired={item.required}
                        dataType={item.dataType == 'STRING' ? 'text':'number'}
                        onChange={(e)=>handleChange(item.dataType,e)}
                    />
                ))
            }
            <button  className="btn btn-info float-right">Güncelle</button>
        </form>
    )
}

export default FormDetail;
