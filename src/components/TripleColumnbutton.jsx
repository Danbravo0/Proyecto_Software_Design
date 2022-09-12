import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imagen_col_1 from "../resources/eventos 1.jpg";
import imagen_col_2 from "../resources/comida.jpg";
import imagen_col_3 from "../resources/Bebida.jpg";
import Image from 'react-bootstrap/Image'

export function TripleColumnbutton() {
  return (
    <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Image src={imagen_col_1} roundedCircle="true" />
      
      <Card.Body>
        <Card.Title>Eventos</Card.Title>
        <Card.Text>
        Revisa nuestro calendario de eventos!
        </Card.Text>
        
        <Button variant="primary">Ver detalles »</Button>
      </Card.Body>
    </Card>
    </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Image  src={imagen_col_2} roundedCircle="true"  />
      <Card.Body>
        <Card.Title>Comida</Card.Title>
        <Card.Text>
        Exquisita comida típica chilena
        </Card.Text>
        <Button variant="primary">Ver detalles »</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Image src={imagen_col_3} roundedCircle="true" width = "80%" />
      <Card.Body>
        <Card.Title>Bebida</Card.Title>
        <Card.Text>
        Porque no hay buena comida sin bebidas
        </Card.Text>
        <Button variant="primary">Ver detalles »</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
  );
}
