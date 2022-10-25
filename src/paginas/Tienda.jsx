import {Col, Row} from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem.tsx"


export function Tienda() {
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