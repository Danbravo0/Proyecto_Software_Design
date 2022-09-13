import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imagen_col_1 from "../resources/eventos 1.jpg";
import imagen_col_2 from "../resources/comida.jpg";
import imagen_col_3 from "../resources/Bebida.jpg";
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom"

export function TripleColumnbutton() {
  return (
    <Container className='container-medidas'>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }} className = "medidas-card">
      <Image src={imagen_col_1} roundedCircle="true" />
      
      <Card.Body>
        <Card.Title>Eventos</Card.Title>
        <Card.Text>
        Revisa nuestro calendario de eventos!
        </Card.Text>
        <Link to="/eventos">
        <Button variant="primary">Ver Eventos »</Button>
        </Link>
      </Card.Body>
    </Card>
    </Col>
        <Col>
        <Card style={{ width: '18rem' }} className = "medidas-card">
      <Image  src={imagen_col_2} roundedCircle="true"  />
      <Card.Body>
        <Card.Title>Comida</Card.Title>
        <Card.Text>
        Exquisita comida típica chilena
        </Card.Text>
        <Link to="/comida">
        <Button variant="primary">Ver Comida »</Button>
        </Link>

      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }} className = "medidas-card">
      <Image src={imagen_col_3} roundedCircle="true" width = "80%" />
      <Card.Body>
        <Card.Title>Bebida</Card.Title>
        <Card.Text>
        Porque no hay buena comida sin bebidas
        </Card.Text>
        <Link to="/bebidas">
        <Button variant="primary">Ver Bebidas »</Button>
        </Link>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
  );
}
