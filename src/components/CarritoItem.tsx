import { Button, Stack } from "react-bootstrap"
import { UsarCarritoCompras } from "../context/ShoppingCartContext.tsx"
// import storeItems from "../data/items.json"
import React, { useEffect, useState } from "react";
import { FormatoPlata } from "../utilidades/FormatoPlata.ts";

type CarritoItemProps = {
  id: number
  cantidad: number
}

export function CarritoItem(  { id, cantidad }: CarritoItemProps) {
  const { removeFromCarrito } = UsarCarritoCompras()

  const [storeItems, setItems] = useState([]);
  const formio = 'https://hzfcvewuipmupiw.form.io/items/submission';
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


  const item = storeItems.find(i => i.data.id === id)
  if (item == null) return null

  return (
    <div>
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.data.urlImagen}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt = "cargando"
      />
      <div className="me-auto">
        <div>
          {item.data.nombreItem}{" "}
          {cantidad > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{cantidad}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {FormatoPlata(item.data.precio)}
        </div>
      </div>
      <div> {FormatoPlata(item.data.precio * cantidad)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCarrito(item.data.id)}
      >
        &times;
      </Button>
    </Stack>
    </div>
  )
}