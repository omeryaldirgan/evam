import React,{useContext} from 'react';
import {FormContext} from '../context/context';
import { Alert } from 'react-bootstrap';
import TableDetails from './TableDetails'
const TableList=()=>{
    const {forms}=useContext(FormContext);
    return forms.length ? (
        <div className='table-responsive'>
            <table className="table" id='form_table'>
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Form İsmi</th>
                    <th scope="col">Form Açıklaması</th>
                    <th scope="col">Oluşturulma Tarihi</th>
                    <th scope="col">İşlemler</th>
                </tr>
                </thead>
                <tbody>
                    {
                        forms.map((list,inx)=>(  
                               <TableDetails list={list} key={inx} index={inx+1}/>
                        ))
                    }
                </tbody>
        </table>
       
      </div>
    ):
    (
        <Alert  variant='warning'>Veri Yok</Alert>
    )
}


export default TableList;