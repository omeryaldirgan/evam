import React from 'react'
import {Modal} from 'react-bootstrap';
import AddForm from './AddForm'
function AddModal() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button type="button" className="btn btn-dark float-right" onClick={handleShow}>Yeni Form Oluştur</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Yeni Form Oluştur</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddForm handleClose={handleClose}/></Modal.Body>
      </Modal>
    </div>
  );
}
  export default AddModal;