import React,{useState,useContext,useRef,useEffect} from 'react'
import {ReactComponent as Search} from '../icons/search.svg';
import {FormContext} from '../context/context';



const SearchInput=()=>{
  const [search,setSearch]= useState('');
  const { dispatch } = useContext(FormContext);

   
  const changeInput=(e)=>{
    setSearch(e.target.value);
    console.log('->'+search);
    //dispatch({type:'SEARCH',value:search});
  }
  
  return(
  <div className="input-group mb-3">
    <input type="text" className="form-control" value={search}  onChange={changeInput}/>
    <div className="input-group-append">
      <span className="input-group-text" id="basic-addon2"><Search style={{height:18,width:18}}/></span>
    </div>
  </div>
)}
export default SearchInput