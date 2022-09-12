import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export const Modal1 = () => {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div style={{marginTop: "122px"}}>
    <h1> Puedes inscribirte al newsletter aquí</h1>
    <p > No te pierdas ninguna noticia</p>
      <Button variant="primary" onClick={handleShow}>
        Inscribirte al Newsletter »
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inscripción al newsletter</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="Name" placeholder="Ingrese Nombre" />
      </Form.Group>
        </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}