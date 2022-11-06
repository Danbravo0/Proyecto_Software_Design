import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
import Form from 'react-formio';
import { Formioreservation } from '../components/Formioreservation';


export const Modal2 = () => {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div style={{marginTop: "122px", marginBottom: "122px"}}>
    <h1 style={{textAlign: "right"}}> Reserva tu mesa aquí</h1>
    <p style={{textAlign: "right"}}> Escoge fecha y hora para tu reserva</p>
      <Button variant="primary" onClick={handleShow} style={{float: 'right'}}>
        Reserva aquí »
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Formioreservation/> 


        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer> */}
      </Modal>
      </div>
    </>
  );
}