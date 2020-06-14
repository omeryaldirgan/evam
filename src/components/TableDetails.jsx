import React,{useContext} from 'react';
import {FormContext} from '../context/context';
import {withRouter,useParams} from 'react-router-dom'
import {slugify} from '../util/util'
const TableDetails=({list,index,history,match})=>{
    const { dispatch } = useContext(FormContext);
    const linkUrl='forms/'+slugify(list.name);
    return(
        <tr className='table_tr' >
            <th onClick={() => dispatch({ type: 'REMOVE_FORM', name: list.name })}scope="row">{index}</th>
            <td>{list.name}</td>
            <td>{list.description}</td>
            <td>{list.createdAt}</td>
            <td><button type="button" className="btn btn-light" onClick={()=>history.push(`${match.url}${linkUrl}`)}>Detay</button></td>
        </tr>
    )
}
export default withRouter(TableDetails);