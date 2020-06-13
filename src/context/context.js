import React, {createContext,useReducer,useEffect} from 'react';
import {formReducer} from '../reducers/formReducer'
export const FormContext =createContext();


const FormContextProvider=(props)=>{
   const [forms,dispatch]=useReducer(formReducer,[],()=>
   {
       const localData=localStorage.getItem('forms');
       return localData ? JSON.parse(localData): [];
   });
   useEffect(()=>{
    localStorage.setItem('forms',JSON.stringify(forms))
   },[forms])
    return (
        <FormContext.Provider value={{forms,dispatch}}>
            {props.children}
        </FormContext.Provider>
    )

}


export default FormContextProvider;