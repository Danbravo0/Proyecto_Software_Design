import {Card , Button} from 'react-bootstrap';
import React from 'react'
import { UsarCarritoCompras } from '../context/ShoppingCartContext.tsx'
import { FormatoPlata } from "../utilidades/FormatoPlata.ts";

type EventsItemProps = {
    id: Number
    nombreEvento: string
    fecha : string
    hora : string
    urlImagen: string
    urlInstagram: string}

export function  EventsItem ({ id, nombreEvento,fecha, hora,urlImagen,urlInstagram } :
    EventsItemProps) {


    
    return (
        <Card className='h-100'>
          <Card.Img 
          variant="top"
          src={urlImagen}
          height = "250px"
          style = {{objectFit: "scale-down"}} />

        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <div className='fs-4 center m-auto'>{nombreEvento}</div>
            {/* <span className='ms-2 text-muted PrecioItemTienda'>{fecha}</span> */}
          </Card.Title>

          <div className = "mt-auto">


              <div className='d-flex align-items-center flex-column text-muted'style={{gap : ".5rem"}}> {/* Columna con todo centrado*/}
                    {fecha} {hora} <br/><br/>
                <div className='d-flex align-items-center justify-content-center' style={{gap : ".5rem"}}> {/* Fila de arriba*/}

                <div>
                <Button className='fs-10' href = {urlInstagram} target="_blank">Ir a post de Instagram</Button> 
                </div>


                                
                
                </div>
                </div>
                </div>
        




          </Card.Body>
    </Card>
    )
}