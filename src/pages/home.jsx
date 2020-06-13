import React from 'react';
import FormContextProvider from '../context/context';
import Navbar from '../components/Navbar'
import TableList from '../components/TableList'
import {Container} from 'react-bootstrap';
function Home() {
  return (
    <div>
      <Container>
          <FormContextProvider>
            <Navbar/>
            <TableList />
          </FormContextProvider>
      </Container>
    </div>
  );
}
export default Home;
