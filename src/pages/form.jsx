import React from 'react';
import FormContextProvider from '../context/context';
import FormDetail from '../components/FormDetail';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Form() {
  return (
    <div>
      <Container>
          <FormContextProvider>
            <Link to={`/`} >Anasayfa</Link>
            <FormDetail/>
          </FormContextProvider>
      </Container>
    </div>
  );
}
export default Form;
