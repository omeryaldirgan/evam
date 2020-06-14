import React,{useContext} from 'react';
import AddModal from './AddModal'
import Search from './Search'
import {FormContext} from '../context/context';

const Navbar=()=>{
    const {forms}=useContext(FormContext);
    return(
      <div style={{marginTop:20}}>
        <h1 className='text-center'></h1>
        <div className='row'>
            <div className='col'><Search/></div>
            <div className='col'><AddModal/></div>
        </div>
      </div>
      
    );
}
export default Navbar;