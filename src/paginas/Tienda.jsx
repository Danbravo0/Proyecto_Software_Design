import {Col, Row} from "react-bootstrap"
// import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem.tsx"
import React, { useEffect, useState } from "react";


export function Tienda() {

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


  return (
    <div className = "container">
      <h1>Tienda</h1>
      <Row md={2} xs={1} lg={4} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item["data"]} />
          </Col>
        ))}
      </Row>
    </div>
  )
}