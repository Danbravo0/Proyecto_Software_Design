import {Card , Button} from 'react-bootstrap';
import React from 'react'
import { UsarCarritoCompras } from '../context/ShoppingCartContext.tsx'
import { FormatoPlata } from "../utilidades/FormatoPlata.ts";

type StoreItemProps = {
    id: Number
    id1: string
    categoria : string
    precio : Number
    urlImagen: string}

export function  StoreItem ({ id, id1,categoria, precio,urlImagen } : 
    StoreItemProps) {
    const { getItemQuantity,increaseCarritoQuantity,decreaseCarritoQuantity,removeFromCarrito} = UsarCarritoCompras()
    const cantidad = getItemQuantity(id)

    
    return (
        <Card className='h-100'>
          <Card.Img 
          variant="top"
          src={urlImagen}
          height = "250px"
          style = {{objectFit: "scale-down"}} />

        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className='fs-2 id1Tienda'>{id1}</span>
            <span className='ms-2 text-muted PrecioItemTienda'>{FormatoPlata(precio)}</span>
          </Card.Title>

          <div className = "mt-auto">

            {cantidad === 0 ? ( /*if cantidad = 0 es añadir a carrito else se crea cantidad y remover*/

              <Button className='w-100' onClick={() => increaseCarritoQuantity(id)}> Añadir a carrito</Button>
            
            ) : (

              <div className='d-flex align-items-center flex-column'style={{gap : ".5rem"}}> {/* Columna con todo centrado*/}

                <div className='d-flex align-items-center justify-content-center' style={{gap : ".5rem"}}> {/* Fila de arriba*/}
                  
                  <Button onClick={() => decreaseCarritoQuantity(id)} >-</Button>

                    <div>
                      <span className='fs-3'>{cantidad}</span> En el carrito
                    </div>

                  
                  <Button onClick={() => increaseCarritoQuantity(id)}>+</Button>
                
                </div>
                  <Button variant = "danger"size="sm" onClick={() => removeFromCarrito(id)}>Remover</Button>
              </div>

          )


        }
          </div>
        




          </Card.Body>
    </Card>
    )
}