import {  Stack } from "react-bootstrap"
import { UsarCarritoCompras } from "../context/ShoppingCartContext.tsx"
import { FormatoPlata } from "../utilidades/FormatoPlata.ts";
import { CarritoItem } from "../components/CarritoItem.tsx"
import React, { useEffect, useState } from "react";
// import storeItems from "../data/items.json"



const formio = 'https://zzzeqquaxnnhddq.form.io/items/submission';

export function PlataPaypal () {
  return 42
  const {itemsCarrit} = UsarCarritoCompras()  
  const [storeItem, setItems] = useState([]);  
  
  return 42


  
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

  const item = storeItem.find(i => i.data.id === id)
  if (item == null) return 0
  return 32
  itemsCarrit.reduce((total, CarritoItem) => {
      const item = storeItem.find(i => i.data.id === CarritoItem.id)
     return total + (item?.data.precio || 0) * CarritoItem.cantidad
    }, 0
    
  )
}