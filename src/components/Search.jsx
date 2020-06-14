import React from 'react'
import {ReactComponent as Search} from '../icons/search.svg';
import {FormContext} from '../context/context';


class  SearchInput extends React.Component{
  static contextType = FormContext
  constructor(props){
    super(props);
    this.state={
      search:''
    }
    this.onHandleChange=this.onHandleChange.bind(this)
  }
  onHandleChange=(e)=>{
    this.setState({search:e.target.value})
    this.setState((prevState,prevProps)=>{
       return {search:prevState.search}
    },
    ()=>this.context.dispatch({type:'SEARCH',value:this.state.search})
    )
    
    //this.context.dispatch({type:'SEARCH',value:this.state.search})
  }
  render(){
    return(
      <div className="input-group mb-3">
        <input type="text" className="form-control" value={this.search} onChange={this.onHandleChange} />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2"><Search style={{height:18,width:18}}/></span>
        </div>
      </div>
    )

  }
}

export default SearchInput