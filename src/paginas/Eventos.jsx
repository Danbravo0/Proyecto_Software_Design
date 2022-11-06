import {Col, Row} from "react-bootstrap"
// import storeItems from "../data/items.json"
import { EventsItem } from "../components/EventsItem.tsx"
import React, { useEffect, useState } from "react";


export function Eventos() {

  const [eventsItems, setItems] = useState([]);
  const formio = 'https://hzfcvewuipmupiw.form.io/eventos/submission';
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
      <h1>Eventos</h1>
      <Row md={2} xs={1} lg={4} className="g-3">
        {eventsItems.map(item => (
          <Col key={item.id}>
            <EventsItem {...item["data"]} />
          </Col>
        ))}
      </Row>
    </div>
  )
}