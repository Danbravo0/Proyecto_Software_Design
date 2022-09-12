import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export const Modal2 = () => {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div style={{marginTop: "122px"}}>
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

        <Form>
        <Form.Group className="mb-3" controlId="formBasicName2">
        <Form.Label>Nombre </Form.Label>
        <Form.Control type="Name" placeholder="Ingrese Nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail2">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNumPersonas">
        <Form.Label>Numero de personas</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Elegir numero de personas</option>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         <option value="6">6</option>
         <option value="7">7</option>
         <option value="8">8</option>
         <option value="9">9</option>
         </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formHora">
        <Form.Label>Hora</Form.Label>
        <Form.Control type="Hora" placeholder="Ingrese hora para la reserva" />
      </Form.Group>

      <Form.Group controlId="duedate">
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="date" name="duedate" placeholder="Due date" />
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