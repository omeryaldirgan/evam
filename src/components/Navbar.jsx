import React,{useContext} from 'react';
import AddModal from './AddModal'
import Search from './Search'
import {FormContext} from '../context/context';

const Navbar=()=>{
    const {forms}=useContext(FormContext);
    return(
      <div>
        <h1 className='text-center'>Evam Frontend Projesi</h1>
        <div className='row'>
            <div className='col'><Search/></div>
            <div className='col'><AddModal/></div>
        </div>
      </div>
      
    );
}
export default Navbar;