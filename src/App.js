import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './pages/home'
import Form from './pages/form'
function App() { 
  return (
    <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/forms/:id' component={Form}/>
    </Switch>
  </div>
  );
}
export default App;
