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
  // console.log('storeItems', storeItems);
  // console.log('storeItems filter', storeItems.filter(item => item["data"].categoria === 'Postres'));
  // console.log('storeItems MAP', storeItems.map(item => item["data"].id * 2));
  

  useEffect(() => {
    pullJson();

  }, [])

  let bebestibles = storeItems.filter(item => item["data"].categoria === 'Bebestible');
  let carne = storeItems.filter(item => item["data"].categoria === 'Carne');
  let postres = storeItems.filter(item => item["data"].categoria === 'Postres');
  console.log('bebestibles', bebestibles);

  return (
    <div className = "container">
      <h1>Tienda</h1>
      <h2>Carne</h2>
      <Row md={2} xs={1} lg={4} className="g-3">
        {carne.map(item => (
          <Col key={item.id}>
            {/* <h2>ola{...item["data"]}</h2> */}
            <StoreItem {...item["data"]} />
          </Col>
        ))}
      </Row>

        <h2>Bebestibles</h2>
      <Row md={2} xs={1} lg={4} className="g-3">
        {bebestibles.map(item => (
          <Col key={item["data"].id}>
            {/* <h2>ola{...item["data"]}</h2> */}
            <StoreItem {...item["data"]} />
          </Col>
        ))}
      </Row>


      <h2>Postres</h2>
      <Row md={2} xs={1} lg={4} className="g-3">
        {postres.map(item => (
          <Col key={item.id}>
            {/* <h1>ola{...item["data"]}</h1> */}
            <StoreItem {...item["data"]} />
          </Col>
        ))}
      </Row>
    </div>
  )
}