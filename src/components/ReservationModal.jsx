import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
import imagen_feature_1 from "../resources/mesas.jpg";
import { Formioreservation } from '../components/Formioreservation';


export const Modal1 = () => {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div style={{marginTop: "122px", marginBottom: "122px" ,backgroundColor: "#dee1d1"}}>
    <div style={{ display: "flex", alignItems: "center",justifyContent:"center"}}>
    <div class="col-md-7">
        <Image className = "medidas-feature1" src ={imagen_feature_1} fluid="true" />
    </div>
      <div class="col-md-5" style={{ display: "flex", alignItems:"center",flexDirection:"column"}}>
      <h1 style={{marginTop: "auto", padding: "12px",textAlign: "center"}}> Reserva tu mesa aquí</h1>
      <p style={{textAlign: "center"}}> Escoge fecha y hora para tu reserva</p>
    
    <Button variant="primary" onClick={handleShow} style={{maxWidth:"50%"}}>
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

    </div>

      </div>
    </>
  );
}