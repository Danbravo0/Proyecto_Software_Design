import {  Stack } from "react-bootstrap"
import { UsarCarritoCompras } from "../context/ShoppingCartContext.tsx"
import { FormatoPlata } from "../utilidades/FormatoPlata.ts";
import { CarritoItem } from "../components/CarritoItem.tsx"
import React, { useEffect, useState } from "react";
// import storeItems from "../data/items.json"

export function CarritoCompras() {
  const {itemsCarrito} = UsarCarritoCompras()

  const [storeItems, setItems] = useState([]);
  const formio = 'https://zzzeqquaxnnhddq.form.io/items/submission';
  function pullJson() {
      fetch(formio)
      .then(response => response.json())
      .then(data => {
          setItems(data);
      })
  }

  useEffect(() => {
    pullJson();

  }, [])
 
  

  return (
    <div>
      <h2>Carrito</h2>
        <Stack gap={3}>
          {itemsCarrito.map(item => (
            <CarritoItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {FormatoPlata(
              itemsCarrito.reduce((total, CarritoItem) => {
                const item = storeItems.find(i => i.data.id === CarritoItem.id)
                return total + (item?.data.precio || 0) * CarritoItem.cantidad
              }, 0)
              
            )}
          </div>
        </Stack>
    </div>

  )
}